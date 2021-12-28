import React,{useState} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import Page from './Page'
import Section from '../Section/Section'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from '../Section/Data'
import ContactSection from '../Contact/ContactSection'
import Footer from '../Footer/Footer'
import Skills from '../Skills/Skills'
import About from '../About/About'
import ScrollToTop from '../ScrollToTop/ScrollToTop'
import { motion } from 'framer-motion'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <motion.div initial="hidden" animate="visible">
        <ScrollToTop/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Page/>
        <About {...homeObjOne}/>
        <Skills {...homeObjTwo}/>
        <Section {...homeObjThree}/>
        <ContactSection {...homeObjFour}/>
        <Footer/>
        </motion.div>
    )
}

export default Home
