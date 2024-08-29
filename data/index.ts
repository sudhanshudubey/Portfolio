import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/Screen 3.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Design stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for Designing.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently Making a Podcast Platform in Next.js",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Showreel",
    des: "Creative edits using Blender, ComfyUI, and Premiere Pro, showcasing my expertise in animation and design.",
    img: "/Showreel resize.png",
    iconLists: [
      "/512px-Logo_Blender.svg.png",
      "/adobe-premiere-pro-icon.svg",
      "/adobe-after-effects.svg",
      "/Adobe_Photoshop_CC_icon.svg",
      "/icons8-cinema-4d-480.svg",
    ],
    link: "https://drive.google.com/file/d/1Kc4OwhgGCNkjbx2infV0izZrPkfhy8Qe/view?usp=sharing",
  },
  {
    id: 2,
    title: "Last Of Us ",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/Last of us.png",
    iconLists: ["/adobe-premiere-pro-icon.svg"],
    link: "https://ui.yoom.com",
  },
  {
    id: 3,
    title: "Blender Work",
    des: "VFX logo reveal created in Blender, refined with After Effects and Premiere Pro for crisp visuals and cinematic effects.",
    img: "/Final Work Resize.png",
    iconLists: [
      "/512px-Logo_Blender.svg.png",
      "/adobe-after-effects.svg",
      "/adobe-premiere-pro-icon.svg",
      "/Adobe_Photoshop_CC_icon.svg",
    ],
    link: "https://drive.google.com/file/d/1htu2pADzAkmACmI5NlZYIEqq_b1Xuu9u/view?usp=drive_link",
  },
  {
    id: 4,
    title: "Animation Of Ford vs Ferrari",
    des: "An animated reimagining of the epic Ford vs Ferrari showdown, brought to life with AnimateDiff.",
    img: "/Ford v Ferrari.png",
    iconLists: [],
    link: "https://drive.google.com/file/d/1I2qeW4rWW2pYJP1qYM9t2btBaKuARBvR/view?usp=sharing",
  },
];

export const testimonials = [
  {
    quote:
      "Employing music designing skills to create original, engaging soundtracks and audio compositions. Crafting immersive audio experiences that enhance multimedia projects and evoke emotional responses. Utilizing various tools and techniques to blend melodies, rhythms, and effects seamlessly into content.",
    name: "Music Designing",
    title: "Udio , FL Studio",
  },
  {
    quote:
      "Integrating game development skills to design captivating, immersive experiences. Utilizing interactive elements to boost user engagement and foster deeper connections with content. Enhancing creative projects with innovative gameplay mechanics.",
    name: "Game Development",
    title: "Unreal Engine , Unity",
  },
  {
    quote:
      "Applying web development skills to build dynamic, user-friendly websites and applications. Crafting responsive designs that enhance usability and engagement across devices. Leveraging coding expertise to create seamless digital experiences and optimize web performance.",
    name: "Web Dev",
    title: "React , web3 , Webflow",
  },
  {
    quote:
      "Mastering Figma to create visually stunning and user-friendly interfaces with precision. Designing interactive prototypes and collaborative design systems that streamline workflows. Leveraging Figma’s features to enhance user experience and ensure cohesive, effective design solutions.",
    name: "UI UX",
    title: "Figma , wireframe.cc , origami studio",
  },
  {
    quote:
      "Utilizing Blender to craft detailed 3D models, animations, and visual effects with high precision. Leveraging advanced features for realistic rendering and creative visual storytelling. Enhancing projects with intricate textures, lighting, and dynamic animations to bring concepts to life.",
    name: "VFX",
    title: "Blender , cinema4d , After Effects",
  },
];

export const companies = [
  {
    id: 1,
    name: "FL Studio",
    img: "/icons8-fl-studio-480.png",
    nameImg: "/Frame Fl studio.svg",
  },
  {
    id: 2,
    name: "Figma",
    img: "/icons8-figma-480.png",
    nameImg: "/Frame Figma.svg",
  },
  {
    id: 3,
    name: "Unreal Engine",
    img: "/icons8-unreal-engine-500.png",
    nameImg: "/Frame UE.svg",
  },
  {
    id: 4,
    name: "Blender",
    img: "/icons8-blender-480.svg",
    nameImg: "/Frame Blender.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/Frame docker.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Web Developer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Business Growth through Multimedia Production",
    desc: "Enhancing business growth by crafting compelling videos with Blender, Adobe, and AI-driven content, combining creativity and technology for impactful results.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "AI-Powered Video Creation and Editing",
    desc: "Specializing in AI-driven video creation and editing, enhancing visual storytelling and utilizing advanced technology to produce engaging content.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/sudhanshudubey",
  },
  {
    id: 2,
    img: "/icons8-gmail.svg",
    link: "https://mail.google.com/mail/u/0/#inbox",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sudhanshu-dubey-8a2296186/",
  },
];
