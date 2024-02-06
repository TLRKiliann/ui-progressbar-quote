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

            <button type="button" onClick={props.displayImg}>
                Display/Change img
            </button>

            <button type="button" onClick={props.handleHiddenImg}>
                Hide img
            </button>

            <button type="button" onClick={props.handleHiddenQuote}>
                Hide quote
            </button>

            <button type="button" onClick={props.displayQuote}>
                Display/Change quote
            </button>

        </div>
    )
}
