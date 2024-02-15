import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import "./Breadcrumb.scss";

const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs();
    const { pathname } = useLocation();

    return (
        <React.Fragment>
            <div className="breadcrumb">
                {breadcrumbs.map(({ match, breadcrumb }, index) => (
                    <div key={match.pathname}>
                        <span className={index === 0 ? "breadcrumb__slash--double" : "breadcrumb__slash"}>
                            {index === 0 ? ' // ' : ' / '}
                        </span>
                        <NavLink className={`breadcrumb__link${match.pathname === pathname ? '__current' : ''}`} to={match.pathname}>
                            {breadcrumb}
                        </NavLink>
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
};

export default Breadcrumbs;
