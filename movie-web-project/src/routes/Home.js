import { useEffect, useState } from "react";
import Movie from "../components/Movie";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.0&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="movie-box">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// //--------------------------------------------------------------------------------------------
// import { useEffect, useState } from "react";

// export default function Home() {
//   const [loading, setLoading] = useState(true);
//   const [movies, setMovies] = useState([]);
//   useEffect(() => {
//     fetch(
//       `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
//     )
//       .then((response) => response.json())
//       .then((json) => {
//         setMovies(json.data.movies);
//         setLoading(false);
//       });
//   }, []);
//   return (
//     <div>
//       {loading ? (
//         <h1>Loading...</h1>
//       ) : (
//         <div className="movie-box">
//           {movies.map((movie) => (
//             <Movie
//               key={movie.id}
//               coverImg={movie.medium_cover_image}
//               title={movie.title}
//               summary={movie.summary}
//               genres={movie.genres}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// //--------------------------------------------------------------------------------------------
// import { useEffect, useState } from "react";

// export default function Home() {
//   const [loading, setLoading] = useState(true);
//   const [movies, setMovies] = useState([]);
//   const getMovies = async () => {
//     const response = await fetch(
//         `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
//     );
//     const json = await response.json();
//     setMovies(json.data.movies);
//     setLoading(false);
//   };
//   useEffect(()=> {
//     getMovies();
//   }, []);
//   return (
//     <div>
//       {loading ? (
//         <h1>Loading...</h1>
//       ) : (
//         <div className="movie-box">
//           {movies.map((movie) => (
//             <Movie
//               key={movie.id}
//               coverImg={movie.medium_cover_image}
//               title={movie.title}
//               summary={movie.summary}
//               genres={movie.genres}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
