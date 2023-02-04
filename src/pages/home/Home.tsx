import React, { useContext, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import { AppContext } from "../../context/context";
import VideoCard from "./components/videoCard/VideoCard";
import Filter from "../../components/filter/Filter";
import MobileFilter from "../../components/filter/MobileFilter";
import "./home.scss";

const Home: React.FC = () => {
  const { searchTirm, setIsLoading, setError } = useContext(AppContext);

  const {
    data: videos,
    isLoading,
    error,
  } = useQuery<any, AxiosError>(["getVideos", searchTirm], () =>
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&q=${searchTirm}&part=snippet,id&maxResults=10&type=video,channel,playlist
        `
      )
      .then((res) => res.data)
  );

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading,setIsLoading]);

  useEffect(() => {
    setIsLoading(false);
  }, [videos,setIsLoading]);

  useEffect(() => {
    setError(error);
  }, [error, setError]);

  return (
    <div className="youtube-app__videos">
      <Filter count={videos?.pageInfo?.totalResults} />
      <MobileFilter />
      <div className="youtube-app__videos__wrapper">
        {videos?.items?.map((video: any) => {
          return <VideoCard key={video.id.videoId} video={video} />;
        })}
      </div>
    </div>
  );
};

export default Home;
