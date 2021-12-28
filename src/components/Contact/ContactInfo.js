import React, { Component, useEffect } from "react";
import styled from "styled-components";
import "./Contact.css";

export const ContactContainer = styled.div`
  min-width: 180px;
  max-width: 400px;
  max-height:200px;
  padding: 1rem 2rem 5rem;
  background-color: #fbfbfb;
  border-radius: 8px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
  margin: 50px auto;
  color: #384d4a;
  font-family: "Nunito", sans-serif;
  font-size: 0.8rem;
  align-items: center;
`;

export const ContactWrapper = styled.div` 
    display: grid;
    z-index:1;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content:center;
`
export const SectionHeading = styled.h1` 
    margin-bottom: 24px;
    font-size: 28px;
    /* line-height:1.1; */
    font-weight: 600;
    color: '#010606';

    @media screen and (max-width: 480px){
        font-size: 22px;
    }
`

export const TextWrapper = styled.div` 
    padding-top: 0;
    padding-bottom: 60px;
`

export const SectionTitle = styled.div` 
    color: #01bf71;
    font-size: 16px;
    /* line-height: 16px; */
    font-weight: 700;
    letter-spacing:1.4px;
    text-transform:uppercase;
    margin-bottom: 16px;
`
export const Subtitle = styled.p` 
    margin-bottom: 35px;
    font-size:18px;
    line-height: 24px;
    color: '#010606';
`

const ContactInfo = ({topLine,headline,describe}) => {
  return (
    <ContactContainer>
      <ContactWrapper>
        <TextWrapper>
          <SectionTitle>{topLine}</SectionTitle>
          <SectionHeading>{headline}</SectionHeading>
          <Subtitle>{describe}</Subtitle>
        </TextWrapper>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default ContactInfo;
