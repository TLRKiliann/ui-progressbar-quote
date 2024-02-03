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

  const [data, setData] = useState<DataProps>({content: ""});
  const [urlImg, setUrlImg] = useState<string>("");

  const [countOne, setCountOne] = useState<number>(0);
  const [countTwo, setCountTwo] = useState<number>(0);
  const [iColor, setIColor] = useState<number>(0)

  const [changeQuote, setChangeQuote] = useState<boolean>(false);
  const [changeImg, setChangeImg] = useState<boolean>(false);

  useEffect(() => {
    //setUrlImg("");
    const callerQuote = () => {
      fetch("https://api.quotable.io/random")
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error?.message));
    }
    callerQuote();
    return () => console.log("useEffect clean-up (1)!");
  }, [changeQuote]);

  useEffect(() => {
    //setData({content: ""})
    const callerImg = () => {
      fetch("https://picsum.photos/1600/1000")
        .then((res) => setUrlImg(res.url))
        .catch((error) => console.log(error?.message));
    }
    callerImg();
    return () => console.log("useEffect clean-up (2)!");
  }, [changeImg]);

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

  let percent_w1 = null;
  let percent_w2 = null;

  if (countOne < 0) {
    setCountOne(0);
  };

  if (countTwo < 0) {
    setCountTwo(0);
  };

  let total: number = countOne + countTwo;
  percent_w1 = (countOne * 100) / total;
  percent_w2 = (countTwo * 100) / total;
  
  let changeColor = null;
  if (iColor <= 3) {
    changeColor = colorsQuoteText[iColor].color;
  } else {
    changeColor = colorsQuoteText[0].color;
  }

  const incrementOne = (): void => {
    setCountOne((count) => count += 1);
    setIColor(0);
    setColorsQuoteText((prev) => ({...prev, color: colorsQuoteText[0].color}));
  };

  const decrementOne = (): void => {
    setCountOne((count) => count -= 1);
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
    if (iColor <= 3) {
      setIColor(3);
      setColorsQuoteText((prev) => ({...prev, color: colorsQuoteText[3].color}));
    } else {
      setIColor(0);
      setColorsQuoteText((prev) => ({...prev, color: colorsQuoteText[0].color}));
    }
  };

  const displayQuote = () => {
    setChangeQuote(!changeQuote);
  };

  const displayImg = () => {
    setChangeImg(!changeImg);
  };

  const switcherImg = () => {
    setUrlImg("");
  };

  const switcherQuote = () => {
    setData({content: ""});
  };

  return (
    <main>
      <div className="main-screen">

        <div className="frame">
          <div className="graph-in">

            <div className="para-quote" 
              style={{background: `${changeColor}`}}
            >
              {urlImg && data.content ? (
                  <div className="para-img">
                    <p className="layer-quote">{data?.content}</p>
                    <img src={urlImg} width={840} height={380} alt="img" className="img" />
                  </div>
                ) : data?.content ? data.content : urlImg ? (
                  <img src={urlImg} width={840} height={380} alt="img" className="img" />
                ) : null
              }
            </div>
          
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

        </div>

        <div className="button-panel">

          <button type="button" onClick={displayImg}
            className="button"
          >
            Display/Change image
          </button>

          <button type="button" onClick={switcherImg}
            className="button"
          >
            Hide img
          </button>

          <button type="button" onClick={switcherQuote}
            className="button"
          >
            Hide quote
          </button>


          <button type="button" onClick={displayQuote}
            className="button"
          >
            Display/Change quote
          </button>

        </div>

      </div>
        
    </main>
  )
}

export default App;
