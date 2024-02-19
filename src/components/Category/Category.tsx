import "./Category.scss";

interface CategoryProps {
    content: JSX.Element;
}

const Category = (props: CategoryProps) => {
    return (
        <p className="category"><span className="category__slash">//</span>{props.content}</p>
    );
};

export default Category;