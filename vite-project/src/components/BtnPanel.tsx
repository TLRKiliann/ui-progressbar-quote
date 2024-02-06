import './styles/BtnPanel.css';

type ButtonProps = {
    displayImg: () => void;
    handleHiddenImg: () => void;
    handleHiddenQuote: () => void;
    displayQuote: () => void;
}

export default function BtnPanel(props: ButtonProps) {
    return (
        <div className="button-panel">

            <button type="button" onClick={props.displayImg}
                className="button"
            >
                Display/Change img
            </button>

            <button type="button" onClick={props.handleHiddenImg}
                className="button"
            >
                Hide img
            </button>

            <button type="button" onClick={props.handleHiddenQuote}
                className="button"
            >
                Hide quote
            </button>


            <button type="button" onClick={props.displayQuote}
                className="button"
            >
                Display/Change quote
            </button>

        </div>
    )
}
