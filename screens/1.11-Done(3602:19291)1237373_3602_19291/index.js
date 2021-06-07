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
      <View style={styles.View_3602_19292}>
        <View style={styles.View_3602_19293}>
          <View style={styles.View_I3602_19293_2892_43256}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd24/acb1/124c41b4a2f0cbe8ed07b2f82e3f5d5a"
              }}
              style={styles.ImageBackground_I3602_19293_2892_43256_2730_41734}
            />
          </View>
        </View>
        <View style={styles.View_3602_19294}>
          <View style={styles.View_I3602_19294_2937_50297}>
            <View style={styles.View_I3602_19294_2937_50298} />
            <View style={styles.View_I3602_19294_2937_50299} />
          </View>
        </View>
        <View style={styles.View_3602_19295}>
          <View style={styles.View_I3602_19295_2892_46925}>
            <View style={styles.View_I3602_19295_2892_46925_32_15}>
              <Text style={styles.Text_I3602_19295_2892_46925_32_15}>3/3</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3602_19297}>
        <View style={styles.View_I3602_19297_1897_13585}>
          <Text style={styles.Text_I3602_19297_1897_13585}>Continute</Text>
        </View>
      </View>
      <View style={styles.View_3602_19356}>
        <View style={styles.View_I3602_19356_3023_54432}>
          <View style={styles.View_I3602_19356_3023_54433}>
            <Text style={styles.Text_I3602_19356_3023_54433}>
              Congratulations
            </Text>
          </View>
          <View style={styles.View_I3602_19356_3023_54434}>
            <Text style={styles.Text_I3602_19356_3023_54434}>
              you&#39;ve successfully protexted your wallet. Remember to keep
              your seed phrase safe, it&#39;s your responsibility! Leave
              yourself a hint? Cryptooly cannot recover your wallet should you
              lose it. You can find your seedphrase in Setting &gt; Security
              &amp; Privacy Learn more
            </Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0dcd/574a/b33b126766d1118c4d7ceec35c2c7ccb"
        }}
        style={styles.ImageBackground_3968_12}
      />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_3602_19292: {
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
  View_3602_19293: {
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
  View_I3602_19293_2892_43256: {
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
  ImageBackground_I3602_19293_2892_43256_2730_41734: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3602_19294: {
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
  View_I3602_19294_2937_50297: {
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
  View_I3602_19294_2937_50298: {
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
  View_I3602_19294_2937_50299: {
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
  View_3602_19295: {
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
  View_I3602_19295_2892_46925: {
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
  View_I3602_19295_2892_46925_32_15: {
    flexGrow: 1,
    width: wp("5.6000000000000005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3602_19295_2892_46925_32_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3602_19297: {
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
  View_I3602_19297_1897_13585: {
    flexGrow: 1,
    width: wp("20.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.2%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3602_19297_1897_13585: {
    color: "rgba(245, 250, 128, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3602_19356: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("43.30601092896175%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3602_19356_3023_54432: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3602_19356_3023_54433: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3602_19356_3023_54433: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3602_19356_3023_54434: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    minHeight: hp("36.0655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.918032786885249%")
  },
  Text_I3602_19356_3023_54434: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3968_12: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("22.540983606557376%"),
    minHeight: hp("22.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("16.39344262295082%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
