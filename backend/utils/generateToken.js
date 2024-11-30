import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    try {
        // Generate a token
        const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
            expiresIn: '15d' // Example: Token expires in 15 days
        });

        // Set the token as a cookie
        res.cookie('jwt', token, {
            maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
            sameSite:"strict",
            httpOnly: true
        });

        // No need to send a response here, just return the token
        return token;
    } catch (error) {
        console.error(`Error generating token and setting cookie: ${error.message}`);
        // Since this function doesn't handle sending responses, don't send one here
        // Caller should handle any errors
        return null;
    }
};

export default generateTokenAndSetCookie;
