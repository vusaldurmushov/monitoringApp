import Datastore from "nedb-promises";

export const reasonForNotUsingDb = new Datastore({
  filename: "./data/reasonForNotUsing.db",
  autoload: true,
});
