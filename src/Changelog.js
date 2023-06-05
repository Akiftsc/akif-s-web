import React, { lazy, Suspense } from 'react';
import changelogContent from './changelog.md';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
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

    return (


        <Suspense fallback={<center>Yükleniyor</center>}>
            <h1 className='title text-5xl font-bold  leading-snug flex gap-4 w-full items-center justify-center'>
                CHANGELOG
            </h1>
            <p className='text-center items-center justify-center'>
                <ReactMarkdown>
                    {mdData}
                </ReactMarkdown>
            </p>
            <Footer />
        </Suspense>
    );
}

export default Changelog