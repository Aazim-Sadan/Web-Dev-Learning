import jwt from "jsonwebtoken"


export const isAuthenticated = (req, res, next) => {
    try {
        const token = req.cookies.token

        if (!token) {
            return res.status(400)
                .json({
                    message: "You are not authenticated",
                    status: false
                })
        }

        const decode = jwt.verify(token, process.env.SECRET_KEY)

        req.id = decode.userId;
        next()
    } catch (error) {
        console.log(error)
    }
}