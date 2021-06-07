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
      <View style={styles.View_3943_13828}>
        <View style={styles.View_I3943_13828_3658_29598} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da78/9e1d/32dc693200ea9afa09c0eed02d6e60d1"
          }}
          style={styles.ImageBackground_I3943_13828_3658_29599}
        />
        <View style={styles.View_I3943_13828_3658_29600} />
        <View style={styles.View_I3943_13828_3658_29604} />
        <View style={styles.View_I3943_13828_3658_29701}>
          <View style={styles.View_I3943_13828_3658_29702}>
            <View style={styles.View_I3943_13828_3658_29702_2892_43256}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd24/acb1/124c41b4a2f0cbe8ed07b2f82e3f5d5a"
                }}
                style={
                  styles.ImageBackground_I3943_13828_3658_29702_2892_43256_2730_41734
                }
              />
            </View>
          </View>
          <View style={styles.View_I3943_13828_3658_29703}>
            <Text style={styles.Text_I3943_13828_3658_29703}>Amount</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3943_13829}>
        <View style={styles.View_I3943_13829_3799_51080}>
          <View style={styles.View_I3943_13829_3799_51081}>
            <View style={styles.View_I3943_13829_3799_51082}>
              <Text style={styles.Text_I3943_13829_3799_51082}>1</Text>
            </View>
          </View>
          <View style={styles.View_I3943_13829_3799_51083}>
            <View style={styles.View_I3943_13829_3799_51084}>
              <Text style={styles.Text_I3943_13829_3799_51084}>2</Text>
            </View>
          </View>
          <View style={styles.View_I3943_13829_3799_51085}>
            <View style={styles.View_I3943_13829_3799_51086}>
              <Text style={styles.Text_I3943_13829_3799_51086}>3</Text>
            </View>
          </View>
          <View style={styles.View_I3943_13829_3799_51087}>
            <View style={styles.View_I3943_13829_3799_51088}>
              <Text style={styles.Text_I3943_13829_3799_51088}>4</Text>
            </View>
          </View>
          <View style={styles.View_I3943_13829_3799_51089}>
            <View style={styles.View_I3943_13829_3799_51090}>
              <Text style={styles.Text_I3943_13829_3799_51090}>5</Text>
            </View>
          </View>
          <View style={styles.View_I3943_13829_3799_51091}>
            <View style={styles.View_I3943_13829_3799_51092}>
              <Text style={styles.Text_I3943_13829_3799_51092}>6</Text>
            </View>
          </View>
          <View style={styles.View_I3943_13829_3799_51093}>
            <View style={styles.View_I3943_13829_3799_51094}>
              <Text style={styles.Text_I3943_13829_3799_51094}>7</Text>
            </View>
          </View>
          <View style={styles.View_I3943_13829_3799_51095}>
            <View style={styles.View_I3943_13829_3799_51096}>
              <Text style={styles.Text_I3943_13829_3799_51096}>8</Text>
            </View>
          </View>
          <View style={styles.View_I3943_13829_3799_51097}>
            <View style={styles.View_I3943_13829_3799_51098}>
              <Text style={styles.Text_I3943_13829_3799_51098}>9</Text>
            </View>
          </View>
          <View style={styles.View_I3943_13829_3799_51099}>
            <View style={styles.View_I3943_13829_3799_51100}>
              <Text style={styles.Text_I3943_13829_3799_51100}>.</Text>
            </View>
          </View>
          <View style={styles.View_I3943_13829_3799_51101}>
            <View style={styles.View_I3943_13829_3799_51102}>
              <Text style={styles.Text_I3943_13829_3799_51102}>0</Text>
            </View>
          </View>
          <View style={styles.View_I3943_13829_3799_51103}>
            <View style={styles.View_I3943_13829_3799_51104}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b99/977a/b3493996cf197ca9677edc8b23e88e10"
                }}
                style={styles.ImageBackground_I3943_13829_3799_51105}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b3e/483d/f61114dc40b5ceee9a4ec60b337e0aa2"
                }}
                style={styles.ImageBackground_I3943_13829_3799_51112}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I3943_13829_3799_51113}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I3943_13829_3799_51114}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I3943_13829_3799_51115}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I3943_13829_3799_51116}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I3943_13829_3799_51117}>
          <View style={styles.View_I3943_13829_3799_51117_1897_13585}>
            <Text style={styles.Text_I3943_13829_3799_51117_1897_13585}>
              Next
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3943_13830}>
        <Text style={styles.Text_3943_13830}>Balance: 11.4188 BNB</Text>
      </View>
      <View style={styles.View_3943_13831}>
        <View style={styles.View_I3943_13831_3406_12815}>
          <Text style={styles.Text_I3943_13831_3406_12815}>$ 488.40</Text>
        </View>
        <View style={styles.View_I3943_13831_3406_12816}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b5d/2f5f/081ba5a9f754af02dfc1479b10e538ef"
            }}
            style={styles.ImageBackground_I3943_13831_3406_12816_3541_1937}
          />
        </View>
      </View>
      <View style={styles.View_3943_13832}>
        <View style={styles.View_I3943_13832_3541_1888}>
          <Text style={styles.Text_I3943_13832_3541_1888}>2,3686</Text>
        </View>
        <View style={styles.View_I3943_13832_3541_1889} />
      </View>
      <View style={styles.View_3943_13833}>
        <View style={styles.View_I3943_13833_33_7}>
          <Text style={styles.Text_I3943_13833_33_7}>Use max</Text>
        </View>
      </View>
      <View style={styles.View_3943_13834}>
        <View style={styles.View_I3943_13834_60_269}>
          <View style={styles.View_I3943_13834_60_271}>
            <Text style={styles.Text_I3943_13834_60_271}>BNB</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4af/7369/cf9ce3ce6a37a82eaf947032f314e9eb"
            }}
            style={styles.ImageBackground_I3943_13834_60_270}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_3943_13828: {
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
  View_I3943_13828_3658_29598: {
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
  ImageBackground_I3943_13828_3658_29599: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.0109289617486334%")
  },
  View_I3943_13828_3658_29600: {
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
  View_I3943_13828_3658_29604: {
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
  View_I3943_13828_3658_29701: {
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
  View_I3943_13828_3658_29702: {
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
  View_I3943_13828_3658_29702_2892_43256: {
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
  ImageBackground_I3943_13828_3658_29702_2892_43256_2730_41734: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3943_13828_3658_29703: {
    width: wp("82.93333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("0%")
  },
  Text_I3943_13828_3658_29703: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3943_13829: {
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
  View_I3943_13829_3799_51080: {
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
  View_I3943_13829_3799_51081: {
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
  View_I3943_13829_3799_51082: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.266666666666666%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3943_13829_3799_51082: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_13829_3799_51083: {
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
  View_I3943_13829_3799_51084: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666667%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3943_13829_3799_51084: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_13829_3799_51085: {
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
  View_I3943_13829_3799_51086: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.733333333333334%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3943_13829_3799_51086: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_13829_3799_51087: {
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
  View_I3943_13829_3799_51088: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.733333333333334%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3943_13829_3799_51088: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_13829_3799_51089: {
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
  View_I3943_13829_3799_51090: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666667%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3943_13829_3799_51090: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_13829_3799_51091: {
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
  View_I3943_13829_3799_51092: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666674%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3943_13829_3799_51092: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_13829_3799_51093: {
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
  View_I3943_13829_3799_51094: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.000000000000002%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3943_13829_3799_51094: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_13829_3799_51095: {
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
  View_I3943_13829_3799_51096: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666667%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3943_13829_3799_51096: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_13829_3799_51097: {
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
  View_I3943_13829_3799_51098: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666674%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3943_13829_3799_51098: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_13829_3799_51099: {
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
  View_I3943_13829_3799_51100: {
    width: wp("1.866666666666667%"),
    minWidth: wp("1.866666666666667%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3943_13829_3799_51100: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_13829_3799_51101: {
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
  View_I3943_13829_3799_51102: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666667%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3943_13829_3799_51102: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_13829_3799_51103: {
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
  View_I3943_13829_3799_51104: {
    width: wp("6.400015258789063%"),
    height: hp("2.459016393442623%"),
    top: hp("3.41530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.666666666666671%")
  },
  ImageBackground_I3943_13829_3799_51105: {
    width: wp("6.400015258789063%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3943_13829_3799_51112: {
    width: wp("1.8888968149820964%"),
    height: hp("0.9673742648682309%"),
    top: hp("0.7450958418715743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9251302083333286%")
  },
  ImageBackground_I3943_13829_3799_51113: {
    width: wp("0.31888964970906575%"),
    height: hp("0.16337037086486816%"),
    top: hp("0.7201481386612016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.540429687499994%")
  },
  ImageBackground_I3943_13829_3799_51114: {
    width: wp("0.31906766891479493%"),
    height: hp("0.16337037086486816%"),
    top: hp("1.571838712431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8782552083333286%")
  },
  ImageBackground_I3943_13829_3799_51115: {
    width: wp("0.31889896392822265%"),
    height: hp("0.16354799596338324%"),
    top: hp("1.5719054175204974%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.543164062499997%")
  },
  ImageBackground_I3943_13829_3799_51116: {
    width: wp("0.31889896392822265%"),
    height: hp("0.1635482891009805%"),
    top: hp("0.72021484375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.881119791666663%")
  },
  View_I3943_13829_3799_51117: {
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
  View_I3943_13829_3799_51117_1897_13585: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.666666666666664%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3943_13829_3799_51117_1897_13585: {
    color: "rgba(245, 250, 128, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3943_13830: {
    width: wp("37.86666666666667%"),
    minWidth: wp("37.86666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.2%"),
    top: hp("46.17486338797814%")
  },
  Text_3943_13830: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3943_13831: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.33333333333333%"),
    top: hp("39.07103825136612%"),
    backgroundColor: "rgba(254, 254, 229, 1)"
  },
  View_I3943_13831_3406_12815: {
    flexGrow: 1,
    width: wp("16.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666673%"),
    top: hp("1.092896174863391%")
  },
  Text_I3943_13831_3406_12815: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_13831_3406_12816: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.66666666666668%"),
    top: hp("1.092896174863391%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3943_13831_3406_12816_3541_1937: {
    flexGrow: 1,
    width: wp("3.2571500142415366%"),
    height: hp("2.459014830042104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5714192708333243%"),
    top: hp("0.4244444800204903%")
  },
  View_3943_13832: {
    width: wp("44.800000000000004%"),
    minWidth: wp("44.800000000000004%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.73333333333333%"),
    top: hp("29.23497267759563%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3943_13832_3541_1888: {
    flexGrow: 1,
    width: wp("43.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3943_13832_3541_1888: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_13832_3541_1889: {
    flexGrow: 1,
    width: wp("0.5333333333333333%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.266666666666666%"),
    top: hp("0.5464480874316919%"),
    backgroundColor: "rgba(245, 250, 128, 1)",
    borderTopLeftRadius: 1000,
    borderTopRightRadius: 1000,
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000
  },
  View_3943_13833: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.86666666666666%"),
    top: hp("19.398907103825135%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3943_13833_33_7: {
    flexGrow: 1,
    width: wp("15.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("1.092896174863391%")
  },
  Text_I3943_13833_33_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3943_13834: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.6%"),
    top: hp("19.398907103825135%"),
    backgroundColor: "rgba(215, 228, 227, 1)"
  },
  View_I3943_13834_60_269: {
    flexGrow: 1,
    width: wp("16.266666666666666%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("1.092896174863391%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3943_13834_60_271: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3943_13834_60_271: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3943_13834_60_270: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666667%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
