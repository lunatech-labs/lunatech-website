import Title from '@components/Title/Title';
import Text from '@components/Text/Text';

import "./FeatureBox.scss";

interface FeatureBoxProps {
  title: string;
  text: JSX.Element;
  classNames?: string;
  onClick?: () => void;
}

const FeatureBox = (props: FeatureBoxProps) => {
    return (
        <div className={`featureBox ${props.classNames}`}>
            <Title level={3}>{props.title}</Title>
            <Text size="medium" className="mgt24">{props.text}</Text>
        </div>
    )
}

export default FeatureBox