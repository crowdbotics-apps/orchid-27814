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
      <View style={styles.View_3616_19253}>
        <View style={styles.View_I3616_19253_704_11279} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da78/9e1d/32dc693200ea9afa09c0eed02d6e60d1"
          }}
          style={styles.ImageBackground_I3616_19253_704_11280}
        />
        <View style={styles.View_I3616_19253_704_11281} />
        <View style={styles.View_I3616_19253_3658_29013}>
          <View style={styles.View_I3616_19253_3658_27688}>
            <Text style={styles.Text_I3616_19253_3658_27688}>
              Import Form Seed
            </Text>
          </View>
        </View>
        <View style={styles.View_I3616_19253_3658_24597} />
      </View>
      <View style={styles.View_3616_19255}>
        <View style={styles.View_I3616_19255_1897_13585}>
          <Text style={styles.Text_I3616_19255_1897_13585}>Import</Text>
        </View>
      </View>
      <View style={styles.View_3616_19374}>
        <View style={styles.View_3616_19318}>
          <View style={styles.View_3616_19320}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3616_19396")
                )
              }
            >
              <View style={styles.View_I3616_19320_3614_35}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67b7/137c/d1995901858a5b1cc05ad17be4393fca"
                  }}
                  style={styles.ImageBackground_I3616_19320_3614_35_3589_206}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.View_I3616_19320_3614_45}>
              <View style={styles.View_I3616_19320_3614_45_3020_52674}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f174/1f03/3f490c6c5cf79a4280943c965d1c5314"
                  }}
                  style={styles.ImageBackground_I3616_19320_3614_45_3020_52675}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_3616_19341}>
            <View style={styles.View_3616_19319}>
              <Text style={styles.Text_3616_19319}>
                •••• ••••• ••• •••• ••••• •••• ••••• ••••• ••••• ••••• •••••
                ••••
              </Text>
            </View>
            <View style={styles.View_3616_19321}>
              <Text style={styles.Text_3616_19321}>Seed phrase</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3616_19375}>
          <View style={styles.View_I3616_19375_1246_32189}>
            <Text style={styles.Text_I3616_19375_1246_32189}>
              Password strength: Good
            </Text>
          </View>
          <View style={styles.View_I3616_19375_1246_32190}>
            <View style={styles.View_I3616_19375_1246_32191}>
              <Text style={styles.Text_I3616_19375_1246_32191}>••••••••</Text>
            </View>
            <View style={styles.View_I3616_19375_1246_32192}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67b7/137c/d1995901858a5b1cc05ad17be4393fca"
                }}
                style={styles.ImageBackground_I3616_19375_1246_32192_3589_206}
              />
            </View>
            <View style={styles.View_I3616_19375_1246_32193}>
              <Text style={styles.Text_I3616_19375_1246_32193}>
                New password
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3616_19376}>
          <View style={styles.View_I3616_19376_1246_32189}>
            <Text style={styles.Text_I3616_19376_1246_32189}>
              Must be at least 8 characters
            </Text>
          </View>
          <View style={styles.View_I3616_19376_1246_32190}>
            <View style={styles.View_I3616_19376_1246_32191}>
              <Text style={styles.Text_I3616_19376_1246_32191}>••••••••</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56f0/93a9/275471da9b275256f8a9f53aafa5b57c"
              }}
              style={styles.ImageBackground_I3616_19376_1246_32192}
            />
            <View style={styles.View_I3616_19376_1246_32193}>
              <Text style={styles.Text_I3616_19376_1246_32193}>
                Confirm password
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3616_19377}>
          <View style={styles.View_3616_19378}>
            <Text style={styles.Text_3616_19378}>Sign in with Face ID?</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4755/8f2d/4ec41290b3d4562139fd8fb21307db6a"
            }}
            style={styles.ImageBackground_3616_19379}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_3616_19253: {
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
  View_I3616_19253_704_11279: {
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
  ImageBackground_I3616_19253_704_11280: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.0109289617486334%")
  },
  View_I3616_19253_704_11281: {
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
  View_I3616_19253_3658_29013: {
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
  View_I3616_19253_3658_27688: {
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0%")
  },
  Text_I3616_19253_3658_27688: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3616_19253_3658_24597: {
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
  View_3616_19255: {
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
  View_I3616_19255_1897_13585: {
    flexGrow: 1,
    width: wp("14.133333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.53333333333334%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3616_19255_1897_13585: {
    color: "rgba(245, 250, 128, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3616_19374: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("43.71584699453552%"),
    minHeight: hp("43.71584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("19.398907103825135%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3616_19318: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_3616_19320: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.86666666666666%"),
    top: hp("3.8251366120218613%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3616_19320_3614_35: {
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
  ImageBackground_I3616_19320_3614_35_3589_206: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.6830601092896131%")
  },
  View_I3616_19320_3614_45: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666671%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3616_19320_3614_45_3020_52674: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3616_19320_3614_45_3020_52675: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3616_19341: {
    width: wp("60.53333333333333%"),
    minWidth: wp("60.53333333333333%"),
    height: hp("8.729335388850645%"),
    minHeight: hp("8.729335388850645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.1067374807889365%")
  },
  View_3616_19319: {
    width: wp("60.53333333333333%"),
    minWidth: wp("60.53333333333333%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.1719510438012293%")
  },
  Text_3616_19319: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3616_19321: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_3616_19321: {
    color: "rgba(175, 180, 192, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3616_19375: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.114754098360653%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3616_19375_1246_32189: {
    flexGrow: 1,
    width: wp("38.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("8.196721311475414%")
  },
  Text_I3616_19375_1246_32189: {
    color: "rgba(164, 169, 183, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3616_19375_1246_32190: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3616_19375_1246_32191: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    top: hp("3.278688524590173%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%")
  },
  Text_I3616_19375_1246_32191: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3616_19375_1246_32192: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.2786882640234105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3616_19375_1246_32192_3589_206: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.6830601092896202%")
  },
  View_I3616_19375_1246_32193: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    top: hp("1.092896174863391%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%")
  },
  Text_I3616_19375_1246_32193: {
    color: "rgba(175, 180, 192, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3616_19376: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.683060109289617%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3616_19376_1246_32189: {
    flexGrow: 1,
    width: wp("44.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("8.196721311475414%")
  },
  Text_I3616_19376_1246_32189: {
    color: "rgba(164, 169, 183, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3616_19376_1246_32190: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3616_19376_1246_32191: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%")
  },
  Text_I3616_19376_1246_32191: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3616_19376_1246_32192: {
    width: wp("6.4%"),
    height: hp("3.2786882640234105%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%")
  },
  View_I3616_19376_1246_32193: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    top: hp("1.092896174863391%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%")
  },
  Text_I3616_19376_1246_32193: {
    color: "rgba(175, 180, 192, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3616_19377: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.25136612021858%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3616_19378: {
    width: wp("47.199999999999996%"),
    minWidth: wp("47.199999999999996%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%")
  },
  Text_3616_19378: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3616_19379: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
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
