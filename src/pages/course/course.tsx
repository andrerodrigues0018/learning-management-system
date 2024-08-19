import { Theme, Flex } from '@radix-ui/themes';
import * as Accordion from '@radix-ui/react-accordion';
import './course.css'
import { Learn } from '../../components/learn/learn';
import codeschool from '../../assets/codeschool.svg';
import { ChevronDownIcon, DotFilledIcon, HomeIcon,  Crosshair2Icon, CardStackMinusIcon, PersonIcon, MixerVerticalIcon, IdCardIcon } from '@radix-ui/react-icons';


function Course() {
    return (
        <>
            <Theme accentColor="blue" appearance='dark' grayColor="sand" radius="large">
                <Flex id='body'>
                    <Flex id='side-menu' direction={'column'} >
                        <img id="menu-logo" src={codeschool}/>
                        <Accordion.Root type="single" aria-expanded="false" collapsible={false} id='menu-items'>
                            <Accordion.Item value="menu-item-dashboard" className="AccordionItem">
                                <Accordion.Header>
                                    <Accordion.Trigger className="AccordionTrigger">
                                        <HomeIcon className="header-icon" aria-hidden />

                                        <span>Dashboard</span>
                                    </Accordion.Trigger>
                                </Accordion.Header>
                            </Accordion.Item>
                            <Accordion.Item value="menu-item-courses" className="AccordionItem">
                                <Accordion.Header>
                                    <Accordion.Trigger className="AccordionTrigger">
                                        <CardStackMinusIcon className="header-icon" aria-hidden />
                                        <span>My Courses</span>
                                        <ChevronDownIcon className="AccordionChevron" aria-hidden />
                                    </Accordion.Trigger>
                                </Accordion.Header>
                                <Accordion.Content>
                                    <Flex className='item-icon'>
                                        <DotFilledIcon/>
                                        <span>Python</span>
                                    </Flex>
                                    <Flex className='item-icon'>
                                        <DotFilledIcon color='lightblue'/>
                                        <span>Python</span>
                                    </Flex>
                                    
                                </Accordion.Content>
                            </Accordion.Item>
                            <Accordion.Item value="menu-item-skill" className="AccordionItem">
                                <Accordion.Header>
                                    <Accordion.Trigger className="AccordionTrigger">
                                        <Crosshair2Icon className="header-icon" aria-hidden />
                                        <span>Skill Tests</span>
                                    </Accordion.Trigger>
                                </Accordion.Header>
                            </Accordion.Item>
                            <Accordion.Item value="menu-item-certificates" className="AccordionItem">
                                <Accordion.Header>
                                    <Accordion.Trigger className="AccordionTrigger">
                                        <IdCardIcon className="header-icon" aria-hidden />
                                        <span>Certificates</span>
                                    </Accordion.Trigger>
                                </Accordion.Header>
                            </Accordion.Item>
                        </Accordion.Root>
                        <Flex id="menu-more-options" direction={'column'}>
                            <Flex className='more-option'>
                                <MixerVerticalIcon/>
                                <span>Settings</span>
                            </Flex>
                            <Flex className='more-option'>
                                <PersonIcon/>
                                <span>Account</span>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex id="content">
                        <Learn/>
                    </Flex>
                </Flex>
            </Theme>
        </>
    )
}

export default Course
