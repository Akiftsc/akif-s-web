import React, { lazy, Suspense } from 'react';
/* import ReactGA from "react-ga"; */
import { i18n } from "./i18n";
import { useTranslation } from 'react-i18next';


const NavBar = lazy(() => import('./components/NavBar'));
const Hero = lazy(() => import('./components/Hero'));
const Education = lazy(() => import('./components/Education'));
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
    <div className="h-screen main-color justify-center items-center relative">
      <Suspense fallback={<center>{t("loading")}</center>}>
        <NavBar t={t} />
        <Hero t={t} />
        <Education t={t} />
        <Footer home={true} />
      </Suspense>

    </div>


  );
}

export default App;
