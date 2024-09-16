import React from "react";
import { useNavigate } from "react-router-dom";

function Account() {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/thanks");
    };
    return (
      <div className="flex font-poppins justify-center items-center h-[99vh] text-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-[90%]">
            <h3 className="text-lg font-semibold text-[#111]">
                My Account Details
            </h3>
            <p className="text-sm">Send here joor, ebim pami. </p>
            <div className="text-xs mt-5">
                <div className="flex justify-between mb-2">
                    <span className="text-black">Account Number:</span>
                    <b className="text-black">8104476982</b>
                </div>
                <div className="flex justify-between mb-2 text-xs">
                    <span className="text-black">Account Name:</span>
                    <b className="text-black">Treasure Uzoma</b>
                </div>
                <div className="flex justify-between mb-2 text-xs">
                    <span className="text-black">Bank Name:</span>
                    <b className="text-black">Moniepoint</b>
                </div>
            </div>
            <button onClick={handleButtonClick} className="mt-6 px-8 py-2 bg-[#061417] text-white font-bold text-sm rounded-md">
                Sent?
            </button>
        </div>
        </div>
    );
}

export default Account;
