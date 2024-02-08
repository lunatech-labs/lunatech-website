import { useState } from 'react';
import ButtonSecondary from '@components/ButtonSecondary/ButtonSecondary';
import Arrow from '/collapse-arrow.svg';
import ArrowRight from '/arrow-right.svg';

import "./Collapse.scss";

interface CollapseProps {
    title: string;
    children: JSX.Element;
}

const Collapse = (props: CollapseProps & { onClick: (dataImg: string) => void, 'data-img': string }) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

    const toggleCollapse = (e) => {
        setIsCollapsed(!isCollapsed);
        if(props.onClick) {
            props.onClick(e);
        }
    };

    return (
        <div className={`collapse ${isCollapsed ? '' : 'is-collapsed'}`} data-img={props['data-img']} onClick={toggleCollapse}>
            <div className="collapse__top">
                <h3>{props.title}</h3>
                <div className="collapse__icon">
                    <img src={Arrow} alt="Collapse Arrow" />
                </div>
            </div>
            <div className="collapse__body">
                {props.children}
                <ButtonSecondary text="Read More" iconUrl={ArrowRight} size="small" />
            </div>
        </div>
    );
}

export default Collapse;
