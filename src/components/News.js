import React from "react"
import NewsItem from "./NewsItem"

export default function News() {
    return (
        <div className=" container my-3">
            <h2>DailyNews - Top Headlins</h2>
            {/* API KEY => d11eb5861eb747e58afc58bcea53b384 */}
            <div className="row">
                <div className="col-md-4">
                    <NewsItem title="My Title" description="description" />
                </div>
                <div className="col-md-4">
                    <NewsItem title="My Title" description="description" />
                </div>
                <div className="col-md-4">
                    <NewsItem title="My Title" description="description" />
                </div>
            </div>
        </div>
    )
}