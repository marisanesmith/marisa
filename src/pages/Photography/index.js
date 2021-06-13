import React from 'react';
import PhotoCard from "../../components/PhotoCard";
// import philippines from "../../assets/EntalulaIsland.jpg";
// import Cambodia from "../../assets/cambodia.jpg";


const PhotoImg = [
    {
        image: "https://res.cloudinary.com/dl5xn7tvg/image/upload/v1623617550/EntalulaIsland_vv240i.jpg",
        title: "Philippines",
        alt: "Entalula island in the Philippines with turqouise water and a small stretch of white sand beach that is surrounded by palm trees."
    },
    {
        image: "https://res.cloudinary.com/dl5xn7tvg/image/upload/c_scale,h_900/v1623617861/sunset-lily-beach-resort-bungalow_npp7ty.jpg",
        title: "Maldives",
        alt: "Over the water villas on stilts in the Maldives with an orange and pink sky during sunset"
    },
    {
        image: "/images/myanmar.jpg",
        title: "Myanmar",
        alt: "Girl sitting on a temple covered in bricks with hot air balloons in the sky"
    },
    {
        image: "../public/images/norway.jpg",
        title: "Norway",
        alt: "Red fishing hut houses on rocks by the water with a large mountain in the background"
    },
    {
        image: "./images/bali.jpg",
        title: "Bali",
        alt: "Two people walking along a path in Bali surrounded by palm trees"
    },
    {
        image: "./images/maldive.jpg",
        title: "Maldives",
        alt: "Two people laying on a sandbank surrounded by blue water in the Maldives with a boat nearby"
    },
    {
        image: "./images/temple.jpg",
        title: "Bali",
        alt: "A pink sky during sunset with pink flowers in the foreground and a temple in the background"
    },
    {
        image: "./images/vivian.jpg",
        title: "Philippines",
        alt: "A girl sitting on a beach with palm trees and huts behind her"
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