import { Link } from "react-router-dom";
import "./ButtonSecondary.scss";

interface ButtonProps {
    children: string;
    iconUrl: string;
    size: "small" | "large";
    to: string;
}

const ButtonSecondary = (props: ButtonProps) => {
    return (
        <Link to={props.to} className={`button-secondary button-secondary-${props.size}`}>
            {props.children}
            <img className="button-secondary__img" src={props.iconUrl} alt="" />
        </Link>
    )
}

export default ButtonSecondary;
