const mongoose = require('mongoose')

// connection to mongodb with mongodb uri defined in our config file
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, { 
        useNewUrlParser: true,  
        useUnifiedTopology: true, 
        useFindAndModify: false,
        useCreateIndex: true, })
        console.log(`mongodb connected: ${conn.connection.host}`)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectDB

