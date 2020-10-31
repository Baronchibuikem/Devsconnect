module.exports = {
  mongoURI:
    process.env.MONGO_URI ||
    "mongodb+srv://",
  secretOrKey: process.env.SECRET_OR_KEY || "secretkey",
};
