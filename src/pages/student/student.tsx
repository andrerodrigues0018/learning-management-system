import React, { useState } from 'react';
import { Flex, Text, Radio } from "@radix-ui/themes";
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
    </>
  );
}

export default Student;
