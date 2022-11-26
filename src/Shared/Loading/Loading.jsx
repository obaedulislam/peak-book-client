import React from "react";

const Loading = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex justify-center items-center h-full">
                <div className="w-16 h-16 border-[12px] border-dashed rounded-full animate-spin  border-primary mt-[100px]"><span className="visually-hidden"></span></div>
            </div>
        </div>
    );
};

export default Loading;