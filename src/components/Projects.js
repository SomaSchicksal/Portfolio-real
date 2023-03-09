import React from 'react'
import IMG1 from "../assets/portfolio1.jpg"
import gym from "../assets/gym-app.JPG"
import "./Projects.css"
import movie from "../assets/movie-app.JPG"
import deck from "../assets/deck-app.JPG"

const Projects = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={movie} alt=""></img>
          </div>
          <h3>Movie Watchlist App</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/SomaSchicksal/movies-watchlist" className="btn" target="_blank">Github</a>
          <a href="https://joelsmovieswatchlist.netlify.app/" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={gym} alt=""></img>
          </div>
          <h3>Fitness Exercises App</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/SomaSchicksal/portfolio-gym-app" className="btn" target="_blank">Github</a>
          <a href="https://joelsfitnessapp.netlify.app/" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={deck} alt=""></img>
          </div>
          <h3>Card Game Deckbuilder</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/SomaSchicksal/deck-builder" className="btn" target="_blank">Github</a>
          <a href="https://joelsdeckbuilder.netlify.app/" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Projects