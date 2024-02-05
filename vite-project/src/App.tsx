import { useState, useEffect } from "react";
import MotionCountainer from "./components/MotionCountainer";
import CountainerCounter from './components/ContainerCounter';
import BtnPanel from './components/BtnPanel';
//import SecondComp from './components/SecondComp'
import './App.css'

type DataProps = {
  content: string;
}

function App() {

  const [data, setData] = useState<DataProps>({content: ""});
  const [urlImg, setUrlImg] = useState<string>("");

  const [countOne, setCountOne] = useState<number>(0);
  const [countTwo, setCountTwo] = useState<number>(0);
  const [changeQuote, setChangeQuote] = useState<boolean>(false);
  const [changeImg, setChangeImg] = useState<boolean>(false);

  useEffect(() => {
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
    const callerImg = () => {
      fetch("https://picsum.photos/1600/1000")
        .then((res) => setUrlImg(res.url))
        .catch((error) => console.log(error?.message));
    }
    callerImg();
    return () => console.log("useEffect clean-up (2)!");
  }, [changeImg]);

  const colorsQuoteText = [
    "linear-gradient(30deg, rgba(255, 69, 0, 1), rgba(255, 165, 0, 1))",
    "linear-gradient(30deg, rgba(255, 69, 0, 1), rgba(255, 255, 0, 1))",
    "linear-gradient(30deg, rgba(255, 165, 0, 1), rgba(255, 255, 0, 1))",
    "linear-gradient(30deg, rgba(255, 165, 0, 1), rgba(238, 130, 238, 1))"
  ];

  const colorsQuoteText2 = [
    "linear-gradient(30deg, rgba(144, 238, 144, 1), rgba(255, 255, 0, 1))",
    "linear-gradient(30deg, rgba(255, 255, 0, 1), rgba(0, 255, 255, 1))",
    "linear-gradient(30deg, rgba(144, 238, 144, 1), rgba(0, 255, 255, 1))",
    "linear-gradient(30deg, rgba(0, 255, 255, 1), rgba(238, 130, 238, 1))"
  ];

  const [colorBg, setColorBg] = useState<string>(colorsQuoteText[0]);

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

  const incrementOne = (): void => {
    if (countOne < 3) {
      setCountOne((count) => count += 1);
    } else {
      setCountOne((_count) => _count = 0);
    }
    let i = countOne + 1;
    //console.log(i, "i")
    if (i >= 0 && i < colorsQuoteText.length) {
      setColorBg(colorsQuoteText[i])
    } else {
      setColorBg(colorsQuoteText[0])
    }
  };

  const decrementOne = (): void => {
    if (countOne > 0 && countOne <= 3) {
      setCountOne((count) => count -= 1);
    } else {
      setCountOne((_count) => _count = 0);
    }
    let i = countOne - 1;
    //console.log(i, "i")
    if (i >= 0 && i < colorsQuoteText.length) {
      setColorBg(colorsQuoteText[i])
    } else {
      setColorBg(colorsQuoteText[0])
    }
  };

  const incrementTwo = (): void => {
    if (countTwo < 3) {
      setCountTwo((count) => count += 1);
    } else {
      setCountTwo((_count) => _count = 0);
    }
    let j = countTwo + 1;
    //console.log(j, "i")
    if (j >= 0 && j < colorsQuoteText2.length) {
      setColorBg(colorsQuoteText2[j])
    } else {
      setColorBg(colorsQuoteText2[0])
    }
  };

  const decrementTwo = (): void => {
    if (countTwo > 0 && countTwo <= 3) {
      setCountTwo((count) => count -= 1);
    } else {
      setCountTwo((_count) => _count = 0);
    }
    let j = countTwo - 1;
    //console.log(j, "j")
    if (j >= 0 && j < colorsQuoteText2.length) {
      setColorBg(colorsQuoteText2[j])
    } else {
      setColorBg(colorsQuoteText2[0])
    }
  };

  const displayQuote = (): void => {
    setChangeQuote(!changeQuote);
  };

  const displayImg = (): void => {
    setChangeImg(!changeImg);
  };

  const switcherImg = (): void => {
    setUrlImg("");
  };

  const switcherQuote = (): void => {
    setData({content: ""});
  };

  return (
    <main>
      <div className="main-screen">

        <div className="frame">
          <div className="graph-in">

            <div className="para-quote" 
              style={{background: `${colorBg}`}}
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

          <MotionCountainer 
            percent_w1={percent_w1}
            percent_w2={percent_w2}
          />

          <CountainerCounter
            countOne={countOne}
            countTwo={countTwo}
            percent_w1={percent_w1}
            percent_w2={percent_w2}
            incrementOne={incrementOne} 
            decrementOne={decrementOne} 
            incrementTwo={incrementTwo} 
            decrementTwo={decrementTwo}
          />

        </div>

        <BtnPanel
          displayImg={displayImg}
          switcherImg={switcherImg}
          switcherQuote={switcherQuote}
          displayQuote={displayQuote}
        />

      </div>
        
    </main>
  )
}

export default App;
