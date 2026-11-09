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

export const projectData = {
  0: [
    {
      img: githubUser,
      title: "Github Users App",
      desc: "A simple application that can search, favorite, and show github users details. Developed using Kotlin, with MVVM Architecture, this app also uses Retrofit to fetch data from API and Room Database, DataStore to save the data locally.",
      techStack: "Kotlin",
      githubLink: "https://github.com/raflisusanto/github-app-final",
    },
    {
      img: specifitAdmin,
      title: "Specifit Administrator Website",
      desc: "The Specifit Admin Website is designed to provide administrators with an efficient platform for managing data utilized within the Specifit Mobile Application Flutter Version. This includes handling tips, workouts, and workout programs.",
      techStack: "React.js",
      githubLink: "https://github.com/ABP-IF4407-02/specifit-web-admin-fe",
      previewLink: "https://specifit-admin-fe-preview.vercel.app/",
    },
    {
      img: specifitFE,
      title: "Specifit Mobile Application",
      desc: "The Specifit Mobile App is an application that helps Indonesian people find their perfect workout program for their needs. The full application can be downloaded and accessed with the link below.",
      techStack: "React Native, Firebase",
      githubLink: "https://github.com/raflisusanto/Specifit-React-Native",
      previewLink:
        "https://drive.google.com/file/d/1Ttr9s8_vmOF2yfvnrfWOpFkO031tTvl0/view?usp=sharing",
      apkLink:
        "https://drive.google.com/file/d/1iC5bwOrbF4UsjxJk_0tGQlDW0PdvxS3o/view?usp=sharing",
    },
    {
      img: specifitFE,
      title: "Specifit Mobile Application (Flutter Version)",
      desc: "The Specifit Mobile App Developed again using Flutter.",
      techStack: "Flutter",
      githubLink: "https://github.com/ABP-IF4407-02/specifit-mobile",
    },
    {
      img: esyarat,
      title: "Esyarat Website",
      desc: "Esyarat is an educational website that serves as a dedicated learning platform for local sign language. Esyarat was developed as part of the Proclub Probation 2022 Program, and the backend is currently inactive.",
      techStack: "HTML, SCSS, JS",
      githubLink: "https://github.com/raflisusanto/esyarat-frontend",
      previewLink: "https://esyarat-frontend.vercel.app/",
    },
    {
      img: booku,
      title: "Booku Website",
      desc: "Booku is a website that enable users to save their book catalog. This was a simple practice CRUD website that I’ve done and one of my first front-end projects.",
      techStack: "HTML, CSS",
      githubLink: "https://github.com/raflisusanto/Booku-Frontend",
      previewLink: "https://booku-frontend.vercel.app/",
    },
  ],
  1: [
    {
      img: fabric,
      title: "Fabric Classification Model",
      desc: "The Fabric Classification Model is a Convolutional Neural Network (CNN) model designed to accurately predict the type of fabric depicted in user-uploaded clothing pictures within the application. This model was created and trained from scratch using TensorFlow and deployed on Google Cloud Platform with VertexAI. This model API was consumed in the Android Application named ReClothes that we made as Bangkit 2023 Capstone Project.",
      techStack: "Python, TensorFlow, scikit-learn, NumPy, matplotlib",
      githubLink: "https://github.com/JosuaMnl/Re-Clothes/tree/ML_branch",
      colabLink:
        "https://colab.research.google.com/drive/1xxT5UNGFW-G7YOJpAQF4oe11A2oDdq3d?usp=sharing",
    },
    {
      img: defect,
      title: "Defect Detection Model",
      desc: "The Defect Classification Model is a Convolutional Neural Network (CNN) model designed to accurately predict three types of fabric defect (hole, knot, and stain) in user-uploaded clothing pictures within the application. This model was created using transfer-learning from the YOLOv8 model and deployed on Google Cloud Platform with VertexAI. This model API was consumed in the Android Application named ReClothes that we made as Bangkit 2023 Capstone Project.",
      techStack: "Python, YOLOv8",
      githubLink: "https://github.com/JosuaMnl/Re-Clothes/tree/ML_branch",
    },
    {
      img: NFO,
      title: "Nusantara Food Ontology (NFO)",
      desc: "This is a data science research project focusing in NLP and ontology enrichment that I've done called Nusantara Food Ontology in collaboration with UNIMAS Malaysia, under the guidance of my lecturer. This project involved the development of a Python program designed to automatically enrich an existing food ontology using a dataset. The dataset itself was obtained and processed from diverse sources, including cookbooks, cooking websites, and nutrition documents.",
      techStack: "Python, NLTK, LDA, owlready2, gensim, scikit-learn, NumPy",
      colabLink:
        "https://colab.research.google.com/drive/19VxjWyvYd0AmU42crh69r51FyfNNF2Gc?usp=sharing",
    },
    {
      img: arrh,
      title: "Arrhythmia Classification Model",
      desc: "The neural network model presented here demonstrates its effectiveness in accurately classifying the dataset's 16 distinct classes. Developed as a part of my Machine Learning Assignment during college, this model was trained using the Arrhythmia public dataset sourced from the ML Repository.",
      techStack: "Python, TensorFlow, NumPy, Pandas, Seaborn, Matplotlib",
      colabLink:
        "https://colab.research.google.com/drive/1tX3Nbr3itEf9-o3TiADzXxa0G9CSyhsX?usp=sharing",
    },
    {
      img: knn,
      title: "Genetic Algorithm, Fuzzy Logic, and KNN Classification",
      desc: "This was a project created for Artificial Intelligence class assignment in my campus. I implemented a genetic algorithm to search the minimum value of a math formula, then I also made a Fuzzy Logic algorithm to determine which shop is better in terms of service and price. Lastly, I made a KNN-classifier to classify class from an example dataset provided.",
      techStack: "Python, NumPy, Pandas, Seaborn, Matplotlib",
      githubLink: "https://github.com/raflisusanto/TUPRO-1-3-GA-Fuzzy-KNN",
    },
  ],
  2: [
    {
      img: specifit,
      title: "Specifit UI/UX Design",
      desc: "Specifit Mobile App is an application that helps Indonesian people find their perfect workout program for their needs. I also conducted UX Case Study for this application which you can also see in the link below.",
      techStack: "Figma",
      figmaLink:
        "https://www.figma.com/file/1y2aTSa87qIddicemcXaXq/Specifit-Remake?type=design&node-id=226%3A51&mode=design&t=zxXnxw5hKa4RZEu3-1",
      mediumLink:
        "https://medium.com/@raflisusanto/specifit-membantu-menemukan-program-olahraga-diet-yang-pas-untuk-orang-indonesia-b20754c32e12",
    },
    {
      img: tanamaja,
      title: "TanamAja UI Design",
      desc: "TanamAja won as the top 5 place in UKODE National Hackathon at TECH TO IMPACT 2021. This mobile app is a platform to remind the importance of planting trees to reduce worsening air pollution.",
      techStack: "Figma",
      figmaLink:
        "https://www.figma.com/file/bLbRSGHefVE71swJceVVFK/TanamAja?type=design&node-id=0%3A1&mode=design&t=SuNbFlTIraCd8hgS-1",
    },
    {
      img: moneyflix,
      title: "MoneyFlix UI Design",
      desc: "MoneyFlix is a Finance application which I designed to help users learn financial easily and structured. This UI Design was submitted for 2021 ISFEST UMN 2021 UI/UX Competition.",
      techStack: "Figma",
      figmaLink:
        "https://www.figma.com/file/im7OTeqanrAmzclmO18TNO/Beberapa-UI?type=design&node-id=257%3A1344&mode=design&t=EVZrZq1UvPHDUwXa-1",
    },
    {
      img: mizkin,
      title: "Mizkin UI Design",
      desc: "Mizkin is a unique financial app that helps to plan and manage expenses, which I also designed a really cool custom 3D isomorphic design that I used in the onboarding part.",
      techStack: "Figma, Adobe Illustrator",
      figmaLink:
        "https://www.figma.com/file/im7OTeqanrAmzclmO18TNO/Beberapa-UI?type=design&node-id=257%3A1344&mode=design&t=EVZrZq1UvPHDUwXa-1",
    },
    {
      img: interfest,
      title: "Interfest 2022",
      desc: "Interfest is an event conducted by Informatics Student of Telkom University. I joined as a Creative Designer for this event, in which I helped made Social Media Design (Instagram), Virtual Backgrounds, and 3D Photobooth.",
      techStack: "Adobe Illustrator",
      previewLink:
        "https://drive.google.com/drive/folders/1GKxkvQNH3BtbIW1s5dVnugspsWFn17el?usp=sharing",
    },
    {
      img: motionhack,
      title: "MotionHack 1.0 2021",
      desc: "MotionHack is one of Motion Laboratory events which I also joined as a Creative Designer. In this event, I made a motion graphic teaser, logo animation, and speakers background frame.",
      techStack: "Adobe Illustrator, Adobe After Effect",
      previewLink:
        "https://drive.google.com/file/d/1Rkf3kpD7jno8Q_B-ObPQjjjZ2ooyd9yL/view?usp=sharing",
    },
    {
      img: icoseit,
      title: "ICoSEIT 2022",
      desc: "I got chosen as a Technical Support for IcoSEIT (Internation Conference on Software Engineering and Information Technology) but I mostly did the design of this event such as Posters, Virtual Backrounds, and Book Covers",
      techStack: "Adobe Illustrator",
      previewLink:
        "https://drive.google.com/drive/folders/13rWGMjy1QqZELr_7FnDBsEM-VmG0VWMX?usp=sharing",
    },
    {
      img: himaif,
      title: "HIMAIF Telkom University",
      desc: "As a Creative Design staff in my majors “himpunan”, I did a LOT of design. But mostly I handle Social Media Design (Instagram Feeds and Story), Virtual Backgrounds, and Posters for the events conducted by our community.",
      techStack: "Adobe Illustrator",
      previewLink:
        "https://drive.google.com/drive/folders/1i7C_CNaMyoZq4j9HA69G9jCzGIow4UM-?usp=sharing",
    },
    {
      img: mulmed,
      title: "Multimedia Lab Open Recruitment 2021",
      desc: "After the time of my internship ended, I joined as the open recruitment committee as a Creative Designer. I made the Instagram Feeds of this event which is one of the coolest theme I've ever done “Halloween Squid Game”",
      techStack: "Figma",
      previewLink:
        "https://drive.google.com/drive/folders/18fEE9nioDjMz68Cy_BH7Tqg0GBAxyqXM?usp=sharing",
    },
    // {
    //   img: temuin,
    //   title: "Temuin UI Design",
    //   desc: "Temuin is an application that helps user to report findings or missing items in Telkom University area. I designed this application as a college assignment on Human Computer Interaction class.",
    //   techStack: "Figma",
    //   figmaLink:
    //     "https://www.figma.com/file/tmisux9C0fmlbkJUlYTBkU/Temuin-UI-Design?type=design&node-id=4%3A2&mode=design&t=eVQBZPNSqkmkntzB-1",
    // },
  ],
};

export const projectCategories = ["Web & Mobile", "Machine Learning", "UI/UX & Design"];
