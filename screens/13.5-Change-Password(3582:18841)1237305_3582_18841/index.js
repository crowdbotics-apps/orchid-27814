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
      <View style={styles.View_3582_18842}>
        <View style={styles.View_I3582_18842_704_11279} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da78/9e1d/32dc693200ea9afa09c0eed02d6e60d1"
          }}
          style={styles.ImageBackground_I3582_18842_704_11280}
        />
        <View style={styles.View_I3582_18842_704_11281} />
        <View style={styles.View_I3582_18842_3658_29013}>
          <View style={styles.View_I3582_18842_3658_27688}>
            <Text style={styles.Text_I3582_18842_3658_27688}>
              Change password
            </Text>
          </View>
        </View>
        <View style={styles.View_I3582_18842_3658_24597} />
      </View>
      <View style={styles.View_3582_18843}>
        <View style={styles.View_I3582_18843_1897_13605}>
          <Text style={styles.Text_I3582_18843_1897_13605}>Reset Password</Text>
        </View>
      </View>
      <View style={styles.View_3582_18971}>
        <View style={styles.View_3582_18844}>
          <View style={styles.View_I3582_18844_1246_32189}>
            <Text style={styles.Text_I3582_18844_1246_32189}>
              Password strength: Weak
            </Text>
          </View>
          <View style={styles.View_I3582_18844_1246_32190}>
            <View style={styles.View_I3582_18844_1246_32191}>
              <Text style={styles.Text_I3582_18844_1246_32191}>********</Text>
            </View>
            <View style={styles.View_I3582_18844_1246_32192}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67b7/137c/d1995901858a5b1cc05ad17be4393fca"
                }}
                style={styles.ImageBackground_I3582_18844_1246_32192_3589_206}
              />
            </View>
            <View style={styles.View_I3582_18844_1246_32193}>
              <Text style={styles.Text_I3582_18844_1246_32193}>
                New password
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3582_18888}>
          <View style={styles.View_I3582_18888_1234_32396}>
            <Text style={styles.Text_I3582_18888_1234_32396}>
              Must be at least 8 characters
            </Text>
          </View>
          <View style={styles.View_I3582_18888_1258_9}>
            <View style={styles.View_I3582_18888_1258_10}>
              <Text style={styles.Text_I3582_18888_1258_10}>
                Confirm password
              </Text>
            </View>
            <View style={styles.View_I3582_18888_1258_11}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67b7/137c/d1995901858a5b1cc05ad17be4393fca"
                }}
                style={styles.ImageBackground_I3582_18888_1258_11_3589_206}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_3582_18948}>
          <View style={styles.View_3582_18949}>
            <Text style={styles.Text_3582_18949}>Sign in with Face ID?</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4755/8f2d/4ec41290b3d4562139fd8fb21307db6a"
            }}
            style={styles.ImageBackground_3582_18950}
          />
        </View>
      </View>
      <View style={styles.View_3582_18845}>
        <View style={styles.View_3582_18846}>
          <Text style={styles.Text_3582_18846}>
            This password will unlock your Cryptooly wallet only on this device
          </Text>
        </View>
        <View style={styles.View_3582_18847}>
          <View style={styles.View_I3582_18847_3107_57474}>
            <View style={styles.View_I3582_18847_3107_57474_3108_55510}>
              <View
                style={styles.View_I3582_18847_3107_57474_3108_55510_2747_42674}
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca60/dc3e/faeed1b60e2a9165c8f61e6db3a9b0af"
                  }}
                  style={
                    styles.ImageBackground_I3582_18847_3107_57474_3108_55510_2747_42674_1412_10718
                  }
                />
              </View>
            </View>
            <View style={styles.View_I3582_18847_3107_57474_3108_55509}>
              <Text style={styles.Text_I3582_18847_3107_57474_3108_55509}>
                DO NOT share this phrase with anymore! These words can be used
                to steal all your accounts
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3582_18954}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ea5/7733/12b9f456845b920d965e1ab8bfb41b0d"
          }}
          style={styles.ImageBackground_I3582_18954_1953_19111}
        />
        <View style={styles.View_I3582_18954_1953_19112}>
          <Text style={styles.Text_I3582_18954_1953_19112}>
            I understand that Cryptooly cannot recover this password for me.
            Learn more
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_3582_18842: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3582_18842_704_11279: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("24.210687022391564%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.6000000238418579
  },
  ImageBackground_I3582_18842_704_11280: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.0109289617486334%")
  },
  View_I3582_18842_704_11281: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("102.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.19672131147541%"),
    backgroundColor: "rgba(248, 248, 249, 1)",
    overflow: "hidden"
  },
  View_I3582_18842_3658_29013: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.387978142076504%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3582_18842_3658_27688: {
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0%")
  },
  Text_I3582_18842_3658_27688: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3582_18842_3658_24597: {
    flexGrow: 1,
    width: wp("12.8%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.6%"),
    top: hp("9.289617486338798%"),
    backgroundColor: "rgba(221, 223, 228, 1)",
    borderTopLeftRadius: 1000,
    borderTopRightRadius: 1000,
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000
  },
  View_3582_18843: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("96.44808743169399%"),
    backgroundColor: "rgba(244, 244, 246, 1)"
  },
  View_I3582_18843_1897_13605: {
    flexGrow: 1,
    width: wp("33.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.800000000000004%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3582_18843_1897_13605: {
    color: "rgba(221, 223, 228, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3582_18971: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("30.601092896174865%"),
    minHeight: hp("30.601092896174865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("45.62841530054645%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3582_18844: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3582_18844_1246_32189: {
    flexGrow: 1,
    width: wp("38.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("8.196721311475414%")
  },
  Text_I3582_18844_1246_32189: {
    color: "rgba(164, 169, 183, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3582_18844_1246_32190: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3582_18844_1246_32191: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    top: hp("3.2786885245901587%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%")
  },
  Text_I3582_18844_1246_32191: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3582_18844_1246_32192: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.2786882640234105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3582_18844_1246_32192_3589_206: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.6830601092896202%")
  },
  View_I3582_18844_1246_32193: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    top: hp("1.092896174863391%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%")
  },
  Text_I3582_18844_1246_32193: {
    color: "rgba(175, 180, 192, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3582_18888: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.568306010928957%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3582_18888_1234_32396: {
    flexGrow: 1,
    width: wp("44.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("8.196721311475407%")
  },
  Text_I3582_18888_1234_32396: {
    color: "rgba(164, 169, 183, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3582_18888_1258_9: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3582_18888_1258_10: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.185792349726782%")
  },
  Text_I3582_18888_1258_10: {
    color: "rgba(175, 180, 192, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3582_18888_1258_11: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.2786882640234105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3582_18888_1258_11_3589_206: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.683060109289606%")
  },
  View_3582_18948: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.13661202185793%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3582_18949: {
    width: wp("47.199999999999996%"),
    minWidth: wp("47.199999999999996%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%")
  },
  Text_3582_18949: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3582_18950: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%")
  },
  View_3582_18845: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("22.950819672131146%"),
    minHeight: hp("22.950819672131146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("19.398907103825135%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3582_18846: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3582_18846: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3582_18847: {
    width: wp("87.2%"),
    height: hp("13.114754098360656%"),
    top: hp("9.836065573770494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(244, 244, 246, 1)"
  },
  View_I3582_18847_3107_57474: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3582_18847_3107_57474_3108_55510: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3582_18847_3107_57474_3108_55510_2747_42674: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3582_18847_3107_57474_3108_55510_2747_42674_1412_10718: {
    flexGrow: 1,
    width: wp("8.888433837890625%"),
    height: hp("4.11640490339102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8889322916666664%"),
    top: hp("0.6742550375683045%")
  },
  View_I3582_18847_3107_57474_3108_55509: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999997%"),
    top: hp("0%")
  },
  Text_I3582_18847_3107_57474_3108_55509: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3582_18954: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("79.50819672131148%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3582_18954_1953_19111: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3582_18954_1953_19112: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I3582_18954_1953_19112: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 11,
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
