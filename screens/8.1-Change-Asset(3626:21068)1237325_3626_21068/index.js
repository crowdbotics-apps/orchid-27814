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
      <View style={styles.View_3626_21253}>
        <View style={styles.View_I3626_21253_704_11279} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da78/9e1d/32dc693200ea9afa09c0eed02d6e60d1"
          }}
          style={styles.ImageBackground_I3626_21253_704_11280}
        />
        <View style={styles.View_I3626_21253_704_11281} />
        <View style={styles.View_I3626_21253_3658_29013}>
          <View style={styles.View_I3626_21253_3658_27688}>
            <Text style={styles.Text_I3626_21253_3658_27688}>Change Asset</Text>
          </View>
        </View>
        <View style={styles.View_I3626_21253_3658_24597} />
      </View>
      <View style={styles.View_3638_0}>
        <View style={styles.View_3626_21258}>
          <Text style={styles.Text_3626_21258}>Select Tokens</Text>
        </View>
        <View style={styles.View_3626_21259}>
          <View style={styles.View_3626_21260}>
            <View style={styles.View_I3626_21260_3571_19199}>
              <View style={styles.View_I3626_21260_3571_19199_3107_57474}>
                <View
                  style={
                    styles.View_I3626_21260_3571_19199_3107_57474_3108_55510
                  }
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76a5/6967/c0ffb766ca4b98909700d157f2622325"
                    }}
                    style={
                      styles.ImageBackground_I3626_21260_3571_19199_3107_57474_3108_55510_2747_42674
                    }
                  />
                </View>
                <View
                  style={
                    styles.View_I3626_21260_3571_19199_3107_57474_3108_55509
                  }
                >
                  <Text
                    style={
                      styles.Text_I3626_21260_3571_19199_3107_57474_3108_55509
                    }
                  >
                    Basic Attention Token (BAT)
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_3626_21261}>
            <View style={styles.View_I3626_21261_3571_19199}>
              <View style={styles.View_I3626_21261_3571_19199_3107_57474}>
                <View
                  style={
                    styles.View_I3626_21261_3571_19199_3107_57474_3108_55510
                  }
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76a5/6967/c0ffb766ca4b98909700d157f2622325"
                    }}
                    style={
                      styles.ImageBackground_I3626_21261_3571_19199_3107_57474_3108_55510_2747_42674
                    }
                  />
                </View>
                <View
                  style={
                    styles.View_I3626_21261_3571_19199_3107_57474_3108_55509
                  }
                >
                  <Text
                    style={
                      styles.Text_I3626_21261_3571_19199_3107_57474_3108_55509
                    }
                  >
                    ETH
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3626_21261_3571_19199_3107_57475}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56f0/93a9/275471da9b275256f8a9f53aafa5b57c"
                  }}
                  style={
                    styles.ImageBackground_I3626_21261_3571_19199_3107_57475_3108_55983
                  }
                />
              </View>
            </View>
          </View>
          <View style={styles.View_3626_21262}>
            <View style={styles.View_I3626_21262_3571_19199}>
              <View style={styles.View_I3626_21262_3571_19199_3107_57474}>
                <View
                  style={
                    styles.View_I3626_21262_3571_19199_3107_57474_3108_55510
                  }
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76a5/6967/c0ffb766ca4b98909700d157f2622325"
                    }}
                    style={
                      styles.ImageBackground_I3626_21262_3571_19199_3107_57474_3108_55510_2747_42674
                    }
                  />
                </View>
                <View
                  style={
                    styles.View_I3626_21262_3571_19199_3107_57474_3108_55509
                  }
                >
                  <Text
                    style={
                      styles.Text_I3626_21262_3571_19199_3107_57474_3108_55509
                    }
                  >
                    Byteball Bytes (GBYTE)
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_3626_21263}>
            <View style={styles.View_I3626_21263_3571_19199}>
              <View style={styles.View_I3626_21263_3571_19199_3107_57474}>
                <View
                  style={
                    styles.View_I3626_21263_3571_19199_3107_57474_3108_55510
                  }
                >
                  <View
                    style={
                      styles.View_I3626_21263_3571_19199_3107_57474_3108_55510_2747_42674
                    }
                  >
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76a5/6967/c0ffb766ca4b98909700d157f2622325"
                      }}
                      style={
                        styles.ImageBackground_I3626_21263_3571_19199_3107_57474_3108_55510_2747_42674_3571_19345
                      }
                    />
                  </View>
                </View>
                <View
                  style={
                    styles.View_I3626_21263_3571_19199_3107_57474_3108_55509
                  }
                >
                  <Text
                    style={
                      styles.Text_I3626_21263_3571_19199_3107_57474_3108_55509
                    }
                  >
                    Bulwark (BWK)
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_3626_21264}>
            <View style={styles.View_I3626_21264_3571_19199}>
              <View style={styles.View_I3626_21264_3571_19199_3107_57474}>
                <View
                  style={
                    styles.View_I3626_21264_3571_19199_3107_57474_3108_55510
                  }
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76a5/6967/c0ffb766ca4b98909700d157f2622325"
                    }}
                    style={
                      styles.ImageBackground_I3626_21264_3571_19199_3107_57474_3108_55510_2747_42674
                    }
                  />
                </View>
                <View
                  style={
                    styles.View_I3626_21264_3571_19199_3107_57474_3108_55509
                  }
                >
                  <Text
                    style={
                      styles.Text_I3626_21264_3571_19199_3107_57474_3108_55509
                    }
                  >
                    Bitcoin (BTC)
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_3626_21345}>
            <View style={styles.View_I3626_21345_3571_19199}>
              <View style={styles.View_I3626_21345_3571_19199_3107_57474}>
                <View
                  style={
                    styles.View_I3626_21345_3571_19199_3107_57474_3108_55510
                  }
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c18d/5482/01b6a783fc538e39cf9af9c691302541"
                    }}
                    style={
                      styles.ImageBackground_I3626_21345_3571_19199_3107_57474_3108_55510_2747_42674
                    }
                  />
                </View>
                <View
                  style={
                    styles.View_I3626_21345_3571_19199_3107_57474_3108_55509
                  }
                >
                  <Text
                    style={
                      styles.Text_I3626_21345_3571_19199_3107_57474_3108_55509
                    }
                  >
                    Lite coin (LTC)
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3626_21265}>
          <View style={styles.View_I3626_21265_1309_20666}>
            <Text style={styles.Text_I3626_21265_1309_20666}>
              Search tokens
            </Text>
          </View>
          <View style={styles.View_I3626_21265_1309_20667}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee48/2f39/07fcfe9353c957bb2610e967196570ca"
              }}
              style={styles.ImageBackground_I3626_21265_1309_20667_1411_11402}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_3638_1}>
        <View style={styles.View_3638_2}>
          <View style={styles.View_I3638_2_429_15620}>
            <Text style={styles.Text_I3638_2_429_15620}>From</Text>
          </View>
        </View>
        <View style={styles.View_3638_3}>
          <View style={styles.View_I3638_3_429_15588}>
            <Text style={styles.Text_I3638_3_429_15588}>To</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_3626_21253: {
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
  View_I3626_21253_704_11279: {
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
  ImageBackground_I3626_21253_704_11280: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.0109289617486334%")
  },
  View_I3626_21253_704_11281: {
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
  View_I3626_21253_3658_29013: {
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
  View_I3626_21253_3658_27688: {
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0%")
  },
  Text_I3626_21253_3658_27688: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3626_21253_3658_24597: {
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
  View_3638_0: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("77.59562841530054%"),
    minHeight: hp("77.59562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("27.049180327868854%")
  },
  View_3626_21258: {
    width: wp("33.06666666666666%"),
    minWidth: wp("33.06666666666666%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.928961748633874%")
  },
  Text_3626_21258: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3626_21259: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("60.65573770491803%"),
    minHeight: hp("60.65573770491803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.939890710382514%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3626_21260: {
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
  View_I3626_21260_3571_19199: {
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
  View_I3626_21260_3571_19199_3107_57474: {
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
  View_I3626_21260_3571_19199_3107_57474_3108_55510: {
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
  ImageBackground_I3626_21260_3571_19199_3107_57474_3108_55510_2747_42674: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3626_21260_3571_19199_3107_57474_3108_55509: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999997%"),
    top: hp("0.8196721311475414%")
  },
  Text_I3626_21260_3571_19199_3107_57474_3108_55509: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3626_21261: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.38251366120219%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3626_21261_3571_19199: {
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
  View_I3626_21261_3571_19199_3107_57474: {
    flexGrow: 1,
    width: wp("69.6%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.6393442622950758%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3626_21261_3571_19199_3107_57474_3108_55510: {
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
  ImageBackground_I3626_21261_3571_19199_3107_57474_3108_55510_2747_42674: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3626_21261_3571_19199_3107_57474_3108_55509: {
    flexGrow: 1,
    width: wp("56.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999997%"),
    top: hp("0.8196721311475414%")
  },
  Text_I3626_21261_3571_19199_3107_57474_3108_55509: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3626_21261_3571_19199_3107_57475: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%"),
    top: hp("2.7322404371584597%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3626_21261_3571_19199_3107_57475_3108_55983: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3626_21262: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.76502732240438%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3626_21262_3571_19199: {
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
  View_I3626_21262_3571_19199_3107_57474: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.6393442622950687%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3626_21262_3571_19199_3107_57474_3108_55510: {
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
  ImageBackground_I3626_21262_3571_19199_3107_57474_3108_55510_2747_42674: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3626_21262_3571_19199_3107_57474_3108_55509: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999997%"),
    top: hp("0.8196721311475414%")
  },
  Text_I3626_21262_3571_19199_3107_57474_3108_55509: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3626_21263: {
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
  View_I3626_21263_3571_19199: {
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
  View_I3626_21263_3571_19199_3107_57474: {
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
  View_I3626_21263_3571_19199_3107_57474_3108_55510: {
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
  View_I3626_21263_3571_19199_3107_57474_3108_55510_2747_42674: {
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
  ImageBackground_I3626_21263_3571_19199_3107_57474_3108_55510_2747_42674_3571_19345: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3626_21263_3571_19199_3107_57474_3108_55509: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999997%"),
    top: hp("0.8196721311475414%")
  },
  Text_I3626_21263_3571_19199_3107_57474_3108_55509: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3626_21264: {
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
  View_I3626_21264_3571_19199: {
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
  View_I3626_21264_3571_19199_3107_57474: {
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
  View_I3626_21264_3571_19199_3107_57474_3108_55510: {
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
  ImageBackground_I3626_21264_3571_19199_3107_57474_3108_55510_2747_42674: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3626_21264_3571_19199_3107_57474_3108_55509: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999997%"),
    top: hp("0.8196721311475414%")
  },
  Text_I3626_21264_3571_19199_3107_57474_3108_55509: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3626_21345: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51.912568306010925%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3626_21345_3571_19199: {
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
  View_I3626_21345_3571_19199_3107_57474: {
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
  View_I3626_21345_3571_19199_3107_57474_3108_55510: {
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
  ImageBackground_I3626_21345_3571_19199_3107_57474_3108_55510_2747_42674: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3626_21345_3571_19199_3107_57474_3108_55509: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999997%"),
    top: hp("0.8196721311475414%")
  },
  Text_I3626_21345_3571_19199_3107_57474_3108_55509: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3626_21265: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 0.20000000298023224)",
    overflow: "hidden"
  },
  View_I3626_21265_1309_20666: {
    flexGrow: 1,
    width: wp("26.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999999%"),
    top: hp("2.185792349726775%")
  },
  Text_I3626_21265_1309_20666: {
    color: "rgba(175, 180, 192, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3626_21265_1309_20667: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.2786882640234105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.185792349726775%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3626_21265_1309_20667_1411_11402: {
    flexGrow: 1,
    width: wp("3.73340810139974%"),
    height: hp("1.9126066093236371%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3332682291666664%"),
    top: hp("0.6830601092896167%")
  },
  View_3638_1: {
    width: wp("32.266666666666666%"),
    minWidth: wp("32.266666666666666%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("19.398907103825135%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3638_2: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3638_2_429_15620: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.866666666666667%"),
    top: hp("0.5464480874316955%")
  },
  Text_I3638_2_429_15620: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3638_3: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 249, 1)"
  },
  View_I3638_3_429_15588: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666669%"),
    top: hp("0.5464480874316955%")
  },
  Text_I3638_3_429_15588: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
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
