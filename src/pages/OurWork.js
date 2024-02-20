import { Link } from "react-router-dom";
import { animate, motion } from "framer-motion";
import styled from "styled-components";

import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import { pageAnimation } from "../animation";

function OurWork() {
  return (
    <Work
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Movie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link to="/work/the-athlete">
          <img src={athlete} alt="athlete" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="the-racer" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </Movie>
    </Work>
  );
}

const Work = styled(motion.div)`
  min-height: 100dvh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #ccc;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70dvh;
    object-fit: cover;
  }
`;

export default OurWork;
