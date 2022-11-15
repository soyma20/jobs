import {FC} from "react";
import {FaCaretRight, FaCaretLeft} from "react-icons/fa"

const NavBar: FC = () => {
    return (
        <div className="w-[512px] h-[52px] shadow-md flex bg-white rounded-xl mt-[41px] mb-[64px] justify-between items-center text-center">
            <FaCaretLeft color="#7D859C" className="h-[18px] ml-[23px] mr-[30px]"/>
            <div className="w-[1.3px] h-[31.2px]  bg-[#DEE3EF]"></div>
            <p className="font-bold text-[#70778B] ml-[55px]  w-[31px] ">1</p>
            <p className="font-bold text-[#70778B] border-b-4 w-[31px] border-[#5876C5] h-full pt-3.5">2</p>
            <p className="font-bold text-[#70778B]  w-[31px] ">3</p>
            <p className="font-bold text-[#70778B]  w-[31px] ">4</p>
            <p className="font-bold text-[#70778B]  w-[31px] ">5</p>
            <p className="font-bold text-[#70778B]  w-[31px] ">...</p>
            <p className="font-bold text-[#70778B] mr-[55px]  w-[31px] ">18</p>
            <div className="w-[1.3px] h-[31.2px]  bg-[#DEE3EF]"></div>
            <FaCaretRight color="#7D859C" className="h-[18px] ml-[30px] mr-[23px]"/>

        </div>
    );
};

export {NavBar};
