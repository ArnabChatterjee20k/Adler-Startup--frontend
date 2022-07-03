import React from 'react'

export const Options = ({icon , details}) => {
    return (
        <>
            <div className="flex flex-wrap justify-center items-center md:flex-col md:justify-start ml-4 sm:ml-14 space-x-5">
                <div className="p-5 mb-2 border-2 border-gray-400 rounded-full ">
                    {icon}
                </div>
                <div className="flex flex-col">
                    {details.map((text,index)=><p key={index}>{text}</p>)}
                </div>
            </div>
        </>
    )
}
