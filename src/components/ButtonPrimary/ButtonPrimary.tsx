import "./ButtonPrimary.scss";

interface ButtonProps {
    className: string;
    children?: React.ReactNode;
    onClick: () => void;
}

const ButtonPrimary = (props: ButtonProps) => {
    return (
        <a className={`button-primary ${props.className}`} onClick={props.onClick} href="">
            {props.children}
        </a>
    )
}

export default ButtonPrimary
