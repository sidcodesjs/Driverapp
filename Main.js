import React from "react";
import {
  ImageBackground,
  View,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Switch,
  Button,
} from "react-native";
// import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Status from "./Status";
import Home from "./Home";
// import { MaterialCommunityIcons } from '@expo/vector-icons';
const Main = ({ navigation }) => {
  const details = () => {
    navigation.navigate("Status");
  };
  return (
    <ScrollView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 15,
          // backgroundColor: "white",
          width: "90%",
          padding: 5,
          borderRadius: 15,
        }}
      >
        <Ionicons name="notifications" size={30} color="black" />
        <Text style={{ fontSize: 20 }}>Sukhindar Singh</Text>
        <ImageBackground
          style={{
            // borderColor: "black",
            width: 40,
            height: 40,
            borderRadius: 20,
            // borderWidth: 2,
            // borderWidth: 0.1,
            // position: "absolute",
            //   borderRadius: "100px",
            // marginTop: 30,
          }}
          source={{
            uri: "https://images.unsplash.com/photo-1556513317-ce7908d4671c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2FyZGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
          }}
        />
      </View>
      <View>
        <Text style={{ fontSize: 30, marginLeft: 20, fontWeight: "700" }}>
          Delivery
        </Text>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            height: 40,
            display: "flex",
            flexDirection: "row",
            // marginRight: 20,
            // padding: 20,
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              backgroundColor: "#9932CC",
              width: "35%",
              height: 40,
              fontSize: 16,
              justifyContent: "center",
              alignContent: "center",
              padding: 7,
              borderRadius: 15,
              elevation: 8,
              color: "white",
            }}
          >
            Upcoming (32)
          </Text>

          <Text
            style={{
              // backgroundColor: "#9932CC",
              width: "30%",
              borderWidth: 1,
              height: 40,
              padding: 9,
              // marginLeft: 5,
              fontSize: 16,
              borderRadius: 15,
              // elevation: 8,
              color: "black",
            }}
          >
            Active Orders
          </Text>
          <Text
            style={{
              // backgroundColor: "#9932CC",
              width: "24%",
              padding: 7,
              height: 40,
              fontSize: 16,
              borderWidth: 1,
              // elevation: 8,
              marginRight: 10,
              borderRadius: 15,
              color: "black",
            }}
          >
            Completed
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => details()}
          style={{
            width: "90%",
            height: 200,
            borderRadius: 8,
            marginTop: 15,
            // padding: 10,
            // justifyContent: "space-evenly",
            backgroundColor: "#D3D3D3",
            elevation: 7,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingVertical: 15,
              paddingHorizontal: 10,
            }}
          >
            <Text>Shahajanpur{"\n"}(START)</Text>
            <Entypo name="location-pin" size={20} color="#c71585" />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingVertical: 15,
              paddingHorizontal: 10,
            }}
          >
            <Text>Panchkula {"\n"}(END)</Text>
            <Entypo name="location-pin" size={20} color="#c71585" />
          </View>
          <View
            style={{
              paddingVertical: 15,
              paddingHorizontal: 10,
              flexDirection: "row",
              justifyContent: "flex-start",

              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "500" }}>ACTIVE</Text>
            {/* <Switch /> */}
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignContent: "flex-end",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                bottom: 160,
                // margin: 20,
                // padding: 10,
              }}
            >
              <View
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "row",
                  // alignItems: "space-between",
                  // alignContent: "space-between",

                  // top: 20,
                  // bottom: 160,
                  marginBottom: 26,
                }}
              >
                <MaterialCommunityIcons
                  name="truck-outline"
                  size={24}
                  color="black"
                />
                <Text
                  style={{
                    paddingVertical: 3,
                    paddingHorizontal: 10,
                    fontWeight: "500",
                  }}
                >
                  CG 12 W 9999
                </Text>
                {/* onPressIn={navigation.navigate("Status")} */}
                {/* <TouchableOpacity>
                  <Button
                //     title="Hello"
                //     // onPressIn={navigation.navigate("Status")}
                //   />
                </TouchableOpacity> */}
              </View>
              <View
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "row",
                  alignItems: "space-between",
                  alignContent: "space-between",
                  // marginTop: 10,

                  // top: 20,
                  // bottom: 160,
                }}
              >
                <MaterialCommunityIcons
                  name="calendar-month"
                  size={24}
                  color="#36454F"
                />
                <Text
                  style={{
                    paddingVertical: 3,
                    paddingHorizontal: 10,
                    fontWeight: "500",
                    color: "#36454F",
                  }}
                >
                  16/12/2022
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => details()}
          style={{
            width: "90%",
            height: 200,
            borderRadius: 8,
            marginTop: 15,
            // padding: 10,
            // justifyContent: "space-evenly",
            backgroundColor: "#D3D3D3",
            elevation: 7,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingVertical: 15,
              paddingHorizontal: 10,
            }}
          >
            <Text>Shahajanpur{"\n"}(START)</Text>
            <Entypo name="location-pin" size={20} color="#c71585" />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingVertical: 15,
              paddingHorizontal: 10,
            }}
          >
            <Text>Panchkula {"\n"}(END)</Text>
            <Entypo name="location-pin" size={20} color="#c71585" />
          </View>
          <View
            style={{
              paddingVertical: 15,
              paddingHorizontal: 10,
              flexDirection: "row",
              justifyContent: "flex-start",

              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "500" }}>ACTIVE</Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignContent: "flex-end",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                bottom: 160,
                // margin: 20,
                // padding: 10,
              }}
            >
              <View
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "row",
                  // alignItems: "space-between",
                  // alignContent: "space-between",

                  // top: 20,
                  // bottom: 160,
                  marginBottom: 26,
                }}
              >
                <MaterialCommunityIcons
                  name="truck-outline"
                  size={24}
                  color="black"
                />
                <Text
                  style={{
                    paddingVertical: 3,
                    paddingHorizontal: 10,
                    fontWeight: "500",
                  }}
                >
                  CG 12 W 9999
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "row",
                  alignItems: "space-between",
                  alignContent: "space-between",
                  // marginTop: 10,

                  // top: 20,
                  // bottom: 160,
                }}
              >
                <MaterialCommunityIcons
                  name="calendar-month"
                  size={24}
                  color="#36454F"
                />
                <Text
                  style={{
                    paddingVertical: 3,
                    paddingHorizontal: 10,
                    fontWeight: "500",
                    color: "#36454F",
                  }}
                >
                  16/12/2022
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => details()}
          style={{
            width: "90%",
            height: 200,
            borderRadius: 8,
            marginTop: 15,
            // padding: 10,
            // justifyContent: "space-evenly",
            backgroundColor: "#D3D3D3",
            elevation: 7,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingVertical: 15,
              paddingHorizontal: 10,
            }}
          >
            <Text>Shahajanpur{"\n"}(START)</Text>
            <Entypo name="location-pin" size={20} color="#c71585" />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingVertical: 15,
              paddingHorizontal: 10,
            }}
          >
            <Text>Panchkula {"\n"}(END)</Text>
            <Entypo name="location-pin" size={20} color="#c71585" />
          </View>
          <View
            style={{
              paddingVertical: 15,
              paddingHorizontal: 10,
              flexDirection: "row",
              justifyContent: "flex-start",

              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "500" }}>ACTIVE</Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignContent: "flex-end",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                bottom: 160,
                // margin: 20,
                // padding: 10,
              }}
            >
              <View
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "row",
                  // alignItems: "space-between",
                  // alignContent: "space-between",

                  // top: 20,
                  // bottom: 160,
                  marginBottom: 26,
                }}
              >
                <MaterialCommunityIcons
                  name="truck-outline"
                  size={24}
                  color="black"
                />
                <Text
                  style={{
                    paddingVertical: 3,
                    paddingHorizontal: 10,
                    fontWeight: "500",
                  }}
                >
                  CG 12 W 9999
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "row",
                  alignItems: "space-between",
                  alignContent: "space-between",
                  // marginTop: 10,

                  // top: 20,
                  // bottom: 160,
                }}
              >
                <MaterialCommunityIcons
                  name="calendar-month"
                  size={24}
                  color="#36454F"
                />
                <Text
                  style={{
                    paddingVertical: 3,
                    paddingHorizontal: 10,
                    fontWeight: "500",
                    color: "#36454F",
                  }}
                >
                  16/12/2022
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => details()}
          style={{
            width: "90%",
            height: 200,
            borderRadius: 8,
            marginTop: 15,
            // padding: 10,
            // justifyContent: "space-evenly",
            backgroundColor: "#D3D3D3",
            elevation: 7,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingVertical: 15,
              paddingHorizontal: 10,
            }}
          >
            <Text>Shahajanpur{"\n"}(START)</Text>
            <Entypo name="location-pin" size={20} color="#c71585" />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingVertical: 15,
              paddingHorizontal: 10,
            }}
          >
            <Text>Panchkula {"\n"}(END)</Text>
            <Entypo name="location-pin" size={20} color="#c71585" />
          </View>
          <View
            style={{
              paddingVertical: 15,
              paddingHorizontal: 10,
              flexDirection: "row",
              justifyContent: "flex-start",

              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "500" }}>ACTIVE</Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignContent: "flex-end",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                bottom: 160,
                // margin: 20,
                // padding: 10,
              }}
            >
              <View
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "row",
                  // alignItems: "space-between",
                  // alignContent: "space-between",

                  // top: 20,
                  // bottom: 160,
                  marginBottom: 26,
                }}
              >
                <MaterialCommunityIcons
                  name="truck-outline"
                  size={24}
                  color="black"
                />
                <Text
                  style={{
                    paddingVertical: 3,
                    paddingHorizontal: 10,
                    fontWeight: "500",
                  }}
                >
                  CG 12 W 9999
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "row",
                  alignItems: "space-between",
                  alignContent: "space-between",
                  // marginTop: 10,

                  // top: 20,
                  // bottom: 160,
                }}
              >
                <MaterialCommunityIcons
                  name="calendar-month"
                  size={24}
                  color="#36454F"
                />
                <Text
                  style={{
                    paddingVertical: 3,
                    paddingHorizontal: 10,
                    fontWeight: "500",
                    color: "#36454F",
                  }}
                >
                  16/12/2022
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => details()}
          style={{
            width: "90%",
            height: 200,
            borderRadius: 8,
            marginTop: 15,
            // padding: 10,
            // justifyContent: "space-evenly",
            backgroundColor: "#D3D3D3",
            elevation: 7,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingVertical: 15,
              paddingHorizontal: 10,
            }}
          >
            <Text>Shahajanpur{"\n"}(START)</Text>
            <Entypo name="location-pin" size={20} color="#c71585" />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingVertical: 15,
              paddingHorizontal: 10,
            }}
          >
            <Text>Panchkula {"\n"}(END)</Text>
            <Entypo name="location-pin" size={20} color="#c71585" />
          </View>
          <View
            style={{
              paddingVertical: 15,
              paddingHorizontal: 10,
              flexDirection: "row",
              justifyContent: "flex-start",

              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "500" }}>ACTIVE</Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignContent: "flex-end",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                bottom: 160,
                // margin: 20,
                // padding: 10,
              }}
            >
              <View
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "row",
                  // alignItems: "space-between",
                  // alignContent: "space-between",

                  // top: 20,
                  // bottom: 160,
                  marginBottom: 26,
                }}
              >
                <MaterialCommunityIcons
                  name="truck-outline"
                  size={24}
                  color="black"
                />
                <Text
                  style={{
                    paddingVertical: 3,
                    paddingHorizontal: 10,
                    fontWeight: "500",
                  }}
                >
                  CG 12 W 9999
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "row",
                  alignItems: "space-between",
                  alignContent: "space-between",
                  // marginTop: 10,

                  // top: 20,
                  // bottom: 160,
                }}
              >
                <MaterialCommunityIcons
                  name="calendar-month"
                  size={24}
                  color="#36454F"
                />
                <Text
                  style={{
                    paddingVertical: 3,
                    paddingHorizontal: 10,
                    fontWeight: "500",
                    color: "#36454F",
                  }}
                >
                  16/12/2022
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Main;
