import { useEffect, useState } from 'react';
import { Details } from './Details';

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
  animation: Results[];
  tvShows: Results[];
  searchResults: Results[];
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
  topRatedMovies: Results[];
  topRatedTvShows: Results[];
  topRatedAnimation: Results[];
  setContent: (content: 'movies' | 'tvShows' | 'animation') => void;
  setHideMain: (hideMain: boolean) => void;
  setContentDetails: (contentDetails: boolean) => void;
  setIsSearching: (isSearching: boolean) => void;
  setGenreDivMobile: (mobileDivGenre: boolean) => void;
  setName: (name: string) => void;
  hideMain: boolean;
  setSearchQuery: (searchQuery: string) => void;
  searchQuery: string;
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
  genre:
    | 'Action'
    | 'All'
    | 'Romance'
    | 'Comedy'
    | 'Horror'
    | 'Adventure'
    | 'War'
    | 'Crime';
  isSearching: boolean;
  contentDetails: boolean;
  genreDivMobile: boolean;
  name: string;
}

export function Content({
  movies,
  tvShows,
  animation,
  content,
  topRatedTvShows,
  topRatedMovies,
  topRatedAnimation,
  setGetGenre,
  hideMain,
  setHideMain,
  setContentDetails,
  contentDetails,
  setName,
  searchQuery,
  setIsSearching,
  isSearching,
  searchResults,
  setGenre,
  genre,
  genreDivMobile,
  setContent,
  setGenreDivMobile,
}: Prop) {
  const [display, setDisplay] = useState<number>(1);
  const [fadeContent, setFadeContent] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [poster, setPoster] = useState<string>('');
  const [popularity, setPopularity] = useState<string>('');
  const [releaseDate, setReleaseDate] = useState<string>('');
  const [overview, setOverview] = useState<string>('');
  const [id, setId] = useState<number>(0);
  const [type, setType] = useState<'movies' | 'tvShows' | 'animation'>(
    'movies',
  );
  const [fade, setFade] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeContent(true);
    }, 400);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplay((prev) => {
        if (prev === 3) {
          return 1;
        }
        return prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const pop = popularity;
  const ov = overview;
  const ti = title;
  const rd = releaseDate;
  const pos = poster;
  return (
    <div
      className={`w-full h-full ${hideMain ? '' : 'md:pl-[0px]'}  ${fadeContent ? 'transition-opacity duration-400 opacity-100' : 'opacity-0'} `}
    >
      <div
        className={`${genreDivMobile ? 'block' : 'hidden'} md:hidden absolute left-[0px] w-[220px] pl-[10px] flex  justify-center  bg-black h-screen z-20 `}
      >
        <div className="  w-[100px] h-[581px]  items-center flex flex-col">
          <div
            className={`${hideMain ? 'hidden' : 'block'} ${contentDetails ? 'transition-opacity duration-400 opacity-0' : 'transition-opacity duration-400 opacity-100'} flex gap-[150px] justify-center h-[60px]  items-center`}
          ></div>
          <div className="w-[200px]">
            <div
              className={` block ${isSearching ? 'absolute top-[10px] justify-center items-center w-full ' : 'items-center'}  flex flex-col md:hidden mb-[10px]`}
            >
              <button
                onClick={() => {
                  setContent('movies');
                  setGenreDivMobile(false);
                  setGenre('Action');
                  setGetGenre('Action');
                }}
                className={`cursor-pointer flex ${content === 'movies' ? 'bg-red-600 text-white  shadow-[0_0_15px_red]' : 'text-white'} font-mono font-bold  text-[13px] justify-center py-2 px-2 rounded-[15px] w-[120px] mt-[20px]`}
              >
                Movies
              </button>{' '}
              <button
                onClick={() => {
                  setContent('tvShows');
                  setGenreDivMobile(false);
                  setGenre('Action');
                  setGetGenre('Action');
                }}
                className={`flex cursor-pointer ${content === 'tvShows' ? 'bg-red-600 text-white shadow-[0_0_15px_red]' : 'text-white'}  font-mono font-bold  text-[13px] justify-center py-2 px-2 rounded-[15px] w-[120px] `}
              >
                Tv-Shows
              </button>{' '}
              <button
                onClick={() => {
                  setContent('animation');
                  setGenreDivMobile(false);
                  setGenre('Action');
                  setGetGenre('Action');
                }}
                className={`cursor-pointer flex ${content === 'animation' ? 'bg-red-600 text-white shadow-[0_0_15px_red]' : 'text-white'} font-mono font-bold  text-[13px] justify-center py-2 px-2 rounded-[15px] w-[120px]`}
              >
                Animation
              </button>
            </div>
            <div className={`${isSearching ? 'hidden' : 'block'}`}>
              <div className={` flex justify-start w-[180px]`}>
                <p className="mb-[10px] left-[0px] font-mono font-bold text-[20px] text-white">
                  Genre
                </p>
              </div>
              <div
                className={` flex flex-wrap  w-[180px] h-[200px] gap-[20px]`}
              >
                <button
                  onClick={() => {
                    setFade(true);
                    setGenreDivMobile(false);

                    setTimeout(() => {
                      setGenre('Action');
                      setGetGenre('Action');
                    }, 300);

                    setTimeout(() => {
                      setFade(false);
                    }, 1000);
                  }}
                  className={` ${genre === 'Action' ? 'bg-red-600 text-white shadow-[0_0_15px_red]' : 'text-white'} font-mono cursor-pointer border-red-600 border-[2px] font-bold hover:bg-red-600 hover:transition-all hover:duration-400 hover:text-white hover:shadow-[0_0_15px_red] rounded-[20px] py-2 px-4 flex items-center justify-center text-[12px] w-[80px] h-[25px]`}
                >
                  Action
                </button>
                <button
                  onClick={() => {
                    setFade(true);
                    setGenreDivMobile(false);

                    setTimeout(() => {
                      setGenre('Comedy');
                      setGetGenre('Comedy');
                    }, 300);

                    setTimeout(() => {
                      setFade(false);
                    }, 1000);
                  }}
                  className={` ${genre === 'Comedy' ? 'bg-red-600 text-white shadow-[0_0_15px_red]' : 'text-white'} font-mono cursor-pointer border-red-600 border-[2px] font-bold hover:bg-red-600 hover:transition-all hover:duration-400 hover:text-white hover:shadow-[0_0_15px_red] rounded-[20px] py-2 px-4 flex items-center justify-center text-[12px] w-[80px] h-[25px]`}
                >
                  Comedy
                </button>

                <button
                  onClick={() => {
                    setFade(true);
                    setGenreDivMobile(false);

                    setTimeout(() => {
                      setGenre('Adventure');
                      setGetGenre('Adventure');
                    }, 300);

                    setTimeout(() => {
                      setFade(false);
                    }, 1000);
                  }}
                  className={` ${genre === 'Adventure' ? 'bg-red-600 text-white shadow-[0_0_15px_red]' : 'text-white'} font-mono cursor-pointer border-red-600 border-[2px] font-bold hover:bg-red-600 hover:transition-all hover:duration-400 hover:text-white hover:shadow-[0_0_15px_red] rounded-[20px] py-2 px-4 flex items-center justify-center text-[12px] w-[80px] h-[25px]`}
                >
                  Adventure
                </button>
                <button
                  onClick={() => {
                    if (content === 'animation' || content === 'tvShows')
                      return;
                    setFade(true);
                    setGenreDivMobile(false);

                    setTimeout(() => {
                      setGenre('Horror');
                      setGetGenre('Horror');
                    }, 300);

                    setTimeout(() => {
                      setFade(false);
                    }, 1000);
                  }}
                  className={` ${content === 'animation' || content === 'tvShows' ? 'cursor-not-allowed' : 'cursor-pointer'} ${genre === 'Horror' ? 'bg-red-600 text-white shadow-[0_0_15px_red]' : 'text-white'} font-mono  border-red-600 border-[2px] font-bold rounded-[20px] hover:bg-red-600 hover:transition-all hover:duration-400 hover:text-white hover:shadow-[0_0_15px_red] rounded-[20px] py-2 px-4 flex items-center justify-center text-[12px] w-[80px] h-[25px]`}
                >
                  Horror
                </button>
                <button
                  onClick={() => {
                    setFade(true);
                    setGenreDivMobile(false);

                    setTimeout(() => {
                      setGenre('Romance');
                      setGetGenre('Romance');
                    }, 300);

                    setTimeout(() => {
                      setFade(false);
                    }, 1000);
                  }}
                  className={` ${genre === 'Romance' ? 'bg-red-600 text-white shadow-[0_0_15px_red]' : 'text-white'} font-mono cursor-pointer border-red-600 border-[2px] font-bold hover:bg-red-600 hover:transition-all hover:duration-400 hover:text-white hover:shadow-[0_0_15px_red] rounded-[20px] py-2 px-4 flex items-center justify-center text-[12px] w-[80px] h-[25px]`}
                >
                  Romance
                </button>
                <button
                  onClick={() => {
                    setFade(true);
                    setGenreDivMobile(false);

                    setTimeout(() => {
                      setGenre('All');
                      setGetGenre('All');
                    }, 300);

                    setTimeout(() => {
                      setFade(false);
                    }, 1000);
                  }}
                  className={` ${genre === 'All' ? 'bg-red-600 text-white shadow-[0_0_15px_red]' : 'text-white'} font-mono cursor-pointer border-red-600 border-[2px] font-bold hover:bg-red-600 hover:transition-all hover:duration-400 hover:text-white hover:shadow-[0_0_15px_red] rounded-[20px] py-2 px-4 flex items-center justify-center text-[12px] w-[80px] h-[25px]`}
                >
                  All
                </button>
                <button
                  onClick={() => {
                    setFade(true);
                    setGenreDivMobile(false);

                    setTimeout(() => {
                      setGenre('War');
                      setGetGenre('War');
                    }, 300);

                    setTimeout(() => {
                      setFade(false);
                    }, 1000);
                  }}
                  className={` ${genre === 'War' ? 'bg-red-600 text-white shadow-[0_0_15px_red]' : 'text-white'} font-mono cursor-pointer border-red-600 border-[2px] font-bold rounded-[20px] hover:bg-red-600 hover:transition-all hover:duration-400 hover:text-white hover:shadow-[0_0_15px_red] rounded-[20px] py-2 px-4 flex items-center justify-center text-[12px] w-[80px] h-[25px]`}
                >
                  War
                </button>
                <button
                  onClick={() => {
                    if (content === 'animation') return;
                    setFade(true);
                    setGenreDivMobile(false);

                    setTimeout(() => {
                      setGenre('Crime');
                      setGetGenre('Crime');
                    }, 300);
                    setTimeout(() => {
                      setFade(false);
                    }, 1000);
                  }}
                  className={`${content === 'animation' ? 'cursor-not-allowed' : 'cursor-pointer'} ${genre === 'Crime' ? 'bg-red-600 text-white shadow-[0_0_15px_red]' : 'text-white'} font-mono border-red-600 border-[2px] font-bold hover:bg-red-600 hover:transition-all hover:duration-400 hover:text-white hover:shadow-[0_0_15px_red] rounded-[20px] py-2 px-4 flex items-center justify-center text-[12px] w-[80px] h-[25px]`}
                >
                  Crime
                </button>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col h-[200px] w-[200px] mb-[10px] ${isSearching ? 'hidden' : 'block'} `}
          >
            <p className="text-white font-mono font-bold">Top Rated</p>
            <div>
              {content === 'movies' ? (
                <div
                  className={`${fade ? 'transition-opacity duration-400 opacity-0' : 'transition-opacity duration-400 opacity-100'}`}
                >
                  {topRatedMovies.slice(0, 3).map((topMovies, indexTopMov) => (
                    <div
                      key={indexTopMov}
                      onClick={() => {
                        setContentDetails(true);
                        setGenreDivMobile(false);

                        setTimeout(() => {
                          setHideMain(true);
                        }, 401);
                        setName(topMovies?.title);
                        setTitle(topMovies?.name);
                        setOverview(topMovies?.overview);
                        setPopularity(topMovies?.vote_average);
                        setReleaseDate(topMovies?.first_air_date);
                        setPoster(topMovies?.backdrop_path);
                        setId(topMovies?.id);
                        setType('movies');
                      }}
                      className="flex gap-[10px] mt-[5px]"
                    >
                      <div
                        style={{
                          backgroundImage: `url(https://image.tmdb.org/t/p/w780${topMovies?.poster_path})`,
                        }}
                        className="w-[60px] bg-center bg-cover bg-repeat-no h-[80px] bg-white cursor-pointer"
                      ></div>
                      <div className="w-[200px] flex items-center">
                        <p className="text-[12px] font-mono font-bold text-white">
                          {topMovies?.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : content === 'tvShows' ? (
                <div>
                  {topRatedTvShows
                    .filter((shows) => shows?.genre_ids[0] !== 16)
                    .slice(0, 3)
                    .map((topTvShows, indexTopTv) => (
                      <div
                        key={indexTopTv}
                        onClick={() => {
                          setContentDetails(true);
                          setGenreDivMobile(false);

                          setTimeout(() => {
                            setHideMain(true);
                          }, 401);
                          setName(topTvShows?.name);
                          setTitle(topTvShows?.name);
                          setOverview(topTvShows?.overview);
                          setPopularity(topTvShows?.vote_average);
                          setReleaseDate(topTvShows?.first_air_date);
                          setPoster(topTvShows?.backdrop_path);
                          setId(topTvShows?.id);
                          setType('tvShows');
                        }}
                        className="flex gap-[10px] mt-[10px]"
                      >
                        <div
                          style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/w780${topTvShows?.poster_path})`,
                          }}
                          className="w-[60px] bg-center bg-cover bg-repeat-no h-[80px] bg-white cursor-pointer"
                        ></div>
                        <div className="w-[200px] flex items-center">
                          <p className="text-[12px] font-mono font-bold text-white">
                            {topTvShows?.name}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <div>
                  {topRatedAnimation
                    .filter((animated) => animated?.genre_ids[0] === 16)
                    .slice(0, 3)
                    .map((topAnimated, indexTopAnimated) => (
                      <div
                        key={indexTopAnimated}
                        onClick={() => {
                          setContentDetails(true);
                          setGenreDivMobile(false);

                          setTimeout(() => {
                            setHideMain(true);
                          }, 401);
                          setName(topAnimated?.name);
                          setTitle(topAnimated?.name);
                          setOverview(topAnimated?.overview);
                          setPopularity(topAnimated?.vote_average);
                          setReleaseDate(topAnimated?.first_air_date);
                          setPoster(topAnimated?.backdrop_path);
                          setId(topAnimated?.id);
                          setType('animation');
                        }}
                        className="flex gap-[10px] mt-[10px]"
                      >
                        <div
                          style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/w780${topAnimated?.poster_path})`,
                          }}
                          className="w-[60px] bg-center bg-cover bg-repeat-no h-[80px] bg-white cursor-pointer"
                        ></div>
                        <div className="w-[200px] flex items-center">
                          <p className="text-[12px] font-mono font-bold text-white">
                            {topAnimated?.name}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {isSearching && content === 'movies' ? (
        <div
          className={`${hideMain ? 'hidden' : 'block'} ${contentDetails ? 'transition-opacity duration-400 opacity-0' : 'transition-opacity duration-400 opacity-100'}  h-full w-full`}
        >
          {searchResults.length === 0 ? (
            <p className="text-white ml-[20px] text-[30px] mt-[30px] mb-[20px] font-mono font-bold text-center">
              No movie results for {searchQuery} try another section or make
              sure the name was entered correctly {`:(`}
            </p>
          ) : (
            <>
              <div className="flex flex-col">
                <p className="text-white ml-[20px] text-[30px] mt-[20px] mb-[20px] font-mono font-bold">
                  Showing movies results for: {searchQuery}
                </p>
                <div className="flex flex-col  overflow-x-auto hide-scrollbar items-center w-full h-full">
                  <div className="w-full h-[400px] flex mt-[50px]">
                    {searchResults
                      .filter((results) => results?.poster_path !== null)
                      .map((result, indexSearch) => (
                        <div key={indexSearch} className="ml-[20px]">
                          <div
                            style={{
                              backgroundImage: `url(https://image.tmdb.org/t/p/w780${result?.poster_path ?? ''})`,
                            }}
                            onClick={() => {
                              setContentDetails(true);
                              setGenreDivMobile(false);

                              setTimeout(() => {
                                setHideMain(true);
                              }, 401);
                              setName(result?.title);
                              setTitle(result?.title);
                              setOverview(result?.overview);
                              setPopularity(result?.vote_average);
                              setReleaseDate(result?.release_date);
                              setPoster(result?.backdrop_path);
                              setId(result?.id);
                              setType('movies');
                            }}
                            className="md:w-[265px] rounded-[9px] bg-center bg-cover relative md:h-[335px] md:hover:scale-[1.1] md:hover:shadow-[0_0_20px_red] transition-all duration-300  w-[200px] h-[330px] mr-[25px] cursor-pointer"
                          ></div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </>
          )}
          <button
            onClick={() => {
              setHideMain(false);
              setContentDetails(false);
              setIsSearching(false);
            }}
            className={`absolute right-[50px]  bottom-[120px] md:bottom-[20px] font-mono cursor-pointer border-red-600 border-[2px] font-bold hover:bg-red-600 hover:transition-all hover:duration-400 text-white hover:shadow-[0_0_15px_red] rounded-[20px] py-2 px-4 flex items-center justify-center text-[15px] w-[120px] h-[35px]`}
          >
            Main Page
          </button>
        </div>
      ) : isSearching && content === 'tvShows' ? (
        <div
          className={`${hideMain ? 'hidden' : 'block'}  ${contentDetails ? 'transition-opacity duration-400 opacity-0' : 'transition-opacity duration-400 opacity-100'}  h-full w-full`}
        >
          {searchResults.length === 0 ? (
            <p className="text-white ml-[20px] text-[30px] mt-[30px] mb-[10px] font-mono font-bold text-center">
              No tvShow results for {searchQuery} try another section or make
              sure the name was entered correctly {`:(`}
            </p>
          ) : (
            <>
              <p className="text-white ml-[20px] text-[30px] mt-[20px] mb-[20px] font-mono font-bold">
                Showing tvShow results for: {searchQuery}
              </p>
              <div className="flex flex-col  overflow-x-auto hide-scrollbar items-center w-full h-full">
                <div className="w-full h-[400px] flex mt-[50px] ">
                  {searchResults
                    .filter((results) => results?.poster_path !== null)
                    .map((result, indexSearchTv) => (
                      <div key={indexSearchTv} className="ml-[20px]">
                        <div
                          style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/w780${result?.poster_path ?? ''})`,
                          }}
                          onClick={() => {
                            setContentDetails(true);
                            setGenreDivMobile(false);

                            setTimeout(() => {
                              setHideMain(true);
                            }, 401);
                            setName(result.name);
                            setTitle(result.name);
                            setOverview(result.overview);
                            setPopularity(result.vote_average);
                            setReleaseDate(result.first_air_date);
                            setPoster(result.backdrop_path);
                            setId(result.id);
                            setType('tvShows');
                          }}
                          className="md:w-[265px] rounded-[9px] bg-center bg-cover relative md:h-[335px] md:hover:scale-[1.1] md:hover:shadow-[0_0_20px_red] transition-all duration-300  w-[200px] h-[330px] mr-[25px] cursor-pointer"
                        ></div>
                      </div>
                    ))}
                </div>
              </div>
            </>
          )}
          <button
            onClick={() => {
              setHideMain(false);
              setContentDetails(false);
              setIsSearching(false);
            }}
            className={`absolute right-[50px]  bottom-[120px] md:bottom-[20px] font-mono cursor-pointer border-red-600 border-[2px] font-bold hover:bg-red-600 hover:transition-all hover:duration-400 text-white hover:shadow-[0_0_15px_red] rounded-[20px] py-2 px-4 flex items-center justify-center text-[15px] w-[120px] h-[35px]`}
          >
            Main Page
          </button>
        </div>
      ) : isSearching && content === 'animation' ? (
        <div
          className={`${hideMain ? 'hidden' : 'block'} mt-[20px] ${contentDetails ? 'transition-opacity duration-400 opacity-0' : 'transition-opacity duration-400 opacity-100'}  h-full w-full`}
        >
          {searchResults[0]?.genre_ids[0] !== 16 && content === 'animation' ? (
            <p className="text-white ml-[20px] text-[30px] mt-[30px] mb-[10px] font-mono font-bold text-center">
              No animation results for {searchQuery} try another section or make
              sure the name was entered correctly {`:(`}
            </p>
          ) : (
            <>
              <p className="text-white ml-[20px] text-[30px] mt-[20px] mb-[20px] font-mono font-bold">
                Showing animation results for: {searchQuery}
              </p>
              <div className="flex flex-col overflow-x-auto hide-scrollbar items-center w-full h-full">
                <div className="w-full h-[400px] flex mt-[50px]">
                  {searchResults
                    .filter(
                      (results) =>
                        results?.poster_path !== null &&
                        results?.genre_ids[0] === 16,
                    )
                    .map((result, indexSearchAni) => (
                      <div key={indexSearchAni} className="ml-[20px]">
                        <div
                          style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/w780${result.poster_path ?? ''})`,
                          }}
                          onClick={() => {
                            setContentDetails(true);
                            setGenreDivMobile(false);

                            setTimeout(() => {
                              setHideMain(true);
                            }, 401);
                            setName(result.name);
                            setTitle(result.name);
                            setOverview(result.overview);
                            setPopularity(result.vote_average);
                            setReleaseDate(result.first_air_date);
                            setPoster(result.backdrop_path);
                            setId(result.id);
                            setType('tvShows');
                          }}
                          className="md:w-[265px] rounded-[9px] bg-center bg-cover relative md:h-[335px] md:hover:scale-[1.1] md:hover:shadow-[0_0_20px_red] transition-all duration-300 w-[200px] h-[330px] mr-[25px] cursor-pointer"
                        ></div>
                      </div>
                    ))}
                </div>
              </div>
            </>
          )}
          <button
            onClick={() => {
              setHideMain(false);
              setContentDetails(false);
              setIsSearching(false);
            }}
            className={`absolute right-[50px]  bottom-[120px] md:bottom-[20px] font-mono cursor-pointer border-red-600 border-[2px] font-bold hover:bg-red-600 hover:transition-all hover:duration-400 text-white hover:shadow-[0_0_15px_red] rounded-[20px] py-2 px-4 flex items-center justify-center text-[15px] w-[120px] h-[35px]`}
          >
            Main Page
          </button>
        </div>
      ) : (
        <div className="flex flex-row w-full h-full">
          <div
            className={`md:ml-[50px] md:mt-[15px] gap-[20px] md:gap-[0px] md:w-[750px] w-full h-[500px] flex flex-col ${hideMain ? 'hidden' : 'block'} mt-[20px] ${contentDetails ? 'transition-opacity duration-400 opacity-0' : 'transition-opacity duration-400 opacity-100'}`}
          >
            <div
              className={` ${fade ? 'transition-opacity duration-400 opacity-0' : 'transition-opacity duration-400 opacity-100'} flex flex-col items-center justify-center md:mt-[0px] pt-[5px] md:w-[950px]`}
            >
              {content === 'movies' ? (
                <div
                  onClick={() => {
                    setContentDetails(true);
                    setGenreDivMobile(false);
                    setTimeout(() => {
                      setHideMain(true);
                    }, 401);
                    setName(movies[display + 12]?.title);
                    setTitle(movies[display + 12]?.title);
                    setOverview(movies[display + 12]?.overview);
                    setPopularity(movies[display + 12]?.vote_average);
                    setReleaseDate(movies[display + 12]?.release_date);
                    setPoster(movies[display + 12]?.backdrop_path);
                    setId(movies[display + 12]?.id);
                    setType('movies');
                  }}
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w780${movies[display + 12]?.backdrop_path})`,
                  }}
                  className=" bg-center bg-no-repeat shadow-[0_0_15px_red] bg-cover  w-[390px] h-[160px] md:w-[750px] md:h-[220px] rounded-[30px] backdrop-blur-sm bg-white/20 cursor-pointer"
                >
                  <div className="absolute bottom-[15px]  flex flex-col justify-center items-center h-[20px] backdrop-blur-sm  left-[30px] bg-red-600 text-white shadow-[0_0_15px_red] rounded-[20px] items-center justify-center">
                    <p className=" py-4 px-4 font-mono font-bold  text-[10px] md:text-[15px]">
                      {movies[display + 12]?.title}
                    </p>
                  </div>
                </div>
              ) : content === 'tvShows' ? (
                <div
                  onClick={() => {
                    setContentDetails(true);
                    setGenreDivMobile(false);

                    setTimeout(() => {
                      setHideMain(true);
                    }, 401);
                    setTitle(
                      tvShows.filter((shows) => shows?.genre_ids[0] !== 16)[
                        display
                      ].name,
                    );
                    setName(
                      tvShows.filter((shows) => shows?.genre_ids[0] !== 16)[
                        display
                      ].name,
                    );
                    setOverview(
                      tvShows.filter((shows) => shows?.genre_ids[0] !== 16)[
                        display
                      ].overview,
                    );
                    setPopularity(
                      tvShows.filter((shows) => shows.genre_ids[0] !== 16)[
                        display
                      ].vote_average,
                    );
                    setReleaseDate(
                      tvShows.filter((shows) => shows?.genre_ids[0] !== 16)[
                        display
                      ].first_air_date,
                    );
                    setPoster(
                      tvShows.filter((shows) => shows?.genre_ids[0] !== 16)[
                        display
                      ].backdrop_path,
                    );
                    setId(
                      tvShows.filter((shows) => shows?.genre_ids[0] !== 16)[
                        display
                      ].id,
                    );
                    setType('tvShows');
                  }}
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w780${tvShows.filter((shows) => shows?.genre_ids[0] !== 16)[display]?.backdrop_path})`,
                  }}
                  className=" bg-center bg-no-repeat shadow-[0_0_15px_red] bg-cover w-[390px] h-[160px] md:w-[750px] md:h-[220px] rounded-[30px] backdrop-blur-sm bg-white/20 cursor-pointer"
                >
                  <div className="absolute bottom-[15px]  flex flex-col justify-center items-center h-[20px] backdrop-blur-sm  left-[30px] bg-red-600 text-white shadow-[0_0_15px_red] rounded-[20px] items-center justify-center">
                    <p className="py-4 px-4 font-mono font-bold  text-[15px]">
                      {
                        tvShows.filter((shows) => shows?.genre_ids[0] !== 16)[
                          display
                        ]?.name
                      }
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => {
                    setContentDetails(true);
                    setGenreDivMobile(false);
                    setTimeout(() => {
                      setHideMain(true);
                    }, 401);
                    setTitle(
                      animation.filter(
                        (animated) => animated?.genre_ids[0] === 16,
                      )[display].name,
                    );
                    setName(
                      animation.filter(
                        (animated) => animated?.genre_ids[0] === 16,
                      )[display].name,
                    );
                    setOverview(
                      animation.filter(
                        (animated) => animated?.genre_ids[0] === 16,
                      )[display].overview,
                    );
                    setPopularity(
                      animation.filter(
                        (animated) => animated?.genre_ids[0] === 16,
                      )[display].vote_average,
                    );
                    setReleaseDate(
                      animation.filter(
                        (animated) => animated?.genre_ids[0] === 16,
                      )[display].first_air_date,
                    );
                    setPoster(
                      animation.filter(
                        (animated) => animated?.genre_ids[0] === 16,
                      )[display].backdrop_path,
                    );
                    setId(
                      animation.filter(
                        (animated) => animated?.genre_ids[0] === 16,
                      )[display].id,
                    );
                    setType('tvShows');
                  }}
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w780${animation.filter((animated) => animated?.genre_ids[0] === 16)[display]?.backdrop_path})`,
                  }}
                  className=" bg-center bg-no-repeat shadow-[0_0_15px_red] bg-cover w-[390px] h-[160px] md:w-[750px] md:h-[220px]  rounded-[30px] backdrop-blur-sm bg-white/20 cursor-pointer"
                >
                  <div className="absolute bottom-[15px]  flex flex-col justify-center items-center h-[20px] backdrop-blur-sm  left-[30px] bg-red-600 text-white shadow-[0_0_15px_red] rounded-[20px] items-center justify-center">
                    <p className="py-4 px-4 font-mono font-bold  text-[15px]">
                      {
                        animation.filter(
                          (animated) => animated.genre_ids[0] === 16,
                        )[display]?.name
                      }
                    </p>
                  </div>
                </div>
              )}

              <div className="flex justify-center mt-[15px] gap-[10px]">
                <div
                  className={`w-[10px] h-[10px] rounded-[20px] border-[2px] border-red-600 ${display === 1 ? 'bg-red-600 shadow-[0_0_15px_red]' : ''}`}
                ></div>
                <div
                  className={`w-[10px] h-[10px] rounded-[20px] border-[2px] border-red-600 ${display === 2 ? 'bg-red-600 shadow-[0_0_15px_red]' : ''}`}
                ></div>
                <div
                  className={`w-[10px] h-[10px] rounded-[20px] border-[2px] border-red-600 ${display === 3 ? 'bg-red-600 shadow-[0_0_15px_red]' : ''}`}
                ></div>
              </div>
            </div>

            <div className="mt-[10px]">
              <div>
                {content === 'movies' ? (
                  <p className="text-white text-[20px] font-mono md:mb-[0px] mb-[10px] font-bold ml-[10px]">
                    Recommended Movies
                  </p>
                ) : (
                  <p className="text-white text-[20px] md:mb-[0px] mb-[10px] font-mono font-bold ml-[10px]">
                    Recommended Tv Shows
                  </p>
                )}
              </div>
              <div
                className={`flex flex-row items-center justify-center justify-evenly overflow-x-auto hide-scrollbar md:h-[275px]  w-[950px] ${fade ? 'transition-opacity duration-400 opacity-0' : 'transition-opacity duration-400 opacity-100'}`}
              >
                {content === 'movies' ? (
                  <div className="flex ">
                    {movies.map((movie, indexMovies) => (
                      <div key={indexMovies} className="ml-[20px]">
                        <div
                          style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/w780${movie.poster_path ?? ''})`,
                          }}
                          onClick={() => {
                            setContentDetails(true);
                            setGenreDivMobile(false);

                            setTimeout(() => {
                              setHideMain(true);
                            }, 401);
                            setName(movie.title);
                            setTitle(movie.title);
                            setOverview(movie.overview);
                            setPopularity(movie.vote_average);
                            setReleaseDate(movie.release_date);
                            setPoster(movie.backdrop_path);
                            setId(movie.id);
                            setType('movies');
                          }}
                          className="md:w-[155px] rounded-[9px] bg-center bg-cover relative md:h-[225px] md:hover:scale-[1.1] md:hover:shadow-[0_0_20px_red] transition-all duration-300 w-[200px] h-[330px] mr-[25px] cursor-pointer"
                        ></div>
                      </div>
                    ))}
                  </div>
                ) : content === 'tvShows' ? (
                  <div className="flex">
                    {tvShows
                      .filter((shows) => shows.genre_ids[0] !== 16)
                      .map((tvShow, indexTv) => (
                        <div key={indexTv} className="ml-[20px]">
                          <div
                            onClick={() => {
                              setContentDetails(true);
                              setGenreDivMobile(false);

                              setTimeout(() => {
                                setHideMain(true);
                              }, 401);
                              setName(tvShow.name);
                              setTitle(tvShow.name);
                              setOverview(tvShow.overview);
                              setPopularity(tvShow.vote_average);
                              setReleaseDate(tvShow.first_air_date);
                              setPoster(tvShow.backdrop_path);
                              setId(tvShow.id);
                              setType('tvShows');
                            }}
                            style={{
                              backgroundImage: `url(https://image.tmdb.org/t/p/w780${tvShow.poster_path ?? ''})`,
                            }}
                            className="md:w-[155px] rounded-[9px] bg-center bg-cover relative md:h-[225px] md:hover:scale-[1.1] md:hover:shadow-[0_0_20px_red] transition-all duration-300 w-[200px] h-[330px] mr-[25px] cursor-pointer"
                          ></div>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="flex">
                    {animation
                      .filter((animated) => animated.genre_ids[0] === 16)
                      .map((animated, indexAni) => (
                        <div key={indexAni} className="ml-[20px]">
                          <div
                            onClick={() => {
                              setContentDetails(true);
                              setGenreDivMobile(false);
                              setTimeout(() => {
                                setHideMain(true);
                              }, 401);
                              setTitle(animated.name);
                              setName(animated.name);
                              setOverview(animated.overview);
                              setPopularity(animated.vote_average);
                              setReleaseDate(animated.first_air_date);
                              setPoster(animated.backdrop_path);
                              setId(animated.id);
                              setType('animation');
                            }}
                            style={{
                              backgroundImage: `url(https://image.tmdb.org/t/p/w780${animated.poster_path ?? ''})`,
                            }}
                            className="md:w-[155px] rounded-[9px] bg-center bg-cover relative md:h-[225px] md:hover:scale-[1.1] md:hover:shadow-[0_0_20px_red] transition-all duration-300 w-[200px] h-[330px] mr-[25px] cursor-pointer"
                          ></div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            className={` ${contentDetails ? 'transition-opacity duration-400 opacity-0' : 'transition-opacity duration-400 opacity-100'} md:block hidden ${hideMain ? 'hidden' : 'block'} `}
          >
            <div className="  w-[300px] h-[581px] absolute right-[0px] backdrop-blur-sm items-center flex flex-col  pt-[20px]">
              <div>
                <div className="flex justify-start w-[180px]">
                  <p className="mb-[10px] left-[0px] font-mono font-bold text-[20px] text-white">
                    Genre
                  </p>
                </div>
                <div
                  className={` flex flex-wrap  w-[180px] h-[200px] gap-[20px]`}
                >
                  <button
                    onClick={() => {
                      setFade(true);
                      setTimeout(() => {
                        setGenre('Action');
                        setGetGenre('Action');
                      }, 300);

                      setTimeout(() => {
                        setFade(false);
                      }, 1000);
                    }}
                    className={` ${genre === 'Action' ? 'bg-red-600 text-white shadow-[0_0_15px_red]' : 'text-white'} font-mono cursor-pointer border-red-600 border-[2px] font-bold hover:bg-red-600 hover:transition-all hover:duration-400 hover:text-white hover:shadow-[0_0_15px_red] rounded-[20px] py-2 px-4 flex items-center justify-center text-[12px] w-[80px] h-[25px]`}
                  >
                    Action
                  </button>
                  <button
                    onClick={() => {
                      setFade(true);
                      setTimeout(() => {
                        setGenre('Comedy');
                        setGetGenre('Comedy');
                      }, 300);

                      setTimeout(() => {
                        setFade(false);
                      }, 1000);
                    }}
                    className={` ${genre === 'Comedy' ? 'bg-red-600 text-white shadow-[0_0_15px_red]' : 'text-white'} font-mono cursor-pointer border-red-600 border-[2px] font-bold hover:bg-red-600 hover:transition-all hover:duration-400 hover:text-white hover:shadow-[0_0_15px_red] rounded-[20px] py-2 px-4 flex items-center justify-center text-[12px] w-[80px] h-[25px]`}
                  >
                    Comedy
                  </button>

                  <button
                    onClick={() => {
                      setFade(true);
                      setTimeout(() => {
                        setGenre('Adventure');
                        setGetGenre('Adventure');
                      }, 300);

                      setTimeout(() => {
                        setFade(false);
                      }, 1000);
                    }}
                    className={` ${genre === 'Adventure' ? 'bg-red-600 text-white shadow-[0_0_15px_red]' : 'text-white'} font-mono cursor-pointer border-red-600 border-[2px] font-bold hover:bg-red-600 hover:transition-all hover:duration-400 hover:text-white hover:shadow-[0_0_15px_red] rounded-[20px] py-2 px-4 flex items-center justify-center text-[12px] w-[80px] h-[25px]`}
                  >
                    Adventure
                  </button>
                  <button
                    onClick={() => {
                      if (content === 'animation' || content === 'tvShows')
                        return;
                      setFade(true);
                      setTimeout(() => {
                        setGenre('Horror');
                        setGetGenre('Horror');
                      }, 300);

                      setTimeout(() => {
                        setFade(false);
                      }, 1000);
                    }}
                    className={` ${content === 'animation' || content === 'tvShows' ? 'cursor-not-allowed' : 'cursor-pointer'} ${genre === 'Horror' ? 'bg-red-600 text-white shadow-[0_0_15px_red]' : 'text-white'} font-mono  border-red-600 border-[2px] font-bold rounded-[20px] hover:bg-red-600 hover:transition-all hover:duration-400 hover:text-white hover:shadow-[0_0_15px_red] rounded-[20px] py-2 px-4 flex items-center justify-center text-[12px] w-[80px] h-[25px]`}
                  >
                    Horror
                  </button>
                  <button
                    onClick={() => {
                      setFade(true);
                      setTimeout(() => {
                        setGenre('Romance');
                        setGetGenre('Romance');
                      }, 300);

                      setTimeout(() => {
                        setFade(false);
                      }, 1000);
                    }}
                    className={` ${genre === 'Romance' ? 'bg-red-600 text-white shadow-[0_0_15px_red]' : 'text-white'} font-mono cursor-pointer border-red-600 border-[2px] font-bold hover:bg-red-600 hover:transition-all hover:duration-400 hover:text-white hover:shadow-[0_0_15px_red] rounded-[20px] py-2 px-4 flex items-center justify-center text-[12px] w-[80px] h-[25px]`}
                  >
                    Romance
                  </button>
                  <button
                    onClick={() => {
                      setFade(true);
                      setTimeout(() => {
                        setGenre('All');
                        setGetGenre('All');
                      }, 300);

                      setTimeout(() => {
                        setFade(false);
                      }, 1000);
                    }}
                    className={` ${genre === 'All' ? 'bg-red-600 text-white shadow-[0_0_15px_red]' : 'text-white'} font-mono cursor-pointer border-red-600 border-[2px] font-bold hover:bg-red-600 hover:transition-all hover:duration-400 hover:text-white hover:shadow-[0_0_15px_red] rounded-[20px] py-2 px-4 flex items-center justify-center text-[12px] w-[80px] h-[25px]`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => {
                      setFade(true);
                      setTimeout(() => {
                        setGenre('War');
                        setGetGenre('War');
                      }, 300);

                      setTimeout(() => {
                        setFade(false);
                      }, 1000);
                    }}
                    className={` ${genre === 'War' ? 'bg-red-600 text-white shadow-[0_0_15px_red]' : 'text-white'} font-mono cursor-pointer border-red-600 border-[2px] font-bold rounded-[20px] hover:bg-red-600 hover:transition-all hover:duration-400 hover:text-white hover:shadow-[0_0_15px_red] rounded-[20px] py-2 px-4 flex items-center justify-center text-[12px] w-[80px] h-[25px]`}
                  >
                    War
                  </button>
                  <button
                    onClick={() => {
                      if (content === 'animation') return;
                      setFade(true);
                      setTimeout(() => {
                        setGenre('Crime');
                        setGetGenre('Crime');
                      }, 300);
                      setTimeout(() => {
                        setFade(false);
                      }, 1000);
                    }}
                    className={`${content === 'animation' ? 'cursor-not-allowed' : 'cursor-pointer'} ${genre === 'Crime' ? 'bg-red-600 text-white shadow-[0_0_15px_red]' : 'text-white'} font-mono border-red-600 border-[2px] font-bold hover:bg-red-600 hover:transition-all hover:duration-400 hover:text-white hover:shadow-[0_0_15px_red] rounded-[20px] py-2 px-4 flex items-center justify-center text-[12px] w-[80px] h-[25px]`}
                  >
                    Crime
                  </button>
                </div>
              </div>
              <div className={`flex flex-col h-[200px] w-[200px] `}>
                <p className="text-white font-bold font-mono">Top Rated</p>
                <div>
                  {content === 'movies' ? (
                    <div
                      className={`${fade ? 'transition-opacity duration-400 opacity-0' : 'transition-opacity duration-400 opacity-100'}`}
                    >
                      {topRatedMovies
                        .slice(0, 3)
                        .map((topMovies, indexTopm) => (
                          <div
                            key={indexTopm}
                            onClick={() => {
                              setContentDetails(true);
                              setTimeout(() => {
                                setHideMain(true);
                              }, 401);
                              setName(topMovies?.title);
                              setTitle(topMovies?.name);
                              setOverview(topMovies?.overview);
                              setPopularity(topMovies?.vote_average);
                              setReleaseDate(topMovies?.first_air_date);
                              setPoster(topMovies?.backdrop_path);
                              setId(topMovies?.id);
                              setType('movies');
                            }}
                            className="flex gap-[10px] mt-[10px] cursor-pointer"
                          >
                            <div
                              style={{
                                backgroundImage: `url(https://image.tmdb.org/t/p/w780${topMovies?.poster_path})`,
                              }}
                              className="w-[60px] bg-center bg-cover bg-repeat-no h-[80px] bg-white cursor-pointer"
                            ></div>
                            <div className="w-[200px] flex items-center">
                              <p className="text-[12px] font-mono font-bold text-white">
                                {topMovies?.title}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  ) : content === 'tvShows' ? (
                    <div>
                      {topRatedTvShows
                        .filter((shows) => shows?.genre_ids[0] !== 16)
                        .slice(0, 3)
                        .map((topTvShows, indexTopT) => (
                          <div
                            key={indexTopT}
                            onClick={() => {
                              setContentDetails(true);
                              setTimeout(() => {
                                setHideMain(true);
                              }, 401);
                              setName(topTvShows?.name);
                              setTitle(topTvShows?.name);
                              setOverview(topTvShows?.overview);
                              setPopularity(topTvShows?.vote_average);
                              setReleaseDate(topTvShows?.first_air_date);
                              setPoster(topTvShows?.backdrop_path);
                              setId(topTvShows?.id);
                              setType('tvShows');
                            }}
                            className="flex gap-[10px] mt-[10px] cursor-pointer"
                          >
                            <div
                              style={{
                                backgroundImage: `url(https://image.tmdb.org/t/p/w780${topTvShows?.poster_path})`,
                              }}
                              className="w-[60px] bg-center bg-cover bg-repeat-no h-[80px] bg-white cursor-pointer"
                            ></div>
                            <div className="w-[200px] flex items-center">
                              <p className="text-[12px] font-mono font-bold text-white">
                                {topTvShows?.name}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <div>
                      {topRatedAnimation
                        .filter((animated) => animated?.genre_ids[0] === 16)
                        .slice(0, 3)
                        .map((topAnimated, indexTopA) => (
                          <div
                            key={indexTopA}
                            onClick={() => {
                              setContentDetails(true);
                              setTimeout(() => {
                                setHideMain(true);
                              }, 401);
                              setName(topAnimated?.name);
                              setTitle(topAnimated?.name);
                              setOverview(topAnimated?.overview);
                              setPopularity(topAnimated?.vote_average);
                              setReleaseDate(topAnimated?.first_air_date);
                              setPoster(topAnimated?.backdrop_path);
                              setId(topAnimated?.id);
                              setType('animation');
                            }}
                            className="flex gap-[10px] cursor-pointer mt-[10px]"
                          >
                            <div
                              style={{
                                backgroundImage: `url(https://image.tmdb.org/t/p/w780${topAnimated?.poster_path})`,
                              }}
                              className="w-[60px] bg-center bg-cover bg-repeat-no h-[80px] bg-white cursor-pointer"
                            ></div>
                            <div className="w-[200px] flex items-center">
                              <p className="text-[12px] font-mono font-bold text-white">
                                {topAnimated?.name}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {hideMain && (
            <Details
              hideMain={hideMain}
              setHideMain={setHideMain}
              setIsSearching={setIsSearching}
              setContentDetails={setContentDetails}
              title={ti}
              type={type}
              popularity={pop}
              overview={ov}
              poster={pos}
              releaseDate={rd}
              id={id}
            />
          )}
        </div>
      )}
      {hideMain && (
        <Details
          hideMain={hideMain}
          setHideMain={setHideMain}
          setIsSearching={setIsSearching}
          setContentDetails={setContentDetails}
          title={ti}
          type={type}
          popularity={pop}
          overview={ov}
          poster={pos}
          releaseDate={rd}
          id={id}
        />
      )}
    </div>
  );
}
