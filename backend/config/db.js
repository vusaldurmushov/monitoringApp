import Datastore from "nedb-promises";

const db = new Datastore({
  filename: "./data/users.db",
  autoload: true,
});

db.ensureIndex({ fieldName: ["username", "email"], unique: true });

export default db;
