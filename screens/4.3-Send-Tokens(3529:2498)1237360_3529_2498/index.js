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
      <View style={styles.View_3529_2784}>
        <View style={styles.View_I3529_2784_704_11279} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da78/9e1d/32dc693200ea9afa09c0eed02d6e60d1"
          }}
          style={styles.ImageBackground_I3529_2784_704_11280}
        />
        <View style={styles.View_I3529_2784_704_11281} />
        <View style={styles.View_I3529_2784_3658_29013}>
          <View style={styles.View_I3529_2784_3658_27688}>
            <Text style={styles.Text_I3529_2784_3658_27688}>Send Tokens</Text>
          </View>
        </View>
        <View style={styles.View_I3529_2784_3658_24597} />
      </View>
      <View style={styles.View_3529_3367}>
        <View style={styles.View_3529_3326}>
          <View style={styles.View_I3529_3326_3529_3299}>
            <View style={styles.View_I3529_3326_3529_3300}>
              <View style={styles.View_I3529_3326_3529_3300_3108_56209}>
                <View
                  style={styles.View_I3529_3326_3529_3300_3108_56209_2747_42674}
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5732/8bc2/83f99163a6908ccdc914adea1f4117aa"
                    }}
                    style={
                      styles.ImageBackground_I3529_3326_3529_3300_3108_56209_2747_42674_3489_1341
                    }
                  />
                  <View
                    style={
                      styles.View_I3529_3326_3529_3300_3108_56209_2747_42674_3489_1342
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3529_3326_3529_3300_3108_56209_2747_42674_3489_1342
                      }
                    >
                      🐇
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_I3529_3326_3529_3301}>
              <View style={styles.View_I3529_3326_3529_3302}>
                <View style={styles.View_I3529_3326_3529_3302_3108_55515}>
                  <Text style={styles.Text_I3529_3326_3529_3302_3108_55515}>
                    Jennie
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3529_3326_3529_3303}>
                <View style={styles.View_I3529_3326_3529_3303_3108_55569}>
                  <Text style={styles.Text_I3529_3326_3529_3303_3108_55569}>
                    0x3Dc6...DxE9
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3529_3339}>
          <View style={styles.View_I3529_3339_3529_3299}>
            <View style={styles.View_I3529_3339_3529_3300}>
              <View style={styles.View_I3529_3339_3529_3300_3108_56209}>
                <View
                  style={styles.View_I3529_3339_3529_3300_3108_56209_2747_42674}
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8f9/f4e3/52b2bc8e326a29d593a58ed44bafbe78"
                    }}
                    style={
                      styles.ImageBackground_I3529_3339_3529_3300_3108_56209_2747_42674_3489_1338
                    }
                  />
                  <View
                    style={
                      styles.View_I3529_3339_3529_3300_3108_56209_2747_42674_3489_1339
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3529_3339_3529_3300_3108_56209_2747_42674_3489_1339
                      }
                    >
                      🐋
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_I3529_3339_3529_3301}>
              <View style={styles.View_I3529_3339_3529_3302}>
                <View style={styles.View_I3529_3339_3529_3302_3108_55515}>
                  <Text style={styles.Text_I3529_3339_3529_3302_3108_55515}>
                    Das Cra
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3529_3339_3529_3303}>
                <View style={styles.View_I3529_3339_3529_3303_3108_55569}>
                  <Text style={styles.Text_I3529_3339_3529_3303_3108_55569}>
                    0x2Dc6...DcT9
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3529_3353}>
          <View style={styles.View_I3529_3353_3529_3299}>
            <View style={styles.View_I3529_3353_3529_3300}>
              <View style={styles.View_I3529_3353_3529_3300_3108_56209}>
                <View
                  style={styles.View_I3529_3353_3529_3300_3108_56209_2747_42674}
                >
                  <View
                    style={
                      styles.View_I3529_3353_3529_3300_3108_56209_2747_42674_3131_281
                    }
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d541/5306/9b6010e4e0a0a837e87afc34950c39ca"
                    }}
                    style={
                      styles.ImageBackground_I3529_3353_3529_3300_3108_56209_2747_42674_3039_53900
                    }
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_I3529_3353_3529_3301}>
              <View style={styles.View_I3529_3353_3529_3302}>
                <View style={styles.View_I3529_3353_3529_3302_3108_55515}>
                  <Text style={styles.Text_I3529_3353_3529_3302_3108_55515}>
                    Gevan
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3529_3353_3529_3303}>
                <View style={styles.View_I3529_3353_3529_3303_3108_55569}>
                  <Text style={styles.Text_I3529_3353_3529_3303_3108_55569}>
                    0x3R2E...DxR9
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3529_3150}>
        <Text style={styles.Text_3529_3150}>Recent</Text>
      </View>
      <View style={styles.View_3529_3149}>
        <View style={styles.View_3529_3009} />
        <View style={styles.View_3529_3122}>
          <View style={styles.View_3529_3096}>
            <Text style={styles.Text_3529_3096}>To</Text>
          </View>
          <View style={styles.View_3529_3085}>
            <View style={styles.View_I3529_3085_1234_32585}>
              <Text style={styles.Text_I3529_3085_1234_32585}>
                Search, public address (0x), or ENS
              </Text>
            </View>
            <View style={styles.View_I3529_3085_1234_32586}>
              <View style={styles.View_I3529_3085_1234_32586_3020_52674}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f174/1f03/3f490c6c5cf79a4280943c965d1c5314"
                  }}
                  style={
                    styles.ImageBackground_I3529_3085_1234_32586_3020_52675
                  }
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3529_3135}>
          <View style={styles.View_I3529_3135_33_9}>
            <Text style={styles.Text_I3529_3135_33_9}>
              Transfer Between My Accounts
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3529_3163}>
        <View style={styles.View_I3529_3163_3529_3059}>
          <View style={styles.View_I3529_3163_3529_3059_3107_57474}>
            <View
              style={styles.View_I3529_3163_3529_3059_3107_57474_3108_55510}
            >
              <View
                style={
                  styles.View_I3529_3163_3529_3059_3107_57474_3108_55510_2747_42674
                }
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe61/b251/e7655702102495e5023879d4d695669b"
                  }}
                  style={
                    styles.ImageBackground_I3529_3163_3529_3059_3107_57474_3108_55510_2747_42674_1899_17503
                  }
                />
                <View
                  style={
                    styles.View_I3529_3163_3529_3059_3107_57474_3108_55510_2747_42674_3419_12684
                  }
                >
                  <Text
                    style={
                      styles.Text_I3529_3163_3529_3059_3107_57474_3108_55510_2747_42674_3419_12684
                    }
                  >
                    🐼
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={styles.View_I3529_3163_3529_3059_3107_57474_3108_55509}
            >
              <Text
                style={styles.Text_I3529_3163_3529_3059_3107_57474_3108_55509}
              >
                Queen Bee
              </Text>
            </View>
          </View>
          <View style={styles.View_I3529_3163_3529_3059_3107_57475}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5aa8/34ff/2e286ffa7aa947dbb3751886547531d6"
              }}
              style={
                styles.ImageBackground_I3529_3163_3529_3059_3107_57475_3108_55983
              }
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_3529_2784: {
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
  View_I3529_2784_704_11279: {
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
  ImageBackground_I3529_2784_704_11280: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.0109289617486334%")
  },
  View_I3529_2784_704_11281: {
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
  View_I3529_2784_3658_29013: {
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
  View_I3529_2784_3658_27688: {
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0%")
  },
  Text_I3529_2784_3658_27688: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3529_2784_3658_24597: {
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
  View_3529_3367: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("35.24590163934426%"),
    minHeight: hp("35.24590163934426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("63.114754098360656%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3529_3326: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3529_3326_3529_3299: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.63934426229509%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3529_3326_3529_3300: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054556%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3529_3326_3529_3300_3108_56209: {
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
  View_I3529_3326_3529_3300_3108_56209_2747_42674: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3529_3326_3529_3300_3108_56209_2747_42674_3489_1341: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3529_3326_3529_3300_3108_56209_2747_42674_3489_1342: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1111002604166647%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3529_3326_3529_3300_3108_56209_2747_42674_3489_1342: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3529_3326_3529_3301: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999997%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3529_3326_3529_3302: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3529_3326_3529_3302_3108_55515: {
    flexGrow: 1,
    width: wp("15.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3529_3326_3529_3302_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3529_3326_3529_3303: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3529_3326_3529_3303_3108_55569: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3529_3326_3529_3303_3108_55569: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3529_3339: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.295081967213115%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3529_3339_3529_3299: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3529_3339_3529_3300: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3529_3339_3529_3300_3108_56209: {
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
  View_I3529_3339_3529_3300_3108_56209_2747_42674: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3529_3339_3529_3300_3108_56209_2747_42674_3489_1338: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3529_3339_3529_3300_3108_56209_2747_42674_3489_1339: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1111002604166647%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3529_3339_3529_3300_3108_56209_2747_42674_3489_1339: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3529_3339_3529_3301: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999997%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3529_3339_3529_3302: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3529_3339_3529_3302_3108_55515: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3529_3339_3529_3302_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3529_3339_3529_3303: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3529_3339_3529_3303_3108_55569: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3529_3339_3529_3303_3108_55569: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3529_3353: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.590163934426222%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3529_3353_3529_3299: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3529_3353_3529_3300: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3529_3353_3529_3300_3108_56209: {
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
  View_I3529_3353_3529_3300_3108_56209_2747_42674: {
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
  View_I3529_3353_3529_3300_3108_56209_2747_42674_3131_281: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(232, 233, 237, 1)",
    borderTopLeftRadius: 10000,
    borderTopRightRadius: 10000,
    borderBottomLeftRadius: 10000,
    borderBottomRightRadius: 10000
  },
  ImageBackground_I3529_3353_3529_3300_3108_56209_2747_42674_3039_53900: {
    flexGrow: 1,
    width: wp("6.666666666666667%"),
    height: hp("0.6830603698563706%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7777669270833325%"),
    top: hp("2.276844795935787%")
  },
  View_I3529_3353_3529_3301: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999997%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3529_3353_3529_3302: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3529_3353_3529_3302_3108_55515: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3529_3353_3529_3302_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3529_3353_3529_3303: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.371584699453564%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3529_3353_3529_3303_3108_55569: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3529_3353_3529_3303_3108_55569: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3529_3150: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("57.103825136612016%")
  },
  Text_3529_3150: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3529_3149: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("23.497267759562842%"),
    minHeight: hp("23.497267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("30.327868852459016%")
  },
  View_3529_3009: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("23.497267759562842%"),
    minHeight: hp("23.497267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3529_3122: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.1857923497267713%")
  },
  View_3529_3096: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("0%")
  },
  Text_3529_3096: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3529_3085: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3529_3085_1234_32585: {
    flexGrow: 1,
    width: wp("64.26666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.185792349726775%")
  },
  Text_I3529_3085_1234_32585: {
    color: "rgba(175, 180, 192, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3529_3085_1234_32586: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.2786882640234105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.99999999999999%"),
    top: hp("2.185792349726775%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3529_3085_1234_32586_3020_52674: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3529_3085_1234_32586_3020_52675: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3529_3135: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("15.846994535519126%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3529_3135_33_9: {
    flexGrow: 1,
    width: wp("57.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%"),
    top: hp("1.092896174863391%")
  },
  Text_I3529_3135_33_9: {
    color: "rgba(1, 110, 137, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3529_3163: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("19.398907103825135%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3529_3163_3529_3059: {
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
  View_I3529_3163_3529_3059_3107_57474: {
    flexGrow: 1,
    width: wp("69.6%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.6393442622950865%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3529_3163_3529_3059_3107_57474_3108_55510: {
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
  View_I3529_3163_3529_3059_3107_57474_3108_55510_2747_42674: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3529_3163_3529_3059_3107_57474_3108_55510_2747_42674_1899_17503: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3529_3163_3529_3059_3107_57474_3108_55510_2747_42674_3419_12684: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1111002604166647%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3529_3163_3529_3059_3107_57474_3108_55510_2747_42674_3419_12684: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3529_3163_3529_3059_3107_57474_3108_55509: {
    flexGrow: 1,
    width: wp("56.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999997%"),
    top: hp("0.8196721311475379%")
  },
  Text_I3529_3163_3529_3059_3107_57474_3108_55509: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3529_3163_3529_3059_3107_57475: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%"),
    top: hp("2.7322404371584703%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3529_3163_3529_3059_3107_57475_3108_55983: {
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
