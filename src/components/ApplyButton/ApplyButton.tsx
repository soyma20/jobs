import {FC} from "react";

interface IProps {
    show: boolean;
}

const ApplyButton: FC<IProps> = ({show}) => {
    let className: string = "mt-[39px] sm:mt-[15px] mb-[32px] sm:mb-[135px] w-[127px] h-[52px] rounded-lg bg-button-black text-xs font-semibold text-white ";

    if (!show) className = className.concat("sm:hidden");

    return (
        <button className={className}>
            APPLY NOW
        </button>
    );
};

export {ApplyButton};
