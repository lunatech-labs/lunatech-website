import "./ValuesBanner.scss";
import Value from "../Value/Value";
import Container from "../Container/Container";
import Grid from "../Grid/Grid";

const ValuesBanner = () => {
    return (
        <div className="values__banner">
            <Container>
                <Grid>
                    <Value number={30} content={<>Years of<br />Experience</>} />
                    <Value number={32} content={<>Projects<br />Completed</>} />
                    <Value number={80} content={<>Team Leads<br />& Employees</>} />
                    <Value number={25} content={<>Different<br />Nationalities</>} />
                </Grid>
            </Container>
        </div>
    )
}

export default ValuesBanner