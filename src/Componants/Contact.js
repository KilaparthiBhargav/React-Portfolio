import React from 'react'

function Contact() {
const config={
    email:'bhargav908716@gmail.com',
    phone:'9500186358'
}

    return (
        <section className='flex flex-col px-5 py-32 bg-secondary' id='contact'>

            <div className='flex flex-col items-center text-white '>
                <h1 className='text-4xl border-b-4 border-[#2020d3] mb-3 w-max' >
                    Contact
                </h1>
                <p className='pb-5'>if you want to discuss more in detail, please contact back me
                </p>

                <p><span className='font-bold'>Email : </span> {config.email}</p>
                <p><span className='font-bold'>Phone : </span> {config.phone}</p>
            </div>

        </section>
    )
}

export default Contact
