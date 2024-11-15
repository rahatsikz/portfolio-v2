import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { useState } from "react";
import toast from "react-hot-toast";

const Contact = ({ data }) => {
  const { contactInfo, contactForm } = data;

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handler for input field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_API_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    console.log({ json });

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setLoading(false);
      toast.success("Got your message!");
    }
  };
  return (
    <section
      id='contact'
      data-scroll-index={5}
      className='section contact-section'
      style={{
        paddingBottom: "9rem",
      }}
    >
      <div className='container'>
        <div className='row gy-5'>
          <div className='col-lg-5'>
            <SectionHeading title='Contact' subTitle='Reach out to me' />
            <div className='contact-info'>
              <ul>
                {contactInfo.map((element, index) => (
                  <li
                    key={index}
                    data-aos='fade-up'
                    data-aos-duration='800'
                    data-aos-delay='400'
                  >
                    <div className='icon'>
                      <Icon icon={`${element.icon}`} />
                    </div>
                    <div className='text'>
                      <label>{element.title}</label>
                      <p>
                        {element.text}
                        <span>
                          {(element.emailLink ||
                            element.location ||
                            element.phoneLink) && (
                            <a className='text-reset'>
                              <br />
                              <span style={{ color: "var(--px-theme)" }}>
                                {element.emailLink && element.emailLink}{" "}
                                {element.location && element.location}
                                {element.phoneLink && element.phoneLink}
                              </span>
                            </a>
                          )}
                        </span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='col-lg-7 ps-xl-5'>
            <div
              className='contact-form bg-g'
              data-aos='fade-left'
              data-aos-duration='800'
              data-aos-delay='1000'
            >
              <div className='contact-head'>
                <h4>{contactForm.title}</h4>
                <p>{contactForm.text}</p>
              </div>
              <form onSubmit={onSubmit} id='contact-form' method='POST'>
                <input type='hidden' name='from_name' value='Rahat Sikder' />
                <input
                  type='hidden'
                  name='replyto'
                  value='rahatsiz@gmail.com'
                />
                <div className='row gx-3 gy-4'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label className='form-label'>Your Name</label>
                      <input
                        name='name'
                        id='name'
                        placeholder='Name *'
                        className='form-control'
                        type='text'
                        onChange={handleInputChange}
                        value={formData.name}
                        required
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label className='form-label'>Your Email</label>
                      <input
                        name='email'
                        id='email'
                        placeholder='Email *'
                        className='form-control'
                        type='email'
                        onChange={handleInputChange}
                        value={formData.email}
                        required
                      />
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='form-group'>
                      <label className='form-label'>Subject</label>
                      <input
                        name='subject'
                        id='subject'
                        placeholder='Subject *'
                        className='form-control'
                        type='text'
                        onChange={handleInputChange}
                        value={formData.subject}
                        required
                      />
                    </div>
                  </div>
                  <div className='col-md-12'>
                    <div className='form-group'>
                      <label className='form-label'>Your message</label>
                      <textarea
                        name='message'
                        id='message'
                        placeholder='Your message *'
                        rows={6}
                        className='form-control'
                        onChange={handleInputChange}
                        value={formData.message}
                        required
                      />
                    </div>
                  </div>
                  <div className='col-md-12'>
                    <div className='send'>
                      <button
                        className='px-btn dark w-100'
                        type='submit'
                        value='Send'
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {
  data: PropTypes.object,
};

export default Contact;
