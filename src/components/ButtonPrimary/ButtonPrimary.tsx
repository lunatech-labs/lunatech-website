import "./ButtonPrimary.scss";

interface ButtonProps {
    children?: React.ReactNode;
    onClick: () => void;
}

const ButtonPrimary = (props: ButtonProps) => {
    return (
        <a className="button-primary" onClick={props.onClick} href="">
            {props.children}
        </a>
    )
}

export default ButtonPrimary