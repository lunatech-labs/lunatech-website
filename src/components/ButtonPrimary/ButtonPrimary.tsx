import { Link } from "react-router-dom";

import "./ButtonPrimary.scss";

interface ButtonProps {
    children: JSX.Element;
    iconUrl: string;
    size: "small" | "large";
    type?: "link" | "submit";
    to: string;
    animate?: string;
}

const ButtonPrimary = (props: ButtonProps) => {
    const { type } = props;

    return (
        <>
            {type === 'submit' ? (
                <button className={`button-primary button-primary-${props.size}`} type="submit">
                    {props.children}
                    <img className={`button-primary__img ${props.animate}`} src={props.iconUrl} alt="" />
                </button>
            ) : (
                <Link to={props.to} className={`button-primary button-primary-${props.size}`}>
                    {props.children}
                    <img className="button-primary__img" src={props.iconUrl} alt="" />
                </Link>
            )}
        </>
    );
}

export default ButtonPrimary;