
import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
//  UserID: { type:Schema.Types.ObjectID, ref:'user' },
  name: { type: String },
  access_level: { type: String },
  email: { type: String },
  phone: { type: String },//or should it be Number?? TODO: look up how to send push text notifications
});

export default mongoose.model('user', UserSchema);