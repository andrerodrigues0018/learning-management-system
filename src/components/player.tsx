import '@vidstack/react/player/styles/default/theme.css';

import { useEffect, useRef, useState } from 'react';

import styles from './player.module.css';

import {
  MediaPlayer,
  MediaProvider,
  Poster,
  type MediaPlayerInstance,
  type MediaViewType,
} from '@vidstack/react';

import { VideoLayout } from './layouts/video-layout';


export function Player() {
  const player = useRef<MediaPlayerInstance>(null),
    [src, setSrc] = useState(''),
    [viewType, setViewType] = useState<MediaViewType>('unknown');

  useEffect(() => {
    // Initialize src.
    setSrc('https://dnc-lms-bucket.s3.amazonaws.com/videos/formacao-em-dados/Aula 02 - Ambientacao.mp4');

    // Subscribe to state updates.
    return player.current!.subscribe(({ paused, viewType }) => {
      console.log('is paused?', '->', paused);
      setViewType(viewType);
    });
  }, []);

  return (
    <>
      <MediaPlayer
        className={`${styles.player} media-player`}
        title="Sprite Fight"
        src={src}
        crossOrigin
        playsInline
        ref={player}
      >
        <MediaProvider>
          {viewType === 'video' && (
            <Poster
              className={`${styles.poster} vds-poster`}
              src="https://files.vidstack.io/sprite-fight/poster.webp"
              alt="Girl walks into campfire with gnomes surrounding her friend ready for their next meal!"
            />
          )}
        </MediaProvider>
        <VideoLayout thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt" />
      </MediaPlayer>

 
    </>
  );
}