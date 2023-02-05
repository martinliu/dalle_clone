// `import express from 'express';
// import * as dotenv from 'dotenv';
// import { Configuration, OpenAIApi } from 'openai';
//
// //使用环境变量
// dotenv.config();
//
// //创建路由
// const router = express.Router();
//
// //创建OpenAI的配置，使用evn文件中的api key
// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });
//
// //创建OpenAI实例
// const openai = new OpenAIApi(configuration);
//
// router.route('/').get((req, res) => {
//     res.status(200).json({ message: 'Hello from DALL-E!' });
// });
//
//
// //调用openai
// router.route('/').post(async (req, res) => {
//     try {
//         //从客户端表单中取出请求 prompt 的提问文本
//         const { prompt } = req.body;
//
//         //调用创建图片方法
//         const aiResponse = await openai.createImage({
//             prompt,
//             n: 1,
//             size: '1024x1024',
//             response_format: 'b64_json',
//         });
//
//         console.log(prompt);
//         //从相应数据中取出图片数据文件
//         const image = aiResponse.data.data[0].b64_json;
//
//         //将得到的图片返回给请求的前端
//         res.status(200).json({ photo: image });
//
//     } catch (error) {
//         console.error(error);
//         //如果api调用出错了，返回500错误码
//         res.status(500).send(error?.response.data.error.message || 'Something went wrong');
//     }
// });
//
// export default router;`

import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    organization: "org-OWhGe0YfT9damU90HYleaTMV",
});

const openai = new OpenAIApi(configuration);

router.route('/').get((req, res) => {
    res.status(200).json({ message: 'Hello from DALL-E!' });
});

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        const aiResponse = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: '1024x1024',
            // response_format: 'b64_json',
        });

        const image = aiResponse.data.data[0].url;
        // const image = aiResponse.data.data[0];
        console.log(image);
        res.status(200).json({ photo: image });
    } catch (error) {
        console.error(error);
        res.status(500).send(error?.response.data.error.message || 'Something went wrong');
    }
});

export default router;