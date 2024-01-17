import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const close = require("../../assets/icons/close.png");
const leftArrow = require("../../assets/icons/left-arrow.png");
const plus = require("../../assets/icons/plus.png");
const shoppingBag = require("../../assets/icons/shopping-bag.png");

const pro_1 = require("../../assets/products/pro_1.png");
const pro_2 = require("../../assets/products/pro_2.png");
const pro_3 = require("../../assets/products/pro_3.png");
const pro_4 = require("../../assets/products/pro_4.png");
const pro_5 = require("../../assets/products/pro_5.png");
const pro_6 = require("../../assets/products/pro_6.png");
const pro_7 = require("../../assets/products/pro_7.png");
const pro_8 = require("../../assets/products/pro_8.png");
const pro_9 = require("../../assets/products/pro_9.png");

import PRODUCTS from "../../../PRODUCTS.json";

export default function screen1() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar hidden />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
