import '@vidstack/react/player/styles/default/theme.css';

import { useEffect, useRef, useState } from 'react';

import styles from './player.module.css';

import {
  isHLSProvider,
  MediaPlayer,
  MediaProvider,
  Poster,
  Track,
  type MediaCanPlayDetail,
  type MediaCanPlayEvent,
  type MediaPlayerInstance,
  type MediaProviderAdapter,
  type MediaProviderChangeEvent,
  type MediaViewType,
} from '@vidstack/react';

import { VideoLayout } from './layouts/video-layout';
import { textTracks } from './tracks';

export function Player() {
  let player = useRef<MediaPlayerInstance>(null),
    [src, setSrc] = useState(''),
    [viewType, setViewType] = useState<MediaViewType>('unknown');

  useEffect(() => {
    // Initialize src.
    setSrc('video');

    // Subscribe to state updates.
    return player.current!.subscribe(({ paused, viewType }) => {
      // console.log('is paused?', '->', paused);
      setViewType(viewType);
    });
  }, []);

  function onProviderChange(
    provider: MediaProviderAdapter | null,
    nativeEvent: MediaProviderChangeEvent,
  ) {
    // We can configure provider's here.
    if (isHLSProvider(provider)) {
      provider.config = {};
    }
  }

  // We can listen for the `can-play` event to be notified when the player is ready.
  function onCanPlay(detail: MediaCanPlayDetail, nativeEvent: MediaCanPlayEvent) {
    // ...
  }

  function changeSource(type: string) {
    switch (type) {
      case 'audio':
        setSrc('https://files.vidstack.io/sprite-fight/audio.mp3');
        break;
      case 'video':
        setSrc('https://files.vidstack.io/sprite-fight/720p.mp4');
        break;
      case 'hls':
        setSrc('https://files.vidstack.io/sprite-fight/hls/stream.m3u8');
        break;
      case 'youtube':
        setSrc('youtube/_cMxraX_5RE');
        break;
      case 'vimeo':
        setSrc('vimeo/640499893');
        break;
    }
  }

  return (
    <>
      <MediaPlayer
        className={`${styles.player} media-player`}
        title="Sprite Fight"
        src={src}
        crossOrigin
        playsInline
        onProviderChange={onProviderChange}
        onCanPlay={onCanPlay}
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
          {textTracks.map((track) => (
            <Track {...track} key={track.src} />
          ))}
        </MediaProvider>

        {/* Layouts */}
        {viewType === 'audio' ? (
          <AudioLayout />
        ) : viewType === 'video' ? (
          <VideoLayout thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt" />
        ) : null}
      </MediaPlayer>

      <div className={styles.srcButtons}>
        <button onClick={() => changeSource('audio')}>Audio</button>
        <button onClick={() => changeSource('video')}>Video</button>
        <button onClick={() => changeSource('hls')}>HLS</button>
        <button onClick={() => changeSource('vimeo')}>Vimeo</button>
      </div>
    </>
  );
}