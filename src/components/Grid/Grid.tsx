import "./Grid.scss";

interface GridProps {
    className?: string;
    children: JSX.Element|JSX.Element[];
}

const Grid = (props: GridProps) => {
    return (
        <div className={`grid ${props.className}`}>
            {props.children}
        </div>
    );
};

export default Grid;
