import React from "react"

export default function NewsItem(props) {
    // let { title , description } = props

    return (
        <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="/news-details" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}