const crypto = require("crypto");

// Generate a secure random string
const jwtSecret = crypto.randomBytes(64).toString("hex");
console.log("Your secure JWT_SECRET:", jwtSecret);