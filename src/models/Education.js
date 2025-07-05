import mongoose from 'mongoose';

const eduSchema = new mongoose.Schema(
    {
        institution: String,
        degree_name: String,
        startDate: Date,
        endDate: Date,
        result: String,
        description: String,
    },{collection: 'education'}
);


export default mongoose.models.Education || mongoose.model('Education', eduSchema);