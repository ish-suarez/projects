import React from "react";

export default function AboutMe() {
  return (
    <div className="md:w-1/2 2xl:w-3/4 2xl:px-40 xl:px-10 px-5 my-5">
      <h3 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-purple-700 my-3">
        Who am I?
      </h3>
      <div>
        <p className="text-sm sm:text-lg md:leading-6 lg:leading-9 text-blueGray-700 2xl:w-3/4">
          Let me formally introduce myself, my name is Ismael Hector Suarez, I am 27 years old, a Full Stack Developer
          focused with the MERN stack (MongoDB/MySQL, Express.js, React.js, Node.js). My knowledge touches Python, Django, some Ruby on Rails.  
          <br></br>
          <br></br>
          Solving problems with code is challenging, but with proper tools and resources, solutions can be found.
          <br></br>
          <br></br>
          Look, business without websites are missing out. I hear it all the time; "I have a website",
          and it ends up being a Facebook page or Instagram account (same thing if you ask me).
          Though these avenues are helpful and do help, the problem remains.
          A high percentage of people research a company online before even thinking 
          about visiting in person, yet alone think about typing in their credit card information to make a purchase.
          Roughly half of website visitors leave if the site they are visiting takes longer than three seconds to load, the odds
          of them leaving are higher if the website is not mobile responsive. Meaning, how your website looks and feels
          matters whether you want to believe it or not.
          <br></br>
          <br></br>
          My recent work for prospecting clients is in my <a className="text-purple-600 hover:text-purple-400 " href="/Portfolio">Portfolio</a>. For all my other projects
          check out my <a className="text-purple-600 hover:text-purple-400" href="https://github.com/ish-suarez" target="_blank" rel='noreferrer' >GitHub</a>.
          <br></br> 
          <br></br>
          I want to help you upscale your business and mine. 
        </p>
      </div>
    </div>
  );
}
