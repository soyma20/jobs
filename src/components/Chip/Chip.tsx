import {FC} from "react";

interface IProps {
    chip: string;
    bgColor:string;
    textColor:string;
    borderColor: string;
}

const Chip: FC<IProps> = ({chip,textColor,bgColor,borderColor}) => {

    let className=`sm:w-fit rounded-lg font-bold  text-center pt-[3px] mr-[8px] border text-base w-[222px] h-[39px] bg-[${bgColor}] text-[${textColor}] border-2`

    return (
        <div
            className={className}
        >{chip}
        </div>
    );
};

export {Chip};
