import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import { FaArrowCircleUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const ContainerScroll = styled(Link)` 
  background-color: transparent;
  border-radius: 100%;
  position: fixed;
  height: 4rem;
  width: 4rem;
  bottom: 40px;
  right: 40px;
  z-index: 2000;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid #fff; */
  svg {
    color: white;
    font-size: 2rem;
  }
` 

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  window.addEventListener("scroll", toggleVisible);
    return (
        <>{visible && (
        <ContainerScroll to='home' 
        smooth={true} duration={500}
        spy={true} exact='true'
        offset={-60}>
            <FaArrowCircleUp/>
        </ContainerScroll>
        )}
        </>
    )
}

export default ScrollToTop
