import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },  
  level: { type: String, enum: ["Beginner", "Intermediate", "Advanced"]},  
  yearsOfExperience: { type: Number, default: 0 }
});
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description:{type: String},
  link: [{type:String} ],
  skills: [{ type: String }]
});

const workSchema = new mongoose.Schema({
  company: {type:String},
  role: {type:String},
  duration: {type:String}
});

const linksSchema = new mongoose.Schema({
  github: {type:String},
  linkedin: {type:String},
  portfolio: {type:String}
});

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  education:{type: String, required:true},
  skills:[skillSchema],
  projects: [projectSchema],
  work: [workSchema],
  links: linksSchema,
},{
    timestamps:true,
});

export default mongoose.model("Profile", profileSchema);
