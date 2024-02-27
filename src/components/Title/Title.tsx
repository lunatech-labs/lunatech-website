import "./Title.scss";

interface TitleProps {
    className?: string;
    content: JSX.Element;
}

const Title = (props: TitleProps) => {
    return (
        <h2 className={`title ${props.className}`}>{props.content}</h2>
    );
};

export default Title;