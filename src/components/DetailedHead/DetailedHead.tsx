import {FC} from "react";
import {Bookmark} from "../Bookmark/Bookmark";
import {FaShare, FaStar} from "react-icons/fa";
import {ApplyButton} from "../ApplyButton/ApplyButton";

interface IProps{
    title: string;
    salary: string;
}

const DetailedHead:FC<IProps> = ({salary,title}) => {
    return (
        <div>
            <div
                className="flex justify-between pb-[9px] border-b border-[#3A4562] sm:flex-col sm:border-0 sm:mb-[32px]">
                <h1 className="text-3xl font-bold sm:pb-[12px] sm:mb-[24px] sm:border-b">Job Details</h1>
                <div className="flex">
                    <div className="flex items-center mr-[31px]">
                        <Bookmark/>
                        <FaStar className="hidden sm:block"/>
                        <p className="ml-[15px] sm:ml-[11px]">Save to my list</p>
                    </div>
                    <div className="flex items-center">
                        <FaShare color="#38415D"/>
                        <p className="ml-[15px] sm:ml-[11px]">Share</p>
                    </div>
                </div>
            </div>
            <ApplyButton show={false}/>
            <div className="flex mb-[7px] sm:flex-col sm:relative">
                <h2 className="w-[501px] sm:w-[363px] font-bold text-2xl mr-[60px]">{title}</h2>
                <div
                    className="sm:absolute sm:top-[100%] sm:right-[10px] sm:flex sm:flex-col-reverse sm:text-right">
                    <h3 className="text-xl font-bold text-[#3A4562] ">€ {salary}</h3>
                    <p className="text-lg">Brutto, per year</p>
                </div>
            </div>
        </div>
    );
};

export {DetailedHead};
