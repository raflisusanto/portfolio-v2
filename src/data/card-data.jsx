import specifitAdmin from "../../src/assets/thumbnail/FE/Specifit_admin.webp";
import githubUser from "../../src/assets/thumbnail/FE/Github.webp";
import specifitFE from "../../src/assets/thumbnail/FE/Specifit.webp";
import esyarat from "../../src/assets/thumbnail/FE/Esyarat.webp";
import booku from "../../src/assets/thumbnail/FE/Booku.webp";
import fabric from "../../src/assets/thumbnail/ML/fabric.webp";
import defect from "../../src/assets/thumbnail/ML/defect.webp";
import NFO from "../../src/assets/thumbnail/ML/NFO.webp";
import arrh from "../../src/assets/thumbnail/ML/Arrh.webp";
import knn from "../../src/assets/thumbnail/ML/knn.webp";

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
};

export const projectCategories = ["Web & Mobile", "Machine Learning"];
