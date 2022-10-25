import React from "react";
import { TouchableOpacityBase, useWindowDimensions } from "react-native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import BillCardDetails from "./BillCardDetails";
import Spacer from "../Spacer";

export default ({ data, setData, dataLength }) => {
  const { width } = useWindowDimensions();
  return (
    <>
      {data && (
        <TouchableOpacity
          style={{
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
          }}
          onPress={() => setData()}
        >
          <View>
            <BillCardDetails header="Card Holder" data={data.name} />
          </View>
          <View>
            <BillCardDetails header="Card Number" data="12345 ***** *** 0001" />
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
        </TouchableOpacity>
      )}
    </>
  );
};
