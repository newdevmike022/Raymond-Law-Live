const Videos = ({ name1, name2, link }) => {
    
    return (
        <div className="card fun-info h-100">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe title="videos" className="embed-responsive-item" width="100%" height="325" src={link} frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <h3 className="video">{name1}<br/><span className="vidTwo">{name2}</span></h3>
        </div>
    )
}

export default Videos;