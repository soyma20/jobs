import {FC, useEffect, useState} from "react";
import {IJob} from "../../interfaces";
import {jobsService} from "../../services";
import {Job} from "../Job/Job";

const Jobs: FC = () => {

    let [jobs, setJobs] = useState<IJob[]>([]);

    useEffect(() => {
        jobsService.getAll().then(value => value.data).then(jobs => setJobs(jobs))
    }, [])

    return (
        <div>
            {jobs.map(job => <Job job={job} key={job.id}/>)}
        </div>
    );
};

export {Jobs};
