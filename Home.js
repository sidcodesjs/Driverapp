import React from "react";
import {
  Button,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MapView from "react-native-maps";
import { ScrollView } from "react-native-web";
import { TouchableWithoutFeedback } from "react-native";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { ImageBackground } from "react-native";
import Lock from "./Lock";
import OtpScreen from "./OtpScreen";
import Main from "./Main";
const Home = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={{
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Lock />
      <Text
        style={{
          marginTop: 15,
          fontWeight: "bold",
          color: "#9932CC",
          fontSize: 27,
        }}
      >
        Account Verification{" "}
      </Text>
      <Text
        style={{
          marginTop: 15,
          // fontWeight: "bold",
          color: "black",
          fontSize: 15,
        }}
      >
        Please fill the 4-DIGIT CODE sent to your no: {"\n"}
        <Text style={{ fontWeight: "bold" }}>1234567</Text>{" "}
      </Text>
      <OtpScreen />
      <TouchableOpacity
        style={styles.Vbtn}
        onPress={() => navigation.navigate("Main")}
      >
        <Text
          style={{
            color: "white",
            fontSize: 17,
            // fontStyle: "italic",
            // fontWeight: "bold",
            width: 100,
            marginTop: 8,
            height: 39,
            marginLeft: 32,

            alignItems: "center",
            padding: 4,
          }}
        >
          VERIFY
        </Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 17, fontStyle: "italic", fontSize: 17 }}>
        Did not received OTP?{" "}
        <Text style={{ color: "#9932CC" }}>Resend it.</Text>
      </Text>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  Vbtn: {
    marginTop: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
    alignContent: "center",
    elevation: 13,
    backgroundColor: "#9932CC",
    borderRadius: 10,
    textAlign: "center",
  },
});

export default Home;
