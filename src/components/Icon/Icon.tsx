import "./Icon.scss";

interface IconProps {
    image: string | (() => JSX.Element);
    size: "small" | "medium" | "large";
}

const Icon = (props: IconProps) => {
    return (
        <div className={`icon icon-${props.size}`}>
            {
                typeof props.image === 'string' ? (
                    <img className="icon__img" src={props.image} alt="icon" />
                ) : (
                    props.image()
                )
            }
        </div>
    );
};

export default Icon;