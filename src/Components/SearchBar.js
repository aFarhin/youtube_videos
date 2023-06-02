import { useEffect, useState } from "react"
import youtube from '../apis/youtube'
import { FaSistrix } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



const SearchBar = ({addVideos}) => {
    let [search,setSearch] = useState('web development');

    useEffect(()=>{
        getYoutubeVideos();
    },[])

        const keyDownHandler = event => {
    
          if (event.key === 'Enter') {
            getYoutubeVideos();
          }}


    function getYoutubeVideos(){
        youtube.get("/search",{
            params:{
                q:search,
                type:'video'
            }
        })
        .then((response) => {
            console.log(response.data.items);
            addVideos(response.data.items);
          })
        .catch((err)=>console.log(err))
    }

    

    return(
        <div className="search-container">
            
            <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
            <FaYoutube className="youtube-icon"/>
            <strong style={{fontSize:'16px'}}>YouTube</strong>
            </div>


            <div style={{display:'flex'}}>
               <input type="text"
               onChange={e=>setSearch(e.target.value)}
               value={search}
               className="search-bar"
               onKeyDown={keyDownHandler}
               >
              </input>
              <button className="search-button" onClick={getYoutubeVideos}><FaSistrix className="icon"/></button>
            </div>

            <div><img  src="https://www.smallrevolution.com/wp-content/uploads/2020/12/small-revolution-remote-jobs-web-developer-370x305.jpg"></img></div>

        </div>

    )
}

export default SearchBar;