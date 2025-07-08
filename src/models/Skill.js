import mongoose from 'mongoose';



const skillSchema = new mongoose.Schema({
  name: {type:String, required:true},
  usage: String,
  category: {type: String, enum:['Language','Framework',"Tool","Database", "Embedded System"],required:true},
}, { collection: 'skills' });

export default mongoose.models.Skill || mongoose.model('Skill', skillSchema);
 