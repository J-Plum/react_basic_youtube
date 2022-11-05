class Youtube {
   constructor(httpClient) {
      this.Youtube = httpClient;
   }


   async mostPopular() {
      const response = await this.Youtube.get('videos', {
         params: {
            part: 'snippet',
            chart: 'mostPopular',
            maxResults: 20,
         }
      });
      console.log(response.data.items);
      return response.data.items;
   }

   async search(query) {
      const response = await this.Youtube.get('search', {
         params: {
            part: 'snippet',
            maxResults: 20,
            type: 'video',
            q: query,
         }
      });
      console.log(response.data.items.map(item => ({ ...item, id: item.id.videoId })))
      return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
   }

   async comment(_videoId) {
      const response = await this.Youtube.get('commentThreads', {
         params: {
            part: 'snippet',
            order: 'relevance',
            maxResults: 15,
            videoId: _videoId,
         }
      });
      console.log(response);
      return response.data.items.map((item) => ({ ...item, snippet: item.snippet.topLevelComment.snippet }));
   }

}

export default Youtube;
