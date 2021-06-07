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
      <View style={styles.View_3559_524}>
        <View style={styles.View_I3559_524_3658_30148} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da78/9e1d/32dc693200ea9afa09c0eed02d6e60d1"
          }}
          style={styles.ImageBackground_I3559_524_3658_30149}
        />
        <View style={styles.View_I3559_524_3658_30150} />
        <View style={styles.View_I3559_524_3658_30154} />
      </View>
      <View style={styles.View_3559_525}>
        <View style={styles.View_I3559_525_3023_54431}>
          <View style={styles.View_I3559_525_3023_54431_2747_44124}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bef4/bd5b/5ff0cda1b9a3ce3997ecdf341918508e"
              }}
              style={
                styles.ImageBackground_I3559_525_3023_54431_2747_44124_3933_678
              }
            />
          </View>
        </View>
        <View style={styles.View_I3559_525_3023_54432}>
          <View style={styles.View_I3559_525_3023_54433}>
            <Text style={styles.Text_I3559_525_3023_54433}>Send Link</Text>
          </View>
          <View style={styles.View_I3559_525_3023_54434}>
            <Text style={styles.Text_I3559_525_3023_54434}>
              Your request link is already to send! Sendthis link to a friend,
              and it will ask them to send 0.0001 ETH
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3559_526}>
        <Text style={styles.Text_3559_526}>
          https://cryptooly.app.link/send/0xBBB6A12945aC14C84185a17C6BD2eAe96e/value=21jq
        </Text>
      </View>
      <View style={styles.View_3993_803}>
        <View style={styles.View_3993_804}>
          <View style={styles.View_3993_805}>
            <View style={styles.View_I3993_805_1897_13497}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8023/6b40/aa26cd2f8ef37ce47d4a05ce9658fe35"
                }}
                style={styles.ImageBackground_I3993_805_1897_13498}
              />
              <View style={styles.View_I3993_805_1897_13499}>
                <Text style={styles.Text_I3993_805_1897_13499}>Copy</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3993_806}>
            <View style={styles.View_I3993_806_1897_13497}>
              <View style={styles.View_I3993_806_1897_13498}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/659d/a014/0ba89c078981b29f8956236d807a93ec"
                  }}
                  style={styles.ImageBackground_I3993_806_1897_13498_3038_59434}
                />
              </View>
              <View style={styles.View_I3993_806_1897_13499}>
                <Text style={styles.Text_I3993_806_1897_13499}>QR code</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3993_807}>
          <View style={styles.View_I3993_807_1897_13587}>
            <View style={styles.View_I3993_807_1897_13588}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/942f/1d09/e18cb6f3bb48e2d55982f8900a2fe8b9"
                }}
                style={styles.ImageBackground_I3993_807_1897_13588_3559_411}
              />
            </View>
            <View style={styles.View_I3993_807_1897_13589}>
              <Text style={styles.Text_I3993_807_1897_13589}>Send Link</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3559_593}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1de/9e0c/8e4a8fa8c134d9776c95269257ff0518"
          }}
          style={styles.ImageBackground_I3559_593_3559_582}
        />
        <View style={styles.View_I3559_593_3559_583}>
          <Text style={styles.Text_I3559_593_3559_583}>
            Link copied to clipboard
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_3559_524: {
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
  View_I3559_524_3658_30148: {
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
  ImageBackground_I3559_524_3658_30149: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.0109289617486334%")
  },
  View_I3559_524_3658_30150: {
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
  View_I3559_524_3658_30154: {
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
  View_3559_525: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("25.683060109289617%"),
    minHeight: hp("25.683060109289617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(248, 248, 249, 1)"
  },
  View_I3559_525_3023_54431: {
    flexGrow: 1,
    width: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.06666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3559_525_3023_54431_2747_44124: {
    flexGrow: 1,
    width: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3559_525_3023_54431_2747_44124_3933_678: {
    flexGrow: 1,
    width: wp("12.79955851236979%"),
    height: hp("6.559516302223415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.0928961748633874%")
  },
  View_I3559_525_3023_54432: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("10.928961748633881%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3559_525_3023_54433: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3559_525_3023_54433: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3559_525_3023_54434: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.918032786885242%")
  },
  Text_I3559_525_3023_54434: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3559_526: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("53.00546448087432%")
  },
  Text_3559_526: {
    color: "rgba(1, 110, 137, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3993_803: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("17.48633879781421%"),
    minHeight: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("86.6120218579235%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3993_804: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3993_805: {
    width: wp("41.333333333333336%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(215, 228, 227, 1)"
  },
  View_I3993_805_1897_13497: {
    flexGrow: 1,
    width: wp("19.733333333333334%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.799999999999999%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3993_805_1897_13498: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3993_805_1897_13499: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I3993_805_1897_13499: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3993_806: {
    width: wp("41.333333333333336%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.86666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(215, 228, 227, 1)"
  },
  View_I3993_806_1897_13497: {
    flexGrow: 1,
    width: wp("26.13333333333333%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.6000000000000085%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3993_806_1897_13498: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3993_806_1897_13498_3038_59434: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.5464480874316848%")
  },
  View_I3993_806_1897_13499: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333339%"),
    top: hp("0%")
  },
  Text_I3993_806_1897_13499: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3993_807: {
    width: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.836065573770497%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I3993_807_1897_13587: {
    flexGrow: 1,
    width: wp("29.06666666666667%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.06666666666667%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3993_807_1897_13588: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3993_807_1897_13588_3559_411: {
    flexGrow: 1,
    width: wp("2.66719970703125%"),
    height: hp("1.912704842989562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8661458333333343%"),
    top: hp("0.6829266991120164%")
  },
  View_I3993_807_1897_13589: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%"),
    top: hp("0%")
  },
  Text_I3993_807_1897_13589: {
    color: "rgba(245, 250, 128, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3559_593: {
    width: wp("57.333333333333336%"),
    minWidth: wp("57.333333333333336%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.933333333333334%"),
    top: hp("12.295081967213115%"),
    backgroundColor: "rgba(238, 246, 244, 1)"
  },
  ImageBackground_I3559_593_3559_582: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999957%"),
    top: hp("1.6393442622950811%")
  },
  View_I3559_593_3559_583: {
    flexGrow: 1,
    width: wp("42.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333338%"),
    top: hp("1.6393442622950811%")
  },
  Text_I3559_593_3559_583: {
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
