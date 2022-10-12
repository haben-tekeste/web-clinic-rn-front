import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { Entypo } from "@expo/vector-icons";

export default ({
  month,
  width,
  height,
  year,
  defaultMonth,
  onSetSelectMonth,
}) => {
  return (
    <View
      style={{ flexDirection: "row", marginVertical: 25, marginHorizontal: 30 }}
    >
      <SelectDropdown
        data={month}
        onSelect={(selectedItem, index) => {
          onSetSelectMonth(index);
          return selectedItem;
        }}
        defaultButtonText={`${defaultMonth}`}
        renderDropdownIcon={() => {
          return <Entypo name="triangle-down" size={24} color="black" />;
        }}
        dropdownOverlayColor={"rgba(0,0,0,0.5)"}
        buttonStyle={{
          borderWidth: 1,
          borderRadius: 15,
          backgroundColor: "#fff",
        }}
        dropdownStyle={{ borderRadius: 15 }}
        rowStyle={{ backgroundColor: "#f3eef6" }}
      />
    </View>
  );
};
