import React, { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
const NavBar = lazy(() => import('../components/NavBar'));
const Footer = lazy(() => import('../components/Footer'));

function Layout() {

    const { t } = useTranslation();
    return (

        <Suspense fallback={<center>Yükleniyor</center>}>
            <NavBar t={t} />
            <Outlet />

            <Footer />
        </Suspense>
    )
}

export default Layout