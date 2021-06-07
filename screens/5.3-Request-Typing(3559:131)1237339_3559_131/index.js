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
      <View style={styles.View_3559_132}>
        <View style={styles.View_I3559_132_3658_30148} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da78/9e1d/32dc693200ea9afa09c0eed02d6e60d1"
          }}
          style={styles.ImageBackground_I3559_132_3658_30149}
        />
        <View style={styles.View_I3559_132_3658_30150} />
        <View style={styles.View_I3559_132_3658_30154} />
      </View>
      <View style={styles.View_3973_10564}>
        <View style={styles.View_3973_10565}>
          <Text style={styles.Text_3973_10565}>Enter Amount</Text>
        </View>
        <View style={styles.View_3973_10566}>
          <View style={styles.View_I3973_10566_60_269}>
            <View style={styles.View_I3973_10566_60_271}>
              <Text style={styles.Text_I3973_10566_60_271}>BNB</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4af/7369/cf9ce3ce6a37a82eaf947032f314e9eb"
              }}
              style={styles.ImageBackground_I3973_10566_60_270}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_3559_134}>
        <View style={styles.View_I3559_134_3132_57455}>
          <View style={styles.View_I3559_134_3132_57456}>
            <View style={styles.View_I3559_134_3132_57457}>
              <Text style={styles.Text_I3559_134_3132_57457}>1</Text>
            </View>
          </View>
          <View style={styles.View_I3559_134_3132_57458}>
            <View style={styles.View_I3559_134_3132_57459}>
              <Text style={styles.Text_I3559_134_3132_57459}>2</Text>
            </View>
          </View>
          <View style={styles.View_I3559_134_3132_57460}>
            <View style={styles.View_I3559_134_3132_57461}>
              <Text style={styles.Text_I3559_134_3132_57461}>3</Text>
            </View>
          </View>
          <View style={styles.View_I3559_134_3132_57462}>
            <View style={styles.View_I3559_134_3132_57463}>
              <Text style={styles.Text_I3559_134_3132_57463}>4</Text>
            </View>
          </View>
          <View style={styles.View_I3559_134_3132_57464}>
            <View style={styles.View_I3559_134_3132_57465}>
              <Text style={styles.Text_I3559_134_3132_57465}>5</Text>
            </View>
          </View>
          <View style={styles.View_I3559_134_3132_57466}>
            <View style={styles.View_I3559_134_3132_57467}>
              <Text style={styles.Text_I3559_134_3132_57467}>6</Text>
            </View>
          </View>
          <View style={styles.View_I3559_134_3132_57468}>
            <View style={styles.View_I3559_134_3132_57469}>
              <Text style={styles.Text_I3559_134_3132_57469}>7</Text>
            </View>
          </View>
          <View style={styles.View_I3559_134_3132_57470}>
            <View style={styles.View_I3559_134_3132_57471}>
              <Text style={styles.Text_I3559_134_3132_57471}>8</Text>
            </View>
          </View>
          <View style={styles.View_I3559_134_3132_57472}>
            <View style={styles.View_I3559_134_3132_57473}>
              <Text style={styles.Text_I3559_134_3132_57473}>9</Text>
            </View>
          </View>
          <View style={styles.View_I3559_134_3132_57474}>
            <View style={styles.View_I3559_134_3132_57475}>
              <Text style={styles.Text_I3559_134_3132_57475}>.</Text>
            </View>
          </View>
          <View style={styles.View_I3559_134_3132_57476}>
            <View style={styles.View_I3559_134_3132_57477}>
              <Text style={styles.Text_I3559_134_3132_57477}>0</Text>
            </View>
          </View>
          <View style={styles.View_I3559_134_3132_57478}>
            <View style={styles.View_I3559_134_3132_57479}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b99/977a/b3493996cf197ca9677edc8b23e88e10"
                }}
                style={styles.ImageBackground_I3559_134_3132_57480}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b3e/483d/f61114dc40b5ceee9a4ec60b337e0aa2"
                }}
                style={styles.ImageBackground_I3559_134_3132_57487}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I3559_134_3132_57488}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I3559_134_3132_57489}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I3559_134_3132_57490}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I3559_134_3132_57491}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I3559_134_3132_57492}>
          <View style={styles.View_I3559_134_3132_57492_1897_13585}>
            <Text style={styles.Text_I3559_134_3132_57492_1897_13585}>
              Next
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3559_135}>
        <View style={styles.View_I3559_135_3559_85}>
          <View style={styles.View_I3559_135_3559_86}>
            <View style={styles.View_I3559_135_3559_86_3541_1894}>
              <Text style={styles.Text_I3559_135_3559_86_3541_1894}>
                2.3686
              </Text>
            </View>
          </View>
          <View style={styles.View_I3559_135_3559_87}>
            <Text style={styles.Text_I3559_135_3559_87}>BNB</Text>
          </View>
        </View>
        <View style={styles.View_I3559_135_3559_88}>
          <View style={styles.View_I3559_135_3559_89}>
            <Text style={styles.Text_I3559_135_3559_89}>$</Text>
          </View>
          <View style={styles.View_I3559_135_3559_90}>
            <Text style={styles.Text_I3559_135_3559_90}>488.40</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_3559_132: {
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
  View_I3559_132_3658_30148: {
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
  ImageBackground_I3559_132_3658_30149: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.0109289617486334%")
  },
  View_I3559_132_3658_30150: {
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
  View_I3559_132_3658_30154: {
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
  View_3973_10564: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("14.48087431693989%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3973_10565: {
    width: wp("32.53333333333333%"),
    minWidth: wp("32.53333333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3973_10565: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3973_10566: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.4%"),
    top: hp("0%"),
    backgroundColor: "rgba(215, 228, 227, 1)"
  },
  View_I3973_10566_60_269: {
    flexGrow: 1,
    width: wp("16.266666666666666%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("1.0928961748633892%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3973_10566_60_271: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3973_10566_60_271: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3973_10566_60_270: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666674%")
  },
  View_3559_134: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("57.103825136612016%"),
    minHeight: hp("57.103825136612016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53.825136612021865%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3559_134_3132_57455: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("40.43715846994536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3559_134_3132_57456: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 249, 1)"
  },
  View_I3559_134_3132_57457: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.266666666666666%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3559_134_3132_57457: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3559_134_3132_57458: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.13333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 249, 1)"
  },
  View_I3559_134_3132_57459: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666667%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3559_134_3132_57459: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3559_134_3132_57460: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.26666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 249, 1)"
  },
  View_I3559_134_3132_57461: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.733333333333334%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3559_134_3132_57461: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3559_134_3132_57462: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.382513661202182%"),
    backgroundColor: "rgba(248, 248, 249, 1)"
  },
  View_I3559_134_3132_57463: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.733333333333334%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3559_134_3132_57463: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3559_134_3132_57464: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.13333333333333%"),
    top: hp("10.382513661202182%"),
    backgroundColor: "rgba(248, 248, 249, 1)"
  },
  View_I3559_134_3132_57465: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666667%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3559_134_3132_57465: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3559_134_3132_57466: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.26666666666667%"),
    top: hp("10.382513661202182%"),
    backgroundColor: "rgba(248, 248, 249, 1)"
  },
  View_I3559_134_3132_57467: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666674%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3559_134_3132_57467: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3559_134_3132_57468: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.765027322404364%"),
    backgroundColor: "rgba(248, 248, 249, 1)"
  },
  View_I3559_134_3132_57469: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.000000000000002%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3559_134_3132_57469: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3559_134_3132_57470: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.13333333333333%"),
    top: hp("20.765027322404364%"),
    backgroundColor: "rgba(248, 248, 249, 1)"
  },
  View_I3559_134_3132_57471: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666667%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3559_134_3132_57471: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3559_134_3132_57472: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.26666666666667%"),
    top: hp("20.765027322404364%"),
    backgroundColor: "rgba(248, 248, 249, 1)"
  },
  View_I3559_134_3132_57473: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666674%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3559_134_3132_57473: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3559_134_3132_57474: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.14754098360656%"),
    backgroundColor: "rgba(248, 248, 249, 1)"
  },
  View_I3559_134_3132_57475: {
    width: wp("1.866666666666667%"),
    minWidth: wp("1.866666666666667%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3559_134_3132_57475: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3559_134_3132_57476: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.13333333333333%"),
    top: hp("31.14754098360656%"),
    backgroundColor: "rgba(248, 248, 249, 1)"
  },
  View_I3559_134_3132_57477: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666667%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3559_134_3132_57477: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3559_134_3132_57478: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.26666666666667%"),
    top: hp("31.14754098360656%"),
    backgroundColor: "rgba(248, 248, 249, 1)"
  },
  View_I3559_134_3132_57479: {
    width: wp("6.400015258789063%"),
    height: hp("2.459016393442623%"),
    top: hp("3.41530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.666666666666671%")
  },
  ImageBackground_I3559_134_3132_57480: {
    width: wp("6.400015258789063%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3559_134_3132_57487: {
    width: wp("1.8888968149820964%"),
    height: hp("0.9673742648682309%"),
    top: hp("0.7450958418715743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9251302083333286%")
  },
  ImageBackground_I3559_134_3132_57488: {
    width: wp("0.31888964970906575%"),
    height: hp("0.16337037086486816%"),
    top: hp("0.7201481386612016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.540429687499994%")
  },
  ImageBackground_I3559_134_3132_57489: {
    width: wp("0.31906766891479493%"),
    height: hp("0.16337037086486816%"),
    top: hp("1.571838712431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8782552083333286%")
  },
  ImageBackground_I3559_134_3132_57490: {
    width: wp("0.31889896392822265%"),
    height: hp("0.16354799596338324%"),
    top: hp("1.5719054175204974%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.543164062499997%")
  },
  ImageBackground_I3559_134_3132_57491: {
    width: wp("0.31889896392822265%"),
    height: hp("0.1635482891009805%"),
    top: hp("0.72021484375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.881119791666663%")
  },
  View_I3559_134_3132_57492: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("42.62295081967213%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I3559_134_3132_57492_1897_13585: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.666666666666664%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3559_134_3132_57492_1897_13585: {
    color: "rgba(245, 250, 128, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3559_135: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("14.48087431693989%"),
    minHeight: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("23.224043715846996%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3559_135_3559_85: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.6393442622950793%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3559_135_3559_86: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3559_135_3559_86_3541_1894: {
    flexGrow: 1,
    width: wp("43.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3559_135_3559_86_3541_1894: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3559_135_3559_87: {
    width: wp("26.400000000000002%"),
    minWidth: wp("26.400000000000002%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.266666666666666%"),
    top: hp("0%")
  },
  Text_I3559_135_3559_87: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3559_135_3559_88: {
    flexGrow: 1,
    width: wp("17.599999999999998%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3559_135_3559_89: {
    width: wp("2.933333333333333%"),
    minWidth: wp("2.933333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3559_135_3559_89: {
    color: "rgba(175, 180, 192, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3559_135_3559_90: {
    width: wp("14.666666666666666%"),
    minWidth: wp("14.666666666666666%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333336%"),
    top: hp("0%")
  },
  Text_I3559_135_3559_90: {
    color: "rgba(175, 180, 192, 1)",
    fontSize: 13,
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
