import React from "react";
import styles from "./video_detail.module.css";
import VideoComment from "../video_comment/video_comment";
import { useEffect, useState } from "react";

const VideoDetail = ({ video, video: { snippet }, youtube }) => {
   const [comments, setCommnets] = useState([]);
   // 질문하기 comments
   useEffect(() => {
      youtube
         .comment(video.id)
         .then(items => {
            // console.log(items)
            setCommnets(items)
         });
   }, [video]);

   return (
      <>
         <section className={styles.detail}>
            <iframe
               className={styles.video}
               type="text/html"
               title="youtube video player"
               width="100%"
               height="500px"
               src={`https://www.youtube.com/embed/${video.id}`}
               frameBorder="0"
               allowFullScreen
            />
            <div className={styles.description}>
               <h2>{snippet.title}</h2>
               <h3>{snippet.channelTitle}</h3>
               <pre>{snippet.description}</pre>
            </div>
            <ul>
               <hr />
               <h3>comment</h3>
               {comments.map((item) => <VideoComment key={item.id} item={item} />)}
               <hr />
            </ul>
         </section>

      </>
   );
};

export default VideoDetail;
