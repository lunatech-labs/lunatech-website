import "./Icon.scss";

interface IconProps {
    imageUrl: string;
    size: "small" | "medium" | "large";
}

const Icon = (props: IconProps) => {
    return (
        <div className={`icon icon-${props.size}`}>
            <img className="icon__img" src={props.imageUrl} alt="" />
        </div>
    );
};

export default Icon;