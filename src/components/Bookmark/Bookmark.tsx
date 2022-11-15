import {FaBookmark} from "react-icons/fa"
import {useState} from "react";

const Bookmark = () => {
    const [rating, setRating] = useState(false);
    return (
        <label>
            <input className="hidden"
                   type="radio"
                   name="rating"
                   onClick={() => setRating(!rating)}
            />
            <FaBookmark className="cursor-pointer transition duration-150 ease-in-out"
                        color={rating ? "#ffc107" : "#38415D"}
            />
        </label>
    )
};

export {Bookmark};
