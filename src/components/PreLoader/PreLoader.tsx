import { useEffect } from "react";
import { preLoaderAnim } from "../../animations";
import "./PreLoader.scss";

const PreLoader = () => {
    useEffect(() => {
        preLoaderAnim();
    }, []);

    return (
        <div className="preloader">
            <div className="texts-container">
                <span>Create,</span>
                <span>Develop,</span>
                <span>Modernise.</span>
            </div>
        </div>
    )
}

export default PreLoader;
