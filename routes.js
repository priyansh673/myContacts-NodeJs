const express = require("express");
const router = express.Router();
const {
  getContacts,
  postContact,
  getContact,
  deleteContact,
  updateContact,
} = require("./controllers/contactControllers"); //import the functions to be performed by these methods when called

const validateToken = require("./middleware/validateToken");
router.use(validateToken);
router.route("/").get(getContacts).post(postContact); //defineing the functions to each method and clusterd same url methods

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router; //exporting the routes to server file
