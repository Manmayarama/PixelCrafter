import mongoose from "mongoose";

const connectDB = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error("❌ MONGODB_URI is not defined in environment variables.");
        }

        mongoose.connection.on("connected", () => {
            console.log("✅ MongoDB Connected Successfully!");
        });

        mongoose.connection.on("error", (err) => {
            console.error("❌ MongoDB Connection Error:", err.message);
        });

        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

    } catch (error) {
        console.error("❌ Database Connection Failed:", error.message);
        process.exit(1);
    }
};

export default connectDB;
