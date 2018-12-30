
import mongoose from 'mongoose';

const ChoresSchema = mongoose.Schema({
  //choresID: { type: Schema.Types.ObjectID, ref:'chores' },
  choreName: { type: String },
  AssignedTo: { type: String },
  choreValue: { type: String },
  dueDateTime: { type: Date },
  status: { type: String },
  frequency: { type: Number },
  choreStartDate: { type: Date },
  choreEndDate: { type: Date },
});

export default mongoose.model('chores', ChoresSchema);