import "./ButtonPrimary.scss";

interface ButtonProps {
    className: string;
    children?: React.ReactNode;
}

const ButtonPrimary = (props: ButtonProps) => {
    return (
        <a className={`button-primary ${props.className}`} href="">
            {props.children}
        </a>
    )
}

export default ButtonPrimary
