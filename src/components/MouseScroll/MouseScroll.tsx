import "./MouseScroll.scss";

const MouseScroll = () => {
    return (
        <a className="mouse" href="#"> 
            <span className="mouse__content">
                <span className="mouse__movement"> </span>
            </span>
            <span className="mouse__text fadeIn">Scroll</span> 
        </a>
    )
}

export default MouseScroll