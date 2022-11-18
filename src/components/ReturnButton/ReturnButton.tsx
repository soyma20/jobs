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
            className="sm:hidden flex bg-[#e4e5ea] mt-[89px] justify-center items-center w-[213px] h-[50px] rounded-lg text-[#384564] text-xs font-semibold text-white border">
            <FaArrowLeft/>
            <p className="ml-[9px] ">RETURN TO JOB BOARD</p>
        </button>
    );
};

export {ReturnButton};
