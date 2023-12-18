import "./Title.scss";

interface TitleProps {
    content: string;
}

const Title = (props: TitleProps) => {
    return (
        <h2 className="title">{props.content}</h2>
    );
};

export default Title;