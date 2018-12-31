'use strict';
import mongoose, {Schema} from 'mongoose';

const UserSchema = mongoose.Schema({
  //UserID: { type:Schema.Types.ObjectID, ref:'user' },
  name: { type: String },
  access_level: { type: String },
  chores: [{ type:Schema.Types.ObjectId, ref: 'chores'}],
  email: { type: String },
  phone: { type: String },//or should it be Number?? TODO: look up how to send push text notifications
});

export default mongoose.model('user', UserSchema);