import "./Icon.scss";

interface IconProps {
    imageUrl: string;
    size: "small" | "large";
}

const Icon = (props: IconProps) => {
    return (
        <div className={`icon icon-${props.size}`}>
            <img className="icon__img" src={props.imageUrl} alt="Car" />
        </div>
    );
};

export default Icon;