import "./Section.scss";

interface SectionProps {
    className: string;
    children?: React.ReactNode;
}

const Section = (props: SectionProps) => {
  return (
    <div className={`section ${props.className}`}>
        {props.children}
    </div>
  )
}

export default Section;
