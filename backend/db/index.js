const pgp = require("pg-promise")({});
const db = pgp(
  process.env.DATABASE_URL || "postgres://localhost:5432/save_a_plate"
);

module.exports = { db };
