import specifitAdmin from "../assets/projects/web-mobile/specifit-admin-website.webp";
import githubUser from "../assets/projects/web-mobile/github-users-app.webp";
import specifitFE from "../assets/projects/web-mobile/specifit-mobile-app.webp";
import esyarat from "../assets/projects/web-mobile/esyarat-website.webp";
import booku from "../assets/projects/web-mobile/booku-website.webp";
import fabric from "../assets/projects/machine-learning/fabric-classification.webp";
import defect from "../assets/projects/machine-learning/defect-detection.webp";
import NFO from "../assets/projects/machine-learning/nusantara-food-ontology.webp";
import arrh from "../assets/projects/machine-learning/arrhythmia-classification.webp";
import knn from "../assets/projects/machine-learning/ga-fuzzy-knn.webp";
import interfest from "../assets/projects/design/interfest-2022.webp";
import motionhack from "../assets/projects/design/motionhack-2021.webp";
import icoseit from "../assets/projects/design/icoseit-2022.webp";
import himaif from "../assets/projects/design/himaif-telkom-university.webp";
import mulmed from "../assets/projects/design/multimedia-lab-recruitment-2021.webp";
import specifit from "../assets/projects/design/specifit-ui-ux.webp";
import tanamaja from "../assets/projects/design/tanamaja-ui.webp";
import moneyflix from "../assets/projects/design/moneyflix-ui.webp";
import mizkin from "../assets/projects/design/mizkin-ui.webp";
// import temuin from "../assets/projects/design/temuin-ui.webp";

/**
 * Earlier projects, one array per tab (see projectCategories).
 * Keep `desc` to one or two short sentences so the cards stay even.
 * `imgPosition` (optional) is the CSS object-position for the 16:9 thumbnail crop.
 */
export const projectData = {
  0: [
    {
      img: githubUser,
      title: "Github Users App",
      desc: "Search GitHub users, view their profiles and save favorites. MVVM, with Retrofit for the API and Room and DataStore for local data.",
      tags: ["Kotlin", "MVVM", "Retrofit", "Room"],
      githubLink: "https://github.com/raflisusanto/github-app-final",
    },
    {
      img: specifitAdmin,
      imgPosition: "left top",
      title: "Specifit Admin Website",
      desc: "Admin dashboard for managing the tips, workouts and workout programs shown in the Specifit Flutter app.",
      tags: ["React"],
      githubLink: "https://github.com/ABP-IF4407-02/specifit-web-admin-fe",
      previewLink: "https://specifit-admin-fe-preview.vercel.app/",
    },
    {
      img: specifitFE,
      title: "Specifit Mobile App",
      desc: "Helps Indonesians find a workout program that fits their needs. The APK is available to download.",
      tags: ["React Native", "Firebase"],
      githubLink: "https://github.com/raflisusanto/Specifit-React-Native",
      previewLink:
        "https://drive.google.com/file/d/1Ttr9s8_vmOF2yfvnrfWOpFkO031tTvl0/view?usp=sharing",
      apkLink:
        "https://drive.google.com/file/d/1iC5bwOrbF4UsjxJk_0tGQlDW0PdvxS3o/view?usp=sharing",
    },
    {
      img: specifitFE,
      title: "Specifit Mobile App (Flutter)",
      desc: "The Specifit app rebuilt in Flutter, with its content managed from the admin website.",
      tags: ["Flutter"],
      githubLink: "https://github.com/ABP-IF4407-02/specifit-mobile",
    },
    {
      img: esyarat,
      title: "Esyarat Website",
      desc: "A learning platform for Indonesian sign language, built in the Proclub 2022 probation program. The backend is no longer active.",
      tags: ["HTML", "SCSS", "JavaScript"],
      githubLink: "https://github.com/raflisusanto/esyarat-frontend",
      previewLink: "https://esyarat-frontend.vercel.app/",
    },
    {
      img: booku,
      title: "Booku Website",
      desc: "A book catalog CRUD website, and one of my first front-end projects.",
      tags: ["HTML", "CSS"],
      githubLink: "https://github.com/raflisusanto/Booku-Frontend",
      previewLink: "https://booku-frontend.vercel.app/",
    },
  ],
  1: [
    {
      img: fabric,
      title: "Fabric Classification Model",
      desc: "CNN trained from scratch to identify the fabric in clothing photos, deployed on Vertex AI for the ReClothes app (Bangkit 2023 capstone).",
      tags: ["Python", "TensorFlow", "Vertex AI"],
      githubLink: "https://github.com/JosuaMnl/Re-Clothes/tree/ML_branch",
      colabLink:
        "https://colab.research.google.com/drive/1xxT5UNGFW-G7YOJpAQF4oe11A2oDdq3d?usp=sharing",
    },
    {
      img: defect,
      title: "Defect Detection Model",
      desc: "YOLOv8 transfer-learning model that detects holes, knots and stains in fabric, deployed on Vertex AI for the ReClothes app.",
      tags: ["Python", "YOLOv8", "Vertex AI"],
      githubLink: "https://github.com/JosuaMnl/Re-Clothes/tree/ML_branch",
    },
    {
      img: NFO,
      title: "Nusantara Food Ontology",
      desc: "Research with UNIMAS Malaysia: a Python program that enriches a food ontology using NLP on cookbooks, recipe sites and nutrition documents.",
      tags: ["Python", "NLTK", "gensim", "owlready2"],
      colabLink:
        "https://colab.research.google.com/drive/19VxjWyvYd0AmU42crh69r51FyfNNF2Gc?usp=sharing",
    },
    {
      img: arrh,
      title: "Arrhythmia Classification",
      desc: "Neural network that classifies 16 arrhythmia classes from a public dataset, built for a college machine learning course.",
      tags: ["Python", "TensorFlow", "Pandas"],
      colabLink:
        "https://colab.research.google.com/drive/1tX3Nbr3itEf9-o3TiADzXxa0G9CSyhsX?usp=sharing",
    },
    {
      img: knn,
      title: "Genetic Algorithm, Fuzzy Logic & KNN",
      desc: "AI course assignment: a genetic algorithm to minimize a function, fuzzy logic to rate shops on service and price, and a KNN classifier.",
      tags: ["Python", "NumPy", "Pandas"],
      githubLink: "https://github.com/raflisusanto/TUPRO-1-3-GA-Fuzzy-KNN",
    },
  ],
  2: [
    {
      img: specifit,
      title: "Specifit UI/UX Design",
      desc: "Design for a workout-program app, with a full UX case study on Medium.",
      tags: ["Figma"],
      figmaLink:
        "https://www.figma.com/file/1y2aTSa87qIddicemcXaXq/Specifit-Remake?type=design&node-id=226%3A51&mode=design&t=zxXnxw5hKa4RZEu3-1",
      mediumLink:
        "https://medium.com/@raflisusanto/specifit-membantu-menemukan-program-olahraga-diet-yang-pas-untuk-orang-indonesia-b20754c32e12",
    },
    {
      img: tanamaja,
      title: "TanamAja UI Design",
      desc: "A tree-planting awareness app that placed top 5 at the UKODE National Hackathon 2021.",
      tags: ["Figma"],
      figmaLink:
        "https://www.figma.com/file/bLbRSGHefVE71swJceVVFK/TanamAja?type=design&node-id=0%3A1&mode=design&t=SuNbFlTIraCd8hgS-1",
    },
    {
      img: moneyflix,
      title: "MoneyFlix UI Design",
      desc: "A finance-learning app designed for the ISFEST UMN 2021 UI/UX competition.",
      tags: ["Figma"],
      figmaLink:
        "https://www.figma.com/file/im7OTeqanrAmzclmO18TNO/Beberapa-UI?type=design&node-id=257%3A1344&mode=design&t=EVZrZq1UvPHDUwXa-1",
    },
    {
      img: mizkin,
      imgPosition: "center top",
      title: "Mizkin UI Design",
      desc: "An expense and goal-planning app, with custom 3D isometric illustrations for the onboarding.",
      tags: ["Figma", "Illustrator"],
      figmaLink:
        "https://www.figma.com/file/im7OTeqanrAmzclmO18TNO/Beberapa-UI?type=design&node-id=257%3A1344&mode=design&t=EVZrZq1UvPHDUwXa-1",
    },
    {
      img: interfest,
      title: "Interfest 2022",
      desc: "Creative designer: Instagram posts, virtual backgrounds and a 3D photobooth.",
      tags: ["Illustrator"],
      previewLink:
        "https://drive.google.com/drive/folders/1GKxkvQNH3BtbIW1s5dVnugspsWFn17el?usp=sharing",
    },
    {
      img: motionhack,
      title: "MotionHack 1.0 2021",
      desc: "Creative designer: motion-graphic teaser, logo animation and speaker frames.",
      tags: ["Illustrator", "After Effects"],
      previewLink:
        "https://drive.google.com/file/d/1Rkf3kpD7jno8Q_B-ObPQjjjZ2ooyd9yL/view?usp=sharing",
    },
    {
      img: icoseit,
      imgPosition: "center top",
      title: "ICoSEIT 2022",
      desc: "Joined as technical support and ended up designing most of the event: posters, virtual backgrounds and book covers.",
      tags: ["Illustrator"],
      previewLink:
        "https://drive.google.com/drive/folders/13rWGMjy1QqZELr_7FnDBsEM-VmG0VWMX?usp=sharing",
    },
    {
      img: himaif,
      imgPosition: "center top",
      title: "HIMAIF Telkom University",
      desc: "Creative design staff for the informatics student association: Instagram feeds and stories, virtual backgrounds and posters.",
      tags: ["Illustrator"],
      previewLink:
        "https://drive.google.com/drive/folders/1i7C_CNaMyoZq4j9HA69G9jCzGIow4UM-?usp=sharing",
    },
    {
      img: mulmed,
      title: "Multimedia Lab Recruitment 2021",
      desc: "Creative designer for the open recruitment's Instagram feed, with a \"Halloween Squid Game\" theme.",
      tags: ["Figma"],
      previewLink:
        "https://drive.google.com/drive/folders/18fEE9nioDjMz68Cy_BH7Tqg0GBAxyqXM?usp=sharing",
    },
    // {
    //   img: temuin,
    //   title: "Temuin UI Design",
    //   desc: "An app for reporting found or missing items around Telkom University, designed for a Human-Computer Interaction class.",
    //   tags: ["Figma"],
    //   figmaLink:
    //     "https://www.figma.com/file/tmisux9C0fmlbkJUlYTBkU/Temuin-UI-Design?type=design&node-id=4%3A2&mode=design&t=eVQBZPNSqkmkntzB-1",
    // },
  ],
};

export const projectCategories = ["Web & Mobile", "Machine Learning", "UI/UX & Design"];
