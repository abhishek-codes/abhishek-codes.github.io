import React from "react";
import {
  SkillContainer,
  SkillWrapper,
  SkillSectionContainer,
  SkillSectionWrapper,
  Img, SkillSectionRow,Column1,Column2, Column3, Column4
} from "./SkillsElements";
import {
  python,
  django,
  docker,
  dotnet,
  mssql,
  cplusplus,
  reactjs,
  visualbasic,
  js,
} from "./SkillData";
import UseScroll from "../UseScroll/UseScroll";
import { cardAnimation } from "../Home/Animations";
import { motion } from "framer-motion";

const SkillInfo = ({ img, alt }) => {
  const [element,animateControl] = UseScroll();
  return (
    <motion.div
              variants={cardAnimation}
              animate={animateControl}
            >
    <SkillContainer ref={element}>
      <SkillWrapper>
        <Img src={img} alt={alt} />
      </SkillWrapper>
    </SkillContainer>
    </motion.div>
  );
};

const Skills = ({ lightBg, id }) => {
  const [element,animateControl] = UseScroll();
  return (
    <SkillSectionContainer lightBg={lightBg} id={id}>
      <SkillSectionWrapper ref={element}>
        <SkillSectionRow>
          <Column1>
            <SkillInfo {...python} animateControl={animateControl} />
          </Column1>
          <Column2>
            <SkillInfo {...django} animateControl={animateControl} />
          </Column2>
          <Column3>
          <SkillInfo {...cplusplus} animateControl={animateControl}/>
          </Column3>
          </SkillSectionRow>
          <SkillSectionRow>
          <Column1>
            <SkillInfo {...dotnet} animateControl={animateControl} />
          </Column1>
          <Column2>
            <SkillInfo {...visualbasic} animateControl={animateControl}/>
          </Column2>
          <Column3>
          <SkillInfo {...docker} animateControl={animateControl}/>
          </Column3>
        </SkillSectionRow>
        <SkillSectionRow>
          <Column1>
          <SkillInfo {...mssql} animateControl={animateControl}/>
          </Column1>
          <Column2>
          <SkillInfo {...reactjs} animateControl={animateControl}/>
          </Column2>
          <Column3>
          <SkillInfo {...js} animateControl={animateControl}/>
          </Column3>
        </SkillSectionRow>
      </SkillSectionWrapper>
    </SkillSectionContainer>
  );
};

export default Skills;
