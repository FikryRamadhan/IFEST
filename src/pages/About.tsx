import React from 'react'
import Navbar from '../component/Navbar'
import HeroAbout from '../sections/about/Hero'
import Breadcrumbs from '../component/Breadcrumbs'

const About = () => {
    return (
        <>
            <Navbar />

            <div className="">
                <HeroAbout />
            </div>
        </>
    )
}

export default About