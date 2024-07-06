
import { Theme,  Flex, Text, Button, ThemePanel   } from '@radix-ui/themes';

function App() {
  

  return (
    <>
      <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="105%">
        <Flex direction="row" gap="2">
          <Text>Hello from Radix Themes :)</Text>
          <Button>Let's go</Button>
        </Flex>
        <ThemePanel></ThemePanel>
      </Theme>
      
    </>
  )
}

export default App
