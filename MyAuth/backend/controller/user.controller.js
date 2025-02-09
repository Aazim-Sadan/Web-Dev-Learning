import { User } from "../models/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export const userRegister = async (req, res) => {

    try {
        const { fullName, username, email, password } = req.body;

        if (!fullName || !username || !email || !password) {
            return res.status(400)
                .json({
                    message: "All credentials are required",
                    success: false
                })
        }
        const user = await User.findOne({ email })

        if (user) {
            return res.status(400)
                .json({
                    message: "User already existed with email or username"
                })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            fullName,
            username,
            email,
            password: hashedPassword
        })

        return res.status(201).json({
            message: "Account created successfully",
            success: true
        })
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Something went wrong on the server",
            success: false,
            error: error.message, 
        });
    }
}

export const userLogin = async (req, res) => {

    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400)
            .json({
                message: "Something is misssing",
                status: false
            })
    }

    let user = await User.findOne({ email })

    if (!user) {
        return res.status(400)
            .json({
                message: "User doesn't exist",
                status: false
            })
    }

    const comparePassword = bcrypt.compare(password, user.password)

    if (!comparePassword) {
        return res.status(400)
            .json({
                message: "Incorrect email or password",
                status: false
            })
    }

    const tokenData = {
        userId: user._id
    }

    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' })

    user = {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
    }


    return res.status(200)
        .cookie("token", token, { httpOnly: true, secure: true, maxAge: 1 * 24 * 60 * 60 * 1000 })
        .json({
            message: `Welcome back ${user.fullName}`,
            user,
            token,
            success: true
        })

}

export const userLogout = (req, res) => {
    return res
        .status(200)
        .clearCookie("token", { httpOnly: true, secure: true, sameSite: "strict" })
        .json({
            message: "User logged out successfully",
            status: true
        })
}

export const profileUpdate = async (req, res) => {
    try {
        const userId = req.id
        const { fullName, email } = req.body;

        if (!fullName || !email) {
            return res.status(400)
                .json({
                    message: "Al fields are required",
                    status: true
                })
        }

        let user = await User.findByIdAndUpdate(
            userId,
            {
                $set: {
                    fullName,
                    email
                }
            },
            { new: true }
        )

        user = {
            fullName: user.fullName,
            email: user.email,
            username: user.username
        }

        return res.status(200)
            .json({
                user,
                message: "Account details updated successfully",
                status: true
            })
    } catch (error) {
        console.log(error)
    }
}