import { url } from "inspector";
import mongoose from "mongoose";


const projectSchema = new mongoose.Schema(
    {
        name: String,
        photo: String, 
        description: String,
        tools: [String],
        role: String,
        big_description: String,
        photos: [String], 
        github_link: String

    },{collection:"projects"}
);

export default mongoose.models.Projects || mongoose.model('Projects', projectSchema);





