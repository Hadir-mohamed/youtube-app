import { useContext, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { AppContext } from "../../../../context/context";
import ErrorMessage from "../../../../components/errorMessage/ErrorMessage.tsx";
import LoadingCard from "../../../../components/loading/LoadingCard";

const withId = (Component) => {
  const NewComponent = (props) => {
    const { setIsLoading } = useContext(AppContext);
    const { id } = props.video;

    const {
      data: currentVideo,
      isLoading,
      isError,
      error,
    } = useQuery(
      ["getCurrentVideo", id],
      () =>
        axios
          .get(
            `https://www.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&id=${id.videoId}&part=snippet,statistics,contentDetails&maxResults=10&type=video,channel,playlist`
          )
          .then((res) => res.data),
      {
        enabled: !!id.videoId,
      }
    );

    useEffect(() => {
<LoadingCard/>
    }, [isLoading, setIsLoading]);

    if (isError)
      return (
        <ErrorMessage
          subTitle={error?.message}
          statusCode={error?.response?.data?.error?.code}
        />
      );

    return currentVideo ? (
      <Component {...props} video={currentVideo?.items[0]} />
    ) : (
      <></>
    );
  };

  return NewComponent;
};

export default withId;
