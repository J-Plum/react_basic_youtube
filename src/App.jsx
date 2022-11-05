import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import styles from "./App.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
   const [videos, setVideos] = useState([]);
   // selectedVideo  = 선택한 video의 자료가 들어가있음.
   const [selectedVideo, setSelectedVideo] = useState(null);

   const scrollMove = () => {
      window.scrollTo({
         top: 0,
         left: 0,
      })
   }

   const selectVideo = useCallback((video) => {
      setSelectedVideo(video);
   }, []);

   const search = useCallback(
      (query) => {
         youtube
            .search(query) //
            .then((videos) => {
               // console.log(videos);
               setSelectedVideo(null);
               setVideos(videos);
            });
      }, [youtube]);

   useEffect(() => {
      youtube
         .mostPopular() //
         // .then((videos) => console.log(videos))
         .then((videos) => setVideos(videos));
   }, [youtube]);

   return (
      <div className={styles.app}>
         <SearchHeader onSearch={search} />
         <section className={styles.content}>
            {selectedVideo && (
               <div className={styles.detail}>
                  <VideoDetail
                     video={selectedVideo}
                     youtube={youtube}
                  />
               </div>
            )}
            <div className={styles.list}>
               <VideoList
                  videos={videos}
                  scroll={scrollMove}
                  onVideoClick={selectVideo}
                  display={selectedVideo ? "list" : "grid"}
               />
            </div>
         </section>
      </div>
   );
}

export default App;
