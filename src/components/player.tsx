import Plyr from '@rocketseat/react-plyr';



export function Player() {
  
  return (
    <>
      <link rel="stylesheet" href="https://cdn.plyr.io/3.5.2/plyr.css"></link>
      <Plyr
        type="youtube" // or "vimeo"
        videoId="CDFN1VatiJA"
      />  
    </>
  );
}