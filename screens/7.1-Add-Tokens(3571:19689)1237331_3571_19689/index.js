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
      <View style={styles.View_3571_19690}>
        <View style={styles.View_I3571_19690_704_11279} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da78/9e1d/32dc693200ea9afa09c0eed02d6e60d1"
          }}
          style={styles.ImageBackground_I3571_19690_704_11280}
        />
        <View style={styles.View_I3571_19690_704_11281} />
        <View style={styles.View_I3571_19690_3658_29013}>
          <View style={styles.View_I3571_19690_3658_27688}>
            <Text style={styles.Text_I3571_19690_3658_27688}>Add Asset</Text>
          </View>
        </View>
        <View style={styles.View_I3571_19690_3658_24597} />
      </View>
      <View style={styles.View_3571_19691}>
        <View style={styles.View_3571_19692}>
          <View style={styles.View_I3571_19692_429_15588}>
            <Text style={styles.Text_I3571_19692_429_15588}>Search</Text>
          </View>
        </View>
        <View style={styles.View_3571_19693}>
          <View style={styles.View_I3571_19693_429_15620}>
            <Text style={styles.Text_I3571_19693_429_15620}>Custom Token</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3571_19694}>
        <View style={styles.View_I3571_19694_3165_63954}>
          <View style={styles.View_I3571_19694_1704_9498}>
            <View style={styles.View_I3571_19694_1704_9498_1898_16045}>
              <Text style={styles.Text_I3571_19694_1704_9498_1898_16045}>
                Cancel
              </Text>
            </View>
          </View>
          <View style={styles.View_I3571_19694_1704_9522}>
            <View style={styles.View_I3571_19694_1704_9522_1897_13585}>
              <Text style={styles.Text_I3571_19694_1704_9522_1897_13585}>
                Add Token
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3571_19695}>
        <Text style={styles.Text_3571_19695}>Select Tokens</Text>
      </View>
      <View style={styles.View_3571_19696}>
        <View style={styles.View_3571_19697}>
          <View style={styles.View_I3571_19697_3571_19199}>
            <View style={styles.View_I3571_19697_3571_19199_3107_57474}>
              <View
                style={styles.View_I3571_19697_3571_19199_3107_57474_3108_55510}
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76a5/6967/c0ffb766ca4b98909700d157f2622325"
                  }}
                  style={
                    styles.ImageBackground_I3571_19697_3571_19199_3107_57474_3108_55510_2747_42674
                  }
                />
              </View>
              <View
                style={styles.View_I3571_19697_3571_19199_3107_57474_3108_55509}
              >
                <Text
                  style={
                    styles.Text_I3571_19697_3571_19199_3107_57474_3108_55509
                  }
                >
                  Basic Attention Token (BAT)
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3571_19698}>
          <View style={styles.View_I3571_19698_3571_19199}>
            <View style={styles.View_I3571_19698_3571_19199_3107_57474}>
              <View
                style={styles.View_I3571_19698_3571_19199_3107_57474_3108_55510}
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76a5/6967/c0ffb766ca4b98909700d157f2622325"
                  }}
                  style={
                    styles.ImageBackground_I3571_19698_3571_19199_3107_57474_3108_55510_2747_42674
                  }
                />
              </View>
              <View
                style={styles.View_I3571_19698_3571_19199_3107_57474_3108_55509}
              >
                <Text
                  style={
                    styles.Text_I3571_19698_3571_19199_3107_57474_3108_55509
                  }
                >
                  Bitcoin (BTC)
                </Text>
              </View>
            </View>
            <View style={styles.View_I3571_19698_3571_19199_3107_57475}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56f0/93a9/275471da9b275256f8a9f53aafa5b57c"
                }}
                style={
                  styles.ImageBackground_I3571_19698_3571_19199_3107_57475_3108_55983
                }
              />
            </View>
          </View>
        </View>
        <View style={styles.View_3571_19699}>
          <View style={styles.View_I3571_19699_3571_19199}>
            <View style={styles.View_I3571_19699_3571_19199_3107_57474}>
              <View
                style={styles.View_I3571_19699_3571_19199_3107_57474_3108_55510}
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76a5/6967/c0ffb766ca4b98909700d157f2622325"
                  }}
                  style={
                    styles.ImageBackground_I3571_19699_3571_19199_3107_57474_3108_55510_2747_42674
                  }
                />
              </View>
              <View
                style={styles.View_I3571_19699_3571_19199_3107_57474_3108_55509}
              >
                <Text
                  style={
                    styles.Text_I3571_19699_3571_19199_3107_57474_3108_55509
                  }
                >
                  Byteball Bytes (GBYTE)
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3571_19700}>
          <View style={styles.View_I3571_19700_3571_19199}>
            <View style={styles.View_I3571_19700_3571_19199_3107_57474}>
              <View
                style={styles.View_I3571_19700_3571_19199_3107_57474_3108_55510}
              >
                <View
                  style={
                    styles.View_I3571_19700_3571_19199_3107_57474_3108_55510_2747_42674
                  }
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76a5/6967/c0ffb766ca4b98909700d157f2622325"
                    }}
                    style={
                      styles.ImageBackground_I3571_19700_3571_19199_3107_57474_3108_55510_2747_42674_3571_19345
                    }
                  />
                </View>
              </View>
              <View
                style={styles.View_I3571_19700_3571_19199_3107_57474_3108_55509}
              >
                <Text
                  style={
                    styles.Text_I3571_19700_3571_19199_3107_57474_3108_55509
                  }
                >
                  Bulwark (BWK)
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3571_19701}>
          <View style={styles.View_I3571_19701_3571_19199}>
            <View style={styles.View_I3571_19701_3571_19199_3107_57474}>
              <View
                style={styles.View_I3571_19701_3571_19199_3107_57474_3108_55510}
              >
                <View
                  style={
                    styles.View_I3571_19701_3571_19199_3107_57474_3108_55510_2747_42674
                  }
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76a5/6967/c0ffb766ca4b98909700d157f2622325"
                    }}
                    style={
                      styles.ImageBackground_I3571_19701_3571_19199_3107_57474_3108_55510_2747_42674_3571_19549
                    }
                  />
                </View>
              </View>
              <View
                style={styles.View_I3571_19701_3571_19199_3107_57474_3108_55509}
              >
                <Text
                  style={
                    styles.Text_I3571_19701_3571_19199_3107_57474_3108_55509
                  }
                >
                  XTRABYTES (XBY)
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3955_2949}>
        <View style={styles.View_3955_2950}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0f9/6ad7/c4f1ceb8576ad6ba67fe9cad9989a249"
            }}
            style={styles.ImageBackground_3955_2951}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d370/e689/99acff620c35cb43760deaa6083d7bcb"
            }}
            style={styles.ImageBackground_3955_2952}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f323/8921/29aa3978fd2ca604865d0e4c8804cb18"
            }}
            style={styles.ImageBackground_3955_2953}
          />
        </View>
        <View style={styles.View_3955_2954}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7988/18c4/368917319c5576422564e963e19f8e0a"
            }}
            style={styles.ImageBackground_3955_2955}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8244/8ca7/f956bd0169bd34153c619ea63167cd17"
            }}
            style={styles.ImageBackground_3955_2956}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6342/7140/c0a3483b14961a136833deec6294b174"
            }}
            style={styles.ImageBackground_3955_2957}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8896/8e0f/5c81ebd2f5777e5e9334359e9fbd15b8"
          }}
          style={styles.ImageBackground_3955_2958}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f116/8f8b/d641ddd7cef940bf1f706e2972b47099"
          }}
          style={styles.ImageBackground_3955_2959}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f6e/436d/166fc6da6cbc87f9b8815e497621858a"
          }}
          style={styles.ImageBackground_3955_2960}
        />
      </View>
      <View style={styles.View_3955_533}>
        <View style={styles.View_I3955_533_2515_9684}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee48/2f39/07fcfe9353c957bb2610e967196570ca"
            }}
            style={styles.ImageBackground_I3955_533_2515_9684_1411_11402}
          />
        </View>
        <View style={styles.View_I3955_533_2515_9685}>
          <View style={styles.View_I3955_533_2586_54097}>
            <View style={styles.View_I3955_533_2586_54098}>
              <Text style={styles.Text_I3955_533_2586_54098}>b</Text>
            </View>
            <View style={styles.View_I3955_533_2586_54099}>
              <Text style={styles.Text_I3955_533_2586_54099}>|</Text>
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
  View_3571_19690: {
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
  View_I3571_19690_704_11279: {
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
  ImageBackground_I3571_19690_704_11280: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.0109289617486334%")
  },
  View_I3571_19690_704_11281: {
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
  View_I3571_19690_3658_29013: {
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
  View_I3571_19690_3658_27688: {
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0%")
  },
  Text_I3571_19690_3658_27688: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3571_19690_3658_24597: {
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
  View_3571_19691: {
    width: wp("61.86666666666667%"),
    minWidth: wp("61.86666666666667%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("22.6775956284153%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3571_19692: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 249, 1)"
  },
  View_I3571_19692_429_15588: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("0.5464480874316955%")
  },
  Text_I3571_19692_429_15588: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3571_19693: {
    width: wp("38.666666666666664%"),
    minWidth: wp("38.666666666666664%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.199999999999996%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3571_19693_429_15620: {
    flexGrow: 1,
    width: wp("30.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666669%"),
    top: hp("0.5464480874316955%")
  },
  Text_I3571_19693_429_15620: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3571_19694: {
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
  View_I3571_19694_3165_63954: {
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
  View_I3571_19694_1704_9498: {
    width: wp("41.6%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3571_19694_1704_9498_1898_16045: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.466666666666667%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3571_19694_1704_9498_1898_16045: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3571_19694_1704_9522: {
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
  View_I3571_19694_1704_9522_1897_13585: {
    flexGrow: 1,
    width: wp("22.400000000000002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.600000000000001%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3571_19694_1704_9522_1897_13585: {
    color: "rgba(245, 250, 128, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3571_19695: {
    width: wp("33.06666666666666%"),
    minWidth: wp("33.06666666666666%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("41.2568306010929%")
  },
  Text_3571_19695: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3571_19696: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("50.27322404371585%"),
    minHeight: hp("50.27322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("47.26775956284153%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3571_19697: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3571_19697_3571_19199: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3571_19697_3571_19199_3107_57474: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.6393442622950758%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3571_19697_3571_19199_3107_57474_3108_55510: {
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
  ImageBackground_I3571_19697_3571_19199_3107_57474_3108_55510_2747_42674: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3571_19697_3571_19199_3107_57474_3108_55509: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999997%"),
    top: hp("0.8196721311475414%")
  },
  Text_I3571_19697_3571_19199_3107_57474_3108_55509: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3571_19698: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.382513661202182%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3571_19698_3571_19199: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3571_19698_3571_19199_3107_57474: {
    flexGrow: 1,
    width: wp("69.6%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3571_19698_3571_19199_3107_57474_3108_55510: {
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
  ImageBackground_I3571_19698_3571_19199_3107_57474_3108_55510_2747_42674: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3571_19698_3571_19199_3107_57474_3108_55509: {
    flexGrow: 1,
    width: wp("56.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999997%"),
    top: hp("0.8196721311475414%")
  },
  Text_I3571_19698_3571_19199_3107_57474_3108_55509: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3571_19698_3571_19199_3107_57475: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%"),
    top: hp("2.732240437158474%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3571_19698_3571_19199_3107_57475_3108_55983: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3571_19699: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.765027322404364%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3571_19699_3571_19199: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3571_19699_3571_19199_3107_57474: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3571_19699_3571_19199_3107_57474_3108_55510: {
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
  ImageBackground_I3571_19699_3571_19199_3107_57474_3108_55510_2747_42674: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3571_19699_3571_19199_3107_57474_3108_55509: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999997%"),
    top: hp("0.8196721311475414%")
  },
  Text_I3571_19699_3571_19199_3107_57474_3108_55509: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3571_19700: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.147540983606547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3571_19700_3571_19199: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3571_19700_3571_19199_3107_57474: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3571_19700_3571_19199_3107_57474_3108_55510: {
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
  View_I3571_19700_3571_19199_3107_57474_3108_55510_2747_42674: {
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
  ImageBackground_I3571_19700_3571_19199_3107_57474_3108_55510_2747_42674_3571_19345: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3571_19700_3571_19199_3107_57474_3108_55509: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999997%"),
    top: hp("0.8196721311475557%")
  },
  Text_I3571_19700_3571_19199_3107_57474_3108_55509: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3571_19701: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41.53005464480874%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3571_19701_3571_19199: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3571_19701_3571_19199_3107_57474: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3571_19701_3571_19199_3107_57474_3108_55510: {
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
  View_I3571_19701_3571_19199_3107_57474_3108_55510_2747_42674: {
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
  ImageBackground_I3571_19701_3571_19199_3107_57474_3108_55510_2747_42674_3571_19549: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3571_19701_3571_19199_3107_57474_3108_55509: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999997%"),
    top: hp("0.8196721311475414%")
  },
  Text_I3571_19701_3571_19199_3107_57474_3108_55509: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3955_2949: {
    width: wp("33.38679606119791%"),
    minWidth: wp("33.38679606119791%"),
    height: hp("17.196763669206796%"),
    minHeight: hp("17.196763669206796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.8%"),
    top: hp("22.6775956284153%")
  },
  View_3955_2950: {
    width: wp("33.38679606119791%"),
    minWidth: wp("33.38679606119791%"),
    height: hp("17.196763669206796%"),
    minHeight: hp("17.196763669206796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3955_2951: {
    width: wp("33.38679606119791%"),
    minWidth: wp("33.38679606119791%"),
    height: hp("17.196763669206796%"),
    minHeight: hp("17.196763669206796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_3955_2952: {
    width: wp("33.38679606119791%"),
    minWidth: wp("33.38679606119791%"),
    height: hp("17.196763669206796%"),
    minHeight: hp("17.196763669206796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_3955_2953: {
    width: wp("33.38679606119791%"),
    minWidth: wp("33.38679606119791%"),
    height: hp("17.196763669206796%"),
    minHeight: hp("17.196763669206796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3955_2954: {
    width: wp("33.38679606119791%"),
    minWidth: wp("33.38679606119791%"),
    height: hp("17.196763669206796%"),
    minHeight: hp("17.196763669206796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3955_2955: {
    width: wp("33.38679606119791%"),
    minWidth: wp("33.38679606119791%"),
    height: hp("17.196763669206796%"),
    minHeight: hp("17.196763669206796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_3955_2956: {
    width: wp("33.38679606119791%"),
    minWidth: wp("33.38679606119791%"),
    height: hp("17.196763669206796%"),
    minHeight: hp("17.196763669206796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_3955_2957: {
    width: wp("33.38679606119791%"),
    minWidth: wp("33.38679606119791%"),
    height: hp("17.196763669206796%"),
    minHeight: hp("17.196763669206796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3955_2958: {
    width: wp("33.38679606119791%"),
    minWidth: wp("33.38679606119791%"),
    height: hp("17.196763669206796%"),
    minHeight: hp("17.196763669206796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3955_2959: {
    width: wp("33.38679606119791%"),
    minWidth: wp("33.38679606119791%"),
    height: hp("17.196763669206796%"),
    minHeight: hp("17.196763669206796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3955_2960: {
    width: wp("33.38679606119791%"),
    minWidth: wp("33.38679606119791%"),
    height: hp("17.196763669206796%"),
    minHeight: hp("17.196763669206796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3955_533: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("30.327868852459016%"),
    backgroundColor: "rgba(255, 255, 255, 0.20000000298023224)",
    overflow: "hidden"
  },
  View_I3955_533_2515_9684: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.1857923497267713%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3955_533_2515_9684_1411_11402: {
    flexGrow: 1,
    width: wp("3.73340810139974%"),
    height: hp("1.9126066093236371%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3332682291666664%"),
    top: hp("0.6830601092896202%")
  },
  View_I3955_533_2515_9685: {
    flexGrow: 1,
    width: wp("3.733333333333334%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999999%"),
    top: hp("2.1857923497267713%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_533_2586_54097: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_533_2586_54098: {
    width: wp("2.4%"),
    minWidth: wp("2.4%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3955_533_2586_54098: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_533_2586_54099: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.400000000000002%"),
    top: hp("0%")
  },
  Text_I3955_533_2586_54099: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 11,
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
