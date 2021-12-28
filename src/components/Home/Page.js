import React from 'react'
import { PageContainer,PageBg,VideoBg,PageContent} from './PageElements' 
import Video from './video.mp4' 
import Profile from './Profile'

const Page = () => {
    return (
        <PageContainer id='home'>
            <PageBg>
                <VideoBg autoPlay autostart loop muted src={ Video } type='video/mp4' />
            </PageBg>
            <PageContent>
                <Profile/>
            </PageContent>
        </PageContainer>
    )
}

export default Page
