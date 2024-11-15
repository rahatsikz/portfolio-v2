import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { useEffect } from "react";
import perser from "html-react-parser";

const Hero = ({ data }) => {
  const { title, subTitle, ImgLink, resumeCv } = data;

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const heroElements = document.querySelector(".hb-me");
      if (heroElements) {
        heroElements.style.right = `${scrollValue * -0.25}px`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id='home' className='home-section bg-dark'>
      <div className='container'>
        <div className='row  align-items-center'>
          <div className='col-lg-8 col-xl-8'>
            <div className='hb-text'>
              <h1
                data-aos='fade-up'
                data-aos-duration='800'
                data-aos-delay='200'
              >
                {perser(title)}
              </h1>
              <p
                className='lead'
                data-aos='fade-up'
                data-aos-duration='800'
                data-aos-delay='400'
              >
                {perser(subTitle)}
              </p>
              <div
                className='btn-bar'
                data-aos='fade-up'
                data-aos-duration='800'
                data-aos-delay='200'
              >
                <a href={resumeCv} className='px-btn ' download>
                  Download my resume <Icon icon='bi-download' />
                </a>
              </div>
              {/* <div
                className='info-bar'
                data-aos='fade-up'
                data-aos-duration='800'
                data-aos-delay='600'
                style={{ width: "fit-content" }}
              >
                <p>
                  <Icon icon='bi-phone' />
                  <span>{phone}</span>
                </p>
                <p>
                  <Icon icon='bi-envelope' />
                  <span>{email}</span>
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div
        className='hb-me'
        style={{ backgroundImage: `url(${ImgLink})` }}
        data-aos='fade-left'
        data-aos-duration='800'
        data-aos-delay='800'
      />
      {/* <div className='social-fix'>
        <div className='social-links'>
          {socialData.map((element, index) => (
            <a
              href={element.link}
              key={index}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Icon icon={`fa6-brands:${element.icon}`} />
            </a>
          ))}
        </div>
      </div> */}
    </section>
  );
};

Hero.propTypes = {
  data: PropTypes.object,
};

export default Hero;
