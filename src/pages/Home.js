import React from "react";
import { useState } from "react";
import TypeWriterEffect from "react-typewriter-effect";
import { insta_logo, linkedin_logo, twitter_logo, github_logo, profile } from "../images/images.js";

import "../style/home.css";

function Home() {
  const [insta, setinsta] = useState(false);
  const [twitter, settwitter] = useState(false);
  const [github, setgithub] = useState(false);
  const [linkedin, setlinkedin] = useState(false);
  return (
    <div className="card container mx-auto w-2/5 rounded-3xl text-center bg-white flex p-20 justify-center">
      <div className="inside_card flex flex-col items-center my-3">
        <div>
          <img className="left_content_pic rounded-full" src={profile} alt="" width={140} />
        </div>
        <div className="flex flex-col justify-center ">
          <div className="left_content_logo flex items-center justify-between mt-6">
            <a href="https://instagram.com/pratham_0094" target="_blank" rel="noreferrer" className="left_content_img m-2">
              <img
                src={insta_logo}
                alt=""
                width={30}
                onMouseEnter={() => { setinsta(true) }}
                onMouseLeave={() => { setinsta(false) }}
              />
            </a>
            <a href="https://twitter.com/pratham_0094" target="_blank" rel="noreferrer" className="left_content_img m-2">
              <img
                src={twitter_logo}
                alt=""
                width={30}
                onMouseEnter={() => { settwitter(true) }}
                onMouseLeave={() => { settwitter(false) }}
              />
            </a>
            <a href="https://www.linkedin.com/in/pratham-sahu-513a00206" target="_blank" rel="noreferrer" className="left_content_img m-2">
              <img
                src={linkedin_logo}
                alt=""
                width={30}
                onMouseEnter={() => { setlinkedin(true) }}
                onMouseLeave={() => { setlinkedin(false) }}
              />
            </a>
            <a href="https://github.com/pratham-0094" target="_blank" rel="noreferrer" className="left_content_img m-2">
              <img
                src={github_logo}
                alt=""
                width={30}
                onMouseEnter={() => { setgithub(true) }}
                onMouseLeave={() => { setgithub(false) }}
              />
            </a>
          </div>
          <div className="left_content_input flex font-bold mt-6">
            <div className="username text-xs">
              {insta && <h2 className="justify-center">pratham_0094</h2>}
              {twitter && <h2 className="justify-center">pratham_0094</h2>}
              {github && <h2 className="justify-center">pratham-0094</h2>}
              {linkedin && <h2 className="justify-center">PRATHAM SAHU</h2>}
            </div>
          </div>
        </div>
      </div>
      <div className="right_content flex text-left flex-col justify-evenly ml-20">
        <div className="">
          <div className="right_content_text font-bold text-2xl">PRATHAM SAHU</div>
          <div className="right_content_effect flex text-xl">
            <p className="mr-2">I'm a</p>
            <TypeWriterEffect
              textStyle={{
                fontFamily: "",
                color: "red",
                fontWeight: 3000,
                fontSize: "1.2rem",
              }}
              startDelay={2000}
              cursorColor="#34ebeb"
              multiText={["Developer", "Designer", "Programmer"]}
              loop={true}
              nextTextDelay={1000}
              typeSpeed={30}
              className="right_content_effect"
            />
          </div>
        </div>
        <div className="text-sm text-white leading-5">
          <p className="right_content_para p-5 text-slate-100 text-center rounded-lg">
            BTech CSE'24 student from Shri Shankaracharya Technical Campus,
            Bhilai
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
