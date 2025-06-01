import Datastore from "nedb-promises";

export const db = new Datastore({
  filename: "./data/users.db",
  autoload: true,
});


db.ensureIndex({ fieldName: "username", unique: true }); // Unique on username only
db.ensureIndex({ fieldName: "email", unique: true });
