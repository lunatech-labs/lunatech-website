import { useState } from 'react';

import Title from '@components/Title/Title';
import Text from '@components/Text/Text';
import { arrowChevronRight } from '@/assets';

import "./Collapse.scss";

interface CollapseProps {
  title: string;
  text: JSX.Element;
  onClick?: () => void;
}

const Collapse = (props: CollapseProps) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse ${isOpen ? 'open' : ''}`} onClick={toggleCollapse}>
            <div className="collapse__top">
                <Title level={3}>{props.title}</Title>
                <div className="collapse__icon">
                    <img src={arrowChevronRight}  className={isOpen ? 'open' : ''} alt="Collapse Arrow" />
                </div>
            </div>
            <Text size="medium" className="mgt24">{props.text}</Text>
        </div>
    )
}

export default Collapse