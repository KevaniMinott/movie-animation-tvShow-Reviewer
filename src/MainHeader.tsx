import {
  Bars3Icon,
  MagnifyingGlassCircleIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from 'react';
type Prop = {
  setContent: (content: 'movies' | 'tvShows' | 'animation') => void;
  hideMain: boolean;
  name: string;
  contentDetails: boolean;
  setSearchQuery: (searchQuery: string) => void;
  setGenreDivMobile: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSearching: (isSearching: boolean) => void;
  setGenre: (
    genre:
      | 'Action'
      | 'All'
      | 'Romance'
      | 'Comedy'
      | 'Horror'
      | 'Adventure'
      | 'War'
      | 'Crime',
  ) => void;
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
  content: 'movies' | 'tvShows' | 'animation';
};
export function MainHeader({
  setContent,
  contentDetails,
  hideMain,
  name,
  setIsSearching,
  setSearchQuery,
  content,
  setGenreDivMobile,
  setGenre,
  setGetGenre,
}: Prop) {
  const searchRef = useRef<HTMLInputElement>(null);
  function search() {
    if (searchRef.current) {
      setSearchQuery(searchRef.current.value);
      setIsSearching(true);
    }
  }
  const [fadeHeader, setFadeHeader] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setFadeHeader(true);
    }, 400);
  }, []);

  return (
    <div
      className={`bg-black ${fadeHeader ? 'transition-opacity duration-400 opacity-100' : 'opacity-0'} w-screen h-[60px]  md:h-[60px] border-red-600 shadow-[0_0_11px_red] border-b-[2px] flex items-center justify-center justify-evenly z-10`}
    >
      <div
        className={`${hideMain ? 'hidden' : 'block'} ${contentDetails ? 'transition-opacity duration-400 opacity-0' : 'transition-opacity duration-400 opacity-100'} flex gap-[150px] justify-center h-[60px]  items-center`}
      >
        <div className="md:flex hidden md:block md:justify-evenly md:items-center md:gap-[80px]">
          <button
            onClick={() => {
              setContent('movies');
              setGenre('Action');
              setGetGenre('Action');
            }}
            className={`cursor-pointer flex ${content === 'movies' ? 'bg-red-600 text-white shadow-[0_0_15px_red]' : 'text-white'} md:rounded-[20px] items-center md:py-4 md:px-4 font-mono font-bold md:h-[20px] md:w-[80px] md:text-[15px] text-[13px] py-2 px-2 rounded-[15px]`}
          >
            Movies
          </button>{' '}
          <button
            onClick={() => {
              setContent('tvShows');
              setGenre('Action');
              setGetGenre('Action');
            }}
            className={`flex cursor-pointer ${content === 'tvShows' ? 'bg-red-600 text-white shadow-[0_0_15px_red]' : 'text-white'}  rounded-[20px] items-center justify-center py-4 px-4 font-mono font-bold h-[20px] w-[100px] text-[15px]`}
          >
            Tv-Shows
          </button>{' '}
          <button
            onClick={() => {
              setContent('animation');
              setGenre('Action');
              setGetGenre('Action');
            }}
            className={`cursor-pointer flex ${content === 'animation' ? 'bg-red-600 text-white shadow-[0_0_15px_red]' : 'text-white'} rounded-[20px] items-center justify-center py-4 px-4 font-mono font-bold h-[20px] w-[100px] text-[15px]`}
          >
            Animation
          </button>
        </div>

        <Bars3Icon
          onClick={() => {
            setGenreDivMobile((prev) => !prev);
          }}
          className="md:hidden text-red-600 block w-[50px] absolute left-[20px]"
        />
        <div className="flex absolute right-[30px] justify-center items-center gap-[10px] h-[50px] md:gap-[20px]">
          <input
            className={`h-[20px] w-[220px] md:w-[250px] border-red-600 text-white outline-none border-b-[3px] font-bold font-mono placeholder:font-mono placeholder:font-bold placeholder:text-white`}
            placeholder="search for a movie/tvshow/animation"
            type="text"
            ref={searchRef}
          />
          <MagnifyingGlassCircleIcon
            onClick={() => {
              search();
            }}
            className="cursor-pointer text-red-600 w-[45px] md:w-[40px] "
          />
        </div>
      </div>
      <div
        className={`${hideMain ? 'block' : 'hidden'} h-[60px] flex items-center`}
      >
        <p className="text-white font-bold font-mono text-[20px] text-center md:text-[40px]">
          {name}
        </p>
      </div>
    </div>
  );
}
