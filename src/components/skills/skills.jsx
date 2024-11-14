import {
  ExpressIcon,
  GitIcon,
  JavaScriptIcon,
  MongoDBIcon,
  MongooseIcon,
  NextjsIcon,
  NodeJSIcon,
  PostgresIcon,
  PrismaIcon,
  ReactIcon,
  ReactQuery,
  ReduxIcon,
  RTKQueyIcon,
  TailwindIcon,
  TypeScriptIcon,
  ZodIcon,
} from "../../assets/icons/allskillIcons";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./skills.module.css";

const Skills = () => {
  const skillArr = [
    {
      icon: <ReactIcon />,
      title: "React.js",
    },
    {
      icon: <NextjsIcon />,
      title: "Next.js",
    },
    {
      icon: <ReduxIcon />,
      title: "Redux",
    },
    {
      icon: <RTKQueyIcon />,
      title: "RTK Query",
    },
    {
      icon: <ReactQuery />,
      title: "React Query",
    },
    {
      icon: <TailwindIcon />,
      title: "Tailwind CSS",
    },
    {
      icon: <JavaScriptIcon />,
      title: "JavaScript",
    },
    {
      icon: <TypeScriptIcon />,
      title: "TypeScript",
    },
    {
      icon: <NodeJSIcon />,
      title: "Node.js",
    },
    {
      icon: <ExpressIcon />,
      title: "Express",
    },
    {
      icon: <PrismaIcon />,
      title: "Prisma",
    },
    {
      icon: <PostgresIcon />,
      title: "Postgresql",
    },
    {
      icon: <MongoDBIcon />,
      title: "MongoDB",
    },
    {
      icon: <MongooseIcon />,
      title: "Mongoose",
    },
    {
      icon: <ZodIcon />,
      title: "Zod",
    },
    {
      icon: <GitIcon />,
      title: "Git",
    },
  ];

  return (
    <section style={{ backgroundColor: "var(--px-dark)" }}>
      <div id='skills' className='section'>
        <div className='container'>
          <SectionHeading title='My Expertise' subTitle='Super powers I use' />
          <div className={styles.skillsParent}>
            {skillArr.map((element, index) => (
              <div
                key={index}
                data-aos='fade-up'
                data-aos-duration='800'
                className={styles.skill}
              >
                <div style={{ textAlign: "center" }}>{element.icon}</div>

                <p
                  style={{
                    color: "var(--px-white)",
                    textAlign: "center",
                    marginBottom: 0,
                    marginTop: "5px",
                    fontSize: "14px",
                  }}
                >
                  {element.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
