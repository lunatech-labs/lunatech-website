import "./Value.scss";

interface ValueProps {
    number: number;
    content: JSX.Element;
}

const Value = (props: ValueProps) => {
    return (
        <div className="value">
            <p className="value__number">{props.number}<span className="value__pink">+</span></p>
            <p className="value__text">{props.content}</p>
        </div>
    )
}

export default Value