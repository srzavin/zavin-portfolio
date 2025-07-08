
import mongoose from "mongoose";


const lifeEvent = new mongoose.Schema({
        id:{ type: String, required: true, unique: true },
        name: String,
        photo: String, 
        description: String,
        big_description: String,
        photos: [String], 
},{collection: "lifeEvent"});



export default mongoose.models.LifeEvent || mongoose.model('LifeEvent', lifeEvent);





