import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

const AppName = () => (
  <View style={styles.app_name_container}>
    <Text style={styles.app_name_1}>SAYLANI WELFARE</Text>
    <Text style={styles.app_name_2}>ONLINE MARKET PLACE</Text>
  </View>
);

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
        />
      </View>
      {/* <View style={styles.app_name_container}>
        <Text style={styles.app_name_1}>SAYLANI WELFARE</Text>
        <Text style={styles.app_name_2}>ONLINE MARKET PLACE</Text>
      </View> */}
      <AppName />
      <View style={styles.column_2}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  column: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  column_2: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  logo: {
    height: 190,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#61B846",
    padding: 10,
    borderRadius: 10,
    width: 190,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 50,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  app_name_container: {},

  app_name_1: {
    fontSize: 30,
    color: "#61B846",
    fontWeight: "700",
  },
  app_name_2: {
    fontSize: 16,
    color: "#024F9D",
    fontWeight: "700",
    textAlign: "center",
  },
});

export default SplashScreen;
