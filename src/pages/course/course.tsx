import { Theme, Flex, Text, Button } from '@radix-ui/themes';
import * as Accordion from '@radix-ui/react-accordion';
import './course.css'
import codeschool from '../../assets/codeschool.svg';
import { CheckIcon, RocketIcon, MixIcon, ChevronDownIcon } from '@radix-ui/react-icons';


function Course() {
    return (
        <>
            <Theme accentColor="blue" appearance='dark' grayColor="sand" radius="large">

                <Flex id='side-menu'>
                    <img id="menu-logo" />
                    <Accordion.Root type="single" collapsible>
                        <Accordion.Item value="item-1">
                            <Accordion.Header>
                                <Accordion.Trigger className="AccordionTrigger">
                                    <span>Dashboard</span>
                                </Accordion.Trigger>
                            </Accordion.Header>
                        </Accordion.Item>
                        <Accordion.Item value="item-2">
                            <Accordion.Header>
                                <Accordion.Trigger className="AccordionTrigger">
                                    <span>Trigger text</span>
                                    <ChevronDownIcon className="AccordionChevron" aria-hidden />
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content>AA</Accordion.Content>
                            <Accordion.Content>AA</Accordion.Content>
                        </Accordion.Item>
                    </Accordion.Root>
                    <Flex id="menu-more-options"></Flex>
                </Flex>
            </Theme>
        </>
    )
}

export default Course
