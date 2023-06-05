import React from 'react';
import SkillComponent from './SkillComponent';

function Skills({ t }) {
    return (
        <section id='skills' className='mx-8 my-24 flex justify-center items-center'>
            <div className='SkillBox flex flex-col gap-4 items-center justify-center w-full'>
                <h1 className='text-center title font-bold text-4xl'>
                    {t("skills")}
                </h1>
                <div className='grid gap-24'>

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
    )
}

export default Skills