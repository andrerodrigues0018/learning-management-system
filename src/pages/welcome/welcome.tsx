import { Theme, Flex, Text } from '@radix-ui/themes';

function Welcome() {


    return (
        <>
            <Theme accentColor="green" appearance='dark' grayColor="sand" radius="large">
                <Flex className='main-container'>
                    <Flex className='social-proof'>
                        <Text>Social Proof</Text>

                    </Flex>
                    <Flex className='right-side'>
                        <Text>Welcome to platform</Text>
                        
                    </Flex>
                </Flex>
            </Theme>
        </>
    )
}
export default Welcome
