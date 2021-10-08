import React from "react";
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from "@react-navigation/stack";
import { BestiaryPage } from "../screens/Bestiary/BestiaryPage";
import { BestiaryStackParamList } from "../types/nav";
import { SingleMonsterPage } from "../screens/Bestiary/SingleMonsterPage";
import { getHeaderTitle } from "@react-navigation/elements";
import { ScreenProps } from "react-native-screens";
import { Text, View } from "../components/Themed";

import { SafeAreaView } from "react-native-safe-area-context";
import { BackButton } from "../components/BackButton";
import { Dimensions } from "react-native";

const Stack = createStackNavigator<BestiaryStackParamList>();

export const BestiaryStackNavigator: React.FC<unknown> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ navigation, route, options, back }) => {
          const title = getHeaderTitle(options, route.name);
          return (
            <MyHeader
              title={title}
              route={route}
              leftButton={
                <BackButton onPress={navigation.goBack} render={!!back} />
              }
              back={back?.title}
            />
          );
        },
      }}
    >
      <Stack.Screen name="BestiaryHome" component={BestiaryPage} />
      <Stack.Screen
        name="IndividualMonsterPage"
        component={SingleMonsterPage}
      />
    </Stack.Navigator>
  );
};

interface myHeaderProps extends ScreenProps {
  leftButton: JSX.Element | undefined;
  route?: any;
  title: string;
  back?: string;
}

const MyHeader = ({ leftButton, route, title, back }: myHeaderProps) => {
  const moddedTitle = title === "BestiaryHome" ? "Bestiary" : route.params.name;
  return (
    <SafeAreaView
      style={{
        height: 80,
        width: Dimensions.get("window").width,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {leftButton}
      <View style={{ width: "33%",  backgroundColor:'transparent' }}>
        <Text style={{ fontSize: 20, alignSelf: "center" }}>{moddedTitle}</Text>
      </View>
      <View style={{ width: "33%",  backgroundColor:'transparent' }}></View>
    </SafeAreaView>
  );
};
