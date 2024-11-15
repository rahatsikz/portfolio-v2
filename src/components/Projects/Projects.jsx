import PropTypes from "prop-types";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Projects.module.css";

const Projects = ({ data }) => {
  return (
    <section id='projects' className='section services-section bg-dark'>
      <div className='container'>
        <SectionHeading
          title='My Recent Projects'
          subTitle='Projects that define me'
        />
        <div className='accordion accordion-flush' id='accordion_services'>
          {data.map((element, index) => (
            <div
              className='accordion-item'
              key={index}
              data-aos='fade-up'
              data-aos-duration='800'
            >
              <div className='accordion-header'>
                <button
                  className={`accordion-button ${
                    element.triger !== "One" ? "collapsed" : ""
                  }`}
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target={`#${element.triger}`}
                  aria-expanded={`${element.triger ? "true" : "false"}`}
                  aria-controls={`${element.triger}`}
                >
                  <span className='services-title'>{element.title}</span>
                  <span
                    className='services-small-desc'
                    style={{ textTransform: "capitalize" }}
                  >
                    {element.heading}
                  </span>
                  <span className='accordion-icon' />
                </button>
              </div>
              <div
                id={`${element.triger}`}
                className={`accordion-collapse collapse ${
                  element.triger === "One" ? "show" : ""
                }`}
                data-bs-parent='#accordion_services'
              >
                <div className='accordion-body'>
                  <div className='row gy-4 align-items-center'>
                    <div className='col-xl-5 col-12'>
                      <div className='s-img'>
                        <img
                          src={element.imgLink}
                          title=''
                          alt='Service Image'
                        />
                      </div>
                    </div>
                    <div
                      className='col-xl-7 col-12'
                      style={{
                        alignSelf: "start",
                      }}
                    >
                      {/* <h3>{element.title}</h3> */}
                      <div className='s-text'>{element.text}</div>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: "20px",
                          margin: 0,
                          marginTop: "10px",
                        }}
                      >
                        Features
                      </p>
                      <ul className={styles.serviceFeature}>
                        {element.features &&
                          element.features.map((element, index) => (
                            <li key={index}>{element}</li>
                          ))}
                      </ul>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: "20px",
                          margin: 0,
                          marginTop: "10px",
                        }}
                      >
                        Links
                      </p>
                      <div
                        style={{
                          margin: "0px 10px 10px 0px",
                          display: "flex",
                          gap: "10px",
                        }}
                      >
                        {element.links &&
                          element.links.map((element, index) => {
                            if (element["live"]) {
                              return (
                                <a
                                  href={element["live"]}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  key={index}
                                >
                                  <span className={styles.ghostbutton}>
                                    Live Site
                                  </span>
                                </a>
                              );
                            } else if (element["clientGit"]) {
                              return (
                                <a
                                  href={element["clientGit"]}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  key={index}
                                >
                                  <span className={styles.ghostbutton}>
                                    Frontend Repo
                                  </span>
                                </a>
                              );
                            } else if (element["serverGit"]) {
                              return (
                                <a
                                  href={element["serverGit"]}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  key={index}
                                >
                                  <span className={styles.ghostbutton}>
                                    Backend Repo
                                  </span>
                                </a>
                              );
                            }
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Projects.propTypes = {
  data: PropTypes.array,
};

export default Projects;
