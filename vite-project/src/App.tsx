import { PhotoProps, DataProps, HollyBoolyProps } from "./lib/definitions";
import { useState, useEffect } from "react";
import { photos } from './lib/data';
import { getColorPalette, getPercent } from "./lib/functions";
import FrameComp from "./components/FrameComp";
import SelectComp from "./components/SelectComp";
import DownloaderImg from "./components/DownloaderImg";
import MotionCountainer from "./components/MotionCountainer";
import CountainerCounter from './components/ContainerCounter';
import BtnPanel from './components/BtnPanel';
import './App.css';

function App() {

  const [data, setData] = useState<DataProps>({content: ""});
  const [urlImg, setUrlImg] = useState<string>("");
  
  const [countOne, setCountOne] = useState<number>(0);
  const [countTwo, setCountTwo] = useState<number>(0);

  const [hollyBooly, setHollyBooly] = useState<HollyBoolyProps>(
    {
      changeQuote: false,
      changeImg: false,
      boolBoxImg: false
    }
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const callerQuote = () => {
      fetch("https://api.quotable.io/random")
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error?.message));
        setIsLoading(false);
    }
    callerQuote();
    return () => console.log("Clean-up effect for quote done");
  }, [hollyBooly.changeQuote]);

  useEffect(() => {
    setIsLoading(true);
    const callerImg = () => {
      fetch("https://picsum.photos/1600/1000")
        .then((res) => setUrlImg(res.url))
        .catch((error) => console.log(error?.message));
        setIsLoading(false)
    }
    callerImg();
    return () => console.log("Clean-up effect for img done");
  }, [hollyBooly.changeImg]);

  const [selectedColorsPalette, setSelectedColorsPalette] = useState<string>("yellowRed");

  const { colorPalettOne, colorPalettTwo } = getColorPalette(selectedColorsPalette);

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
            setCountOne(0);
            setCountTwo(0);
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

  const { percent_w1, percent_w2 } = getPercent({countOne, countTwo});

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

  const handleChangeOptions = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedColorsPalette(e.target.value);
  };

  const handleBoolBoxImg = (): void => {
    setHollyBooly({...hollyBooly, boolBoxImg: !hollyBooly.boolBoxImg})
  };

  const handleDownloadImg = (id: number): PhotoProps[] | undefined => {
    const findById = photos.find((p: PhotoProps) => p.id === id);
    if (findById) {
      const nameImg = findById?.name;
      const mappToFindNameImg = photos.filter((m: PhotoProps) => m.name === nameImg ? setUrlImg(m.name) : m);
      return mappToFindNameImg;
    } else {
      return undefined;
    }
  };

  const displayImg = (): void => {
    setHollyBooly({...hollyBooly, changeImg: !hollyBooly.changeImg})
  };

  const handleHiddenImg = (): void => {
    setUrlImg("");
  };

  const displayQuote = (): void => {
    setHollyBooly({...hollyBooly, changeQuote: !hollyBooly.changeQuote})
  };

  const handleHiddenQuote = (): void => {
    setData({content: ""});
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
          
          <div className="select-btn">

            <SelectComp
              selectedColorsPalette={selectedColorsPalette}
              handleChangeOptions={handleChangeOptions}
            />

            <DownloaderImg 
              colorBgOne={colorBgOne}
              colorBgTwo={colorBgTwo}
              hollyBooly={hollyBooly}
              handleBoolBoxImg={handleBoolBoxImg}
              photos={photos}
              handleDownloadImg={(id) => handleDownloadImg(id)}
            />

          </div>

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
