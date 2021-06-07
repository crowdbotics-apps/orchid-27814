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
      <View style={styles.View_3515_15527}>
        <View style={styles.View_I3515_15527_704_11279} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da78/9e1d/32dc693200ea9afa09c0eed02d6e60d1"
          }}
          style={styles.ImageBackground_I3515_15527_704_11280}
        />
        <View style={styles.View_I3515_15527_704_11281} />
        <View style={styles.View_I3515_15527_3658_29013}>
          <View style={styles.View_I3515_15527_3658_27688}>
            <Text style={styles.Text_I3515_15527_3658_27688}>General</Text>
          </View>
        </View>
        <View style={styles.View_I3515_15527_3658_24597} />
      </View>
      <View style={styles.View_3518_14610}>
        <View style={styles.View_3518_14611}>
          <View style={styles.View_I3518_14611_3518_14574}>
            <Text style={styles.Text_I3518_14611_3518_14574}>
              Currency Conversion
            </Text>
          </View>
          <View style={styles.View_I3518_14611_3518_14575}>
            <Text style={styles.Text_I3518_14611_3518_14575}>
              Display fiat values in using o specific currency throughout the
              application
            </Text>
          </View>
        </View>
        <View style={styles.View_3518_14612}>
          <View style={styles.View_I3518_14612_2949_6946}>
            <View style={styles.View_I3518_14612_2949_6947}>
              <Text style={styles.Text_I3518_14612_2949_6947}>
                Base Crrency
              </Text>
            </View>
            <View style={styles.View_I3518_14612_2949_6948}>
              <Text style={styles.Text_I3518_14612_2949_6948}>
                USD - United State Dollar
              </Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5aa8/34ff/2e286ffa7aa947dbb3751886547531d6"
            }}
            style={styles.ImageBackground_I3518_14612_2949_6949}
          />
        </View>
        <View style={styles.View_3518_14613}>
          <View style={styles.View_I3518_14613_3518_14574}>
            <Text style={styles.Text_I3518_14613_3518_14574}>
              Privacy Currency
            </Text>
          </View>
          <View style={styles.View_I3518_14613_3518_14575}>
            <Text style={styles.Text_I3518_14613_3518_14575}>
              Select Native to prioritize displaying values in the native
              currency of the chain (e.g. ETH). Select Fiat to prioritize
              displaying values in your selected fiat currency
            </Text>
          </View>
        </View>
        <View style={styles.View_3518_14614}>
          <View style={styles.View_3518_14615}>
            <View style={styles.View_I3518_14615_334_11799}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/985c/c33a/ab0a8427f5a52377ae7adfa6004d79bf"
                }}
                style={styles.ImageBackground_I3518_14615_334_11799_74_880}
              />
            </View>
            <View style={styles.View_I3518_14615_334_11800}>
              <Text style={styles.Text_I3518_14615_334_11800}>Native</Text>
            </View>
          </View>
          <View style={styles.View_3518_14616}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bb0/22e9/f486ec17adceec7a77b63818f7f75be0"
              }}
              style={styles.ImageBackground_I3518_14616_334_15689}
            />
            <View style={styles.View_I3518_14616_334_15690}>
              <Text style={styles.Text_I3518_14616_334_15690}>Fiat</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3518_14617}>
          <View style={styles.View_I3518_14617_3518_14574}>
            <Text style={styles.Text_I3518_14617_3518_14574}>
              Current Language
            </Text>
          </View>
          <View style={styles.View_I3518_14617_3518_14575}>
            <Text style={styles.Text_I3518_14617_3518_14575}>
              Translate the application to a different supported language
            </Text>
          </View>
        </View>
        <View style={styles.View_3518_14618}>
          <View style={styles.View_I3518_14618_2949_6946}>
            <View style={styles.View_I3518_14618_2949_6947}>
              <Text style={styles.Text_I3518_14618_2949_6947}>Language</Text>
            </View>
            <View style={styles.View_I3518_14618_2949_6948}>
              <Text style={styles.Text_I3518_14618_2949_6948}>English</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5aa8/34ff/2e286ffa7aa947dbb3751886547531d6"
            }}
            style={styles.ImageBackground_I3518_14618_2949_6949}
          />
        </View>
        <View style={styles.View_3518_14619}>
          <View style={styles.View_I3518_14619_3518_14574}>
            <Text style={styles.Text_I3518_14619_3518_14574}>
              Search Engine
            </Text>
          </View>
          <View style={styles.View_I3518_14619_3518_14575}>
            <Text style={styles.Text_I3518_14619_3518_14575}>
              Change the default search engine used when entering search terms
              in the URL bar
            </Text>
          </View>
        </View>
        <View style={styles.View_3518_14620}>
          <View style={styles.View_I3518_14620_2949_6946}>
            <View style={styles.View_I3518_14620_2949_6947}>
              <Text style={styles.Text_I3518_14620_2949_6947}>Engine</Text>
            </View>
            <View style={styles.View_I3518_14620_2949_6948}>
              <Text style={styles.Text_I3518_14620_2949_6948}>DuckDuckGo</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5aa8/34ff/2e286ffa7aa947dbb3751886547531d6"
            }}
            style={styles.ImageBackground_I3518_14620_2949_6949}
          />
        </View>
        <View style={styles.View_3518_14621}>
          <View style={styles.View_I3518_14621_3518_14574}>
            <Text style={styles.Text_I3518_14621_3518_14574}>
              Account Identicon
            </Text>
          </View>
          <View style={styles.View_I3518_14621_3518_14575}>
            <Text style={styles.Text_I3518_14621_3518_14575}>
              You can customize your account
            </Text>
          </View>
        </View>
        <View style={styles.View_3518_14622}>
          <View style={styles.View_I3518_14622_3107_56532}>
            <View style={styles.View_I3518_14622_3107_56532_3108_55526}>
              <Text style={styles.Text_I3518_14622_3107_56532_3108_55526}>
                Custom Account
              </Text>
            </View>
            <View style={styles.View_I3518_14622_3107_56532_3108_55527}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1d9/7ccc/529bc9a698f26fb4b422416997202767"
                }}
                style={
                  styles.ImageBackground_I3518_14622_3107_56532_3108_55527_2730_41734
                }
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("156.28415300546447%") },
  View_3515_15527: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("159.56284153005464%"),
    minHeight: hp("159.56284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_15527_704_11279: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("34.825223912306825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.6000000238418579
  },
  ImageBackground_I3515_15527_704_11280: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.0109289617486334%")
  },
  View_I3515_15527_704_11281: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("151.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.19672131147541%"),
    backgroundColor: "rgba(248, 248, 249, 1)",
    overflow: "hidden"
  },
  View_I3515_15527_3658_29013: {
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
  View_I3515_15527_3658_27688: {
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0%")
  },
  Text_I3515_15527_3658_27688: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_15527_3658_24597: {
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
  View_3518_14610: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("130.05464480874315%"),
    minHeight: hp("130.05464480874315%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("19.398907103825135%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3518_14611: {
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
  View_I3518_14611_3518_14574: {
    flexGrow: 1,
    width: wp("47.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3518_14611_3518_14574: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3518_14611_3518_14575: {
    flexGrow: 1,
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.010928961748636%")
  },
  Text_I3518_14611_3518_14575: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3518_14612: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.846994535519126%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3518_14612_2949_6946: {
    flexGrow: 1,
    width: wp("45.86666666666667%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.092896174863391%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14612_2949_6947: {
    width: wp("20.533333333333335%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3518_14612_2949_6947: {
    color: "rgba(175, 180, 192, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3518_14612_2949_6948: {
    width: wp("45.86666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726775%")
  },
  Text_I3518_14612_2949_6948: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3518_14612_2949_6949: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.2786882640234105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%"),
    top: hp("2.185792349726782%")
  },
  View_3518_14613: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.775956284153008%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14613_3518_14574: {
    flexGrow: 1,
    width: wp("38.93333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3518_14613_3518_14574: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3518_14613_3518_14575: {
    flexGrow: 1,
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.01092896174864%")
  },
  Text_I3518_14613_3518_14575: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3518_14614: {
    width: wp("59.199999999999996%"),
    minWidth: wp("59.199999999999996%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49.18032786885246%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3518_14615: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14615_334_11799: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3518_14615_334_11799_74_880: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999989%"),
    top: hp("0.4098360655737707%")
  },
  View_I3518_14615_334_11800: {
    flexGrow: 1,
    width: wp("13.066666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I3518_14615_334_11800: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3518_14616: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.93333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3518_14616_334_15689: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3518_14616_334_15690: {
    flexGrow: 1,
    width: wp("7.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%"),
    top: hp("0%")
  },
  Text_I3518_14616_334_15690: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3518_14617: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("12.568306010928962%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55.737704918032776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14617_3518_14574: {
    flexGrow: 1,
    width: wp("41.06666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3518_14617_3518_14574: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3518_14617_3518_14575: {
    flexGrow: 1,
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.010928961748647%")
  },
  Text_I3518_14617_3518_14575: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3518_14618: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("71.5846994535519%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3518_14618_2949_6946: {
    flexGrow: 1,
    width: wp("14.933333333333335%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.092896174863398%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14618_2949_6947: {
    width: wp("14.933333333333335%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3518_14618_2949_6947: {
    color: "rgba(175, 180, 192, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3518_14618_2949_6948: {
    width: wp("13.600000000000001%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_I3518_14618_2949_6948: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3518_14618_2949_6949: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.2786882640234105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%"),
    top: hp("2.185792349726782%")
  },
  View_3518_14619: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("12.568306010928962%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("82.51366120218579%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14619_3518_14574: {
    flexGrow: 1,
    width: wp("32.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3518_14619_3518_14574: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3518_14619_3518_14575: {
    flexGrow: 1,
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.010928961748633%")
  },
  Text_I3518_14619_3518_14575: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3518_14620: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("98.36065573770493%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3518_14620_2949_6946: {
    flexGrow: 1,
    width: wp("24%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14620_2949_6947: {
    width: wp("10.4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3518_14620_2949_6947: {
    color: "rgba(175, 180, 192, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3518_14620_2949_6948: {
    width: wp("24%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.1857923497267535%")
  },
  Text_I3518_14620_2949_6948: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3518_14620_2949_6949: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.2786882640234105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%"),
    top: hp("2.1857923497267677%")
  },
  View_3518_14621: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("109.28961748633878%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14621_3518_14574: {
    flexGrow: 1,
    width: wp("41.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3518_14621_3518_14574: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3518_14621_3518_14575: {
    flexGrow: 1,
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.010928961748647%")
  },
  Text_I3518_14621_3518_14575: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3518_14622: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("121.85792349726773%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3518_14622_3107_56532: {
    flexGrow: 1,
    width: wp("74.4%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14622_3107_56532_3108_55526: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3518_14622_3107_56532_3108_55526: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3518_14622_3107_56532_3108_55527: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.00000000000001%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3518_14622_3107_56532_3108_55527_2730_41734: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
