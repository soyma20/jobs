import {FC} from "react";


import {IJob} from "../../interfaces";
import {Rating} from "../Rating/Rating";
import {Bookmark} from "../Bookmark/Bookmark";

interface IProps {
    job: IJob
}

const Job: FC<IProps> = ({job}) => {
    return (
        <div>
            <div className="mt-7 mb-2 flex items-center w-[1400px] h-[164px] bg-white rounded-lg shadow-md">
                <img className="w-[85px] min-w-[66px] min-h-[66px] h-[85px] rounded-full ml-4 mr-[26px]"
                     src={job.pictures[0]}
                     alt=""/>
                <div className="w-[712px] mr-[279px]">
                    <h2 className="h-[50px] font-bold text-xl text-ellipsis overflow-hidden mb-2">
                        {job.title}
                    </h2>
                    <p className="text-base  mb-2 text-[#878D9D]">Department name • {job.name}</p>
                    <p className="text-[#878D9D]">{job.address}</p>
                </div>
                <div className="flex justify-between items-center w-[266px]">
                    <Rating/>
                    <div className="h-[116px] flex flex-col justify-between items-end">
                        <Bookmark/>
                        <div className="text-[#878D9D]">Posted {job.createdAt.slice(0, 10)}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Job};
