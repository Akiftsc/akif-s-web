import React from 'react'
import * as sIcons from "react-icons/si";

const CustomIcon = ({ name }) => {
    let newName = "Si" + name;
    const FaIcon = sIcons[newName];
    if (!FaIcon) return <p>Icon not found!</p>;

    return <FaIcon />;
};

function SkillComponent({ text, icon }) {
    return (
        <p className='flex flex-col items-center justify-center text-center skillItem'>
            <CustomIcon name={icon} />
            <h3 className='font-bold text-base text-center'>{text}</h3>
        </p>
    )
}

export default SkillComponent