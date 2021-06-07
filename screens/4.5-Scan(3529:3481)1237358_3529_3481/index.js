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
      <View style={styles.View_3529_3592} />
      <View style={styles.View_3533_15452}>
        <Text style={styles.Text_3533_15452}>Scaning...</Text>
      </View>
      <View style={styles.View_3529_3593}>
        <View style={styles.View_I3529_3593_2892_44114} />
        <View style={styles.View_I3529_3593_2892_44116}>
          <View style={styles.View_I3529_3593_2892_44116_2892_43141}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce1d/7a27/e340c793a1a32b81aa9e05d7c403448d"
              }}
              style={
                styles.ImageBackground_I3529_3593_2892_44116_2892_43141_2730_41734
              }
            />
          </View>
        </View>
      </View>
      <View style={styles.View_3533_15354}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5520/dc5c/36a3020c73df9a28cff0b1cf66a083c6"
          }}
          style={styles.ImageBackground_I3533_15354_3533_15373}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a29d/645d/f270f4c82fb47fa0c94098966b2e77f2"
          }}
          style={styles.ImageBackground_I3533_15354_3533_15440}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_3529_3592: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.6000000238418579
  },
  View_3533_15452: {
    width: wp("22.133333333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.93333333333333%"),
    top: hp("58.879781420765035%")
  },
  Text_3533_15452: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3529_3593: {
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
  View_I3529_3593_2892_44114: {
    flexGrow: 1,
    width: wp("45.733333333333334%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3529_3593_2892_44116: {
    flexGrow: 1,
    width: wp("45.733333333333334%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3529_3593_2892_44116_2892_43141: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.33333333333333%"),
    top: hp("1.3661202185792352%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3529_3593_2892_44116_2892_43141_2730_41734: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3533_15354: {
    width: wp("74.4%"),
    minWidth: wp("74.4%"),
    height: hp("38.114754098360656%"),
    minHeight: hp("38.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("19.672131147540984%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3533_15354_3533_15373: {
    flexGrow: 1,
    width: wp("55.800000000000004%"),
    height: hp("28.58606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.3%"),
    top: hp("4.764344262295079%")
  },
  ImageBackground_I3533_15354_3533_15440: {
    flexGrow: 1,
    width: wp("43.4%"),
    height: hp("22.23360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.499999999999996%"),
    top: hp("7.9405737704918025%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
