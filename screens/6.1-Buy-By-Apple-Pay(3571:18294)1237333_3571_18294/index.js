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
      <View style={styles.View_3955_696}>
        <View style={styles.View_3955_628}>
          <View style={styles.View_I3955_628_704_11279} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da78/9e1d/32dc693200ea9afa09c0eed02d6e60d1"
            }}
            style={styles.ImageBackground_I3955_628_704_11280}
          />
          <View style={styles.View_I3955_628_704_11281} />
          <View style={styles.View_I3955_628_3658_29013}>
            <View style={styles.View_I3955_628_3658_27688}>
              <Text style={styles.Text_I3955_628_3658_27688}>
                How do you want to make your purchase?
              </Text>
            </View>
          </View>
          <View style={styles.View_I3955_628_3658_24597} />
        </View>
        <View style={styles.View_3955_2912}>
          <View style={styles.View_3955_2913}>
            <View style={styles.View_3955_2914}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8324/2d51/d66d1c4f842af3834a9199d686a982b2"
                }}
                style={styles.ImageBackground_3955_2915}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8324/2d51/d66d1c4f842af3834a9199d686a982b2"
                }}
                style={styles.ImageBackground_3955_2916}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e180/14fa/420b34ff5edb3d6879afa37569de707b"
                }}
                style={styles.ImageBackground_3955_2917}
              />
            </View>
            <View style={styles.View_3955_2918}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cfd/f5c0/e0647b8c69fe93fa4abaa700e208e9b2"
                }}
                style={styles.ImageBackground_3955_2919}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cfd/f5c0/e0647b8c69fe93fa4abaa700e208e9b2"
                }}
                style={styles.ImageBackground_3955_2920}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7f8/55d9/440d196f4bdc59482996a4edd9533082"
                }}
                style={styles.ImageBackground_3955_2921}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ff7/7558/9178664685ca9772dd932839a72fb1ca"
              }}
              style={styles.ImageBackground_3955_2922}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5c4/3826/81088fb63e96cfc2f7f69a2081648b4a"
              }}
              style={styles.ImageBackground_3955_2923}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/895d/d817/99168ebbcd85e835dc21b4dcb472e158"
              }}
              style={styles.ImageBackground_3955_2924}
            />
          </View>
          <View style={styles.View_3955_2925}>
            <View style={styles.View_3955_2926}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a025/a643/216305c44d37778eca082ec6c98430b2"
                }}
                style={styles.ImageBackground_3955_2927}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a73/3014/eef97de3ff6327375c9210807b104add"
                }}
                style={styles.ImageBackground_3955_2928}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e6e/b3a7/d03f8b580bf7beb57ffec46045c53b7f"
                }}
                style={styles.ImageBackground_3955_2929}
              />
            </View>
            <View style={styles.View_3955_2930}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2cb6/6038/4367d43440ac523bb8525ee43771d7cb"
                }}
                style={styles.ImageBackground_3955_2931}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d62/be55/0332e41ee5723945216a94645fe12a79"
                }}
                style={styles.ImageBackground_3955_2932}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1485/4964/6b04107abbe691017f926b20842f27dc"
                }}
                style={styles.ImageBackground_3955_2933}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a6c/5893/1dbbc39ded1e6f21e9a53829cf96d4c5"
              }}
              style={styles.ImageBackground_3955_2934}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea5a/49f4/838c85f37532d037b28c5a273e9d855c"
              }}
              style={styles.ImageBackground_3955_2935}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67f0/899a/9d3585d40f76d8916ad5c4c031c8b6b7"
              }}
              style={styles.ImageBackground_3955_2936}
            />
          </View>
        </View>
        <View style={styles.View_3955_654}>
          <View style={styles.View_I3955_654_3571_18392} />
          <View style={styles.View_I3955_654_3571_18393}>
            <View style={styles.View_I3955_654_3571_18394}>
              <Text style={styles.Text_I3955_654_3571_18394}>
                1 - 2 minutes Max $450 weekly Requires debit card
              </Text>
            </View>
            <View style={styles.View_I3955_654_3571_18395}>
              <Text style={styles.Text_I3955_654_3571_18395}>
                Some states excluded
              </Text>
            </View>
            <View style={styles.View_I3955_654_3571_18396}>
              <View style={styles.View_I3955_654_3571_18397}>
                <Text style={styles.Text_I3955_654_3571_18397}>
                  🇺🇸 U.S. Only
                </Text>
              </View>
              <View style={styles.View_I3955_654_3571_18398}>
                <View style={styles.View_I3955_654_3571_18399}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a15/a162/6863f06c8c2e1cf234b6f045f0215a38"
                    }}
                    style={
                      styles.ImageBackground_I3955_654_3571_18399_2540_15594
                    }
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I3955_654_3571_18400}>
            <View style={styles.View_I3955_654_3571_18401}>
              <Text style={styles.Text_I3955_654_3571_18401}>
                Apple Pay via
              </Text>
            </View>
            <View style={styles.View_I3955_654_3571_18402}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f683/78a7/a6c336768563189eb95a7e64fc391dec"
                }}
                style={styles.ImageBackground_I3955_654_3571_18402_3571_18345}
              />
            </View>
          </View>
          <View style={styles.View_I3955_654_3571_18403}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e158/d122/2230b35b19282a0edcf457d8f68feabd"
              }}
              style={styles.ImageBackground_I3955_654_3571_18403_3571_18253}
            />
          </View>
        </View>
        <View style={styles.View_3955_655}>
          <View style={styles.View_I3955_655_3571_18405} />
          <View style={styles.View_I3955_655_3571_18406}>
            <Text style={styles.Text_I3955_655_3571_18406}>
              Option and fees vary based on location
            </Text>
          </View>
          <View style={styles.View_I3955_655_3571_18407}>
            <View style={styles.View_I3955_655_3571_18408}>
              <Text style={styles.Text_I3955_655_3571_18408}>59 Countries</Text>
            </View>
            <View style={styles.View_I3955_655_3571_18409}>
              <View style={styles.View_I3955_655_3571_18410}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6812/9508/888c39d1e487cdb3af96bd525d5c8fc2"
                  }}
                  style={styles.ImageBackground_I3955_655_3571_18410_2540_15594}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I3955_655_3571_18411}>
            <View style={styles.View_I3955_655_3571_18412}>
              <Text style={styles.Text_I3955_655_3571_18412}>
                Bank transfer or debit card
              </Text>
            </View>
            <View style={styles.View_I3955_655_3571_18413}>
              <Text style={styles.Text_I3955_655_3571_18413}>
                Requires registration
              </Text>
            </View>
          </View>
          <View style={styles.View_I3955_655_3571_18414}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f04d/af1e/3c48f5cc0143eb9aae81183ee2352d3c"
              }}
              style={styles.ImageBackground_I3955_655_3571_18414_3571_18258}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_3658_30180}>
        <View style={styles.View_3571_18736}>
          <View style={styles.View_I3571_18736_3132_60124}>
            <View style={styles.View_I3571_18736_3132_60125}>
              <View style={styles.View_I3571_18736_3132_60123} />
              <View style={styles.View_I3571_18736_3132_60126}>
                <Text style={styles.Text_I3571_18736_3132_60126}>
                  Wyre Support
                </Text>
              </View>
            </View>
            <View style={styles.View_I3571_18736_3132_60128} />
          </View>
        </View>
        <View style={styles.View_3571_18744}>
          <View style={styles.View_I3571_18744_1897_13585}>
            <Text style={styles.Text_I3571_18744_1897_13585}>Close</Text>
          </View>
        </View>
        <View style={styles.View_3571_18751}>
          <View style={styles.View_3571_18743}>
            <Text style={styles.Text_3571_18743}>
              Paying with Apple pay, powered by Wyre is support in the United
              States 🇺🇸 except for CT, HI, NC, NH, NY, VA and VT.{" "}
            </Text>
          </View>
          <View style={styles.View_3571_18747}>
            <View style={styles.View_I3571_18747_31_19}>
              <Text style={styles.Text_I3571_18747_31_19}>
                Wyre terms of service apply
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
  View_3955_696: {
    width: wp("128.26666666666665%"),
    minWidth: wp("128.26666666666665%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-17.866666666666667%"),
    top: hp("0%")
  },
  View_3955_628: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_628_704_11279: {
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
  ImageBackground_I3955_628_704_11280: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.0109289617486334%")
  },
  View_I3955_628_704_11281: {
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
  View_I3955_628_3658_29013: {
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
  View_I3955_628_3658_27688: {
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0%")
  },
  Text_I3955_628_3658_27688: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_628_3658_24597: {
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
  View_3955_2912: {
    width: wp("128.26666666666665%"),
    minWidth: wp("128.26666666666665%"),
    height: hp("44.79313417862022%"),
    minHeight: hp("44.79313417862022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37.56830601092896%")
  },
  View_3955_2913: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("11.807953464528902%"),
    minHeight: hp("11.807953464528902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.53333333333333%"),
    top: hp("0%")
  },
  View_3955_2914: {
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
  ImageBackground_3955_2915: {
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
  ImageBackground_3955_2916: {
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
  ImageBackground_3955_2917: {
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
  View_3955_2918: {
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
  ImageBackground_3955_2919: {
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
  ImageBackground_3955_2920: {
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
  ImageBackground_3955_2921: {
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
  ImageBackground_3955_2922: {
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
  ImageBackground_3955_2923: {
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
  ImageBackground_3955_2924: {
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
  View_3955_2925: {
    width: wp("44.2625244140625%"),
    minWidth: wp("44.2625244140625%"),
    height: hp("22.798598659494534%"),
    minHeight: hp("22.798598659494534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.994535519125684%")
  },
  View_3955_2926: {
    width: wp("44.2625244140625%"),
    minWidth: wp("44.2625244140625%"),
    height: hp("22.798598659494534%"),
    minHeight: hp("22.798598659494534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3955_2927: {
    width: wp("44.2625244140625%"),
    minWidth: wp("44.2625244140625%"),
    height: hp("22.798598659494534%"),
    minHeight: hp("22.798598659494534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_3955_2928: {
    width: wp("44.2625244140625%"),
    minWidth: wp("44.2625244140625%"),
    height: hp("22.798598659494534%"),
    minHeight: hp("22.798598659494534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_3955_2929: {
    width: wp("44.2625244140625%"),
    minWidth: wp("44.2625244140625%"),
    height: hp("22.798598659494534%"),
    minHeight: hp("22.798598659494534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3955_2930: {
    width: wp("44.2625244140625%"),
    minWidth: wp("44.2625244140625%"),
    height: hp("22.798598659494534%"),
    minHeight: hp("22.798598659494534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3955_2931: {
    width: wp("44.2625244140625%"),
    minWidth: wp("44.2625244140625%"),
    height: hp("22.798598659494534%"),
    minHeight: hp("22.798598659494534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_3955_2932: {
    width: wp("44.2625244140625%"),
    minWidth: wp("44.2625244140625%"),
    height: hp("22.798598659494534%"),
    minHeight: hp("22.798598659494534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_3955_2933: {
    width: wp("44.2625244140625%"),
    minWidth: wp("44.2625244140625%"),
    height: hp("22.798598659494534%"),
    minHeight: hp("22.798598659494534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3955_2934: {
    width: wp("44.2625244140625%"),
    minWidth: wp("44.2625244140625%"),
    height: hp("22.798598659494534%"),
    minHeight: hp("22.798598659494534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3955_2935: {
    width: wp("44.2625244140625%"),
    minWidth: wp("44.2625244140625%"),
    height: hp("22.798598659494534%"),
    minHeight: hp("22.798598659494534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3955_2936: {
    width: wp("44.2625244140625%"),
    minWidth: wp("44.2625244140625%"),
    height: hp("22.798598659494534%"),
    minHeight: hp("22.798598659494534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3955_654: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("22.540983606557376%"),
    minHeight: hp("22.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.266666666666666%"),
    top: hp("22.404371584699454%"),
    backgroundColor: "rgba(255, 255, 255, 0.3199999928474426)"
  },
  View_I3955_654_3571_18392: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("22.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_I3955_654_3571_18393: {
    flexGrow: 1,
    width: wp("75.2%"),
    height: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("9.426229508196723%")
  },
  View_I3955_654_3571_18394: {
    width: wp("34.4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3955_654_3571_18394: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_654_3571_18395: {
    width: wp("22.133333333333333%"),
    top: hp("2.732240437158463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.266666666666666%")
  },
  Text_I3955_654_3571_18395: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_654_3571_18396: {
    width: wp("28.53333333333333%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.66666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_654_3571_18397: {
    width: wp("21.066666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3955_654_3571_18397: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_654_3571_18398: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.133333333333326%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_654_3571_18399: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.066666666666677%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3955_654_3571_18399_2540_15594: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.2732240437158424%")
  },
  View_I3955_654_3571_18400: {
    flexGrow: 1,
    width: wp("44.266666666666666%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666665%"),
    top: hp("3.415300546448087%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_654_3571_18401: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3955_654_3571_18401: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_654_3571_18402: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.8%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3955_654_3571_18402_3571_18345: {
    flexGrow: 1,
    width: wp("11.466666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I3955_654_3571_18403: {
    flexGrow: 1,
    width: wp("15.612139892578124%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%"),
    top: hp("3.415300546448087%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3955_654_3571_18403_3571_18253: {
    flexGrow: 1,
    width: wp("15.27833964029948%"),
    height: hp("3.619163283884851%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3955_655: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("26.775956284153008%"),
    minHeight: hp("26.775956284153008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.266666666666666%"),
    top: hp("47.13114754098361%"),
    backgroundColor: "rgba(255, 255, 255, 0.3199999928474426)"
  },
  View_I3955_655_3571_18405: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("26.775956284153008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_I3955_655_3571_18406: {
    flexGrow: 1,
    width: wp("36.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("16.939890710382507%")
  },
  Text_I3955_655_3571_18406: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_655_3571_18407: {
    flexGrow: 1,
    width: wp("30.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.199999999999996%"),
    top: hp("20.218579234972673%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_655_3571_18408: {
    width: wp("22.933333333333334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3955_655_3571_18408: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_655_3571_18409: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_655_3571_18410: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.066666666666677%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3955_655_3571_18410_2540_15594: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.2732240437158424%")
  },
  View_I3955_655_3571_18411: {
    flexGrow: 1,
    width: wp("38.4%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.7333333333333325%"),
    top: hp("3.2786885245901516%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_655_3571_18412: {
    width: wp("37.86666666666667%"),
    minWidth: wp("37.86666666666667%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3955_655_3571_18412: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_655_3571_18413: {
    width: wp("38.4%"),
    minWidth: wp("38.4%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.196721311475422%")
  },
  Text_I3955_655_3571_18413: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_655_3571_18414: {
    flexGrow: 1,
    width: wp("20.622222900390625%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.26666666666666%"),
    top: hp("3.2786885245901516%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3955_655_3571_18414_3571_18258: {
    flexGrow: 1,
    width: wp("20.622222900390625%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_3658_30180: {
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
  View_3571_18736: {
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
  View_I3571_18736_3132_60124: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("45.35532883607625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("65.57363708162568%"),
    backgroundColor: "rgba(248, 248, 249, 1)"
  },
  View_I3571_18736_3132_60125: {
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
  View_I3571_18736_3132_60123: {
    width: wp("12.8%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.6%"),
    top: hp("1.092896174863398%"),
    backgroundColor: "rgba(209, 212, 219, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I3571_18736_3132_60126: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("5.191256830601105%")
  },
  Text_I3571_18736_3132_60126: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3571_18736_3132_60128: {
    width: wp("0.00026666667933265365%"),
    minWidth: wp("0.00026666667933265365%"),
    height: hp("0.00013661202834664636%"),
    minHeight: hp("0.00013661202834664636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.99986979166667%"),
    top: hp("45.355191256830594%")
  },
  View_3571_18744: {
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
  View_I3571_18744_1897_13585: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.6%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3571_18744_1897_13585: {
    color: "rgba(245, 250, 128, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3571_18751: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("76.775956284153%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3571_18743: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3571_18743: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3571_18747: {
    width: wp("51.46666666666667%"),
    minWidth: wp("51.46666666666667%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.02185792349728%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3571_18747_31_19: {
    flexGrow: 1,
    width: wp("51.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316848%")
  },
  Text_I3571_18747_31_19: {
    color: "rgba(1, 110, 137, 1)",
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
