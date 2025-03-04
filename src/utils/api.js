const Google_Api_Key = "AIzaSyAV8khK65ye6WDBMLycH05dSwExx3Izc_0";

export const Most_Popular_Videos_Url =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  Google_Api_Key;

export const Fetch_Videos_By_Id_Url =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key=" +
  Google_Api_Key;

export const commentsUrl = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&textFormat=plainText&maxResults=20&key=${Google_Api_Key}`;
