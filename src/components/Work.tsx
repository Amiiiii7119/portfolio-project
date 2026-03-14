import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    name: "Suraksha AI",
    category: "AI Safety Detection",
    tools: "Python, YOLO, Computer Vision",
    image: "/images/suraksha.png",
    github: "https://github.com/Amiiiii7119/Suraksha-AI",
    demo: ""
  },
  {
    id: "02",
    name: "DiabetesGuard AI",
    category: "Machine Learning",
    tools: "Python, Streamlit, Scikit-Learn",
    image: "/images/diabetes.png",
    github: "https://github.com/Amiiiii7119/DiabetesGuard-AI",
    demo: "https://diabetesguard-ai.streamlit.app/"
  },
  {
    id: "03",
    name: "Vaayu AI",
    category: "Air Quality Prediction",
    tools: "Python, Data Analysis, ML",
    image: "/images/vaayu.png",
    github: "https://github.com/Amiiiii7119/Vaayu-AI",
    demo: "https://lvavvygbgkarvqr9fqysyu.streamlit.app/"
  },
  {
    id: "04",
    name: "Hostel Hive",
    category: "Full Stack Web Application",
    tools: "React, Node.js, MongoDB",
    image: "/images/hostel.png",
    github: "https://github.com/Amiiiii7119/Hostel_Hive",
    demo: "https://hostel-hive-five.vercel.app/"
  }
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;

      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;

      let padding: number =
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
          My <span>Work</span>
        </h2>

        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.id}</h3>

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