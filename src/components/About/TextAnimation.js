import react from "react";
import styled, { keyframes } from "styled-components";

import React from "react";

const reactArray = "React".split("");

const AnimationText = keyframes` 
  0% { opacity: 0; transform: translateX(-100px) skewX(10deg) skewY(10deg) rotateZ(30deg); filter: blur(10px); }
  25% { opacity: 1; transform: translateX(0px) skewX(0deg) skewY(0deg) rotateZ(0deg); filter: blur(0px); }
  75% { opacity: 1; transform: translateX(0px) skewX(0deg) skewY(0deg) rotateZ(0deg); filter: blur(1px); }
  100% { opacity: 0; transform: translateX(-100px) skewX(10deg) skewY(10deg) rotateZ(30deg); filter: blur(10px); }
`;

const Wrapper = styled.span`
  display: inline-block;

    span {
    opacity: 0;
    display: inline-block;
    animation-name: ${AnimationText};
    animation-duration: 15s;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    }
    span:nth-child(1) {
    animation-delay: 0.5s;
    }
    span:nth-child(2) {
    animation-delay: 0.4s;
    }
    span:nth-child(3) {
    animation-delay: 0.3s;
    }
    span:nth-child(4) {
    animation-delay: 0.2s;
    }
    span:nth-child(5) {
    animation-delay: 0.1s;
    }
`;

const TextAnimation = () => {
  return (
    <Wrapper>
      {reactArray.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </Wrapper>
  );
};

export default TextAnimation;
