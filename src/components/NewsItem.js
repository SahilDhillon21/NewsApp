import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageURL, newsURL} = this.props;
        return (
            <div>

                <div className="card" style={{width: "18rem"}}>
                    <img src={imageURL?imageURL:"https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"} className="card-img-top article-image" alt="news-image"/>
                        <div className="card-body">
                            <h5 classNameName="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsURL} target='_blank' newsURL="todo" className="btn btn-sm btn-warning">Continue reading</a>
                        </div>
                </div>

            </div>
        )
    }
}

export default NewsItem