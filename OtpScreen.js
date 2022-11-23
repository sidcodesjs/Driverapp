import React, { useRef, useState } from "react";
import {
  TextInput,
  ImageBackground,
  Image,
  Text,
  View,
  StyleSheet,
  Button,
  Pressable,
  TouchableHighlight,
  Touchable,
  TouchableOpacity,
  Alert,
} from "react-native";
// import { useState } from "react";

const OtpScreen = () => {
  const pinRef1 = useRef(null);
  const pinRef2 = useRef(null);
  const pinRef3 = useRef(null);
  const pinRef4 = useRef(null);

  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  return (
    <View
      style={{
        display: "flex",
        // alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          display: "flex",
          //   alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "row",
          flex: 0.8,
          //   padding: 10,
        }}
      >
        <TextInput
          ref={pinRef1}
          keyboardType="numeric"
          onChange={(pin1) => {
            setPin1(pin1);
            if (pin1 !== "") {
              pinRef2.current.focus();
            }
          }}
          maxLength={1}
          style={{
            backgroundColor: "#D3D3D3",
            elevation: 7,
            borderWidth: 0,
            width: "18%",
            height: 60,
            borderRadius: 5,
            fontSize: 23,
            marginTop: 18,
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            textAlign: "center",
          }}
        />
        <TextInput
          ref={pinRef2}
          keyboardType="numeric"
          maxLength={1}
          onChange={(pin2) => {
            setPin2(pin2);
            if (pin2 !== "") {
              pinRef3.current.focus();
            }
          }}
          style={{
            backgroundColor: "#D3D3D3",
            borderWidth: 0,
            elevation: 7,
            width: "18%",
            height: 60,
            borderRadius: 5,
            fontSize: 23,
            marginTop: 18,
            alignSelf: "center",
            textAlign: "center",
          }}
        />
        <TextInput
          ref={pinRef3}
          keyboardType="numeric"
          maxLength={1}
          onChange={(pin3) => {
            setPin3(pin3);
            if (pin3 !== "") {
              pinRef4.current.focus();
            }
          }}
          style={{
            backgroundColor: "#D3D3D3",
            borderWidth: 0,
            elevation: 7,
            width: "18%",
            height: 60,
            borderRadius: 5,
            fontSize: 23,
            marginTop: 18,
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignSelf: "center",
            textAlign: "center",
          }}
        />
        <TextInput
          ref={pinRef4}
          keyboardType="numeric"
          maxLength={1}
          onChange={(pin4) => {
            setPin4(pin4);
          }}
          style={{
            elevation: 7,
            borderWidth: 0.3,
            backgroundColor: "#D3D3D3",
            borderWidth: 0,
            width: "18%",
            height: 60,
            borderRadius: 5,
            fontSize: 23,
            textAlign: "center",
            marginTop: 18,
          }}
        />
      </View>
    </View>
  );
};

export default OtpScreen;
