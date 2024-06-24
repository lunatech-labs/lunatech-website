import "./IconAnimated.scss";

interface IconProps {
    image: () => JSX.Element;
    size: "small" | "medium" | "large";
}

const IconAnimated = (props: IconProps) => {
    return (
        <div className={`iconAnimated icon-${props.size}`}>
            <div className="iconAnimated__image">
                {props.image()}
            </div>
        </div>
    );
};

export default IconAnimated;