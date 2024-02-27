import { useState } from 'react';
import { Trans } from "react-i18next";
import Category from "@components/Category/Category";
import Title from "@components/Title/Title";
import ButtonSecondary from "@components/ButtonSecondary/ButtonSecondary";
import Collapse from "@components/Collapse/Collapse";

import ArrowRight from '/arrow-right.svg';

import "./Timeline.scss";

const Works = () => {
    return (
        <div className="works">
            <div className="works__top">
                <div>
                    <Category content={<Trans i18nKey="navigation.works" />} />
                    <Title content={<>Browse our <span>case studies</span>.</>} />
                </div>
                <ButtonSecondary iconUrl={ArrowRight} size="large" to='/works'><Trans i18nKey="buttonMoreCaseStudies" /></ButtonSecondary>
            </div>
            <div className="works__content">
                <div className="works__left">
                <Collapse title="Collapse Title 1">
                    <p>
                        Content 1
                    </p>
                </Collapse>
                <Collapse title="Collapse Title 2" data-img="/blog.png" onClick={handleCollapseClick}>
                    <p>
                        Content 2
                    </p>
                </Collapse>
                <Collapse title="Titre du Collapse" data-img="/collapse.png" onClick={handleCollapseClick}>
                    <p>
                        Contenu du Collapse
                    </p>
                </Collapse>
                </div>
                <div className="works__right">
                    <img className="works__img" src={currentImg} alt="Collapse image" />
                </div>
            </div>
        </div>
    )
}

export default Works;