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
const star_l = require("../../assets/icons/star-l.png");
const star_h = require("../../assets/icons/star-h.png");
const heart = require("../../assets/icons/heart.png");
const leftArrow = require("../../assets/icons/left-arrow.png");
const plus = require("../../assets/icons/plus.png");
const shoppingBag = require("../../assets/icons/shopping-bag.png");

const image = require("../../assets/products/pro_3.png");

import PRODUCTS from "../../../PRODUCTS.json";

export default function screen2() {
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
