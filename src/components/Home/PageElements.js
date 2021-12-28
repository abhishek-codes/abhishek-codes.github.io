import styled from "styled-components";

export const PageContainer = styled.div` 
    /* background: #0c0c0c; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 650px;
    position: relative;
    /* z-index: -999; */
`

export const PageBg = styled.div` 
    position: fixed;
    top: 0;
    right: 0;
    bottom:0;
    left:0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index:-999;
`

export const VideoBg = styled.video` 
    width: 100%;
    height: 100%;
    --o-object-fit:cover;
    object-fit:cover;
    background: #232a34;
`
export const PageContent = styled.div` 
    z-index:3;
    /* max-width:1200px; */
    position:absolute;
    padding:8px 24px;
    display:flex;
    flex-direction:column;
    align-items:center;

    @media screen and (max-width:960px){
        margin-top:100px;
    }
`

export const PageP = styled.h1` 
    color:#fff;
`