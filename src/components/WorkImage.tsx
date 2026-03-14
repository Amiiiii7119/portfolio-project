import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  github?: string;
  demo?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");

  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  return (
    <div className="work-image">
      <div
        className="work-image-in"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
      >
        <div className="work-links">
          {props.github && (
            <a
              href={props.github}
              target="_blank"
              data-cursor="disable"
              className="work-link"
            >
              GitHub <MdArrowOutward />
            </a>
          )}

          {props.demo && (
            <a
              href={props.demo}
              target="_blank"
              data-cursor="disable"
              className="work-link"
            >
              Live Demo <MdArrowOutward />
            </a>
          )}
        </div>

        <img src={props.image} alt={props.alt} />

        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
      </div>
    </div>
  );
};

export default WorkImage;