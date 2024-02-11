import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import './styles/ContainerCounter.css';

type CountainerCounterProps = {
    countOne: number;
    countTwo: number;
    percent_w1: number;
    percent_w2: number;
    incrementOne: () => void;
    decrementOne: () => void;
    incrementTwo: () => void;
    decrementTwo: () => void;
}

export default function ContainerCounter({
    countOne,
    countTwo,
    percent_w1,
    percent_w2,
    incrementOne,
    decrementOne,
    incrementTwo,
    decrementTwo}: CountainerCounterProps) {
    return (
        <div className="container-counter">

            <div className="box-countOne">
                <div className="div-p" style={{color: "orange"}}>
                    <p>
                        Intensity: {countOne}
                    </p>
                    <p>
                        {percent_w1 ? percent_w1.toFixed(2) : "0"}%
                    </p>
                </div>

                <div className="div-btn">

                    <button type="button" onClick={incrementOne}
                        className="btn-circle"
                    >
                        <FaArrowAltCircleLeft size={24} className="react-icons" />
                    </button>

                    <button type="button" onClick={decrementOne}
                        className="btn-circle"
                    >
                        <FaArrowAltCircleRight size={24} className="react-icons" />
                    </button>

                </div>

            </div>

            <div className="box-countTwo">
                <div className="div-p" style={{color: "cyan"}}>
                    <p>
                        Intensity: {countTwo}
                    </p>
                    <p>
                        {percent_w2 ? percent_w2.toFixed(2) : "0"}%
                    </p>
                </div>

                <div className="div-btn">

                    <button type="button" onClick={incrementTwo}
                        className="btn-circle"
                    >
                        <FaArrowAltCircleLeft size={24} className="react-icons" />
                    </button>

                    <button type="button" onClick={decrementTwo}
                        className="btn-circle"
                    >
                        <FaArrowAltCircleRight size={24} className="react-icons" />
                    </button>

                </div>

            </div>

        </div>
    )
}
