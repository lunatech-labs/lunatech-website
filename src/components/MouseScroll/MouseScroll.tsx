import "./MouseScroll.scss";

interface MouseScrollProps {
    onClick: () => void;
}

const MouseScroll  = (props: MouseScrollProps) => {
    return (
        <button className="mouse" onClick={props.onClick}> 
            <span className="mouse__content">
                <span className="mouse__movement"> </span>
            </span>
            <span className="mouse__text fadeIn">Scroll</span> 
        </button>
    )
}

export default MouseScroll