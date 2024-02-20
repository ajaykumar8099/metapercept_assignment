import Header from "../Header";
import CardsSection from "../CardsSection"
import "./index.css"

const Home = () => {
    return(
        <div className="home-bg-continaer">
            <Header/>
            <div className="sub-home-bg-container">
                <div className="banner-section">
                    <h1 className="banner-heading">
                        Title 
                    </h1>
                    <p className="banner-para">
                        The metapercent provides services across the globe. we are handfullly experienced staff and good ecosystem 
                    </p>
                    <button type="button" className="banner-button">
                        Read More
                    </button>
                </div>
                <CardsSection/>
            </div>
        </div>
    )

}
export default Home