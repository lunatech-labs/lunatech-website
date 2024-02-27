import {useState} from "react";
import DotIcon from '/dot-icon.svg';
import VisionIllustration from '/vision-illustration.png';
import VisionIllustration2 from '/services_illustration_open.png';
import "./Vision.scss";

const Vision = () => {
    const [style, setStyle] = useState({display: 'none'});
    const [style2, setStyle2] = useState({display: 'none'});
    const [style3, setStyle3] = useState({display: 'none'});
    const [style4, setStyle4] = useState({display: 'none'});
    
    return (
        <div className="vision">
            <div className="vision__part">
                <div className="vision__card">
                    <div className="vision__icon"
                        onMouseEnter={e => {setStyle({display: 'block'});}}
                        onMouseLeave={e => {setStyle({display: 'none'})}}
                    >
                        <img src={DotIcon} alt="" />
                    </div>
                    <div className="vision__text" style={style}>Notre travail se caractérise par un engagement profond en faveur de la qualité, souligné par une approche méthodique du développement de logiciels.</div>
                </div>
                <div className="vision__card">
                    <div className="vision__icon"
                        onMouseEnter={e => {setStyle2({display: 'block'});}}
                        onMouseLeave={e => {setStyle2({display: 'none'})}}
                    >
                        <img src={DotIcon} alt="" />
                    </div>
                    <div className="vision__text" style={style2}>Au cœur de l'éthique de Lunatech se trouve un penchant pour la simplicité et le pragmatisme.</div>
                </div>
            </div>
            <div className="vision__part">
                <div className="vision__card">
                    <div className="vision__icon"
                        onMouseEnter={e => {setStyle3({display: 'block'});}}
                        onMouseLeave={e => {setStyle3({display: 'none'})}}
                    >
                        <img src={DotIcon} alt="" />
                    </div>
                    <div className="vision__text" style={style3}>Cette conviction est ancrée dans la notion que les logiciels véritablement efficaces sont à la fois intuitifs et résistants, dépourvus de complexités superflues.</div>
                </div>
                <div className="vision__card">
                    <div className="vision__icon"
                        onMouseEnter={e => {setStyle4({display: 'block'});}}
                        onMouseLeave={e => {setStyle4({display: 'none'})}}
                    >
                        <img src={DotIcon} alt="" />
                    </div>
                    <div className="vision__text" style={style4}>Une telle approche permet non seulement de renforcer la fiabilité du logiciel, mais aussi d'améliorer son adaptabilité et sa maintenabilité.</div>
                </div>
            </div>
            <div className="vision__illustration">
                <img className="vision__image" src={VisionIllustration} alt="" />
                <div className="vision__open">
                    <img style={style} className="vision__light" src={VisionIllustration2} alt="" />
                    <img style={style2} className="vision__light" src={VisionIllustration2} alt="" />
                    <img style={style4} className="vision__light" src={VisionIllustration2} alt="" />
                    <img style={style3} className="vision__light" src={VisionIllustration2} alt="" />
                </div>
            </div>
            
        </div>
    
    )
}

export default Vision