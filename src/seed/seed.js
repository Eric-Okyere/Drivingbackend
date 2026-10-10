/**
 * Seeds the database with:
 *  - the full lesson + question bank (Beginner / Intermediate / Advanced)
 *  - one bootstrap admin account (from ADMIN_EMAIL / ADMIN_PASSWORD in .env)
 *
 * Safe to re-run: lessons are matched by slug and replaced, not duplicated.
 * Usage: npm run seed
 */
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const connectDB = require('../config/db');
const Lesson = require('../models/Lesson');
const Question = require('../models/Question');
const User = require('../models/User');
const lessonsData = require('./data/lessons');

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

async function seedLessons() {
  let lessonCount = 0;
  let questionCount = 0;

  for (const entry of lessonsData) {
    const { questions, ...lessonFields } = entry;
    const slug = slugify(lessonFields.title);

    const lesson = await Lesson.findOneAndUpdate(
      { slug },
      { ...lessonFields, slug },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    lessonCount += 1;

    // Replace this lesson's questions cleanly on every seed run.
    await Question.deleteMany({ lesson: lesson._id });

    const questionDocs = (questions || []).map((q) => ({
      ...q,
      lesson: lesson._id,
      category: lesson.category,
    }));
    if (questionDocs.length) {
      await Question.insertMany(questionDocs);
      questionCount += questionDocs.length;
    }

    console.log(`  seeded lesson: [${lesson.category}] ${lesson.title} (${questionDocs.length} questions)`);
  }

  return { lessonCount, questionCount };
}

async function seedAdmin() {
  const email = (process.env.ADMIN_EMAIL || 'admin@drivingschool.com').toLowerCase();
  const password = process.env.ADMIN_PASSWORD || 'ChangeMe123!';

  let admin = await User.findOne({ email });
  if (admin) {
    if (admin.role !== 'admin') {
      admin.role = 'admin';
      await admin.save();
      console.log(`  upgraded existing user ${email} to admin`);
    } else {
      console.log(`  admin account already exists: ${email}`);
    }
    return admin;
  }

  const passwordHash = await bcrypt.hash(password, 10);
  admin = await User.create({
    name: 'Co-Owner Admin',
    email,
    passwordHash,
    role: 'admin',
  });
  console.log(`  created admin account: ${email} (password from ADMIN_PASSWORD in .env)`);
  return admin;
}

async function run() {
  console.log('[seed] connecting to MongoDB...');
  await connectDB();

  console.log('[seed] seeding lessons + questions...');
  const { lessonCount, questionCount } = await seedLessons();

  console.log('[seed] seeding admin account...');
  await seedAdmin();

  console.log(`[seed] done. ${lessonCount} lessons, ${questionCount} questions in the bank.`);
  await mongoose.connection.close();
  process.exit(0);
}

run().catch((err) => {
  console.error('[seed] failed:', err);
  process.exit(1);
});
