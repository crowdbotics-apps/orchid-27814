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
      <View style={styles.View_3541_1}>
        <View style={styles.View_I3541_1_704_11279} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da78/9e1d/32dc693200ea9afa09c0eed02d6e60d1"
          }}
          style={styles.ImageBackground_I3541_1_704_11280}
        />
        <View style={styles.View_I3541_1_704_11281} />
        <View style={styles.View_I3541_1_3658_29013}>
          <View style={styles.View_I3541_1_3658_27688}>
            <Text style={styles.Text_I3541_1_3658_27688}>Send Tokens</Text>
          </View>
        </View>
        <View style={styles.View_I3541_1_3658_24597} />
      </View>
      <View style={styles.View_3541_7}>
        <View style={styles.View_3541_8} />
        <View style={styles.View_3541_9}>
          <View style={styles.View_3541_10}>
            <Text style={styles.Text_3541_10}>To</Text>
          </View>
          <View style={styles.View_3541_11}>
            <View style={styles.View_I3541_11_1309_20904}>
              <Text style={styles.Text_I3541_11_1309_20904}>0x3Dc6...DxE9</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbef/47d0/98a5c9dfc1b7ac58ac86a1c420a7a9c1"
              }}
              style={styles.ImageBackground_I3541_11_1309_20905}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_3541_13}>
        <View style={styles.View_I3541_13_3529_3059}>
          <View style={styles.View_I3541_13_3529_3059_3107_57474}>
            <View style={styles.View_I3541_13_3529_3059_3107_57474_3108_55510}>
              <View
                style={
                  styles.View_I3541_13_3529_3059_3107_57474_3108_55510_2747_42674
                }
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe61/b251/e7655702102495e5023879d4d695669b"
                  }}
                  style={
                    styles.ImageBackground_I3541_13_3529_3059_3107_57474_3108_55510_2747_42674_1899_17503
                  }
                />
                <View
                  style={
                    styles.View_I3541_13_3529_3059_3107_57474_3108_55510_2747_42674_3419_12684
                  }
                >
                  <Text
                    style={
                      styles.Text_I3541_13_3529_3059_3107_57474_3108_55510_2747_42674_3419_12684
                    }
                  >
                    🐼
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I3541_13_3529_3059_3107_57474_3108_55509}>
              <Text
                style={styles.Text_I3541_13_3529_3059_3107_57474_3108_55509}
              >
                Queen Bee
              </Text>
            </View>
          </View>
          <View style={styles.View_I3541_13_3529_3059_3107_57475}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5aa8/34ff/2e286ffa7aa947dbb3751886547531d6"
              }}
              style={
                styles.ImageBackground_I3541_13_3529_3059_3107_57475_3108_55983
              }
            />
          </View>
        </View>
      </View>
      <View style={styles.View_3541_132}>
        <View style={styles.View_I3541_132_1897_13585}>
          <Text style={styles.Text_I3541_132_1897_13585}>Next</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_3541_1: {
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
  View_I3541_1_704_11279: {
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
  ImageBackground_I3541_1_704_11280: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.0109289617486334%")
  },
  View_I3541_1_704_11281: {
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
  View_I3541_1_3658_29013: {
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
  View_I3541_1_3658_27688: {
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0%")
  },
  Text_I3541_1_3658_27688: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3541_1_3658_24597: {
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
  View_3541_7: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("30.327868852459016%")
  },
  View_3541_8: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3541_9: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.1857923497267713%")
  },
  View_3541_10: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("0%")
  },
  Text_3541_10: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3541_11: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3541_11_1309_20904: {
    flexGrow: 1,
    width: wp("28.000000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.185792349726775%")
  },
  Text_I3541_11_1309_20904: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3541_11_1309_20905: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.2786882640234105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.99999999999999%"),
    top: hp("2.185792349726775%")
  },
  View_3541_13: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("19.398907103825135%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3541_13_3529_3059: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3541_13_3529_3059_3107_57474: {
    flexGrow: 1,
    width: wp("69.6%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.6393442622950865%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3541_13_3529_3059_3107_57474_3108_55510: {
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
  View_I3541_13_3529_3059_3107_57474_3108_55510_2747_42674: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3541_13_3529_3059_3107_57474_3108_55510_2747_42674_1899_17503: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3541_13_3529_3059_3107_57474_3108_55510_2747_42674_3419_12684: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1111328124999993%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3541_13_3529_3059_3107_57474_3108_55510_2747_42674_3419_12684: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3541_13_3529_3059_3107_57474_3108_55509: {
    flexGrow: 1,
    width: wp("56.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999997%"),
    top: hp("0.8196721311475379%")
  },
  Text_I3541_13_3529_3059_3107_57474_3108_55509: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3541_13_3529_3059_3107_57475: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%"),
    top: hp("2.7322404371584703%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3541_13_3529_3059_3107_57475_3108_55983: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3541_132: {
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
  View_I3541_132_1897_13585: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.666666666666664%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3541_132_1897_13585: {
    color: "rgba(245, 250, 128, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
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
