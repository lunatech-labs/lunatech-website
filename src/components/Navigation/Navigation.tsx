import { Link } from 'react-router-dom';

import Github from '/github.svg';
import Instagram from '/instagram.svg';
import Linkedin from '/linkedin.svg';
import Twitter from '/twitter.svg';
import "./Navigation.scss";

const Navigation = ({ onClick }: { onClick: () => void }) => {
    return (
        <div className="navigation">
            <div className="navigation__main">
                <ul className="navigation__social">
                    <li className="navigation__social-item"><Link to="/"><img src={Github} alt="Github logo" />Github</Link></li>
                    <li className="navigation__social-item"><Link to="/"><img src={Instagram} alt="Instagram logo" />Instagram</Link></li>
                    <li className="navigation__social-item"><Link to="/"><img src={Linkedin} alt="Linkedin logo" />Linkedin</Link></li>
                    <li className="navigation__social-item"><Link to="/"><img src={Twitter} alt="Twitter logo" />X / Twitter</Link></li>
                </ul>
                <ul className="navigation__menu">
                    <li onClick={onClick} className="navigation__menu-item"><Link to="/">Home</Link></li>
                    <li onClick={onClick} className="navigation__menu-item"><Link to="/services">Services</Link></li>
                    <li onClick={onClick} className="navigation__menu-item"><Link to="/works">Works</Link></li>
                    <li onClick={onClick} className="navigation__menu-item"><Link to="/about">About us</Link></li>
                    <li onClick={onClick} className="navigation__menu-item"><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="navigation__footer">
                <div className="navigation__language">
                    <Link to="/">en</Link>
                    <span className="navigation__border"></span>
                    <Link to="/">fr</Link>
                </div>
                <div className="navigation__right">
                    <div className="navigation__sound">
                        <Link to="/">sound off</Link>
                    </div>
                    <div className="navigation__way">
                        <p>/Case studies</p>
                        <span className="navigation__border"></span>
                        <p>Selected projects by <span className="navigation__red">Lunatech</span>.</p>
                    </div>
                </div>
            </div>
      </div>
    )
  }

export default Navigation;