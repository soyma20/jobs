import {FC} from "react";

import {Chip} from "../Chip/Chip";

interface IProps {
    chips: string[];
    gama: boolean
}

const Chips: FC<IProps> = ({chips,gama})=> {
    return (
        <div  className="flex">
            {chips.map((value, index) => <Chip chip={value} key={index} gama={gama} />)}
        </div>
    );
};

export {Chips};
