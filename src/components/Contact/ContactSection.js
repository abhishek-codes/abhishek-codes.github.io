import React from "react";
import Contact from "./Contact";
import { useState, useEffect } from "react";
import ParallaxHover from "../ParallaxHover/ParallaxHover";
import ContactInfo from "./ContactInfo";
import { Parallax } from "react-scroll-parallax";
import { phone, email, address } from "./Data";
import styled from "styled-components";

export const ContactSectionContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#606060" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const ContactSectionWrapper = styled.div`
  display: grid;
  z-index: 1;
  min-height: 600px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  /* padding: 0 24px; */
  justify-content: center;
`;

export const ContactSectionRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2 col3";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col1 col1" "col2 col2 col2" "col3 col3 col3";
  }
`;

export const Column1 = styled.div`
  margin: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const Column3 = styled.div`
  margin: 15px;
  padding: 0 15px;
  grid-area: col3;
`;

const ContactSection = ({ lightBg, id }) => {
  const [disabled, setdisabled] = useState(() => {
    if (window.innerWidth <= 480) return true;
    else return false;
  });
  const handleResize = () => {
    if (window.innerWidth <= 480) setdisabled(true);
    else setdisabled(false);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <ContactSectionContainer lightBg={lightBg} id={id}>
      <ContactSectionWrapper>
        <ContactSectionRow>
          <Column1>
            <Parallax x={[-7, 0]} tagOuter="figure">
              <ParallaxHover width="400" height="300">
                <ContactInfo {...phone} />
              </ParallaxHover>
            </Parallax>
          </Column1>
          <Column2>
              <ParallaxHover width="400" height="300">
                <ContactInfo {...email} />
              </ParallaxHover>
          </Column2>
          <Column3>
            <Parallax x={[7, 0]} tagOuter="figure">
              <ParallaxHover width="400" height="300">
                <ContactInfo {...address} />
              </ParallaxHover>
            </Parallax>
          </Column3>
        </ContactSectionRow>
        <ContactSectionRow>
          <Column2>
            <Contact />
          </Column2>
        </ContactSectionRow>
      </ContactSectionWrapper>
    </ContactSectionContainer>
  );
};

export default ContactSection;
