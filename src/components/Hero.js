import React from 'react'
import pp from "../me.webp";
import { Blob } from 'react-blob';
import { isMobile, isDesktop } from 'react-device-detect';
import { FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";



function Hero({ t }) {



    return (
        <section className="block text-gray-600 body-font" /* style={{ height: "70%" }} */>
            <div className="container text-black mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center">
                <div className="lg:flex-grow md:w-1/2  lg:pr-24 md:pr-16  md:items-start md:text-left mb-16 md:mb-0 items-center justify-center text-center">
                    <h1 className='title text-5xl font-bold  leading-snug flex gap-4 w-full items-center justify-center'>
                        MEHMET AKİF TAŞÇI
                    </h1>
                    <span className='text-4xl flex gap-6 my-5 w-full items-center justify-center'>
                        <a className='hover:text-gray-800' aria-label='Link for Github' href='https://github.com/akiftsc'>
                            <AiFillGithub />
                        </a>
                        <a className='hover:text-gray-800' aria-label='Link for Twitter' href='https://twitter.com/akif2442'>
                            <FaTwitter />
                        </a>
                    </span>
                    <p className="mb-8 text-xl font-normal leading-6 text-justify">
                        {t("greeting")}
                    </p>

                </div>


                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6  ">


                    {isDesktop && <Blob className='object-cover blob-img object-center mb-4' src={pp} alt="hero profile image." style={{ border: "4px solid #000" }} />}

                    {isMobile && <img src={pp} className="object-cover blob-img object-center mb-4" alt="hero profile img" />}

                </div>
            </div>
        </section>
    )
}

export default Hero