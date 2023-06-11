import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BiCopyright } from "react-icons/bi";
import { NavLink } from 'react-router-dom';

function Footer({ home }) {
    return (
        <footer id={home && "home-footer"} class="relative z-20 mt-8 text-gray-700 block body-font p-0 m-0 border-t-4 border-black">
            <div class=" min-w-full px-5  mx-auto flex items-center flex-row justify-between" >
                <p class="text-sm text-gray-700 sm:ml-4 sm:pl-4  sm:py-2 sm:mt-0 mt-4 w-full">
                    <BiCopyright style={{ display: "inline" }} /> 2023 Mehmet Akif Taşçı
                </p>

                <NavLink
                    to="/changelog"
                >
                    Changelog
                </NavLink>
                <span class="text-xl flex flex-row gap-6 my-5 w-full items-right ml-auto  mt-4 justify-end">
                    <a className='hover:text-gray-800' aria-label='Link for Github' href='https://github.com/akiftsc'>
                        <AiFillGithub />
                    </a>
                    <a className='hover:text-gray-800' aria-label='Link for Twitter' href='https://twitter.com/akif2442'>
                        <FaTwitter />
                    </a>
                </span>
            </div>
        </footer >
    )
}

export default Footer