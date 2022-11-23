import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Status = () => {
  return (
    <View
      style={{
        display: "flex",
        // justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        // backgroundColor: "#9932CC",
      }}
    >
      <Text style={{ fontSize: 20, marginTop: 15 }}>Sukhindar Singh</Text>
      <Text style={{ fontSize: 13, marginTop: 10, fontWeight: "bold" }}>
        32 ORDERS
      </Text>

      <TouchableOpacity
        // onPress={() => details()}
        style={{
          width: "90%",

          height: 260,
          borderRadius: 8,
          marginTop: 15,
          padding: 14,
          //   justifyContent: "center",
          //   alignContent: "center",
          //   alignItems: "center",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#9932CC",
          elevation: 10,
        }}
      >
        <Text style={{ color: "white", fontWeight: "500" }}>
          TOTAL DELIVERIES.
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <MaterialCommunityIcons
            name="truck-outline"
            size={26}
            color="white"
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            bottom: 50,
          }}
        >
          <Text style={{ fontSize: 57, fontWeight: "700", color: "white" }}>
            500
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            // padding: 18,
            paddingVertical: 15,
            paddingHorizontal: 10,
            borderRadius: 18,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Entypo name="location-pin" size={35} color="#9932CC" />
          <Text
            style={{
              fontSize: 20,
              paddingVertical: 4,
              paddingHorizontal: 10,
              fontWeight: "700",
              color: "#9932CC",
            }}
          >
            TOTAL DIST. 56,890Km
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Status;
