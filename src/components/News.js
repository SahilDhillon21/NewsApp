import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "",
            "title": "Whales beached in Australia are euthanized after rescue efforts fail - NPR",
            "description": "After a pod of nearly 100 pilot whales beached themselves on Tuesday, more than 50 of them died overnight. Now officials say the remaining 47 will be euthanized.",
            "url": "https://www.npr.org/2023/07/27/1190410260/whales-beached-in-australia-are-euthanized-after-rescue-efforts-fail",
            "urlToImage": "https://media.npr.org/assets/img/2023/07/26/ap23207272728946_wide-144751b81cf87df415af1aabe2d336d9ba5f5c02-s1400-c100.jpg",
            "publishedAt": "2023-07-27T04:18:43Z",
            "content": "In this photo provided by the Department of Biodiversity, Conservation and Attractions, a rescuer tends to a long-finned pilot whale, Wednesday, July 26, 2023, after nearly 100 whales beached themsel… [+1435 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Space.com"
            },
            "author": "Mike Wall",
            "title": "SpaceX scrubs record-breaking Falcon Heavy rocket launch (video) - Space.com",
            "description": "The launch team halted the countdown at T-65 seconds.",
            "url": "https://www.space.com/spacex-scrub-falcon-heavy-launch-july-26",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/KZ9vyTVWLM6Pt5BNfnApUb-1200-80.jpeg",
            "publishedAt": "2023-07-27T03:33:41Z",
            "content": "We'll have to wait at least another day to see SpaceX's powerful Falcon Heavy rocket lift off for the seventh time.\r\nThe Falcon Heavy was scheduled to launch Wednesday night (July 26) at 11:04 p.m. E… [+1924 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "U.K. jury finds Kevin Spacey not guilty of multiple sexual assault charges - NBC News",
            "description": "A jury in the U.K. found actor Kevin Spacey not guilty of nine counts relating to the sexual assault of four men between the years of 2004-2013. Spacey said ...",
            "url": "https://www.youtube.com/watch?v=0ym_e8y8l6Y",
            "urlToImage": "https://i.ytimg.com/vi/0ym_e8y8l6Y/maxresdefault.jpg",
            "publishedAt": "2023-07-27T03:30:00Z",
            "content": null
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": ", USA TODAY",
            "title": "Missing Glendale teen, Alicia Navarro, reunited with her family after four years - USA TODAY",
            "description": "Alicia Navarro, 18, was located in a small Montana town after she went missing in September 2019 from her childhood home in Glendale.",
            "url": "https://www.usatoday.com/story/news/nation/2023/07/26/alicia-navarro-found-after-four-years-missing/70474392007/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2023/07/27/USAT/fcd4cc2a-8a7e-48c6-9ba3-968568ebc41c-Alicia_Navarro.JPG?auto=webp&crop=733,413,x0,y159&format=pjpg&width=1200",
            "publishedAt": "2023-07-27T03:27:43Z",
            "content": "Missing Glendale teenager Alicia Navarro has been located in a small Montana town after vanishing without a trace four years ago, police announced Wednesday.\r\nThe former Arizona resident was found sa… [+5565 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Fox News",
            "title": "Heart attack death risk can double during heat waves, high pollution: study - New York Post ",
            "description": "Certain groups of people may have twice the risk of dying from a heart attack during heat waves and high levels of fine particulate pollution, according to a new study published in Circulation.",
            "url": "https://nypost.com/2023/07/26/heart-attack-death-risk-doubles-during-heat-waves-high-pollution-study/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/07/NYPICHPDPICT000014735997.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2023-07-27T02:01:00Z",
            "content": "Certain groups of people may have twice the risk of dying from a heart attack during heat waves and high levels of fine particulate pollution, according to a new study published in Circulation, the j… [+5056 chars]"
        }
    ]
    constructor(){
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        return (
            <div className='container my-4 text-center'>
                <h3>News --- Headlines from around the world</h3>

                
                <div className="row my-3">

                {this.state.articles.map((element)=>{
                    return <div className="col-md-4 my-2 text-center" key={element.url}>
                    <NewsItem  title={element.title.slice(0,50)+"..."} description={element.description.slice(0,100)+"..."} imageURL={element.urlToImage} newsURL={element.url} />
                    </div>
                })}
                    
                    
                </div>
                
            </div>


        )
    }
}

export default News