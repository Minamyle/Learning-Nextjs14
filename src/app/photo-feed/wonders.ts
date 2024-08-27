import { StaticImageData } from "next/image";
import photo1 from "./photo/cleaning.png";
import photo2 from "./photo/electrian.png";
import photo3 from "./photo/helping.png";
import photo4 from "./photo/home move.png";
import photo5 from "./photo/HP ENVY x360 Laptop 14-es0013 13th Gen Intel® Core™ i5.jpg";

export type WonderImage = {
    id:string;
    name: string;
    src: StaticImageData;
    photographer: string;
    location:string;
};

const wondersImages: WonderImage[] =[
    {
        id:'1',
        name:'amina',
        src:photo1,
        photographer:"mr k",
        location:"ikeja"
    },
    {
        id:'2',
        name:'amina',
        src:photo2,
        photographer:"mr k",
        location:"ikeja"
    },
    {
        id:'3',
        name:'amina',
        src:photo3,
        photographer:"mr k",
        location:"ikeja"
    },
    {
        id:'4',
        name:'amina',
        src:photo4,
        photographer:"mr k",
        location:"ikeja"
    },
    {
        id:'5',
        name:'amina',
        src:photo5,
        photographer:"mr k",
        location:"ikeja"
    }
]
export default wondersImages;