import dbSchema from '../models/Users.js';


const user = await dbSchema.userSchema();


export const login=async(req,res)=>{
try {
    const { email, password } = req.body;
       console.log(email,password)
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
  
    // Process login logic
    return res.status(200).send({message:"Login Successful"})
} catch (error) {
    console.log(error)
}

}

export const SignUp = async (req, res) => {
  try {
    const { firstName, lastName, contactNumber, email, username, password } = req.body;
    console.log(req.body)

    if (!firstName || !lastName || !contactNumber || !email || !username || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new user document using the schema
    const newUser = new user({
      firstName,
      lastName,
      contactNumber,
      email,
      username,
      password,
    });

    // Save the user to the database
    await newUser.save();

    return res.status(200).send({ message: "SignUp Successful" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
    
    