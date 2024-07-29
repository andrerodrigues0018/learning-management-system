
import { Theme } from '@radix-ui/themes';
import * as Tabs from '@radix-ui/react-tabs';
import Student from './student';
import './App.css';


function App() {


  return (
    <>
      <Theme accentColor="green" appearance='dark' grayColor="sand" radius="large">
        <Tabs.Root className="TabsRoot" defaultValue="tab-student">

          <Tabs.List className="TabsList" >
            <Tabs.Trigger className="TabsTrigger" value="tab-student">
              Student
            </Tabs.Trigger>
            <Tabs.Trigger className="TabsTrigger" value="tab-adm">
              Adm
            </Tabs.Trigger>
          </Tabs.List>


          <Tabs.Content className="TabsContent" value="tab-student">
            <Student />
          </Tabs.Content>

          <Tabs.Content className="TabsContent" value="tab-adm">
                <iframe title="Fill in the blanks game" width="1200" height="675"  src="https://view.genially.com/669726733037eb3b9d401fd1" type="text/html" allowscriptaccess="always" allowfullscreen="true" scrolling="yes" allownetworking="all"></iframe> 
          </Tabs.Content>
        </Tabs.Root>

        {/* <ThemePanel></ThemePanel> */}
      </Theme>

    </>
  )
}

export default App
