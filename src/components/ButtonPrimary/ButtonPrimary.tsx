import "./ButtonPrimary.scss";

interface ButtonProps {
    children: JSX.Element;
    iconUrl: string;
}

const ButtonPrimary = (props: ButtonProps) => {
    return (
        <a className="button-primary" href="">
            {props.children}
            <img className="button-primary__img" src={props.iconUrl} />
        </a>
    )
}

export default ButtonPrimary
