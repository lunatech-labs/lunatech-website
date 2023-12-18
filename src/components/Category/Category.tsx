import "./Category.scss";

interface CategoryProps {
    content: string;
}

const Category = (props: CategoryProps) => {
    return (
        <p className="category">{props.content}</p>
    );
};

export default Category;