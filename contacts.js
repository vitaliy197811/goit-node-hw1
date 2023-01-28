const fs = require('fs').promises;
const path = require('path');
let node_uid = require('node-uid')

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  try {
    return JSON.parse(await fs.readFile(contactsPath, "utf8"));
  } catch (err) {
    console.log(err);
  }
}
  
async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    return contacts.find(contact => contact.id === String(contactId));
  } catch (err) {
    console.log(err);
  }
}

async function addContact(name, email, phone) {
  try {
    const contacts = await listContacts();
    const newContact = { id: String(node_uid(5)), name, email, phone };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, " "));
    return;
  } catch (err) {
    console.log(err);
  }
}
  
async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const indexContact = contacts.findIndex(contact => contact.id === String(contactId));
    if(indexContact === -1){
      return console.log("Contact with this id does not exist");
    }
    contacts.splice(indexContact, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, " "));
    return;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};