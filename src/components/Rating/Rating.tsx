import {FC, useState} from "react";
import {FaStar} from "react-icons/fa"

const Rating: FC = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div className="flex">
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1

                return (
                    <label key={ratingValue}>
                        <input className="hidden"
                               type="radio"
                               name="rating"
                               value={ratingValue}
                               onClick={() => setRating(ratingValue)}

                        />
                        <FaStar className="cursor-pointer transition duration-150 ease-in-out"
                                color={ratingValue <= (hover || rating) ? "#ffc107" : "#38415D"}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(0)}
                        />
                    </label>
                )
            })}
        </div>
    );
};

export {Rating};
