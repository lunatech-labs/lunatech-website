import "./ValuesBanner.scss";
import Value from "../Value/Value";
import Container from "../Container/Container";

const ValuesBanner = () => {
    return (
        <div className="values-banner">
            <Container>
                <Value number={30} content={<>Years of<br />Experience</>} />
                <Value number={32} content={<>Projects<br />Completed</>} />
                <Value number={80} content={<>Team Leads<br />& Employees</>} />
                <Value number={25} content={<>Different<br />Nationalities</>} />
            </Container>
        </div>
    )
}

export default ValuesBanner