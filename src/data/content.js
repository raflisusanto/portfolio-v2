/**
 * All text on the site lives here.
 * Source of truth: my portfolio context notes and case study write-ups (kept outside this repo).
 */
import erafoneIcon from "../assets/apps/icons/erafone.webp";
import eztradeIcon from "../assets/apps/icons/ez-trade-store.webp";
import galeri24Icon from "../assets/apps/icons/g24-mobile.webp";
import indonesianaIcon from "../assets/apps/icons/indonesiana-tv.webp";
import jdsportsIcon from "../assets/apps/icons/jd-sports.webp";
import maxstreamIcon from "../assets/apps/icons/maxstream-tv.webp";
import maxstreamShot1 from "../assets/apps/screenshots/maxstream-tv-devices.webp";
import maxstreamTv from "../assets/apps/screenshots/maxstream-tv-android-tv.webp";
import mrtjIcon from "../assets/apps/icons/mymrtj.webp";
import paragonIcon from "../assets/apps/icons/paragon-sfm.webp";
import sanfindIcon from "../assets/apps/icons/sanfind.webp";
import telkomselIcon from "../assets/apps/icons/mytelkomsel.webp";
import portrait from "../assets/profile/portrait.webp";

const play = (id) => `https://play.google.com/store/apps/details?id=${id}`;

export const profile = {
  name: "Muhamad Rafli Susanto",
  title: "Mobile Engineer",
  specialties: ["Android", "Android TV", "Flutter", "Kotlin Multiplatform", "React Native"],
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
  { value: "100K+", label: "FIFA World Cup 2026 viewers on my video player" },
  { value: "15", label: "client projects delivered" },
  { value: "IEEE", label: "published researcher" },
];

export const navItems = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

/**
 * Featured case studies, in priority order.
 * `app` + `logo` (store icon), or `logoIcon` (a generic icon) when there is no app icon to show.
 * `summary`: one-liner shown on phones/tablets instead of the role, problem and approach.
 * `media`: screenshots, or the key of a diagram in components/diagrams.
 * `detailDiagram`: optional extra diagram inside "Read more".
 */
export const caseStudies = [
  {
    id: "maxstream",
    app: "MAXStream TV",
    logo: maxstreamIcon,
    context: "Nusantara Beta Studio · Media / OTT · 2026",
    title: "One video player module for mobile and TV, streaming the FIFA World Cup 2026",
    summary: "A unified video player module for Android mobile and Android TV, used for live streaming of the FIFA World Cup 2026.",
    role: "Tech lead for Android. Built the player module, its error handling and the DRM integration, on the Android and Android TV side of a Kotlin Multiplatform app.",
    tags: ["Kotlin Multiplatform", "Media3 / ExoPlayer", "Widevine DRM", "Jetpack Compose", "Compose for TV"],
    problem:
      "Player features were scattered across several apps (picture-in-picture in one, offline downloads in another), and MaxstreamTV needed all of them in one library with feature toggles. A penetration test then required DRM to prevent piracy of the World Cup, with one active stream per user. And after the first launch, player and DRM errors were hard to debug when they arrived as a screenshot with no steps to reproduce.",
    approach: [
      "Consolidated 10+ player features into one reusable Media3 (ExoPlayer) module, shared by the mobile and TV apps and working with both touch and remote-control input.",
      "Integrated Widevine DRM through a token-based third-party service. One active stream per user is enforced by periodic license renewal (the session heartbeat) and a session teardown when playback stops.",
      "Mapped every player and DRM error to a clear message and code on screen, documented across platforms.",
      "Built a logger module and integrated TrueWatch Real User Monitoring with session replay (QA builds only, to keep users' devices fast), so bug reports come with a recording.",
    ],
    results: [
      "Powered live streaming of the FIFA World Cup 2026 for 100,000+ viewers, including group viewings in cafés across Indonesia",
      "~99% crash-free rate",
      "One shared module instead of duplicated player code across apps",
    ],
    challenges: [
      "Supporting 10+ player features on both touch (mobile) and remote-control (TV) interfaces in one module",
      "Renewing DRM licenses without interrupting live playback",
      "Handling device-specific player and DRM error codes, since many reports came from specific devices",
    ],
    learned:
      "How a video player is structured, how DRM licensing and concurrent-stream limits behave under live, high-traffic conditions, and how much good error handling speeds up support.",
    media: {
      images: [
        { src: maxstreamTv, alt: "MaxstreamTV on Android TV showing a FIFA World Cup 2026 match", wide: true },
        { src: maxstreamShot1, alt: "MaxstreamTV on TV, tablet and phone" },
      ],
    },
    detailDiagram: "drm",
    links: [
      { label: "Google Play (mobile)", href: play("com.maxstream") },
      { label: "Google Play (TV)", href: play("com.maxstream.tv") },
    ],
  },
  {
    id: "erafone",
    app: "Erafone",
    logo: erafoneIcon,
    context: "Nusantara Beta Studio · E-commerce · 2025–2026",
    title: "An e-commerce app on Google Play in 2 months, then on Huawei AppGallery from the same codebase",
    summary: "Shipped the Erafone shopping app to Google Play in 2 months despite unclear requirements, then brought it to Huawei AppGallery solo from the same codebase.",
    role: "Tech lead and coordinator of 3 engineers through launch, then the main developer. Built the Huawei version solo.",
    tags: ["Kotlin", "XML + Jetpack Compose", "Product flavors", "GMS / HMS Core", "WebView"],
    problem:
      "Erafone, a major Indonesian electronics retailer, needed a full shopping app on the Play Store within a 2-month release window. The written requirements were incomplete and some designs were unclear. Later, Huawei devices without Google services needed their own version, without maintaining a second app.",
    approach: [
      "Filled the requirement gaps by studying how the Erafone website and a reference app actually behave (API calls, WebView flows), and kept a steady loop of questions to the client and designers so nothing blocked the sprint.",
      "Coordinated the team and built features through all 5 sprints to launch, then kept shipping features after launch, mostly on my own.",
      "Added google and huawei product flavors, each with its own source set, so every build only includes its own SDKs.",
      "Put each platform service (push, maps and location, analytics, login, in-app updates) behind a shared interface with one implementation per flavor.",
    ],
    results: [
      "Released on Google Play in 2 months (5 sprints)",
      "Released on Huawei AppGallery from the same codebase, built solo",
      "New features work on both stores with no duplicated code",
    ],
    challenges: [
      "Building a full e-commerce app under a hard deadline with incomplete specs and unclear designs",
      "Matching Google services with Huawei equivalents that don't always behave the same way",
      "Designing the abstraction so new features automatically work on both versions",
    ],
    learned:
      "How to deliver under a hard deadline when requirements are unclear (ask early, verify against the real product), that Jetpack Compose makes development faster, and how a clean abstraction turns a second platform into an extension rather than a second app.",
    media: { diagram: "dualStore" },
    links: [
      { label: "Google Play", href: play("com.erafone.android") },
      { label: "Huawei AppGallery", href: "https://appgallery.huawei.com/app/C116287773" },
    ],
  },
  {
    id: "sdui",
    app: "Server-driven UI framework",
    logoIcon: "layout",
    context: "PT Inti Utama Solusindo · Healthcare · 2023–2024",
    title: "A server-driven UI framework that made web app development 3x faster",
    summary: "A Flutter framework that let the team build web apps 3x faster, powering 3 web apps used internally and across 100+ clinics in Indonesia.",
    role: "Designed and built it as an intern. As Supervisor Frontend Developer, led its adoption across a team of 5 front-end engineers.",
    tags: ["Flutter (web)", "Dart", "Server-driven UI"],
    problem:
      "Every new web app was built from scratch, with screens hard-coded in the client. Even small UI changes needed a new build and deployment.",
    approach: [
      "The server sends a JSON description of each screen, and the app renders it at runtime.",
      "A custom JSON parser maps layout definitions to Flutter widgets and handles unknown or invalid components safely.",
      "Dynamic routing, so navigation is defined from the server too.",
      "A standardized widget library and documentation, so new engineers could build screens quickly.",
    ],
    results: [
      "3x faster web app development",
      "3 web apps launched, used internally and across 100+ clinics in Indonesia",
      "Consistent UI across products from one shared component library",
    ],
    challenges: [
      "Designing a JSON schema for every widget: flexible enough for real screens, simple enough for others to use",
      "Handling unknown or invalid components safely, so a bad payload doesn't crash the app",
      "Getting the team to adopt a new way of building screens",
    ],
    learned:
      "How to design a framework that other engineers actually use. The code was only half of it; documentation and team adoption mattered just as much.",
    media: { diagram: "sdui" },
    links: [],
  },
  {
    id: "sanfind",
    app: "SANFIND",
    logo: sanfindIcon,
    context: "Nusantara Beta Studio · Fintech · 2024–2026",
    title: "Keeping a fintech Flutter app current, secure and store-compliant",
    summary: "Kept a fintech Flutter app compliant and secure: Google Play's 16 KB requirement, native Kotlin bridges, and installment payments that can be fixed without app updates.",
    role: "Tech lead and coordinator since 2024, developing features across the app and working closely with the backend team.",
    tags: ["Flutter", "Bloc + Freezed", "Platform channels (Kotlin)", "Midtrans", "WebView"],
    problem:
      "An existing app with outdated libraries was at risk of falling behind store rules: Google Play's 16 KB page size requirement for Android 15+ had to be met to keep publishing updates. The app also lacked in-app update prompts and the company's runtime security checks, and needed a new installment-payment feature.",
    approach: [
      "Upgraded the Flutter libraries and made sure every native dependency meets the 16 KB page size requirement.",
      "Moved Bloc states and events to Freezed (immutable classes, sealed unions) for safer, less error-prone state handling.",
      "Bridged to Kotlin through platform channels for Google Play In-App Updates and the company's RASP security library.",
      "Compared the native Midtrans SDK with a web-hosted payment page together with the backend team, and chose a WebView so payment fixes ship without an app release.",
    ],
    results: [
      "Stayed publishable on Google Play under the 16 KB requirement",
      "In-app update prompts and runtime security checks running through native Kotlin",
      "Installment payments live, with a flow that can be fixed without an app release or store review",
    ],
    challenges: [
      "Upgrading many libraries without breaking existing features",
      "Connecting Flutter with native Kotlin code for updates and security",
      "Learning how payment gateways and installment payments work",
      "Aligning the mobile and backend teams on the right integration approach",
    ],
    learned:
      "How payment gateways work, and that the best technical decision isn't always the native one: a WebView made the payment flow easier to maintain and fix. I also got comfortable connecting Flutter with native Android code when a feature needs it.",
    media: { diagram: "flutterBridges" },
    links: [
      { label: "Google Play", href: play("com.sanf.mobile") },
      { label: "App Store", href: "https://apps.apple.com/id/app/sanfind/id1619950050" },
    ],
  },
  {
    id: "udms",
    app: "Astra UD Trucks",
    logoIcon: "truck",
    context: "Nusantara Beta Studio · Internal app · 2024",
    title: "Native modules and automated UI tests for a React Native app",
    summary: "A React Native app for Astra UD Trucks, where I also contributed to building the company's automated mobile UI tests with Appium.",
    role: "Tech lead and coordinator. Built features, wrote the native modules and contributed to building the Appium test setup.",
    tags: ["React Native", "TypeScript", "Expo", "Java native modules", "Appium"],
    problem:
      "The project started as a change-request sprint of bug fixes and improvements for an internal app. Then stakeholders raised an issue with manual testing: every release meant clicking through the same flows by hand, which was slow and let regressions slip through.",
    approach: [
      "Delivered the change requests in React Native and TypeScript.",
      "Wrote Java native modules, bridged to JavaScript, for location services and RASP security checks.",
      "Contributed to building automated UI tests with Appium: stable test IDs, a shared folder structure and documentation.",
    ],
    results: [
      "All change requests delivered and bugs fixed",
      "Laid the groundwork for the company's later Android device-farm testing",
    ],
    challenges: [
      "Making UI elements reliably findable for Appium (stable test IDs and accessibility labels)",
      "Stabilizing flaky tests caused by timing and loading states",
      "Structuring the test folders so developers could work on them together",
      "Debugging issues on the native side of React Native modules",
    ],
    learned:
      "How much testability depends on how the app is built, and that good documentation is what turns a test setup into something the whole team uses.",
    media: { diagram: "rnTesting" },
    links: [],
  },
];

/**
 * Client apps with public store pages. `led`: I was tech lead / coordinator.
 * `caseStudy`: id of the matching entry in caseStudies, shown as a "Case study" button.
 */
export const shippedApps = [
  {
    name: "MAXStream TV",
    client: "Media / OTT",
    icon: maxstreamIcon,
    caseStudy: "maxstream",
    led: true,
    role: "Built the unified video player module with DRM for Android and Android TV.",
    tech: "Kotlin Multiplatform · Media3",
    stores: [
      { store: "Google Play", href: play("com.maxstream") },
      { store: "Android TV", href: play("com.maxstream.tv") },
    ],
  },
  {
    name: "Erafone",
    client: "Erafone · Retail",
    icon: erafoneIcon,
    caseStudy: "erafone",
    led: true,
    role: "Launched on Google Play in 2 months, then built the AppGallery version solo.",
    tech: "Android · Kotlin",
    stores: [
      { store: "Google Play", href: play("com.erafone.android") },
      { store: "AppGallery", href: "https://appgallery.huawei.com/app/C116287773" },
    ],
  },
  {
    name: "SANFIND",
    client: "SANFIND · Fintech",
    icon: sanfindIcon,
    caseStudy: "sanfind",
    led: true,
    role: "Developed features across the app since 2024, including Midtrans installment payments, native Kotlin bridges and 16 KB compliance.",
    tech: "Flutter",
    stores: [
      { store: "Google Play", href: play("com.sanf.mobile") },
      { store: "App Store", href: "https://apps.apple.com/id/app/sanfind/id1619950050" },
    ],
  },
  {
    name: "MyTelkomsel",
    client: "Telkomsel · Telco",
    icon: telkomselIcon,
    role: "Built standardized, server-customizable UI components in a server-driven UI sprint.",
    tech: "Android · Jetpack Compose",
    stores: [{ store: "Google Play", href: play("com.telkomsel.telkomselcm") }],
  },
  {
    name: "MyMRTJ",
    client: "MRT Jakarta · Transport",
    icon: mrtjIcon,
    role: "Pay-as-you-go and Maxride subscription features over several sprints, plus UI updates for the station kiosk app.",
    tech: "Android · XML",
    stores: [{ store: "Google Play", href: play("com.mrt.jakarta") }],
  },
  {
    name: "Paragon SFM",
    client: "Paragon · Sales force",
    icon: paragonIcon,
    role: "Built the order-taking feature with offline-first support, and store visits.",
    tech: "Android · XML · Room",
    stores: [{ store: "Google Play", href: play("com.pti.acbs.sfm") }],
  },
  {
    name: "G24 Mobile",
    client: "Pegadaian Galeri 24 · Fintech",
    icon: galeri24Icon,
    role: "Helped set up the project, built reusable components and theming.",
    tech: "Android · XML",
    stores: [{ store: "Google Play", href: play("com.galeri24") }],
  },
  {
    name: "IndonesianaTV",
    client: "Indonesiana TV · Media",
    icon: indonesianaIcon,
    role: "UI changes, plus research and implementation support for offline downloads.",
    tech: "Android · XML",
    stores: [{ store: "Google Play", href: play("tv.indonesiana.indonesianatv") }],
  },
  {
    name: "JD Sports Indonesia",
    client: "JD Sports · E-commerce",
    icon: jdsportsIcon,
    role: "Worked on the profile feature.",
    tech: "Android · XML",
    stores: [{ store: "Google Play", href: play("id.jdsports.android") }],
  },
  {
    name: "EZ Trade Store",
    client: "Samsung · Retail sales",
    icon: eztradeIcon,
    role: "Worked on the login features.",
    tech: "Android · XML",
    stores: [{ store: "Google Play", href: play("com.sein.eztrade.promotor") }],
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
      "Unified scattered video player features into one reusable Media3 module with Widevine DRM for Android mobile and TV, used to stream the FIFA World Cup 2026 to 100,000+ viewers on MaxstreamTV.",
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
