import ratelimit from "../config/upstash.js";
const rateLimiter = async (req, res, next) => {
    try {
        //connect to upstash redis
        const {success} = await ratelimit.limit("my-rate-limit");
        if(!success){
            return res.status(429).json({message:"Too many requests, please try again later."});
        }
        next();
    } catch (error) {
        console.error("Error in rateLimter middleware", error);
        next(error);
        return res.status(500).json({message:"Internal server error"});
    }   
}

export default rateLimiter;