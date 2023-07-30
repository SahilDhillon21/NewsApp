import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = []
    constructor(){
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=85bbe63854704a5aa82b9f6654d2840f";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    }

    handlePrevious = async () =>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=85bbe63854704a5aa82b9f6654d2840f&page=${this.state.page-1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles})
        
        this.setState({
            page: this.page-1,
            articles: parsedData.articles
        })
    }

    handleNext = async () =>{
        
        if (this.state.page+1 > Math.ceil(this.state.totalResults/20)){
            
        }else{
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=85bbe63854704a5aa82b9f6654d2840f&page=${this.state.page+1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({articles: parsedData.articles})
            
            this.setState({
                page: this.page+1,
                articles: parsedData.articles
            })
        }
    }

    render() {
        return (
            <div className='container my-4 text-center'>
                <h3>News --- Headlines from around the world</h3>

                
                <div className="row my-3">

                {this.state.articles.map((element)=>{
                    return <div className="col-md-4 my-2 text-center" key={element.url}>
                    <NewsItem  title={element.title?element.title.slice(0,50)+"...":""} description={element.description?element.description.slice(0,100)+"...":""} imageURL={element.urlToImage} newsURL={element.url} />
                    </div>
                })}
                    
                    
                </div>
                <div className="container d-flex justify-content-between">
                    <button hidden={this.state.page<=1} type='button' className="btn btn-dark" onClick={this.handlePrevious}>Previous</button>
                    <button type='button' className="btn btn-dark" onClick={this.handleNext}>Next</button>
                </div>
                
            </div>


        )
    }
}

export default News