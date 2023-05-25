# MovieDB

The MovieDB is a web application built with React that allows users to browse and search for movies using the TMDB API (The Movie Database). It provides a user-friendly interface to discover information about movies, including details such as title, release date, overview, and ratings.

## Features

- Browse popular, top-rated, upcoming, and now-playing movies.
- Search for movies by title.
- View detailed information about movies, including synopsis, release date, runtime, and average rating.
- Watch movie trailers and related videos.
- Get recommendations based on similar movies.
- Save favorite movies to a watchlist.
- Responsive design for optimal viewing on desktop and mobile devices.

## Installation
To run the MovieDB App locally on your machine, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/prakhyat274/moviedb.git
   ```
2. Navigate to the project directory:

    ```bash
    cd moviedb
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```
4. Obtain an API key from the TMDB website (https://www.themoviedb.org/) by creating an account.

5. Create a `config.js` file in the src directory of the project.

6. Open the `config.js` file and add the following line:
    ```bash
    const config = {
    apiKey: "your-api-key"
    }
    export default config
    ```
Replace your_api_key_here with your actual API key obtained from the TMDB website.

7. Start the development server:
    ```bash
    npm start
    ```

8. Open your browser and visit http://localhost:3000 to access the MovieDB App.

### Dependencies

The React News App relies on the following dependencies:

- React: JavaScript library for building user interfaces.
- Bootstrap: CSS framework for responsive and mobile-first web development.
- react-bootstrap: React components for Bootstrap.
- react-router-dom: React library for handling routing in a single-page application.

These dependencies are automatically installed when running `npm install`.

## API Usage

The MovieDB App uses the TMDB API to fetch movie data. It supports the following API endpoints:

- Fetch popular movies:

  Endpoint: `https://api.themoviedb.org/3/movie/popular`

  Example Request:

  ```bash
    GET /movie/popular?api_key=your_api_key_here
   ```
- Search movies:

    Endpoint: `https://api.themoviedb.org/3/search/movie`

    Query Parameters:

    1. `query` : The search query for the movie.
    2. `api_key` : Your TMDB API key.
   
   
    Example Request: 
    ```bash
    GET /search/movie?query=avengers&api_key=your_api_key_here
    ```


## Contributing

Contributions to the MovieDB App are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request to the GitHub repository.

## Acknowledgments

The MovieDB App is made possible thanks to the following:

- The TMDB API ([https://www.themoviedb.org/documentation/api](https://www.themoviedb.org/documentation/api)) for providing access to movie data.
- React ([https://reactjs.org/](https://reactjs.org/)) for the JavaScript library used in building the user interface.

Feel free to customize the README documentation based on your specific project requirements, including any additional details or information you want to provide.

