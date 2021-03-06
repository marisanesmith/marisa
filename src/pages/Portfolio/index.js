import React from 'react';
import "./style.css";
import PortfolioCard from '../../components/PortfolioCard';
import Crypto from '../../assets/crypto-chat.png';


const PortfolioProjects = [
    {
        image: "https://raw.githubusercontent.com/marisanesmith/Weather_Dashboard/main/assets/weather-dash.png",
        title: "Weather Dashboard",
        description: "This weather dashboard allows users to enter in a city of their choice to gather the information about the current weather, as well as, the 5 day weather forecast.",
        live_url: "https://marisanesmith.github.io/Weather_Dashboard/",
        buttonName: "Discover Weather"
    },
    {
        image: "https://raw.githubusercontent.com/marisanesmith/Trivia_Game/main/assets/images/start-page.png",
        title: "Trivia Game",
        description: "This fun and interactive trivia game challenges users to see if they know some JavaScript basics. Give it a go and see how much you know!",
        live_url: "https://marisanesmith.github.io/Trivia_Game/",
        buttonName: "Play the Game"
    },
    {
        image: "../../assets/crypto-chat.png",
        title: "Crypto Chat",
        description: "For our second project our team built a full stack program which allows users to view the latest cryptocurrency trends while also creating a space where they can engage and 'chat' with others about the current market.",
        live_url: "https://radiant-ocean-90430.herokuapp.com/",
        buttonName: "View Crypto Market"
    },
    {
        image: "https://raw.githubusercontent.com/marisanesmith/employee-directory-react/main/employeedirectory/public/images/employee.png",
        title: "Employee Directory",
        description: "Using a random user API I created an employee directory where employers can search through their database to find an employee. They can also search by name and list the names in alphabetical order",
        live_url: "https://marisanesmith.github.io/employee-directory-react/",
        buttonName: "Search for an Employee"
    },
    {
        image: "https://raw.githubusercontent.com/marisanesmith/fitness_tracker/main/public/images/fitness-tracker2.png",
        title: "Fitness Tracker",
        description: "A fully functional fitness tracker where users can enter their daily workouts",
        live_url: "https://whispering-escarpment-18429.herokuapp.com/?id=607867796dc8240015dd3ec1",
        buttonName: "Track Your Fitness"
    },
    {
        image: "https://raw.githubusercontent.com/marisanesmith/Daily_Planner/main/assets/images/planner.png",
        title: "Daily Planner",
        description: "A daily planner application where users can enter in upcoming events and keep track of all the things they have to do",
        live_url: "https://marisanesmith.github.io/Daily_Planner/",
        buttonName: "Enter Your Events"
    },
]


function Portfolio() {
    return (
        <main>
            <div className="mb-5"><h2>My Latest Projects</h2></div>
            <div className="container-fluid p-4">
                <div className="row">
                    {PortfolioProjects.map((item) => (
                    <div className="card-body">
                    <div className="col-6">
                        <PortfolioCard project={item} />
                    </div>
                    </div>
                    ))}  
                </div>
            </div>
        </main>

    )
}

export default Portfolio