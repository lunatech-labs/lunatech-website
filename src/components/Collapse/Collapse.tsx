import { useState } from 'react';
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary';
import ArrowRight from '/arrow-right.svg';

import "./Collapse.scss";

interface CollapseProps {
    title: string;
    children: JSX.Element;
}

const Collapse = (props: CollapseProps) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="collapse">
            <div className="collapse__top" onClick={toggleCollapse}>
                <h3>{props.title}</h3>
            </div>
            {!isCollapsed && 
                <div className="collapse__body">
                    {props.children}
                    <ButtonSecondary text="Read More" iconUrl={ArrowRight} size="small" />
                </div>
            }
        </div>
    )
}

export default Collapse;







