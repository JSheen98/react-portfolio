import React from "react";
import techBlogImg from '../assets/images/home-screen.png'
import musinionImg from '../assets/images/musinion-home-2.png'
import weatherDashboardImg from '../assets/images/weather-dashboard-ex.png'
import movieRecommenderImg from '../assets/images/movie-recommender-ss.jpg'
import svgGeneratorImg from '../assets/images/svg-logo-generator.png'
import socialNetworkApiImg from '../assets/images/social-network-api.png'
import '../styles/Portfolio.css'

// Styling
const styles = {
  card: {
    width: '35rem'
  },
  btn: {
    background: '#5D5E60',
    color: '#B9FAF8'
  },
  cardFooter: {
    backgroundColor: '#5BADBF'
  }
}

// Project card component with props
function ProjectCard(props) {
  return (
    <div className="card mb-4 me-2 ms-2" style={styles.card}>
      <div class="overlay-container">
        <a href={props.liveSite}>
          <img className="card-img-top img-size" href={props.liveSite} src={props.image} alt={props.alt}/>
          {/* Overlay that appears on hover of overlay container (surrounds the image) */}
          <div class="overlay">
            <div class="title">{props.title}</div>
            <div class="description">{props.description}</div>
            <div class="live">Click to view the app!</div>
          </div>
        </a>
      </div>
      <div className="card-body align-items-center d-flex flex-column card-footer" style={styles.cardFooter}>
        <a href={props.gitHub} class="btn" style={styles.btn}>GitHub</a>
      </div>
    </div>
  )
}

// Objects to pass into the Component's props below
const musinion = {
  title: 'Musinion',
  description: "This team project is a full stack website for creating personal album reviews, as well as viewing and responding to other user's reviews.",
  image: musinionImg,
  gitHub: 'https://github.com/Teaom/Musinion',
  liveSite: 'https://musinion.herokuapp.com/',
  alt: 'Musinion website preview'
}

const techBlog = {
  title: 'Tech Blog 🤖',
  description: "This web app features a full stack tech blog, with login and sign up as well as the ability to read, write, update and delete blog posts and comments.",
  image: techBlogImg,
  gitHub: 'https://github.com/JSheen98/tech-blog',
  liveSite: 'https://safe-ridge-72471.herokuapp.com/',
  alt: 'Tech Blog website preview'
}

const weatherDashboard = {
  title: 'Weather Dashboard',
  description: 'This front end application features a dashboard that allows the user to search for a location (using the Open Weather API), and the weather for the next 5 days is returned. Previous searches are also persisted via local storage and can be reused.',
  image: weatherDashboardImg,
  gitHub: 'https://github.com/JSheen98/weather-dashboard',
  liveSite: 'https://jsheen98.github.io/weather-dashboard/',
  alt: 'Weather Dashboard website preview'
}

const movieRecommender = {
  title: '🎞️ Movie Recommender',
  description: 'This website is a team project that features a frontend movie dashboard that allows a user to search and filter for movies using the TMDb API, then a user can search for nearby theaters using the Google Maps API.',
  image: movieRecommenderImg,
  gitHub: 'https://github.com/JSheen98/coding-bootcamp-project1-movie-recommender',
  liveSite: 'https://jsheen98.github.io/coding-bootcamp-project1-movie-recommender/',
  alt: 'Movie Recommender website preview'
}

const svgGenerator = {
  title: 'SVG Logo Generator',
  description: "This backend application features a simple SVG logo generator. It uses the inquirer npm package to get user input, and generates a logo based on those values.",
  image: svgGeneratorImg,
  gitHub: 'https://github.com/JSheen98/svg-logo-maker',
  liveSite: 'https://github.com/JSheen98/svg-logo-maker',
  alt: 'SVG Generator code line preview'
}

const socialNetworkApi = {
  title: 'Social Network API',
  description: "This backend is a backend API, that uses NoSQL. It features several models, and references between them, to create a flexible database for a Social Network App.",
  image: socialNetworkApiImg,
  gitHub: 'https://github.com/JSheen98/social-network-api',
  liveSite: 'https://github.com/JSheen98/social-network-api',
  alt: 'Social Network API Insomnia preview'
}

// For each project card, we're calling in a different set of properties from the objects above
export default function Portfolio() {
  return (
    <section className='content-container'>
      <h1 className="ms-4 mb-4">Portfolio</h1>
      <div className="d-flex flex-wrap justify-content-around">
      <ProjectCard description={musinion.description} title={musinion.title} image={musinion.image} gitHub={musinion.gitHub} liveSite={musinion.liveSite} alt={musinion.alt} />
      <ProjectCard description={techBlog.description} title={techBlog.title} image={techBlog.image} gitHub={techBlog.gitHub} liveSite={techBlog.liveSite} alt={techBlog.alt} />
      <ProjectCard description={weatherDashboard.description} title={weatherDashboard.title} image={weatherDashboard.image} gitHub={weatherDashboard.gitHub} liveSite={weatherDashboard.liveSite} alt={weatherDashboard.alt}/>
      <ProjectCard description={movieRecommender.description} title={movieRecommender.title} image={movieRecommender.image} gitHub={movieRecommender.gitHub} liveSite={movieRecommender.liveSite} alt={movieRecommender.alt} />
      <ProjectCard description={svgGenerator.description} title={svgGenerator.title} image={svgGenerator.image} gitHub={svgGenerator.gitHub} liveSite={svgGenerator.liveSite} alt={svgGenerator.alt} />
      <ProjectCard description={socialNetworkApi.description} title={socialNetworkApi.title} image={socialNetworkApi.image} gitHub={socialNetworkApi.gitHub} liveSite={socialNetworkApi.liveSite} alt={socialNetworkApi.alt} />
      </div>
    </section>
    
  )
}