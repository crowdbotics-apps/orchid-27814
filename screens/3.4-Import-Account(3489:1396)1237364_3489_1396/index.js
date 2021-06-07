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
      <View style={styles.View_3489_1741}>
        <View style={styles.View_I3489_1741_704_11279} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da78/9e1d/32dc693200ea9afa09c0eed02d6e60d1"
          }}
          style={styles.ImageBackground_I3489_1741_704_11280}
        />
        <View style={styles.View_I3489_1741_704_11281} />
        <View style={styles.View_I3489_1741_3658_29013}>
          <View style={styles.View_I3489_1741_3658_27688}>
            <Text style={styles.Text_I3489_1741_3658_27688}>
              Import An Account
            </Text>
          </View>
        </View>
        <View style={styles.View_I3489_1741_3658_24597} />
      </View>
      <View style={styles.View_3489_1855}>
        <Text style={styles.Text_3489_1855}>
          Imported accounts are viewable in your wallet but are not recorverable
          with your Cryptooly seed phrase. Learn more about imported accounts
          here.
        </Text>
      </View>
      <View style={styles.View_3489_1885}>
        <View style={styles.View_3489_1858}>
          <Text style={styles.Text_3489_1858}>Paste Your Prive Key String</Text>
        </View>
        <View style={styles.View_3489_1874}>
          <View style={styles.View_I3489_1874_2920_48369}>
            <View style={styles.View_I3489_1874_2920_48369_2554_44742}>
              <Text style={styles.Text_I3489_1874_2920_48369_2554_44742}>
                e.g.
                bc691db1e197914c7c0097ad6513efb6a2d68a5aad46afacf8800ffdeab91576
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3489_1886}>
        <View style={styles.View_I3489_1886_1897_13495}>
          <Text style={styles.Text_I3489_1886_1897_13495}>
            Or Scan A QR Code
          </Text>
        </View>
      </View>
      <View style={styles.View_3489_1890}>
        <View style={styles.View_I3489_1890_1897_13585}>
          <Text style={styles.Text_I3489_1890_1897_13585}>Import</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_3489_1741: {
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
  View_I3489_1741_704_11279: {
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
  ImageBackground_I3489_1741_704_11280: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.0109289617486334%")
  },
  View_I3489_1741_704_11281: {
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
  View_I3489_1741_3658_29013: {
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
  View_I3489_1741_3658_27688: {
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0%")
  },
  Text_I3489_1741_3658_27688: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3489_1741_3658_24597: {
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
  View_3489_1855: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("19.398907103825135%")
  },
  Text_3489_1855: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3489_1885: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("40.16393442622951%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3489_1858: {
    width: wp("63.733333333333334%"),
    minWidth: wp("63.733333333333334%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3489_1858: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3489_1874: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("14.207650273224044%"),
    minHeight: hp("14.207650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.010928961748633%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3489_1874_2920_48369: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.185792349726775%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3489_1874_2920_48369_2554_44742: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3489_1874_2920_48369_2554_44742: {
    color: "rgba(175, 180, 192, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3489_1886: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("86.6120218579235%"),
    backgroundColor: "rgba(215, 228, 227, 1)"
  },
  View_I3489_1886_1897_13495: {
    flexGrow: 1,
    width: wp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.6%"),
    top: hp("2.185792349726782%")
  },
  Text_I3489_1886_1897_13495: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3489_1890: {
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
  View_I3489_1890_1897_13585: {
    flexGrow: 1,
    width: wp("14.133333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.53333333333334%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3489_1890_1897_13585: {
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
