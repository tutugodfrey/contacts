import Contact from './contactModel';

const getContacts = (req, res) => {
  Contact.find((err, contacts) =>{
    if (err) {
      return res.json({
        status: 'error',
        message: err,
      })
    }
    return res.json({
      status: 'success',
      message: 'Contacts retrieved successfully',
      data: contacts
    })
  })
}

const createContact = (req, res) => {
  const contact = new Contact();
  contact.name = req.body.name ? req.body.name : contact.name;
  contact.gender = req.body.gender;
  contact.email = req.body.email;
  contact.phone = req.body.phone;

  contact.save((err) => {
    if (err) {
      return res.json(err);
    }
    return res.json({
      message: 'New contact created!',
      data: contact
    })
  })
}

const viewContacts = (req, res) => {
  Contact.findById(req.params.contact_id, (err, contact) => {
    if (err) res.send(err);
    return res.json({
      message: 'Contact details loading...',
      data: contact,
    })
  })
}

const updateContact = (req, res) => {
  Contact.findById(req.params.contact_id, (err, contact) => {
    if (err) res.send(err);
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.email = req.body.email ? req.body.email : contact.email;
    contact.phone = req.body.phone ? req.body.phone : contact.phone;
    contact.save((err) => {
      if (err) res.json(err);
      return res.json({
        message: 'contact info updatedreturn ',
        data: contact,
      })
    })
  })
}

const deleteContact = (req, res) => {
  Contact.remove({
    _id: req.params.contact_id
  }, (err, contact) => {
    if (err) res.send(err);
    return res.json({
      status: 'success',
      message: 'Contact deleted',
    })
  })
}

export {
  getContacts,
  createContact,
  viewContacts,
  updateContact,
  deleteContact,
};
