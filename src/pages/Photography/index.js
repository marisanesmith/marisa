import React from 'react';
import PhotoCard from "../../components/PhotoCard";
// import philippines from "../../assets/EntalulaIsland.jpg";
// import Cambodia from "../../assets/cambodia.jpg";


const PhotoImg = [
    {
        image: "https://res.cloudinary.com/dl5xn7tvg/image/upload/v1624062223/entalula-island_lahwdp.jpg",
        title: "Philippines",
        alt: "Entalula island in the Philippines with turqouise water and a small stretch of white sand beach that is surrounded by palm trees."
    },
    {
        image: "https://res.cloudinary.com/dl5xn7tvg/image/upload/v1624062390/maldives-2_kqfo1t.jpg",
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
        image: "https://res.cloudinary.com/dl5xn7tvg/image/upload/v1624064313/DSC09791_japaeo.jpg",
        title: "New York City",
        alt: "Girl sitting on the Brooklyn Bridge at sunset in New York City"
    },
    {
        image: "./images/maldive.jpg",
        title: "Maldives",
        alt: "Two people laying on a sandbank surrounded by blue water in the Maldives with a boat nearby"
    },
    {
        image: "https://res.cloudinary.com/dl5xn7tvg/image/upload/v1624063040/santorini-2_pfjg6w.jpg",
        title: "Greece",
        alt: "Blue domed churches on the edge of the caldera in Santorini, Greece"
    },
    {
        image: "https://res.cloudinary.com/dl5xn7tvg/image/upload/v1624062135/twin-lagoon_ykxqe7.jpg",
        title: "Philippines",
        alt: "A drone shot of large limestone cliffs surrounded by turquoise and dark blue water"
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