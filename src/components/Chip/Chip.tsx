import {FC} from "react";

interface IProps {
    chip: string;
    gama: boolean;
}

const Chip: FC<IProps> = ({chip, gama}) => {
    let className: string;

    if (gama) {
        className =  'sm:w-fit rounded-lg font-bold  text-center pt-[3px] mr-[8px] border text-base w-[222px] h-[39px] bg-[#e1e6f4] text-[#55699E] border-[#b8c0da]'
    } else {
        className = 'sm:w-fit rounded-lg font-bold  text-center pt-[3px] mr-[8px] border text-base w-[222px] h-[39px] bg-[#fff8d9] text-[#988B49] border-[#ffcf02]'
    }

    return (
        <div className={className}>{chip}</div>
    );
};

export {Chip};
