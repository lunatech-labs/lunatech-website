import "./ButtonSecondary.scss";

interface ButtonProps {
    children?: React.ReactNode;
    onClick: () => void;
}

const ButtonSecondary = (props: ButtonProps) => {
    return (
        <a className="button-secondary" onClick={props.onClick} href="">
            {props.children}
        </a>
    )
}

export default ButtonSecondary