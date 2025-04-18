import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import { connectDB } from "./connect.js";
import { URL } from "./models/url.js";
import { checkForAuthentication, restrictTo } from "./middlewares/auth.js";
import urlRoute from "./routes/url.js"
import staticRoute from "./routes/staticRouter.js";
import userRoute from "./routes/user.js";

const app = express();

const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(checkForAuthentication);

app.use("/test", async (req, res) => {
    const allUrls = await URL.find({});
    return res.render('home', {
        urls: allUrls,
    })
})

app.use("/url", restrictTo(['NORMAL', 'ADMIN']), urlRoute);
app.use("/", staticRoute);
app.use("/user", userRoute);
app.get("/url/:shortId", async (req, res) => {
    try {
        const shortId = req.params.shortId;

        const entry = await URL.findOneAndUpdate(
            {
                shortId,
            },
            {
                $push: {
                    visitHistory: {
                        timestamp: Date.now()
                    },
                }
            },
            { new: true }
        );

        if (!entry) {
            return res.status(404).json({ message: "URL not found" })
        }

        res.redirect(entry.redirectURL);
    } catch (error) {
        console.log("Errer during redirection:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

app.listen(PORT, () => {
    connectDB("mongodb://127.0.0.1:27017/short-url")
    console.log(`Server Started at PORT ${PORT}`)
})