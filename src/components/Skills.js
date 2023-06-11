import React, { lazy, Suspense } from 'react';
import SkillComponent from "./Skills/SkillComponent";
import { i18n } from "../i18n";
import { useTranslation } from 'react-i18next';
const NavBar = lazy(() => import('./NavBar'));
const Footer = lazy(() => import('./Footer'));

function Skills() {

    const { t } = useTranslation();
    return (
        <Suspense fallback={<center>Yükleniyor</center>}>
            <NavBar t={t} />
            <section id='skills' className='mx-8 my-24 flex justify-center items-center'>
                <div className='SkillBox flex flex-col gap-4 items-center justify-center w-full'>
                    <h1 className='text-center title font-bold text-4xl'>
                        {t("skills")}
                    </h1>
                    <div className='grid gap-24 skillParent'>
                        <SkillComponent icon="Html5" text="HTML" />
                        <SkillComponent icon="Javascript" text="Javascript" />
                        <SkillComponent icon="Css3" text="CSS" />
                        <SkillComponent icon="Express" text="ExpressJS" />
                        <SkillComponent icon="Nodedotjs" text="NodeJS" />
                        <SkillComponent icon="Typescript" text="Typescript" />
                        <SkillComponent icon="React" text="ReactJS" />
                        <SkillComponent icon="Mongodb" text="MongoDB" />
                        <SkillComponent icon="Tailwindcss" text="TailwindCSS" />
                        <SkillComponent icon="Jsonwebtokens" text="JWT" />

                    </div>
                </div>
            </section>

            <Footer />
        </Suspense>
    )
}

export default Skills