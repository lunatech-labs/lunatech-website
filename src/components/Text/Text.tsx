import "./Text.scss";

interface TextProps {
    className?: string;
    children: React.ReactNode;
    size: "small" | "medium" | "large";
}

const Text = (props: TextProps) => {
    return (
        <div className={`text-${props.size} ${props.className}`}>
            {props.children}
        </div>
    );
};

export default Text;
