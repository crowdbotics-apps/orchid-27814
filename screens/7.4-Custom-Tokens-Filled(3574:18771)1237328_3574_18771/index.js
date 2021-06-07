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
      <View style={styles.View_3574_18772}>
        <View style={styles.View_I3574_18772_704_11279} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da78/9e1d/32dc693200ea9afa09c0eed02d6e60d1"
          }}
          style={styles.ImageBackground_I3574_18772_704_11280}
        />
        <View style={styles.View_I3574_18772_704_11281} />
        <View style={styles.View_I3574_18772_3658_29013}>
          <View style={styles.View_I3574_18772_3658_27688}>
            <Text style={styles.Text_I3574_18772_3658_27688}>Add Asset</Text>
          </View>
        </View>
        <View style={styles.View_I3574_18772_3658_24597} />
      </View>
      <View style={styles.View_3574_18773}>
        <View style={styles.View_3574_18774}>
          <View style={styles.View_I3574_18774_429_15620}>
            <Text style={styles.Text_I3574_18774_429_15620}>Search</Text>
          </View>
        </View>
        <View style={styles.View_3574_18775}>
          <View style={styles.View_I3574_18775_429_15588}>
            <Text style={styles.Text_I3574_18775_429_15588}>Custom Token</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3955_2973}>
        <View style={styles.View_3955_2974}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0f9/6ad7/c4f1ceb8576ad6ba67fe9cad9989a249"
            }}
            style={styles.ImageBackground_3955_2975}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d370/e689/99acff620c35cb43760deaa6083d7bcb"
            }}
            style={styles.ImageBackground_3955_2976}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f323/8921/29aa3978fd2ca604865d0e4c8804cb18"
            }}
            style={styles.ImageBackground_3955_2977}
          />
        </View>
        <View style={styles.View_3955_2978}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7988/18c4/368917319c5576422564e963e19f8e0a"
            }}
            style={styles.ImageBackground_3955_2979}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8244/8ca7/f956bd0169bd34153c619ea63167cd17"
            }}
            style={styles.ImageBackground_3955_2980}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6342/7140/c0a3483b14961a136833deec6294b174"
            }}
            style={styles.ImageBackground_3955_2981}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8896/8e0f/5c81ebd2f5777e5e9334359e9fbd15b8"
          }}
          style={styles.ImageBackground_3955_2982}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f116/8f8b/d641ddd7cef940bf1f706e2972b47099"
          }}
          style={styles.ImageBackground_3955_2983}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f6e/436d/166fc6da6cbc87f9b8815e497621858a"
          }}
          style={styles.ImageBackground_3955_2984}
        />
      </View>
      <View style={styles.View_3574_18814}>
        <View style={styles.View_3574_18815}>
          <View style={styles.View_I3574_18815_1234_32975}>
            <Text style={styles.Text_I3574_18815_1234_32975}>
              Token address
            </Text>
          </View>
          <View style={styles.View_I3574_18815_1234_32974}>
            <Text style={styles.Text_I3574_18815_1234_32974}>
              1KFHE7w8BhaENAswwryaoccDb6qcT6Db...
            </Text>
          </View>
        </View>
        <View style={styles.View_3574_18816}>
          <View style={styles.View_I3574_18816_1234_32975}>
            <Text style={styles.Text_I3574_18816_1234_32975}>
              Token symbols
            </Text>
          </View>
          <View style={styles.View_I3574_18816_1234_32974}>
            <Text style={styles.Text_I3574_18816_1234_32974}>BTC</Text>
          </View>
        </View>
        <View style={styles.View_3574_18817}>
          <View style={styles.View_I3574_18817_1234_32975}>
            <Text style={styles.Text_I3574_18817_1234_32975}>
              Token of Precision
            </Text>
          </View>
          <View style={styles.View_I3574_18817_1234_32974}>
            <Text style={styles.Text_I3574_18817_1234_32974}>10-8</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3574_18818}>
        <View style={styles.View_I3574_18818_3165_63954}>
          <View style={styles.View_I3574_18818_1704_9498}>
            <View style={styles.View_I3574_18818_1704_9498_1898_16045}>
              <Text style={styles.Text_I3574_18818_1704_9498_1898_16045}>
                Cancel
              </Text>
            </View>
          </View>
          <View style={styles.View_I3574_18818_1704_9522}>
            <View style={styles.View_I3574_18818_1704_9522_1897_13585}>
              <Text style={styles.Text_I3574_18818_1704_9522_1897_13585}>
                Add Token
              </Text>
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
  View_3574_18772: {
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
  View_I3574_18772_704_11279: {
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
  ImageBackground_I3574_18772_704_11280: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.0109289617486334%")
  },
  View_I3574_18772_704_11281: {
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
  View_I3574_18772_3658_29013: {
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
  View_I3574_18772_3658_27688: {
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0%")
  },
  Text_I3574_18772_3658_27688: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3574_18772_3658_24597: {
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
  View_3574_18773: {
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
  View_3574_18774: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3574_18774_429_15620: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("0.5464480874316955%")
  },
  Text_I3574_18774_429_15620: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3574_18775: {
    width: wp("38.666666666666664%"),
    minWidth: wp("38.666666666666664%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.199999999999996%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 249, 1)"
  },
  View_I3574_18775_429_15588: {
    flexGrow: 1,
    width: wp("30.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666669%"),
    top: hp("0.5464480874316955%")
  },
  Text_I3574_18775_429_15588: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3955_2973: {
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
  View_3955_2974: {
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
  ImageBackground_3955_2975: {
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
  ImageBackground_3955_2976: {
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
  ImageBackground_3955_2977: {
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
  View_3955_2978: {
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
  ImageBackground_3955_2979: {
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
  ImageBackground_3955_2980: {
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
  ImageBackground_3955_2981: {
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
  ImageBackground_3955_2982: {
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
  ImageBackground_3955_2983: {
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
  ImageBackground_3955_2984: {
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
  View_3574_18814: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("30.327868852459016%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3574_18815: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3574_18815_1234_32975: {
    flexGrow: 1,
    width: wp("22.400000000000002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.092896174863391%")
  },
  Text_I3574_18815_1234_32975: {
    color: "rgba(175, 180, 192, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3574_18815_1234_32974: {
    flexGrow: 1,
    width: wp("80.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("3.2786885245901622%")
  },
  Text_I3574_18815_1234_32974: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3574_18816: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.836065573770494%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3574_18816_1234_32975: {
    flexGrow: 1,
    width: wp("22.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.092896174863391%")
  },
  Text_I3574_18816_1234_32975: {
    color: "rgba(175, 180, 192, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3574_18816_1234_32974: {
    flexGrow: 1,
    width: wp("7.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("3.2786885245901587%")
  },
  Text_I3574_18816_1234_32974: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3574_18817: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.672131147540984%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3574_18817_1234_32975: {
    flexGrow: 1,
    width: wp("28.000000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.092896174863391%")
  },
  Text_I3574_18817_1234_32975: {
    color: "rgba(175, 180, 192, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3574_18817_1234_32974: {
    flexGrow: 1,
    width: wp("7.466666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("3.278688524590166%")
  },
  Text_I3574_18817_1234_32974: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3574_18818: {
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
  View_I3574_18818_3165_63954: {
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
  View_I3574_18818_1704_9498: {
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
  View_I3574_18818_1704_9498_1898_16045: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.466666666666667%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3574_18818_1704_9498_1898_16045: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3574_18818_1704_9522: {
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
  View_I3574_18818_1704_9522_1897_13585: {
    flexGrow: 1,
    width: wp("22.400000000000002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.600000000000001%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3574_18818_1704_9522_1897_13585: {
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
