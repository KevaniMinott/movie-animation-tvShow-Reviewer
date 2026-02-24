import { useEffect, useState } from 'react';
import './App.css';
import { MainPage } from './MainPage.tsx';
type Results = {
  poster_path: string;
  backdrop_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: string;
  id: number;
  first_air_date: string;
  genre_ids: number[];
  name: string;
};
function App() {
  const [movieResults, setMovieResults] = useState<Results[]>([]);
  const [tvResults, setTvResults] = useState<Results[]>([]);
  const [animationResults, setAnimationResults] = useState<Results[]>([]);
  const [topRated, setTopRated] = useState<Results[]>([]);
  const [tvTopRated, setTvTopRated] = useState<Results[]>([]);
  const [topRatedAnimation, setTopRatedAnimation] = useState<Results[]>([]);
  const [searchResult, setSearchResult] = useState<Results[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const [content, setContent] = useState<'movies' | 'tvShows' | 'animation'>(
    'movies',
  );
  const [getGenre, setGetGenre] = useState<
    | 'Action'
    | 'All'
    | 'Romance'
    | 'Comedy'
    | 'Horror'
    | 'Adventure'
    | 'War'
    | 'Crime'
  >('Action');
  const genreMapMovie = {
    Action: 28,
    Adventure: 12,
    Comedy: 35,
    Crime: 80,
    All: 'All',
    Horror: 27,
    Romance: 10749,
    War: 10752,
  };
  const genreMapTv = {
    Action: 10759,
    Adventure: 10759,
    Comedy: 35,
    Crime: 80,
    All: 'All',
    Horror: 27,
    Romance: 10765,
    War: 10759,
  };
  const genreMapAnimation = {
    Action: 10759,
    Adventure: 10759,
    Comedy: 35,
    Crime: 80,
    All: 'All',
    Horror: 27,
    Romance: 10765,
    War: 10759,
  };

  const movieGenre = genreMapMovie[getGenre];
  const tvGenre = genreMapTv[getGenre];
  const animationGenre = genreMapAnimation[getGenre];
  useEffect(() => {
    if (isSearching && content === 'movies') {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=b6229e5681a2c1605a0da1cf880b7edd&query=${encodeURIComponent(searchQuery)}&page=1`,
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setSearchResult(data.results);
          setContent('movies');
        });
      return;
    } else if (isSearching && content === 'tvShows') {
      fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=b6229e5681a2c1605a0da1cf880b7edd&query=${encodeURIComponent(searchQuery)}&page=1`,
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setSearchResult(data.results);
          setContent('tvShows');
        });
      return;
    } else if (isSearching && content === 'animation') {
      fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=b6229e5681a2c1605a0da1cf880b7edd&query=${encodeURIComponent(searchQuery)}&page=1`,
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setSearchResult(data.results);
          setContent('animation');
        });
      return;
    }
    if (content === 'movies') {
      if (movieGenre === 'All') {
        fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=b6229e5681a2c1605a0da1cf880b7edd`,
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setMovieResults(data.results);
          });

        fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=b6229e5681a2c1605a0da1cf880b7edd&language=en-US&sort_by=vote_average.desc&vote_count.gte=1000`,
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setTopRated(data.results);
          });
        return;
      }
      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=b6229e5681a2c1605a0da1cf880b7edd&with_genres=${movieGenre}`,
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setMovieResults(data.results);
        });

      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=b6229e5681a2c1605a0da1cf880b7edd&language=en-US&sort_by=vote_average.desc&vote_count.gte=1000&with_genres=${movieGenre}`,
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setTopRated(data.results);
        });
    } else if (content === 'tvShows') {
      if (tvGenre === 'All') {
        fetch(
          `https://api.themoviedb.org/3/discover/tv?api_key=b6229e5681a2c1605a0da1cf880b7edd&sort_by=vote_average.desc&vote_count.gte=50&page=1`,
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setTvResults(data.results);
          });

        fetch(
          `https://api.themoviedb.org/3/discover/tv?api_key=b6229e5681a2c1605a0da1cf880b7edd&sort_by=vote_average.desc&vote_count.gte=50&page=1`,
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setTvTopRated(data.results);
          });
        return;
      }

      fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=b6229e5681a2c1605a0da1cf880b7edd&with_genres=${tvGenre}&sort_by=vote_average.desc&vote_count.gte=50&page=1`,
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setTvTopRated(data.results);
        });

      fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=b6229e5681a2c1605a0da1cf880b7edd&with_genres=${tvGenre}&sort_by=vote_average.desc&vote_count.gte=50&page=1`,
      )
        .then((res) => res.json())
        .then((data) => setTvResults(data.results));
    } else if (content === 'animation') {
      if (animationGenre === 'All') {
        fetch(
          'https://api.themoviedb.org/3/discover/tv?api_key=b6229e5681a2c1605a0da1cf880b7edd&with_genres=16&page=1',
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setAnimationResults(data.results);
          });

        fetch(
          `https://api.themoviedb.org/3/discover/tv?api_key=b6229e5681a2c1605a0da1cf880b7edd&sort_by=vote_average.desc&vote_count.gte=50&page=1`,
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setTopRatedAnimation(data.results);
          });
        return;
      }
      fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=b6229e5681a2c1605a0da1cf880b7edd&with_genres=${animationGenre}&page=1`,
      )
        .then((res) => res.json())
        .then((data) => {
          setTopRatedAnimation(data.results);
        });

      fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=b6229e5681a2c1605a0da1cf880b7edd&with_genres=${animationGenre}&sort_by=vote_average.desc&vote_count.gte=50&page=1`,
      )
        .then((res) => res.json())
        .then((data) => setAnimationResults(data.results));
    }
  }, [
    getGenre,
    movieGenre,
    content,
    tvGenre,
    animationGenre,
    isSearching,
    searchQuery,
  ]);

  const movies = movieResults;
  const tvShows = tvResults;
  const searchResults = searchResult;
  const animation = animationResults;
  const topRatedMovies = topRated;
  const topRatedTvShows = tvTopRated;
  return (
    <MainPage
      movies={movies}
      animation={animation}
      tvShows={tvShows}
      setGetGenre={setGetGenre}
      setContent={setContent}
      topRatedMovies={topRatedMovies}
      topRatedTvShows={topRatedTvShows}
      topRatedAnimation={topRatedAnimation}
      content={content}
      setSearchQuery={setSearchQuery}
      searchQuery={searchQuery}
      searchResults={searchResults}
      setIsSearching={setIsSearching}
      isSearching={isSearching}
    />
  );
}

export default App;
