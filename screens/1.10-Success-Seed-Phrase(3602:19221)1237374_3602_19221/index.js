import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <View style={styles.View_3602_19222}>
        <View style={styles.View_3602_19223}>
          <View style={styles.View_I3602_19223_2892_43256}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd24/acb1/124c41b4a2f0cbe8ed07b2f82e3f5d5a"
              }}
              style={styles.ImageBackground_I3602_19223_2892_43256_2730_41734}
            />
          </View>
        </View>
        <View style={styles.View_3602_19224}>
          <View style={styles.View_I3602_19224_2937_50297}>
            <View style={styles.View_I3602_19224_2937_50298} />
            <View style={styles.View_I3602_19224_2937_50299} />
          </View>
        </View>
        <View style={styles.View_3602_19225}>
          <View style={styles.View_I3602_19225_2892_46925}>
            <View style={styles.View_I3602_19225_2892_46925_32_15}>
              <Text style={styles.Text_I3602_19225_2892_46925_32_15}>3/3</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3602_19226}>
        <Text style={styles.Text_3602_19226}>Confirm Seed Phrase</Text>
      </View>
      <View style={styles.View_3602_19228}>
        <View style={styles.View_I3602_19228_1897_13585}>
          <Text style={styles.Text_I3602_19228_1897_13585}>Continute</Text>
        </View>
      </View>
      <View style={styles.View_3602_19229}>
        <View style={styles.View_3602_19288}>
          <Text style={styles.Text_3602_19288}>
            Select each word in the order it was presented to you
          </Text>
        </View>
        <View style={styles.View_3602_19287}>
          <View style={styles.View_3602_19231}>
            <View style={styles.View_I3602_19231_3406_12869}>
              <Text style={styles.Text_I3602_19231_3406_12869}>then</Text>
            </View>
          </View>
          <View style={styles.View_3602_19270}>
            <View style={styles.View_I3602_19270_3406_12869}>
              <Text style={styles.Text_I3602_19270_3406_12869}>alien</Text>
            </View>
          </View>
          <View style={styles.View_3602_19274}>
            <View style={styles.View_I3602_19274_3406_12869}>
              <Text style={styles.Text_I3602_19274_3406_12869}>hub</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3918_59}>
        <View style={styles.View_3918_60}>
          <View style={styles.View_I3918_60_3406_12485}>
            <Text style={styles.Text_I3918_60_3406_12485}>then</Text>
          </View>
        </View>
        <View style={styles.View_3918_61}>
          <View style={styles.View_I3918_61_3406_12917}>
            <Text style={styles.Text_I3918_61_3406_12917}>vacant</Text>
          </View>
        </View>
        <View style={styles.View_3918_62}>
          <View style={styles.View_I3918_62_3406_12917}>
            <Text style={styles.Text_I3918_62_3406_12917}>girl</Text>
          </View>
        </View>
        <View style={styles.View_3918_63}>
          <View style={styles.View_I3918_63_3406_12917}>
            <Text style={styles.Text_I3918_63_3406_12917}>exist</Text>
          </View>
        </View>
        <View style={styles.View_3918_64}>
          <View style={styles.View_I3918_64_3406_12917}>
            <Text style={styles.Text_I3918_64_3406_12917}>avoid</Text>
          </View>
        </View>
        <View style={styles.View_3918_65}>
          <View style={styles.View_I3918_65_3406_12917}>
            <Text style={styles.Text_I3918_65_3406_12917}>usage</Text>
          </View>
        </View>
        <View style={styles.View_3918_66}>
          <View style={styles.View_I3918_66_3406_12917}>
            <Text style={styles.Text_I3918_66_3406_12917}>ride</Text>
          </View>
        </View>
        <View style={styles.View_3918_67}>
          <View style={styles.View_I3918_67_3406_12485}>
            <Text style={styles.Text_I3918_67_3406_12485}>alien</Text>
          </View>
        </View>
        <View style={styles.View_3918_68}>
          <View style={styles.View_I3918_68_3406_12917}>
            <Text style={styles.Text_I3918_68_3406_12917}>comic</Text>
          </View>
        </View>
        <View style={styles.View_3918_69}>
          <View style={styles.View_I3918_69_3406_12917}>
            <Text style={styles.Text_I3918_69_3406_12917}>cross</Text>
          </View>
        </View>
        <View style={styles.View_3918_70}>
          <View style={styles.View_I3918_70_3406_12917}>
            <Text style={styles.Text_I3918_70_3406_12917}>upon</Text>
          </View>
        </View>
        <View style={styles.View_3918_71}>
          <View style={styles.View_I3918_71_3406_12485}>
            <Text style={styles.Text_I3918_71_3406_12485}>hub</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_3602_19222: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.0109289617486334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3602_19223: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3602_19223_2892_43256: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792352%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3602_19223_2892_43256_2730_41734: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3602_19224: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666665%"),
    top: hp("2.4590163934426235%"),
    backgroundColor: "rgba(244, 244, 246, 1)"
  },
  View_I3602_19224_2937_50297: {
    flexGrow: 1,
    width: wp("72.26720377604167%"),
    height: hp("1.0930328421253976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I3602_19224_2937_50298: {
    width: wp("0.00026666667933265365%"),
    minWidth: wp("0.00026666667933265365%"),
    height: hp("0.00013661202834664636%"),
    minHeight: hp("0.00013661202834664636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316937%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3602_19224_2937_50299: {
    width: wp("0.00026666667933265365%"),
    minWidth: wp("0.00026666667933265365%"),
    height: hp("0.00013661202834664636%"),
    minHeight: hp("0.00013661202834664636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.26692708333334%"),
    top: hp("0.5464480874316937%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3602_19225: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.13333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3602_19225_2892_46925: {
    flexGrow: 1,
    width: wp("5.6000000000000005%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1.3661202185792352%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3602_19225_2892_46925_32_15: {
    flexGrow: 1,
    width: wp("5.6000000000000005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3602_19225_2892_46925_32_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3602_19226: {
    width: wp("49.6%"),
    minWidth: wp("49.6%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("14.207650273224044%")
  },
  Text_3602_19226: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3602_19228: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("96.44808743169399%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I3602_19228_1897_13585: {
    flexGrow: 1,
    width: wp("20.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.2%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3602_19228_1897_13585: {
    color: "rgba(245, 250, 128, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3602_19229: {
    width: wp("87.46666666666667%"),
    minWidth: wp("87.46666666666667%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("21.311475409836063%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3602_19288: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.1857923497267784%")
  },
  Text_3602_19288: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3602_19287: {
    width: wp("78.93333333333334%"),
    minWidth: wp("78.93333333333334%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("12.021857923497265%")
  },
  View_3602_19231: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(205, 249, 208, 1)"
  },
  View_I3602_19231_3406_12869: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333331%"),
    top: hp("1.092896174863391%")
  },
  Text_I3602_19231_3406_12869: {
    color: "rgba(16, 140, 74, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3602_19270: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.73333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(205, 249, 208, 1)"
  },
  View_I3602_19270_3406_12869: {
    flexGrow: 1,
    width: wp("9.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.93333333333333%"),
    top: hp("1.092896174863391%")
  },
  Text_I3602_19270_3406_12869: {
    color: "rgba(16, 140, 74, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3602_19274: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.466666666666654%"),
    top: hp("0%"),
    backgroundColor: "rgba(205, 249, 208, 1)"
  },
  View_I3602_19274_3406_12869: {
    flexGrow: 1,
    width: wp("7.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.866666666666674%"),
    top: hp("1.092896174863391%")
  },
  Text_I3602_19274_3406_12869: {
    color: "rgba(16, 140, 74, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3918_59: {
    width: wp("78.93333333333334%"),
    minWidth: wp("78.93333333333334%"),
    height: hp("31.693989071038253%"),
    minHeight: hp("31.693989071038253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%"),
    top: hp("50.81967213114754%")
  },
  View_3918_60: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.73333333333333%"),
    top: hp("17.4863387978142%"),
    backgroundColor: "rgba(244, 244, 246, 1)"
  },
  View_I3918_60_3406_12485: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333334%"),
    top: hp("1.092896174863398%")
  },
  Text_I3918_60_3406_12485: {
    color: "rgba(221, 223, 228, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3918_61: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.4863387978142%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3918_61_3406_12917: {
    flexGrow: 1,
    width: wp("13.600000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.933333333333332%"),
    top: hp("1.092896174863398%")
  },
  Text_I3918_61_3406_12917: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3918_62: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.466666666666654%"),
    top: hp("17.4863387978142%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3918_62_3406_12917: {
    flexGrow: 1,
    width: wp("6.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333346%"),
    top: hp("1.092896174863398%")
  },
  Text_I3918_62_3406_12917: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3918_63: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.73333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3918_63_3406_12917: {
    flexGrow: 1,
    width: wp("9.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.93333333333333%"),
    top: hp("1.092896174863391%")
  },
  Text_I3918_63_3406_12917: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3918_64: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.466666666666654%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3918_64_3406_12917: {
    flexGrow: 1,
    width: wp("10.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.266666666666666%"),
    top: hp("1.092896174863391%")
  },
  Text_I3918_64_3406_12917: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3918_65: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.7431693989071%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3918_65_3406_12917: {
    flexGrow: 1,
    width: wp("12.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.599999999999998%"),
    top: hp("1.092896174863391%")
  },
  Text_I3918_65_3406_12917: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3918_66: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.466666666666654%"),
    top: hp("26.229508196721312%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3918_66_3406_12917: {
    flexGrow: 1,
    width: wp("7.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.866666666666674%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3918_66_3406_12917: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3918_67: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 246, 1)"
  },
  View_I3918_67_3406_12485: {
    flexGrow: 1,
    width: wp("9.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.93333333333333%"),
    top: hp("1.092896174863391%")
  },
  Text_I3918_67_3406_12485: {
    color: "rgba(221, 223, 228, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3918_68: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.466666666666654%"),
    top: hp("8.7431693989071%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3918_68_3406_12917: {
    flexGrow: 1,
    width: wp("12.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000085%"),
    top: hp("1.092896174863391%")
  },
  Text_I3918_68_3406_12917: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3918_69: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.73333333333333%"),
    top: hp("8.7431693989071%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3918_69_3406_12917: {
    flexGrow: 1,
    width: wp("10.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.266666666666666%"),
    top: hp("1.092896174863391%")
  },
  Text_I3918_69_3406_12917: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3918_70: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.229508196721312%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3918_70_3406_12917: {
    flexGrow: 1,
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666668%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3918_70_3406_12917: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3918_71: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.73333333333333%"),
    top: hp("26.229508196721312%"),
    backgroundColor: "rgba(244, 244, 246, 1)"
  },
  View_I3918_71_3406_12485: {
    flexGrow: 1,
    width: wp("7.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.866666666666667%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3918_71_3406_12485: {
    color: "rgba(221, 223, 228, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
