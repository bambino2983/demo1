import React from 'react'
import "./Home.css"
import Card from "./Card"

function Home() {
    return (
        <div className="home">
{/*             <img
                className="home__image"
                src="https://firebasestorage.googleapis.com/v0/b/zeus-4da70.appspot.com/o/loencontre%2Fherohandyman.jpg?alt=media&token=f705cb56-f701-42df-95b6-47c8fd3e2cbd"
                alt=""
            />
 */}
            <div className="home__row">
                <Card
                    id="1"
                    title="Felipe Diseños Gypsum"
                    price={12.00}
                    rating={4}
                    image="https://firebasestorage.googleapis.com/v0/b/zeus-4da70.appspot.com/o/loencontre%2Fhandy1.jpg?alt=media&token=3c1429a3-def7-48ea-9d9a-4d1f6246b520"
                />
                <Card
                    id="2"
                    title="Felipe Diseños Gypsum"
                    price={12.00}
                    rating={4}
                    image="https://firebasestorage.googleapis.com/v0/b/zeus-4da70.appspot.com/o/loencontre%2Fhandy1.jpg?alt=media&token=3c1429a3-def7-48ea-9d9a-4d1f6246b520"
                />
                <Card
                    id="3"
                    title="Felipe Diseños Gypsum"
                    price={12.00}
                    rating={4}
                    image="https://firebasestorage.googleapis.com/v0/b/zeus-4da70.appspot.com/o/loencontre%2Fhandy1.jpg?alt=media&token=3c1429a3-def7-48ea-9d9a-4d1f6246b520"
                />
            </div>

        </div>


    )
}

export default Home
