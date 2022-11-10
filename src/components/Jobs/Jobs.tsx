import {FC, useEffect} from "react";

import {Job} from "../Job/Job";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {jobActions} from "../../redux/slices";


const Jobs: FC = () => {
    const {jobs} = useAppSelector(state => state.jobReducer);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(jobActions.getAll())
    },[dispatch])
    return (
        <div>
            {jobs.map(job => <Job job={job} key={job.id}/>)}
        </div>
    );
};

export {Jobs};
