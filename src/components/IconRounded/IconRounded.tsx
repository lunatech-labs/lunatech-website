import "./IconRounded.scss";

interface IconRoundedProps {
    image: string | (() => JSX.Element);
}

const IconRounded = (props: IconRoundedProps) => {
    return (
        <div className="icon-rounded">
            <div className="icon-rounded__ext">
                <div className="icon-rounded__mdl">
                    <div className="icon-rounded__sml">
                        {
                            typeof props.image === 'string' ? (
                                <img className="icon-rounded__img" src={props.image} alt="icon" />
                            ) : (
                                props.image()
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IconRounded;