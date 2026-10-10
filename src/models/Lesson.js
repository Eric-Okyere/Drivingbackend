const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema(
  {
    heading: { type: String, required: true },
    body: { type: String, required: true }, // markdown-ish plain text, rendered as paragraphs on the frontend
  },
  { _id: false }
);

const lessonSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    category: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      required: true,
      index: true,
    },
    order: { type: Number, required: true, default: 0 }, // order within category
    summary: { type: String, required: true },
    objective: { type: String, required: true },
    durationMinutes: { type: Number, default: 15 },
    videoScript: { type: String, default: '' }, // narration script students can follow like a video lesson
    sections: { type: [sectionSchema], default: [] },
    keyPoints: { type: [String], default: [] },
    commonMistakes: { type: [String], default: [] },
    dvlaRelevance: { type: String, default: '' }, // why this matters for the real DVLA test
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

lessonSchema.index({ category: 1, order: 1 });

module.exports = mongoose.model('Lesson', lessonSchema);
