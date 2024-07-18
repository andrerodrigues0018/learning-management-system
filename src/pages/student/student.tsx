import React, { useState } from 'react';
import { Flex, Text, Radio, Box, Avatar, Card } from "@radix-ui/themes";
// import DropdownMenuDemo from "../../components/DropdownMenuDemo";
import { Player } from "../../components/player";
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

function Student() {
  const [selectedLayout, setSelectedLayout] = useState<string>(layoutOptions[0].value); // Initial state

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
          <Player />
        </div>
        <div id="iframe-layout" className="element">
          <iframe src="https://stackblitz.com/edit/vidstack-examples-sjm3aw?embed=1&file=README.md"></iframe>
        </div>
      </Flex>
      <Flex id="card-section" gap="2">
        <Box maxWidth="260px" >
          <Card className='card-box'>
            <Flex gap="2" align="center">
              <Avatar
                size="3"
                src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                radius="full"
                fallback="T"
              />
              <Box>
                <Text as="div" size="2" weight="medium">
                  1. Engenharia de software
                </Text>
                <Text as="div" size="1" color="gray">
                  Entendendo conceitos basicos
                </Text>
              </Box>
            </Flex>
          </Card>
        </Box>
        <Box maxWidth="260px" >
          <Card className='card-box'>
            <Flex gap="2" align="center">
              <Avatar
                size="3"
                src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                radius="full"
                fallback="T"
              />
              <Box>
                <Text as="div" size="2" weight="medium">
                  2. Desafio
                </Text>
                <Text as="div" size="1" color="gray">
                  Mudando variaveis
                </Text>
              </Box>
            </Flex>
          </Card>
        </Box>
      </Flex>


    </>
  );
}

export default Student;
