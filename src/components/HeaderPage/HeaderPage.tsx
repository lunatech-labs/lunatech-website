import { moonFullEffect } from "@/assets";

import "./HeaderPage.scss";

interface HeaderPageProps {
    children: React.ReactNode;
}

const HeaderPage = (props: HeaderPageProps) => {
    return (
        <div className="header-page">
            <div className="header-page__content">
                {props.children}
            </div>
            <img className="header-page__img" src={moonFullEffect} alt="Moon" />
        </div>
    )
}

export default HeaderPage;
