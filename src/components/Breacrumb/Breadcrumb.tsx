import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import "./Breadcrumb.scss";
import { useTranslation } from "react-i18next";

const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs();
    const { pathname } = useLocation();
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <div className="breadcrumb">
                {breadcrumbs.map(({ match, breadcrumb }, index) => {
                    let breadcrumbText;

                    if (typeof breadcrumb === 'string')
                        breadcrumbText = breadcrumb;
                    else if (React.isValidElement(breadcrumb))
                        breadcrumbText = breadcrumb.props.children;
                    else
                        breadcrumbText = '';

                    return (
                        <div className="breadcrumb__part" key={match.pathname}>
                            <span className={index === 0 ? "breadcrumb__slash--double" : "breadcrumb__slash"}>
                                {index === 0 ? ' // ' : ' / '}
                            </span>
                            <NavLink className={`breadcrumb__link${match.pathname === pathname ? '__current' : ''}`} to={match.pathname}>
                                {t("breadcrumb." + breadcrumbText)}
                            </NavLink>
                        </div>
                    );
                })}
            </div>
        </React.Fragment>
    );
};

export default Breadcrumbs;
