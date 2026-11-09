/**
 * All text on the site lives here.
 * Source of truth: D:\web-porto\portfolio-context.md
 *
 * Anything starting with "Lorem ipsum" is a placeholder waiting for details.
 */
import erafoneIcon from "../assets/apps/erafone.webp";
import eztradeIcon from "../assets/apps/eztrade.webp";
import galeri24Icon from "../assets/apps/galeri24.webp";
import indonesianaIcon from "../assets/apps/indonesiana.webp";
import jdsportsIcon from "../assets/apps/jdsports.webp";
import maxstreamIcon from "../assets/apps/maxstream.webp";
import maxstreamShot1 from "../assets/apps/maxstream-shot1.webp";
import maxstreamShot3 from "../assets/apps/maxstream-shot3.webp";
import mrtjIcon from "../assets/apps/mrtj.webp";
import paragonIcon from "../assets/apps/paragon.webp";
import sanfindIcon from "../assets/apps/sanfind.webp";
import telkomselIcon from "../assets/apps/telkomsel.webp";
import portrait from "../assets/rapli.webp";

const LOREM_SHORT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus, posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla.";

export const profile = {
  name: "Muhamad Rafli Susanto",
  title: "Mobile Engineer",
  specialties: ["Android", "Android TV", "Flutter", "Kotlin Multiplatform"],
  tagline:
    "I build and ship production apps for clients in retail, e-commerce, fintech and media.",
  location: "Bandung, Indonesia",
  relocation: "Open to relocation to Germany",
  portrait,
  email: "rafliportfolioo@gmail.com",
  linkedin: "https://www.linkedin.com/in/raflisusanto/",
  github: "https://github.com/raflisusanto",
  cv: "https://drive.google.com/file/d/1tMUSPwrnZ4Zj6H_Rg_amRDRgrxaLvMER/view",
};

export const stats = [
  { value: "~3 yrs", label: "industry experience" },
  { value: "15", label: "client projects delivered" },
  { value: "1 yr", label: "Junior → Staff promotion" },
  { value: "IEEE", label: "published researcher" },
];

export const navItems = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

/** Featured case studies, in priority order. */
export const caseStudies = [
  {
    id: "maxstream",
    eyebrow: "Nusantara Beta Studio · MaxstreamTV",
    title: "One video player for mobile and TV, streaming the FIFA World Cup 2026",
    role: "Responsible for the Android and Android TV side of a Kotlin Multiplatform app",
    tags: ["Kotlin Multiplatform", "Android", "Android TV", "Media3 / ExoPlayer", "Widevine DRM"],
    problem: LOREM,
    work: [
      "Unified player features scattered across several apps (picture-in-picture, offline download) into one reusable Media3 module for Android mobile and Android TV.",
      "Integrated Widevine DRM with a third-party token-based DRM service, including license renewal and session heartbeats (one active stream per user).",
      LOREM_SHORT,
    ],
    result: "Used for live streaming of the FIFA World Cup 2026 in the public MaxstreamTV app.",
    images: [
      { src: maxstreamShot1, alt: "MaxstreamTV on TV, tablet and phone" },
      { src: maxstreamShot3, alt: "MaxstreamTV content catalog" },
    ],
    links: [
      { label: "Google Play (mobile)", href: "https://play.google.com/store/apps/details?id=com.maxstream" },
      { label: "Google Play (TV)", href: "https://play.google.com/store/apps/details?id=com.maxstream.tv" },
    ],
  },
  {
    id: "sdui",
    eyebrow: "PT Inti Utama Solusindo",
    title: "A server-driven UI framework that made web app development 3x faster",
    role: "Built the framework as an intern, then led its adoption as Supervisor Frontend Developer",
    tags: ["Flutter", "Server-driven UI", "Dart"],
    problem: LOREM,
    work: [
      "Built a server-driven UI framework in Flutter: custom JSON parser, dynamic routing and a standardized widget library.",
      "Led a team of 5 front-end engineers and drove adoption of the framework.",
      LOREM_SHORT,
    ],
    result: "Web app development became 3x faster; led the launch of 3 web apps used internally and across 100+ clinics in Indonesia.",
    images: [],
    placeholder: "Diagram placeholder (internal project, no screenshots)",
    links: [],
  },
  {
    id: "udms",
    eyebrow: "Nusantara Beta Studio · UDMS",
    title: "Lorem ipsum: React Native app with native modules and automated UI tests",
    role: LOREM_SHORT,
    tags: ["React Native", "Kotlin", "Java", "Appium"],
    problem: LOREM,
    work: [
      "Built native modules in Kotlin and Java for the React Native app.",
      "Contributed to building the company's automated mobile UI tests with Appium, laying the groundwork and documentation for the later device-farm setup.",
      LOREM_SHORT,
    ],
    result: LOREM_SHORT,
    images: [],
    placeholder: "Private app, no public screenshots",
    links: [],
  },
];

/** Client apps with public store pages. `role` is a placeholder until confirmed. */
export const shippedApps = [
  {
    name: "MyTelkomsel",
    client: "Telkomsel · Telco",
    icon: telkomselIcon,
    role: LOREM_SHORT,
    stores: [{ store: "Google Play", href: "https://play.google.com/store/apps/details?id=com.telkomsel.telkomselcm" }],
  },
  {
    name: "MAXStream TV",
    client: "Media / OTT",
    icon: maxstreamIcon,
    role: "Android and Android TV app (Kotlin Multiplatform). See the case study above.",
    stores: [
      { store: "Google Play", href: "https://play.google.com/store/apps/details?id=com.maxstream" },
      { store: "Android TV", href: "https://play.google.com/store/apps/details?id=com.maxstream.tv" },
    ],
  },
  {
    name: "Erafone",
    client: "Erafone · Retail",
    icon: erafoneIcon,
    role: LOREM_SHORT,
    stores: [
      { store: "Google Play", href: "https://play.google.com/store/apps/details?id=com.erafone.android" },
      { store: "AppGallery", href: "https://appgallery.huawei.com/app/C116287773" },
    ],
  },
  {
    name: "JD Sports Indonesia",
    client: "JD Sports · E-commerce",
    icon: jdsportsIcon,
    role: LOREM_SHORT,
    stores: [{ store: "Google Play", href: "https://play.google.com/store/apps/details?id=id.jdsports.android" }],
  },
  {
    name: "MyMRTJ",
    client: "MRT Jakarta · Transport",
    icon: mrtjIcon,
    role: LOREM_SHORT,
    stores: [{ store: "Google Play", href: "https://play.google.com/store/apps/details?id=com.mrt.jakarta" }],
  },
  {
    name: "G24 Mobile",
    client: "Pegadaian Galeri 24 · Fintech",
    icon: galeri24Icon,
    role: LOREM_SHORT,
    stores: [{ store: "Google Play", href: "https://play.google.com/store/apps/details?id=com.galeri24" }],
  },
  {
    name: "IndonesianaTV",
    client: "Indonesiana TV · Media",
    icon: indonesianaIcon,
    role: LOREM_SHORT,
    stores: [{ store: "Google Play", href: "https://play.google.com/store/apps/details?id=tv.indonesiana.indonesianatv" }],
  },
  {
    name: "EZ Trade Store",
    client: "Samsung · Retail sales",
    icon: eztradeIcon,
    role: LOREM_SHORT,
    stores: [{ store: "Google Play", href: "https://play.google.com/store/apps/details?id=com.sein.eztrade.promotor" }],
  },
  {
    name: "Paragon SFM",
    client: "Paragon · Sales force",
    icon: paragonIcon,
    role: LOREM_SHORT,
    stores: [{ store: "Google Play", href: "https://play.google.com/store/apps/details?id=com.pti.acbs.sfm" }],
  },
  {
    name: "SANFIND",
    client: "Lorem ipsum · Flutter",
    icon: sanfindIcon,
    role: LOREM_SHORT,
    stores: [
      { store: "Google Play", href: "https://play.google.com/store/apps/details?id=com.sanf.mobile" },
      { store: "App Store", href: "https://apps.apple.com/id/app/sanfind/id1619950050" },
    ],
  },
];

export const experience = [
  {
    company: "Nusantara Beta Studio (PT Kode Aplikasi Indonesia)",
    location: "Jakarta, Indonesia",
    period: "Jun 2024 – Aug 2026",
    roles: [
      { title: "Software Engineer (Mobile), freelance", period: "Jul 2026 – Aug 2026" },
      { title: "Staff Software Engineer (Mobile)", period: "Jul 2025 – Jul 2026", promoted: true },
      { title: "Junior Software Engineer (Mobile)", period: "Jun 2024 – Jul 2025" },
    ],
    highlights: [
      "Built and maintained Android and Flutter apps for clients in retail, e-commerce, fintech, sales and media/TV OTT, with a ~99% crash-free rate.",
      "Delivered 15 projects for brands including Samsung, Erafone, Telkomsel, Paragon, MRT Jakarta, Astra and Pegadaian, working with international stakeholders in English.",
      "Technical lead (coordinator) on selected projects, coordinating teams of 2-3 engineers across divisions.",
      "Unified scattered video player features into one reusable Media3 module with Widevine DRM for Android mobile and TV, used for the FIFA World Cup 2026 on MaxstreamTV.",
      "Contributed to building the company's automated mobile UI tests with Appium.",
      "Managed submission and release of production apps on Google Play, the App Store and Huawei AppGallery.",
      "Mentored a Bangkit Academy capstone team on an internal Flutter HR app.",
    ],
  },
  {
    company: "PT Inti Utama Solusindo",
    location: "Jakarta, Indonesia",
    period: "Aug 2023 – Jun 2024",
    roles: [
      { title: "Supervisor Frontend Developer", period: "Dec 2023 – Jun 2024", promoted: true },
      { title: "Frontend Developer Intern", period: "Aug 2023 – Dec 2023" },
    ],
    highlights: [
      "Built a server-driven UI framework in Flutter that made web app development 3x faster.",
      "Led a team of 5 front-end engineers and the launch of 3 web apps used across 100+ clinics in Indonesia.",
    ],
  },
  {
    company: "Proclub Telkom University",
    location: "Bandung, Indonesia",
    period: "Dec 2021 – Jun 2022",
    roles: [{ title: "Software Engineer Intern", period: "Dec 2021 – Jun 2022" }],
    highlights: [
      "Co-developed Esyarat, a website for learning Indonesian sign language (HTML, SCSS, JavaScript, later React).",
    ],
  },
];

export const skillGroups = [
  { title: "Mobile", items: ["Android (Kotlin)", "Jetpack Compose", "XML / View system", "Flutter / Dart", "Kotlin Multiplatform", "React Native", "Android TV (Compose for TV)"] },
  { title: "Android libraries", items: ["Coroutines / Flow", "RxJava", "ViewModel", "Paging 3", "Koin", "Retrofit", "OkHttp", "Ktor", "Gson", "Room", "DataStore", "WorkManager", "CameraX", "ML Kit", "Media3 / ExoPlayer", "Widevine DRM", "Coil", "Glide", "Lottie"] },
  { title: "Kotlin Multiplatform", items: ["SQLDelight", "Ktor Client", "kotlinx.serialization", "kotlinx.coroutines", "Koin"] },
  { title: "Flutter", items: ["Bloc / Cubit", "Riverpod", "Provider", "freezed", "json_serializable", "get_it", "Dio", "Retrofit", "Hive", "GoRouter", "fpdart", "flutter_secure_storage"] },
  { title: "React Native", items: ["TypeScript", "Expo (EAS, Expo Router)", "React Navigation", "Zustand", "Context API", "React Query", "Axios", "React Native Paper", "AsyncStorage", "MMKV", "Native modules (Kotlin / Java)"] },
  { title: "Architecture & quality", items: ["Clean Architecture", "MVVM", "Modular architecture", "Server-driven UI", "Profiling (Android Studio Profiler, Perfetto)", "ktlint", "Detekt", "LeakCanary", "Appium UI testing"] },
  { title: "Delivery & tooling", items: ["Google Play / App Store / AppGallery releases", "Fastlane", "GitHub Actions", "GitLab CI", "Firebase (Crashlytics, Analytics, Remote Config, FCM, App Distribution)", "Sentry", "Feature flags", "Jira"] },
  { title: "Web & machine learning", items: ["React", "JavaScript", "TypeScript", "Python", "TensorFlow", "OpenCV", "Vertex AI"] },
  { title: "Leadership", items: ["Technical leadership", "Mentoring", "Cross-team communication"] },
];

export const education = {
  degree: "Bachelor of Computer Science (S.Kom.), Informatics",
  school: "Telkom University, Bandung",
  period: "Aug 2020 – Feb 2024",
  details: [
    "GPA 3.97 / 4.00, cum laude, top 2 by GPA in the Faculty of Informatics",
    "Teaching assistant (Data Structures, Database Design), research assistant (Nusantara Food Ontology, with UNIMAS), Computer Vision lab assistant",
  ],
};

export const publication = {
  title: "Exploiting Convex Hull in Perspective Rectification of Reflected and Tilted License Plate",
  authors: "Susanto, M. R., Ciptasari, R. W., Kosala, G.",
  venue: "ICoICT 2024, IEEE Xplore",
  href: "https://ieeexplore.ieee.org/document/10698529",
};

export const certifications = [
  { name: "TensorFlow Developer Certificate", issuer: "Google", date: "Oct 2023" },
  { name: "Bangkit Academy, Machine Learning (graduated with distinction)", issuer: "Google, Tokopedia, Gojek, Traveloka", date: "Feb – Aug 2023" },
  { name: "IDCamp Android scholarship, up to expert level", issuer: "Indosat Ooredoo Hutchison", date: "Dec 2023 – Aug 2024" },
  { name: "TensorFlow Developer · TensorFlow: Data and Deployment · Machine Learning Specialization", issuer: "Coursera / DeepLearning.AI", date: "2023" },
];

export const achievements = [
  "Top 200 internationally of 1,000+ teams, Shopee Code League 2022 (qualification round)",
  "Top 5 of 100+ submissions, UKODE National Hackathon 2021 (climate-tech app TanamAja)",
  "Top 50 nationally of 200+ teams, GEMASTIK 2021 competitive programming",
];

export const languages = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "Professional working proficiency" },
  { name: "German", level: "A1, studying toward B2" },
];
