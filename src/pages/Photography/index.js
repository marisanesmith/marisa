import React from 'react';
import PhotoCard from "../../components/PhotoCard";


const PhotoImg = [
    {
        image: "https://res.cloudinary.com/dl5xn7tvg/image/upload/v1624068261/EntalulaIsland_kkqsdo.jpg",
        title: "Philippines",
        alt: "Entalula island in the Philippines with turqouise water and a small stretch of white sand beach that is surrounded by palm trees."
    },
    {
        image: "https://res.cloudinary.com/dl5xn7tvg/image/upload/v1624068483/DJI_0354_q6v9my.jpg",
        title: "Indonesia",
        alt: "A colorful, rainbow village in Indonesia as seen from the sky"
    },
    {
        image: "https://res.cloudinary.com/dl5xn7tvg/image/upload/v1624068158/DSC07160_epphxg.jpg",
        title: "Myanmar",
        alt: "Girl sitting on a temple covered in bricks with hot air balloons in the sky"
    },
    {
        image: "https://res.cloudinary.com/dl5xn7tvg/image/upload/v1624065044/DJI_0076_dmn0xn.jpg",
        title: "Philippines",
        alt: "Girl laying on a bamboo raft in the middle of a large waterfall in the Philippines"
    },
    {
        image: "https://res.cloudinary.com/dl5xn7tvg/image/upload/v1624064313/DSC09791_japaeo.jpg",
        title: "New York City",
        alt: "Girl sitting on the Brooklyn Bridge at sunset in New York City"
    },
    {
        image: "https://res.cloudinary.com/dl5xn7tvg/image/upload/v1624064848/DSC05769_kh2zvm.jpg",
        title: "Malaysia",
        alt: "A girl sitting in front of a large, red temple that is built into a limestone cliff in Malaysia"
    },
    {
        image: "https://res.cloudinary.com/dl5xn7tvg/image/upload/v1624067938/DSC02713_sfjs4d.jpg",
        title: "India",
        alt: "Girl running through a colorful hallway in Jaipur, India"
    },
    {
        image: "https://res.cloudinary.com/dl5xn7tvg/image/upload/v1624065265/sand-bank-maldives_itsn6i.jpg",
        title: "Maldives",
        alt: "A crescent shaped sandbank surrounded by turqouise and dark blue water in the Maldives"
    },
]

function Photography() {
    
    return (
        <main>
            <div id="portfolio" class="container p-5 mb-5 bg-white">
                <h2 className="mb-5"> My Photography </h2>
                <hr/>
                <div class="row">
                {PhotoImg.map((item) => (
                    <div className="card-body"> 
                    <div className="col-3">    
                        <PhotoCard project={item} />
                    </div>
                    </div>
                    ))} 
                </div>
                
            </div>
        </main>
    )
}

export default Photography