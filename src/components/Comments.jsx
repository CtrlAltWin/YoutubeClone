import React, { useEffect, useState } from "react";
import { commentsUrl } from "../utils/api";

const Comments = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!videoId) return;

    const fetchData = async () => {
      try {
        const response = await fetch(commentsUrl + `&videoId=${videoId}`);
        const json = await response.json();
        setComments(json.items || []);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchData();
  }, [videoId]);

  return (
    <div className="w-full flex flex-col lg:max-w-[490px] lg:overflow-y-auto hide-scrollbar lg:border border-gray-200 rounded-md lg:ml-2 mt-4 p-4 bg-white border">
      {/* Comments Heading */}
      <h3 className="text-lg font-semibold mb-4 border-b pb-2">Comments</h3>

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
                className="w-10 h-10 rounded-full object-cover border"
              />

              <div className="flex-1">
                {/* Author Name & Timestamp */}
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">
                    {author.authorDisplayName}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(author.publishedAt).toLocaleDateString()}
                  </p>
                </div>

                {/* Full Comment Display */}
                <p className="text-gray-700 text-sm whitespace-pre-wrap">
                  {author.textDisplay}
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-center text-gray-500">No comments available.</p>
      )}
    </div>
  );
};

export default Comments;
