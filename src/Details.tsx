import { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa6';

interface Prop {
  title: string;
  popularity: string;
  overview: string;
  poster: string;
  releaseDate: string;
  hideMain: boolean;
  id: number;
  setHideMain: (hideMain: boolean) => void;
  setContentDetails: (contentDetails: boolean) => void;
  setIsSearching: (isSearching: boolean) => void;
  type: 'movies' | 'tvShows' | 'animation';
}

type Trailer = {
  key: string;
  type: string;
  site: string;
};
export function Details({
  title,
  popularity,
  overview,
  poster,
  type,
  releaseDate,
  setContentDetails,
  setHideMain,
  setIsSearching,
  id,
}: Prop) {
  const [key, setKey] = useState<string>();
  const [trailer, setTrailer] = useState<boolean>(false);
  const [play, setPlay] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (id === 0) return;
    setTimeout(() => {
      setLoading(true);
    }, 10);
    setTimeout(() => {
      setLoading(false);
    }, 700);
    if (type === 'movies') {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=b6229e5681a2c1605a0da1cf880b7edd`,
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);

          const fallbackTrailer = data.results.find(
            (video: Trailer) =>
              video.type === 'Trailer' && video.site === 'YouTube',
          );
          setKey(fallbackTrailer.key);
        });
    } else if (type === 'tvShows') {
      fetch(
        `https://api.themoviedb.org/3/tv/${id}/videos?api_key=b6229e5681a2c1605a0da1cf880b7edd`,
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);

          const fallbackTrailer = data.results.find(
            (video: Trailer) =>
              video.type === 'Trailer' && video.site === 'YouTube',
          );
          setKey(fallbackTrailer.key);
        });
    } else if (type === 'animation') {
      fetch(
        `https://api.themoviedb.org/3/tv/${id}/videos?api_key=b6229e5681a2c1605a0da1cf880b7edd`,
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);

          const fallbackTrailer = data.results.find(
            (video: Trailer) =>
              video.type === 'Trailer' && video.site === 'YouTube',
          );
          setKey(fallbackTrailer.key);
        });
    }
  }, [id, type]);
  return (
    <div
      className={`w-screen h-screen items-center flex flex-col ${trailer ? 'mt-[30px]' : ''} `}
    >
      {loading ? (
        <div className=" mt-[270px] flex justify-center items-center">
          <FaSpinner className="animate-spin text-red-600 text-[50px]" />
        </div>
      ) : (
        <>
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w780${poster})`,
            }}
            className={`${trailer ? 'hidden' : 'block'} w-[400px] h-[200px] mt-[30px] rounded-[10px] md:w-[800px] relative bg-center bg-no-repeat bg-cover bg-black  md:h-[250px] md:mt-[20px]`}
          >
            {!poster && (
              <p className="text-white text-center text-[20px] font-mono font-bold mt-[50px]">
                No backdrop poster available
              </p>
            )}
            <button
              onClick={() => {
                setTrailer(true);
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                }, 2000);
                setPlay(1);
              }}
              className={`${trailer ? 'hidden' : 'block'} absolute right-[20px]  bottom-[20px]  text-white flex items-center justify-center md:py-4 md:px-4 font-mono font-bold md:h-[20px] bg-red-600 hover:transition-all hover:duration-400 text-white hover:shadow-[0_0_15px_red] py-2 px-2 w-[150px] h-[40px] border-[2px] border-red-600 md:w-[200px] mt-[20px] md:text-[15px] rounded-[30px] md:rounded-[15px] cursor-pointer`}
            >
              Play Trailer
            </button>
          </div>
          <div className={`w-full h-full ${trailer ? 'block' : 'hidden'}`}>
            {!key ? (
              <div
                className={`${trailer ? 'block' : 'hidden'} w-full h-full flex flex-col items-center `}
              >
                <p className="text-white  mt-[170px] text-[10px] md:text-[20px] font-mono font-bold">
                  no trailer avalaible for {title}
                </p>
                <button
                  onClick={() => {
                    setTrailer(false);
                    setPlay(0);
                  }}
                  className={`${trailer ? 'block' : 'hidden'} bg-red-600 text-white flex items-center justify-center md:py-4 md:px-4 font-mono font-bold md:h-[20px] md:w-[100px] mt-[20px] md:text-[15px] px-2 py-2 rounded-[15px] shadow-[0_0_15px_red] cursor-pointer`}
                >
                  Go Back
                </button>
              </div>
            ) : (
              <>
                {trailer && loading ? (
                  <div className=" mt-[270px] flex justify-center items-center">
                    <FaSpinner className="animate-spin text-red-600 text-[50px]" />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    {window.innerWidth > 430 ? (
                      <iframe
                        key={play}
                        src={`https://www.youtube.com/embed/${key}?&vq=hd1080&controls=1&modestbranding=1&rel=0&showinfo=0`}
                        width="900"
                        height="400"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                        className={`rounded-xl md:block hidden shadow-[0_0_20px_red] ${trailer ? 'block' : 'hidden'}`}
                      />
                    ) : (
                      <iframe
                        key={play}
                        src={`https://www.youtube.com/embed/${key}?&vq=hd1080&controls=1&modestbranding=1&rel=0&showinfo=0`}
                        width="400"
                        height="200"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                        className={`rounded-xl md:hidden mt-[130px] block shadow-[0_0_20px_red] ${trailer ? 'block' : 'hidden'}`}
                      />
                    )}

                    <div className="w-full flex flex-col items-center">
                      <button
                        onClick={() => {
                          setTrailer(false);
                          setPlay(0);
                        }}
                        className={`${trailer ? 'block' : 'hidden'} font-mono cursor-pointer border-red-600 border-[2px] font-bold hover:bg-red-600 hover:transition-all hover:duration-400 text-white hover:shadow-[0_0_15px_red] rounded-[20px] py-2 px-4 flex items-center justify-center text-[15px] w-[120px] h-[35px] mt-[25px] mb-[10px]`}
                      >
                        Go Back
                      </button>
                      <button
                        onClick={() => {
                          setPlay((prev) => prev + 1);
                        }}
                        className={`${trailer ? 'block' : 'hidden'} bgfont-mono cursor-pointer border-red-600 border-[2px] font-bold hover:bg-red-600 hover:transition-all hover:duration-400 text-white hover:shadow-[0_0_15px_red] rounded-[20px] py-2 px-4 flex items-center justify-center text-[15px] w-[120px] h-[35px]`}
                      >
                        Restart
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          <div
            className={`${trailer ? 'hidden' : 'block'} 
    md:w-[900px] w-[400px] md:h-auto h-[340px] mt-[10px] p-6 
    bg-neutral-900/80 backdrop-blur-md
    rounded-2xl shadow-lg border border-neutral-800 space-y-3`}
          >
            <p className="text-xl font-bold font-mono text-white">{title}</p>

            <p className="text-neutral-300">
              ⭐ Rating:{' '}
              <span className="text-white font-semibold">
                {Number(popularity).toFixed(1)}
              </span>
            </p>

            <p className="text-neutral-300">
              📅 Release Date: <span className="text-white">{releaseDate}</span>
            </p>
            <div className="max-h-[200px] overflow-y-auto hide-scrollbar">
              <p className="text-neutral-400 leading-relaxed">{overview}</p>
            </div>
          </div>
          <div className="relative">
            {trailer ? (
              ''
            ) : (
              <button
                onClick={() => {
                  setHideMain(false);
                  setContentDetails(false);
                  setIsSearching(false);
                }}
                className={`mt-[20px] md:absolute md:left-[500px] md:bottom-[50px] font-mono cursor-pointer border-red-600 border-[2px] font-bold hover:bg-red-600 hover:transition-all hover:duration-400 text-white hover:shadow-[0_0_15px_red] rounded-[20px] py-2 px-4 flex items-center justify-center text-[15px] w-[120px] h-[35px]`}
              >
                Main Page
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
