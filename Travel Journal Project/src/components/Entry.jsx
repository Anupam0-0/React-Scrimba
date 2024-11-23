export default function Entry(props) {

    // NOW WE PASS THE PROPS TO THE ENTRY COMPONENT
    // WE CAN ACCESS THE PROPS IN THE COMPONENT
    // WE CAN USE THE PROPS TO RENDER THE COMPONENT IN A DYNAMIC WAY
    // ~.entry.~ IS THE PARENT CONTAINER FOR THE COMPONENT

    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src = {props.entry.img.src}
                    alt= {props.entry.img.alt}
                />
            </div>
            <div className="info-container">
                {/* <img 
                    className="marker"
                    src="../images/marker.png" 
                    alt="map marker icon"
                /> */}
                <span className="country">{props.entry.country}</span>
                <a href= {props.entry.googleMapsLink} >View on Google Maps</a>
                <h2 className="entry-title"> {props.entry.title} </h2>
                <p className="trip-dates"> {props.entry.dates} </p>
                <p className="entry-text"> {props.entry.text} </p>
            </div>
            
        </article>
    )
}