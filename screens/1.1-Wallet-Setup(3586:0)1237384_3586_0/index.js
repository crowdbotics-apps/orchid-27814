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
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("3602_19614"))
        }
      >
        <View style={styles.View_3586_308}>
          <View style={styles.View_I3586_308_1897_13495}>
            <Text style={styles.Text_I3586_308_1897_13495}>
              Import Using Seed Phare
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("3586_316"))
        }
      >
        <View style={styles.View_3586_309}>
          <View style={styles.View_I3586_309_1897_13585}>
            <Text style={styles.Text_I3586_309_1897_13585}>
              Create A New Wallet
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_3586_314}>
        <Text style={styles.Text_3586_314}>Wallet Setup</Text>
      </View>
      <View style={styles.View_3586_315}>
        <Text style={styles.Text_3586_315}>
          Import an existing wallet or create a new one
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a1a/4f4c/b3f9618b0ce8c5b5d646efb222020f75"
        }}
        style={styles.ImageBackground_3968_4}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_3586_308: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("86.6120218579235%"),
    backgroundColor: "rgba(215, 228, 227, 1)"
  },
  View_I3586_308_1897_13495: {
    flexGrow: 1,
    width: wp("51.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.733333333333334%"),
    top: hp("2.185792349726782%")
  },
  Text_I3586_308_1897_13495: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3586_309: {
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
  View_I3586_309_1897_13585: {
    flexGrow: 1,
    width: wp("42.93333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.133333333333333%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3586_309_1897_13585: {
    color: "rgba(245, 250, 128, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3586_314: {
    width: wp("76%"),
    minWidth: wp("76%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("59.2896174863388%")
  },
  Text_3586_314: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3586_315: {
    width: wp("57.06666666666666%"),
    minWidth: wp("57.06666666666666%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("69.12568306010928%")
  },
  Text_3586_315: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3968_4: {
    width: wp("84.8%"),
    minWidth: wp("84.8%"),
    height: hp("36.74863387978142%"),
    minHeight: hp("36.74863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("14.207650273224044%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
