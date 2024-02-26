import Icon from "@components/Icon/Icon";
import Text from "@components/Text/Text";
import DotIcon from '/dot-icon.svg';
import VisionIllustration from '/vision-illustration.png';

import "./Vision.scss";


const Vision = () => {
    return (
        <div className="vision">
            <div className="vision__card">
                <Icon imageUrl={DotIcon} size="medium" />
                <Text className="mgb32">Notre travail se caractérise par un engagement profond en faveur de la qualité, souligné par une approche méthodique du développement de logiciels.</Text>
            </div>
            <div className="vision__card">
                <Icon imageUrl={DotIcon} size="medium" />
                <Text className="mgb32">Au cœur de l'éthique de Lunatech se trouve un penchant pour la simplicité et le pragmatisme. </Text>
            </div>
            <div className="vision__card">
                <Icon imageUrl={DotIcon} size="medium" />
                <Text className="mgb32">Cette conviction est ancrée dans la notion que les logiciels véritablement efficaces sont à la fois intuitifs et résistants, dépourvus de complexités superflues.</Text>
            </div>
            <div className="vision__card">
                <Icon imageUrl={DotIcon} size="medium" />
                <Text className="mgb32">Une telle approche permet non seulement de renforcer la fiabilité du logiciel, mais aussi d'améliorer son adaptabilité et sa maintenabilité.</Text>
            </div>
            <img className="vision__image" src={VisionIllustration} alt="" />
        </div>
    
    )
}

export default Vision