import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
       Welcome To <br />
       My personal Portfolio
     </SectionTitle>
     <SectionText>
     Junior Front-End developer with fundamental knowledge of software design, development, and testing. Designing and building responsive web design and mobile app, familiar with CSS and JS frameworks.
     </SectionText>
     <Button onClick={() => window.location = 'https://www.linkedin.com/in/enas-fares/'}> Learn More</Button>
   </LeftSection>

 </Section>
);

export default Hero;