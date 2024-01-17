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
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Text style={styles.topText}>Discover</Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.cartIconArea}>
            <View style={styles.cartIconLabelArea}>
              <Text style={styles.cartIconLabel}>1</Text>
            </View>
            <Image
              source={shoppingBag}
              resizeMode="contain"
              style={styles.cartIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.categorySection}>
          <ScrollView horizontal>
            <TouchableOpacity activeOpacity={0.8} style={styles.categoryBtnActive}>
              <Text style={styles.categoryBtnTextActive}>Living Room</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.categoryBtn}>
              <Text style={styles.categoryBtnText}>Kitchen & Dining</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.categoryBtn}>
              <Text style={styles.categoryBtnText}>Home Office</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.categoryBtn}>
              <Text style={styles.categoryBtnText}>Bed Room</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.categoryBtn}>
              <Text style={styles.categoryBtnText}>Dining</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.productListArea}>
          <View style={styles.leftList}>
            <ScrollView>
            <View style={styles.productStyle}>
              <View style={styles.imageArea}>
                <Image
                  source={pro_1}
                  resizeMode="contain"
                  style={styles.leftProduct_image}
                />
              </View>
              <View style={styles.infoArea}>
                <TouchableOpacity activeOpacity={0.8} style={styles.addButton}>
                  <Image
                    source={plus}
                    resizeMode="contain"
                    style={styles.addButtonIcon}
                  />
                </TouchableOpacity>
                <Text style={styles.infoTitle}>Mod Hippo Chair</Text>
                <Text style={styles.infoColor}>Walnut and Cream</Text>
                <Text style={styles.infoPrice}>$126.34</Text>
              </View>
            </View>
            <View style={styles.productStyle}>
              <View style={styles.imageArea}>
                <Image
                  source={pro_4}
                  resizeMode="contain"
                  style={styles.leftProduct_image}
                />
              </View>
              <View style={styles.infoArea}>
                <TouchableOpacity activeOpacity={0.8} style={styles.addButton}>
                  <Image
                    source={plus}
                    resizeMode="contain"
                    style={styles.addButtonIcon}
                  />
                </TouchableOpacity>
                <Text style={styles.infoTitle}>Mod Hippo Chair</Text>
                <Text style={styles.infoColor}>Walnut and Cream</Text>
                <Text style={styles.infoPrice}>$126.34</Text>
              </View>
            </View>
            <View style={styles.productStyle}>
              <View style={styles.imageArea}>
                <Image
                  source={pro_4}
                  resizeMode="contain"
                  style={styles.leftProduct_image}
                />
              </View>
              <View style={styles.infoArea}>
                <TouchableOpacity activeOpacity={0.8} style={styles.addButton}>
                  <Image
                    source={plus}
                    resizeMode="contain"
                    style={styles.addButtonIcon}
                  />
                </TouchableOpacity>
                <Text style={styles.infoTitle}>Mod Hippo Chair</Text>
                <Text style={styles.infoColor}>Walnut and Cream</Text>
                <Text style={styles.infoPrice}>$126.34</Text>
              </View>
            </View>
            </ScrollView>
          </View>

          <View style={styles.rightList}>
            <ScrollView>
            <View style={styles.productStyle}>
              <View style={styles.imageArea}>
                <Image
                  source={pro_2}
                  resizeMode="contain"
                  style={styles.rightProduct_imageSP}
                />
              </View>
              <View style={styles.infoArea}>
                <TouchableOpacity activeOpacity={0.8} style={styles.addButton}>
                  <Image
                    source={plus}
                    resizeMode="contain"
                    style={styles.addButtonIcon}
                  />
                </TouchableOpacity>
                <Text style={styles.infoTitle}>Mod Hippo Chair</Text>
                <Text style={styles.infoColor}>Walnut and Cream</Text>
                <Text style={styles.infoPrice}>$126.34</Text>
              </View>
            </View>
            <View style={styles.productStyle}>
              <View style={styles.imageArea}>
                <Image
                  source={pro_3}
                  resizeMode="contain"
                  style={styles.rightProduct_image}
                />
              </View>
              <View style={styles.infoArea}>
                <TouchableOpacity activeOpacity={0.8} style={styles.addButton}>
                  <Image
                    source={plus}
                    resizeMode="contain"
                    style={styles.addButtonIcon}
                  />
                </TouchableOpacity>
                <Text style={styles.infoTitle}>Mod Hippo Chair</Text>
                <Text style={styles.infoColor}>Walnut and Cream</Text>
                <Text style={styles.infoPrice}>$126.34</Text>
              </View>
            </View>
            <View style={styles.productStyle}>
              <View style={styles.imageArea}>
                <Image
                  source={pro_3}
                  resizeMode="contain"
                  style={styles.rightProduct_image}
                />
              </View>
              <View style={styles.infoArea}>
                <TouchableOpacity activeOpacity={0.8} style={styles.addButton}>
                  <Image
                    source={plus}
                    resizeMode="contain"
                    style={styles.addButtonIcon}
                  />
                </TouchableOpacity>
                <Text style={styles.infoTitle}>Mod Hippo Chair</Text>
                <Text style={styles.infoColor}>Walnut and Cream</Text>
                <Text style={styles.infoPrice}>$126.34</Text>
              </View>
            </View>
            </ScrollView>
          </View>
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
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "white",
  },
  topSection: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topText: {
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  cartIconArea: {
    width: 50,
    height: 50,
    padding: 10,
  },
  cartIcon: {
    width: "100%",
    height: "100%",
  },
  cartIconLabelArea: {
    width: 17,
    height: 17,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "#f9c148",
    borderRadius: "100%",
    padding: 1,
    right: 7,
    top: 7,
    zIndex: 10,
  },
  cartIconLabel: {
    color: "white",
    fontSize: 8,
  },
  categorySection: {
    marginTop: 15,
  },
  categoryBtnActive: {
    // height: 10,
    padding: 7,
    paddingRight: 10,
    paddingLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5c5c5c",
    marginRight: 7,
  },
  categoryBtn: {
    // height: 10,
    padding: 7,
    paddingRight: 10,
    paddingLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eeeeee",
    marginRight: 7,
  },
  categoryBtnTextActive: {
    color: "white",
    fontSize: 12,
  },
  categoryBtnText: {
    color: "#bbbbbb",
    fontSize: 12,
  },
  productListArea: {
    marginTop: 20,

    flexDirection: "row",
  },
  leftList: {
    flex: 1,
    marginRight: 6,
  },
  productStyle: {
    marginBottom: 40,
  },
  imageArea: {
    backgroundColor: "#f1f1f1",
  },
  leftProduct_image: {
    width: "100%",
    height: 230,
  },
  rightProduct_image: {
    width: "100%",
    height: 230,
  },
  rightProduct_imageSP: {
    width: "100%",
    height: 280,
  },
  infoArea: {
    height: 35,
    justifyContent: "flex-end",
  },
  addButton: {
    width: 26,
    height: 26,
    position: "absolute",
    backgroundColor: "#feba4d",
    top: -13,
    right: 25,
    borderRadius: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonIcon: {
    width: 10,
    height: 10,
  },
  infoTitle: {
    fontSize: 10,
    fontWeight: "500",
  },
  infoColor: {
    fontSize: 10,
    fontWeight: "500",
  },
  infoPrice: {
    position: "absolute",
    right: 0,
    bottom: 0,
    fontSize: 12,
    fontWeight: "600",
  },
  rightList: {
    flex: 1,
    marginLeft: 6,
  },
});
