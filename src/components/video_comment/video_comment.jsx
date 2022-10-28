import React from "react";
import styles from "./video_comment.module.css"

const VideoComment = ({ item }) => {
   return (
      <li className={styles.container}>
         <img className={styles.commentImg} src={item.snippet.authorProfileImageUrl} />
         <div>
            <div className={styles.channelName}>
               {item.snippet.authorDisplayName}
            </div>
            <pre className={styles.userDescription}>
               {item.snippet.textDisplay}
            </pre>
         </div>
      </li>
   )
}

export default VideoComment;