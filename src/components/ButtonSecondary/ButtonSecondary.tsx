import "./ButtonSecondary.scss";

interface ButtonProps {
    text: string;
    iconUrl: string;
}

const ButtonSecondary = (props: ButtonProps) => {
    return (
        <a className="button-secondary" href="">
            {props.text}
            <img src={props.iconUrl} />
        </a>
    )
}

export default ButtonSecondary;
