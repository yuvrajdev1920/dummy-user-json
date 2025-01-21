const { generateUsers } = require("../utils/dummyDataGenerator");

exports.getUsers=(req,res)=>{
    try{
        const limit=req.params.limit;
        const minAge=Number(req.params.minAge);
        const maxAge=Number(req.params.maxAge);
        const dummyUsers=generateUsers(limit,minAge,maxAge);
        res.status(200).json({
            message:`${limit} users generated successfully.`,
            data:dummyUsers
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message:"Unable to generate users at the moment"
        })
    }
}