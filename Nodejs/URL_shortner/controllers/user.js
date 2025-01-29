import { User } from "../models/user.js";
import { v4 as uuidv4 } from "uuid";
import { setUser } from "../service/auth.js";

export const userRegister = async (req, res) => {
    try {
        const { fullName, username, email, password } = req.body;

        await User.create({
            fullName,
            username,
            email,
            password,
        });

        return res.redirect('home')
    } catch (error) {
        console.log("User registration failed", error)
    }
}

export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email, password });

        if (!user) return res.render("login", {
            error: "Invalid Username or Password"
        })
        
        const token = setUser(user);
        res.cookie("token", token);
        return res.redirect("/");

    } catch (error) {
        console.log("User registration failed", error)
    }
}

