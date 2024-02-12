import { Link } from "react-router-dom";
import "./ButtonSecondary.scss";

interface ButtonProps {
    children: string;
    iconUrl: string;
    size: "small" | "large";
    to: string;
    newPage?: boolean;
}

const ButtonSecondary = (props: ButtonProps) => {
const target = props.newPage ? "__blank" : "_self";

    return (
        <Link to={props.to} target={target} className={`button-secondary button-secondary-${props.size}`}>
            {props.children}
            <img className="button-secondary__img" src={props.iconUrl} alt="" />
        </Link>
    )
}

export default ButtonSecondary;
