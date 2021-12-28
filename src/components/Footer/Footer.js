import React from 'react'
import { FooterContainer,FooterWrap,SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRights } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                {/* <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>

                            </FooterLinkTitle>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer> */}
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            Abhishek
                        </SocialLogo>
                        <WebsiteRights>Website © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
