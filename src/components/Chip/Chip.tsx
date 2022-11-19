import {FC} from "react";

interface IProps {
    chip: string;
    gama: boolean;
}

const Chip: FC<IProps> = ({chip, gama}) => {
    let className: string;

    if (gama) {
        className =  'sm:w-fit rounded-lg font-bold  text-center pt-[3px] mr-[8px] border text-base w-[222px] h-[39px] bg-light-blue text-mid-blue border-border-blue'
    } else {
        className = 'sm:w-fit rounded-lg font-bold  text-center pt-[3px] mr-[8px] border text-base w-[222px] h-[39px] bg-light-orange text-dark-orange border-mid-orange'
    }

    return (
        <div className={className}>{chip}</div>
    );
};

export {Chip};
