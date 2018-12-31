'use strict';
import mongoose, {Schema} from 'mongoose';

const ChoresSchema = mongoose.Schema({
  //choreId: { type: Schema.Types.ObjectID, ref:'user' },
  choreName: { type: String },
  assignedTo: { type: String },
  choreValue: { type: String },
  dueDateTime: { type: Date },
  status: { type: String },
  frequency: { type: Number },
  choreStartDate: { type: Date },
  choreEndDate: { type: Date },
});

export default mongoose.model('chores', ChoresSchema);