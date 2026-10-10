require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5009;

async function start() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`[server] Driving School API listening on port ${PORT}`);
    });
  } catch (err) {
    console.error('[server] failed to start:', err.message);
    process.exit(1);
  }
}

start();
