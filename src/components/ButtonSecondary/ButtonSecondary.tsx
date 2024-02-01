import "./ButtonSecondary.scss";

interface ButtonProps {
    children: JSX.Element;
    iconUrl: string;
    size: "small" | "large";
}

const ButtonSecondary = (props: ButtonProps) => {
    return (
        <a className={`button-secondary button-secondary-${props.size}`} href="">
            {props.children}
            <img className="button-secondary__img" src={props.iconUrl} />
        </a>
    )
}

export default ButtonSecondary;
