import React, { lazy, Suspense } from 'react';
/* import ReactGA from "react-ga"; */
import { i18n } from "./i18n";
import { useTranslation } from 'react-i18next';


const NavBar = lazy(() => import('./components/NavBar'));
const Hero = lazy(() => import('./components/Hero'));
const Education = lazy(() => import('./components/Education'));
const Skills = lazy(() => import('./components/Skills/'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));





/* 
function initialGA() {
  ReactGA.initialize("G-84EH6C8V50");
  ReactGA.pageview("Anasayfa");
} */


function App() {
  /* initialGA(); */

  const { t } = useTranslation();
  return (
    <div className="h-screen main-color justify-center items-center">
      <Suspense fallback={<center>{t("loading")}</center>}>
        <NavBar t={t} />
        <Hero t={t} />
        <Education t={t} />
        <Skills t={t} />
        <Contact t={t} />
        <Footer />
      </Suspense>

    </div>


  );
}

export default App;
