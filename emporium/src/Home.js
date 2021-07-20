import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__conatiner">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Events/prime_day/Toofan/1500x600_EN_JPN._CB664643376_.jpg"></img>
            </div>

            <div className="home__row">
                <Product/>
                {/*product */}
            </div>

            <div className="home__row">
                {/*product*/}
                {/*product*/}
                {/*product*/}
            </div>

            <div className="home__row">
                {/*product*/}
            </div>
        </div>
    )
}

export default Home
