const Google_Api_Key = import.meta.env.VITE_GOOGLE_API_KEY;
const regionCode = "IN";
export const Most_Popular_Videos_Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=24&regionCode=${regionCode}&key=${Google_Api_Key}`;
export const videos_By_Id_Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=Ks-_Mh1QhMc,c0KYU2j0TM4,eIho2S0ZahI&key=${Google_Api_Key}`;
export const commentsUrl = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&textFormat=plainText&maxResults=20&key=${Google_Api_Key}`;
export const catagoriesUrl = `https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=${regionCode}&key=${Google_Api_Key}`;
export const Videos_By_Catagory_Id_Url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&regionCode=${regionCode}&key=${Google_Api_Key}`;
