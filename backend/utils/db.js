import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('mongodb connected successfully.');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;
// import mongoose from "mongoose";


// const connectDB = async () => {
//     const uri = process.env.MONGO_URI;

//     if (!uri) {
//         console.error("❌ MONGO_URI is not defined in environment variables.");
//         process.exit(1); // Stop the server if URI is missing
//     }

//     try {
//         await mongoose.connect(uri, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("✅ MongoDB connected successfully.");
//     } catch (error) {
//         console.error("❌ MongoDB connection error:", error);
//         process.exit(1); // Exit the process on failure
//     }
// };

// export default connectDB;
