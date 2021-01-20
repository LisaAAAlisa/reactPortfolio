import React from 'react'
import projOne from "./assets/images/pr1.png"
import projTwo from "./assets/images/pw.png"
import projThree from "./assets/images/wa.png"
import projFour from "./assets/images/screen.png"
import projFive from "./assets/images/lexi.png"
const portfolio = () => {
    return (
        <div>
            <div class="container">
            <div class="row">
                <h1 class="header">My Portfolio</h1>
            </div>
            <div class="row">
                <div class="col-xs-4 mx-auto">
                    <a href="https://lisaaaalisa.github.io/project1/">
                    <img class="img-fluid px-1 py-1 mx-1 my-1 border" src={projOne}
                        alt="project 1"/>
                        <p class = "with-image">Project 1</p>
                        </a></div>
                        
                <div class="col-xs-4 mx-auto">
                    <a href="https://lisaaaalisa.github.io/randomPasswordGenerator/">
                    <img class="img-fluid px-1 py-1 mx-1 my-1 border" src={projTwo}
                        alt="image2"/>
                        <p class = "with-image">Random Password Generator</p>
                        </a></div>
                <div class=" col-xs-4 mx-auto">
                    <a href="https://lisaaaalisa.github.io/weather-app/">
                    <img class="img-fluid px-1 py-1 mx-1 my-1 border" src={projThree}
                        alt="image3"/>
                        <p class = "with-image">Day Planner</p>
                        </a></div>

            </div>
            <div class="row">
                <div class="col-xs-4 mx-auto">
                    <a href="https://lisaaaalisa.github.io/burger/">
                    <img class="img-fluid px-1 py-1 mx-1 my-1 border" src={projFour}
                        alt="image4"/>
                        <p class = "with-image">Eat-Da-Burger! GitHub Repo</p></a></div>

                <div class="col-xs-4 mx-auto">
                    <a href="https://floating-thicket-44314.herokuapp.com/">
                    <img class="img-fluid px-1 py-1 mx-1 my-1 border" src={projFive}
                    alt="image5"/></a>
                    <a href="https://github.com/JoseSachango/The-3AM-Crew/" alt="GitHub repo"><p class = "with-image">Project 2- A Chat App</p></a></div>

                <div class="col-xs-4 mx-auto">
                    <img class="img-fluid px-1 py-1 mx-1 my-1 border" src="https://via.placeholder.com/250x200"
                        alt="image6"/></div>
            </div>
        </div>
        </div>
    )
}

export default portfolio
