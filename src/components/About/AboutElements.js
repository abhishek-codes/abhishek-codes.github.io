import styled from "styled-components";

export const AboutSectionContainer = styled.div` 
    color: #fff;
    background: #010606;

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`

export const AboutSectionWrapper = styled.div` 
    display: grid;
    z-index:1;
    min-height:600px;
    width:100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content:center;
`

export const AboutSectionRow = styled.div` 
    display: grid;
    grid-auto-columns: minmax(auto,1fr);
    align-items:center;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width:768px){
        grid-template-areas: 'col1 col1' 'col2 col2';
    }
`

export const Column1 = styled.div` 
    margin-bottom:15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div` 
    margin-bottom:15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div` 
    max-width:540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const SectionHeading = styled.h1` 
    margin-bottom: 24px;
    font-size: 48px;
    line-height:1.1;
    font-weight: 600;
    color: #f7f8fa;

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const Subtitle = styled.p` 
    max-width:440px;
    margin-bottom: 35px;
    font-size:18px;
    line-height: 24px;
    color: #fff;
`

export const ImgWrap = styled.div` 
    max-width: 555px;
    height: 100%;
`
export const Img = styled.img` 
    width: 100%;
    margin: 0 0 10px 0;
`