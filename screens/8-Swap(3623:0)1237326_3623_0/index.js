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
      <View style={styles.View_3623_214}>
        <View style={styles.View_I3623_214_3497_1643} />
        <View style={styles.View_I3623_214_3497_1644}>
          <View style={styles.View_I3623_214_3497_1644_3497_1596}>
            <View style={styles.View_I3623_214_3497_1644_3497_1596_2730_41734}>
              <View
                style={
                  styles.View_I3623_214_3497_1644_3497_1596_2730_41734_2993_53328
                }
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6ff/c0e8/c76de78de6d1721aaf4ee8a40b6c7637"
                  }}
                  style={
                    styles.ImageBackground_I3623_214_3497_1644_3497_1596_2730_41734_2993_53329
                  }
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I3623_214_3497_1647}>
          <View style={styles.View_I3623_214_3497_1647_3497_1584}>
            <View style={styles.View_I3623_214_3497_1647_3497_1584_2730_41734}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44a5/d02b/72aab9ff026d0c106b3916b576e09ff0"
                }}
                style={
                  styles.ImageBackground_I3623_214_3497_1647_3497_1584_2730_41734_3477_12778
                }
              />
            </View>
          </View>
          <View style={styles.View_I3623_214_3497_1647_3497_1585}>
            <Text style={styles.Text_I3623_214_3497_1647_3497_1585}>Swap</Text>
          </View>
        </View>
        <View style={styles.View_I3623_214_3497_1645}>
          <View style={styles.View_I3623_214_3497_1645_3497_1596}>
            <View style={styles.View_I3623_214_3497_1645_3497_1596_2730_41734}>
              <View
                style={
                  styles.View_I3623_214_3497_1645_3497_1596_2730_41734_3020_52674
                }
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f8c/683d/24b08c1b3d168d77598fe650cf1d781d"
                  }}
                  style={
                    styles.ImageBackground_I3623_214_3497_1645_3497_1596_2730_41734_3020_52675
                  }
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I3623_214_3497_1646}>
          <View style={styles.View_I3623_214_3497_1646_3497_1596}>
            <View style={styles.View_I3623_214_3497_1646_3497_1596_2730_41734}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ca7/49c3/8cc9eb358376cd8b6309ddf9aec74f10"
                }}
                style={
                  styles.ImageBackground_I3623_214_3497_1646_3497_1596_2730_41734_3419_13598
                }
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3623_365}>
        <View style={styles.View_I3623_365_2892_44027} />
        <View style={styles.View_I3623_365_2892_44028}>
          <Text style={styles.Text_I3623_365_2892_44028}>Swap</Text>
        </View>
        <View style={styles.View_I3623_365_2892_44029} />
      </View>
      <View style={styles.View_3624_789}>
        <View style={styles.View_I3624_789_3624_556}>
          <View style={styles.View_I3624_789_3624_557}>
            <View style={styles.View_I3624_789_3624_557_3114_4049}>
              <View style={styles.View_I3624_789_3624_557_3114_4049_3108_55569}>
                <Text
                  style={styles.Text_I3624_789_3624_557_3114_4049_3108_55569}
                >
                  From
                </Text>
              </View>
            </View>
            <View style={styles.View_I3624_789_3624_557_3114_4050}>
              <View style={styles.View_I3624_789_3624_557_3114_4050_32_15}>
                <Text style={styles.Text_I3624_789_3624_557_3114_4050_32_15}>
                  Use Max
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I3624_789_3624_558}>
            <View style={styles.View_I3624_789_3624_558_3624_154}>
              <View style={styles.View_I3624_789_3624_558_3624_15}>
                <View style={styles.View_I3624_789_3624_558_3624_15_3624_8}>
                  <Text style={styles.Text_I3624_789_3624_558_3624_15_3624_8}>
                    0
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3624_789_3624_558_3624_17}>
                <View style={styles.View_I3624_789_3624_558_3624_18}>
                  <Text style={styles.Text_I3624_789_3624_558_3624_18}>$</Text>
                </View>
                <View style={styles.View_I3624_789_3624_558_3624_19}>
                  <Text style={styles.Text_I3624_789_3624_558_3624_19}>
                    0.00
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I3624_789_3624_558_3624_171}>
              <View style={styles.View_I3624_789_3624_558_3624_170}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46ea/db92/5622926896a8dded36ab78722240ee1d"
                  }}
                  style={styles.ImageBackground_I3624_789_3624_558_3624_157}
                />
                <View style={styles.View_I3624_789_3624_558_3624_169}>
                  <Text style={styles.Text_I3624_789_3624_558_3624_169}>
                    BNB
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5aa8/34ff/2e286ffa7aa947dbb3751886547531d6"
                }}
                style={styles.ImageBackground_I3624_789_3624_558_3624_160}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I3624_789_3624_559}>
          <View style={styles.View_I3624_789_3624_560}>
            <View style={styles.View_I3624_789_3624_560_3114_3415}>
              <View style={styles.View_I3624_789_3624_560_3114_3415_3108_55569}>
                <Text
                  style={styles.Text_I3624_789_3624_560_3114_3415_3108_55569}
                >
                  To
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I3624_789_3624_561}>
            <View style={styles.View_I3624_789_3624_561_3624_154}>
              <View style={styles.View_I3624_789_3624_561_3624_15}>
                <View style={styles.View_I3624_789_3624_561_3624_15_3624_8}>
                  <Text style={styles.Text_I3624_789_3624_561_3624_15_3624_8}>
                    0
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3624_789_3624_561_3624_17}>
                <View style={styles.View_I3624_789_3624_561_3624_18}>
                  <Text style={styles.Text_I3624_789_3624_561_3624_18}>$</Text>
                </View>
                <View style={styles.View_I3624_789_3624_561_3624_19}>
                  <Text style={styles.Text_I3624_789_3624_561_3624_19}>
                    0.00
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I3624_789_3624_561_3624_171}>
              <View style={styles.View_I3624_789_3624_561_3624_170}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46ea/db92/5622926896a8dded36ab78722240ee1d"
                  }}
                  style={styles.ImageBackground_I3624_789_3624_561_3624_157}
                />
                <View style={styles.View_I3624_789_3624_561_3624_169}>
                  <Text style={styles.Text_I3624_789_3624_561_3624_169}>
                    ETH
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5aa8/34ff/2e286ffa7aa947dbb3751886547531d6"
                }}
                style={styles.ImageBackground_I3624_789_3624_561_3624_160}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I3624_789_3624_647}>
          <View style={styles.View_I3624_789_3624_647_60_664}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aed3/03c4/ec8ad9738fe73cd931559de1f0c52dbd"
              }}
              style={styles.ImageBackground_I3624_789_3624_647_60_664_3541_1937}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_3626_19624}>
        <View style={styles.View_I3626_19624_1897_13605}>
          <Text style={styles.Text_I3626_19624_1897_13605}>Swap</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_3623_214: {
    width: wp("82.93333333333334%"),
    minWidth: wp("82.93333333333334%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%"),
    top: hp("96.85792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3623_214_3497_1643: {
    flexGrow: 1,
    width: wp("82.93333333333334%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.10000000149011612,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I3623_214_3497_1644: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.1697265625%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3623_214_3497_1644_3497_1596: {
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
  View_I3623_214_3497_1644_3497_1596_2730_41734: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I3623_214_3497_1644_3497_1596_2730_41734_2993_53328: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3623_214_3497_1644_3497_1596_2730_41734_2993_53329: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3623_214_3497_1647: {
    flexGrow: 1,
    width: wp("17.333333333333336%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.73333333333333%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3623_214_3497_1647_3497_1584: {
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
  View_I3623_214_3497_1647_3497_1584_2730_41734: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3623_214_3497_1647_3497_1584_2730_41734_3477_12778: {
    flexGrow: 1,
    width: wp("4.799996948242188%"),
    height: hp("1.6686218032420006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.8196721311475414%")
  },
  View_I3623_214_3497_1647_3497_1585: {
    flexGrow: 1,
    width: wp("10.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333337%"),
    top: hp("0.1366120218579141%")
  },
  Text_I3623_214_3497_1647_3497_1585: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3623_214_3497_1645: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.33919270833334%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3623_214_3497_1645_3497_1596: {
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
  View_I3623_214_3497_1645_3497_1596_2730_41734: {
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
  View_I3623_214_3497_1645_3497_1596_2730_41734_3020_52674: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3623_214_3497_1645_3497_1596_2730_41734_3020_52675: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3623_214_3497_1646: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.36360677083333%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3623_214_3497_1646_3497_1596: {
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
  View_I3623_214_3497_1646_3497_1596_2730_41734: {
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
  ImageBackground_I3623_214_3497_1646_3497_1596_2730_41734_3419_13598: {
    flexGrow: 1,
    width: wp("4.910625203450521%"),
    height: hp("2.459242304817575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.4098360655737565%")
  },
  View_3623_365: {
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
  View_I3623_365_2892_44027: {
    flexGrow: 1,
    width: wp("39.2%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3623_365_2892_44028: {
    flexGrow: 1,
    width: wp("13.066666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666666%"),
    top: hp("1.0928961748633883%")
  },
  Text_I3623_365_2892_44028: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3623_365_2892_44029: {
    flexGrow: 1,
    width: wp("39.2%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.53333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3624_789: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("33.060109289617486%"),
    minHeight: hp("33.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("14.207650273224044%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3624_789_3624_556: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("15.846994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3624_789_3624_557: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3624_789_3624_557_3114_4049: {
    flexGrow: 1,
    width: wp("53.86666666666666%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.04918032786885%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3624_789_3624_557_3114_4049_3108_55569: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3624_789_3624_557_3114_4049_3108_55569: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3624_789_3624_557_3114_4050: {
    flexGrow: 1,
    width: wp("22.133333333333333%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.800000000000004%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3624_789_3624_557_3114_4050_32_15: {
    flexGrow: 1,
    width: wp("13.600000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("0%")
  },
  Text_I3624_789_3624_557_3114_4050_32_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3624_789_3624_558: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.918032786885245%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3624_789_3624_558_3624_154: {
    flexGrow: 1,
    width: wp("50.66666666666667%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3624_789_3624_558_3624_15: {
    width: wp("48.53333333333333%"),
    minWidth: wp("48.53333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3624_789_3624_558_3624_15_3624_8: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3624_789_3624_558_3624_15_3624_8: {
    color: "rgba(175, 180, 192, 1)",
    fontSize: 27,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3624_789_3624_558_3624_17: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.010928961748636%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3624_789_3624_558_3624_18: {
    width: wp("2.933333333333333%"),
    minWidth: wp("2.933333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3624_789_3624_558_3624_18: {
    color: "rgba(175, 180, 192, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3624_789_3624_558_3624_19: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333336%"),
    top: hp("0%")
  },
  Text_I3624_789_3624_558_3624_19: {
    color: "rgba(175, 180, 192, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3624_789_3624_558_3624_171: {
    flexGrow: 1,
    width: wp("25.866666666666667%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.06666666666667%"),
    top: hp("2.4590163934426243%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3624_789_3624_558_3624_170: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3624_789_3624_558_3624_157: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3624_789_3624_558_3624_169: {
    width: wp("8.799999999999999%"),
    minWidth: wp("8.799999999999999%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599999999999994%"),
    top: hp("0.5464480874316919%")
  },
  Text_I3624_789_3624_558_3624_169: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3624_789_3624_558_3624_160: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.46666666666667%")
  },
  View_I3624_789_3624_559: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.0327868852459%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3624_789_3624_560: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3624_789_3624_560_3114_3415: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3624_789_3624_560_3114_3415_3108_55569: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3624_789_3624_560_3114_3415_3108_55569: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3624_789_3624_561: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737707%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3624_789_3624_561_3624_154: {
    flexGrow: 1,
    width: wp("50.93333333333333%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3624_789_3624_561_3624_15: {
    width: wp("48.53333333333333%"),
    minWidth: wp("48.53333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3624_789_3624_561_3624_15_3624_8: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3624_789_3624_561_3624_15_3624_8: {
    color: "rgba(175, 180, 192, 1)",
    fontSize: 27,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3624_789_3624_561_3624_17: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.010928961748633%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3624_789_3624_561_3624_18: {
    width: wp("2.933333333333333%"),
    minWidth: wp("2.933333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3624_789_3624_561_3624_18: {
    color: "rgba(175, 180, 192, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3624_789_3624_561_3624_19: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333336%"),
    top: hp("0%")
  },
  Text_I3624_789_3624_561_3624_19: {
    color: "rgba(175, 180, 192, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3624_789_3624_561_3624_171: {
    flexGrow: 1,
    width: wp("25.6%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.333333333333336%"),
    top: hp("2.4590163934426172%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3624_789_3624_561_3624_170: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3624_789_3624_561_3624_157: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3624_789_3624_561_3624_169: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599999999999994%"),
    top: hp("0.546448087431699%")
  },
  Text_I3624_789_3624_561_3624_169: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3624_789_3624_561_3624_160: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.200000000000003%")
  },
  View_I3624_789_3624_647: {
    flexGrow: 1,
    width: wp("19.2%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.13333333333333%"),
    top: hp("14.754098360655735%"),
    backgroundColor: "rgba(215, 228, 227, 1)"
  },
  View_I3624_789_3624_647_60_664: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.399999999999999%"),
    top: hp("1.092896174863391%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3624_789_3624_647_60_664_3541_1937: {
    flexGrow: 1,
    width: wp("3.2571500142415366%"),
    height: hp("2.459014830042104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5714192708333385%"),
    top: hp("0.42451118510928865%")
  },
  View_3626_19624: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("87.02185792349727%"),
    backgroundColor: "rgba(244, 244, 246, 1)"
  },
  View_I3626_19624_1897_13605: {
    flexGrow: 1,
    width: wp("11.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.733333333333334%"),
    top: hp("2.185792349726782%")
  },
  Text_I3626_19624_1897_13605: {
    color: "rgba(221, 223, 228, 1)",
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
