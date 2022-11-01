import React, { useEffect, useState } from "react";
import {
  View,
  // Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Tab, TabView, Text } from "@rneui/themed";
import BillCardComponent from "../Components/BillComponent/BillCardComponent";
import CardSettings from "../Components/BillComponent/CardSettings";
const cardDataDetails = [
  { name: "ferid amir", number: "12345 67891 1234 0001" },
  { name: "Haben tekeste", number: "12345 67891 1234 0001" },
  { name: "Khalid Amir", number: "12345 67891 1234 0001" },
];
export default ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const [value, setValue] = useState(0);
  const [data, setData] = useState(cardDataDetails);
  const onSetData = () => {
    let temp = data.pop();
    data.unshift(temp);
    setData([...data]);
  };

  const onDeleteCard = () => {
    let temp = data.pop();
    setData([...data]);
  };

  return (
    <View style={BillStyle.container}>
      <View style={{ width, alignItems: "center" }}>
        <Text style={{ color: "#9DA4AF", fontSize: 15 }}>CHECK OUT</Text>
        <Text
          style={{
            color: "#8212A9",
            fontWeight: "bold",
            fontSize: 25,
          }}
        >
          Payment Method
        </Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 25 }}>
        <View style={{ width: width / 1.5 }}>
          <>
            <Tab
              value={value}
              variant="primary"
              containerStyle={{
                borderRadius: 30,
                backgroundColor: "white",
                elevation: 12,
                shadowColor: "gray",
              }}
              disableIndicator
              onChange={(e) => setValue(e)}
            >
              <Tab.Item
                title="card"
                buttonStyle={(active) => ({
                  backgroundColor: active ? "#640F82" : "white",
                })}
                containerStyle={{
                  backgroundColor: "white",
                  borderTopLeftRadius: 30,
                  borderBottomLeftRadius: 30,
                }}
                titleStyle={(active) => ({
                  color: !active ? "#AEAEAE" : "white",
                })}
                onPress={() => setValue(0)}
              >
                Card
              </Tab.Item>
              <Tab.Item
                title="paypal"
                buttonStyle={(active) => ({
                  backgroundColor: active ? "#640F82" : "white",
                })}
                containerStyle={{
                  borderTopRightRadius: 30,
                  borderBottomRightRadius: 30,
                }}
                titleStyle={(active) => ({
                  color: !active ? "#AEAEAE" : "white",
                })}
              >
                PayPal
              </Tab.Item>
            </Tab>
          </>
        </View>
      </View>
      <TabView
        value={value}
        onChange={setValue}
        animationType="spring"
        disableSwipe={true}
      >
        <TabView.Item style={{ width }}>
          <>
            <View style={{ position: "relative", top: 0 }}>
              {data.map((item, index) => {
                return (
                  <BillCardComponent
                    key={item.name}
                    data={item}
                    setData={onSetData}
                    dataLength={data.length}
                  />
                );
              })}
            </View>
            <CardSettings onDeleteCard={onDeleteCard} />
          </>
        </TabView.Item>
        <TabView.Item style={{ width }}>
          <BillCardComponent />
        </TabView.Item>
      </TabView>
    </View>
  );
};

const BillStyle = StyleSheet.create({
  container: {
    backgroundColor: "#F7EEFF",
    flex: 1,
  },
});
