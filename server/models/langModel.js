import { Schema, model } from 'mongoose';

const langSchema = new Schema({
    lang_name: {
        type: String,
        required: true,
        unique: true,
    },
    total_question: {
        type: Number,
        required: true,
    },
    total_score: {
        type: Number,
        required: true,
    },
    questions: [
        {
            question_no: {
                type: Number,
                required: true,
            },
            question: {
                type: String,
                required: true,
                unique: true,
            },
            options: {
                type: [String],
                required: true,
            },
            answer: {
                type: String,
                required: true,
            },
            level: {
                type: String,
                required: true,
            },
            score: {
                type: Number,
                required: true,
            },
        },
    ],
});

const Lang = model('Lang', langSchema);

export default Lang;
