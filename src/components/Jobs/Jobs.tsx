import {FC, useEffect} from "react";

import {Job} from "../Job/Job";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {jobActions} from "../../redux";
import {NavBar} from "../NavBar/NavBar";


const Jobs: FC = () => {
    const {jobs} = useAppSelector(state => state.jobReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(jobActions.getAll())
    }, [dispatch])
    return (
        <div className="flex flex-col items-center bg-[#F5F5F5] pt-7 ">
            {jobs.map(job => <Job job={job} key={job.id}/>)}
            <NavBar/>
        </div>
    );
};

export {Jobs};
