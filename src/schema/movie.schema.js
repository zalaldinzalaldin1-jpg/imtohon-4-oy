import { Schema, model } from "mongoose";
const movieSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        require: true,
        unique: true
    },
    language: {
        type: String,
        enum: ['UZB', 'RU', 'EN']
    },
    genre: {
        type: String,
        enum: ['Ramantika', 'Fantastika', 'Baevik']
    }
}, {
    versionKey: false,
    timestamps: true
})

export default model('Movie', movieSchema)