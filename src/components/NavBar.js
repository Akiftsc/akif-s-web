import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import i18n from "../i18n";
import { BiCurrentLocation } from 'react-icons/bi';
import britishFlag from "../locales/british.svg";
import turkishFlag from "../locales/turkish.svg";

function NavBar({ t }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [currenFlag, setCurrentFlag] = useState(turkishFlag);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);

    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLanguageChange = () => {
        const newLanguage = i18n.language === 'en' ? 'tr' : 'en'; // Aktif dilinizi değiştirin
        setCurrentFlag(newLanguage === "en" ? turkishFlag : britishFlag);
        i18n.changeLanguage(newLanguage);
    };



    const navClass = scrollPosition > 0 ? 'navBlack fixed z-10 top-0 w-full border-b-4 border-black border-solid' : 'transparent fixed z-10 top-0 w-full border-b-4 border-black border-solid';


    const handleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className={navClass}>
            <div className="mx-4 my-3 flex justify-between items-center">
                <a href='#' className="font-bold lg:text-4xl text-3xl">
                    {isOpen ? "AKIF" : "MEHMET AKIF"}
                </a>
                <button
                    className="lg:hidden focus:outline-none absolute top-0 right-0 mx-4 my-6"
                    onClick={handleMenu}
                    aria-label="Menu"
                >
                    <GiHamburgerMenu />
                </button>
                <div className={`lg:block ${isOpen ? "block text-m mr-5" : "hidden text-lg"}`}>
                    <a
                        href="#education"
                        className="link leading-7 font-medium  text-right ml-10"
                    >
                        {t("nav_1")}
                    </a>
                    <a
                        href="#skills"
                        className="link leading-7 font-medium text-right ml-10"
                    >
                        {t("nav_2")}
                    </a>
                    <a
                        href="#section"
                        className="link leading-7 font-medium text-right ml-10"
                    >
                        {t("nav_3")}
                    </a>
                    <img
                        style={{ cursor: "pointer", width: "32px", height: "64px", scale: "2", }}
                        className="link  font-medium text-right ml-10 mr-2"
                        src={currenFlag}
                        onClick={handleLanguageChange}
                        alt='flag'
                    />

                </div>
            </div>
        </nav>
    );
}

export default NavBar