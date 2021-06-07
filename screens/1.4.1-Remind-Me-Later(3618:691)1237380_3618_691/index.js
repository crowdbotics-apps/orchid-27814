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
      <View style={styles.View_3618_692}>
        <View style={styles.View_3618_693}>
          <Text style={styles.Text_3618_693}>
            Don&#39;t risk losing your funds. protect your wallet by saving your
            seed phrase in a place you trust. It&#39;s the only way to recover
            your wallet if you get locked out of the app or get a new device.
          </Text>
        </View>
        <View style={styles.View_3618_694}>
          <View style={styles.View_I3618_694_1897_13585}>
            <Text style={styles.Text_I3618_694_1897_13585}>Start</Text>
          </View>
        </View>
        <View style={styles.View_3618_695}>
          <View style={styles.View_I3618_695_1898_16045}>
            <Text style={styles.Text_I3618_695_1898_16045}>
              Remind Me Later
            </Text>
          </View>
        </View>
        <View style={styles.View_3618_696}>
          <View style={styles.View_3618_697}>
            <View style={styles.View_I3618_697_2892_43256}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd24/acb1/124c41b4a2f0cbe8ed07b2f82e3f5d5a"
                }}
                style={styles.ImageBackground_I3618_697_2892_43256_2730_41734}
              />
            </View>
          </View>
          <View style={styles.View_3618_698}>
            <View style={styles.View_I3618_698_2937_50297}>
              <View style={styles.View_I3618_698_2937_50298} />
              <View style={styles.View_I3618_698_2937_50299} />
            </View>
          </View>
          <View style={styles.View_3618_699}>
            <View style={styles.View_I3618_699_2892_46925}>
              <View style={styles.View_I3618_699_2892_46925_32_15}>
                <Text style={styles.Text_I3618_699_2892_46925_32_15}>2/3</Text>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86b2/3ef6/650aa165e4f1a6096834fb7de94dd28a"
          }}
          style={styles.ImageBackground_3968_11}
        />
        <View style={styles.View_3618_744}>
          <Text style={styles.Text_3618_744}>Secure Your Wallet</Text>
        </View>
      </View>
      <View style={styles.View_3618_745}>
        <View style={styles.View_3618_746}>
          <View style={styles.View_I3618_746_3132_60124}>
            <View style={styles.View_I3618_746_3132_60125}>
              <View style={styles.View_I3618_746_3132_60123} />
              <View style={styles.View_I3618_746_3132_60126}>
                <Text style={styles.Text_I3618_746_3132_60126}>
                  Skip Account Security?
                </Text>
              </View>
            </View>
            <View style={styles.View_I3618_746_3132_60128} />
          </View>
        </View>
        <View style={styles.View_3618_770}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c208/c8d8/e048f5255711f1bf34024401008151f8"
            }}
            style={styles.ImageBackground_I3618_770_1953_19111}
          />
          <View style={styles.View_I3618_770_1953_19112}>
            <Text style={styles.Text_I3618_770_1953_19112}>
              I understand that if i lose mt seed phrase i will not be able to
              access my wallet
            </Text>
          </View>
        </View>
        <View style={styles.View_3618_748}>
          <View style={styles.View_I3618_748_3165_63954}>
            <View style={styles.View_I3618_748_1704_9498}>
              <View style={styles.View_I3618_748_1704_9498_1897_13495}>
                <Text style={styles.Text_I3618_748_1704_9498_1897_13495}>
                  Secure Now
                </Text>
              </View>
            </View>
            <View style={styles.View_I3618_748_1704_9522}>
              <View style={styles.View_I3618_748_1704_9522_1897_13585}>
                <Text style={styles.Text_I3618_748_1704_9522_1897_13585}>
                  Skip
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_3618_692: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("98.08743169398907%"),
    minHeight: hp("98.08743169398907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.0109289617486334%")
  },
  View_3618_693: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("55.1912568306011%")
  },
  Text_3618_693: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3618_694: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("90.43715846994536%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I3618_694_1897_13585: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.266666666666666%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3618_694_1897_13585: {
    color: "rgba(245, 250, 128, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3618_695: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("80.60109289617486%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3618_695_1898_16045: {
    flexGrow: 1,
    width: wp("35.199999999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2.185792349726782%")
  },
  Text_I3618_695_1898_16045: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3618_696: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3618_697: {
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
  View_I3618_697_2892_43256: {
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
  ImageBackground_I3618_697_2892_43256_2730_41734: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3618_698: {
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
  View_I3618_698_2937_50297: {
    flexGrow: 1,
    width: wp("48.17653401692708%"),
    height: hp("1.0930328421253976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I3618_698_2937_50298: {
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
  View_I3618_698_2937_50299: {
    width: wp("0.00026666667933265365%"),
    minWidth: wp("0.00026666667933265365%"),
    height: hp("0.00013661202834664636%"),
    minHeight: hp("0.00013661202834664636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.17630208333334%"),
    top: hp("0.5464480874316937%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3618_699: {
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
  View_I3618_699_2892_46925: {
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
  View_I3618_699_2892_46925_32_15: {
    flexGrow: 1,
    width: wp("5.6000000000000005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3618_699_2892_46925_32_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3968_11: {
    width: wp("70.66666666666667%"),
    minWidth: wp("70.66666666666667%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666666%"),
    top: hp("20.355191256830604%"),
    resizeMode: "cover"
  },
  View_3618_744: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("8.196721311475411%")
  },
  Text_3618_744: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3618_745: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3618_746: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0.6000000238418579)"
  },
  View_I3618_746_3132_60124: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("35.519263262305756%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("75.40970265539617%"),
    backgroundColor: "rgba(248, 248, 249, 1)"
  },
  View_I3618_746_3132_60125: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3618_746_3132_60123: {
    width: wp("12.8%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.6%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(209, 212, 219, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I3618_746_3132_60126: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("5.191256830601091%")
  },
  Text_I3618_746_3132_60126: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3618_746_3132_60128: {
    width: wp("0.00026666667933265365%"),
    minWidth: wp("0.00026666667933265365%"),
    height: hp("0.00013661202834664636%"),
    minHeight: hp("0.00013661202834664636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.99986979166667%"),
    top: hp("35.519125683060096%")
  },
  View_3618_770: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("86.6120218579235%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3618_770_1953_19111: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3618_770_1953_19112: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I3618_770_1953_19112: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3618_748: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15.573770491803279%"),
    minHeight: hp("15.573770491803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("95.3551912568306%"),
    backgroundColor: "rgba(250, 250, 250, 0.20000000298023224)"
  },
  View_I3618_748_3165_63954: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.092896174863398%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3618_748_1704_9498: {
    width: wp("41.6%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(215, 228, 227, 1)"
  },
  View_I3618_748_1704_9498_1897_13495: {
    flexGrow: 1,
    width: wp("25.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3618_748_1704_9498_1897_13495: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3618_748_1704_9522: {
    width: wp("41.6%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I3618_748_1704_9522_1897_13585: {
    flexGrow: 1,
    width: wp("9.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.13333333333334%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3618_748_1704_9522_1897_13585: {
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
