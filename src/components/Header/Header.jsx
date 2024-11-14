import PropTypes from "prop-types";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link as ScrollLink } from "react-scroll";
import { socialData } from "../../data.json";

const Header = () => {
  const [mobileToggle, setMobileToggle] = useState(false);

  const handleMobileToggle = () => {
    setMobileToggle(!mobileToggle);
  };

  return (
    <header>
      {/* Mob header */}
      <div className='mob-header' onClick={handleMobileToggle}>
        <div className='mob-h-right'>
          <button className='toggler-menu'>
            <span />
          </button>
        </div>
      </div>
      {/* End */}
      {/* Header Top */}
      <div
        className={`header-left-fixed one-page-nav ${
          mobileToggle ? "menu-open" : ""
        }`}
      >
        {/* Brand */}

        {/* / */}
        <ul className='main-menu'>
          <li>
            <ScrollLink
              to='home'
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Intro
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to='about'
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to='experience'
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Experience
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to='skills'
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to='blog'
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Blog
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to='contact'
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
        <ul className='nav social-link'>
          {socialData.map((element, index) => (
            <li key={index}>
              <a href={element.link} target='_blank' rel='noopener noreferrer'>
                <Icon icon={`fa6-brands:${element.icon}`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* End Header Top */}
    </header>
  );
};

Header.propTypes = {
  data: PropTypes.object,
};

export default Header;
