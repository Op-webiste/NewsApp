import React from 'react'

export default function Newsitem(props) {
    return (
        <div>
            <div className="card">
                <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                  {props.source}
                </span>
                <img src={!props.imageUrl ? "https://www.investopedia.com/thmb/of7GxD0Ti6G9uQMouqRKb30lGbo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-490597708-797a5797a32944889a638d9fab821e9a.jpg" : props.imageUrl} className="card-img-top" alt="Not loaded" />
                <div className={`card-body`}>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description? props.description : "The fixed-income market’s unblemished record of striking fear into the hearts of equity traders is in danger."}</p>
                    <p>Published By {props.author} on {new Date(props.date).toGMTString()}</p>
                    <a href={props.newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}
