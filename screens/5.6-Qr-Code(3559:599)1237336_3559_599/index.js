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
      <View style={styles.View_3559_682}>
        <View style={styles.View_3559_600}>
          <View style={styles.View_I3559_600_3658_30148} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da78/9e1d/32dc693200ea9afa09c0eed02d6e60d1"
            }}
            style={styles.ImageBackground_I3559_600_3658_30149}
          />
          <View style={styles.View_I3559_600_3658_30150} />
          <View style={styles.View_I3559_600_3658_30154} />
        </View>
        <View style={styles.View_3559_601}>
          <View style={styles.View_I3559_601_3023_54431}>
            <View style={styles.View_I3559_601_3023_54431_2747_44124}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bef4/bd5b/5ff0cda1b9a3ce3997ecdf341918508e"
                }}
                style={
                  styles.ImageBackground_I3559_601_3023_54431_2747_44124_3933_678
                }
              />
            </View>
          </View>
          <View style={styles.View_I3559_601_3023_54432}>
            <View style={styles.View_I3559_601_3023_54433}>
              <Text style={styles.Text_I3559_601_3023_54433}>Send Link</Text>
            </View>
            <View style={styles.View_I3559_601_3023_54434}>
              <Text style={styles.Text_I3559_601_3023_54434}>
                Your request link is already to send! Sendthis link to a friend,
                and it will ask them to send 0.0001 ETH
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3559_602}>
          <Text style={styles.Text_3559_602}>
            https://Cryptooly.app.link/send/0xBBB6A12945aC14C84185a17C6BD2eAe96e/value=21jq
          </Text>
        </View>
        <View style={styles.View_3559_603}>
          <View style={styles.View_3559_604}>
            <View style={styles.View_3559_605}>
              <View style={styles.View_I3559_605_1897_13497}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b56/4a5c/8f1c5cddc9ad4fbe2c0b77d24b6fcb55"
                  }}
                  style={styles.ImageBackground_I3559_605_1897_13498}
                />
                <View style={styles.View_I3559_605_1897_13499}>
                  <Text style={styles.Text_I3559_605_1897_13499}>Copy</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_3559_606}>
              <View style={styles.View_I3559_606_1897_13497}>
                <View style={styles.View_I3559_606_1897_13498}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb14/ee51/dce0a381972437f139993f422e41cb7f"
                    }}
                    style={
                      styles.ImageBackground_I3559_606_1897_13498_3038_59434
                    }
                  />
                </View>
                <View style={styles.View_I3559_606_1897_13499}>
                  <Text style={styles.Text_I3559_606_1897_13499}>QR code</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_3559_607}>
            <View style={styles.View_I3559_607_1897_13587}>
              <View style={styles.View_I3559_607_1897_13588}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96f1/7650/0c25df18a3cbe83c20b6b6be58c0df2a"
                  }}
                  style={styles.ImageBackground_I3559_607_1897_13588_3559_411}
                />
              </View>
              <View style={styles.View_I3559_607_1897_13589}>
                <Text style={styles.Text_I3559_607_1897_13589}>Send Link</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3559_655}>
        <View style={styles.View_3559_656}>
          <View style={styles.View_I3559_656_3132_60124}>
            <View style={styles.View_I3559_656_3132_60125}>
              <View style={styles.View_I3559_656_3132_60123} />
              <View style={styles.View_I3559_656_3132_60126}>
                <Text style={styles.Text_I3559_656_3132_60126}>
                  Payment Request QR code
                </Text>
              </View>
            </View>
            <View style={styles.View_I3559_656_3132_60128} />
          </View>
        </View>
        <View style={styles.View_3559_657}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f35/a139/42fa89a2cf16b9684c55df55e4c4aa95"
            }}
            style={styles.ImageBackground_I3559_657_3555_570}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_3559_682: {
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
  View_3559_600: {
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
  View_I3559_600_3658_30148: {
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
  ImageBackground_I3559_600_3658_30149: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.0109289617486334%")
  },
  View_I3559_600_3658_30150: {
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
  View_I3559_600_3658_30154: {
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
  View_3559_601: {
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
  View_I3559_601_3023_54431: {
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
  View_I3559_601_3023_54431_2747_44124: {
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
  ImageBackground_I3559_601_3023_54431_2747_44124_3933_678: {
    flexGrow: 1,
    width: wp("12.79955851236979%"),
    height: hp("6.559516302223415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.0928961748633874%")
  },
  View_I3559_601_3023_54432: {
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
  View_I3559_601_3023_54433: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3559_601_3023_54433: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3559_601_3023_54434: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.918032786885242%")
  },
  Text_I3559_601_3023_54434: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3559_602: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("53.00546448087432%")
  },
  Text_3559_602: {
    color: "rgba(1, 110, 137, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3559_603: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("17.48633879781421%"),
    minHeight: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("87.70491803278688%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3559_604: {
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
  View_3559_605: {
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
  View_I3559_605_1897_13497: {
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
  ImageBackground_I3559_605_1897_13498: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3559_605_1897_13499: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I3559_605_1897_13499: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3559_606: {
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
  View_I3559_606_1897_13497: {
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
  View_I3559_606_1897_13498: {
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
  ImageBackground_I3559_606_1897_13498_3038_59434: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.546448087431699%")
  },
  View_I3559_606_1897_13499: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333339%"),
    top: hp("0%")
  },
  Text_I3559_606_1897_13499: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3559_607: {
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
  View_I3559_607_1897_13587: {
    flexGrow: 1,
    width: wp("29.06666666666667%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.06666666666667%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3559_607_1897_13588: {
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
  ImageBackground_I3559_607_1897_13588_3559_411: {
    flexGrow: 1,
    width: wp("2.66719970703125%"),
    height: hp("1.912704842989562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8661458333333343%"),
    top: hp("0.6829266991120164%")
  },
  View_I3559_607_1897_13589: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%"),
    top: hp("0%")
  },
  Text_I3559_607_1897_13589: {
    color: "rgba(245, 250, 128, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3559_655: {
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
  View_3559_656: {
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
  View_I3559_656_3132_60124: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("74.4536853227459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.47527642588798%"),
    backgroundColor: "rgba(248, 248, 249, 1)"
  },
  View_I3559_656_3132_60125: {
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
  View_I3559_656_3132_60123: {
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
  View_I3559_656_3132_60126: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("5.191256830601091%")
  },
  Text_I3559_656_3132_60126: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3559_656_3132_60128: {
    width: wp("0.00026666667933265365%"),
    minWidth: wp("0.00026666667933265365%"),
    height: hp("0.00013661202834664636%"),
    minHeight: hp("0.00013661202834664636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.99986979166667%"),
    top: hp("74.45355191256829%")
  },
  View_3559_657: {
    width: wp("74.4%"),
    minWidth: wp("74.4%"),
    height: hp("38.114754098360656%"),
    minHeight: hp("38.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("55.32786885245902%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3559_657_3555_570: {
    flexGrow: 1,
    width: wp("74.4%"),
    height: hp("38.114754098360656%"),
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
