import {FC} from "react";

import {Chips} from "../Chips/Chips";
import {ReturnButton} from "../ReturnButton/ReturnButton";

interface IProps {
    benefits: string[];
    employment_type: string[];
    pictures: string[];
}

const DetailedFooter: FC<IProps> = ({benefits, pictures, employment_type}) => {
    return (
        <div>
            <div className="sm:flex sm:flex-col-reverse">
                <div className="mb-[87px] sm:mb-[63px]">
                    <h3 className="text-3xl font-bold pb-[9px] sm:mt-[55px] border-b border-dark-black">Additional
                        info</h3>
                    <div>
                        <p className="text-lg mb-[10px] mt-[15px]">Employment type</p>
                        <Chips chips={employment_type} gama={true}/>
                    </div>
                    <div>
                        <p className="text-lg mb-[10px] mt-[23px]">Benefits</p>
                        <Chips chips={benefits} gama={false}/>
                    </div>
                </div>
                <div>
                    <h3 className="text-3xl font-bold pb-[9px] border-b border-dark-black mb-[15px]">Attached
                        images</h3>
                    <div className="flex">
                        {pictures.map((value, index) => <img
                            className="w-[200px] h-[133px] mr-[10px] rounded-lg" key={index}
                            src={value} alt="pictures"/>)}
                    </div>
                </div>
            </div>
            <ReturnButton/>
        </div>
    );
};

export {DetailedFooter};
