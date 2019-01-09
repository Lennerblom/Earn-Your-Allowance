'use strict';
import mongoose, {Schema} from 'mongoose';

const ChoreSchema = mongoose.Schema({
  //_id: Schema.Types.ObjectId,
  choreName: { type: String },
  assignedTo: { type: String },
  choreValue: { type: String },
  dueDateTime: { type: Date },
  status: { type: String },
  frequency: { type: Number },
  choreStartDate: { type: Date },
  choreEndDate: { type: Date },
});

export default mongoose.model('chores', ChoreSchema);