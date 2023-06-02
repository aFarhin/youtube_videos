import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import VideoList from "./Components/VideoList";
import VideoPlay from "./Components/VideoPlay";
import "./index.css"


const App = () => {
    let [videos,setVideos] = useState([]);
    let [selectedVideo,setSelectedVideo] = useState(null);

    return(
        <div>
            <SearchBar addVideos={setVideos}/>

            <div className="container">
                <div className="video">
                    <VideoPlay video={selectedVideo}/>
                </div>
                <div className="video-list">
                    <VideoList videos={videos} videoChosen={setSelectedVideo}/>
                </div>
            </div>

        </div>
    )
}
export default App;