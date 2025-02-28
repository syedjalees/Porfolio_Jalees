import { url } from "inspector";
import { LocaleRouteNormalizer } from "next/dist/server/normalizers/locale-route-normalizer";
import { MdDescription } from "react-icons/md";

export const BaseInfo = {
  name: "Sayyed Jalees ",
  position: "Frontend Web Developer",
  description:
    "I'm a frontend developer who loves building websites that look good and work smoothly. I use HTML, CSS, and JavaScript to create responsive and easy-to-use designs. I enjoy turning ideas into real websites and always learn new tools to improve my skills. Let's work together to create your perfect website!",
  profilePic: "/images/Hero.jpg",
};

export const aboutInfo = {
  title: "Building Engaging Web Interfaces with Simplicity and Skill ",
  description:
    "I'm a frontend developer focused on creating engaging and user-friendly websites. With expertise in HTML, CSS, and JavaScript by Using NextJs, I love building responsive designs that work seamlessly across all devices. I aim to deliver websites that are both visually appealing and easy to navigate, ensuring a great user experience. I’m passionate about staying up-to-date with the latest web technologies to keep my skills sharp and deliver the best results.",
  client: "5",
  experience: "3",
  project: "3",
  webiste: "5",
};

export const projectData = [
  {
    id: 1,
    image: "/images/p1.png",
    // url == vercel link
    url: "https://giaic-portal-clone.vercel.app/",
  },
  {
    id: 2,
    image: "/images/p2.png",
    // url == vercel link
    url: "https://hackathone-2-orpin.vercel.app/",
  },
  {
    id: 3,
    image: "/images/p3.png",
    // url == vercel link
    url: "https://my-blog-henna-three.vercel.app/",
  },
  {
    id: 4,
    image: "/images/p4.png",
    // url == vercel link
    url: "https://admin-dashboard-phi-teal-60.vercel.app/sign-in",
  },
  {
    id: 5,
    image: "/images/p5.png",
    // url == vercel link
    url: "https://growthmindset-by-jalees.streamlit.app/",
  },
  {
    id: 6,
    image: "/images/p6.png",
    // url == vercel link
    url: "https://tall-aliens-camp.loca.lt/",
  },
  {
    id: 7,
    image: "/images/p7.png",
    // url == vercel link
    url: "https://porfolio-jalees.vercel.app/",
  },
  {
    id: 8,
    image: "/images/p8.png",
    // url == vercel link
    url: "https://better-symbols-push.loca.lt/",
  },
];

export const skillsData = [
  {
    id: 1,
    title: "HTML",
    image: "/images/html.svg",
    percent: "90%",
  },

  {
    id: 2,
    title: "CSS",
    image: "/images/css.svg",
    percent: "60%",
  },

  {
    id: 3,
    title: "JavaScript",
    image: "/images/js.svg",
    percent: "80%",
  },

  {
    id: 4,
    title: "TypeScript",
    image: "/images/ts.svg",
    percent: "80%",
  },

  {
    id: 5,
    title: "React",
    image: "/images/react.svg",
    percent: "50%",
  },

  {
    id: 6,
    title: "NextJS",
    image: "/images/next.svg",
    percent: "70%",
  },

  {
    id: 7,
    title: "Tailwind-CSS",
    image: "/images/tailwindcss-icon.svg",
    percent: "60%",
  },

  {
    id: 8,
    title: "Python",
    image: "/images/python.svg",
    percent: "50%",
  },

  {
    id: 9,
    title: "Data-Base",
    image: "/images/mongo.svg",
    percent: "20%",
  },
  {
    id: 10,
    title: "Java",
    image: "/images/java-icon.svg",
    percent: "40%",
  },
];

export const contactData = {
  phone: "+92-333-2682636",
  email: "sayyedjalees958@gmail.com",
  address: "Qasimabad Hyderbad",
};
