import {FC} from "react";
import {Chip} from "../Chip/Chip";

interface IProps {
    chips: string[];
    bgColor:string;
    textColor:string;
    borderColor:string;
}

const Chips: FC<IProps> = ({chips,textColor,bgColor,borderColor})=> {
    return (
        <div  className="flex">
            {chips.map((value, index) => <Chip chip={value} key={index} bgColor={bgColor} textColor={textColor} borderColor={borderColor}/>)}
        </div>
    );
};

export {Chips};
