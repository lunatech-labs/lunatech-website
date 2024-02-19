import { useTranslation, Trans } from 'react-i18next';
import ButtonSecondary from "@components/ButtonSecondary/ButtonSecondary";
import "./WorkCard.scss";
import ArrowRight from '/arrow-right.svg';

interface CardProps {
    title: string;
    desc: string;
    text: string;
    children: JSX.Element;
    image: string;
}

const WorkCard = (props: CardProps) => {
    useTranslation();
    
    const toPath = (title: string) => `/works/${title.toLowerCase().replace(/\s+/g, '-')}`;

    return (
        <div className="work-card">
            <img src={"/"+props.image+".png"} alt="" />
            <div className="work-card__content">
                {props.children}
                <h3 className="work-card__title">{props.title}</h3>
                <p className="work-card__desc">{props.desc}</p>
                <p className="work-card__text">{props.text}</p>
                <ButtonSecondary iconUrl={ArrowRight} to={toPath(props.title)} size="large">
                    <span><Trans i18nKey="buttonReadMore" /></span>
                </ButtonSecondary>
            </div>
        </div>
    );
};

export default WorkCard;