import "./Grid.scss";

interface GridProps {
    children: JSX.Element|JSX.Element[];
}

const Grid = (props: GridProps) => {
    return (
        <div className="grid">
            {props.children}
        </div>
    );
};

export default Grid;
