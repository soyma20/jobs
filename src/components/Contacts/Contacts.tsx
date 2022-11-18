import {FC} from "react";

import Map from "../../assets/img/Map.svg";
import {IJob} from "../../interfaces";

interface IProps {
    job: IJob
}

const Contacts: FC<IProps> = ({job}) => {
    return (
        <div>
            <h3 className="hidden sm:block text-3xl font-bold pb-[9px] border-b border-[#3A4562] sm:mb-[21px]">Contacts</h3>
            <div className="ml-[133px] sm:ml-[0] h-[436px] w-[402px]">
                <div className="h-[218px] bg-[#2A3047] pt-[31px] rounded-t-lg">
                    <div className="ml-[62px] ">
                        <h5 className="text-white text-xl font-bold mb-[8px]">Department name.<br/>
                            {job.name}
                        </h5>
                        <p className="text-white text-lg mb-[7px]">{job.address}</p>
                        <p className="text-white text-lg">{job.phone}, <br/> {job.email}</p>
                    </div>
                </div>
                <img className="w-[402px] rounded-b-lg" src={Map} alt="Map"/>
            </div>
        </div>
    );
};

export {Contacts};
