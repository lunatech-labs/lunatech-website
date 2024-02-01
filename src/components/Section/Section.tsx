import "./Section.scss";

interface SectionProps {
    className: string;
    children?: React.ReactNode;
}

const Section = (props: SectionProps) => {
  return (
    <section className={`section ${props.className}`}>
        {props.children}
    </section>
  )
}

export default Section;
