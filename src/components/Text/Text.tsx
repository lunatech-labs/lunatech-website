import "./Text.scss";

interface TextProps {
    className: string;
    children?: React.ReactNode;
}

const Text = (props: TextProps) => {
    return (
        <p className={`text ${props.className}`}>
            {props.children}
        </p>
    );
};

export default Text;
