// CRUD Operations
import { db } from "../config/postgres-db"; // db connection

// CREATE USER
export const createUserInDb = async (formData: any) => {
  console.log(formData);
  try {
    // execute db query to insert data into users table
    const newUser = await db.one(
      "INSERT INTO users (name, phone, email) VALUES ($1, $2, $3) RETURNING *",
      [formData.name, formData.phone, formData.email]
    );

    // get the data from db
    console.log(newUser);
    // process and return it to effects
    return newUser;
  } catch (err) {
    // handle any error that may occurs during insert operation
    console.log(`Error creating user`, err);
    throw err; // to be handled by the caller
  }
};

// LIST USERS
export const listUsersFromDb = async () => {
  try {
    const users = await db.any("SELECT * FROM users");
    // returning the list of users
    return users;
  } catch (err) {
    // handle any error that may occurs during insert operation
    console.log(`Error fetching users`, err);
    throw err; // to be handled by the caller
  }
};

// GET USER BY ID
export const fetchUserByIdFromDb = async (id: number) => {
  try {
    console.log("Inside fetchUserById from db");

    const user = await db.one("SELECT * FROM users WHERE id = $1", [id]);
    return user; // returning the user
  } catch (err) {
    // handle any error that may occurs during insert operation
    console.log(`Error fetching user by id`, err);
    throw err; // to be handled by the caller
  }
};

// UPDATE USER BY ID
export const updateUserByIdInDb = async (formData: any) => {
  console.log(formData);
  try {
    console.log("Inside updateUserByIdInDb");

    const user = await db.one(
      "UPDATE users SET name = $1, phone = $2, email = $3 WHERE id = $4 RETURNING *",
      [formData.name, formData.phone, formData.email, formData.id]
    );

    return user; // returning the user
  } catch (err) {
    // handle any error that may occurs during insert operation
    console.log(`Error updating user by id`, err);
    throw err; // to be handled by the caller
  }
};

// TODO: Implement delete 
// also handle exceptions and scenarios such as deleting the same record multiple times