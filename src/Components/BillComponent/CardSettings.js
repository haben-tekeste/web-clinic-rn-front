import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import Spacer from "../../Components/Spacer";
export default ({ onDeleteCard }) => {
  const { width, height } = useWindowDimensions();
  return (
    <View
      style={{ position: "absolute", bottom: width / 3, left: 20, right: 20 }}
    >
      <Spacer />
      <Spacer />
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: "#AEAEAE",
          marginHorizontal: 25,
          padding: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={onDeleteCard}>
          <Text style={{ color: "#AEAEAE" }}>Delete card</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ color: "#AEAEAE" }}>+ Add another card</Text>
        </TouchableOpacity>
      </View>

      <Spacer />
      <Spacer />
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 16 }}>TOTAL</Text>
        <Text style={{ fontSize: 32, fontWeight: "bold" }}>299$</Text>
        <Spacer />
        <TouchableOpacity
          style={{
            backgroundColor: "#640F82",
            width: width / 2,
            padding: 15,
            alignItems: "center",
            borderRadius: 15,
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontFamily: "serif" }}>
            Pay
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
