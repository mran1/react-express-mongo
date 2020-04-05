import {connectDB} from './connect-db';
import md5 from 'md5';
import uuid from 'uuid';

const authenticateTokens = [];

async function assembleUser(user){
    let db = await connectDB();
    let tasks = await db.collection("tasks").find({owner:user.id}).toArray();
    let groups = await db.collection("groups").find({owner:user.id}).toArray();
    return {
        tasks,
        groups,
        session : {authenticate : "AUTHENTICATED", id:user.id}
    }

}
export const authenticate = (app) => {
    app.post("/authenticate",async (req, res) => {
        let {userName, password} = req.body;
        // console.log("password is -->>",password);
        let db = await connectDB();
        let collection = db.collection("users");
        let user = await collection.findOne({name : userName});
        if(!user){
            return res.status(500).send("User not found");
        }
        let encryptedPassword = md5(password);
        // console.log("encryptedPassword is -->>",encryptedPassword);
        // console.log("user is -->>",user);
        if(encryptedPassword !== user.passwordHash){
            return res.status(500).send("Password is incorrect");
        }
        let token = uuid();
        let state = await assembleUser(user);
        authenticateTokens.push({token ,userdID : user.id})
        return res.send({token, state})

    })
}