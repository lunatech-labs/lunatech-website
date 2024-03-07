import { useState } from 'react';
import Title from '@components/Title/Title';
import Text from '@components/Text/Text';
import "./Collapse.scss";
import { arrowChevronRight } from '@/assets';

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
                <Title level={3}>{props.title}</Title>
                <div className="collapse__icon">
                    <img src={arrowChevronRight}  className={isOpen ? 'open' : ''} alt="Collapse Arrow" />
                </div>
            </div>
            {isOpen &&
                <Text size="medium" className="mgt24">{props.text}</Text>
            }
        </div>
    )
}

export default Collapse