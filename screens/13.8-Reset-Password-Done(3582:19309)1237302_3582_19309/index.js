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
      <View style={styles.View_3582_19392}>
        <View style={styles.View_3582_19310}>
          <View style={styles.View_I3582_19310_704_11279} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da78/9e1d/32dc693200ea9afa09c0eed02d6e60d1"
            }}
            style={styles.ImageBackground_I3582_19310_704_11280}
          />
          <View style={styles.View_I3582_19310_704_11281} />
          <View style={styles.View_I3582_19310_3658_29013}>
            <View style={styles.View_I3582_19310_3658_27688}>
              <Text style={styles.Text_I3582_19310_3658_27688}>Security</Text>
            </View>
          </View>
          <View style={styles.View_I3582_19310_3658_24597} />
        </View>
        <View style={styles.View_3582_19312}>
          <View style={styles.View_3582_19319}>
            <View style={styles.View_I3582_19319_3518_14574}>
              <Text style={styles.Text_I3582_19319_3518_14574}>Password</Text>
            </View>
            <View style={styles.View_I3582_19319_3518_14575}>
              <Text style={styles.Text_I3582_19319_3518_14575}>
                Choose the amount of time before the application automatically
                locks
              </Text>
            </View>
          </View>
          <View style={styles.View_3582_19320}>
            <View style={styles.View_I3582_19320_535_44}>
              <Text style={styles.Text_I3582_19320_535_44}>
                Change Password
              </Text>
            </View>
          </View>
          <View style={styles.View_3582_19321}>
            <View style={styles.View_I3582_19321_3518_14574}>
              <Text style={styles.Text_I3582_19321_3518_14574}>Auto-lock</Text>
            </View>
            <View style={styles.View_I3582_19321_3518_14575}>
              <Text style={styles.Text_I3582_19321_3518_14575}>
                Choose the amount of time before the application automatically
                locks
              </Text>
            </View>
          </View>
          <View style={styles.View_3582_19322}>
            <View style={styles.View_I3582_19322_152_302}>
              <Text style={styles.Text_I3582_19322_152_302}>
                After 30 seconds
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5aa8/34ff/2e286ffa7aa947dbb3751886547531d6"
              }}
              style={styles.ImageBackground_I3582_19322_152_303}
            />
          </View>
          <View style={styles.View_3582_19323}>
            <View style={styles.View_I3582_19323_3524_1}>
              <View style={styles.View_I3582_19323_3524_2}>
                <View style={styles.View_I3582_19323_3524_3}>
                  <Text style={styles.Text_I3582_19323_3524_3}>
                    Sign in with Face ID?
                  </Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4755/8f2d/4ec41290b3d4562139fd8fb21307db6a"
                  }}
                  style={styles.ImageBackground_I3582_19323_3524_4}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_3582_19324}>
            <View style={styles.View_I3582_19324_3518_14574}>
              <Text style={styles.Text_I3582_19324_3518_14574}>
                Show private key for &quot;Queen Bee&quot;
              </Text>
            </View>
            <View style={styles.View_I3582_19324_3518_14575}>
              <Text style={styles.Text_I3582_19324_3518_14575}>
                This is the private key for the current selected account:
                Account1. Never disclose this key. Anyone with your private key
                can fully control your account, including transferring away any
                of your funds.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3582_19375}>
        <View style={styles.View_3582_19376}>
          <View style={styles.View_I3582_19376_3132_60124}>
            <View style={styles.View_I3582_19376_3132_60125}>
              <View style={styles.View_I3582_19376_3132_60123} />
              <View style={styles.View_I3582_19376_3132_60126}>
                <Text style={styles.Text_I3582_19376_3132_60126}>
                  Auto Lock
                </Text>
              </View>
            </View>
            <View style={styles.View_I3582_19376_3132_60128} />
          </View>
        </View>
        <View style={styles.View_3582_19377}>
          <View style={styles.View_3582_19393}>
            <View style={styles.View_I3582_19393_3114_586}>
              <View style={styles.View_I3582_19393_3114_586_3108_55554}>
                <Text style={styles.Text_I3582_19393_3114_586_3108_55554}>
                  Immediately
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3582_19399}>
            <View style={styles.View_I3582_19399_3114_586}>
              <View style={styles.View_I3582_19399_3114_586_3108_55554}>
                <Text style={styles.Text_I3582_19399_3114_586_3108_55554}>
                  After 5 seconds
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3582_19396}>
            <View style={styles.View_I3582_19396_3114_586}>
              <View style={styles.View_I3582_19396_3114_586_3108_55554}>
                <Text style={styles.Text_I3582_19396_3114_586_3108_55554}>
                  After 15 seconds
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3582_19378}>
            <View style={styles.View_I3582_19378_3114_546}>
              <View style={styles.View_I3582_19378_3114_546_3108_55554}>
                <Text style={styles.Text_I3582_19378_3114_546_3108_55554}>
                  After 30seconds
                </Text>
              </View>
            </View>
            <View style={styles.View_I3582_19378_3114_547}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56f0/93a9/275471da9b275256f8a9f53aafa5b57c"
                }}
                style={styles.ImageBackground_I3582_19378_3114_547_3108_55983}
              />
            </View>
          </View>
          <View style={styles.View_3582_19379}>
            <View style={styles.View_I3582_19379_3114_586}>
              <View style={styles.View_I3582_19379_3114_586_3108_55554}>
                <Text style={styles.Text_I3582_19379_3114_586_3108_55554}>
                  After 60 seconds
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3582_21612}>
            <View style={styles.View_I3582_21612_3114_586}>
              <View style={styles.View_I3582_21612_3114_586_3108_55554}>
                <Text style={styles.Text_I3582_21612_3114_586_3108_55554}>
                  After 5 minutes
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3582_21615}>
            <View style={styles.View_I3582_21615_3114_586}>
              <View style={styles.View_I3582_21615_3114_586_3108_55554}>
                <Text style={styles.Text_I3582_21615_3114_586_3108_55554}>
                  After 10 minutes
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3582_21618}>
            <View style={styles.View_I3582_21618_3114_586}>
              <View style={styles.View_I3582_21618_3114_586_3108_55554}>
                <Text style={styles.Text_I3582_21618_3114_586_3108_55554}>
                  Never
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
  View_3582_19392: {
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
  View_3582_19310: {
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
  View_I3582_19310_704_11279: {
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
  ImageBackground_I3582_19310_704_11280: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.0109289617486334%")
  },
  View_I3582_19310_704_11281: {
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
  View_I3582_19310_3658_29013: {
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
  View_I3582_19310_3658_27688: {
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0%")
  },
  Text_I3582_19310_3658_27688: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3582_19310_3658_24597: {
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
  View_3582_19312: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("87.97814207650273%"),
    minHeight: hp("87.97814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("19.398907103825135%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3582_19319: {
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
  View_I3582_19319_3518_14574: {
    flexGrow: 1,
    width: wp("22.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3582_19319_3518_14574: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3582_19319_3518_14575: {
    flexGrow: 1,
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.010928961748636%")
  },
  Text_I3582_19319_3518_14575: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3582_19320: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.846994535519126%"),
    backgroundColor: "rgba(215, 228, 227, 1)"
  },
  View_I3582_19320_535_44: {
    flexGrow: 1,
    width: wp("37.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.666666666666664%"),
    top: hp("1.639344262295083%")
  },
  Text_I3582_19320_535_44: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3582_19321: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("12.568306010928962%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.683060109289617%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3582_19321_3518_14574: {
    flexGrow: 1,
    width: wp("22.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3582_19321_3518_14574: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3582_19321_3518_14575: {
    flexGrow: 1,
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.01092896174864%")
  },
  Text_I3582_19321_3518_14575: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3582_19322: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41.53005464480874%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3582_19322_152_302: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.732240437158474%")
  },
  Text_I3582_19322_152_302: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3582_19322_152_303: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.2786882640234105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%"),
    top: hp("2.732240437158474%")
  },
  View_3582_19323: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53.55191256830601%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3582_19323_3524_1: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3582_19323_3524_2: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3582_19323_3524_3: {
    width: wp("47.199999999999996%"),
    minWidth: wp("47.199999999999996%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%")
  },
  Text_I3582_19323_3524_3: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3582_19323_3524_4: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%")
  },
  View_3582_19324: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("25.683060109289617%"),
    minHeight: hp("25.683060109289617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("62.29508196721312%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3582_19324_3518_14574: {
    flexGrow: 1,
    width: wp("76.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3582_19324_3518_14574: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3582_19324_3518_14575: {
    flexGrow: 1,
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.010928961748618%")
  },
  Text_I3582_19324_3518_14575: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3582_19375: {
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
  View_3582_19376: {
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
  View_I3582_19376_3132_60124: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("77.04931373804644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.87978142076503%"),
    backgroundColor: "rgba(248, 248, 249, 1)"
  },
  View_I3582_19376_3132_60125: {
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
  View_I3582_19376_3132_60123: {
    width: wp("12.8%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.6%"),
    top: hp("1.092896174863391%"),
    backgroundColor: "rgba(209, 212, 219, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I3582_19376_3132_60126: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("5.191256830601091%")
  },
  Text_I3582_19376_3132_60126: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3582_19376_3132_60128: {
    width: wp("0.00026666667933265365%"),
    minWidth: wp("0.00026666667933265365%"),
    height: hp("0.00013661202834664636%"),
    minHeight: hp("0.00013661202834664636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.99986979166667%"),
    top: hp("77.04918032786884%")
  },
  View_3582_19377: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("59.01639344262295%"),
    minHeight: hp("59.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45.08196721311475%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3582_19393: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3582_19393_3114_586: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.092896174863391%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3582_19393_3114_586_3108_55554: {
    flexGrow: 1,
    width: wp("24.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3582_19393_3114_586_3108_55554: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3582_19399: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043723%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3582_19399_3114_586: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.092896174863391%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3582_19399_3114_586_3108_55554: {
    flexGrow: 1,
    width: wp("32.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3582_19399_3114_586_3108_55554: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3582_19396: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.300546448087438%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3582_19396_3114_586: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3582_19396_3114_586_3108_55554: {
    flexGrow: 1,
    width: wp("34.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3582_19396_3114_586_3108_55554: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3582_19378: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3582_19378_3114_546: {
    flexGrow: 1,
    width: wp("78.13333333333333%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3582_19378_3114_546_3108_55554: {
    flexGrow: 1,
    width: wp("33.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3582_19378_3114_546_3108_55554: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3582_19378_3114_547: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3582_19378_3114_547_3108_55983: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3582_19379: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30.601092896174862%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3582_19379_3114_586: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3582_19379_3114_586_3108_55554: {
    flexGrow: 1,
    width: wp("34.93333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3582_19379_3114_586_3108_55554: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3582_21612: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.25136612021859%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3582_21612_3114_586: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3582_21612_3114_586_3108_55554: {
    flexGrow: 1,
    width: wp("31.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3582_21612_3114_586_3108_55554: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3582_21615: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45.90163934426229%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3582_21615_3114_586: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.092896174863398%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3582_21615_3114_586_3108_55554: {
    flexGrow: 1,
    width: wp("33.06666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3582_21615_3114_586_3108_55554: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3582_21618: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53.55191256830601%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3582_21618_3114_586: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.092896174863398%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3582_21618_3114_586_3108_55554: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3582_21618_3114_586_3108_55554: {
    color: "rgba(118, 126, 147, 1)",
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
