import {
  VStack,
  Icon,
  HStack,
  Heading,
  Text,
  Image,
  Box,
  ScrollView,
} from "native-base";
import { TouchableOpacity } from "react-native";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@components/Button";

import BodySvg from "@assets/body.svg";
import SeriesSvg from "@assets/series.svg";
import RepetitionsSvg from "@assets/repetitions.svg";

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack flex={1}>
      <HStack px={8} bg="gray.600" pt={16} pb={8}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={Feather} name="arrow-left" color="green.500" size={6} />
        </TouchableOpacity>
        <HStack justifyContent="space-between" flex={1} ml={8}>
          <Heading color="gray.100" fontSize="lg" flexShrink={1} fontFamily="heading">
            Puxada frontal
          </Heading>
          <HStack alignItems="center">
            <BodySvg />
            <Text color="gray.200" ml="2" textTransform="capitalize">
              Costas
            </Text>
          </HStack>
        </HStack>
      </HStack>
      <ScrollView>
        <VStack p={8}>
          <Image
            source={{
              uri: "https://www.centralnacionalunimed.com.br/documents/20182/11762772/capa-mulher-exercicio.jpg/035e0477-f1bc-4150-8e23-8b2561fc555b?t=1599143323428",
            }}
            alt="Nome do exercício"
            w="full"
            h={80}
            rounded="lg"
            mb={5}
            resizeMode="cover"
          />
          <Box bg="gray.500" rounded="lg" pb={4} px={4}>
            <HStack
              alignItems="center"
              justifyContent="space-around"
              mb={6}
              mt={5}
            >
              <HStack alignItems="center">
                <SeriesSvg />
                <Text color="gray.100" ml={2}>
                  3 séries
                </Text>
              </HStack>
              <HStack alignItems="center">
                <RepetitionsSvg />
                <Text color="gray.100" ml={2}>
                  12 repetições
                </Text>
              </HStack>
            </HStack>
            <Button title="Marcar como realizado" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
