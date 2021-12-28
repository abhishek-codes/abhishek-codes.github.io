import React from 'react'
import { Button } from './ButtonElements'
import { Column2, Img, ImgWrap ,SectionContainer,
    SectionHeading,SectionRow,SectionTitle,SectionWrapper,
    Subtitle,BtnWrap,TextWrapper,Column1} from './SectionElements'

const Section = ({lightBg,id,imgStart,topLine,lightText,headline,darkText,describe,buttonLabel,img,alt,primary,dark}) => {
    return (
        <SectionContainer lightBg={lightBg} id={id}>
            <SectionWrapper>
                <SectionRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <SectionTitle>{topLine}</SectionTitle>
                            <SectionHeading lightText={lightText}>{headline}</SectionHeading>
                            <Subtitle darkText={darkText}>{describe}</Subtitle>
                            <BtnWrap>
                                <Button to='home' smooth={true} 
                                duration={500} spy={true}
                                exact="true" offset={-80}
                                primary={primary? 1:0}
                                dark={dark? 1:0}>{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </SectionRow>
            </SectionWrapper>
        </SectionContainer>
    )
}

export default Section
