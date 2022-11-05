class Youtube {
   constructor(key) {
      this.key = key;
      this.getRequestOptions = {
         method: "GET",
         redirect: "follow",
      };
   }
   // 테스트용
   // mostPopular() {
   //    return fetch(
   //       `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=18&q='르세라핌'&type=video&key=${this.key}`,
   //       this.getRequestOptions
   //    )
   //       .then((response) => response.json())
   //       .then((result) =>
   //          result.items.map((item) => ({ ...item, id: item.id.videoId }))
   //       );
   // }

   async mostPopular() {
      const response = await fetch(
         `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=18&contentDetails=contentDetails&key=${this.key}`,
         this.getRequestOptions
      );
      const result_1 = await response.json();
      return result_1.items;
   }

   async search(query) {
      const response = await fetch(
         `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
         this.getRequestOptions
      );
      const result_1 = await response.json();
      return result_1.items.map((item) => ({ ...item, id: item.id.videoId }));
   }

   async comment(videoId) {
      const response = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&order=relevance&maxResults=5&videoId=${videoId}&key=${this.key}`, this.getRequestOptions);
      const result_1 = await response.json();
      return result_1.items.map((item) => ({ ...item, snippet: item.snippet.topLevelComment.snippet })
      );
   }
}

export default Youtube;
