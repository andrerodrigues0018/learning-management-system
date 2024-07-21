import { Flex, Text, Box, Avatar, Card } from "@radix-ui/themes";
interface CardData {
    numero: number,
    tituloAula: string;
    materia: string;
    active: boolean;
    fotoProfessor: string;
    outrasInformacoes: {
        descricao: string;
        data: string;
        horario: string;
    };
}
export function CourseCard(card: CardData): JSX.Element {
    const { materia, numero, tituloAula, active } = card;
    return (
        <>
            <Box maxWidth="260px" >
                <Card className='card-box' >
                    <Flex gap="2" align="center">
                        <Avatar
                            size="3"
                            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                            radius="full"
                            fallback="T"
                        />
                        <Box>
                            <Text as="div" size="2" weight="medium">
                        { active }
                        {numero}. {materia}
                            </Text>
                            <Text as="div" size="1" color="gray">
                                {tituloAula}
                            </Text>
                        </Box>
                    </Flex>
                </Card>
            </Box>
        </>

    );
}

export default CourseCard;
