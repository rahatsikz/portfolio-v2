import PropTypes from "prop-types";
import SectionHeading from "../SectionHeading/SectionHeading";
import perser from "html-react-parser";
import { Icon } from "@iconify/react";

const About = ({ data }) => {
  const { aboutRight } = data;
  // const { ImgLink, name, designation, resumeCv } = aboutLeft;
  const { aboutText, achivement, note } = aboutRight;

  return (
    <section id='about' className='section about-section'>
      <div className='container'>
        <SectionHeading title='About Me' subTitle='Get a Knack for me' />
        <div
          className='row gy-4'
          data-aos='fade-up'
          data-aos-duration='800'
          data-aos-delay='500'
        >
          {/* <div className='col-lg-5'>
            <div className='about-left'>
              <div className='about-avatar'>
                <img src={`${ImgLink}`} alt='Thumb' />
              </div>
              <h3>{name}</h3>
              <p>{perser(designation)}</p>
              <div className='btn-bar'>
                <a className='px-btn' href={resumeCv} download>
                  Download CV <Icon icon='bi-download' />
                </a>
              </div>
            </div>
          </div> */}
          <div className='col-lg-12 '>
            <div className='about-bio'>
              <p>{aboutText}</p>
            </div>
            {/* <div className='about-contact row gx-lg-5'>
              {contactInfo.map((element, index) => (
                <div className='col-sm-6' key={index}>
                  <p>
                    <Icon icon={`bi:${element.icon}`} />{" "}
                    <span>{element.data}</span>
                  </p>
                </div>
              ))}
            </div> */}
            <div className='about-exp'>
              <div className='row gy-4'>
                {achivement.map((element, index) => (
                  <div className='col-6 col-md-4' key={index}>
                    <div className='a-number'>
                      <h6>{element.number}</h6>
                      <span>{perser(element.meta)}</span>
                    </div>
                    {/* <p className='lead'>{perser(element.text)}</p> */}
                  </div>
                ))}
              </div>
              <blockquote style={{ display: "flex" }}>
                <Icon icon='fa6-solid:quote-left' />
                <p style={{ alignSelf: "center" }}>{note}</p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  data: PropTypes.object,
};

export default About;
