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
      <View style={styles.View_3586_409}>
        <View style={styles.View_3586_367}>
          <View style={styles.View_I3586_367_3518_14574}>
            <Text style={styles.Text_I3586_367_3518_14574}>
              Create Password
            </Text>
          </View>
          <View style={styles.View_I3586_367_3518_14575}>
            <Text style={styles.Text_I3586_367_3518_14575}>
              This password will unlock your Cryptooly wallet only on this
              service
            </Text>
          </View>
        </View>
        <View style={styles.View_3586_372}>
          <View style={styles.View_3586_373}>
            <View style={styles.View_I3586_373_1246_32189}>
              <Text style={styles.Text_I3586_373_1246_32189}>
                Password strength: Good
              </Text>
            </View>
            <View style={styles.View_I3586_373_1246_32190}>
              <View style={styles.View_I3586_373_1246_32191}>
                <Text style={styles.Text_I3586_373_1246_32191}>••••••••</Text>
              </View>
              <View style={styles.View_I3586_373_1246_32192}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/977f/e8e6/8bdb8202cdab5c29c2c3c816086b80b3"
                  }}
                  style={styles.ImageBackground_I3586_373_1246_32192_3589_206}
                />
              </View>
              <View style={styles.View_I3586_373_1246_32193}>
                <Text style={styles.Text_I3586_373_1246_32193}>
                  New password
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3586_374}>
            <View style={styles.View_I3586_374_1246_32189}>
              <Text style={styles.Text_I3586_374_1246_32189}>
                Must be at least 8 characters
              </Text>
            </View>
            <View style={styles.View_I3586_374_1246_32190}>
              <View style={styles.View_I3586_374_1246_32191}>
                <Text style={styles.Text_I3586_374_1246_32191}>••••••••</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56f0/93a9/275471da9b275256f8a9f53aafa5b57c"
                }}
                style={styles.ImageBackground_I3586_374_1246_32192}
              />
              <View style={styles.View_I3586_374_1246_32193}>
                <Text style={styles.Text_I3586_374_1246_32193}>
                  Confirm password
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3586_375}>
            <View style={styles.View_3586_376}>
              <Text style={styles.Text_3586_376}>Sign in with Face ID?</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4755/8f2d/4ec41290b3d4562139fd8fb21307db6a"
              }}
              style={styles.ImageBackground_3586_377}
            />
          </View>
        </View>
        <View style={styles.View_3586_378}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c208/c8d8/e048f5255711f1bf34024401008151f8"
            }}
            style={styles.ImageBackground_I3586_378_1953_19111}
          />
          <View style={styles.View_I3586_378_1953_19112}>
            <Text style={styles.Text_I3586_378_1953_19112}>
              I under stand that Cryptooly cannot recover this password for me.
              Learn more
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("3586_0"))
        }
      >
        <View style={styles.View_3586_345}>
          <View style={styles.View_3586_346}>
            <View style={styles.View_I3586_346_2892_43256}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbef/47d0/98a5c9dfc1b7ac58ac86a1c420a7a9c1"
                }}
                style={styles.ImageBackground_I3586_346_2892_43256_2730_41734}
              />
            </View>
          </View>
          <View style={styles.View_3586_356}>
            <View style={styles.View_I3586_356_2937_50297}>
              <View style={styles.View_I3586_356_2937_50298} />
              <View style={styles.View_I3586_356_2937_50299} />
            </View>
          </View>
          <View style={styles.View_3586_348}>
            <View style={styles.View_I3586_348_2892_46925}>
              <View style={styles.View_I3586_348_2892_46925_32_15}>
                <Text style={styles.Text_I3586_348_2892_46925_32_15}>1/3</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("3586_410"))
        }
      >
        <View style={styles.View_3586_407}>
          <View style={styles.View_I3586_407_1897_13585}>
            <Text style={styles.Text_I3586_407_1897_13585}>
              Create Password
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_3586_409: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("56.284153005464475%"),
    minHeight: hp("56.284153005464475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("14.207650273224044%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3586_367: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("12.568306010928962%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3586_367_3518_14574: {
    flexGrow: 1,
    width: wp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3586_367_3518_14574: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3586_367_3518_14575: {
    flexGrow: 1,
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.010928961748636%")
  },
  Text_I3586_367_3518_14575: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3586_372: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("30.601092896174865%"),
    minHeight: hp("30.601092896174865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.846994535519126%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3586_373: {
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
  View_I3586_373_1246_32189: {
    flexGrow: 1,
    width: wp("38.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("8.196721311475407%")
  },
  Text_I3586_373_1246_32189: {
    color: "rgba(164, 169, 183, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3586_373_1246_32190: {
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
  View_I3586_373_1246_32191: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    top: hp("3.2786885245901587%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%")
  },
  Text_I3586_373_1246_32191: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3586_373_1246_32192: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.2786882640234105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%"),
    top: hp("2.185792349726775%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3586_373_1246_32192_3589_206: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.6830601092896131%")
  },
  View_I3586_373_1246_32193: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    top: hp("1.0928961748633874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%")
  },
  Text_I3586_373_1246_32193: {
    color: "rgba(175, 180, 192, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3586_374: {
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
  View_I3586_374_1246_32189: {
    flexGrow: 1,
    width: wp("44.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("8.196721311475414%")
  },
  Text_I3586_374_1246_32189: {
    color: "rgba(164, 169, 183, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3586_374_1246_32190: {
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
  View_I3586_374_1246_32191: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%")
  },
  Text_I3586_374_1246_32191: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3586_374_1246_32192: {
    width: wp("6.4%"),
    height: hp("3.2786882640234105%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%")
  },
  View_I3586_374_1246_32193: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    top: hp("1.092896174863391%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%")
  },
  Text_I3586_374_1246_32193: {
    color: "rgba(175, 180, 192, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3586_375: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.13661202185792%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3586_376: {
    width: wp("47.199999999999996%"),
    minWidth: wp("47.199999999999996%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%")
  },
  Text_3586_376: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3586_377: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%")
  },
  View_3586_378: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49.72677595628416%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3586_378_1953_19111: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3586_378_1953_19112: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I3586_378_1953_19112: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3586_345: {
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
  View_3586_346: {
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
  View_I3586_346_2892_43256: {
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
  ImageBackground_I3586_346_2892_43256_2730_41734: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3586_356: {
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
  View_I3586_356_2937_50297: {
    flexGrow: 1,
    width: wp("24.089422607421877%"),
    height: hp("1.0930328421253976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I3586_356_2937_50298: {
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
  View_I3586_356_2937_50299: {
    width: wp("0.00026666667933265365%"),
    minWidth: wp("0.00026666667933265365%"),
    height: hp("0.00013661202834664636%"),
    minHeight: hp("0.00013661202834664636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.089160156249996%"),
    top: hp("0.5464480874316937%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3586_348: {
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
  View_I3586_348_2892_46925: {
    flexGrow: 1,
    width: wp("5.066666666666666%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333331%"),
    top: hp("1.3661202185792352%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3586_348_2892_46925_32_15: {
    flexGrow: 1,
    width: wp("5.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3586_348_2892_46925_32_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3586_407: {
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
  View_I3586_407_1897_13585: {
    flexGrow: 1,
    width: wp("35.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.733333333333334%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3586_407_1897_13585: {
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
