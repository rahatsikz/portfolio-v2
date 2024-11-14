import PropTypes from "prop-types";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Link as ScrollLink } from "react-scroll";

const Experience = ({ data }) => {
  const { text, experience } = data;
  return (
    <section id='experience' className='section experience-section bg-g'>
      <div className='container'>
        <div className='row gy-3'>
          <div className='col-lg-6'>
            <div className='section-heading'>
              <SectionHeading
                title='My Experience'
                subTitle='Developing Web Applications'
              />
              <p
                data-aos='fade-up'
                data-aos-duration='800'
                data-aos-delay='300'
              >
                {text}
              </p>
            </div>
          </div>
          <div className='col-lg-6 ps-xl-5'>
            <ul className='resume-box'>
              {experience.map((element, index) => (
                <li key={index} data-aos='fade-up' data-aos-duration='800'>
                  <h5>{element.title}</h5>
                  <div className='r-meta mt-2'>
                    <label>
                      {element.company}&nbsp;({element.location})
                    </label>
                    <span>
                      {element.start} - {element.end}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    {element.contribution.map((element, index) => (
                      <div key={index} style={{ fontSize: "16px" }}>
                        <span style={{ fontWeight: "bold" }}> &bull;</span>{" "}
                        {element}
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div>
              <ScrollLink to='contact' spy={true} className='px-btn dark'>
                Want to Hire Me ?
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Experience.propTypes = {
  data: PropTypes.object,
};

export default Experience;
