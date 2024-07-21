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
  outrasInformacoes: {
    descricao: string;
    data: string;
    horario: string;
  };
}

function Student() {
  const [selectedLayout, setSelectedLayout] = useState<string>(layoutOptions[0].value); // Initial state
  const [playerVisible, setPlayerVisible] = useState(false);
  const [codeVisibile, setCodeVisible] = useState(false);
  const [gameVisible, setGameVisible] = useState(false);
  const cards: CardData[] = data;

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLayout(event.target.value);
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
        <div id="player-layout" className="element">
          {/* <Player /> */}
          {playerVisible && <Player />}
        </div>
        <div id="game-layout" className="element">
          {gameVisible && <Game />}
          
          {codeVisibile && <iframe src="https://stackblitz.com/edit/vidstack-examples-sjm3aw?embed=1&file=README.md"></iframe>}
        </div>
      </Flex>
      <Flex id="card-section" gap="2">
        {cards.map((card) => (
            <div onClick={ () => { console.log( "oi ")}}>
              <CourseCard {...card} />
            </div>
        ))}
      </Flex>
    </>
  );
}

export default Student;
