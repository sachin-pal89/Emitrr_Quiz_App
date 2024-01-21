import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    lang: [
        {
            lang_name: {
                type: String,
                required: true,
            },
            score: {
                type: Number,
                default: 0,
            },
            curr_question_no: {
                type: Number,
                default: 0,
            },
        },
    ]
}, {
    timestamps: true
});

const User = model('User', userSchema);

export default User;
