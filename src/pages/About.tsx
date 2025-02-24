import React from 'react'
import Navbar from '../component/Navbar'
import HeroAbout from '../sections/about/Hero'
import Content from '../sections/about/Content'

const About = () => {
    return (
        <>
            <Navbar />
            <div className="">
                <HeroAbout />
                <Content />
            </div>
        </>
    )
}

export default About