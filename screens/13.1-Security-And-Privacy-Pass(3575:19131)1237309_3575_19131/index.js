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
      <View style={styles.View_3575_19133}>
        <View style={styles.View_I3575_19133_704_11279} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da78/9e1d/32dc693200ea9afa09c0eed02d6e60d1"
          }}
          style={styles.ImageBackground_I3575_19133_704_11280}
        />
        <View style={styles.View_I3575_19133_704_11281} />
        <View style={styles.View_I3575_19133_3658_29013}>
          <View style={styles.View_I3575_19133_3658_27688}>
            <Text style={styles.Text_I3575_19133_3658_27688}>
              Reveal Seed Phrase
            </Text>
          </View>
        </View>
        <View style={styles.View_I3575_19133_3658_24597} />
      </View>
      <View style={styles.View_3575_19219}>
        <Text style={styles.Text_3575_19219}>
          If you ever change browser or move computers, you will need this seed
          phrase to access your accounts. Save them somewhere safe and secret
        </Text>
      </View>
      <View style={styles.View_3579_16}>
        <View style={styles.View_I3579_16_3107_57474}>
          <View style={styles.View_I3579_16_3107_57474_3108_55510}>
            <View style={styles.View_I3579_16_3107_57474_3108_55510_2747_42674}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca60/dc3e/faeed1b60e2a9165c8f61e6db3a9b0af"
                }}
                style={
                  styles.ImageBackground_I3579_16_3107_57474_3108_55510_2747_42674_1412_10718
                }
              />
            </View>
          </View>
          <View style={styles.View_I3579_16_3107_57474_3108_55509}>
            <Text style={styles.Text_I3579_16_3107_57474_3108_55509}>
              DO NOT share this phrase with anymore! These words can be used to
              steal all your accounts
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3580_18743}>
        <Text style={styles.Text_3580_18743}>Enter password to continue</Text>
      </View>
      <View style={styles.View_3580_18741}>
        <View style={styles.View_I3580_18741_1234_33001}>
          <Text style={styles.Text_I3580_18741_1234_33001}>Password</Text>
        </View>
      </View>
      <View style={styles.View_3581_18774}>
        <View style={styles.View_I3581_18774_1897_13585}>
          <Text style={styles.Text_I3581_18774_1897_13585}>Next</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_3575_19133: {
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
  View_I3575_19133_704_11279: {
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
  ImageBackground_I3575_19133_704_11280: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.0109289617486334%")
  },
  View_I3575_19133_704_11281: {
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
  View_I3575_19133_3658_29013: {
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
  View_I3575_19133_3658_27688: {
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0%")
  },
  Text_I3575_19133_3658_27688: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3575_19133_3658_24597: {
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
  View_3575_19219: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("19.398907103825135%")
  },
  Text_3575_19219: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3579_16: {
    width: wp("87.2%"),
    height: hp("13.114754098360656%"),
    top: hp("35.79234972677596%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    backgroundColor: "rgba(244, 244, 246, 1)"
  },
  View_I3579_16_3107_57474: {
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
  View_I3579_16_3107_57474_3108_55510: {
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
  View_I3579_16_3107_57474_3108_55510_2747_42674: {
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
  ImageBackground_I3579_16_3107_57474_3108_55510_2747_42674_1412_10718: {
    flexGrow: 1,
    width: wp("8.888433837890625%"),
    height: hp("4.11640490339102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8889322916666664%"),
    top: hp("0.674255037568301%")
  },
  View_I3579_16_3107_57474_3108_55509: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999997%"),
    top: hp("0%")
  },
  Text_I3579_16_3107_57474_3108_55509: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3580_18743: {
    width: wp("64.8%"),
    minWidth: wp("64.8%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("52.18579234972678%")
  },
  Text_3580_18743: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3580_18741: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("58.19672131147541%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3580_18741_1234_33001: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.185792349726782%")
  },
  Text_I3580_18741_1234_33001: {
    color: "rgba(175, 180, 192, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3581_18774: {
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
  View_I3581_18774_1897_13585: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.666666666666664%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3581_18774_1897_13585: {
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
