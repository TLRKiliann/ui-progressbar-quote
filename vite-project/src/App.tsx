import { useState, useEffect } from "react";
import FrameComp from "./components/FrameComp";
import SelectComp from "./components/SelectComp";
import MotionCountainer from "./components/MotionCountainer";
import CountainerCounter from './components/ContainerCounter';
import BtnPanel from './components/BtnPanel';
import './App.css'

type DataProps = {
  content: string;
};

function App() {

  const [data, setData] = useState<DataProps>({content: ""});
  const [urlImg, setUrlImg] = useState<string>("");
  const [countOne, setCountOne] = useState<number>(0);
  const [countTwo, setCountTwo] = useState<number>(0);
  const [changeQuote, setChangeQuote] = useState<boolean>(false);
  const [changeImg, setChangeImg] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
    setIsLoading(true);
    const callerImg = () => {
      fetch("https://picsum.photos/1600/1000")
        .then((res) => setUrlImg(res.url))
        .catch((error) => console.log(error?.message));
        setIsLoading(false)
    }
    callerImg();
    return () => console.log("useEffect clean-up (2)!")
  }, [changeImg]);

  const [selectedColorsPalette, setSelectedColorsPalette] = useState<string>("yellowRed");

  let colorPalettOne: string[] = ["yellow", "orange", "orangered", "red"];
  let colorPalettTwo: string[] = ["yellow", "orange", "orangered", "red"];

  if (selectedColorsPalette === "yellowRed") {
    colorPalettOne = ["yellow", "orange", "orangered", "red"];
    colorPalettTwo = ["yellow", "orange", "orangered", "red"];
  } else if (selectedColorsPalette === "cyanViolet") {
    colorPalettOne = ["cyan", "deepskyblue", "dodgerblue", "violet"];
    colorPalettTwo = ["cyan", "deepskyblue", "dodgerblue", "violet"];
  } else if (selectedColorsPalette === "pinkViolet") {
    colorPalettOne = ["pink", "hotpink", "violet", "blueviolet"];
    colorPalettTwo = ["pink", "hotpink", "violet", "blueviolet"];
  } else if (selectedColorsPalette === "yellowCyan") {
    colorPalettOne = ["yellow", "orange", "orangered", "red"];
    colorPalettTwo = ["cyan", "aqua", "turquoise", "violet"];
  }

  const [colorBgOne, setColorBgOne] = useState<string>(colorPalettOne[0]);
  const [colorBgTwo, setColorBgTwo] = useState<string>(colorPalettTwo[0]);

  useEffect(() => {
    const callerImg = () => {
      if (selectedColorsPalette !== undefined) {
        switch (selectedColorsPalette) {
          case "yellowRed":
            setCountOne(0);
            setCountTwo(0);
            setColorBgOne("yellow");
            setColorBgTwo("yellow");
            break;
          case "cyanViolet":
            setCountOne(0);
            setCountTwo(0);
            setColorBgOne("cyan");
            setColorBgTwo("cyan");
            break;
          case "pinkViolet":
            setCountOne(0);
            setCountTwo(0);
            setColorBgOne("pink");
            setColorBgTwo("pink");
            break;
          case "yellowCyan":
            setCountOne(0);
            setCountTwo(0);
            setColorBgOne("yellow");
            setColorBgTwo("cyan");
            break;
          default:
            setCountOne(1);
            setCountTwo(1);
            setColorBgOne("yellow");
            setColorBgTwo("yellow");
            break;
        }
      } else {
        return console.log("Error with select option value");
      }
    }
    callerImg();
    return () => console.log("useEffect clean-up (3)!");
  }, [selectedColorsPalette]);

  let percent_w1 = null;
  let percent_w2 = null;

  let total: number = countOne + countTwo;
  percent_w1 = (countOne * 100) / total;
  percent_w2 = (countTwo * 100) / total;

  const incrementOne = (): void => {
    let i = countOne;
    if (countOne < 3) {
      setCountOne((count) => count += 1);
      setColorBgOne(colorPalettOne[i+1])
    }
  };

  const decrementOne = (): void => {
    let j = countOne;
    if (countOne > 0 && countOne <= 3) {
      setCountOne((count) => count -= 1);
      setColorBgOne(colorPalettOne[j-1])
    }
  };

  const incrementTwo = (): void => {
    let k = countTwo;
    if (countTwo < 3) {
      setCountTwo((count) => count += 1);
      setColorBgTwo(colorPalettTwo[k+1])
    }
  };

  const decrementTwo = (): void => {
    let l = countTwo;
    if (countTwo > 0 && countTwo <= 3) {
      setCountTwo((count) => count -= 1);
      setColorBgTwo(colorPalettTwo[l-1])
    }
  };

  const displayImg = (): void => {
    setChangeImg(!changeImg);
  };

  const handleHiddenImg = (): void => {
    setUrlImg("");
  };

  const displayQuote = (): void => {
    setChangeQuote(!changeQuote);
  };

  const handleHiddenQuote = (): void => {
    setData({content: ""});
  };

  const handleChangeOptions = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedColorsPalette(e.target.value);
  };

  return (
    <main>
      <div className="main-screen">

        <FrameComp 
          colorBgOne={colorBgOne}
          colorBgTwo={colorBgTwo}
          isLoading={isLoading}
          urlImg={urlImg}
          data={data}
        />

        <div className="panel-div">
          
          <SelectComp
            selectedColorsPalette={selectedColorsPalette}
            handleChangeOptions={handleChangeOptions}
          />

          <MotionCountainer 
            percent_w1={percent_w1}
            percent_w2={percent_w2}
            colorBgOne={colorBgOne}
            colorBgTwo={colorBgTwo}
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
          handleHiddenImg={handleHiddenImg}
          displayQuote={displayQuote}
          handleHiddenQuote={handleHiddenQuote}
        />

      </div>
        
    </main>
  )
}

export default App;
