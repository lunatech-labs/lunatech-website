import "./Grid.scss";

const Grid = (props) => {
    return (
        <div className="grid">
            {props.children}
        </div>
    );
};

export default Grid;
