import mongoose from 'mongoose';

const workSchema = new mongoose.Schema(
    {
        name: String,
        position: String,
        startDate: Date,
        endDate: Date,
        description: String,
    },{collection: 'work'}
);


export default mongoose.models.Work || mongoose.model('Work', workSchema);