


const VideoPlay = ({video}) => {
    return(
        <div>
            {
                video==null ? <h3>Loading Videos..</h3> : (
                <div>
                <iframe className="vid" width="100%" height="400px" border="none" src={`https://www.youtube.com/embed/${video.id.videoId}`}></iframe>
                <p className="title">{video.snippet.title}</p> 
                <div className="logo">
                <p>📺</p>
                <h2>{video.snippet.channelTitle}</h2>
                <p className="tik">✔</p>
                </div> 
                <p><b>Description: </b>{video.snippet.description}</p>  
                </div>
                ) 
            }
        </div>
    )
}
export default VideoPlay;