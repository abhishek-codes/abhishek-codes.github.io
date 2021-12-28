import React from 'react'
import styled from 'styled-components'
import imgNotFound from '../../assets/pagenotfound.svg'

export const Container = styled.div` 
    /* background: #0c0c0c; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 600px; */
    position: relative;
    z-index: 1;
    background-image: url(${imgNotFound});
    background-repeat:no-repeat;
    height: 600px;
    background-size: 600px 500px;
    background-position:center;

    @media screen and (max-width: 768px){
        background-size: 300px 250px;    }
`

const PageNotFound = () => {
    return (
        <Container/>
    )
}

export default PageNotFound
