import Datastore from "nedb-promises";

export const tokenDB = new Datastore({
  filename: "./data/tokens.db",
  autoload: true,
});
