import "./Text.scss";

interface TextProps {
    content: string;
}

const Text = (props: TextProps) => {
    return (
        <p className="text">{props.content}</p>
    );
};

export default Text;
