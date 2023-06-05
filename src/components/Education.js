import React from 'react'

function Education({ t }) {
    return (
        <section id='education' className="mx-8 flex justify-center items-center edusec">
            <div className='EduBox flex flex-col gap-8'>
                <h1 className='title font-bold text-4xl	'>
                    {t("edu")}
                </h1>
                <div className='flex flex-col gap-6'>
                    <a href='https://ihakkikonyaliilkokulu.meb.k12.tr' aria-label='School link'>
                        <h2 className='font-bold'>2014 - 2018</h2>
                        <p>{t("primarySchool")}</p>
                    </a>
                    <a href='https://rasathaneortaokulu.meb.k12.tr' aria-label='School link'>
                        <h2 className='font-bold'>2018 - 2022</h2>
                        <p>{t("middleSchool")}</p>
                    </a>
                    <a href='https://bulentakarcalianadolulisesi.meb.k12.tr' aria-label='School link'>
                        <h2 className='font-bold'>2022 - ...</h2>
                        <p>{t("highSchool")}</p>
                    </a>
                </div>
            </div>
            <div className='EduBox flex flex-col gap-8'>
                <h1 className='title font-bold text-4xl	'>
                    {t("projects")}
                </h1>
                <div className='flex flex-col gap-6'>
                    <a href='Link for a Project of mine'>
                        <h2 className='font-bold'>2023</h2>
                        <a className='text-blue-800 font-bold underline' href='https://munazara.netlify.app'>{t("projects_baal")}</a>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Education