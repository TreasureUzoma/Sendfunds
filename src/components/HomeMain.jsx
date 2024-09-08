import React from "react";
import { useNavigate } from "react-router-dom";

function HomeMain() {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/account");
    };

    return (
        <div className="flex items-center justify-center text-center font-poppins h-[94vh]">
            <main>
                <h1 className="animate__animated animate__bounce text-3xl font-bold text-white">
                    Send Funds, Abeg
                </h1>
                <div className="mt-10 flex justify-center items-center w-[50%] mx-auto">
                    <button
                        onClick={handleButtonClick}
                        className="px-4 py-2 bg-[#021dc6] text-white font-bold rounded-md"
                    >
                        Yes
                    </button>
                    <button
                        onClick={handleButtonClick}
                        className="px-4 py-2 bg-[#f9370d] text-white font-bold rounded-md ml-4"
                    >
                        No
                    </button>
                </div>
            </main>
        </div>
    );
}

export default HomeMain;
