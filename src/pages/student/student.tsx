import React, { useState } from 'react';
import { Flex, Text, Radio } from "@radix-ui/themes";
import data from './data.json';
import { CourseCard } from "../../components/course";
import { Player } from "../../components/player";
import { Game } from "../../components/game";

import './student-style.css';

interface LayoutOptions {
  value: string;
  label: string;
}

const layoutOptions: LayoutOptions[] = [
  { value: 'Default', label: 'Default' },
  { value: 'Comfortable', label: 'Comfortable' },
  { value: 'Compact', label: 'Compact' },
];


interface CardData {
  numero: number,
  tituloAula: string;
  materia: string;
  fotoProfessor: string;
  active: boolean;
  content: {
    video_url: string;
    iframe_url: string;
    game_url: string;
  };
}

function Student() {
  const [selectedLayout, setSelectedLayout] = useState<string>(layoutOptions[0].value); // Initial state
  const [playerVisible, setPlayerVisible] = useState(false);
  const [codeVisibile, setCodeVisible] = useState(false);
  const [gameVisible, setGameVisible] = useState(false);
  const [contentId, setContentId] = useState(1);
  const cards: CardData[] = data;

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLayout(event.target.value);
  };

  const setContent = (contentNumber: number) => {

    const card = cards.find( card => contentNumber == card.numero )
    const isPlayerVisible = ( card?.content.video_url ) ? true : false;
    setPlayerVisible(isPlayerVisible)
    const gameVisible = ( card?.content.game_url ) ? true : false;
    setGameVisible(gameVisible)
    const isCodeVisible = ( card?.content.iframe_url ) ? true : false;
    setCodeVisible(isCodeVisible)
    setContentId(contentNumber)
  };

  return (
    <>

      <Flex align="start" direction="row" gap="5">
        {layoutOptions.map((option) => (
          <Flex asChild gap="2" key={option.value}>
            <Text as="label" size="2">
              <Radio
                name="example"
                value={option.value}
                checked={selectedLayout === option.value}
                onChange={handleRadioChange}
              />
              {option.label}
            </Text>
          </Flex>
        ))}
      </Flex>

      <Flex id="elements" className={`${selectedLayout}`}>
        { playerVisible &&
          <div id="player-layout" className="element">
            {/* <Player /> */}
            <Player />
          </div>
        }
        { ( gameVisible || codeVisibile ) &&
        <div id="game-layout" className="element">
          {gameVisible && <Game />}
          
          {codeVisibile && <iframe src="https://stackblitz.com/edit/vidstack-examples-sjm3aw?embed=1&file=README.md"></iframe>}
        </div>
        }
      </Flex>
      <Flex id="card-section" gap="2">
        {cards.map((card) => (
            <div onClick={ () => { setContent(card.numero) } }>
              <CourseCard {...card } contentId={contentId} />
            </div>
        ))}
      </Flex>
    </>
  );
}

export default Student;
