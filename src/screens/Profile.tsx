import { Center, ScrollView, VStack } from "native-base";

import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";

export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView>
        <Center mt={6} px={10}>
          <UserPhoto
            source={{
              uri: "https://http2.mlstatic.com/D_NQ_NP_719683-MLA50145427713_052022-O.webp",
            }}
            alt="Image do usuário"
            size={33}
          />
        </Center>
      </ScrollView>
    </VStack>
  );
}
