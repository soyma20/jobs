import {useLocation} from "react-router-dom";
import {FaShare, FaStar} from "react-icons/fa"

import {IJob} from "../../interfaces";
import {Bookmark} from "../Bookmark/Bookmark";
import {Contacts} from "../Contacts/Contacts";
import {Chips} from "../Chips/Chips";
import {ApplyButton} from "../ApplyButton/ApplyButton";
import {ReturnButton} from "../ReturnButton/ReturnButton";

const DetailedJob = () => {
    const job: IJob = useLocation().state;
    return (
        <div className="flex justify-center mt-[56px] sm:mt-[24px]">
            <div className="flex mb-[89px]  sm:flex-col">
                <div className="w-[723px] sm:w-[382px]">
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
                    <div >
                        <div className="flex mb-[7px] sm:flex-col sm:relative">
                            <h2 className="w-[501px] sm:w-[363px] font-bold text-2xl mr-[60px]">{job.title}</h2>
                            <div
                                className="sm:absolute sm:top-[100%] sm:right-[10px] sm:flex sm:flex-col-reverse sm:text-right">
                                <h3 className="text-xl font-bold text-[#3A4562] ">€ {job.salary}</h3>
                                <p className="text-lg">Brutto, per year</p>
                            </div>
                        </div>
                        <p className="text-lg sm:text-xs sm:mt-[21px] mb-[7px] sm:mb-[26px] text-[#b9bcc5]">Posted {job.createdAt.slice(0, 10)}</p>
                        <p className="text-lg mb-[30px] sm:mb-[43px]">{job.description}</p>
                        <h4 className="text-xl font-bold  mb-[7px]">Responsibilities</h4>
                        <p className="text-lg mb-[7px] sm:mb-[15px]">{job.description}</p>
                        <h4 className="text-xl font-bold  mb-[7px] sm:mb-[25px]">Compensation & Benefits:</h4>
                        <ul className="list-square sm:list-inside">{job.benefits.map((value, index) =>
                            <li className="text-lg" key={index}>{value}</li>)}
                        </ul>
                        <div className="sm:flex sm:justify-center">
                            <ApplyButton show={true}/>
                        </div>
                        <div className="sm:flex sm:flex-col-reverse">
                            <div className="mb-[87px] sm:mb-[63px]">
                                <h3 className="text-3xl font-bold pb-[9px] sm:mt-[55px] border-b border-[#3A4562]">Additional
                                    info</h3>
                                <div>
                                    <p className="text-lg mb-[10px] mt-[15px]">Employment type</p>
                                    <Chips chips={job.employment_type} bgColor="#e1e6f4" textColor="#55699E"
                                           borderColor="#b8c0da"/>
                                </div>
                                <div>
                                    <p className="text-lg mb-[10px] mt-[23px]">Benefits</p>
                                    <Chips chips={job.benefits} bgColor="#fff8d9" textColor="#988B49"
                                           borderColor="#ffcf02"/>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold pb-[9px] border-b border-[#3A4562] mb-[15px]">Attached
                                    images</h3>
                                <div className="flex">
                                    {job.pictures.map((value, index) => <img
                                        className="w-[200px] h-[133px] mr-[10px] rounded-lg" key={index}
                                        src={value} alt="pictures"/>)}
                                </div>
                            </div>
                        </div>
                        <ReturnButton/>
                    </div>
                </div>
                <h3 className="hidden sm:block text-3xl font-bold pb-[9px] border-b border-[#3A4562] sm:mb-[21px]">Contacts</h3>
                <Contacts job={job}/>
            </div>
        </div>
    );
};

export {DetailedJob};
