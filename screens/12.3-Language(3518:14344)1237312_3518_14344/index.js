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
      <View style={styles.View_3518_14345}>
        <View style={styles.View_I3518_14345_704_11279} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da78/9e1d/32dc693200ea9afa09c0eed02d6e60d1"
          }}
          style={styles.ImageBackground_I3518_14345_704_11280}
        />
        <View style={styles.View_I3518_14345_704_11281} />
        <View style={styles.View_I3518_14345_3658_29013}>
          <View style={styles.View_I3518_14345_3658_27688}>
            <Text style={styles.Text_I3518_14345_3658_27688}>Language</Text>
          </View>
        </View>
        <View style={styles.View_I3518_14345_3658_24597} />
      </View>
      <View style={styles.View_3518_14402} />
      <View style={styles.View_3518_14347}>
        <View style={styles.View_3518_14348}>
          <View style={styles.View_I3518_14348_3114_586}>
            <View style={styles.View_I3518_14348_3114_586_3108_55554}>
              <Text style={styles.Text_I3518_14348_3114_586_3108_55554}>
                বাংলা
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3518_14349}>
          <View style={styles.View_I3518_14349_3114_586}>
            <View style={styles.View_I3518_14349_3114_586_3108_55554}>
              <Text style={styles.Text_I3518_14349_3114_586_3108_55554}>
                Català
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3518_14350}>
          <View style={styles.View_I3518_14350_3114_586}>
            <View style={styles.View_I3518_14350_3114_586_3108_55554}>
              <Text style={styles.Text_I3518_14350_3114_586_3108_55554}>
                Čeština
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3518_14351}>
          <View style={styles.View_I3518_14351_3114_586}>
            <View style={styles.View_I3518_14351_3114_586_3108_55554}>
              <Text style={styles.Text_I3518_14351_3114_586_3108_55554}>
                Dansk
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3518_14352}>
          <View style={styles.View_I3518_14352_3114_586}>
            <View style={styles.View_I3518_14352_3114_586_3108_55554}>
              <Text style={styles.Text_I3518_14352_3114_586_3108_55554}>
                Deutsch
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3518_14353}>
          <View style={styles.View_I3518_14353_3114_586}>
            <View style={styles.View_I3518_14353_3114_586_3108_55554}>
              <Text style={styles.Text_I3518_14353_3114_586_3108_55554}>
                ελληνικά
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3518_14354}>
          <View style={styles.View_I3518_14354_3114_546}>
            <View style={styles.View_I3518_14354_3114_546_3108_55554}>
              <Text style={styles.Text_I3518_14354_3114_546_3108_55554}>
                English
              </Text>
            </View>
          </View>
          <View style={styles.View_I3518_14354_3114_547}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56f0/93a9/275471da9b275256f8a9f53aafa5b57c"
              }}
              style={styles.ImageBackground_I3518_14354_3114_547_3108_55983}
            />
          </View>
        </View>
        <View style={styles.View_3518_14355}>
          <View style={styles.View_I3518_14355_3114_586}>
            <View style={styles.View_I3518_14355_3114_586_3108_55554}>
              <Text style={styles.Text_I3518_14355_3114_586_3108_55554}>
                Español
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3518_14356}>
          <View style={styles.View_I3518_14356_3114_586}>
            <View style={styles.View_I3518_14356_3114_586_3108_55554}>
              <Text style={styles.Text_I3518_14356_3114_586_3108_55554}>
                Español (Latin America)
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3518_14357}>
          <View style={styles.View_I3518_14357_3114_586}>
            <View style={styles.View_I3518_14357_3114_586_3108_55554}>
              <Text style={styles.Text_I3518_14357_3114_586_3108_55554}>
                Estonian
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3518_14358}>
          <View style={styles.View_I3518_14358_3114_586}>
            <View style={styles.View_I3518_14358_3114_586_3108_55554}>
              <Text style={styles.Text_I3518_14358_3114_586_3108_55554}>
                Suomi
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3518_14359}>
          <View style={styles.View_I3518_14359_3114_586}>
            <View style={styles.View_I3518_14359_3114_586_3108_55554}>
              <Text style={styles.Text_I3518_14359_3114_586_3108_55554}>
                Filipino
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
  View_3518_14345: {
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
  View_I3518_14345_704_11279: {
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
  ImageBackground_I3518_14345_704_11280: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.0109289617486334%")
  },
  View_I3518_14345_704_11281: {
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
  View_I3518_14345_3658_29013: {
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
  View_I3518_14345_3658_27688: {
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0%")
  },
  Text_I3518_14345_3658_27688: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3518_14345_3658_24597: {
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
  View_3518_14402: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97.86666666666667%"),
    top: hp("46.994535519125684%"),
    backgroundColor: "rgba(232, 233, 237, 1)",
    borderTopLeftRadius: 1000,
    borderTopRightRadius: 1000,
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000
  },
  View_3518_14347: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("89.61748633879782%"),
    minHeight: hp("89.61748633879782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.398907103825135%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3518_14348: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14348_3114_586: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.092896174863391%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14348_3114_586_3108_55554: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3518_14348_3114_586_3108_55554: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3518_14349: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043719%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14349_3114_586: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14349_3114_586_3108_55554: {
    flexGrow: 1,
    width: wp("13.066666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3518_14349_3114_586_3108_55554: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3518_14350: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.300546448087434%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14350_3114_586: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.092896174863391%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14350_3114_586_3108_55554: {
    flexGrow: 1,
    width: wp("15.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3518_14350_3114_586_3108_55554: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3518_14351: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.95081967213115%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14351_3114_586: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14351_3114_586_3108_55554: {
    flexGrow: 1,
    width: wp("12.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3518_14351_3114_586_3108_55554: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3518_14352: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30.601092896174865%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14352_3114_586: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.092896174863391%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14352_3114_586_3108_55554: {
    flexGrow: 1,
    width: wp("16.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3518_14352_3114_586_3108_55554: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3518_14353: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.25136612021858%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14353_3114_586: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14353_3114_586_3108_55554: {
    flexGrow: 1,
    width: wp("18.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3518_14353_3114_586_3108_55554: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3518_14354: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45.90163934426229%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14354_3114_546: {
    flexGrow: 1,
    width: wp("78.13333333333333%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14354_3114_546_3108_55554: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3518_14354_3114_546_3108_55554: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3518_14354_3114_547: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3518_14354_3114_547_3108_55983: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3518_14355: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53.55191256830601%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14355_3114_586: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.092896174863398%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14355_3114_586_3108_55554: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3518_14355_3114_586_3108_55554: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3518_14356: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("61.202185792349724%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14356_3114_586: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.092896174863398%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14356_3114_586_3108_55554: {
    flexGrow: 1,
    width: wp("47.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3518_14356_3114_586_3108_55554: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3518_14357: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("68.85245901639344%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14357_3114_586: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14357_3114_586_3108_55554: {
    flexGrow: 1,
    width: wp("17.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3518_14357_3114_586_3108_55554: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3518_14358: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("76.50273224043715%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14358_3114_586: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14358_3114_586_3108_55554: {
    flexGrow: 1,
    width: wp("12.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3518_14358_3114_586_3108_55554: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3518_14359: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("84.15300546448087%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14359_3114_586: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3518_14359_3114_586_3108_55554: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3518_14359_3114_586_3108_55554: {
    color: "rgba(118, 126, 147, 1)",
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
