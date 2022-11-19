import {FC} from "react";
import {FaArrowLeft} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const ReturnButton: FC = () => {
    const navigate = useNavigate();

    const returnToJobs = ():void =>{
        navigate('/jobs', )
    }
    return (
        <button onClick={returnToJobs}
            className="sm:hidden flex bg-button-gray mt-[89px] justify-center items-center w-[213px] h-[50px] rounded-lg text-button-black text-xs font-semibold border">
            <FaArrowLeft/>
            <p className="ml-[9px] ">RETURN TO JOB BOARD</p>
        </button>
    );
};

export {ReturnButton};
