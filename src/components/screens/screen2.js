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
      <View style={styles.container}>
        <View style={styles.topSection}>
          <TouchableOpacity activeOpacity={0.8} style={styles.backIconArea}>
            <Image
              source={leftArrow}
              resizeMode="contain"
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.titleText}>Living Room</Text>
        </View>

        <View style={styles.imageSection}>
          <View style={styles.imageArea}>
            <Image source={image} resizeMode="contain" style={styles.image} />
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.likebutton}>
            <Image
              source={heart}
              resizeMode="contain"
              style={styles.heartIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.closebutton}>
            <Image
              source={close}
              resizeMode="contain"
              style={styles.closeIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.ratingSection}>
          <View style={styles.textArea}>
            <Text style={styles.text}>Rating</Text>
          </View>

          <View style={styles.iconArea}>
            <Image
              source={star_h}
              resizeMode="contain"
              style={styles.starIconStyle}
            />
            <Image
              source={star_h}
              resizeMode="contain"
              style={styles.starIconStyle}
            />
            <Image
              source={star_h}
              resizeMode="contain"
              style={styles.starIconStyle}
            />
            <Image
              source={star_l}
              resizeMode="contain"
              style={styles.starIconStyle}
            />
            <Image
              source={star_l}
              resizeMode="contain"
              style={styles.starIconStyle}
            />
          </View>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Remark Arm Chair</Text>
          <Text style={styles.infoColor}>Yellow</Text>
          <Text style={styles.infoDes}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            congue lacus augue, nec posuere felis porta a. Fusce sagittis
            lacinia sodales.
          </Text>
        </View>

        <View style={styles.bottomSection}>
          <View style={styles.priceArea}>
            <Text style={styles.price}>$126.34</Text>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.addButton}>
            <Text style={styles.addButtonText}>Add to Card</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "white",
  },
  topSection: {
    flexDirection: "row",
    height: 30,
    alignItems: "center",
  },
  backIconArea: {
    justifyContent: "center",
    alignItems: "center",
  },
  backIcon: {
    width: 15,
    height: 15,
  },
  titleText: {
    marginLeft: 20,
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  imageSection: {
    marginTop: 30,
  },
  imageArea: {
    height: 440,
    backgroundColor: "#f1f1f1",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  likebutton: {
    padding: 10,
    position: "absolute",
    right: 70,
    top: 425,
    backgroundColor: "#feba4f",
    width: 30,
    height: 30,
    borderRadius: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  heartIcon: {
    width: "100%",
    height: "100%",
  },
  closebutton: {
    padding: 11,
    position: "absolute",
    right: 20,
    top: 425,
    backgroundColor: "#feba4f",
    width: 30,
    height: 30,
    borderRadius: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  closeIcon: {
    width: "100%",
    height: "100%",
  },
  ratingSection: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  textArea: {
    marginRight: 10,
  },
  text: {
    color: "#4a4a4a80",
    fontSize: 12,
    fontWeight: "500",
  },
  iconArea: {
    width: 10,
    height: 10,
    flexDirection: "row",
  },
  starIconStyle: {
    marginRight: 4,
    width: "100%",
    height: "100%",
  },
  infoSection: {
    marginTop: 25,
  },
  infoTitle: {
    fontSize: 28,
    fontWeight: "500",
  },
  infoColor: {
    fontSize: 28,
    fontWeight: "500",
  },
  infoDes: {
    marginTop: 15,
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "500",
    color: "#4a4a4a",
  },
  bottomSection: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  priceArea: {

  },
  price: {
    fontSize: 22,
    fontWeight: "600",
  },
  addButton: {
    height: 40,
    width: 90,
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 115,
    borderWidth: 2,
    borderColor: '#00000030'
  },
  addButtonText: {
    fontSize: 10,
    fontWeight: "600",
    color: '#00000090'
  },
  buyButton: {
    height: 40,
    width: 90,
    backgroundColor: '#feba4f',
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  buyButtonText: {
    fontSize: 10,
    color: "white",
    fontWeight: "600",
  },
});
