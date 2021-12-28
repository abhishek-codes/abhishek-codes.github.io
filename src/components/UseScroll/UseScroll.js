import { useAnimation } from 'framer-motion'
import {useInView} from "react-intersection-observer"

const UseScroll = (thresh=0.4) => {
    const animateControl = useAnimation();
    const [element, view] = useInView({threshold: thresh});
    if(view){
        animateControl.start("visible");
    }
    else{
        animateControl.start("hidden");
    }
    return [element,animateControl]
}

export default UseScroll
