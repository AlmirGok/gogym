import { Heading, HStack, Text, VStack } from "native-base";
import { UserPhoto } from "./UserPhoto";

export function HomeHeader() {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        source={{
          uri: "https://http2.mlstatic.com/D_NQ_NP_719683-MLA50145427713_052022-O.webp",
        }}
        alt="Image do usuário"
        size={16}
      />
      <VStack>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>
        <Heading color="gray.100" fontSize="md">
          Almir
        </Heading>
      </VStack>
    </HStack>
  );
}
