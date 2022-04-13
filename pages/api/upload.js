var cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
    api: {
        bodyParser: {
            sizeLimit: "20000mb",
        },
    },
};

export default async function handler(req, res) {
    let uploadedResponse;
    const fileStr = req.body.data;

    if (req.method === 'POST') {
        console.log(fileStr)
        try {
            uploadedResponse = cloudinary.image("couple.jpg", {gravity: "face", height: 150, width: 150, crop: "thumb"})

        } catch (error) {
            console.log(error);
        }
        console.log(uploadedResponse)
        res.status(200).json({ data: uploadedResponse.toString() });
        console.log('complete!');
    }
}