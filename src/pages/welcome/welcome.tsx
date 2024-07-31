import { Theme, Flex, Text, Button } from '@radix-ui/themes';
import './welcome.css'
import codeschool from '../../assets/codeschool.svg';
import { CheckIcon, RocketIcon, MixIcon } from '@radix-ui/react-icons';

function Welcome() {


    return (
        <>
            <Theme accentColor="green" appearance='dark' grayColor="sand" radius="large">
                <Flex id='main-container'>
                    <Flex id='social-proof'>
                        <Text id='proof-number'>27%</Text>
                        <Text id='proof-number-legend'>more efficient learning process compared to other platforms</Text>
                        <img className='proof-img' />
                        <Text id="proof-name"> <b>Olivia Futher.</b> Java developer in Google</Text>

                    </Flex>
                    <Flex id='right-side'>
                        <img id='right-side-logo' src={codeschool} color='white' />
                        <Text id='welcome-title'>Welcome to platform</Text>
                        <Text id='welcome-subtitle'>Are you a teacher or a student</Text>
                        <Flex id='account-options'>
                            <Flex className='option'>
                                <div className='option-img'>
                                    <RocketIcon />
                                </div>
                                <Flex className='option-text'>
                                    <Text className='option-text-title'>I'm a teacher</Text>
                                    <Text className='option-text-subtitle'>i need to upload my content</Text>
                                </Flex>
                                <Flex className='option-checkbox'>
                                    <div className='checkbox-item '>
                                        <CheckIcon />
                                    </div>
                                </Flex>
                            </Flex>
                            <Flex className='option'>
                                <div className='option-img'>
                                    <MixIcon />
                                </div>
                                <Flex className='option-text'>
                                    <Text className='option-text-title'>I'm a student</Text>
                                    <Text className='option-text-subtitle'>i need to upload my content</Text>
                                </Flex>
                                {/* <img className='option-checkbox' /> */}
                                <Flex className='option-checkbox'>
                                    <div className='checkbox-item checked-item'>
                                        <CheckIcon />
                                    </div>
                                </Flex>
                            </Flex>
                        </Flex>

                        <Flex id="right-side-actions">
                            <Text className='action-login'>Already have an account? <a href='/login'>Log In</a></Text>

                            <Button variant='soft' color='blue' loading={false}>
                                Choose <CheckIcon />
                            </Button>
                        </Flex>


                    </Flex>
                </Flex>
            </Theme>
        </>
    )
}
export default Welcome
