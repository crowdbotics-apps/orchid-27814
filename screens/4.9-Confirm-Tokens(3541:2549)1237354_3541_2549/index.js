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
      <View style={styles.View_3541_2550}>
        <View style={styles.View_I3541_2550_3658_29598} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da78/9e1d/32dc693200ea9afa09c0eed02d6e60d1"
          }}
          style={styles.ImageBackground_I3541_2550_3658_29599}
        />
        <View style={styles.View_I3541_2550_3658_29600} />
        <View style={styles.View_I3541_2550_3658_29604} />
        <View style={styles.View_I3541_2550_3658_29701}>
          <View style={styles.View_I3541_2550_3658_29702}>
            <View style={styles.View_I3541_2550_3658_29702_2892_43256}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd24/acb1/124c41b4a2f0cbe8ed07b2f82e3f5d5a"
                }}
                style={
                  styles.ImageBackground_I3541_2550_3658_29702_2892_43256_2730_41734
                }
              />
            </View>
          </View>
          <View style={styles.View_I3541_2550_3658_29703}>
            <Text style={styles.Text_I3541_2550_3658_29703}>Confrim</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3541_2624}>
        <View style={styles.View_3541_2625} />
        <View style={styles.View_3541_2626}>
          <View style={styles.View_3541_2627}>
            <Text style={styles.Text_3541_2627}>To</Text>
          </View>
          <View style={styles.View_3541_2628}>
            <View style={styles.View_I3541_2628_1309_20904}>
              <Text style={styles.Text_I3541_2628_1309_20904}>
                0x3Dc6...DxE9
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbef/47d0/98a5c9dfc1b7ac58ac86a1c420a7a9c1"
              }}
              style={styles.ImageBackground_I3541_2628_1309_20905}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_3541_2657}>
        <View style={styles.View_I3541_2657_3541_2736}>
          <View style={styles.View_I3541_2657_3541_2736_3116_71530}>
            <View style={styles.View_I3541_2657_3541_2736_3116_71531}>
              <View
                style={styles.View_I3541_2657_3541_2736_3116_71531_3107_57106}
              >
                <View
                  style={
                    styles.View_I3541_2657_3541_2736_3116_71531_3107_57106_3108_55515
                  }
                >
                  <Text
                    style={
                      styles.Text_I3541_2657_3541_2736_3116_71531_3107_57106_3108_55515
                    }
                  >
                    Amount
                  </Text>
                </View>
              </View>
              <View
                style={styles.View_I3541_2657_3541_2736_3116_71531_3107_57126}
              >
                <View
                  style={
                    styles.View_I3541_2657_3541_2736_3116_71531_3107_57126_3108_55996
                  }
                >
                  <Text
                    style={
                      styles.Text_I3541_2657_3541_2736_3116_71531_3107_57126_3108_55996
                    }
                  >
                    2.3686 BNB
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I3541_2657_3541_2736_3116_71532}>
              <View
                style={styles.View_I3541_2657_3541_2736_3116_71532_3114_620}
              >
                <View
                  style={
                    styles.View_I3541_2657_3541_2736_3116_71532_3114_620_3108_55548
                  }
                >
                  <Text
                    style={
                      styles.Text_I3541_2657_3541_2736_3116_71532_3114_620_3108_55548
                    }
                  >
                    Network fee
                  </Text>
                </View>
                <View
                  style={
                    styles.View_I3541_2657_3541_2736_3116_71532_3114_620_3108_55549
                  }
                >
                  <View
                    style={
                      styles.View_I3541_2657_3541_2736_3116_71532_3114_620_3108_55549_71_37
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3541_2657_3541_2736_3116_71532_3114_620_3108_55549_71_37
                      }
                    >
                      Edit
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={styles.View_I3541_2657_3541_2736_3116_71532_3114_621}
              >
                <View
                  style={
                    styles.View_I3541_2657_3541_2736_3116_71532_3114_621_3108_55998
                  }
                >
                  <Text
                    style={
                      styles.Text_I3541_2657_3541_2736_3116_71532_3114_621_3108_55998
                    }
                  >
                    0.972 BNB
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I3541_2657_3546_15901}>
          <View style={styles.View_I3541_2657_3546_15901_3510_14252}>
            <View style={styles.View_I3541_2657_3546_15901_3510_14253}>
              <View
                style={styles.View_I3541_2657_3546_15901_3510_14253_3107_57106}
              >
                <View
                  style={
                    styles.View_I3541_2657_3546_15901_3510_14253_3107_57106_3108_55515
                  }
                >
                  <Text
                    style={
                      styles.Text_I3541_2657_3546_15901_3510_14253_3107_57106_3108_55515
                    }
                  >
                    Total Amount
                  </Text>
                </View>
              </View>
              <View
                style={styles.View_I3541_2657_3546_15901_3510_14253_3107_57126}
              >
                <View
                  style={
                    styles.View_I3541_2657_3546_15901_3510_14253_3107_57126_3108_55996
                  }
                >
                  <Text
                    style={
                      styles.Text_I3541_2657_3546_15901_3510_14253_3107_57126_3108_55996
                    }
                  >
                    3.3406 BNB
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I3541_2657_3546_15901_3510_14320}>
              <View style={styles.View_I3541_2657_3546_15901_3510_14322}>
                <View
                  style={
                    styles.View_I3541_2657_3546_15901_3510_14322_3108_55998
                  }
                >
                  <Text
                    style={
                      styles.Text_I3541_2657_3546_15901_3510_14322_3108_55998
                    }
                  >
                    $ 880.05
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3541_2629}>
        <View style={styles.View_I3541_2629_3529_3059}>
          <View style={styles.View_I3541_2629_3529_3059_3107_57474}>
            <View
              style={styles.View_I3541_2629_3529_3059_3107_57474_3108_55510}
            >
              <View
                style={
                  styles.View_I3541_2629_3529_3059_3107_57474_3108_55510_2747_42674
                }
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe61/b251/e7655702102495e5023879d4d695669b"
                  }}
                  style={
                    styles.ImageBackground_I3541_2629_3529_3059_3107_57474_3108_55510_2747_42674_1899_17503
                  }
                />
                <View
                  style={
                    styles.View_I3541_2629_3529_3059_3107_57474_3108_55510_2747_42674_3419_12684
                  }
                >
                  <Text
                    style={
                      styles.Text_I3541_2629_3529_3059_3107_57474_3108_55510_2747_42674_3419_12684
                    }
                  >
                    🐼
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={styles.View_I3541_2629_3529_3059_3107_57474_3108_55509}
            >
              <Text
                style={styles.Text_I3541_2629_3529_3059_3107_57474_3108_55509}
              >
                Queen Bee
              </Text>
            </View>
          </View>
          <View style={styles.View_I3541_2629_3529_3059_3107_57475}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5aa8/34ff/2e286ffa7aa947dbb3751886547531d6"
              }}
              style={
                styles.ImageBackground_I3541_2629_3529_3059_3107_57475_3108_55983
              }
            />
          </View>
        </View>
      </View>
      <View style={styles.View_3546_16066}>
        <View style={styles.View_I3546_16066_1897_13585}>
          <Text style={styles.Text_I3546_16066_1897_13585}>Send</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_3541_2550: {
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
  View_I3541_2550_3658_29598: {
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
  ImageBackground_I3541_2550_3658_29599: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.0109289617486334%")
  },
  View_I3541_2550_3658_29600: {
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
  View_I3541_2550_3658_29604: {
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
  View_I3541_2550_3658_29701: {
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
  View_I3541_2550_3658_29702: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3541_2550_3658_29702_2892_43256: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.27322404371584774%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3541_2550_3658_29702_2892_43256_2730_41734: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3541_2550_3658_29703: {
    width: wp("82.93333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("0%")
  },
  Text_I3541_2550_3658_29703: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3541_2624: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("30.327868852459016%")
  },
  View_3541_2625: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
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
  View_3541_2626: {
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
  View_3541_2627: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("0%")
  },
  Text_3541_2627: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3541_2628: {
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
  View_I3541_2628_1309_20904: {
    flexGrow: 1,
    width: wp("28.000000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.185792349726775%")
  },
  Text_I3541_2628_1309_20904: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3541_2628_1309_20905: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.2786882640234105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.99999999999999%"),
    top: hp("2.185792349726775%")
  },
  View_3541_2657: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("28.142076502732237%"),
    minHeight: hp("28.142076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("49.45355191256831%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3541_2657_3541_2736: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3541_2657_3541_2736_3116_71530: {
    flexGrow: 1,
    width: wp("74.4%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3541_2657_3541_2736_3116_71531: {
    width: wp("74.4%"),
    minWidth: wp("74.4%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3541_2657_3541_2736_3116_71531_3107_57106: {
    flexGrow: 1,
    width: wp("44.266666666666666%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3541_2657_3541_2736_3116_71531_3107_57106_3108_55515: {
    flexGrow: 1,
    width: wp("44.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3541_2657_3541_2736_3116_71531_3107_57106_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3541_2657_3541_2736_3116_71531_3107_57126: {
    flexGrow: 1,
    width: wp("27.46666666666667%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.93333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3541_2657_3541_2736_3116_71531_3107_57126_3108_55996: {
    flexGrow: 1,
    width: wp("27.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3541_2657_3541_2736_3116_71531_3107_57126_3108_55996: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3541_2657_3541_2736_3116_71532: {
    width: wp("74.4%"),
    minWidth: wp("74.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535426%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3541_2657_3541_2736_3116_71532_3114_620: {
    flexGrow: 1,
    width: wp("54.93333333333334%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3541_2657_3541_2736_3116_71532_3114_620_3108_55548: {
    flexGrow: 1,
    width: wp("24.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3541_2657_3541_2736_3116_71532_3114_620_3108_55548: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3541_2657_3541_2736_3116_71532_3114_620_3108_55549: {
    flexGrow: 1,
    width: wp("10.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.933333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 254, 229, 1)"
  },
  View_I3541_2657_3541_2736_3116_71532_3114_620_3108_55549_71_37: {
    flexGrow: 1,
    width: wp("6.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("0%")
  },
  Text_I3541_2657_3541_2736_3116_71532_3114_620_3108_55549_71_37: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3541_2657_3541_2736_3116_71532_3114_621: {
    flexGrow: 1,
    width: wp("16.8%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.599999999999994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3541_2657_3541_2736_3116_71532_3114_621_3108_55998: {
    flexGrow: 1,
    width: wp("21.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.533333333333331%"),
    top: hp("0%")
  },
  Text_I3541_2657_3541_2736_3116_71532_3114_621_3108_55998: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3541_2657_3546_15901: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.486338797814206%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3541_2657_3546_15901_3510_14252: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3541_2657_3546_15901_3510_14253: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3541_2657_3546_15901_3510_14253_3107_57106: {
    flexGrow: 1,
    width: wp("47.733333333333334%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3541_2657_3546_15901_3510_14253_3107_57106_3108_55515: {
    flexGrow: 1,
    width: wp("47.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3541_2657_3546_15901_3510_14253_3107_57106_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3541_2657_3546_15901_3510_14253_3107_57126: {
    flexGrow: 1,
    width: wp("28.26666666666667%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.400000000000006%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3541_2657_3546_15901_3510_14253_3107_57126_3108_55996: {
    flexGrow: 1,
    width: wp("28.26666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3541_2657_3546_15901_3510_14253_3107_57126_3108_55996: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3541_2657_3546_15901_3510_14320: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737707%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3541_2657_3546_15901_3510_14322: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.86666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3541_2657_3546_15901_3510_14322_3108_55998: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.3333333333333286%"),
    top: hp("0%")
  },
  Text_I3541_2657_3546_15901_3510_14322_3108_55998: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3541_2629: {
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
  View_I3541_2629_3529_3059: {
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
  View_I3541_2629_3529_3059_3107_57474: {
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
  View_I3541_2629_3529_3059_3107_57474_3108_55510: {
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
  View_I3541_2629_3529_3059_3107_57474_3108_55510_2747_42674: {
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
  ImageBackground_I3541_2629_3529_3059_3107_57474_3108_55510_2747_42674_1899_17503: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3541_2629_3529_3059_3107_57474_3108_55510_2747_42674_3419_12684: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.111067708333332%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3541_2629_3529_3059_3107_57474_3108_55510_2747_42674_3419_12684: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3541_2629_3529_3059_3107_57474_3108_55509: {
    flexGrow: 1,
    width: wp("56.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999997%"),
    top: hp("0.8196721311475379%")
  },
  Text_I3541_2629_3529_3059_3107_57474_3108_55509: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3541_2629_3529_3059_3107_57475: {
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
  ImageBackground_I3541_2629_3529_3059_3107_57475_3108_55983: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3546_16066: {
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
  View_I3546_16066_1897_13585: {
    flexGrow: 1,
    width: wp("10.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.13333333333334%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3546_16066_1897_13585: {
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
