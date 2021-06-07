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
      <View style={styles.View_3962_11410}>
        <View style={styles.View_3962_11411}>
          <View style={styles.View_3962_11412}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8324/2d51/d66d1c4f842af3834a9199d686a982b2"
              }}
              style={styles.ImageBackground_3962_11413}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8324/2d51/d66d1c4f842af3834a9199d686a982b2"
              }}
              style={styles.ImageBackground_3962_11414}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9df/7e97/14643f41ab0cdc4a82c7deaa33900e03"
              }}
              style={styles.ImageBackground_3962_11415}
            />
          </View>
          <View style={styles.View_3962_11416}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cfd/f5c0/e0647b8c69fe93fa4abaa700e208e9b2"
              }}
              style={styles.ImageBackground_3962_11417}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cfd/f5c0/e0647b8c69fe93fa4abaa700e208e9b2"
              }}
              style={styles.ImageBackground_3962_11418}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7f8/55d9/440d196f4bdc59482996a4edd9533082"
              }}
              style={styles.ImageBackground_3962_11419}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ff7/7558/9178664685ca9772dd932839a72fb1ca"
            }}
            style={styles.ImageBackground_3962_11420}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5c4/3826/81088fb63e96cfc2f7f69a2081648b4a"
            }}
            style={styles.ImageBackground_3962_11421}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/895d/d817/99168ebbcd85e835dc21b4dcb472e158"
            }}
            style={styles.ImageBackground_3962_11422}
          />
        </View>
        <View style={styles.View_3962_11423}>
          <View style={styles.View_3962_11424}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a025/a643/216305c44d37778eca082ec6c98430b2"
              }}
              style={styles.ImageBackground_3962_11425}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a73/3014/eef97de3ff6327375c9210807b104add"
              }}
              style={styles.ImageBackground_3962_11426}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e6e/b3a7/d03f8b580bf7beb57ffec46045c53b7f"
              }}
              style={styles.ImageBackground_3962_11427}
            />
          </View>
          <View style={styles.View_3962_11428}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2cb6/6038/4367d43440ac523bb8525ee43771d7cb"
              }}
              style={styles.ImageBackground_3962_11429}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d62/be55/0332e41ee5723945216a94645fe12a79"
              }}
              style={styles.ImageBackground_3962_11430}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1485/4964/6b04107abbe691017f926b20842f27dc"
              }}
              style={styles.ImageBackground_3962_11431}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a6c/5893/1dbbc39ded1e6f21e9a53829cf96d4c5"
            }}
            style={styles.ImageBackground_3962_11432}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea5a/49f4/838c85f37532d037b28c5a273e9d855c"
            }}
            style={styles.ImageBackground_3962_11433}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67f0/899a/9d3585d40f76d8916ad5c4c031c8b6b7"
            }}
            style={styles.ImageBackground_3962_11434}
          />
        </View>
      </View>
      <View style={styles.View_3515_15457}>
        <View style={styles.View_3515_15396}>
          <View style={styles.View_I3515_15396_3515_15372}>
            <View style={styles.View_I3515_15396_3515_15374}>
              <View style={styles.View_I3515_15396_3515_15375}>
                <View style={styles.View_I3515_15396_3515_15375_3108_55554}>
                  <Text style={styles.Text_I3515_15396_3515_15375_3108_55554}>
                    General
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3515_15396_3515_15376}>
                <View style={styles.View_I3515_15396_3515_15376_3108_55569}>
                  <Text style={styles.Text_I3515_15396_3515_15376_3108_55569}>
                    Currency conversion, primary currency, language and search
                    engine
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I3515_15396_3515_15377}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1d9/7ccc/529bc9a698f26fb4b422416997202767"
                }}
                style={styles.ImageBackground_I3515_15396_3515_15377_2730_41734}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_3515_15407}>
          <View style={styles.View_I3515_15407_3515_15372}>
            <View style={styles.View_I3515_15407_3515_15374}>
              <View style={styles.View_I3515_15407_3515_15375}>
                <View style={styles.View_I3515_15407_3515_15375_3108_55554}>
                  <Text style={styles.Text_I3515_15407_3515_15375_3108_55554}>
                    Security &amp; Privacy
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3515_15407_3515_15376}>
                <View style={styles.View_I3515_15407_3515_15376_3108_55569}>
                  <Text style={styles.Text_I3515_15407_3515_15376_3108_55569}>
                    Privacy settings, MetaMetrics, private key and wallet seed
                    phrase
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I3515_15407_3515_15377}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1d9/7ccc/529bc9a698f26fb4b422416997202767"
                }}
                style={styles.ImageBackground_I3515_15407_3515_15377_2730_41734}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_3515_15417}>
          <View style={styles.View_I3515_15417_3515_15372}>
            <View style={styles.View_I3515_15417_3515_15374}>
              <View style={styles.View_I3515_15417_3515_15375}>
                <View style={styles.View_I3515_15417_3515_15375_3108_55554}>
                  <Text style={styles.Text_I3515_15417_3515_15375_3108_55554}>
                    Advanced
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3515_15417_3515_15376}>
                <View style={styles.View_I3515_15417_3515_15376_3108_55569}>
                  <Text style={styles.Text_I3515_15417_3515_15376_3108_55569}>
                    Access developer features, reset account, setup testnets,
                    sync extension, state logs,...
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I3515_15417_3515_15377}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1d9/7ccc/529bc9a698f26fb4b422416997202767"
                }}
                style={styles.ImageBackground_I3515_15417_3515_15377_2730_41734}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_3515_15427}>
          <View style={styles.View_I3515_15427_3515_15372}>
            <View style={styles.View_I3515_15427_3515_15374}>
              <View style={styles.View_I3515_15427_3515_15375}>
                <View style={styles.View_I3515_15427_3515_15375_3108_55554}>
                  <Text style={styles.Text_I3515_15427_3515_15375_3108_55554}>
                    Contacts
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3515_15427_3515_15376}>
                <View style={styles.View_I3515_15427_3515_15376_3108_55569}>
                  <Text style={styles.Text_I3515_15427_3515_15376_3108_55569}>
                    Add, edit, remove, and manage your accounts
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I3515_15427_3515_15377}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1d9/7ccc/529bc9a698f26fb4b422416997202767"
                }}
                style={styles.ImageBackground_I3515_15427_3515_15377_2730_41734}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_3515_15437}>
          <View style={styles.View_I3515_15437_3515_15372}>
            <View style={styles.View_I3515_15437_3515_15374}>
              <View style={styles.View_I3515_15437_3515_15375}>
                <View style={styles.View_I3515_15437_3515_15375_3108_55554}>
                  <Text style={styles.Text_I3515_15437_3515_15375_3108_55554}>
                    Networks
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3515_15437_3515_15376}>
                <View style={styles.View_I3515_15437_3515_15376_3108_55569}>
                  <Text style={styles.Text_I3515_15437_3515_15376_3108_55569}>
                    Add and edit custom RPC networks
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I3515_15437_3515_15377}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1d9/7ccc/529bc9a698f26fb4b422416997202767"
                }}
                style={styles.ImageBackground_I3515_15437_3515_15377_2730_41734}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_3515_15447}>
          <View style={styles.View_I3515_15447_3515_15372}>
            <View style={styles.View_I3515_15447_3515_15374}>
              <View style={styles.View_I3515_15447_3515_15375}>
                <View style={styles.View_I3515_15447_3515_15375_3108_55554}>
                  <Text style={styles.Text_I3515_15447_3515_15375_3108_55554}>
                    Experimental
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3515_15447_3515_15376}>
                <View style={styles.View_I3515_15447_3515_15376_3108_55569}>
                  <Text style={styles.Text_I3515_15447_3515_15376_3108_55569}>
                    About Cryptooly
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I3515_15447_3515_15377}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1d9/7ccc/529bc9a698f26fb4b422416997202767"
                }}
                style={styles.ImageBackground_I3515_15447_3515_15377_2730_41734}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3515_14486}>
        <View style={styles.View_I3515_14486_2892_44027}>
          <View style={styles.View_I3515_14486_2892_44027_2892_43256}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd24/acb1/124c41b4a2f0cbe8ed07b2f82e3f5d5a"
              }}
              style={
                styles.ImageBackground_I3515_14486_2892_44027_2892_43256_2730_41734
              }
            />
          </View>
        </View>
        <View style={styles.View_I3515_14486_2892_44028}>
          <Text style={styles.Text_I3515_14486_2892_44028}>Setting</Text>
        </View>
        <View style={styles.View_I3515_14486_2892_44029} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_3962_11410: {
    width: wp("128.26666666666665%"),
    minWidth: wp("128.26666666666665%"),
    height: hp("44.79313417862022%"),
    minHeight: hp("44.79313417862022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-17.866666666666667%"),
    top: hp("37.56830601092896%")
  },
  View_3962_11411: {
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
  View_3962_11412: {
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
  ImageBackground_3962_11413: {
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
  ImageBackground_3962_11414: {
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
  ImageBackground_3962_11415: {
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
  View_3962_11416: {
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
  ImageBackground_3962_11417: {
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
  ImageBackground_3962_11418: {
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
  ImageBackground_3962_11419: {
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
  ImageBackground_3962_11420: {
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
  ImageBackground_3962_11421: {
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
  ImageBackground_3962_11422: {
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
  View_3962_11423: {
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
  View_3962_11424: {
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
  ImageBackground_3962_11425: {
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
  ImageBackground_3962_11426: {
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
  ImageBackground_3962_11427: {
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
  View_3962_11428: {
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
  ImageBackground_3962_11429: {
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
  ImageBackground_3962_11430: {
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
  ImageBackground_3962_11431: {
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
  ImageBackground_3962_11432: {
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
  ImageBackground_3962_11433: {
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
  ImageBackground_3962_11434: {
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
  View_3515_15457: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("71.31147540983606%"),
    minHeight: hp("71.31147540983606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("14.207650273224044%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3515_15396: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 0.20000000298023224)"
  },
  View_I3515_15396_3515_15372: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_15396_3515_15374: {
    width: wp("70.13333333333334%"),
    minWidth: wp("70.13333333333334%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_15396_3515_15375: {
    width: wp("70.13333333333334%"),
    minWidth: wp("70.13333333333334%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_15396_3515_15375_3108_55554: {
    flexGrow: 1,
    width: wp("15.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_15396_3515_15375_3108_55554: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_15396_3515_15376: {
    width: wp("70.13333333333334%"),
    minWidth: wp("70.13333333333334%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_15396_3515_15376_3108_55569: {
    flexGrow: 1,
    width: wp("70.13333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_15396_3515_15376_3108_55569: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_15396_3515_15377: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.26666666666667%"),
    top: hp("2.5956284153005456%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3515_15396_3515_15377_2730_41734: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3515_15407: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.387978142076502%"),
    backgroundColor: "rgba(255, 255, 255, 0.20000000298023224)"
  },
  View_I3515_15407_3515_15372: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_15407_3515_15374: {
    width: wp("70.13333333333334%"),
    minWidth: wp("70.13333333333334%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_15407_3515_15375: {
    width: wp("70.13333333333334%"),
    minWidth: wp("70.13333333333334%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_15407_3515_15375_3108_55554: {
    flexGrow: 1,
    width: wp("36.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_15407_3515_15375_3108_55554: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_15407_3515_15376: {
    width: wp("70.13333333333334%"),
    minWidth: wp("70.13333333333334%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_15407_3515_15376_3108_55569: {
    flexGrow: 1,
    width: wp("70.13333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_15407_3515_15376_3108_55569: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_15407_3515_15377: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.26666666666667%"),
    top: hp("2.595628415300549%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3515_15407_3515_15377_2730_41734: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3515_15417: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.775956284153008%"),
    backgroundColor: "rgba(255, 255, 255, 0.20000000298023224)"
  },
  View_I3515_15417_3515_15372: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.6393442622950758%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_15417_3515_15374: {
    width: wp("70.13333333333334%"),
    minWidth: wp("70.13333333333334%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_15417_3515_15375: {
    width: wp("70.13333333333334%"),
    minWidth: wp("70.13333333333334%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_15417_3515_15375_3108_55554: {
    flexGrow: 1,
    width: wp("20.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_15417_3515_15375_3108_55554: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_15417_3515_15376: {
    width: wp("70.13333333333334%"),
    minWidth: wp("70.13333333333334%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060153%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_15417_3515_15376_3108_55569: {
    flexGrow: 1,
    width: wp("70.13333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_15417_3515_15376_3108_55569: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_15417_3515_15377: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.26666666666667%"),
    top: hp("2.5956284153005527%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3515_15417_3515_15377_2730_41734: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3515_15427: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40.16393442622952%"),
    backgroundColor: "rgba(255, 255, 255, 0.20000000298023224)"
  },
  View_I3515_15427_3515_15372: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.6393442622950758%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_15427_3515_15374: {
    width: wp("70.13333333333334%"),
    minWidth: wp("70.13333333333334%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_15427_3515_15375: {
    width: wp("70.13333333333334%"),
    minWidth: wp("70.13333333333334%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_15427_3515_15375_3108_55554: {
    flexGrow: 1,
    width: wp("18.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_15427_3515_15375_3108_55554: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_15427_3515_15376: {
    width: wp("70.13333333333334%"),
    minWidth: wp("70.13333333333334%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_15427_3515_15376_3108_55569: {
    flexGrow: 1,
    width: wp("70.13333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_15427_3515_15376_3108_55569: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_15427_3515_15377: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.26666666666667%"),
    top: hp("1.3661202185792334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3515_15427_3515_15377_2730_41734: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3515_15437: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51.092896174863384%"),
    backgroundColor: "rgba(255, 255, 255, 0.20000000298023224)"
  },
  View_I3515_15437_3515_15372: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_15437_3515_15374: {
    width: wp("70.13333333333334%"),
    minWidth: wp("70.13333333333334%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_15437_3515_15375: {
    width: wp("70.13333333333334%"),
    minWidth: wp("70.13333333333334%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_15437_3515_15375_3108_55554: {
    flexGrow: 1,
    width: wp("19.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_15437_3515_15375_3108_55554: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_15437_3515_15376: {
    width: wp("70.13333333333334%"),
    minWidth: wp("70.13333333333334%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_15437_3515_15376_3108_55569: {
    flexGrow: 1,
    width: wp("70.13333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_15437_3515_15376_3108_55569: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_15437_3515_15377: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.26666666666667%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3515_15437_3515_15377_2730_41734: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3515_15447: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("62.021857923497265%"),
    backgroundColor: "rgba(255, 255, 255, 0.20000000298023224)"
  },
  View_I3515_15447_3515_15372: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_15447_3515_15374: {
    width: wp("70.13333333333334%"),
    minWidth: wp("70.13333333333334%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_15447_3515_15375: {
    width: wp("70.13333333333334%"),
    minWidth: wp("70.13333333333334%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_15447_3515_15375_3108_55554: {
    flexGrow: 1,
    width: wp("26.400000000000002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_15447_3515_15375_3108_55554: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_15447_3515_15376: {
    width: wp("70.13333333333334%"),
    minWidth: wp("70.13333333333334%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_15447_3515_15376_3108_55569: {
    flexGrow: 1,
    width: wp("70.13333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_15447_3515_15376_3108_55569: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_15447_3515_15377: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.26666666666667%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3515_15447_3515_15377_2730_41734: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3515_14486: {
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
  View_I3515_14486_2892_44027: {
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
  View_I3515_14486_2892_44027_2892_43256: {
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
  ImageBackground_I3515_14486_2892_44027_2892_43256_2730_41734: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3515_14486_2892_44028: {
    flexGrow: 1,
    width: wp("17.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.333333333333336%"),
    top: hp("1.0928961748633883%")
  },
  Text_I3515_14486_2892_44028: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_14486_2892_44029: {
    flexGrow: 1,
    width: wp("37.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.666666666666664%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
