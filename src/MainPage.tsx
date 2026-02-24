import { useState } from 'react';
import { Content } from './Content.tsx';
import { MainHeader } from './MainHeader.tsx';
import { FaSpinner } from 'react-icons/fa6';
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

interface Prop {
  movies: Results[];
  tvShows: Results[];
  animation: Results[];
  topRatedMovies: Results[];
  topRatedAnimation: Results[];
  searchResults: Results[];
  topRatedTvShows: Results[];
  isSearching: boolean;
  setContent: (content: 'movies' | 'tvShows' | 'animation') => void;
  setSearchQuery: (searchQuery: string) => void;
  searchQuery: string;
  setIsSearching: (isSearching: boolean) => void;
  content: 'movies' | 'tvShows' | 'animation';
  setGetGenre: (
    getGenre:
      | 'Action'
      | 'All'
      | 'Romance'
      | 'Comedy'
      | 'Horror'
      | 'Adventure'
      | 'War'
      | 'Crime',
  ) => void;
}
export function MainPage({
  movies,
  tvShows,
  animation,
  topRatedMovies,
  setGetGenre,
  setContent,
  topRatedTvShows,
  topRatedAnimation,
  content,
  setSearchQuery,
  setIsSearching,
  isSearching,
  searchQuery,
  searchResults,
}: Prop) {
  const [hideMain, setHideMain] = useState<boolean>(false);
  const [contentDetails, setContentDetails] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [genreDivMobile, setGenreDivMobile] = useState<boolean>(false);
  const [genre, setGenre] = useState<
    | 'Action'
    | 'All'
    | 'Romance'
    | 'Comedy'
    | 'Horror'
    | 'Adventure'
    | 'War'
    | 'Crime'
  >('Action');
  return (
    <div
      className={`select-none flex flex-col bg-black w-screen h-screen fixed`}
    >
      <MainHeader
        setIsSearching={setIsSearching}
        setContent={setContent}
        contentDetails={contentDetails}
        hideMain={hideMain}
        name={name}
        content={content}
        setSearchQuery={setSearchQuery}
        setGetGenre={setGetGenre}
        setGenreDivMobile={setGenreDivMobile}
        setGenre={setGenre}
      />
      {(content === 'movies' && movies.length === 0 && isSearching === false) ||
      (content === 'tvShows' &&
        tvShows.length === 0 &&
        isSearching === false) ||
      (content === 'animation' &&
        animation.length === 0 &&
        isSearching === false) ? (
        <div className="flex w-full h-full items-center justify-center">
          <FaSpinner className="animate-spin text-red-600 text-[50px]" />
        </div>
      ) : (
        <>
          <Content
            movies={movies}
            animation={animation}
            tvShows={tvShows}
            setGetGenre={setGetGenre}
            setContentDetails={setContentDetails}
            contentDetails={contentDetails}
            topRatedMovies={topRatedMovies}
            topRatedAnimation={topRatedAnimation}
            topRatedTvShows={topRatedTvShows}
            content={content}
            hideMain={hideMain}
            setName={setName}
            setHideMain={setHideMain}
            setIsSearching={setIsSearching}
            isSearching={isSearching}
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
            searchResults={searchResults}
            genreDivMobile={genreDivMobile}
            setContent={setContent}
            setGenreDivMobile={setGenreDivMobile}
            name={name}
            setGenre={setGenre}
            genre={genre}
          />
        </>
      )}
    </div>
  );
}
