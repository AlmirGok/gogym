import { useState } from "react";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { HStack, VStack } from "native-base";

export function Home() {
  const [groupSelected, setGroupSelected] = useState("costas");

  return (
    <VStack flex={1}>
      <HomeHeader />
      <HStack>
        <Group
          name="costas"
          isActive={groupSelected === "costas"}
          onPress={() => setGroupSelected("costas")}
        />
        <Group
          name="ombro"
          isActive={groupSelected === "ombro"}
          onPress={() => setGroupSelected("ombro")}
        />
      </HStack>
    </VStack>
  );
}
