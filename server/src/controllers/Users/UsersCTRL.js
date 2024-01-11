const User = require('../../models/UserModel');

const bcrypt = require('bcrypt');




const addUser = async (req, res) => {
  const hashedpass = await bcrypt.hash(req.body.password, 10);
  const newUser = new User({
    _id:req.body.username,
    Name:req.body.Name, 
    email:req.body.email, 
    password:hashedpass, 
    });

    newUser.save()
    .then(() => res.status(200).send('User created successfully!'))
    .catch((error) => res.status(500).send(error));
  };

module.exports =  addUser;