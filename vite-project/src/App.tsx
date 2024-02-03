import { useState, useEffect } from "react";
//import SecondComp from './components/SecondComp'
import { motion } from "framer-motion"
import './App.css'

type ColorsQuoteTextProps = {
  id: number;
  color: string;
}

type DataProps = {
  content: string;
}

function App() {

  const [data, setData] = useState<DataProps>();

  const [changeQuote, setChangeQuote] = useState<boolean>(false);

  const [imgDataBool, setImgDataBool] = useState<boolean>(true);

  useEffect(() => {
    const callerInside = () => {
      fetch("https://api.quotable.io/random")
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => error);
    }
    callerInside();
    return () => console.log("useEffect clean-up!");
  }, [changeQuote]);

  const [colorsQuoteText, setColorsQuoteText] = useState<ColorsQuoteTextProps[]>([
    {
      id: 1,
      color: "linear-gradient(30deg, rgba(0, 255, 255, 1), rgba(255, 165, 0, 1))", //cyan orange
    },
    {
      id: 2,
      color: "linear-gradient(30deg, rgba(255, 69, 0, 1), rgba(255, 165, 0, 1))", //red - orange
    },
    {
      id: 3,
      color: "linear-gradient(30deg, rgba(144, 238, 144, 1), rgba(0, 255, 255, 1))", //green - cyan
    },
    {
      id: 4,
      color: "linear-gradient(30deg, rgba(144, 238, 144, 1), rgba(255, 165, 0, 1))", //green - orange
    }
  ]);

  //console.log(colorsQuoteText);

  const [countOne, setCountOne] = useState<number>(0);
  const [countTwo, setCountTwo] = useState<number>(0);
  const [iColor, setIColor] = useState<number>(0)

  const [images, setImages] = useState<string>("");

  let percent_w1 = null;
  let percent_w2 = null;

  if (countOne < 0) {
    setCountOne(0);
  };

  if (countTwo < 0) {
    setCountTwo(0);
  };

  let w: number = countOne + countTwo;
  percent_w1 = (countOne * 100) / w;
  percent_w2 = (countTwo * 100) / w;

  let changeColor = null;

  if (iColor <= 3) {
    changeColor = colorsQuoteText[iColor].color;
  } else {
    changeColor = colorsQuoteText[0].color;
  }
 
  const incrementOne = (): void => {
    setCountOne((count) => count += 1);
    setChangeQuote(!changeQuote);
    setIColor(0);
    setColorsQuoteText((prev) => ({...prev, color: colorsQuoteText[0].color}));
  };

  const decrementOne = (): void => {
    setCountOne((count) => count -= 1);
    setChangeQuote(!changeQuote);
    if (iColor <= 3) {
      setIColor(1);
      setColorsQuoteText((prev) => ({...prev, color: colorsQuoteText[1].color}));
    } else {
      setIColor(0);
      setColorsQuoteText((prev) => ({...prev, color: colorsQuoteText[0].color}));
    }
  };

  const incrementTwo = (): void => {
    setCountTwo((count) => count += 1)
    setChangeQuote(!changeQuote);
    if (iColor <= 3) {
      setIColor(2);
      setColorsQuoteText((prev) => ({...prev, color: colorsQuoteText[2].color}));
    } else {
      setIColor(0);
      setColorsQuoteText((prev) => ({...prev, color: colorsQuoteText[0].color}));
    }
  };

  const decrementTwo = (): void => {
    setCountTwo((count) => count -= 1)
    setChangeQuote(!changeQuote);
    if (iColor <= 3) {
      setIColor(3);
      setColorsQuoteText((prev) => ({...prev, color: colorsQuoteText[3].color}));
    } else {
      setIColor(0);
      setColorsQuoteText((prev) => ({...prev, color: colorsQuoteText[0].color}));
    }
  };

  const displayImages = () => {
    setImgDataBool(false);
    fetch("https://picsum.photos/1600/1000")
      .then((res) => setImages(res.url))
      .catch((error) => error);
  };

  const displayQuote = () => {
    setImgDataBool(true);
  }

  return (
    <main>
      <div className="main-screen">
        {/*
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
        */}
        <div className="frame">
          <div className="graph-in">
            <p style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              textAlign: "center",
              fontSize: "x-large",
              fontWeight: "bold",
              background: `${changeColor}`,
              color: "#333",
              padding: "20px"}}
            >
            {imgDataBool ? data?.content : (
              <img src={images} width={840} height={380} alt="img" />
              )
            }
            </p>
          </div>
        </div>


        <div className="panel-div">

          <div className="motion-container">
            <motion.div
              className="dynamic-element"
              style={{ 
                width: `${percent_w1}%`,
                height: '25px',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p className="para-motion1">
                {percent_w1 ? percent_w1.toFixed(2) : 0}%
              </p>
            </motion.div>

            <motion.div
              className="dynamic-element"
              style={{
                width: `${percent_w2}%`,
                height: '25px',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p className="para-motion2">
                {percent_w2 ? percent_w2.toFixed(2) : 0}%
              </p>
            </motion.div>
          </div>


          <div className="container-counter">

            <div className="box-countOne">
              <div className="div-p" style={{color: "orange"}}>
                <p>
                  Count: {countOne}
                </p>
                <p>
                  Percent: {percent_w1 ? percent_w1.toFixed(2) : "0"}%
                </p>
              </div>

              <button type="button" onClick={incrementOne}
                className="button"
              >
                Add
              </button>

              <button type="button" onClick={decrementOne}
                className="button"
              >
                Sub
              </button>

            </div>

            <div className="box-countTwo">
              <div className="div-p" style={{color: "cyan"}}>
                <p>
                  Count: {countTwo}
                </p>
                <p>
                  Percent: {percent_w2 ? percent_w2.toFixed(2) : "0"}%
                </p>
              </div>

              <button type="button" onClick={incrementTwo}
                className="button"
              >
                Add
              </button>

              <button type="button" onClick={decrementTwo}
                className="button"
              >
                Sub
              </button>

            </div>

          </div>

          <div className="button-panel">

            <button type="button" onClick={displayImages}
              className="button"
            >
              Img
            </button>

            <button type="button" onClick={displayQuote}
              className="button"
            >
              Quote
            </button>

          </div>

        </div>

      </div>
        
    </main>
  )
}

export default App
