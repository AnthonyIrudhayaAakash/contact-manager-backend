const getAllContacts = (req, res)=>{
    res.status(200).json({message:"All Contacts fetched successfully."})
}
const getUserContacts = (req,res) => {
    const {id} = req?.params;
    res.status(200).json({message:`Contact fetched for ${id}`})
}
const deleteContact = (req,res) =>{
    const {id} = req?.body;
    res.status(200).json({message:`Contact deleted for ${id}`})
}
const createContact = (req, res) => {
    const {id, email , number} = req?.body;
    res.status(201).json({message:`Contact created for ${id}`}) 
}
const editContact = (req, res) => {
    const {id, number} = req?.body;
    res.status(200).json({message:`Contact edited for ${id}`})
}
module.exports = {getAllContacts, getUserContacts, deleteContact, createContact, editContact}