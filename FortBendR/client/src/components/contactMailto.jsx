import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label, image }) => {
    return (
        <Link
            className="text-red-600 hover:text-gray-400 hover:bg-white hover:rounded-md active:text-red-500 flex flex-col justify-center items-center"
            to='#'
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
        >
            <span>
                <img src={image} alt="email" />
            </span>
            <span>
                {label}

            </span>
        </Link>
    );
};

export default ButtonMailto;