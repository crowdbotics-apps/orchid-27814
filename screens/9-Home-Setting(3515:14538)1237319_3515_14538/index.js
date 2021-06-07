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
      <View style={styles.View_3962_11023}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cc3/ae15/d65ba414b95d99967f0755e8c9b952c1"
          }}
          style={styles.ImageBackground_3962_11024}
        />
        <View style={styles.View_3962_11025}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11be/acfa/bb848c3d62374a126e83322e2b54a644"
            }}
            style={styles.ImageBackground_3962_11026}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11be/acfa/bb848c3d62374a126e83322e2b54a644"
            }}
            style={styles.ImageBackground_3962_11027}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abad/a722/93dc2815deaf22363b0c808320c66de7"
            }}
            style={styles.ImageBackground_3962_11037}
          />
        </View>
        <View style={styles.View_3962_11029}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cb1/38eb/785e6216a924e566551433a98512ae95"
            }}
            style={styles.ImageBackground_3962_11030}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cb1/38eb/785e6216a924e566551433a98512ae95"
            }}
            style={styles.ImageBackground_3962_11031}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6951/d098/d87b966cb1f4290c781ac3de312b94c2"
            }}
            style={styles.ImageBackground_3962_11036}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92ea/6096/ff96450e36f98e85250639d6a9938e69"
          }}
          style={styles.ImageBackground_3962_11033}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16dc/28b5/fd8522fd6d64f51d762c1a0143e290bf"
          }}
          style={styles.ImageBackground_3962_11034}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6391/3c7b/8effb6e78141cb4c40ae8ec33646f49e"
          }}
          style={styles.ImageBackground_3962_11035}
        />
      </View>
      <View style={styles.View_3962_11038}>
        <View style={styles.View_3962_11039}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8324/2d51/d66d1c4f842af3834a9199d686a982b2"
            }}
            style={styles.ImageBackground_3962_11040}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8324/2d51/d66d1c4f842af3834a9199d686a982b2"
            }}
            style={styles.ImageBackground_3962_11041}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d660/6628/001ab39a24ad338b075672887032a888"
            }}
            style={styles.ImageBackground_3962_11042}
          />
        </View>
        <View style={styles.View_3962_11043}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cfd/f5c0/e0647b8c69fe93fa4abaa700e208e9b2"
            }}
            style={styles.ImageBackground_3962_11044}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cfd/f5c0/e0647b8c69fe93fa4abaa700e208e9b2"
            }}
            style={styles.ImageBackground_3962_11045}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fd5/6f4f/1209a6e2b67763c32c3c7843c9a398ea"
            }}
            style={styles.ImageBackground_3962_11046}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ff7/7558/9178664685ca9772dd932839a72fb1ca"
          }}
          style={styles.ImageBackground_3962_11047}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5c4/3826/81088fb63e96cfc2f7f69a2081648b4a"
          }}
          style={styles.ImageBackground_3962_11048}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/895d/d817/99168ebbcd85e835dc21b4dcb472e158"
          }}
          style={styles.ImageBackground_3962_11049}
        />
      </View>
      <View style={styles.View_3515_14540}>
        <View style={styles.View_3515_14541}>
          <View style={styles.View_3515_14542}>
            <View style={styles.View_I3515_14542_3107_56532}>
              <View style={styles.View_I3515_14542_3107_56532_3108_55510}>
                <View
                  style={
                    styles.View_I3515_14542_3107_56532_3108_55510_2730_41734
                  }
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb4a/a5a9/b14aeef5c6e44a2df099803d08e31d81"
                    }}
                    style={
                      styles.ImageBackground_I3515_14542_3107_56532_3108_55510_2730_41734_2694_39831
                    }
                  />
                </View>
              </View>
              <View style={styles.View_I3515_14542_3107_56532_3108_55509}>
                <Text style={styles.Text_I3515_14542_3107_56532_3108_55509}>
                  Account
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3515_14544}>
            <View style={styles.View_I3515_14544_3107_56532}>
              <View style={styles.View_I3515_14544_3107_56532_3108_55510}>
                <View
                  style={
                    styles.View_I3515_14544_3107_56532_3108_55510_2730_41734
                  }
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3044/d0ac/625ff466654f07d04b8712d7b60bf465"
                    }}
                    style={
                      styles.ImageBackground_I3515_14544_3107_56532_3108_55510_2730_41734_3502_14077
                    }
                  />
                </View>
              </View>
              <View style={styles.View_I3515_14544_3107_56532_3108_55509}>
                <Text style={styles.Text_I3515_14544_3107_56532_3108_55509}>
                  Transaction History
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3515_14545}>
          <View style={styles.View_I3515_14545_3107_56532}>
            <View style={styles.View_I3515_14545_3107_56532_3108_55510}>
              <View
                style={styles.View_I3515_14545_3107_56532_3108_55510_2730_41734}
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5db/d346/991b83ecc5be6d1887be98570878c260"
                  }}
                  style={
                    styles.ImageBackground_I3515_14545_3107_56532_3108_55510_2730_41734_3658_30558
                  }
                />
              </View>
            </View>
            <View style={styles.View_I3515_14545_3107_56532_3108_55509}>
              <Text style={styles.Text_I3515_14545_3107_56532_3108_55509}>
                Share Public
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3515_14546}>
          <View style={styles.View_I3515_14546_3107_56532}>
            <View style={styles.View_I3515_14546_3107_56532_3108_55510}>
              <View
                style={styles.View_I3515_14546_3107_56532_3108_55510_2730_41734}
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f442/c916/1b74fad0a6c1a4be869b9becbff69ce5"
                  }}
                  style={
                    styles.ImageBackground_I3515_14546_3107_56532_3108_55510_2730_41734_3419_13598
                  }
                />
              </View>
            </View>
            <View style={styles.View_I3515_14546_3107_56532_3108_55509}>
              <Text style={styles.Text_I3515_14546_3107_56532_3108_55509}>
                Setting
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3515_14547}>
          <View style={styles.View_3515_14548}>
            <View style={styles.View_I3515_14548_3107_56532}>
              <View style={styles.View_I3515_14548_3107_56532_3108_55510}>
                <View
                  style={
                    styles.View_I3515_14548_3107_56532_3108_55510_2730_41734
                  }
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84cd/a388/f247412ceb0386293a8f663d66fe5b64"
                    }}
                    style={
                      styles.ImageBackground_I3515_14548_3107_56532_3108_55510_2730_41734_3038_59591
                    }
                  />
                </View>
              </View>
              <View style={styles.View_I3515_14548_3107_56532_3108_55509}>
                <Text style={styles.Text_I3515_14548_3107_56532_3108_55509}>
                  Get Help
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3515_14549}>
            <View style={styles.View_I3515_14549_3107_56532}>
              <View style={styles.View_I3515_14549_3107_56532_3108_55510}>
                <View
                  style={
                    styles.View_I3515_14549_3107_56532_3108_55510_2730_41734
                  }
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a10f/1cef/65e63ffcb74411257dbbd096c9e23540"
                    }}
                    style={
                      styles.ImageBackground_I3515_14549_3107_56532_3108_55510_2730_41734_3502_14114
                    }
                  />
                </View>
              </View>
              <View style={styles.View_I3515_14549_3107_56532_3108_55509}>
                <Text style={styles.Text_I3515_14549_3107_56532_3108_55509}>
                  Send Feedback
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3515_14550}>
        <View style={styles.View_I3515_14550_3107_56532}>
          <View style={styles.View_I3515_14550_3107_56532_3108_55510}>
            <View
              style={styles.View_I3515_14550_3107_56532_3108_55510_2730_41734}
            >
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7248/717f/bbadfc2b32f060c0119adac13957cabd"
                }}
                style={
                  styles.ImageBackground_I3515_14550_3107_56532_3108_55510_2730_41734_3502_14145
                }
              />
            </View>
          </View>
          <View style={styles.View_I3515_14550_3107_56532_3108_55509}>
            <Text style={styles.Text_I3515_14550_3107_56532_3108_55509}>
              Log out
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3623_358}>
        <View style={styles.View_I3623_358_2892_44027} />
        <View style={styles.View_I3623_358_2892_44028}>
          <Text style={styles.Text_I3623_358_2892_44028}>Setting</Text>
        </View>
        <View style={styles.View_I3623_358_2892_44029} />
      </View>
      <View style={styles.View_3515_14551}>
        <View style={styles.View_I3515_14551_3497_1681} />
        <View style={styles.View_I3515_14551_3497_1682}>
          <View style={styles.View_I3515_14551_3497_1682_3497_1596}>
            <View
              style={styles.View_I3515_14551_3497_1682_3497_1596_2730_41734}
            >
              <View
                style={
                  styles.View_I3515_14551_3497_1682_3497_1596_2730_41734_2993_53328
                }
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6dad/4249/2e5befa70ef8bc188965502c3e1e23af"
                  }}
                  style={
                    styles.ImageBackground_I3515_14551_3497_1682_3497_1596_2730_41734_2993_53329
                  }
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I3515_14551_3497_1683}>
          <View style={styles.View_I3515_14551_3497_1683_3497_1596}>
            <View
              style={styles.View_I3515_14551_3497_1683_3497_1596_2730_41734}
            >
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5fe7/4112/6328a1a25ab49f7fb6b024c3e7f30062"
                }}
                style={
                  styles.ImageBackground_I3515_14551_3497_1683_3497_1596_2730_41734_3477_12778
                }
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I3515_14551_3497_1685}>
          <View style={styles.View_I3515_14551_3497_1685_3497_1596}>
            <View
              style={styles.View_I3515_14551_3497_1685_3497_1596_2730_41734}
            >
              <View
                style={
                  styles.View_I3515_14551_3497_1685_3497_1596_2730_41734_3020_52674
                }
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f8c/683d/24b08c1b3d168d77598fe650cf1d781d"
                  }}
                  style={
                    styles.ImageBackground_I3515_14551_3497_1685_3497_1596_2730_41734_3020_52675
                  }
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I3515_14551_3497_1684}>
          <View style={styles.View_I3515_14551_3497_1684_3497_1584}>
            <View
              style={styles.View_I3515_14551_3497_1684_3497_1584_2730_41734}
            >
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d47c/72ba/158985b014fccdf48174b728dc40994e"
                }}
                style={
                  styles.ImageBackground_I3515_14551_3497_1684_3497_1584_2730_41734_3419_13598
                }
              />
            </View>
          </View>
          <View style={styles.View_I3515_14551_3497_1684_3497_1585}>
            <Text style={styles.Text_I3515_14551_3497_1684_3497_1585}>
              Setting
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_3962_11023: {
    width: wp("33.31269734700521%"),
    minWidth: wp("33.31269734700521%"),
    height: hp("16.24173649021837%"),
    minHeight: hp("16.24173649021837%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6.060123697916667%"),
    top: hp("87.71252241290983%")
  },
  ImageBackground_3962_11024: {
    width: wp("33.312591552734375%"),
    minWidth: wp("33.312591552734375%"),
    height: hp("16.241641643920232%"),
    minHeight: hp("16.241641643920232%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.00001627604166642982%"),
    top: hp("0.00013341017759671558%"),
    resizeMode: "cover"
  },
  View_3962_11025: {
    width: wp("33.312591552734375%"),
    minWidth: wp("33.312591552734375%"),
    height: hp("16.241641643920232%"),
    minHeight: hp("16.241641643920232%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00009765624999946709%"),
    top: hp("0%")
  },
  ImageBackground_3962_11026: {
    width: wp("33.312591552734375%"),
    minWidth: wp("33.312591552734375%"),
    height: hp("16.241641643920232%"),
    minHeight: hp("16.241641643920232%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_3962_11027: {
    width: wp("33.312591552734375%"),
    minWidth: wp("33.312591552734375%"),
    height: hp("16.241641643920232%"),
    minHeight: hp("16.241641643920232%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_3962_11037: {
    width: wp("33.312591552734375%"),
    minWidth: wp("33.312591552734375%"),
    height: hp("16.241641643920232%"),
    minHeight: hp("16.241641643920232%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3962_11029: {
    width: wp("33.312591552734375%"),
    minWidth: wp("33.312591552734375%"),
    height: hp("16.241641643920232%"),
    minHeight: hp("16.241641643920232%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00009765624999946709%"),
    top: hp("0%")
  },
  ImageBackground_3962_11030: {
    width: wp("33.312591552734375%"),
    minWidth: wp("33.312591552734375%"),
    height: hp("16.241641643920232%"),
    minHeight: hp("16.241641643920232%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_3962_11031: {
    width: wp("33.312591552734375%"),
    minWidth: wp("33.312591552734375%"),
    height: hp("16.241641643920232%"),
    minHeight: hp("16.241641643920232%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_3962_11036: {
    width: wp("33.312591552734375%"),
    minWidth: wp("33.312591552734375%"),
    height: hp("16.241641643920232%"),
    minHeight: hp("16.241641643920232%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3962_11033: {
    width: wp("33.312591552734375%"),
    minWidth: wp("33.312591552734375%"),
    height: hp("16.241641643920232%"),
    minHeight: hp("16.241641643920232%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.00001627604166642982%"),
    top: hp("0.00013341017759671558%")
  },
  ImageBackground_3962_11034: {
    width: wp("33.312591552734375%"),
    minWidth: wp("33.312591552734375%"),
    height: hp("16.241641643920232%"),
    minHeight: hp("16.241641643920232%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.00001627604166642982%"),
    top: hp("0.00013341017759671558%")
  },
  ImageBackground_3962_11035: {
    width: wp("33.312591552734375%"),
    minWidth: wp("33.312591552734375%"),
    height: hp("16.241641643920232%"),
    minHeight: hp("16.241641643920232%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.00001627604166642982%"),
    top: hp("0.00013341017759671558%")
  },
  View_3962_11038: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("11.807953464528902%"),
    minHeight: hp("11.807953464528902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("11.748633879781421%")
  },
  View_3962_11039: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("11.807953464528902%"),
    minHeight: hp("11.807953464528902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3962_11040: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("11.807953464528902%"),
    minHeight: hp("11.807953464528902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_3962_11041: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("11.807953464528902%"),
    minHeight: hp("11.807953464528902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_3962_11042: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("11.807953464528902%"),
    minHeight: hp("11.807953464528902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3962_11043: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("11.807953464528902%"),
    minHeight: hp("11.807953464528902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3962_11044: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("11.807953464528902%"),
    minHeight: hp("11.807953464528902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_3962_11045: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("11.807953464528902%"),
    minHeight: hp("11.807953464528902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_3962_11046: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("11.807953464528902%"),
    minHeight: hp("11.807953464528902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3962_11047: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("11.807953464528902%"),
    minHeight: hp("11.807953464528902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3962_11048: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("11.807953464528902%"),
    minHeight: hp("11.807953464528902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3962_11049: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("11.807953464528902%"),
    minHeight: hp("11.807953464528902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3515_14540: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("62.295081967213115%"),
    minHeight: hp("62.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("14.207650273224044%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3515_14541: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("18.0327868852459%"),
    minHeight: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3515_14542: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 0.20000000298023224)"
  },
  View_I3515_14542_3107_56532: {
    flexGrow: 1,
    width: wp("74.4%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.185792349726775%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14542_3107_56532_3108_55510: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.27322404371584597%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14542_3107_56532_3108_55510_2730_41734: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3515_14542_3107_56532_3108_55510_2730_41734_2694_39831: {
    flexGrow: 1,
    width: wp("4.800029500325521%"),
    height: hp("2.459031506314304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999837239583325%"),
    top: hp("0.4098360655737707%")
  },
  View_I3515_14542_3107_56532_3108_55509: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I3515_14542_3107_56532_3108_55509: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3515_14544: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.83606557377049%"),
    backgroundColor: "rgba(255, 255, 255, 0.20000000298023224)"
  },
  View_I3515_14544_3107_56532: {
    flexGrow: 1,
    width: wp("74.4%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.1857923497267784%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14544_3107_56532_3108_55510: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158495%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14544_3107_56532_3108_55510_2730_41734: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3515_14544_3107_56532_3108_55510_2730_41734_3502_14077: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666647%"),
    top: hp("0.4098360655737707%")
  },
  View_I3515_14544_3107_56532_3108_55509: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I3515_14544_3107_56532_3108_55509: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3515_14545: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.311475409836067%"),
    backgroundColor: "rgba(255, 255, 255, 0.20000000298023224)"
  },
  View_I3515_14545_3107_56532: {
    flexGrow: 1,
    width: wp("74.4%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.185792349726775%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14545_3107_56532_3108_55510: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158424%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14545_3107_56532_3108_55510_2730_41734: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3515_14545_3107_56532_3108_55510_2730_41734_3658_30558: {
    flexGrow: 1,
    width: wp("4.266770935058594%"),
    height: hp("2.186013310333419%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666178385416671%"),
    top: hp("0.5463146772541023%")
  },
  View_I3515_14545_3107_56532_3108_55509: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I3515_14545_3107_56532_3108_55509: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3515_14546: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.786885245901644%"),
    backgroundColor: "rgba(255, 255, 255, 0.20000000298023224)"
  },
  View_I3515_14546_3107_56532: {
    flexGrow: 1,
    width: wp("74.4%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.185792349726775%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14546_3107_56532_3108_55510: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158495%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14546_3107_56532_3108_55510_2730_41734: {
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
  ImageBackground_I3515_14546_3107_56532_3108_55510_2730_41734_3419_13598: {
    flexGrow: 1,
    width: wp("4.910625203450521%"),
    height: hp("2.459242304817575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("0.4098360655737707%")
  },
  View_I3515_14546_3107_56532_3108_55509: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I3515_14546_3107_56532_3108_55509: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3515_14547: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("18.0327868852459%"),
    minHeight: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.26229508196721%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3515_14548: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 0.20000000298023224)"
  },
  View_I3515_14548_3107_56532: {
    flexGrow: 1,
    width: wp("74.4%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.185792349726775%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14548_3107_56532_3108_55510: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158495%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14548_3107_56532_3108_55510_2730_41734: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3515_14548_3107_56532_3108_55510_2730_41734_3038_59591: {
    flexGrow: 1,
    width: wp("6.402666727701822%"),
    height: hp("3.280054676076753%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.001334635416666785%"),
    top: hp("-0.0006670508879835779%")
  },
  View_I3515_14548_3107_56532_3108_55509: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I3515_14548_3107_56532_3108_55509: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3515_14549: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.836065573770483%"),
    backgroundColor: "rgba(255, 255, 255, 0.20000000298023224)"
  },
  View_I3515_14549_3107_56532: {
    flexGrow: 1,
    width: wp("74.4%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14549_3107_56532_3108_55510: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14549_3107_56532_3108_55510_2730_41734: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3515_14549_3107_56532_3108_55510_2730_41734_3502_14114: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.328415386012343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("0.5437798838797789%")
  },
  View_I3515_14549_3107_56532_3108_55509: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I3515_14549_3107_56532_3108_55509: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3515_14550: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("84.15300546448088%"),
    backgroundColor: "rgba(255, 255, 255, 0.20000000298023224)"
  },
  View_I3515_14550_3107_56532: {
    flexGrow: 1,
    width: wp("74.4%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14550_3107_56532_3108_55510: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158424%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14550_3107_56532_3108_55510_2730_41734: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3515_14550_3107_56532_3108_55510_2730_41734_3502_14145: {
    flexGrow: 1,
    width: wp("4.800072733561199%"),
    height: hp("2.45643678258677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("0.4125042691256908%")
  },
  View_I3515_14550_3107_56532_3108_55509: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I3515_14550_3107_56532_3108_55509: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3623_358: {
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
  View_I3623_358_2892_44027: {
    flexGrow: 1,
    width: wp("37.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3623_358_2892_44028: {
    flexGrow: 1,
    width: wp("17.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.333333333333336%"),
    top: hp("1.0928961748633883%")
  },
  Text_I3623_358_2892_44028: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3623_358_2892_44029: {
    flexGrow: 1,
    width: wp("37.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.666666666666664%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3515_14551: {
    width: wp("82.93333333333334%"),
    minWidth: wp("82.93333333333334%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%"),
    top: hp("98.63387978142076%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14551_3497_1681: {
    flexGrow: 1,
    width: wp("82.93333333333334%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.10000000149011612,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I3515_14551_3497_1682: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.1697265625%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14551_3497_1682_3497_1596: {
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
  View_I3515_14551_3497_1682_3497_1596_2730_41734: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I3515_14551_3497_1682_3497_1596_2730_41734_2993_53328: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3515_14551_3497_1682_3497_1596_2730_41734_2993_53329: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3515_14551_3497_1683: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.912988281249998%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14551_3497_1683_3497_1596: {
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
  View_I3515_14551_3497_1683_3497_1596_2730_41734: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3515_14551_3497_1683_3497_1596_2730_41734_3477_12778: {
    flexGrow: 1,
    width: wp("4.799996948242188%"),
    height: hp("1.6686218032420006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000043%"),
    top: hp("0.8196721311475557%")
  },
  View_I3515_14551_3497_1685: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.65625%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14551_3497_1685_3497_1596: {
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
  View_I3515_14551_3497_1685_3497_1596_2730_41734: {
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
  View_I3515_14551_3497_1685_3497_1596_2730_41734_3020_52674: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3515_14551_3497_1685_3497_1596_2730_41734_3020_52675: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3515_14551_3497_1684: {
    flexGrow: 1,
    width: wp("20.266666666666666%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.33333333333333%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14551_3497_1684_3497_1584: {
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
  View_I3515_14551_3497_1684_3497_1584_2730_41734: {
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
  ImageBackground_I3515_14551_3497_1684_3497_1584_2730_41734_3419_13598: {
    flexGrow: 1,
    width: wp("4.910625203450521%"),
    height: hp("2.459242304817575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.40983606557378494%")
  },
  View_I3515_14551_3497_1684_3497_1585: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333337%"),
    top: hp("0.1366120218579283%")
  },
  Text_I3515_14551_3497_1684_3497_1585: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
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
