const asyncHandler = require("express-async-handler");

const Contact = require("./../models/contact");

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.json(contacts);
  res.status(200).send("Contacts Shown"); //get all the contacts in collection
});

const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }

  res.status(200).json(contact);
});

const postContact = asyncHandler(async (req, res) => {
  console.log(req.body);

  const { name, email, phone } = req.body;

  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user.id,
  });

  if (!name || !email || !phone) {
    res.status(404);
    throw new Error("All Fields are Mandatory");
  }
  res.status(200).json(contact);
  console.log("Contact Saved");
});

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  await Contact.findByIdAndDelete(req.params.id);

  res.status(200).send(` Contact Deleted for`);
});

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedContact);
});

module.exports = {
  getContacts,
  getContact,
  postContact,
  deleteContact,
  updateContact,
};

//export these methods to route file to be used
