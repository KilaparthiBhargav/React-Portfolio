import React from 'react'
import homeimg from '../Assets/9c82df01-989a-4195-8d2e-56372c3ad9e5.jpeg';
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';


function Home() {
const config={
    subtitle:'Im a Full-Stact Developer and Designer', 
    github:'',
    instagram:'',
    linkdin:''
    
}


    return (
        <section className='flex flex-col md:flex-row px-5 justify-center bg-secondary text-white h-max'  >
            <div className='md:w-1/2 flex flex-col '>
                <h1 className='text-6xl  font-hero-font'>Hi,
                    <br />im <span className='text-blue-600'>Kilaparthi</span> Bhargav
                    <p className='text-2xl'>{config.subtitle}</p>
                </h1>
                <div className='p-1 py-2 flex linkicons'>
                    <a href='#' className=''><AiOutlineGithub size={30}/></a>
                    <a href='#'><AiOutlineInstagram size={30}/></a>
                    <a href='#'><AiOutlineLinkedin size={30}/></a>
                </div>
            </div>
            <span className='md:w-1/2 p-20'>
                <img className='max-h-96' src={homeimg} />
            </span>
        </section>
    )
}

export default Home
