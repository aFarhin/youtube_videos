import React, {useEffect} from "react"; 



const VideoList = ({videos, videoChosen}) => {

    useEffect(()=>{
        videoChosen(videos[0])
    },[videos])
 
    return(
        <div>
            {
                videos&& 
                videos.map((video, index) => (
                  <div key={index}
                    onClick={() => videoChosen(video)}>
                        <img className="videos" style={{objectFit: "fill"}}
                           src={video.snippet.thumbnails.high.url}
                           alt = {video.snippet.title}
                        />
                         <h4>{video.snippet.title}</h4>
                        <p style={{margin:'0',fontSize:'14px'}}>{video.snippet.channelTitle}</p>
                  </div>
                ))
                
            }
        </div>
    )
}


export default VideoList;