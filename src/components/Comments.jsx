import React, { useEffect, useRef, useState } from "react";
import { commentsUrl } from "../utils/url";

const Comments = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        commentsUrl + `&videoId=${videoId}&pageToken=${nextPageToken}`
      );
      const json = await response.json();
      setNextPageToken(json.nextPageToken);
      setComments((prevComments) => [...prevComments, ...json.items]);
    } catch (error) {
      //navigate to err page
    }
  };

  useEffect(() => {
    fetchData();
  }, [videoId]);

  return (
    <div className="w-full flex flex-col lg:overflow-y-auto hide-scrollbar border-gray-200 px-2 pb-2 pt-4 rounded-xl lg:border-l lg:border-t">
      {/* Comments Heading */}
      <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2 px-2">
        Comments
      </h3>

      {/* Comments List */}
      {comments.length > 0 ? (
        comments.map((comment, index) => {
          const author = comment.snippet.topLevelComment.snippet;
          return (
            <div key={index} className="flex gap-3 lg:px-2 py-3 rounded-md">
              {/* Profile Picture */}
              <img
                src={author.authorProfileImageUrl}
                alt={author.authorDisplayName}
                className="w-10 h-10 rounded-full object-cover"
              />

              <div className="flex-1">
                {/* Author Name & Timestamp */}
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-gray-600">
                    {author.authorDisplayName}
                  </p>
                  <p className="text-xs">
                    {new Date(author.publishedAt).toLocaleDateString()}
                  </p>
                </div>

                {/* Full Comment Display */}
                <p className="text-sm whitespace-pre-wrap">
                  {author.textDisplay}
                </p>
              </div>
            </div>
          );
        })
      ) : (
        /*to be improved*/
        <p className="text-center text-gray-500"></p>
      )}
      <button
        className="border p-1 text-gray-700 border-gray-700 rounded-lg active:bg-neutral-100"
        onClick={() => fetchData()}
      >
        Load More Comments
      </button>
    </div>
  );
};

export default Comments;
