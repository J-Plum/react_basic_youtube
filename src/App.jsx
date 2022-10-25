import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
   const [videos, setVideos] = useState([]);
   const [selectedVideo, setSelectVideo] = useState(null);

   const selectVideo = (video) => {
      setSelectVideo(video);
   };

   const search = (query) => {
      
      youtube
      .search(query) //
      .then((videos) => {
         setSelectVideo(null);
         setVideos(videos);
         });
   };

   useEffect(() => {
      youtube
         .mostPopular() //
         // .then((videos) => console.log(videos))
         .then((videos) => setVideos(videos));
   }, []);

   return (
      <div className={styles.app}>
         <SearchHeader onSearch={search} />
         <section className={styles.content}>
            {selectedVideo && (
               <div className={styles.detail}>
                  <VideoDetail video={selectedVideo} />
               </div>
            )}
            <div className={styles.list}>
               <VideoList
                  videos={videos}
                  onVideoClick={selectVideo}
                  display={selectedVideo ? "list" : "grid"}
               />
            </div>
         </section>
      </div>
   );
}

export default App;
