import mongoose from 'mongoose';
import { Student } from './userTypes';

const StudentSchema = new mongoose.Schema<Student>({
    fname: {
        type: String,
        required: true,
        unique: true
    },
    lname: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
        unique: true
    }
},{
    timestamps: true
}
);

export default mongoose.model<Student>('Student',StudentSchema)