import { nanoid } from "nanoid";
import { URL } from "../models/url.js";


export async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if(!body.url)return res.status(400).json({error: "url is required"})
    const shortID = nanoid(8);

   await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
        createdBy: req.user?._id,
    })

    return res.render( "home",
        {id : shortID}); 
}

export async function  handelGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    console.log("Populated result:", result);

    return res.json({
        totalClick: result.visitHistory.length,
        analytics: result.visitHistory,
    });
}