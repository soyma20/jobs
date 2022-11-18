import {FC} from "react";
import {useNavigate} from "react-router-dom"
import {FaSearchLocation} from "react-icons/fa"

import {IJob} from "../../interfaces";
import {Rating} from "../Rating/Rating";
import {Bookmark} from "../Bookmark/Bookmark";

interface IProps {
    job: IJob
}

const Job: FC<IProps> = ({job}) => {
    const navigate = useNavigate();

    const toJob = (): void => {
        navigate(`${job.id}`, {state: job})
    }

    return (
        <div
            className="mb-2 flex items-center w-[1400px] sm:w-[396px] h-[164px] sm:h-[206px] bg-white sm:bg-[#EFF0F5] rounded-lg shadow-md sm:flex-col-reverse sm:justify-center ">
            <div className="flex items-center sm:mt-[17px]">
                <img className="cursor-pointer w-[85px] sm:w-[66px] h-[85px] sm:h-[66px] rounded-full ml-4 mr-[26px] sm:mb-[68px]"
                     src={job.pictures[0]}
                     alt=""
                     />
                <div className="w-[712px] sm:w-[298px] mr-[279px] sm:mr-[0px]">
                    <h2 onClick={toJob} className="cursor-pointer h-[50px] sm:h-[48px] font-bold text-xl text-ellipsis overflow-hidden mb-2 sm:text-lg sm:font-normal sm:w-[278px] sm:text-[#3A4562]">
                        {job.title}
                    </h2>
                    <p className="text-base  mb-2 text-[#878D9D] sm:text-base sm:font-normal ">Department name
                        • {job.name}</p>
                    <div className="flex">
                        <FaSearchLocation className="hidden sm:block text-[#878D9D] mr-[7px]"/>
                        <p className="text-[#878D9D] sm:text-base sm:font-normal">{job.address}</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center w-[266px] sm:w-[230px] sm:h-[17px]  sm:ml-[51px]">
                <Rating/>
                <div className="h-[116px] flex flex-col justify-between items-end  sm:h-[17px]">
                    <Bookmark/>
                    <div className="text-[#878D9D] sm:text-sm sm:font-light">Posted {job.createdAt.slice(0, 10)}</div>
                </div>
            </div>
        </div>
    );
};

export {Job};
