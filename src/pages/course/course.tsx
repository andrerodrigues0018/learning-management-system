import { Theme, Flex, Text, Button } from '@radix-ui/themes';
import * as Accordion from '@radix-ui/react-accordion';
import './course.css'
import codeschool from '../../assets/codeschool.svg';
import { CheckIcon, RocketIcon, MixIcon, ChevronDownIcon } from '@radix-ui/react-icons';


function Course() {
    return (
        <>
            <Theme accentColor="blue" appearance='dark' grayColor="sand" radius="large">

                <Flex id='side-menu' direction={'column'} >
                    <img id="menu-logo" src='/vite.svg'/>
                    <Accordion.Root type="multiple" aria-expanded="false" id='menu-items'>
                        <Accordion.Item value="menu-item-dashboard" className="AccordionItem">
                            <Accordion.Header>
                                <RocketIcon className="header-icon" aria-hidden />

                                <Accordion.Trigger className="AccordionTrigger">
                                    <span>Dashboard</span>
                                </Accordion.Trigger>
                            </Accordion.Header>
                        </Accordion.Item>
                        <Accordion.Item value="menu-item-certificates" className="AccordionItem">
                            <Accordion.Header>
                                <span>Certificates</span>
                            </Accordion.Header>
                        </Accordion.Item>
                        <Accordion.Item value="menu-item-courses" className="AccordionItem">
                            <Accordion.Header>
                                <Accordion.Trigger className="AccordionTrigger">
                                    <span>My Courses</span>
                                    <ChevronDownIcon className="AccordionChevron" aria-hidden />
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content>Python</Accordion.Content>
                        </Accordion.Item>
                    </Accordion.Root>
                    <Flex id="menu-more-options" direction={'column'}>
                        <Flex className='more-option' align={'center'}>
                            <MixIcon/>
                            <p>Settings</p>
                        </Flex>
                        <Flex className='more-option' align={'center'}>
                            <MixIcon/>
                            <p>Settings</p>
                        </Flex>
                    </Flex>
                </Flex>
            </Theme>
        </>
    )
}

export default Course
