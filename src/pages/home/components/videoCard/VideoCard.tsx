import React, { useState, useEffect } from "react";
import { getVideoDurationString, nFormatter } from "../../../../utils";
import { CheckCircleFilled } from "@ant-design/icons";
import withId from "./WithId";

import "./videoCard.scss";

interface VideoCardProps {
  video: any;
}
const BASE_EMBED_URL = "https://www.youtube-nocookie.com/embed/";

const VideoCard: React.FunctionComponent<VideoCardProps> = ({
  video,
}: VideoCardProps) => {
  const [isMobile, setIsMobile] = useState(false);
  
  const { id, snippet = {}, contentDetails = {} } = video;
  const { title, description, thumbnails = {}, channelTitle } = snippet;
  const embedUrl = `${BASE_EMBED_URL}${id}`;
  const duration = contentDetails ? contentDetails.duration : null;
  const videoDuration = getVideoDurationString(duration);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <div key={id?.videoId} className="youtube-app__videos__wrapper__video-card">
      <div className="image-container">
        <div className="box-video">
          <div
            className="bg-video"
            style={{
              backgroundImage: `url(
              ${isMobile ? thumbnails?.default?.url : thumbnails?.medium?.url}   
            )`,
            }}
          >
          </div>
          <div className="video-container">
            <iframe
              width={
                isMobile ? thumbnails?.default?.width : thumbnails?.medium?.width
              }
              height={
                isMobile ? thumbnails?.default?.height : thumbnails?.medium?.height
              }
              src={embedUrl}
              title={title}
            />
          </div>
        </div>
        <div className="time-label">
          <span>{videoDuration}</span>
        </div>
      </div>
      <div className="youtube-app__videos__wrapper__video-card__content">
        <h4 className="trim-text">{title}</h4>
        <div className="youtube-app__videos__wrapper__video-card__content__meta-data">
          <span>
            {channelTitle} <CheckCircleFilled />
          </span>
          <span>{nFormatter(video?.statistics?.viewCount)}</span>
        </div>
        <p className="trim-text">{description}</p>
      </div>
    </div>
  );
};

export default withId(VideoCard);
