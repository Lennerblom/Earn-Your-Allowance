'use strict';
import mongoose, { Schema } from 'mongoose';

const UserSchema = mongoose.Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, unique: true },
  access_level: { type: String },
  chore: [{ type:Schema.Types.ObjectId, ref: 'chores'}],
  email: { type: String },
  phone: { type: String },
});

export default mongoose.model('users', UserSchema);

