import React from 'react';
import '../../styles/About.css';
import Avatar from '../../assets/images/Avatar.JPG';

export default function About() {
  return (
    <div className="about">
      <div className="aboutHead">
        <figure>
          <img src={`${Avatar}`} alt="Avatar" />
        </figure>
        <div className="aboutMain">
          <h1>About Me</h1>
          Fits all the new-york stereotypes:
          <ul>
            <li>Walks fast.</li>
            <li>Talks as fast as I walk.</li>
            <li>Hard to impress/faze.</li>
            <li>MTA's repeat customer.</li>
            <li>Only accepts NY slice pizza.</li>
          </ul>
          <p>
            Born and raised in Brooklyn, NY. Though I can't tell I was told I have the Brooklyn accent.
            As a child of immigrant parents, I was raised with Asian influence while being surrounded by American culture.
            I like my hot noodle soups but would also crave a good bowl of mac and cheese.
            Education was prioritized in the house but creative freedom was also valued.
            Being bilingual was by default, which makes me fluent in English and Chinese.
            100% a city person and never bored of the Big Apple, the city of dreams.
          </p>
        </div>
      </div>
      <div className="aboutDetails">
        <div className="background">
          <h1>Background</h1>
          <p>
            In 2021, I graduated from The Cooper Union for the Advancement of Science and Art with a bachelors degree in Chemical Engineering.
            Along with pursuing my bachelors degree, I also acquired a minor in Humanities and Social Science.
            Post-graduation, I worked as a Production Engineer at a medical device manufacturing company.
            From that position, along with my several prior biomedical experiences, I moved on to becoming a Physicist at the Memorial Sloan Kettering Cancer Center.
            There, I worked at the Department of Medical Physics with a focus on radiotherapy cancer treatments.
            Several database and web-development projects lead me to taking the Columbia University School of Engineering's coding Boot Camp.
            Over the course of the bootcamp, I developed full-stack web development skills and found the career of my interest.
          </p>
        </div>
        <div className="present">
          <h1>Present</h1>
          <p>
            Currently, I am working at the Memorial Sloan Kettering Cancer Center as a Physicist part of the Department of Medical Physics.
            My work focuses on patient care related to raiation therapy treatments.
            Additionally, I am also in charge of several database and web project for the department.
            I work closely with the IT team at the hospital to bring new and improved systems to the department.
            Due to my interest and involvement in the technical projects, I am attending the Columbia University School of Engineering's coding Boot Camp as a part-time student.
            The boot camp is due to complete in May of 2023 to which I will receive my certification as a full-stack developer.
          </p>
        </div>
        <div className="funFacts">
          <h1>Fun Facts</h1>
          <ul>
            <li>Huge fan of food. On a quest to try out as many restaurants in NYC as possible. </li>
            <li>Loves to cook but dislikes having to clean up afterwards.</li>
            <li>Likes to craft but each craft hobby only lasts a few months before moving on to the next one (sketching, painting, knitting, DIY knick knacks).</li>
            <li>Has dreams to travel the world but only ventured into the countries Canda, China, Mexico, and Korea thus far.</li>
            <li>Have very good memory and can remember/pick up things quickly.</li>
            <li>Born with unilaterial hearing loss and wore a hearing aid for most of my life.</li>
            <li>Interested in learning different languages: Fluent in English and Chinese (Mandarin, Cantonese, Fujianese), intermediate in Korean, and studied Spanish and Russian.</li>
            <li>Favorite season: Summer because I am always cold.</li>
            <li>Coffee does not wake me up but I am rarely tired anyways.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
