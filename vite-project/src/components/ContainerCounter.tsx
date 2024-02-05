import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

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
    decrementTwo }: CountainerCounterProps) {
    return (
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
                    <FaArrowAltCircleLeft size={24} />
                </button>

                <button type="button" onClick={decrementOne}
                    className="button"
                >
                    <FaArrowAltCircleRight size={24} />
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
                    <FaArrowAltCircleLeft size={24} />
                </button>

                <button type="button" onClick={decrementTwo}
                    className="button"
                >
                    <FaArrowAltCircleRight size={24} />
                </button>

            </div>

        </div>
    )
}
