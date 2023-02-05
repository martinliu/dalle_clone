import React from 'react';

import {download} from '../assets';
import {downloadImage} from '../utils';

//展示一张图片，图片信息来自 MongoDB Atlas
const Card = ({_id, name, prompt, photo}) => (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
        <a href={photo} target={"_blank"} >
        <img
            className="w-full h-auto object-cover rounded-xl"
            src={photo}
            alt={prompt}
        />
        </a>
        <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
            <p className="text-white text-md overflow-y-auto prompt">{prompt}</p>

            <div className="mt-5 flex justify-between items-center gap-2">
                <div className="flex items-center gap-2">
                    {/*//现实名字的首字母圆形图标作为头像，+ 全名*/}
                    <div
                        className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">{name[0]}</div>
                    <p className="text-white text-sm">{name}</p>
                </div>
                <button type="button" onClick={() => downloadImage(_id, photo)}
                        className="outline-none bg-transparent border-none">
                    <img src={download} alt="download" className="w-6 h-6 object-contain invert"/>
                </button>
            </div>
        </div>
    </div>
);

export default Card;