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
      <View style={styles.View_3581_18734}>
        <View style={styles.View_I3581_18734_704_11279} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da78/9e1d/32dc693200ea9afa09c0eed02d6e60d1"
          }}
          style={styles.ImageBackground_I3581_18734_704_11280}
        />
        <View style={styles.View_I3581_18734_704_11281} />
        <View style={styles.View_I3581_18734_3658_29013}>
          <View style={styles.View_I3581_18734_3658_27688}>
            <Text style={styles.Text_I3581_18734_3658_27688}>
              Reveal Seed Phrase
            </Text>
          </View>
        </View>
        <View style={styles.View_I3581_18734_3658_24597} />
      </View>
      <View style={styles.View_3581_18737}>
        <View style={styles.View_I3581_18737_3107_57474}>
          <View style={styles.View_I3581_18737_3107_57474_3108_55510}>
            <View
              style={styles.View_I3581_18737_3107_57474_3108_55510_2747_42674}
            >
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca60/dc3e/faeed1b60e2a9165c8f61e6db3a9b0af"
                }}
                style={
                  styles.ImageBackground_I3581_18737_3107_57474_3108_55510_2747_42674_1412_10718
                }
              />
            </View>
          </View>
          <View style={styles.View_I3581_18737_3107_57474_3108_55509}>
            <Text style={styles.Text_I3581_18737_3107_57474_3108_55509}>
              DO NOT share this phrase with anymore! These words can be used to
              steal all your accounts
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3582_18754}>
        <View style={styles.View_3581_18905}>
          <Text style={styles.Text_3581_18905}>
            then vacant hub ride avoid girl alien cross usage exist comic upon
          </Text>
        </View>
        <View style={styles.View_3581_18906}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1de/9e0c/8e4a8fa8c134d9776c95269257ff0518"
            }}
            style={styles.ImageBackground_I3581_18906_3406_12515}
          />
          <View style={styles.View_I3581_18906_3406_12516}>
            <Text style={styles.Text_I3581_18906_3406_12516}>
              Copy to clipboard
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3581_18773}>
        <Text style={styles.Text_3581_18773}>Your seed phrase</Text>
      </View>
      <View style={styles.View_3581_18768}>
        <View style={styles.View_3581_18769}>
          <View style={styles.View_I3581_18769_429_15588}>
            <Text style={styles.Text_I3581_18769_429_15588}>Text</Text>
          </View>
        </View>
        <View style={styles.View_3581_18770}>
          <View style={styles.View_I3581_18770_429_15620}>
            <Text style={styles.Text_I3581_18770_429_15620}>QR Code</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3581_18736}>
        <Text style={styles.Text_3581_18736}>
          If you ever change browser or move computers, you will need this seed
          phrase to access your accounts. Save them somewhere safe and secret
        </Text>
      </View>
      <View style={styles.View_3582_18755}>
        <View style={styles.View_I3582_18755_1897_13585}>
          <Text style={styles.Text_I3582_18755_1897_13585}>Cancel</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_3581_18734: {
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
  View_I3581_18734_704_11279: {
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
  ImageBackground_I3581_18734_704_11280: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.0109289617486334%")
  },
  View_I3581_18734_704_11281: {
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
  View_I3581_18734_3658_29013: {
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
  View_I3581_18734_3658_27688: {
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0%")
  },
  Text_I3581_18734_3658_27688: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3581_18734_3658_24597: {
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
  View_3581_18737: {
    width: wp("87.2%"),
    height: hp("13.114754098360656%"),
    top: hp("35.79234972677596%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    backgroundColor: "rgba(244, 244, 246, 1)"
  },
  View_I3581_18737_3107_57474: {
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
  View_I3581_18737_3107_57474_3108_55510: {
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
  View_I3581_18737_3107_57474_3108_55510_2747_42674: {
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
  ImageBackground_I3581_18737_3107_57474_3108_55510_2747_42674_1412_10718: {
    flexGrow: 1,
    width: wp("8.888433837890625%"),
    height: hp("4.11640490339102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8889322916666664%"),
    top: hp("0.674255037568301%")
  },
  View_I3581_18737_3107_57474_3108_55509: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999997%"),
    top: hp("0%")
  },
  Text_I3581_18737_3107_57474_3108_55509: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3582_18754: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("20.76502732240437%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("64.20765027322405%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3581_18905: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.1857923497267677%")
  },
  Text_3581_18905: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3581_18906: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("12.021857923497265%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I3581_18906_3406_12515: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.333333333333332%"),
    top: hp("1.0928961748633839%")
  },
  View_I3581_18906_3406_12516: {
    flexGrow: 1,
    width: wp("31.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.86666666666667%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3581_18906_3406_12516: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3581_18773: {
    width: wp("35.199999999999996%"),
    minWidth: wp("35.199999999999996%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("58.7431693989071%")
  },
  Text_3581_18773: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3581_18768: {
    width: wp("45.33333333333333%"),
    minWidth: wp("45.33333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("52.18579234972678%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3581_18769: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 249, 1)"
  },
  View_I3581_18769_429_15588: {
    flexGrow: 1,
    width: wp("9.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("0.5464480874316919%")
  },
  Text_I3581_18769_429_15588: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3581_18770: {
    width: wp("26.93333333333333%"),
    minWidth: wp("26.93333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3581_18770_429_15620: {
    flexGrow: 1,
    width: wp("18.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666669%"),
    top: hp("0.5464480874316919%")
  },
  Text_I3581_18770_429_15620: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3581_18736: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("19.398907103825135%")
  },
  Text_3581_18736: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3582_18755: {
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
  View_I3582_18755_1897_13585: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.26666666666667%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3582_18755_1897_13585: {
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
