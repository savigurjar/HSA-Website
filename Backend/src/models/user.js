const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        minLength: 3,
        maxLength: 20,
        required: true
    },
    lastName: {
        type: String,
        minLength: 3,
        maxLength: 20,

    },
    age: {
        type: Number,
        min: 2,
    },
    emailId: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,

    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
}, { timestamps: true })

const User = mongoose.model("user",userSchema);
module.exports = User;
