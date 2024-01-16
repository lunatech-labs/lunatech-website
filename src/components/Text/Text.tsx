import "./Text.scss";

interface TextProps {
    className: string;
    content: JSX.Element;
}

const Text = (props: TextProps) => {
    return (
        <p className={`text ${props.className}`}>{props.content}</p>
    );
};

export default Text;
