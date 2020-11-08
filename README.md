<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links-->
<!-- search and replace  game_night -->

<p align="center">
  <a href="mailto:a.quinkenstein@gmail.com"><img src="https://image.flaticon.com/icons/svg/725/725643.svg" height="20" width="20" /></a>
  <a href="https://linkedin.com/in/AnneQuinkenstein"><img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" height="20"     width="20" /></a>
</p>

<!-- PROJECT LOGO -->

  <h3 align="center">GAME NIGHT</h3>

<br />
<p align="center">
  <a href="https://game-night-aquin.netlify.app/">
    <img src="https://i.ibb.co/0Z13t1L/gamenight.png" alt="Logo" width="300" height="160">
  </a>

  <p align="center">
    Game Night is to have fun alone or with friends, even through a pandemic.
    Play a hangman game with movie titles in your favorite Language! (choosen from popular movies on OMDBApi & sea the poster passed from themoviedb.org) For each wrong guess a associated giphy is revealed - failure is not bad :) <br/>
    I used React Context to pass the logic of the game. I did some animations utilizing SCSS - will you find a easteregg? With Formspree the Input of the Contactform is sent to my Email.
    <br />
    <br />
    <a href="https://game-night-aquin.netlify.app/">Demo</a>
    ·
    <a href="https://github.com/AnneQuinkenstein/game_night/issues">Report Bug</a>
  </p>
</p>

### Built With

- [React](https://reactjs.org/)
- [React Context](https://reactjs.org/docs/context.html)
- [React Router](https://reactrouter.com/)
- [React Transition Groups](http://reactcommunity.org/react-transition-group)
- [SCSS](https://sass-lang.com/)
- [Axios](https://www.axios.com/)
- [Formspree](https://formspree.io/)
- [Open Movie API](https://www.omdbapi.com/)
- [The Movie DB API](https://www.themoviedb.org/)
- [Developer Joke API](https://sv443.net/jokeapi/v2/)
- [Giphy API](https://giphy.com/)

# Special Gotchas

## Design
I started with the idea: a gameing site to have fun alone or with friends in an easy way during lockdown of Covid19. I choosed to do Hangman, which is commenly known and easy to learn even if you don't know the rules. With games you can create an atmosephere of a specifiy world - i utilized movies for the athmosphere in hangman, retro arcade athetics for the home page and retro monitor athetics for the contact page. 

### Wireframe 

### Royalty free Pics 
[unsplash](https://unsplash.com/)
[freepik](https://www.freepik.com/)
[pexels](https://www.pexels.com/)
[pixabay](https://pixabay.com/)
[the Stocks](http://thestocks.im/)
[imcreator](http://imcreator.com/free) 

#### Icons 
[icon scout](https://iconscout.com/)

### Entrance Animation

#### Background-Pic
Look at a sign at the wall and if you click on the font, reach the entrance
1. scale pic to show the wall, 
2. onclick: scale pic to cover whole Screen

```css
.entranceBackground {
  background-image: url(arcadeEntrance.jpg);
  background-color: black;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  background-position: center;
  animation-name: divMove;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

@keyframes divMove {
  0% {
    height: calc(1000px + 100vh);
    background-position-x: right;
    background-position-y: -50vh;
    background-size: cover;
  }
  100% {
    height: 100vh;
    width: 100vw;
    background-position: center;
    transform: scale(1, 1);
  }
}
``` 
```CSS
.arcadeBackground {
  height: calc(1000px + 100vh);
  background-image: url(arcadeEntrance.jpg);
  background-color: black;
  background-position-x: right;
  background-position-y: -50vh;
  background-size: cover;
  background-repeat: no-repeat;
}
``` 

#### Flickering Font on the Sign 
CSS [Keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)
```CSS
animation: shine 2s forwards, flicker 3s infinite;
``` 
```CSS
@keyframes blink {
  0%,
  45%,
  75% {
    color: $white;
    text-shadow: 0 0 0.6rem $white, 0 0 1.5rem #a6a4d6,
      -0.2rem 0.1rem 1rem #9692e6, 0.2rem 0.1rem 1rem #8480e9,
      0 -0.5rem 2rem #615be1, 0 0.5rem 3rem $purple;
  }
  28%,
  35% {
    color: #8480e9;
    text-shadow: none;
  }
  82%,
  99% {
    color: hsla(234, 77%, 53%, 0.363);
    text-shadow: none;
  }
}

@keyframes shine {
  0% {
    color: $darkred;
    text-shadow: none;
  }
  100% {
    color: $white;
    text-shadow: 0 0 1.1rem $white, 0 0 2rem #a6a4d6,
      -0.2rem 0.1rem 1.5rem #9692e6, 0.2rem 0.1rem 1.5rem #8480e9,
      0 -0.5rem 2.5rem #615be1, 0 0.5rem 3.5rem $purple;
  }
}
``` 
Font is aligned to the wall using 
- [Transform-functions](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function): translate, rotate and skew, to align it with the wall. 
```css
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateX(8deg) rotateZ( -2deg) skewY(-0.5deg);
```
- [Perspective Origin](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin), to determine the vanishing point. 
```css
  perspective-origin: 150% 150%;
```

#### Easteregg 
On the right wall, there is a flickering light. If you hover over ist, you will see 
a developer joke from [Joke API](https://sv443.net/jokeapi/v2/)

#### Menu
Pacman ghosts flying in with CSS [Keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)

## Hangman Logic 
### APIs 
#### get Movie-Data 
##### get a reliable lists of popular movies from imdb-api & the fetch the infos for each movie more reliable from the moviedb.org

- Lifecycle-Methode [useEffect](https://reactjs.org/docs/hooks-effect.html) 
render fetch-calls on first render (ex componentDidMount())
render fetch-calls if [choosenLang, style, setGameState, phone, render] is changing

-fetch-calls
1. fetch popular movies from imdb-api.com
2. fetch movie infos and movie poster using a movie id from a random movie from themoviedb.org

- get a random number 
`const randomNum = Math.floor(Math.random() * 90);` 
as index of popular Movie array
`${movie.items[randomNum].id}`

- check lenght of movie title with terenary operator
` data.title.length < 25 ? setMovieData(data) : setRender(!render)`
if length is more then 25 letters, fetch a new title

- check with media query `phone` the screen-width: 
`import { useMediaPredicate } from "react-media-hook";`
if `phone` then movietitle should be < 10;


```javascript
  useEffect(() => {
    const getMovie = () => {
      fetch(
        `https://imdb-api.com/en/API/MostPopularMovies/${process.env.REACT_APP_IMDB_KEY}`
      )
        .then((res) => res.json())
        .then((data) => setMovie(data))
        .catch((err) => console.log("Error fetching and parsing data", err));
    };
    getMovie();

    const randomNum = Math.floor(Math.random() * 90);
    const getMovieData = () => {
      if (!phone) {
        if (movie && movie.items.length > 0) {
          fetch(
            `https://api.themoviedb.org/3/movie/${movie.items[randomNum].id}?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=${languages[choosenLang]}`
          )
            .then((res) => res.json())
            .then((data) =>
              data.title.length < 25 ? setMovieData(data) : setRender(!render)
            );
        } else {
          fetch(
            `https://api.themoviedb.org/3/movie/${items[randomNum].id}?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=${languages[choosenLang]}`
          )
            .then((res) => res.json())
            .then((data) =>
              data.title.length < 25 ? setMovieData(data) : setRender(!render)
            );
        }
      } else {
        if (movie && movie.items.length > 0) {
          fetch(
            `https://api.themoviedb.org/3/movie/${movie.items[randomNum].id}?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=${languages[choosenLang]}`
          )
            .then((res) => res.json())
            .then((data) =>
              data.title.length < 10 ? setMovieData(data) : setRender(!render)
            );
        } else {
          fetch(
            `https://api.themoviedb.org/3/movie/${items[randomNum].id}?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=${languages[choosenLang]}`
          )
            .then((res) => res.json())
            .then((data) =>
              data.title.length < 10 ? setMovieData(data) : setRender(!render)
            );
        }
      }
    };
    getMovieData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [choosenLang, style, setGameState, phone, render]);
``` 


## Contact

<p> <a target="_blank" href="https://www.linkedin.com/in/anne-quinkenstein"><img src="https://img.shields.io/badge/-LinkedIn-0077B5?style=for-the-badge&logo=Linkedin&logoColor=white"></img></a>
<a target="_blank" href="mailto:a.quinkenstein@gmail.com?Subject=Hello_from_Github"><img src="https://img.shields.io/badge/-Gmail-D14836?style=for-the-badge&logo=Gmail&logoColor=white"></img></a>
</p>

<img src="https://media.giphy.com/media/LnQjpWaON8nhr21vNW/giphy.gif" width="60"> <em>Let's connect!</em>
