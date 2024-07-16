const cloudinary = require('cloudinary').v2;

const imageUploadMiddleware = async (req, res, next) => {
    try {
        // Upload image to Cloudinary
        const cloudinaryUploadPromise = new Promise((resolve, reject) => {
            cloudinary.uploader.upload(req.body.coverImage, { public_id: req.body.imageName }, function (error, result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(result.url);
                }
            });
        });

        // Wait for Cloudinary upload response
        const cloudinaryResponse = await cloudinaryUploadPromise;

        // Attach Cloudinary URL to request object
        req.blogimageURL = cloudinaryResponse;
        console.log(req.bodyimageURL)

        // Pass control to the next middleware or route handler
        next();
    } catch (error) {
        // Handle error and respond with appropriate status code and message
        res.status(500).json({ error: 'Image upload failed', details: error.message });
    }
};

module.exports = imageUploadMiddleware;
