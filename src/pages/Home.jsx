import './Home.style.css';
import Slider from '../components/Slider';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

import pyramid from '../images/pyramid.png';
import med from '../images/med.png';

function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Slider />
      <main className="home">
        <div className="container">
          <div className="home-content-wrapper">
            <h1 className="welcome">
              Welcome to <br /> <br />
              <span data-aos="fade-up" data-aos-duration="2000" className="ag-title">
                Ancient Gamer
              </span>
            </h1>
            <div className="underline"></div>
            <p data-aos="fade-up" data-aos-duration="800" className="home-text">
              A lot of people are praising games from 00's and they say that it was the best time to
              be a gamer. Back then people were going wild with new stuff. Video games had an
              element of mystique and mysticism that is very hard to replicate nowadays, simply
              because we have a lot more game experiences to compare to. We go back to these worlds
              time to time, but it's not just revisiting the gameplay, we're revisiting the feelings
              we had when we first played it so many years ago. Come into our store and choose some
              piece of memories for the next couple of evenings.
            </p>
            <Link data-aos="fade-up" data-aos-duration="1000" to="/games" className="choose-games">
              choose games
            </Link>
          </div>
        </div>

        <div className="sh-pair">
          <img src={med} alt="med" className="sh-char med" />
          <img src={pyramid} alt="pyramid" className="sh-char pyramid" />
        </div>
      </main>
    </>
  );
}

export default Home;
