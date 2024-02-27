import "./Title.scss";

interface TitleProps {
    level: 1 | 2 | 3 | 4;
    className?: string;
    children: React.ReactNode;
}

const Title = (props: TitleProps) => {
    switch (props.level) {
        case 1:
            return <h1 className={`titleh1 ${props.className}`}>{props.children}</h1>;
        case 2:
            return <h2 className={`titleh2 ${props.className}`}>{props.children}</h2>;
        case 3:
            return <h3 className={`titleh3 ${props.className}`}>{props.children}</h3>;
        case 4:
            return <h4 className={`titleh4 ${props.className}`}>{props.children}</h4>;
    }
};

export default Title;