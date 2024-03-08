import {useState} from "react";
import Text from "@components/Text/Text";
import "./Vision.scss";
import { dotIcon, visionIllustration, visionIllustrationOpen } from "@/assets";

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
                        onMouseEnter={() => {setStyle({display: 'block'});}}
                        onMouseLeave={() => {setStyle({display: 'none'})}}
                    >
                        <img src={dotIcon} alt="" />
                    </div>
                    <div style={style}><Text size="medium">Notre travail se caractérise par un engagement profond en faveur de la qualité, souligné par une approche méthodique du développement de logiciels.</Text></div>
                </div>
                <div className="vision__card">
                    <div className="vision__icon"
                        onMouseEnter={() => {setStyle2({display: 'block'});}}
                        onMouseLeave={() => {setStyle2({display: 'none'})}}
                    >
                        <img src={dotIcon} alt="" />
                    </div>
                    <div style={style2}><Text size="medium">Au cœur de l'éthique de Lunatech se trouve un penchant pour la simplicité et le pragmatisme.</Text></div>
                </div>
            </div>
            <div className="vision__part">
                <div className="vision__card">
                    <div className="vision__icon"
                        onMouseEnter={() => {setStyle3({display: 'block'});}}
                        onMouseLeave={() => {setStyle3({display: 'none'})}}
                    >
                        <img src={dotIcon} alt="" />
                    </div>
                    <div style={style3}><Text size="medium">Cette conviction est ancrée dans la notion que les logiciels véritablement efficaces sont à la fois intuitifs et résistants, dépourvus de complexités superflues.</Text></div>
                </div>
                <div className="vision__card">
                    <div className="vision__icon"
                        onMouseEnter={() => {setStyle4({display: 'block'});}}
                        onMouseLeave={() => {setStyle4({display: 'none'})}}
                    >
                        <img src={dotIcon} alt="" />
                    </div>
                    <div style={style4}><Text size="medium">Une telle approche permet non seulement de renforcer la fiabilité du logiciel, mais aussi d'améliorer son adaptabilité et sa maintenabilité.</Text></div>
                </div>
            </div>
            <div className="vision__illustration">
                <img className="vision__image" src={visionIllustration} alt="" />
                <div className="vision__open">
                    <img style={style} className="vision__light" src={visionIllustrationOpen} alt="" />
                    <img style={style2} className="vision__light" src={visionIllustrationOpen} alt="" />
                    <img style={style4} className="vision__light" src={visionIllustrationOpen} alt="" />
                    <img style={style3} className="vision__light" src={visionIllustrationOpen} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Vision