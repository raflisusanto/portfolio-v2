import githubIcon from "../../assets/images/github_circle.svg";
import previewIcon from "../../assets/images/preview.svg";
import downloadIcon from "../../assets/images/download.svg";
import colabIcon from "../../assets/images/colab.svg";
import figmaIcon from "../../assets/images/figma.svg";
import mediumIcon from "../../assets/images/medium.svg";

const Card = ({
  img,
  title,
  desc,
  techStack,
  githubLink,
  previewLink,
  apkLink,
  colabLink,
  figmaLink,
  mediumLink,
}) => {
  return (
    <div className="max-w-xs xl:max-w-md text-white font-light text-sm bg-white rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-white border-opacity-20">
      <div className="h-40 xl:h-60 overflow-hidden">
        <img className="rounded-t-lg" src={img} alt="" />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {title}
        </h5>
        <p className="mb-4 font-normal text-gray-400">{desc}</p>

        {techStack && (
          <p className="mb-2 font-normal text-gray-400">
            <span className="font-bold">Tech Stack:</span> {techStack}
          </p>
        )}

        <div className="flex gap-4 items-center">
          {githubLink && (
            <a href={githubLink} target="_blank" className="icon-link">
              <img src={githubIcon} alt="GitHub" className="icon" />
            </a>
          )}

          {previewLink && (
            <a href={previewLink} target="_blank" className="icon-link">
              <img src={previewIcon} alt="Preview" className="icon" />
            </a>
          )}

          {apkLink && (
            <a href={apkLink} target="_blank" className="icon-link">
              <img src={downloadIcon} alt="APK" className="icon" />
            </a>
          )}

          {colabLink && (
            <a href={colabLink} target="_blank" className="icon-link">
              <img src={colabIcon} alt="Colab" className="icon" />
            </a>
          )}

          {figmaLink && (
            <a href={figmaLink} target="_blank" className="icon-link">
              <img src={figmaIcon} alt="Figma" className="icon" />
            </a>
          )}

          {mediumLink && (
            <a href={mediumLink} target="_blank" className="icon-link">
              <img src={mediumIcon} alt="Medium" className="icon" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
