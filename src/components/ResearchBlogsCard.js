import "./ResearchBlogsCard.css"
import ResearchBlogsCardData from "./ResearchBlogsCardData";
import trip1 from "../assets/fw.jpg"
import trip2 from "../assets/roseimages.jpg"
import trip3 from "../assets/SurveyBanner.jpg"


function ResearchBlogsCard (){
    return(
        <div className="rbcd">
            <h1 className="text-4xl font-extrabold leading-10 text-gray-800 text-center mb-5 uppercase pt-5" >R&D / Updates</h1>
           

            <div className="rbcdcard">
                <ResearchBlogsCardData
                image = {trip1}
                heading = "Food Waste Recyling"
                text = "The food waste recycling project aims to address the critical issue of food waste management by implementing sustainable solutions for recycling organic waste. The project is a collaboration between Agventure Consultency and Sher-e-Bangla Agricultural University. Together, we are working to develop innovative strategies and technologies to efficiently recycle food waste."
                
                />

                <ResearchBlogsCardData
                image = {trip2}
                heading = "Empowering Farmers for Sustainable Rose Farming"
                text = "Our training initiatives focus on various aspects of rose farming, including planting techniques, irrigation methods, pest and disease management, and post-harvest handling. By providing farmers with practical training sessions and workshops, we aim to enhance their expertise and enable them to produce high-quality roses consistently."
                
                />
                <ResearchBlogsCardData
                image = {trip3}
                heading = "Conducting Survey on FW"
                text = "we are dedicated to promoting sustainable practices and reducing environmental impact, particularly when it comes to food waste recycling. Recently, we conducting a comprehensive survey to gather insights and perspectives on food waste management and recycling practices within our community."
                
                />
            </div>
        </div>
    );
}

export default ResearchBlogsCard;