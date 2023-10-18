import MyCard from "./components/MyCard";
import NavBar from "./components/NavBar";
import { useState } from "react";
import "./App.css";

const skillsList = [
  {
    name: "HTML",
    imgSrc: "src/assets/images/html-logo.png",
    description:
      "HTML is a markup language used to create interactive web pages. It is used to create interactive web",
    stars: 4,
  },
  {
    name: "CSS",
    imgSrc: "src/assets/images/CSS-logo.jpg",
    description:
      "CSS is a style sheet language used to style web pages. It is used to style web pages",
    stars: 3,
  },
  {
    name: "JavaScript",
    imgSrc: "src/assets/images/JS-logo.png",
    description:
      "JavaScript is a high-level, interpreted, object-oriented programming language. It is used to create interactive web pages",
    stars: 2,
  },
  {
    name: "ReactJS",
    imgSrc: "src/assets/images/React-logo.png",
    description: "ReactJS is a JavaScript library for building user interfaces",
    stars: 2,
  },
];

function App() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  const handleSkillChange = (index) => {
    setCurrentSkillIndex(index);
  };
  return (
    <div className="Container">
      <div className="card-container">
        <MyCard
          name={skillsList[currentSkillIndex].name}
          imgSrc={skillsList[currentSkillIndex].imgSrc}
          description={skillsList[currentSkillIndex].description}
          stars={skillsList[currentSkillIndex].stars}
        />
        <NavBar skillsList={skillsList} onSkillChange={handleSkillChange} />
      </div>
    </div>
  );
}

export default App;
