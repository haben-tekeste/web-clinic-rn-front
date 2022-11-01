import React from "react";
import { TouchableOpacityBase, useWindowDimensions } from "react-native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import BillCardDetails from "./BillCardDetails";
import Spacer from "../Spacer";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

export default ({ data, setData, dataLength, active }) => {
  const { width } = useWindowDimensions();
  const translateX = useSharedValue(0);
  const panGestureHandler = useAnimatedGestureHandler({
    onStart: (event) => {},
    onActive: (event) => {
      translateX.value = event.translationX;
    },
    onEnd: (event) => {
      if (Math.abs(translateX.value) > width / 2) {
        translateX.value = withTiming(0);
      } else {
        translateX.value = withSpring(0);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });
  return (
    <View style={{ borderRadius: 2, borderColor: "red", width: width }}>
      {data && (
        <PanGestureHandler
          onGestureEvent={dataLength > 1 ? panGestureHandler : null}
          onEnded={() => {
            Math.abs(translateX.value) > width / 3 ? setData() : null;
          }}
        >
          <Animated.View
            style={[
              {
                marginTop: 25,
                backgroundColor: "white",
                padding: 20,
                height: width / 1.8,
                justifyContent: "space-between",
                borderRadius: 15,
                shadowColor: "gray",
                elevation: 10,
                position: "absolute",
                top: 0,
                left: 25,
                right: 25,
                borderTopWidth: dataLength === 1 ? null : 2,
              },
              dataLength > 1 ? rStyle : null,
            ]}
          >
            <View>
              <BillCardDetails header="Card Holder" data={data.name} />
            </View>
            <View>
              <BillCardDetails
                header="Card Number"
                data="12345 ***** *** 0001"
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <BillCardDetails header="Expire" data="12/24" />
              <BillCardDetails header="CVV" data="***" />
              <Image
                source={require("../../Images/masterCard.png")}
                style={{ width: 50, height: 40 }}
              />
            </View>
          </Animated.View>
        </PanGestureHandler>
      )}
    </View>
  );
};
