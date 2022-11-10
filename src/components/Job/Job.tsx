import {FC} from "react";

import {IJob} from "../../interfaces";

interface IProps{
    job: IJob
}

const Job: FC<IProps> = ({job}) => {
    return (
        <div>
            ${job.name}
        </div>
    );
};

export {Job};
