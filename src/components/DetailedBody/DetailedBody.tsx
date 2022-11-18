import {FC} from "react";

import {ApplyButton} from "../ApplyButton/ApplyButton";

interface IProps {
    createdAt: string;
    description: string;
    benefits: string[];
}

const DetailedBody: FC<IProps> = ({benefits, description, createdAt}) => {
    return (
        <div>
            <p className="text-lg sm:text-xs sm:mt-[21px] mb-[7px] sm:mb-[26px] text-[#b9bcc5]">
                Posted {createdAt.slice(0, 10)}
            </p>
            <p className="text-lg mb-[30px] sm:mb-[43px]">{description}</p>
            <h4 className="text-xl font-bold  mb-[7px]">Responsibilities</h4>
            <p className="text-lg mb-[7px] sm:mb-[15px]">{description}</p>
            <h4 className="text-xl font-bold  mb-[7px] sm:mb-[25px]">Compensation & Benefits:</h4>
            <ul className="list-square sm:list-inside">{benefits.map((value, index) =>
                <li className="text-lg" key={index}>{value}</li>)}
            </ul>
            <div className="sm:flex sm:justify-center">
                <ApplyButton show={true}/>
            </div>
        </div>
    );
};

export {DetailedBody};
