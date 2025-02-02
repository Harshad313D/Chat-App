import jwt from 'jsonwebtoken';

const createTokenAndSaveCookie= (userId, res)=>{
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '5d' });
    res.cookie('jwt_token', token, 
        { 
            httpOnly: true, 
            secure: true,
            sameSite: "strict",
        }
    );
}

export default createTokenAndSaveCookie;