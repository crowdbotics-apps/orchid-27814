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
      <View style={styles.View_3518_14522}>
        <View style={styles.View_I3518_14522_704_11279} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da78/9e1d/32dc693200ea9afa09c0eed02d6e60d1"
          }}
          style={styles.ImageBackground_I3518_14522_704_11280}
        />
        <View style={styles.View_I3518_14522_704_11281} />
        <View style={styles.View_I3518_14522_3658_29013}>
          <View style={styles.View_I3518_14522_3658_27688}>
            <Text style={styles.Text_I3518_14522_3658_27688}>Security</Text>
          </View>
        </View>
        <View style={styles.View_I3518_14522_3658_24597} />
      </View>
      <View style={styles.View_3524_54}>
        <View style={styles.View_3524_44}>
          <View style={styles.View_I3524_44_3518_14574}>
            <Text style={styles.Text_I3524_44_3518_14574}>
              Clear Privacy Data
            </Text>
          </View>
          <View style={styles.View_I3524_44_3518_14575}>
            <Text style={styles.Text_I3524_44_3518_14575}>
              Clear Priacy data so all websites must request access to view
              account information again
            </Text>
          </View>
        </View>
        <View style={styles.View_3524_51}>
          <View style={styles.View_I3524_51_535_24}>
            <Text style={styles.Text_I3524_51_535_24}>Clear Privacy Data</Text>
          </View>
        </View>
        <View style={styles.View_3524_55}>
          <View style={styles.View_I3524_55_3518_14574}>
            <Text style={styles.Text_I3524_55_3518_14574}>
              Clear Browser History
            </Text>
          </View>
          <View style={styles.View_I3524_55_3518_14575}>
            <Text style={styles.Text_I3524_55_3518_14575}>
              Choose this option to claer your entire browsing history
            </Text>
          </View>
        </View>
        <View style={styles.View_3524_58}>
          <View style={styles.View_I3524_58_535_44}>
            <Text style={styles.Text_I3524_58_535_44}>
              Clear Browser History
            </Text>
          </View>
        </View>
        <View style={styles.View_3524_61}>
          <View style={styles.View_I3524_61_3518_14574}>
            <Text style={styles.Text_I3524_61_3518_14574}>
              Clear Browser Cookies
            </Text>
          </View>
          <View style={styles.View_I3524_61_3518_14575}>
            <Text style={styles.Text_I3524_61_3518_14575}>
              Choose this option to claer your entire browerr’s cookies
            </Text>
          </View>
        </View>
        <View style={styles.View_3524_64}>
          <View style={styles.View_I3524_64_535_44}>
            <Text style={styles.Text_I3524_64_535_44}>
              Clear Browser Cookies
            </Text>
          </View>
        </View>
        <View style={styles.View_3524_66}>
          <View style={styles.View_I3524_66_3524_1}>
            <View style={styles.View_I3524_66_3524_2}>
              <View style={styles.View_I3524_66_3524_3}>
                <Text style={styles.Text_I3524_66_3524_3}>Privacy Mode</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4755/8f2d/4ec41290b3d4562139fd8fb21307db6a"
                }}
                style={styles.ImageBackground_I3524_66_3524_4}
              />
            </View>
            <View style={styles.View_I3524_66_3524_5}>
              <Text style={styles.Text_I3524_66_3524_5}>
                Website must request access to view your account information
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3524_75}>
          <View style={styles.View_I3524_75_3524_1}>
            <View style={styles.View_I3524_75_3524_2}>
              <View style={styles.View_I3524_75_3524_3}>
                <Text style={styles.Text_I3524_75_3524_3}>
                  Participate in MetaMetrics
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f6e/2707/faddf09dba75c7645570c94e339cad65"
                }}
                style={styles.ImageBackground_I3524_75_3524_4}
              />
            </View>
            <View style={styles.View_I3524_75_3524_5}>
              <Text style={styles.Text_I3524_75_3524_5}>
                Participate in MetaMetrics to help us make Cryptooly better
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3524_91}>
          <View style={styles.View_I3524_91_3524_1}>
            <View style={styles.View_I3524_91_3524_2}>
              <View style={styles.View_I3524_91_3524_3}>
                <Text style={styles.Text_I3524_91_3524_3}>
                  Get Incoming Transactions
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4755/8f2d/4ec41290b3d4562139fd8fb21307db6a"
                }}
                style={styles.ImageBackground_I3524_91_3524_4}
              />
            </View>
            <View style={styles.View_I3524_91_3524_5}>
              <Text style={styles.Text_I3524_91_3524_5}>
                Third party APIs (Etherscan are used to show your incoming
                transactions in the history. Turn off if you don’t want us to
                pull data from those service
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3524_43}>
        <Text style={styles.Text_3524_43}>Privacy</Text>
      </View>
      <View style={styles.View_3518_14524}>
        <View style={styles.View_3518_14583}>
          <View style={styles.View_I3518_14583_3518_14574}>
            <Text style={styles.Text_I3518_14583_3518_14574}>
              Protech your wallet
            </Text>
          </View>
          <View style={styles.View_I3518_14583_3518_14575}>
            <Text style={styles.Text_I3518_14583_3518_14575}>
              Protect your wallet by saving your seed phrase in various places
              like on a cryptooly of paper, password manager and/or the cloud
            </Text>
          </View>
        </View>
        <View style={styles.View_3518_14757}>
          <View style={styles.View_3518_14528}>
            <View style={styles.View_I3518_14528_3406_12521}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7477/06af/825ac53df6edb36cd0c43f50796af94e"
                }}
                style={styles.ImageBackground_I3518_14528_3406_12521_3943_7593}
              />
            </View>
            <View style={styles.View_I3518_14528_3406_12522}>
              <Text style={styles.Text_I3518_14528_3406_12522}>
                Seed phrase backed up
              </Text>
            </View>
          </View>
          <View style={styles.View_3518_14753}>
            <View style={styles.View_3518_14751}>
              <View style={styles.View_I3518_14751_535_44}>
                <Text style={styles.Text_I3518_14751_535_44}>Backup Again</Text>
              </View>
            </View>
            <View style={styles.View_3518_14742}>
              <View style={styles.View_I3518_14742_535_26}>
                <Text style={styles.Text_I3518_14742_535_26}>
                  Reveal Seed Phrase
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3518_14589}>
          <View style={styles.View_I3518_14589_3518_14574}>
            <Text style={styles.Text_I3518_14589_3518_14574}>Password</Text>
          </View>
          <View style={styles.View_I3518_14589_3518_14575}>
            <Text style={styles.Text_I3518_14589_3518_14575}>
              Choose the amount of time before the application automatically
              locks
            </Text>
          </View>
        </View>
        <View style={styles.View_3518_14758}>
          <View style={styles.View_I3518_14758_535_44}>
            <Text style={styles.Text_I3518_14758_535_44}>Change Password</Text>
          </View>
        </View>
        <View style={styles.View_3518_14595}>
          <View style={styles.View_I3518_14595_3518_14574}>
            <Text style={styles.Text_I3518_14595_3518_14574}>Auto-lock</Text>
          </View>
          <View style={styles.View_I3518_14595_3518_14575}>
            <Text style={styles.Text_I3518_14595_3518_14575}>
              Choose the amount of time before the application automatically
              locks
            </Text>
          </View>
        </View>
        <View style={styles.View_3518_14538}>
          <View style={styles.View_I3518_14538_2949_5398}>
            <Text style={styles.Text_I3518_14538_2949_5398}>
              After 30 seconds
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5aa8/34ff/2e286ffa7aa947dbb3751886547531d6"
            }}
            style={styles.ImageBackground_I3518_14538_2949_5399}
          />
        </View>
        <View style={styles.View_3524_36}>
          <View style={styles.View_I3524_36_3524_1}>
            <View style={styles.View_I3524_36_3524_2}>
              <View style={styles.View_I3524_36_3524_3}>
                <Text style={styles.Text_I3524_36_3524_3}>
                  Sign in with Face ID?
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4755/8f2d/4ec41290b3d4562139fd8fb21307db6a"
                }}
                style={styles.ImageBackground_I3524_36_3524_4}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_3518_14607}>
          <View style={styles.View_I3518_14607_3518_14574}>
            <Text style={styles.Text_I3518_14607_3518_14574}>
              Show private key for &quot;Queen Bee&quot;
            </Text>
          </View>
          <View style={styles.View_I3518_14607_3518_14575}>
            <Text style={styles.Text_I3518_14607_3518_14575}>
              This is the private key for the current selected account:
              Account1. Never disclose this key. Anyone with your private key
              can fully control your account, including transferring away any of
              your funds.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("293.9890710382514%") },
  View_3518_14522: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("293.9890710382514%"),
    minHeight: hp("293.9890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14522_704_11279: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("64.16428362736937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.6000000238418579
  },
  ImageBackground_I3518_14522_704_11280: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.0109289617486334%")
  },
  View_I3518_14522_704_11281: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("285.79234972677597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.19672131147541%"),
    backgroundColor: "rgba(248, 248, 249, 1)",
    overflow: "hidden"
  },
  View_I3518_14522_3658_29013: {
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
  View_I3518_14522_3658_27688: {
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0%")
  },
  Text_I3518_14522_3658_27688: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3518_14522_3658_24597: {
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
  View_3524_54: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("136.0655737704918%"),
    minHeight: hp("136.0655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("153.27868852459017%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3524_44: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("15.846994535519126%"),
    minHeight: hp("15.846994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3524_44_3518_14574: {
    flexGrow: 1,
    width: wp("41.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3524_44_3518_14574: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3524_44_3518_14575: {
    flexGrow: 1,
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.010928961748647%")
  },
  Text_I3524_44_3518_14575: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3524_51: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.12568306010928%"),
    backgroundColor: "rgba(244, 244, 246, 1)"
  },
  View_I3524_51_535_24: {
    flexGrow: 1,
    width: wp("38.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.266666666666666%"),
    top: hp("1.639344262295083%")
  },
  Text_I3524_51_535_24: {
    color: "rgba(221, 223, 228, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3524_55: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("12.568306010928962%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28.96174863387978%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3524_55_3518_14574: {
    flexGrow: 1,
    width: wp("49.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3524_55_3518_14574: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3524_55_3518_14575: {
    flexGrow: 1,
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.010928961748618%")
  },
  Text_I3524_55_3518_14575: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3524_58: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.80874316939892%"),
    backgroundColor: "rgba(215, 228, 227, 1)"
  },
  View_I3524_58_535_44: {
    flexGrow: 1,
    width: wp("45.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.666666666666664%"),
    top: hp("1.639344262295083%")
  },
  Text_I3524_58_535_44: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3524_61: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("12.568306010928962%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54.64480874316942%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3524_61_3518_14574: {
    flexGrow: 1,
    width: wp("51.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3524_61_3518_14574: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3524_61_3518_14575: {
    flexGrow: 1,
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.010928961748618%")
  },
  Text_I3524_61_3518_14575: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3524_64: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("70.49180327868854%"),
    backgroundColor: "rgba(215, 228, 227, 1)"
  },
  View_I3524_64_535_44: {
    flexGrow: 1,
    width: wp("47.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.733333333333327%"),
    top: hp("1.6393442622950545%")
  },
  Text_I3524_64_535_44: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3524_66: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("14.207650273224044%"),
    minHeight: hp("14.207650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("80.327868852459%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3524_66_3524_1: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3524_66_3524_2: {
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
  View_I3524_66_3524_3: {
    width: wp("30.933333333333334%"),
    minWidth: wp("30.933333333333334%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475699%")
  },
  Text_I3524_66_3524_3: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3524_66_3524_4: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%")
  },
  View_I3524_66_3524_5: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043701%")
  },
  Text_I3524_66_3524_5: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3524_75: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("14.207650273224044%"),
    minHeight: hp("14.207650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("97.81420765027323%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3524_75_3524_1: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("14.207650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3524_75_3524_2: {
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
  View_I3524_75_3524_3: {
    width: wp("59.73333333333334%"),
    minWidth: wp("59.73333333333334%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.819672131147513%")
  },
  Text_I3524_75_3524_3: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3524_75_3524_4: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%")
  },
  View_I3524_75_3524_5: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.65027322404373%")
  },
  Text_I3524_75_3524_5: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3524_91: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("20.76502732240437%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("115.30054644808746%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3524_91_3524_1: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3524_91_3524_2: {
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
  View_I3524_91_3524_3: {
    width: wp("60.8%"),
    minWidth: wp("60.8%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.819672131147513%")
  },
  Text_I3524_91_3524_3: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3524_91_3524_4: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%")
  },
  View_I3524_91_3524_5: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043644%")
  },
  Text_I3524_91_3524_5: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3524_43: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("147.26775956284152%")
  },
  Text_3524_43: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3518_14524: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("127.86885245901641%"),
    minHeight: hp("127.86885245901641%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("19.398907103825135%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3518_14583: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14583_3518_14574: {
    flexGrow: 1,
    width: wp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3518_14583_3518_14574: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3518_14583_3518_14575: {
    flexGrow: 1,
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.010928961748636%")
  },
  Text_I3518_14583_3518_14575: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3518_14757: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.404371584699458%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3518_14528: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3518_14528_3406_12521: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("1.6393442622950758%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3518_14528_3406_12521_3943_7593: {
    flexGrow: 1,
    width: wp("4.761599731445313%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("0.4098360655737707%")
  },
  View_I3518_14528_3406_12522: {
    flexGrow: 1,
    width: wp("41.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.93333333333333%"),
    top: hp("1.6393442622950758%")
  },
  Text_I3518_14528_3406_12522: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3518_14753: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.7431693989071%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3518_14751: {
    width: wp("35.46666666666667%"),
    minWidth: wp("35.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(215, 228, 227, 1)"
  },
  View_I3518_14751_535_44: {
    flexGrow: 1,
    width: wp("28.799999999999997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333332%"),
    top: hp("1.63934426229509%")
  },
  Text_I3518_14751_535_44: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3518_14742: {
    width: wp("47.46666666666667%"),
    minWidth: wp("47.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.733333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I3518_14742_535_26: {
    flexGrow: 1,
    width: wp("41.06666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("1.63934426229509%")
  },
  Text_I3518_14742_535_26: {
    color: "rgba(245, 250, 128, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3518_14589: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("12.568306010928962%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40.98360655737706%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14589_3518_14574: {
    flexGrow: 1,
    width: wp("22.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3518_14589_3518_14574: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3518_14589_3518_14575: {
    flexGrow: 1,
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.0109289617486255%")
  },
  Text_I3518_14589_3518_14575: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3518_14758: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("56.830601092896174%"),
    backgroundColor: "rgba(215, 228, 227, 1)"
  },
  View_I3518_14758_535_44: {
    flexGrow: 1,
    width: wp("37.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.666666666666664%"),
    top: hp("1.639344262295083%")
  },
  Text_I3518_14758_535_44: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3518_14595: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("12.568306010928962%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66.66666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14595_3518_14574: {
    flexGrow: 1,
    width: wp("22.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3518_14595_3518_14574: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3518_14595_3518_14575: {
    flexGrow: 1,
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.010928961748647%")
  },
  Text_I3518_14595_3518_14575: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3518_14538: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("82.51366120218579%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3518_14538_2949_5398: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3518_14538_2949_5398: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3518_14538_2949_5399: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.2786882640234105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%"),
    top: hp("2.1857923497267677%")
  },
  View_3524_36: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("93.44262295081967%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3524_36_3524_1: {
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
  View_I3524_36_3524_2: {
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
  View_I3524_36_3524_3: {
    width: wp("47.199999999999996%"),
    minWidth: wp("47.199999999999996%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%")
  },
  Text_I3524_36_3524_3: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3524_36_3524_4: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%")
  },
  View_3518_14607: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("25.683060109289617%"),
    minHeight: hp("25.683060109289617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("102.18579234972677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14607_3518_14574: {
    flexGrow: 1,
    width: wp("76.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3518_14607_3518_14574: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3518_14607_3518_14575: {
    flexGrow: 1,
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.010928961748633%")
  },
  Text_I3518_14607_3518_14575: {
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
