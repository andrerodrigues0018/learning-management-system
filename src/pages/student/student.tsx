

import { Flex, Text, Radio } from "@radix-ui/themes";
import DropdownMenuDemo from "../../components/DropdownMenuDemo"
import { Player } from "../../components/player"
import './student-style.css';


function Student() {


  return (
    <>
      <DropdownMenuDemo />
      <p>a</p>
      <Flex align="start" direction="row" gap="5">
        <Flex asChild gap="2">
          <Text as="label" size="2">
            <Radio name="example" value="1" defaultChecked />
            Default
          </Text>
        </Flex>

        <Flex asChild gap="2">
          <Text as="label" size="2">
            <Radio name="example" value="2" />
            Comfortable
          </Text>
        </Flex>

        <Flex asChild gap="2">
          <Text as="label" size="2">
            <Radio name="example" value="3" />
            Compact
          </Text>
        </Flex>
      </Flex>
      <Flex id="elements">
      
        <div id="player-layout" className="element">
          <Player/>
        </div>
        <div id="iframe-layout" className="element">
          <iframe src="https://stackblitz.com/edit/vidstack-examples-sjm3aw?embed=1&file=README.md"></iframe>
        </div>
      </Flex>
    </>
  )
}

export default Student
