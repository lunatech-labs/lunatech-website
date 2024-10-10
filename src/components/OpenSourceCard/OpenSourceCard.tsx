
import Title from "@components/Title/Title";
import Text from '@components/Text/Text';

import "./OpenSourceCard.scss";

interface OpenSourceCardProps {
    title: string;
    text: string;
}

const OpenSourceCard = (props: OpenSourceCardProps) => {
    return (
        <>
            <Title level={3}>{props.title}</Title>
            <Text size="medium">{props.text}</Text>
        </>
    );
};

export default OpenSourceCard;





