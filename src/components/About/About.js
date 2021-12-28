import React from "react";
import {
  AboutSectionContainer,
  AboutSectionRow,
  AboutSectionWrapper,
  Column1,
  Column2,
  TextWrapper,
  SectionHeading,
  Subtitle,
  Img,
  ImgWrap,
} from "./AboutElements";
import { motion } from "framer-motion";
import UseScroll from "../UseScroll/UseScroll";
import { leftAnimation, rightAnimation } from "../Home/Animations";

const About = ({ id, headline, describe, img, alt }) => {
    const [element, animateControl] = UseScroll()

  return (
    <AboutSectionContainer id={id}>
      <AboutSectionWrapper  ref={element}>
        <AboutSectionRow>
          <Column1>
            <motion.div
              variants={rightAnimation}
              animate={animateControl}
            >
              <TextWrapper>
                <SectionHeading>{headline}</SectionHeading>
                <Subtitle>{describe}</Subtitle>
              </TextWrapper>
            </motion.div>
          </Column1>
          <Column2>
            <motion.div
              variants={leftAnimation}
              animate={animateControl}
            >
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </motion.div>
          </Column2>
        </AboutSectionRow>
      </AboutSectionWrapper>
    </AboutSectionContainer>
  );
};

export default About;
