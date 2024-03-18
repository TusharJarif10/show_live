import "./ResearchBlogsCard.css"

function ResearchBlogsCardData (props) {
    return(
        <div className="r-card">
            <div className="r-image">
                <img src={props.image} alt="" />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text} </p>
        </div>
    )

}

export default ResearchBlogsCardData;