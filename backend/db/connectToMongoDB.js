import mongoose from "mongoose";

const connectToMongoDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("connect to mongo db");

    } catch (error) {
        console.log( "error not connect to mongo db");

    }
};

export default connectToMongoDB;