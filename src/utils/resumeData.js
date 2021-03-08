import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import SettingsEthernetIcon from "@material-ui/icons/SettingsEthernet";
import AndroidIcon from "@material-ui/icons/Android";
import LanguageIcon from "@material-ui/icons/Language";
import AirplayIcon from "@material-ui/icons/Airplay";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import pstack from "../assets/images/pstack.jpg";
import pythonData from "../assets/certificate/pythoncert.jpg";
import pythonUdemy from "../assets/certificate/pythonudemy.jpg";

import PinterestIcon from "@material-ui/icons/Pinterest";
const resumeData = {
  name: "Sanjeev Das",
  title: "Full Stack Developer",
  birdthdate: "20th July 1996",
  email: "memyselfsd11@gmail.com",
  address: "KTM Nepal",
  phone: "9818192165",
  about_me:
    "I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software/Programs  ranging from individuals and small-businesses all the way to large enterprise corporations :p.I Have interest in Fullstack devlopment and AI/machine Learning. \n\n What would you do if you had a software expert available at your fingertips?",
  social: {
    Facebook: {
      link: "https://www.facebook.com/sanzeevd",
      text: "SanzeevD",
      icon: <FacebookIcon />,
    },
    Github: {
      link: "https://github.com/sanjeevsd",
      text: "MyGitHub",
      icon: <GitHubIcon />,
    },
    Instagram: {
      link: "https://www.facebook.com/sanzeevd",
      text: "MyInstagram",
      icon: <InstagramIcon />,
    },
  },
  education: [
    {
      title: "SLC :NJSN",
      date: "2069 Batch",
      description: "Distinction with 82.75%",
    },
    {
      title: "+2 High School :Ambition Academy",
      date: "2071/2072 Batch",
      description: "First Division with 69.2%",
    },
    {
      title: "BE Computer Science :KEC",
      date: "2073 Batch -> present Running",
      description: "Currently Studying",
    },
  ],
  projects: [
    {
      title: "EClass (College Minor Porject)",
      link: "https://github.com/Sanjeevsd/eCLASS",
      description:
        "Team communications, information and discussion forum recommending app.",
    },
    {
      title: "Nepali character Recognition",
      link: "https://github.com/Sanjeevsd/Nepali-CharacterRecognization",
      description:
        "System which recognizes the respective Nepali character using CNN model",
    },
    {
      title: "Pstack (College Major Project)",
      link: "https://github.com/Sanjeevsd/pstack",
      description:
        "Project Recommendation system using K-means Algorithm based on users interests.",
    },
  ],
  services: [
    {
      title: "Front End",
      description: "Have knwoledge in Front End development",
      icon: <AirplayIcon />,
    },
    {
      title: "Android App",
      description: "Android app development using Kotlin and android sdk",
      icon: <AndroidIcon />,
    },
    {
      title: "Backend End",
      description: "Backend Development using Python scripts(Django)",
      icon: <SettingsEthernetIcon />,
    },
    {
      title: "AI/ML",
      description:
        "Basic AI and ML system development (Image Processing and NLP)",
      icon: <WbIncandescentIcon />,
    },
  ],
  skills: [
    {
      title: "Front-End",
      description: ["HTML", "CSS", "JavaScript", "Bootstrap", "ReactJs"],
    },
    {
      title: "Back-End",
      description: ["Python", "Django", "Kotlin", "C++"],
    },
    {
      title: "Database",
      description: ["Firebase", "mySQL", "MongoDB"],
    },
    {
      title: "Version Control",
      description: ["Git", "GitHub", "BitBucket"],
    },
  ],
  portfolio: [
    {
      tag: "Python",
      image: pstack,
      title: "Project Stack",
      caption: "Project Recommendation System using K-means clustering",
      description:
        "Students want to choose an interesting yet unique project. Selecting a project that falls under their area of interest and suits personal/team skill-set is difficult. And for the projects they choose to work on, it is difficult to find references and guidelines. As a solution, this project is able to identify popular topics worked on by many students, and highlight the most unique projects that have been submitted over the years. Working on the projects on which we have some experience in, will not only reduce our work but also make working fun. This project helps in storing all project’s documents or reports in a place and also search projects based on one’s interest making it easy to choose a project. Having some references for projects we want to work on always helps us create a baseline so we can start working",
      links: [
        { link: "https://github.com/Sanjeevsd/pstack/", icon: <GitHubIcon /> },
        { link: "http://pstack.herokuapp.com/", icon: <PinterestIcon /> },
      ],
    },
    {
      tag: "Android",
      image:
        "https://scontent.fktm8-1.fna.fbcdn.net/v/t1.15752-9/81154720_569110447264160_614984255306465280_n.png?_nc_cat=100&ccb=1-3&_nc_sid=ae9488&_nc_ohc=XD0rE6TiXNoAX8AdTX4&_nc_ht=scontent.fktm8-1.fna&oh=093c2f256c425b9352a5ab483064bd2a&oe=606C76B7",
      title: "EClass",
      caption:
        "Android application for students to track their class routine, notices assignments in realtime",
      description:
        "The android app was build using kotlin language, nodejs script for push notification, firebase database for realtime database operations. The app contains Discussion forum using cosine simalarity and tf algorithm.It helps to recommend preffered topics of discussions to the users.",
      links: [
        { link: "https://github.com/Sanjeevsd/eCLASS", icon: <GitHubIcon /> },
        { link: "http://eclassweb.herokuapp.com", icon: <LanguageIcon /> },
      ],
    },
    {
      tag: "Python",
      image:
        "https://github.com/Sanjeevsd/Nepali-Character-Recognization/blob/master/screenshots/ka.png?raw=true",
      title: "Nepali-Character-Recognizatio",
      caption:
        "CNN model to recognize Handwritten devnagari characters using DHCD dataset",
      description:
        "CNN model to recognize Nepali characters Built Using DHCD_Dataset from ** datasets and CNN model to recognize Handwritten devnagari characters. The data set contains 46 characters(46 class) with each having 1700 train and 300test data. The CNN model is bult using relu and softmax activation functions.The input shape is 32*32( same as the size of train datasets).Model is compiled using 'adam' optimizer and only one etrice (accuracy). The datasets were fed to the model by using imageGenerator and then training was done with 3epoch, each epoch is of 1500steps per epoch and validation steps of 12.(took 30min i5-5th gen 8gb ddr3lram). The resulting accuracy is 93.75%",
      links: [
        {
          link: "https://github.com/Sanjeevsd/Nepali-Character-Recognization",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "Python",
      image:
        "https://github.com/Sanjeevsd/yolo-with-django/raw/master/screenshots/yolohome.png",
      title: "YOLO implementation with django",
      caption:
        "Multi oject detection in realtime using webcam implemented in django web framework.",
      description:
        "The django contains webcamera function which opens webcam and the video is fed to yolo model. The yolo model uses neural network to divide the video into images then to small boundary boxes and predicts the class object. The boundary boxes is then combined with the image and label.All the images are sent to django in form of BYTES, the bytes are automatically converted in video and streamed in new Window of webbrowser. My laptop webcam doesnot work so i used a cheap 0.3 mp webcam to work with.Manjaro linux gives new video id to the webcam everytime it is plugged, so have added a simple loop to check the video id, which runs in any system wiht any video id of range (0-9)",
      links: [
        {
          link: "https://github.com/Sanjeevsd/yolo-with-django",
          icon: <GitHubIcon />,
        },
      ],
    },
  ],

  certificate: [
    {
      tag: "Python",
      image: pythonData,
      title: "Data Camp Intermediate Python ",
      caption: "Certification of intermediate Python course from datacamp.",
      description: "Certification of intermediate Python course from datacamp.",
      links: [{ link: "https://www.datacamp.com/", icon: <LanguageIcon /> }],
    },
    {
      tag: "Python",
      image: pythonUdemy,
      title: "Automate Booring Stuff with Python",
      caption:
        "Certification of completion of Automate Booring stuff with python course by Al Sweigart",
      description:
        "Certification of completion of Automate Booring stuff with python course by Al Sweigart",
      links: [
        {
          link: "https://www.udemy.com/course/automate/",
          icon: <LanguageIcon />,
        },
      ],
    },
  ],
};
export default resumeData;
