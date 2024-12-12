import Plyr from "plyr-react"
import "plyr-react/plyr.css"

const VideoPlayer = ({ videoId }) => {
  return (
    <Plyr
      source={{
        type: 'video',
        sources: [
          {
            src: videoId,
            provider: 'youtube', 
          },
        ],
      }}
    />
  );
};

export default VideoPlayer;
