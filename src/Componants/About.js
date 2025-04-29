import React from 'react'
import aboutimg from '../Assets/Bhargav-profile.jpg';
function About() {
    const config={
        line1:'Hi, My name is Kilaparthi Bhargav. I am a full stact web developer look for opportunities where my skills can be used to the fullest potential for the benefit of the organization.I am proficient in Frontend skills like React.js,Java Script, html&css, Tailwind CSS+Bootstrap ' ,
        line2:'I good skills in Java,SQL and SpringBoot I seek a challenging position within a progressive organization that will showcase my strengths and allow me to grow professionally and personally EDUCATION '
    }
    return (
        <section className='flex flex-col md:flex-row md:py-10 bg-primary px-5' id='about'>
            <div className='md:w-1/2 p-10 flex justify-center'>
                <img className='max-h-80' src={aboutimg} />
            </div>

            <div className='md:w-1/2 flex justify-center '>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl border-b-4 border-[#2020d3] mb-3 w-max' >
                        About Me
                    </h1>
                    <p className='pb-5'>{config.line1}
                    </p>
                    <p className=''>{config.line2}</p>
                </div>
            </div>
        </section>
    )
}

export default About
