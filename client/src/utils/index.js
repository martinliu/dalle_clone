import FileSaver from 'file-saver';
import { surpriseMePrompts } from '../constants'

//从已有的问题数据中随机选取一个问题，用于图片生成
export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    //防止重复数据随机生成
    if (randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
}

export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
}