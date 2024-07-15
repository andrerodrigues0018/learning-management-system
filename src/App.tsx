
import { Theme } from '@radix-ui/themes';
import * as Tabs from '@radix-ui/react-tabs';
import Student from './pages/student/student';
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
              <Student/>
            </Tabs.Content>

            <Tabs.Content className="TabsContent" value="tab-adm">
              <p className="Text">Change your password here. After saving, you'll be logged out.</p>



              <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
                <button className="Button green">Change password</button>
              </div>
            </Tabs.Content>
          </Tabs.Root>

        {/* <ThemePanel></ThemePanel> */}
      </Theme>

    </>
  )
}

export default App
