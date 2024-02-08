import { Link } from "react-router-dom";
import "./ButtonPrimary.scss";

interface ButtonProps {
    children: JSX.Element;
    iconUrl: string;
    size: "small" | "large";
    to: string;
}

const ButtonPrimary = (props: ButtonProps) => {
    return (
        <Link to={props.to} className={`button-primary button-primary-${props.size}`}>
            {props.children}
            <img className="button-primary__img" src={props.iconUrl} alt="" />
        </Link>
    )
}

export default ButtonPrimary;