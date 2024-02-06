import "./IconRounded.scss";

interface IconRoundedProps {
    imageUrl: string;
}

const IconRounded = (props: IconRoundedProps) => {
    return (
        <div className="icon-rounded">
            <div className="icon-rounded__ext">
                <div className="icon-rounded__mdl">
                    <div className="icon-rounded__sml">
                        <img className="icon-rounded__img" src={props.imageUrl} alt="Scala" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IconRounded;