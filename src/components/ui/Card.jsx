import githubIcon from "../../assets/icons/github.svg";
import previewIcon from "../../assets/icons/preview.svg";
import downloadIcon from "../../assets/icons/download.svg";
import colabIcon from "../../assets/icons/colab.svg";
import figmaIcon from "../../assets/icons/figma.svg";
import mediumIcon from "../../assets/icons/medium.svg";

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
    <div className="max-w-xs xl:max-w-md text-white font-light text-sm bg-white/10 rounded-2xl bg-clip-padding backdrop-blur-md border border-white/20">
      <div className="h-40 xl:h-48 overflow-hidden">
        <img className="rounded-t-lg" src={img} alt="" />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-lg xl:text-xl font-bold tracking-tight text-white">
          {title}
        </h5>
        <p className="mb-4 text-xs xl:text-sm font-normal text-gray-400">
          {desc}
        </p>

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
