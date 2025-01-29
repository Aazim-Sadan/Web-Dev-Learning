import jwt  from "jsonwebtoken";
const secretKey = "fhkrjbfjgsalie";

export function setUser(user) {
    return jwt.sign({
        _id :  user._id,
        email: user.email,
        role: user.role,
    }, secretKey);
}


export function getUser(token) {
    if(!token) return null;
    return jwt.verify(token, secretKey);
}
