import "./styles.css";
import React, { useState } from "react";

const musicLib = {
  ghazals: [
    {
      songName: "Apni tasveer ko aankhoon se lagata kya hai",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=xUaeNexxdqk",
    },

    {
      songName: "Koi Fariyaad",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=8MN2bxMiB9A",
    },

    {
      songName: "Humko kiske gham ne maara",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=DTUFbcg09to",
    },

    {
      songName: "Ranjish hi sahi",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=pba_YmWDAIU",
    },

    {
      songName: "Hoshwaalon ko khabar kya",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=hZuwe72Rtcc",
    },

    {
      songName: "Seene mein jalan",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=u2_phT5vCP0",
    },
  ],

  jpop: [
    {
      songName: "Stay with Me",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=M0qMgoChzGI",
    },

    {
      songName: "Koi No Yokan",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=j2NN6z42z0U",
    },

    {
      songName: "Wine Red no Kokoro",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=kdksI3--M_g",
    },

    {
      songName: "Ano Umi Ni",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=fK1iCxuW-G0",
    },

    {
      songName: "Help me",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=u5xYdkMiV6Q",
    },

    {
      songName: "Plastic Love",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=T_lC2O1oIew",
    },

    {
      songName: "Flyday Chinatown",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=4X7ZvpwBiKA",
    },
  ],
  marathi: [
    {
      songName: "Ye re Ghana",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=h0E-PsR1-9I",
    },

    {
      songName: "Dayaghana",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=mDdVNt3DQfw",
    },

    {
      songName: "Naka Sodun Zau Rang Mahal",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=uSoKCYNOoDo",
    },

    {
      songName: "Jeev Rangala",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=gtDPLOVPjkA",
    },

    {
      songName: "Apsara Aali",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=mW67u_hWiSo",
    },

    {
      songName: "Bai Ga",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=3oZVDRiV2ek",
    },

    {
      songName: "Chandra",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=r6tU3GvJ5so",
    },

    {
      songName: "Jaadugari",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=Tx3WdxjXM-M",
    },

    {
      songName: "Majhya Raja Ra",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=nCvaPWoFEl8",
    },

    {
      songName: "Ude ga Ambe",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=-rZVieAPulA",
    },
  ],

  telugu: [
    {
      songName: "Pranavalaya",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=4CKFAb1FNns",
    },

    {
      songName: "Samajavaragamana",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=OCg6BWlAXSw",
    },

    {
      songName: "Ramulo Ramula",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=Bg8Yb9zGYyA",
    },

    {
      songName: "Buttabomma",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=2mDCVzruYzQ",
    },

    {
      songName: "Naatu Naatu",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=OsU0CGZoV8E",
    },
  ],

  korean: [
    {
      songName: "One Day",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=OrNlfoKGPJI",
    },

    {
      songName: "Day and Night",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=Bol6PsSSgRU",
    },

    {
      songName: "Someday, the boy",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=txFeihoczb0",
    },

    {
      songName: "Dear Moon",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=13vs5NfHSBs",
    },

    {
      songName: "If You",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=hkStCKeLlec",
    },

    {
      songName: "Eyes, Nose, Lips",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=UwuAPyOImoI",
    },
  ],

  romantic: [
    {
      songName: "Chasing Cars",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=CHao9mL2tM8",
    },

    {
      songName: "Something",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=UelDrZ1aFeY",
    },

    {
      songName: "Yesterday",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=Nnumx-LN-EQ",
    },

    {
      songName: "Jackie and Wilson",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=NMLhdYjxbCs",
    },

    {
      songName: "Alag Aasman",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=vA86QFrXoho",
    },

    {
      songName: "Marasim",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=KqplybLnjqc",
    },

    {
      songName: "Bewajah",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=o1VvgO7RNXg",
    },

    {
      songName: "Jaan-e-bahara",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=BTf68TSLGH4",
    },
  ],
};

// let [currentGenre, setCurrentGenre] = useState("ghazals");

// let genres = Object.keys(musicLib);

export default function App() {
  let [currentGenre, setCurrentGenre] = useState("ghazals");

  function genreClickHandler(genre) {
    currentGenre = genre;
    setCurrentGenre(currentGenre);
  }

  // let currentGenre;

  // function genreClickHandler(genre) {
  // return <li></li>;
  // setGenre(genre);

  //   switch (genre) {
  //     case "ghazals":
  //       currentGenre = ghazals;
  //       setCurrentGenre(currentGenre);
  //       break;

  //     case "jpop":
  //       currentGenre = jpop;
  //       setCurrentGenre(currentGenre);
  //       break;

  //     case "marathi":
  //       currentGenre = marathi;
  //       setCurrentGenre(currentGenre);
  //       break;

  //     case "telugu":
  //       currentGenre = telugu;
  //       setCurrentGenre(currentGenre);
  //       break;

  //     case "korean":
  //       currentGenre = korean;
  //       setCurrentGenre(currentGenre);
  //       break;

  //     case "romantic":
  //       currentGenre = romantic;
  //       setCurrentGenre(currentGenre);
  //       break;

  //     default:
  //       currentGenre = ghazals;
  //       setCurrentGenre(currentGenre);
  //       break;
  //   }
  //   // console.log(currentGenre);
  // }

  return (
    <div className="App">
      <h1 id="main-title">MelodyMatch</h1>
      <h2 id="sub-title">
        Do you like music just as much as I do!? Click on one of the genres
        below to get some awesome song recommendations
      </h2>
      <nav>
        <ul id="navigationList">
          <li
            className="nav-pills"
            key="ghazals"
            onClick={() => genreClickHandler("ghazals")}
          >
            Ghazals
          </li>
          <li
            className="nav-pills"
            key="jpop"
            onClick={() => genreClickHandler("jpop")}
          >
            Japanese Classic Rock/City Pop/Folk
          </li>
          <li
            className="nav-pills"
            key="marathi"
            onClick={() => genreClickHandler("marathi")}
          >
            Marathi Songs
          </li>
          <li
            className="nav-pills"
            key="telugu"
            onClick={() => genreClickHandler("telugu")}
          >
            Telugu Songs
          </li>
          <li
            className="nav-pills"
            key="korean"
            onClick={() => genreClickHandler("korean")}
          >
            Korean Ballads
          </li>
          <li
            className="nav-pills"
            key="romantic"
            onClick={() => genreClickHandler("romantic")}
          >
            Romantic Songs
          </li>
        </ul>
      </nav>

      <hr />

      <ul id="recommendationList">
        {
          // genres.map( function displayRecommendations(recommendation) {

          // return (

          musicLib[currentGenre].map((recommendation) => {
            return (
              <li key={recommendation.songName}>
                <div id="outputBoxes">
                  <h3> {recommendation.songName} </h3>{" "}
                  <small> Rating: {recommendation.rating} </small>
                  <a id="link" target="_blank" href={recommendation.link}>
                    {" "}
                    Listen on Youtube{" "}
                  </a>
                </div>
              </li>
            );

            // );
          })
        }
      </ul>
    </div>
  );
}
