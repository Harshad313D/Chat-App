
import { User } from "../models/user.model.js";
import bcrypt from 'bcrypt';
import createTokenAndSaveCookie from "../jwt/generateToken.js";

const signup = async(req,res)=>{
    
    try {
        const {name, email, password,confirmPassword} = req.body;

        if(password !== confirmPassword ){
        return res.status(400).json({error:"Passwords do not match"})
        }

        const user = await User.findOne({email});

        if(user){
            return res.status(400).json({error:"Email already exists"})
        }

        // hashing the password
        const hashedPassword = await bcrypt.hash(password,10)

        const newUser = await new User(
            {
                name, 
                email,
                password:hashedPassword,
            });
        await newUser.save();
        if(newUser){
            createTokenAndSaveCookie(newUser.id, res);
            res.json({message:"user registered successfully"})

        }


    } catch(error) {
        console.error(error);
        res.status(500).json({error:"Server error"})
    }
}

const login = async (req, res) => {
    const {email, password} = req.body;

    try{
        const user = await User.findOne({ email: email})
        const isMatch = await bcrypt.compare(password,user.password)
        if(!user || !isMatch ){
            return res.status(400).json({error:"Invalid User or Password "})
        }
        createTokenAndSaveCookie(user.id, res);
        res
        .status(201)
        .json({message:"Logged in successfully",
            user:{
                _id: user._id,
                name : user.name,
                email : user.email,
            },
        })
    } catch(error ){
        console.error(error);
        return res.status(500).json({error:"server error"})

    }

}

const logout = async (req, res) => {
    try{
        res.clearCookie('jwt_token');
        res.status(200).json({message: 'User logged out successfully'})

    } catch(error){
        console.error(error);
        return res.status(500).json({error:"server error"})
    }
}

export{
    signup,
    login,
    logout
}