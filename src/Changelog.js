import React, { lazy, Suspense } from 'react';
import changelogContent from './changelog.md';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
const NavBar = lazy(() => import('./components/NavBar'));
const Footer = lazy(() => import('./components/Footer'));
function Changelog() {

    const [mdData, setMdData] = useState("");
    async function fetchChangelog() {
        await fetch(changelogContent).then((response) => response.text()).then((text) => {
            setMdData(text)
        })
    }
    useEffect(() => {

        fetchChangelog()

    }, [])

    const { t } = useTranslation();

    return (


        <Suspense fallback={<center>Yükleniyor</center>}>
            <NavBar t={t} />
            <section className="block text-gray-600 body-font h-full"  >
                <div className="blog text-black mx-auto flex flex-col gap-4 px-5 py-24 align-center">
                    <h1 className='title text-5xl font-bold mt-4  leading-snug flex gap-4 w-full items-center justify-center'>
                        CHANGELOG
                    </h1>
                    <p className='text-center items-center justify-center'>
                        <ReactMarkdown>
                            {mdData}
                        </ReactMarkdown>
                    </p>
                </div>
            </section>

            <Footer />
        </Suspense>
    );
}

export default Changelog