import React from 'react'

function Projects() {
    const config = {
        projeccts: [
            {
                image: "",
                discription: ' A Ecomerce Wensite. Built wih  SpringBoot',
                link: ''
            },
            {
                image: "",
                discription: 'Beget Food Restaurant website, Built with JAva SpringBoot',
                link: ''
            },
            {
                image: "",
                discription: 'Youtube Clone ,Built with basic HTML,CSS & JavaScript',
                link: ''
            }

        ]
    }

    return (
        <section className='flex flex-col py-20 px-5 justify-center bg-secondary ' id='projects'>
            <div className='w-full'>
                <div className='flex flex-col justify-center px-10 py-5 text-white'>
                    <h1 className='text-4xl border-b-4 border-[#2020d3] mb-3 w-max ' >Projects</h1>
                    <p >These are some of my best projects. I have built these with React, SpringBoot and HTML,CSS & JS. Check them out.</p>
                </div>
            </div>
            <div className='w-full flex justify-center' >
                <div className='flex md:flex-row flex-col px-10 gap-10  mt-4'>

                    {config.projeccts.map((prject) => (
                        <div className='relative'>
                            <img className='h-[200px] w-[300px] border bg-red-600' src={prject.image} />
                            <div className='project-disc'>
                                <p className='text-center py-5'>
                                    {prject.discription}
                                </p>
                                <div className='flex justify-center'>
                                    <a className='btn text-white' target='_blank' href={prject.link}> View Project</a>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Projects;
