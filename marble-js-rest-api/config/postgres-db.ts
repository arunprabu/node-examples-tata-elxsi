/* 
  db url: localhost
  db port: 5432
  db name: users_db
  db username: postgres
  db password: admin   // i set this
*/

import pgPromise, { IMain } from "pg-promise";

const pgp: IMain = pgPromise({}); // initializing pg-promise

const dbConfig = {
  host: "localhost",
  port: 5432,
  database: "users_db",
  user: "postgres", // default one
  password: "admin", // i set this
};

const db = pgp(dbConfig); // creating db instance

// Listen for the 'connect' event to know when the database is connected
db.connect()
  .then((obj) => {
    console.log("Connected to the PostgreSQL database");
    obj.done(); // Close the connection when done
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

export { db };

// check it thru terminal by executing the following command
// ts-node ./config/postgres-db.ts