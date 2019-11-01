import React, { Component } from 'react';

const API = 'AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA'
const channelID ='UCXgGY0wkgOzynnHvSEVmE3A'
const result = 20;

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`

export default class Youtube extends Component {
   constructor(props){
       super(props);

       this.state ={
        resultyt: []
       };
       this.clicked = this.clicked.bind(this);
   }
   clicked(){
    fetch(finalURL)
    .then((response) => response.json())
    .then((responseJson) => {
      // console.log(responseJson);
      const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
      this.setState({resultyt});
    })
    .catch((error) => {
      console.error(error);
    });
   }


    render() {
        console.log(this.state.resultyt);
      return (
        <div>
            <button onClick = {this.clicked}>Get Youtube videos</button>
        {
            this.state.resultyt.map((link,i)=>{
             console.log(link);
             var frame = <div key={i} className="youtube"><iframe width="560" height="315" src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
            return frame;
            })
        }
        {this.frame}
    </div>
      );
    }
  }
  
