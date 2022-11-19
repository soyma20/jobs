import {useLocation} from "react-router-dom";
import {FC} from "react";

import {IJob} from "../../interfaces";
import {Contacts} from "../Contacts/Contacts";
import {DetailedHead} from "../DetailedHead/DetailedHead";
import {DetailedBody} from "../DetailedBody/DetailedBody";
import {DetailedFooter} from "../DetailedFooter/DetailedFooter";

const DetailedJob: FC = () => {
    const job: IJob = useLocation().state;

    return (
        <div className="flex justify-center mt-[56px] sm:mt-[24px]">
            <div className="flex mb-[89px]  sm:flex-col">
                <div className="w-[723px] sm:w-[382px]">
                    <DetailedHead title={job.title} salary={job.salary}/>
                    <DetailedBody createdAt={job.createdAt} description={job.description}
                                  benefits={job.benefits}/>
                    <DetailedFooter benefits={job.benefits} employment_type={job.employment_type}
                                    pictures={job.pictures}/>
                </div>
                <Contacts email={job.email} address={job.address} name={job.name}
                          phone={job.phone}/>
            </div>
        </div>
    );
};

export {DetailedJob};
