import { NavLink, Link } from 'react-router-dom';

import Github from '/github.svg';
import Instagram from '/instagram.svg';
import Linkedin from '/linkedin.svg';
import Twitter from '/twitter.svg';
import "./Navigation.scss";

const Navigation = () => {
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
                    <li className="navigation__menu-item"><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">Home</NavLink></li>
                    <li className="navigation__menu-item"><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/services">Services</NavLink></li>
                    <li className="navigation__menu-item"><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/works">Works</NavLink></li>
                    <li className="navigation__menu-item"><NavLink to="https://recruitment.lunatech.com/" target="_blank">Careers</NavLink></li>
                    <li className="navigation__menu-item"><NavLink to="https://blog.lunatech.com/" target="_blank">Blog</NavLink></li>
                    <li className="navigation__menu-item"><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/about">About us</NavLink></li>
                    <li className="navigation__menu-item"><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/contact">Contact</NavLink></li>
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