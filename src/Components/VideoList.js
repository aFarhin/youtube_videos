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
                     
                     
                     <div className="lists">
                        <img className="videos" style={{objectFit: "fill"}}
                           src={video.snippet.thumbnails.high.url}
                           alt = {video.snippet.title}/>
                           <div>
                           <p className="pr" style={{margin:'0',fontSize:'12px'}}>{video.snippet.channelTitle}</p>
                         <p>{video.snippet.title}</p>
                         </div>
                         </div>
                  </div>
                ))
                
            }
        </div>
    )
}


export default VideoList;