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
      <View style={styles.View_3589_658}>
        <View style={styles.View_3589_659}>
          <View style={styles.View_I3589_659_2892_43256}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd24/acb1/124c41b4a2f0cbe8ed07b2f82e3f5d5a"
              }}
              style={styles.ImageBackground_I3589_659_2892_43256_2730_41734}
            />
          </View>
        </View>
        <View style={styles.View_3589_660}>
          <View style={styles.View_I3589_660_2937_50297}>
            <View style={styles.View_I3589_660_2937_50298} />
            <View style={styles.View_I3589_660_2937_50299} />
          </View>
        </View>
        <View style={styles.View_3589_661}>
          <View style={styles.View_I3589_661_2892_46925}>
            <View style={styles.View_I3589_661_2892_46925_32_15}>
              <Text style={styles.Text_I3589_661_2892_46925_32_15}>2/3</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3589_662}>
        <Text style={styles.Text_3589_662}>Write Down Your Seed Phrase</Text>
      </View>
      <View style={styles.View_3589_664}>
        <Text style={styles.Text_3589_664}>
          This is your seed phrase. Write it down on a paper and keep it in a
          safe place. You&#39;ll be asked to re-enter this phrase (in order) on
          the next step.
        </Text>
      </View>
      <View style={styles.View_3667_0}>
        <View style={styles.View_I3667_0_1897_13605}>
          <Text style={styles.Text_I3667_0_1897_13605}>Continute</Text>
        </View>
      </View>
      <View style={styles.View_3602_19044}>
        <View style={styles.View_3720_1631}>
          <View style={styles.View_3720_1632}>
            <View style={styles.View_3720_1633}>
              <View style={styles.View_I3720_1633_3406_12917}>
                <Text style={styles.Text_I3720_1633_3406_12917}>1. then</Text>
              </View>
            </View>
            <View style={styles.View_3720_1634}>
              <View style={styles.View_I3720_1634_3406_12917}>
                <Text style={styles.Text_I3720_1634_3406_12917}>2. vacant</Text>
              </View>
            </View>
            <View style={styles.View_3720_1635}>
              <View style={styles.View_I3720_1635_3406_12917}>
                <Text style={styles.Text_I3720_1635_3406_12917}>3. girl</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3720_1636}>
            <View style={styles.View_3720_1637}>
              <View style={styles.View_I3720_1637_3406_12917}>
                <Text style={styles.Text_I3720_1637_3406_12917}>4. exist</Text>
              </View>
            </View>
            <View style={styles.View_3720_1638}>
              <View style={styles.View_I3720_1638_3406_12917}>
                <Text style={styles.Text_I3720_1638_3406_12917}>5. avoid</Text>
              </View>
            </View>
            <View style={styles.View_3720_1639}>
              <View style={styles.View_I3720_1639_3406_12917}>
                <Text style={styles.Text_I3720_1639_3406_12917}>6. usage</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3720_1640}>
            <View style={styles.View_3720_1641}>
              <View style={styles.View_I3720_1641_3406_12917}>
                <Text style={styles.Text_I3720_1641_3406_12917}>7. ride</Text>
              </View>
            </View>
            <View style={styles.View_3720_1642}>
              <View style={styles.View_I3720_1642_3406_12917}>
                <Text style={styles.Text_I3720_1642_3406_12917}>8. alien</Text>
              </View>
            </View>
            <View style={styles.View_3720_1643}>
              <View style={styles.View_I3720_1643_3406_12917}>
                <Text style={styles.Text_I3720_1643_3406_12917}>9. comic</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3720_1644}>
            <View style={styles.View_3720_1645}>
              <View style={styles.View_I3720_1645_3406_12917}>
                <Text style={styles.Text_I3720_1645_3406_12917}>10. cross</Text>
              </View>
            </View>
            <View style={styles.View_3720_1646}>
              <View style={styles.View_I3720_1646_3406_12917}>
                <Text style={styles.Text_I3720_1646_3406_12917}>11. upon</Text>
              </View>
            </View>
            <View style={styles.View_3720_1647}>
              <View style={styles.View_I3720_1647_3406_12917}>
                <Text style={styles.Text_I3720_1647_3406_12917}>12. hub</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3602_19022} />
        <View style={styles.View_3602_19023}>
          <View style={styles.View_I3602_19023_3023_54431}>
            <View style={styles.View_I3602_19023_3023_54431_2747_42674}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc13/6f77/080f43df9b9576cd0eda7b35b03524e0"
                }}
                style={
                  styles.ImageBackground_I3602_19023_3023_54431_2747_42674_3602_19051
                }
              />
            </View>
          </View>
          <View style={styles.View_I3602_19023_3023_54432}>
            <View style={styles.View_I3602_19023_3023_54433}>
              <Text style={styles.Text_I3602_19023_3023_54433}>
                Tap to reveal your seed phrase
              </Text>
            </View>
            <View style={styles.View_I3602_19023_3023_54434}>
              <Text style={styles.Text_I3602_19023_3023_54434}>
                Make sure no one is watching your screen.
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
  View_3589_658: {
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
  View_3589_659: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3589_659_2892_43256: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792352%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3589_659_2892_43256_2730_41734: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3589_660: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666665%"),
    top: hp("2.4590163934426235%"),
    backgroundColor: "rgba(244, 244, 246, 1)"
  },
  View_I3589_660_2937_50297: {
    flexGrow: 1,
    width: wp("48.17653401692708%"),
    height: hp("1.0930328421253976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I3589_660_2937_50298: {
    width: wp("0.00026666667933265365%"),
    minWidth: wp("0.00026666667933265365%"),
    height: hp("0.00013661202834664636%"),
    minHeight: hp("0.00013661202834664636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316937%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3589_660_2937_50299: {
    width: wp("0.00026666667933265365%"),
    minWidth: wp("0.00026666667933265365%"),
    height: hp("0.00013661202834664636%"),
    minHeight: hp("0.00013661202834664636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.17630208333334%"),
    top: hp("0.5464480874316937%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3589_661: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.13333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3589_661_2892_46925: {
    flexGrow: 1,
    width: wp("5.6000000000000005%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1.3661202185792352%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3589_661_2892_46925_32_15: {
    flexGrow: 1,
    width: wp("5.6000000000000005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3589_661_2892_46925_32_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3589_662: {
    width: wp("69.86666666666666%"),
    minWidth: wp("69.86666666666666%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("14.207650273224044%")
  },
  Text_3589_662: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3589_664: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("20.21857923497268%")
  },
  Text_3589_664: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3667_0: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("96.44808743169399%"),
    backgroundColor: "rgba(244, 244, 246, 1)"
  },
  View_I3667_0_1897_13605: {
    flexGrow: 1,
    width: wp("20.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.2%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3667_0_1897_13605: {
    color: "rgba(221, 223, 228, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3602_19044: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("33.87978142076503%"),
    minHeight: hp("33.87978142076503%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("37.704918032786885%")
  },
  View_3720_1631: {
    width: wp("86.66990559895834%"),
    minWidth: wp("86.66990559895834%"),
    height: hp("33.87978142076503%"),
    minHeight: hp("33.87978142076503%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3720_1632: {
    width: wp("78.4%"),
    minWidth: wp("78.4%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.185792349726775%")
  },
  View_3720_1633: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3720_1633_3406_12917: {
    flexGrow: 1,
    width: wp("10.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.533333333333331%"),
    top: hp("1.092896174863391%")
  },
  Text_I3720_1633_3406_12917: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3720_1634: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.466666666666665%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3720_1634_3406_12917: {
    flexGrow: 1,
    width: wp("16.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333357%"),
    top: hp("1.092896174863391%")
  },
  Text_I3720_1634_3406_12917: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3720_1635: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3720_1635_3406_12917: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.799999999999983%"),
    top: hp("1.092896174863391%")
  },
  Text_I3720_1635_3406_12917: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3720_1636: {
    width: wp("78.4%"),
    minWidth: wp("78.4%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("9.83606557377049%")
  },
  View_3720_1637: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3720_1637_3406_12917: {
    flexGrow: 1,
    width: wp("13.066666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.199999999999999%"),
    top: hp("1.092896174863391%")
  },
  Text_I3720_1637_3406_12917: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3720_1638: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.466666666666665%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3720_1638_3406_12917: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5333333333333385%"),
    top: hp("1.092896174863391%")
  },
  Text_I3720_1638_3406_12917: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3720_1639: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3720_1639_3406_12917: {
    flexGrow: 1,
    width: wp("15.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.86666666666666%"),
    top: hp("1.092896174863391%")
  },
  Text_I3720_1639_3406_12917: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3720_1640: {
    width: wp("78.4%"),
    minWidth: wp("78.4%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("17.486338797814206%")
  },
  View_3720_1641: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3720_1641_3406_12917: {
    flexGrow: 1,
    width: wp("11.200000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3720_1641_3406_12917: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3720_1642: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.466666666666665%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3720_1642_3406_12917: {
    flexGrow: 1,
    width: wp("13.066666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.200000000000003%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3720_1642_3406_12917: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3720_1643: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3720_1643_3406_12917: {
    flexGrow: 1,
    width: wp("15.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.86666666666666%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3720_1643_3406_12917: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3720_1644: {
    width: wp("78.4%"),
    minWidth: wp("78.4%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("25.13661202185793%")
  },
  View_3720_1645: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3720_1645_3406_12917: {
    flexGrow: 1,
    width: wp("15.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.866666666666667%"),
    top: hp("1.092896174863391%")
  },
  Text_I3720_1645_3406_12917: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3720_1646: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.466666666666665%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3720_1646_3406_12917: {
    flexGrow: 1,
    width: wp("14.133333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.666666666666664%"),
    top: hp("1.092896174863391%")
  },
  Text_I3720_1646_3406_12917: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3720_1647: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3720_1647_3406_12917: {
    flexGrow: 1,
    width: wp("12.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.466666666666654%"),
    top: hp("1.092896174863391%")
  },
  Text_I3720_1647_3406_12917: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3602_19022: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("33.87978142076503%"),
    minHeight: hp("33.87978142076503%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.6000000238418579,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_3602_19023: {
    width: wp("86.66990559895834%"),
    minWidth: wp("86.66990559895834%"),
    height: hp("15.846994535519126%"),
    minHeight: hp("15.846994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.016393442622956%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3602_19023_3023_54431: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.001627604166664%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3602_19023_3023_54431_2747_42674: {
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
  ImageBackground_I3602_19023_3023_54431_2747_42674_3602_19051: {
    flexGrow: 1,
    width: wp("7.99983418782552%"),
    height: hp("3.187615754174405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333984375000014%"),
    top: hp("1.1384349051720406%")
  },
  View_I3602_19023_3023_54432: {
    flexGrow: 1,
    width: wp("78.136572265625%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3602_19023_3023_54433: {
    width: wp("78.136572265625%"),
    minWidth: wp("78.136572265625%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3602_19023_3023_54433: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3602_19023_3023_54434: {
    width: wp("78.136572265625%"),
    minWidth: wp("78.136572265625%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.918032786885242%")
  },
  Text_I3602_19023_3023_54434: {
    color: "rgba(248, 248, 249, 1)",
    fontSize: 11,
    fontWeight: "400",
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
