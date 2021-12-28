import styled from "styled-components";

export const SkillSectionContainer = styled.div` 
    color: #fff;
    background: ${({lightBg}) => (lightBg? '#606060' : '#010606')};

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`

export const SkillSectionWrapper = styled.div` 
    display: grid;
    z-index:1;
    min-height:600px;
    width:100%;
    margin-right: auto;
    margin-left: auto;
    /* padding: 0 24px; */
    justify-content:center;
`

export const SkillContainer = styled.div`
/* min-width: 180px; */
padding:10px;
background-color: #fbfbfb;
border-radius: 8px;
box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
/* margin: 50px auto; */
color: #384d4a;
font-family: "Nunito", sans-serif;
font-size: 0.8rem;
align-items: center;
`;

export const SkillWrapper = styled.div` 
display: grid;
z-index:1;
margin-right: auto;
margin-left: auto;
/* padding: 0 24px; */
justify-content:center;
`

export const Img = styled.img` 
width: 100%;
height:100px;
margin: auto;
`

export const SkillSectionRow = styled.div` 
    display: grid;
    grid-auto-columns: minmax(auto,1fr);
    align-items:center;
    grid-template-areas: 'col1 col2 col3';

    @media screen and (max-width:768px){
        grid-template-areas:'col1 col1 col1' 'col2 col2 col2' 'col3 col3 col3';
    }
`

export const Column1 = styled.div` 
    margin:15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div` 
    margin:15px;
    padding: 0 15px;
    grid-area: col2;
`

export const Column3 = styled.div` 
    margin:15px;
    padding: 0 15px;
    grid-area: col3;
`