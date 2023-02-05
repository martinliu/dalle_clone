import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    organization: "org-OWhGe0YfT9damU90HYleaTMV",
});

const openai = new OpenAIApi(configuration);

const response = await openai.createImage({
    prompt: "a white siamese cat",
    n: 1,
    size: "1024x1024",
});

const image_url = response.data.data[0];

console.log(image_url);


