import { useState } from "react";
import Text from "@components/Text/Text";
import "./Vision.scss";
import { visionCards } from "@/constants";
import { dotIcon, visionIllustration, visionIllustrationOpen } from "@/assets";
import { useTranslation } from "react-i18next";

type VisionCard = {
    id: number;
    text: string;
    row?: string;
    column?: string;
};

const Vision = () => {
    const [visibleCard, setVisibleCard] = useState<number | null>(null);

    const chunk = (array: VisionCard[], size: number): VisionCard[][] => {
        return array.reduce<VisionCard[][]>((acc, item, index) => {
            if (index % size === 0) {
                acc.push([item]);
            } else {
                acc[acc.length - 1].push(item);
            }
            return acc;
        }, []);
    };

    const visionCardChunks = chunk(visionCards, 2);
    const { t } = useTranslation();

    return (
        <div className="vision">
            {visionCardChunks.map((chunk, index) => (
                <div key={index} className="vision__part">
                    {chunk.map((card, index) => (
                        <div key={index} className={`vision__card ${card.column}`}>
                            <div className="vision__icon"
                                 onMouseEnter={() => setVisibleCard(card.id)}
                                 onMouseLeave={() => setVisibleCard(null)}
                            >
                                <img src={dotIcon} alt="" />
                            </div>
                            <Text size="medium">{t(card.text)}</Text>
                        </div>
                    ))}
                </div>
            ))}
            <div className="vision__illustration">
                <img className="vision__image" src={visionIllustration} alt="" />
                <div className="vision__open">
                    {visionCards.map((card) => (
                        <img key={card.id}
                             style={{ display: visibleCard === card.id ? 'block' : 'none' }}
                             className="vision__light"
                             src={visionIllustrationOpen}
                             alt=""
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Vision;
