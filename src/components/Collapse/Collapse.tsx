import { useState } from 'react';
import ArrowChevronRight from '/arrow-chevron-right.svg';
import "./Collapse.scss";

interface CollapseProps {
  title: string;
  text: JSX.Element;
  onClick?: () => void;
}

const Collapse = (props: CollapseProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse" onClick={toggleCollapse}>
            <div className="collapse__top">
                <h3>{props.title}</h3>
                <div className="collapse__icon">
                    <img src={ArrowChevronRight} alt="Collapse Arrow" />
                </div>
            </div>
            {isOpen &&
                <div className="collapse__text">{props.text}</div>
            }
        </div>
    )
}

export default Collapse