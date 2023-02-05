import express from 'express';
import * as dotenv from 'dotenv';
import {v2 as cloudinary} from 'cloudinary';

import Post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

//GET ALL POSTS
router.route('/').get(async (req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200).json({success: true, data: posts});
    } catch (err) {
        res.status(500).json({success: false, message: 'Fetching posts failed, please try again'});
    }
});

// Create A Post
router.route('/').post(async (req, res) => {
    try {
        //获取页面上图片的信息，上传到cloudinary
        const {name, prompt, photo} = req.body;
        console.log(req.body.photo);
        console.log(req.body.prompt);
        const photoUrl = await cloudinary.uploader.upload(photo.slice(23));
        console.log(photoUrl);

        //在数据库里创建这张图片的信息
        const newPost = await Post.create({
            name,
            prompt,
            photo: photoUrl.url,
        });

        res.status(200).json({success: true, data: newPost});
    } catch (err) {
        res.status(500).json({success: false, message: 'Unable to create a post, please try again'});
    }
});

export default router;