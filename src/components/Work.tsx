import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "Suraksha AI",
    category: "AI Safety Detection",
    tools: "Python, YOLO, Computer Vision",
    image: "/images/suraksha-ai.webp",
    github: "https://github.com/Amiiiii7119/Suraksha-AI",
  },
  {
    name: "DiabetesGuard AI",
    category: "Machine Learning",
    tools: "Python, ML Models, Streamlit",
    image: "/images/diabetesguard-ai.webp",
    github: "https://github.com/Amiiiii7119/DiabetesGuard-AI",
    demo: "https://diabetesguard-ai.streamlit.app/",
  },
  {
    name: "Vaayu AI",
    category: "Prediction System",
    tools: "Python, Data Analysis, ML",
    image: "/images/vaayu-ai.webp",
    github: "https://github.com/Amiiiii7119/Vaayu-AI-",
    demo: "https://lvavvygbgkarvqr9fqysyu.streamlit.app/",
  },
  {
    name: "Hostel Hive",
    category: "Web Application",
    tools: "React, Node, Database",
    image: "/images/hostel-hive.webp",
    github: "https://github.com/Amiiiii7119/Hostel_Hive",
    demo: "https://hostel-hive-five.vercel.app/",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const workContainer = document.querySelector(".work-container");
      if (!workContainer || !box[0] || !box[0].parentElement) {
        return;
      }
      const rectLeft = workContainer.getBoundingClientRect().left;

      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement.getBoundingClientRect().width;

      let padding =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;

      translateX =
        rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>

        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>

                <h4>Tools and Features</h4>
                <p>{project.tools}</p>
              </div>

              <WorkImage
                image={project.image}
                alt={project.name}
                github={project.github}
                demo={project.demo}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;