import React from "react";
import "./App.css";
import bgPentagon from "./images/bg-pentagon.svg";
import bgTriangle from "./images/bg-triangle.svg";
import iconClose from "./images/icon-close.svg";
import iconLizard from "./images/icon-lizard.svg";
import iconPaper from "./images/icon-paper.svg";
import iconRock from "./images/icon-rock.svg";
import iconScissors from "./images/icon-scissors.svg";
import iconSpock from "./images/icon-spock.svg";
import imageRulesBonus from "./images/image-rules-bonus.svg";
import imageRules from "./images/image-rules.svg";
import logoBonus from "./images/logo-bonus.svg";
import logo from "./images/logo.svg";
function App() {
  return (
    <div className="App">
      <img src={bgPentagon} />
      <img src={bgTriangle} />
      <img src={iconClose} />
      <img src={iconLizard} />
      <img src={iconPaper} />
      <img src={iconRock} />
      <img src={iconScissors} />
      <img src={iconSpock} />
      <img src={imageRulesBonus} />
      <img src={imageRules} />
      <img src={logoBonus} />
      <img src={logo} />
    </div>
  );
}

export default App;
