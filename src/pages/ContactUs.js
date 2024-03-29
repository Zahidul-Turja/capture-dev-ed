import { motion } from "framer-motion";
import styled from "styled-components";

import { pageAnimation, titleAnim } from "../animation";

function ContactUs() {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Socials variants={titleAnim}>
            <Circle />
            <h2>Send Us A Message</h2>
          </Socials>
        </Hide>
        <Hide>
          <Socials variants={titleAnim}>
            <Circle />
            <h2>Send Us An Email.</h2>
          </Socials>
        </Hide>
        <Hide>
          <Socials variants={titleAnim}>
            <Circle />
            <h2>Social Media</h2>
          </Socials>
        </Hide>
      </div>
    </ContactStyle>
  );
}

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90dvh;

  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;

  @media (max-width: 1300px) {
    margin-top: 5rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;

  h2 {
    font-weight: 400;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: #353535;
`;

const Socials = styled(motion.div)`
  display: flex;
  align-items: center;

  h2 {
    margin: 2rem;
    font-weight: 400;
  }
`;

export default ContactUs;
