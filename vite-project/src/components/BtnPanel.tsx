type ButtonProps = {
    displayImg: () => void;
    switcherImg: () => void;
    switcherQuote: () => void;
    displayQuote: () => void;
}

export default function BtnPanel({displayImg, switcherImg, switcherQuote, displayQuote}: ButtonProps) {
    return (
        <div className="button-panel">

            <button type="button" onClick={displayImg}
                className="button"
            >
                Display/Change img
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
    )
}
