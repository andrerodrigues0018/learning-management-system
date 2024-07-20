import { Flex, Text, Box, Avatar, Card } from "@radix-ui/themes";
interface CardData {
    tituloAula: string;
    materia: string;
    fotoProfessor: string;
    outrasInformacoes: {
      descricao: string;
      data: string;
      horario: string;
    };
  }
export function CourseCard(card: CardData) {
    console.log("card", card)
    return (
        <>
        <Box maxWidth="260px" >
            <Card className='card-box'>
                <Flex gap="2" align="center">
                    <Avatar
                        size="3"
                        src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                        radius="full"
                        fallback="T"
                    />
                    <Box>
                        <Text as="div" size="2" weight="medium">
                        {card.card?.materia}
                        </Text>
                        <Text as="div" size="1" color="gray">
                           111
                        </Text>
                    </Box>
                </Flex>
            </Card>
        </Box>
        </>

    );
}

export default CourseCard;
