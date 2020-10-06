import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Bharath",
    email: "bharath@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Ram",
    email: "ram@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
