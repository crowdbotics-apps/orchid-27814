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
      <View style={styles.View_3589_521}>
        <View style={styles.View_3589_522}>
          <View style={styles.View_I3589_522_2892_43256}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd24/acb1/124c41b4a2f0cbe8ed07b2f82e3f5d5a"
              }}
              style={styles.ImageBackground_I3589_522_2892_43256_2730_41734}
            />
          </View>
        </View>
        <View style={styles.View_3589_523}>
          <View style={styles.View_I3589_523_2937_50297}>
            <View style={styles.View_I3589_523_2937_50298} />
            <View style={styles.View_I3589_523_2937_50299} />
          </View>
        </View>
        <View style={styles.View_3589_524}>
          <View style={styles.View_I3589_524_2892_46925}>
            <View style={styles.View_I3589_524_2892_46925_32_15}>
              <Text style={styles.Text_I3589_524_2892_46925_32_15}>2/3</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3589_570}>
        <Text style={styles.Text_3589_570}>Secure Your Wallet</Text>
      </View>
      <View style={styles.View_3589_597}>
        <View style={styles.View_I3589_597_59_39}>
          <View style={styles.View_I3589_597_59_40}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19f7/a8cd/7a70c0ba59104709ffa13521cefc8674"
              }}
              style={styles.ImageBackground_I3589_597_59_40_3039_56297}
            />
          </View>
          <View style={styles.View_I3589_597_59_41}>
            <Text style={styles.Text_I3589_597_59_41}>
              Why is it important?
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3589_595}>
        <Text style={styles.Text_3589_595}>
          Secure your wallet&#39;s seed phrase
        </Text>
      </View>
      <View style={styles.View_3589_614}>
        <View style={styles.View_3589_623}>
          <View style={styles.View_3589_615}>
            <Text style={styles.Text_3589_615}>
              Write down your seed phrase on a cryptooly of paper and store in a
              safe place.
            </Text>
          </View>
          <View style={styles.View_3589_621}>
            <Text style={styles.Text_3589_621}>
              Security lever: Very strong
            </Text>
          </View>
          <View style={styles.View_3589_644}>
            <View style={styles.View_I3589_644_2950_50470}>
              <View style={styles.View_I3589_644_2950_50460} />
              <View style={styles.View_I3589_644_2950_50461} />
              <View style={styles.View_I3589_644_2950_50462} />
              <View style={styles.View_I3589_644_2950_50463} />
            </View>
          </View>
          <View style={styles.View_3589_622}>
            <Text style={styles.Text_3589_622}>
              Risks are: ??? You lose it ??? You forget where you put it ??? Someone
              else finds it
            </Text>
          </View>
          <View style={styles.View_3589_624}>
            <Text style={styles.Text_3589_624}>
              Other options: Doesn&#39;t have to be paper!
            </Text>
          </View>
          <View style={styles.View_3589_625}>
            <Text style={styles.Text_3589_625}>
              Tips: ??? Store in bank vault ??? Store in a safe ??? Store in multiple
              secret places
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3589_629}>
        <View style={styles.View_I3589_629_1897_13585}>
          <Text style={styles.Text_I3589_629_1897_13585}>Start</Text>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_3589_521: {
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
  View_3589_522: {
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
  View_I3589_522_2892_43256: {
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
  ImageBackground_I3589_522_2892_43256_2730_41734: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3589_523: {
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
  View_I3589_523_2937_50297: {
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
  View_I3589_523_2937_50298: {
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
  View_I3589_523_2937_50299: {
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
  View_3589_524: {
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
  View_I3589_524_2892_46925: {
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
  View_I3589_524_2892_46925_32_15: {
    flexGrow: 1,
    width: wp("5.6000000000000005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3589_524_2892_46925_32_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3589_570: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("14.207650273224044%")
  },
  Text_3589_570: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3589_597: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("25.683060109289617%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3589_597_59_39: {
    flexGrow: 1,
    width: wp("40%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3589_597_59_40: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3589_597_59_40_3039_56297: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3589_597_59_41: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I3589_597_59_41: {
    color: "rgba(1, 110, 137, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3589_595: {
    width: wp("67.46666666666667%"),
    minWidth: wp("67.46666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("20.21857923497268%")
  },
  Text_3589_595: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3589_614: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("54.09836065573771%"),
    minHeight: hp("54.09836065573771%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("31.147540983606557%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3589_623: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("48.63387978142077%"),
    minHeight: hp("48.63387978142077%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.1857923497267713%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3589_615: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3589_615: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3589_621: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.196721311475414%")
  },
  Text_3589_621: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3589_644: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.114754098360663%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3589_644_2950_50470: {
    flexGrow: 1,
    width: wp("26.666666666666668%"),
    height: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3589_644_2950_50460: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(16, 140, 74, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I3589_644_2950_50461: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%"),
    top: hp("0%"),
    backgroundColor: "rgba(16, 140, 74, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I3589_644_2950_50462: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.333333333333332%"),
    top: hp("0%"),
    backgroundColor: "rgba(16, 140, 74, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I3589_644_2950_50463: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%"),
    backgroundColor: "rgba(16, 140, 74, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_3589_622: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.84699453551913%")
  },
  Text_3589_622: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3589_624: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30.601092896174876%")
  },
  Text_3589_624: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3589_625: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.51912568306011%")
  },
  Text_3589_625: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3589_629: {
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
  View_I3589_629_1897_13585: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.266666666666666%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3589_629_1897_13585: {
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
