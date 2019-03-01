import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  gender: String,
  phone: String,
  created_data: {
    type: Date,
    default: Date.now
  }
});

const Contact = mongoose.model('contact', contactSchema);

const getContact = (callback, limit) => {
  Contact.find(callback).limit(limit);
}
export default Contact;