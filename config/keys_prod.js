module.exports = {
  mongoURI:
    process.env.MONGO_URI ||
    "mongodb+srv://baron:onyekachi2728@devconnect.i2vnj.mongodb.net/<devconnector>?retryWrites=true&w=majority",
  secretOrKey: process.env.SECRET_OR_KEY || "secretkey",
};
