import React from 'react'
import Resumeimg from '../Assets/1.jpg';
function Resume() {
    const config=()=>{
        window.open('/BhargavResume.pdf','_blank')
    }
    return (
        <section className='flex flex-col md:flex-row md:py-10 bg-primary px-5' id='resume'>
            <div className='md:w-1/2 p-10 flex justify-center md:justify-end'>
                <img className='w-[200px] h-[300px]' src={Resumeimg} />
            </div>

            <div className='md:w-1/2 flex justify-center '>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl border-b-4 border-[#2020d3] mb-3 w-max' >
                        Resume
                    </h1>
                    <p className='pb-5'>You can view my Resume <a className='btn' href='#' onClick={config}>Downlod</a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Resume
