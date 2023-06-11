import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import i18n from "../i18n";
import britishFlag from "../locales/british.svg";
import { NavLink } from 'react-router-dom';
import turkishFlag from "../locales/turkish.svg";

const NavBar = React.memo(({ t }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

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
        i18n.changeLanguage(newLanguage);
    };



    const navClass = scrollPosition > 0 ? 'navBlack fixed z-10 top-0 w-full border-b-4 border-black border-solid z-50' : 'transparent mb-4 fixed z-10 top-0 w-full border-b-4 border-black border-solid ';


    const handleMenu = () => {
        setIsOpen(!isOpen)
    }


    return (
        <nav className={navClass}>
            <div className="mx-4 my-3 flex justify-between items-center">
                <div className='flex justify-center items-center'>
                    <NavLink to='/' className="font-bold lg:text-4xl text-3xl">
                        {isOpen ? "AKIF" : "MEHMET AKIF"}
                    </NavLink>
                    <div>
                        <img
                            style={{ cursor: "pointer", width: "32px", height: "64px", scale: "2", }}
                            className={`${isOpen ? "hidden" : "block"} link font-medium text-right ml-10 `}
                            src={i18n.language === "en" ? turkishFlag : britishFlag}
                            onClick={handleLanguageChange}
                            alt='flag'
                        />
                    </div>
                </div>
                <button
                    className="lg:hidden focus:outline-none absolute top-0 right-0 mx-4 my-6"
                    onClick={handleMenu}
                    aria-label="Menu"
                >
                    <GiHamburgerMenu />
                </button>

                <div className={`lg:block ${isOpen ? "block text-m mr-5" : "hidden text-lg"}`}>

                    <NavLink
                        to="/skills"
                        className="link leading-7 font-medium text-right ml-10"
                    >
                        {t("nav_2")}
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="link leading-7 font-medium text-right ml-10"
                    >
                        {t("nav_3")}
                    </NavLink>

                    <NavLink
                        to="/blog"
                        className="link leading-7 font-medium text-right ml-10"
                    >
                        Blog
                    </NavLink>

                    <NavLink
                        to="/changelog"
                        className="link leading-7 font-medium  text-right ml-10"
                    >
                        Changelog
                    </NavLink>
                </div>

            </div>
        </nav>
    )
})

export default NavBar