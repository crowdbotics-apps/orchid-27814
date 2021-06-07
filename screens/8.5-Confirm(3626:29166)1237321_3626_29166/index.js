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
      <View style={styles.View_3626_29272}>
        <View style={styles.View_I3626_29272_704_11279} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da78/9e1d/32dc693200ea9afa09c0eed02d6e60d1"
          }}
          style={styles.ImageBackground_I3626_29272_704_11280}
        />
        <View style={styles.View_I3626_29272_704_11281} />
        <View style={styles.View_I3626_29272_3658_29013}>
          <View style={styles.View_I3626_29272_3658_27688}>
            <Text style={styles.Text_I3626_29272_3658_27688}>Confirm</Text>
          </View>
        </View>
        <View style={styles.View_I3626_29272_3658_24597} />
      </View>
      <View style={styles.View_3626_29686}>
        <View style={styles.View_I3626_29686_3626_29456}>
          <View style={styles.View_I3626_29686_3626_29456_3510_14252}>
            <View style={styles.View_I3626_29686_3626_29456_3510_14253}>
              <View
                style={styles.View_I3626_29686_3626_29456_3510_14253_3107_57106}
              >
                <View
                  style={
                    styles.View_I3626_29686_3626_29456_3510_14253_3107_57106_3108_55515
                  }
                >
                  <Text
                    style={
                      styles.Text_I3626_29686_3626_29456_3510_14253_3107_57106_3108_55515
                    }
                  >
                    Rate
                  </Text>
                </View>
              </View>
              <View
                style={styles.View_I3626_29686_3626_29456_3510_14253_3107_57126}
              >
                <View
                  style={
                    styles.View_I3626_29686_3626_29456_3510_14253_3107_57126_3108_55996
                  }
                >
                  <Text
                    style={
                      styles.Text_I3626_29686_3626_29456_3510_14253_3107_57126_3108_55996
                    }
                  >
                    11 BNB
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I3626_29686_3626_29456_3510_14320}>
              <View style={styles.View_I3626_29686_3626_29456_3510_14322}>
                <View
                  style={
                    styles.View_I3626_29686_3626_29456_3510_14322_3108_55998
                  }
                >
                  <Text
                    style={
                      styles.Text_I3626_29686_3626_29456_3510_14322_3108_55998
                    }
                  >
                    1.7367 ETH
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I3626_29686_3626_29457}>
          <View style={styles.View_I3626_29686_3626_29457_3510_14252}>
            <View style={styles.View_I3626_29686_3626_29457_3510_14253}>
              <View
                style={styles.View_I3626_29686_3626_29457_3510_14253_3107_57106}
              >
                <View
                  style={
                    styles.View_I3626_29686_3626_29457_3510_14253_3107_57106_3108_55515
                  }
                >
                  <Text
                    style={
                      styles.Text_I3626_29686_3626_29457_3510_14253_3107_57106_3108_55515
                    }
                  >
                    Inverse Rate
                  </Text>
                </View>
              </View>
              <View
                style={styles.View_I3626_29686_3626_29457_3510_14253_3107_57126}
              >
                <View
                  style={
                    styles.View_I3626_29686_3626_29457_3510_14253_3107_57126_3108_55996
                  }
                >
                  <Text
                    style={
                      styles.Text_I3626_29686_3626_29457_3510_14253_3107_57126_3108_55996
                    }
                  >
                    1 BNB
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I3626_29686_3626_29457_3510_14320}>
              <View style={styles.View_I3626_29686_3626_29457_3510_14322}>
                <View
                  style={
                    styles.View_I3626_29686_3626_29457_3510_14322_3108_55998
                  }
                >
                  <Text
                    style={
                      styles.Text_I3626_29686_3626_29457_3510_14322_3108_55998
                    }
                  >
                    0.1585 ETH
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I3626_29686_3626_29458}>
          <View style={styles.View_I3626_29686_3626_29458_3510_14252}>
            <View style={styles.View_I3626_29686_3626_29458_3510_14253}>
              <View
                style={styles.View_I3626_29686_3626_29458_3510_14253_3107_57106}
              >
                <View
                  style={
                    styles.View_I3626_29686_3626_29458_3510_14253_3107_57106_3108_55515
                  }
                >
                  <Text
                    style={
                      styles.Text_I3626_29686_3626_29458_3510_14253_3107_57106_3108_55515
                    }
                  >
                    USD Price
                  </Text>
                </View>
              </View>
              <View
                style={styles.View_I3626_29686_3626_29458_3510_14253_3107_57126}
              >
                <View
                  style={
                    styles.View_I3626_29686_3626_29458_3510_14253_3107_57126_3108_55996
                  }
                >
                  <Text
                    style={
                      styles.Text_I3626_29686_3626_29458_3510_14253_3107_57126_3108_55996
                    }
                  >
                    1 BNB
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I3626_29686_3626_29458_3510_14320}>
              <View style={styles.View_I3626_29686_3626_29458_3510_14322}>
                <View
                  style={
                    styles.View_I3626_29686_3626_29458_3510_14322_3108_55998
                  }
                >
                  <Text
                    style={
                      styles.Text_I3626_29686_3626_29458_3510_14322_3108_55998
                    }
                  >
                    $283.03
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I3626_29686_3626_29459}>
          <View style={styles.View_I3626_29686_3626_29459_3510_14252}>
            <View style={styles.View_I3626_29686_3626_29459_3510_14253}>
              <View
                style={styles.View_I3626_29686_3626_29459_3510_14253_3107_57106}
              >
                <View
                  style={
                    styles.View_I3626_29686_3626_29459_3510_14253_3107_57106_3108_55515
                  }
                >
                  <Text
                    style={
                      styles.Text_I3626_29686_3626_29459_3510_14253_3107_57106_3108_55515
                    }
                  >
                    USD Price
                  </Text>
                </View>
              </View>
              <View
                style={styles.View_I3626_29686_3626_29459_3510_14253_3107_57126}
              >
                <View
                  style={
                    styles.View_I3626_29686_3626_29459_3510_14253_3107_57126_3108_55996
                  }
                >
                  <Text
                    style={
                      styles.Text_I3626_29686_3626_29459_3510_14253_3107_57126_3108_55996
                    }
                  >
                    1 BNB
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I3626_29686_3626_29459_3510_14320}>
              <View style={styles.View_I3626_29686_3626_29459_3510_14322}>
                <View
                  style={
                    styles.View_I3626_29686_3626_29459_3510_14322_3108_55998
                  }
                >
                  <Text
                    style={
                      styles.Text_I3626_29686_3626_29459_3510_14322_3108_55998
                    }
                  >
                    $283.03
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I3626_29686_3626_29546}>
          <View style={styles.View_I3626_29686_3626_29546_3114_620}>
            <View
              style={styles.View_I3626_29686_3626_29546_3114_620_3108_55548}
            >
              <Text
                style={styles.Text_I3626_29686_3626_29546_3114_620_3108_55548}
              >
                Estimate Free
              </Text>
            </View>
            <View
              style={styles.View_I3626_29686_3626_29546_3114_620_3108_55549}
            >
              <View
                style={
                  styles.View_I3626_29686_3626_29546_3114_620_3108_55549_71_37
                }
              >
                <Text
                  style={
                    styles.Text_I3626_29686_3626_29546_3114_620_3108_55549_71_37
                  }
                >
                  Edit
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I3626_29686_3626_29546_3114_621}>
            <View
              style={styles.View_I3626_29686_3626_29546_3114_621_3108_55998}
            >
              <Text
                style={styles.Text_I3626_29686_3626_29546_3114_621_3108_55998}
              >
                1.5 BNB
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3626_29734}>
        <View style={styles.View_I3626_29734_1897_13585}>
          <Text style={styles.Text_I3626_29734_1897_13585}>Swap</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_3626_29272: {
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
  View_I3626_29272_704_11279: {
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
  ImageBackground_I3626_29272_704_11280: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.0109289617486334%")
  },
  View_I3626_29272_704_11281: {
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
  View_I3626_29272_3658_29013: {
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
  View_I3626_29272_3658_27688: {
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0%")
  },
  Text_I3626_29272_3658_27688: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3626_29272_3658_24597: {
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
  View_3626_29686: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("65.57377049180327%"),
    minHeight: hp("65.57377049180327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("20.491803278688526%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3626_29686_3626_29456: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.2786885245901622%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3626_29686_3626_29456_3510_14252: {
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
  View_I3626_29686_3626_29456_3510_14253: {
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
  View_I3626_29686_3626_29456_3510_14253_3107_57106: {
    flexGrow: 1,
    width: wp("60.266666666666666%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3626_29686_3626_29456_3510_14253_3107_57106_3108_55515: {
    flexGrow: 1,
    width: wp("60.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3626_29686_3626_29456_3510_14253_3107_57106_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3626_29686_3626_29456_3510_14253_3107_57126: {
    flexGrow: 1,
    width: wp("15.733333333333333%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.93333333333332%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3626_29686_3626_29456_3510_14253_3107_57126_3108_55996: {
    flexGrow: 1,
    width: wp("15.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3626_29686_3626_29456_3510_14253_3107_57126_3108_55996: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3626_29686_3626_29456_3510_14320: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737704%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3626_29686_3626_29456_3510_14322: {
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
  View_I3626_29686_3626_29456_3510_14322_3108_55998: {
    flexGrow: 1,
    width: wp("22.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6.133333333333326%"),
    top: hp("0%")
  },
  Text_I3626_29686_3626_29456_3510_14322_3108_55998: {
    color: "rgba(175, 180, 192, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3626_29686_3626_29457: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.21311475409836%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3626_29686_3626_29457_3510_14252: {
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
  View_I3626_29686_3626_29457_3510_14253: {
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
  View_I3626_29686_3626_29457_3510_14253_3107_57106: {
    flexGrow: 1,
    width: wp("62.4%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3626_29686_3626_29457_3510_14253_3107_57106_3108_55515: {
    flexGrow: 1,
    width: wp("62.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3626_29686_3626_29457_3510_14253_3107_57106_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3626_29686_3626_29457_3510_14253_3107_57126: {
    flexGrow: 1,
    width: wp("13.600000000000001%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3626_29686_3626_29457_3510_14253_3107_57126_3108_55996: {
    flexGrow: 1,
    width: wp("13.600000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3626_29686_3626_29457_3510_14253_3107_57126_3108_55996: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3626_29686_3626_29457_3510_14320: {
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
  View_I3626_29686_3626_29457_3510_14322: {
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
  View_I3626_29686_3626_29457_3510_14322_3108_55998: {
    flexGrow: 1,
    width: wp("22.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6.133333333333326%"),
    top: hp("0%")
  },
  Text_I3626_29686_3626_29457_3510_14322_3108_55998: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3626_29686_3626_29458: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.147540983606557%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3626_29686_3626_29458_3510_14252: {
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
  View_I3626_29686_3626_29458_3510_14253: {
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
  View_I3626_29686_3626_29458_3510_14253_3107_57106: {
    flexGrow: 1,
    width: wp("62.4%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3626_29686_3626_29458_3510_14253_3107_57106_3108_55515: {
    flexGrow: 1,
    width: wp("62.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3626_29686_3626_29458_3510_14253_3107_57106_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3626_29686_3626_29458_3510_14253_3107_57126: {
    flexGrow: 1,
    width: wp("13.600000000000001%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3626_29686_3626_29458_3510_14253_3107_57126_3108_55996: {
    flexGrow: 1,
    width: wp("13.600000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3626_29686_3626_29458_3510_14253_3107_57126_3108_55996: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3626_29686_3626_29458_3510_14320: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.0983606557377%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3626_29686_3626_29458_3510_14322: {
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
  View_I3626_29686_3626_29458_3510_14322_3108_55998: {
    flexGrow: 1,
    width: wp("17.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.2666666666666657%"),
    top: hp("0%")
  },
  Text_I3626_29686_3626_29458_3510_14322_3108_55998: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3626_29686_3626_29459: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45.08196721311475%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3626_29686_3626_29459_3510_14252: {
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
  View_I3626_29686_3626_29459_3510_14253: {
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
  View_I3626_29686_3626_29459_3510_14253_3107_57106: {
    flexGrow: 1,
    width: wp("62.4%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3626_29686_3626_29459_3510_14253_3107_57106_3108_55515: {
    flexGrow: 1,
    width: wp("62.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3626_29686_3626_29459_3510_14253_3107_57106_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3626_29686_3626_29459_3510_14253_3107_57126: {
    flexGrow: 1,
    width: wp("13.600000000000001%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3626_29686_3626_29459_3510_14253_3107_57126_3108_55996: {
    flexGrow: 1,
    width: wp("13.600000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3626_29686_3626_29459_3510_14253_3107_57126_3108_55996: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3626_29686_3626_29459_3510_14320: {
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
  View_I3626_29686_3626_29459_3510_14322: {
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
  View_I3626_29686_3626_29459_3510_14322_3108_55998: {
    flexGrow: 1,
    width: wp("17.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.2666666666666657%"),
    top: hp("0%")
  },
  Text_I3626_29686_3626_29459_3510_14322_3108_55998: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3626_29686_3626_29546: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("59.016393442622956%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3626_29686_3626_29546_3114_620: {
    flexGrow: 1,
    width: wp("59.199999999999996%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3626_29686_3626_29546_3114_620_3108_55548: {
    flexGrow: 1,
    width: wp("27.73333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3626_29686_3626_29546_3114_620_3108_55548: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3626_29686_3626_29546_3114_620_3108_55549: {
    flexGrow: 1,
    width: wp("10.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.866666666666664%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 254, 229, 1)"
  },
  View_I3626_29686_3626_29546_3114_620_3108_55549_71_37: {
    flexGrow: 1,
    width: wp("6.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.13333333333334%"),
    top: hp("0%")
  },
  Text_I3626_29686_3626_29546_3114_620_3108_55549_71_37: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3626_29686_3626_29546_3114_621: {
    flexGrow: 1,
    width: wp("16.8%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.13333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3626_29686_3626_29546_3114_621_3108_55998: {
    flexGrow: 1,
    width: wp("15.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0%")
  },
  Text_I3626_29686_3626_29546_3114_621_3108_55998: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3626_29734: {
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
  View_I3626_29734_1897_13585: {
    flexGrow: 1,
    width: wp("11.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.733333333333334%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3626_29734_1897_13585: {
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
