import { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import ButtonSecondary from '@components/ButtonSecondary/ButtonSecondary';
import Arrow from '/collapse-arrow.svg';
import ArrowRight from '/arrow-right.svg';

import "./Collapse.scss";

interface CollapseProps {
    title: string;
    children: JSX.Element;
}

const Collapse = (props: CollapseProps & { onClick: (e: React.MouseEvent<HTMLDivElement>) => void, 'data-img': string }) => {
    useTranslation();
    
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

    const toggleCollapse = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsCollapsed(!isCollapsed);
        if(props.onClick) {
            props.onClick(e);
        }
    };

    const toPath = (title: string) => `/works/${title.toLowerCase().replace(/\s+/g, '-')}`;

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
                <ButtonSecondary iconUrl={ArrowRight} to={toPath(props.title)} size="small" ><Trans i18nKey="buttonReadMore" /></ButtonSecondary>
            </div>
        </div>
    );
}

export default Collapse;
