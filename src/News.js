// //Type rce for react class based component
// import React, { Component } from 'react'
// import NewsItem from './NewsItem'
// import Spinner from './Spinner';
// //impt for import proptypes
// import PropTypes from 'prop-types'
// import InfiniteScroll from 'react-infinite-scroll-component';

// export class News extends Component {
//   static defaultProps = {
//     country : 'in',
//     pageSize: 9,
//     category: 'general',
//   }
//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string, 
//   }
//   capitalizeFirstLetter = (string) =>{
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }
//   constructor (props){
//     super(props);
//     console.log("Hello I am A Constructor from news component.");
//     this.state={
//       articles: [], //If there are any intial articles , u can write like , articles: this.articles
//       loading: true, //this is used to stop spinning when the page is loaded.
//       page:1,
//       totalResults:0,
//     }
//     document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
//   }
//   async updateNews(){
//     this.props.setProgress(10);
//     const url  =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=71a173d67a104c55bd15041a69c3c1e5&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     this.setState({loading:true});
//     let data = await fetch(url); //await means promise
//     this.props.setProgress(20);
//     let parsedData = await data.json();
//     this.props.setProgress(50);
//     console.log(parsedData);
//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false
//     });
//     this.props.setProgress(100);
//   }
//   //An async function can wait inside its body to resolve some promises.
//   async componentDidMount(){ //This will run after render running is done
//     console.log("cdm");
//     // let url  =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=71a173d67a104c55bd15041a69c3c1e5&page=1&pageSize=${this.props.pageSize}`;
//     // this.setState({loading:true});
//     // let data = await fetch(url); //await means promise
//     // let parsedData = await data.json();
//     // console.log(parsedData);
//     // this.setState({
//     //   articles: parsedData.articles,
//     //   totalResults: parsedData.totalResults,
//     //   loading: false
//     // });
//     this.updateNews();
//   }
  
//   handlePrevClick = async()=>{
//     console.log("Prev");
//     // let url  =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=71a173d67a104c55bd15041a69c3c1e5&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
//     // this.setState({loading:true});
//     // let data = await fetch(url); //await means promise
//     // let parsedData = await data.json();
//     // console.log(parsedData);
//     // this.setState({
//     //   page: this.state.page-1,
//     //   articles: parsedData.articles,
//     //   loading: false
//     // });
//     this.setState({
//       page: this.state.page - 1,
//     }, () => this.updateNews());
//   }
//   handleNextClick = async()=>{
//     console.log("Next");
//     // if(this.state.page +1 > Math.ceil((this.state.totalResults/this.props.pageSize))){ //As this.props.pageSize are the no.of news in one page

//     // }
//     // else{
//     //   let url  =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=71a173d67a104c55bd15041a69c3c1e5&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
//     //   this.setState({loading:true});
//     //   let data = await fetch(url); //await means promise
//     //   let parsedData = await data.json();
//     //   console.log(parsedData);
//     //   this.setState({
//     //     page: this.state.page+1,
//     //     articles: parsedData.articles,
//     //     loading: false
//     //   });
//     // }
//     this.setState({
//       page: this.state.page + 1,
//     }, () => this.updateNews());
//   }
  
//   fetchMoreData = async () => {
//     this.setState({ page: this.state.page + 1 }, async () => { //Heree  setState is asynchronous. To avoid this, you should use the updated state in the fetch call directly after incrementing the page, so u wont get repeated articles.
//       const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//       this.setState({ loading: true });
//       let data = await fetch(url);
//       let parsedData = await data.json();
//       this.setState({
//         articles: this.state.articles.concat(parsedData.articles),
//         totalResults: parsedData.totalResults,
//         loading: false
//       });
//     });
//   }
//   render() {
//     console.log("render");
//     return (
//       // <div className="container my-3">
//       //   <h1 className="text-center" style={{ margin: '35px 0px' }} >News Monkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
//       //   {this.state.loading && <Spinner/>}
//       //   <div className="row">
//       //     {!this.state.loading && this.state.articles.map((element)=>{
//       //       return (<div className="col-md-4" key={element.url}>
//       //         <NewsItem title={element.title ? element.title:""} description={element.description ? element.description: ""} imageUrl={element.urlToImage ? element.urlToImage: "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//       //     </div>)
//       //     })} 
//       //   </div>
//       //   <div className="d-flex justify-content-between">
//       //     <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
//       //     <button disabled={this.state.page +1 > Math.ceil((this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
//       //   </div> 
//       // </div>
//         <>
//         {/* Infinite scroll */}
//         <h1 className="text-center" style={{ margin: '35px 0px' }} >News Monkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
//         {this.state.loading && <Spinner/>}
//         <InfiniteScroll
//           dataLength={this.state.articles.length || 0} // Default to 0 if undefined
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={<Spinner/>}
//         >
//           <div className="container">
//             <div className="row">
//               {this.state.articles.map((element)=>{
//                 return (<div className="col-md-4" key={element.url}>
//                   <NewsItem title={element.title || ""} description={element.description || ""} imageUrl={element.urlToImage ? element.urlToImage: "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//               </div>)
//               })} 
//             </div>
//           </div>
        
//         </InfiniteScroll>
//         </>
//     )
//   }
// }

// export default News


//Function Based
import React, {useEffect, useState} from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);

    }

    useEffect(() => {
      document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
      updateNews(); 
        //eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {   
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1);
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      };
 
        return (
            <>
                <h1 className="text-center" style={{ margin: '35px 0px' , marginTop: '90px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                > 
                    <div className="container">
                         
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>

            </>
        )
    
}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News