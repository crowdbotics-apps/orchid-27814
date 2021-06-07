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
      <View style={styles.View_3567_18204}>
        <View style={styles.View_3567_18039}>
          <View style={styles.View_I3567_18039_3658_30148} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da78/9e1d/32dc693200ea9afa09c0eed02d6e60d1"
            }}
            style={styles.ImageBackground_I3567_18039_3658_30149}
          />
          <View style={styles.View_I3567_18039_3658_30150} />
          <View style={styles.View_I3567_18039_3658_30154} />
        </View>
        <View style={styles.View_3567_18040}>
          <View style={styles.View_I3567_18040_3023_54431}>
            <View style={styles.View_I3567_18040_3023_54431_2747_44124}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bef4/bd5b/5ff0cda1b9a3ce3997ecdf341918508e"
                }}
                style={
                  styles.ImageBackground_I3567_18040_3023_54431_2747_44124_3933_678
                }
              />
            </View>
          </View>
          <View style={styles.View_I3567_18040_3023_54432}>
            <View style={styles.View_I3567_18040_3023_54433}>
              <Text style={styles.Text_I3567_18040_3023_54433}>Send Link</Text>
            </View>
            <View style={styles.View_I3567_18040_3023_54434}>
              <Text style={styles.Text_I3567_18040_3023_54434}>
                Your request link is already to send! Sendthis link to a friend,
                and it will ask them to send 0.0001 ETH
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3567_18041}>
          <Text style={styles.Text_3567_18041}>
            https://Cryptooly.app.link/send/0xBBB6A12945aC14C84185a17C6BD2eAe96e/value=21jq
          </Text>
        </View>
        <View style={styles.View_3567_18042}>
          <View style={styles.View_3567_18043}>
            <View style={styles.View_3567_18044}>
              <View style={styles.View_I3567_18044_1897_13497}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b56/4a5c/8f1c5cddc9ad4fbe2c0b77d24b6fcb55"
                  }}
                  style={styles.ImageBackground_I3567_18044_1897_13498}
                />
                <View style={styles.View_I3567_18044_1897_13499}>
                  <Text style={styles.Text_I3567_18044_1897_13499}>Copy</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_3567_18045}>
              <View style={styles.View_I3567_18045_1897_13497}>
                <View style={styles.View_I3567_18045_1897_13498}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb14/ee51/dce0a381972437f139993f422e41cb7f"
                    }}
                    style={
                      styles.ImageBackground_I3567_18045_1897_13498_3038_59434
                    }
                  />
                </View>
                <View style={styles.View_I3567_18045_1897_13499}>
                  <Text style={styles.Text_I3567_18045_1897_13499}>
                    QR code
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_3567_18046}>
            <View style={styles.View_I3567_18046_1897_13587}>
              <View style={styles.View_I3567_18046_1897_13588}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96f1/7650/0c25df18a3cbe83c20b6b6be58c0df2a"
                  }}
                  style={styles.ImageBackground_I3567_18046_1897_13588_3559_411}
                />
              </View>
              <View style={styles.View_I3567_18046_1897_13589}>
                <Text style={styles.Text_I3567_18046_1897_13589}>
                  Send Link
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3567_18206}>
        <View style={styles.View_3567_18205} />
        <View style={styles.View_3567_18094}>
          <View style={styles.View_I3567_18094_3510_15818}>
            <View style={styles.View_I3567_18094_3510_15819}>
              <Text style={styles.Text_I3567_18094_3510_15819}>
                https://dyc.app.link/send/0xBBB6A129
                45aC14C84185a17C6BD2eAe96e/v alue=21jq
              </Text>
            </View>
            <View style={styles.View_I3567_18094_3510_15926}>
              <View style={styles.View_I3567_18094_3510_15930}>
                <View style={styles.View_I3567_18094_3510_15931} />
                <View style={styles.View_I3567_18094_3510_16510} />
                <View style={styles.View_I3567_18094_3510_16516}>
                  <Text style={styles.Text_I3567_18094_3510_16516}>T</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I3567_18094_3510_15933}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d55d/29db/71479bc27f504817fd3cd2775de5f1d4"
                }}
                style={styles.ImageBackground_I3567_18094_3510_15934}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f7d/fd2a/7f93ca60296d4bfc02c98a3a507098f6"
                }}
                style={styles.ImageBackground_I3567_18094_3510_15935}
              />
            </View>
          </View>
          <View style={styles.View_I3567_18094_3510_15823} />
          <View style={styles.View_I3567_18094_3510_15824}>
            <View style={styles.View_I3567_18094_3510_15938}>
              <View style={styles.View_I3567_18094_3510_15939}>
                <View style={styles.View_I3567_18094_3510_15946}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5566/7c58/f50fbc1ccb74cbfb54fcdef6f68b13fb"
                    }}
                    style={styles.ImageBackground_I3567_18094_3510_15947}
                  />
                </View>
                <View style={styles.View_I3567_18094_3510_15948}>
                  <View style={styles.View_I3567_18094_3510_15949} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3257/3a5f/14a7c615e9123e73e73d625718091b54"
                    }}
                    style={styles.ImageBackground_I3567_18094_3510_15950}
                  />
                </View>
              </View>
              <View style={styles.View_I3567_18094_3510_15942}>
                <Text style={styles.Text_I3567_18094_3510_15942}>
                  Apple Mac mini
                </Text>
              </View>
            </View>
            <View style={styles.View_I3567_18094_3510_15951}>
              <View style={styles.View_I3567_18094_3510_15952}>
                <View style={styles.View_I3567_18094_3510_15959}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/561b/91a1/672ad7fe28d808a5ab6234d877378537"
                    }}
                    style={styles.ImageBackground_I3567_18094_3510_15960}
                  />
                </View>
                <View style={styles.View_I3567_18094_3510_15961}>
                  <View style={styles.View_I3567_18094_3510_15962} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffe3/c51e/dd41f437f4c83ec41076caedc81ff102"
                    }}
                    style={styles.ImageBackground_I3567_18094_3510_15963}
                  />
                </View>
              </View>
              <View style={styles.View_I3567_18094_3510_15955}>
                <Text style={styles.Text_I3567_18094_3510_15955}>
                  First Last
                </Text>
              </View>
            </View>
            <View style={styles.View_I3567_18094_3510_15964}>
              <View style={styles.View_I3567_18094_3510_15965}>
                <View style={styles.View_I3567_18094_3510_15976}>
                  <View style={styles.View_I3567_18094_3510_15981}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7dc7/b2b9/3164c6d75fb4b857db6eeb4aa7800a64"
                      }}
                      style={styles.ImageBackground_I3567_18094_3510_15982}
                    />
                  </View>
                  <View style={styles.View_I3567_18094_3510_15983}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86a3/ea3d/ec008a34283fe4c68b390470358cfdaf"
                      }}
                      style={styles.ImageBackground_I3567_18094_3510_15984}
                    />
                  </View>
                </View>
                <View style={styles.View_I3567_18094_3510_15985}>
                  <View style={styles.View_I3567_18094_3510_15986} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffe3/c51e/dd41f437f4c83ec41076caedc81ff102"
                    }}
                    style={styles.ImageBackground_I3567_18094_3510_15987}
                  />
                </View>
              </View>
              <View style={styles.View_I3567_18094_3510_15968}>
                <Text style={styles.Text_I3567_18094_3510_15968}>
                  Group Name
                </Text>
              </View>
              <View style={styles.View_I3567_18094_3510_15969}>
                <Text style={styles.Text_I3567_18094_3510_15969}>2 People</Text>
              </View>
            </View>
            <View style={styles.View_I3567_18094_3510_15988}>
              <View style={styles.View_I3567_18094_3510_15989}>
                <View style={styles.View_I3567_18094_3510_15996}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/561b/91a1/672ad7fe28d808a5ab6234d877378537"
                    }}
                    style={styles.ImageBackground_I3567_18094_3510_15997}
                  />
                </View>
                <View style={styles.View_I3567_18094_3510_15998}>
                  <View style={styles.View_I3567_18094_3510_15999} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffe3/c51e/dd41f437f4c83ec41076caedc81ff102"
                    }}
                    style={styles.ImageBackground_I3567_18094_3510_16000}
                  />
                </View>
              </View>
              <View style={styles.View_I3567_18094_3510_15992}>
                <Text style={styles.Text_I3567_18094_3510_15992}>
                  First Last
                </Text>
              </View>
            </View>
            <View style={styles.View_I3567_18094_3510_16001}>
              <View style={styles.View_I3567_18094_3510_16002}>
                <View style={styles.View_I3567_18094_3510_16009}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/561b/91a1/672ad7fe28d808a5ab6234d877378537"
                    }}
                    style={styles.ImageBackground_I3567_18094_3510_16010}
                  />
                </View>
                <View style={styles.View_I3567_18094_3510_16011}>
                  <View style={styles.View_I3567_18094_3510_16012} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffe3/c51e/dd41f437f4c83ec41076caedc81ff102"
                    }}
                    style={styles.ImageBackground_I3567_18094_3510_16013}
                  />
                </View>
              </View>
              <View style={styles.View_I3567_18094_3510_16005}>
                <Text style={styles.Text_I3567_18094_3510_16005}>
                  First Last
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I3567_18094_3510_15830} />
          <View style={styles.View_I3567_18094_3510_15831}>
            <View style={styles.View_I3567_18094_3510_16014}>
              <View style={styles.View_I3567_18094_3510_16015}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcd2/b67a/0c3e80768062001233baed1a538b3193"
                  }}
                  style={styles.ImageBackground_I3567_18094_3510_16016}
                />
              </View>
              <View style={styles.View_I3567_18094_3510_16022}>
                <Text style={styles.Text_I3567_18094_3510_16022}>
                  Cryptoolydrop
                </Text>
              </View>
            </View>
            <View style={styles.View_I3567_18094_3510_16023}>
              <View style={styles.View_I3567_18094_3510_16028}>
                <View style={styles.View_I3567_18094_3510_16029} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acd3/b76c/44c993fffa700aae6b9b0e22465157e7"
                  }}
                  style={styles.ImageBackground_I3567_18094_3510_16030}
                />
              </View>
              <View style={styles.View_I3567_18094_3510_16025}>
                <Text style={styles.Text_I3567_18094_3510_16025}>Messages</Text>
              </View>
            </View>
            <View style={styles.View_I3567_18094_3510_16031}>
              <View style={styles.View_I3567_18094_3510_16036}>
                <View style={styles.View_I3567_18094_3510_16037} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/086d/ba07/7dbcc2cdafef5ee59f27a2544d73d84b"
                  }}
                  style={styles.ImageBackground_I3567_18094_3510_16038}
                />
              </View>
              <View style={styles.View_I3567_18094_3510_16033}>
                <Text style={styles.Text_I3567_18094_3510_16033}>Books</Text>
              </View>
            </View>
            <View style={styles.View_I3567_18094_3510_16039}>
              <View style={styles.View_I3567_18094_3510_16044}>
                <View style={styles.View_I3567_18094_3510_16045} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/440f/8c9e/e1d02b63e3e83f2f21234eeb16555b1d"
                  }}
                  style={styles.ImageBackground_I3567_18094_3510_16046}
                />
              </View>
              <View style={styles.View_I3567_18094_3510_16041}>
                <Text style={styles.Text_I3567_18094_3510_16041}>News</Text>
              </View>
            </View>
            <View style={styles.View_I3567_18094_3510_16047}>
              <View style={styles.View_I3567_18094_3510_16052}>
                <View style={styles.View_I3567_18094_3510_16053} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc60/2abb/008f7fa79540bf6904e49e50471df856"
                  }}
                  style={styles.ImageBackground_I3567_18094_3510_16054}
                />
              </View>
              <View style={styles.View_I3567_18094_3510_16049}>
                <Text style={styles.Text_I3567_18094_3510_16049}>Pocket</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I3567_18094_3510_16055}>
            <View style={styles.View_I3567_18094_3510_16056}>
              <View style={styles.View_I3567_18094_3510_16074}>
                <View style={styles.View_I3567_18094_3510_16075}>
                  <Text style={styles.Text_I3567_18094_3510_16075}>
                    Add to Reading List
                  </Text>
                </View>
                <View style={styles.View_I3567_18094_3510_16076}>
                  <Text style={styles.Text_I3567_18094_3510_16076}>􀖆</Text>
                </View>
              </View>
              <View style={styles.View_I3567_18094_3510_16058} />
              <View style={styles.View_I3567_18094_3510_16077}>
                <View style={styles.View_I3567_18094_3510_16078}>
                  <Text style={styles.Text_I3567_18094_3510_16078}>
                    Add Bookmark
                  </Text>
                </View>
                <View style={styles.View_I3567_18094_3510_16079}>
                  <Text style={styles.Text_I3567_18094_3510_16079}>􀉚</Text>
                </View>
              </View>
              <View style={styles.View_I3567_18094_3510_16060} />
              <View style={styles.View_I3567_18094_3510_16080}>
                <View style={styles.View_I3567_18094_3510_16081}>
                  <Text style={styles.Text_I3567_18094_3510_16081}>
                    Add to Favorites
                  </Text>
                </View>
                <View style={styles.View_I3567_18094_3510_16082}>
                  <Text style={styles.Text_I3567_18094_3510_16082}>􀋂</Text>
                </View>
              </View>
              <View style={styles.View_I3567_18094_3510_16062} />
              <View style={styles.View_I3567_18094_3510_16083}>
                <View style={styles.View_I3567_18094_3510_16084}>
                  <Text style={styles.Text_I3567_18094_3510_16084}>
                    Find on Page
                  </Text>
                </View>
                <View style={styles.View_I3567_18094_3510_16085}>
                  <Text style={styles.Text_I3567_18094_3510_16085}>􀊫</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I3567_18094_3510_16064}>
              <View style={styles.View_I3567_18094_3510_16065}>
                <Text style={styles.Text_I3567_18094_3510_16065}>
                  Edit Actions...
                </Text>
              </View>
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
  View_3567_18204: {
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
  View_3567_18039: {
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
  View_I3567_18039_3658_30148: {
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
  ImageBackground_I3567_18039_3658_30149: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.0109289617486334%")
  },
  View_I3567_18039_3658_30150: {
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
  View_I3567_18039_3658_30154: {
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
  View_3567_18040: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("25.683060109289617%"),
    minHeight: hp("25.683060109289617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(248, 248, 249, 1)"
  },
  View_I3567_18040_3023_54431: {
    flexGrow: 1,
    width: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.06666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3567_18040_3023_54431_2747_44124: {
    flexGrow: 1,
    width: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3567_18040_3023_54431_2747_44124_3933_678: {
    flexGrow: 1,
    width: wp("12.79955851236979%"),
    height: hp("6.559516302223415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.0928961748633874%")
  },
  View_I3567_18040_3023_54432: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("10.928961748633881%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3567_18040_3023_54433: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3567_18040_3023_54433: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3567_18040_3023_54434: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.918032786885242%")
  },
  Text_I3567_18040_3023_54434: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3567_18041: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("53.00546448087432%")
  },
  Text_3567_18041: {
    color: "rgba(1, 110, 137, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3567_18042: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("17.48633879781421%"),
    minHeight: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("87.70491803278688%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3567_18043: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3567_18044: {
    width: wp("41.333333333333336%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(215, 228, 227, 1)"
  },
  View_I3567_18044_1897_13497: {
    flexGrow: 1,
    width: wp("19.733333333333334%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.799999999999999%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3567_18044_1897_13498: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3567_18044_1897_13499: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I3567_18044_1897_13499: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3567_18045: {
    width: wp("41.333333333333336%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.86666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(215, 228, 227, 1)"
  },
  View_I3567_18045_1897_13497: {
    flexGrow: 1,
    width: wp("26.13333333333333%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.6000000000000085%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3567_18045_1897_13498: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3567_18045_1897_13498_3038_59434: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.546448087431699%")
  },
  View_I3567_18045_1897_13499: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333339%"),
    top: hp("0%")
  },
  Text_I3567_18045_1897_13499: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3567_18046: {
    width: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.836065573770497%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I3567_18046_1897_13587: {
    flexGrow: 1,
    width: wp("29.06666666666667%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.06666666666667%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3567_18046_1897_13588: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3567_18046_1897_13588_3559_411: {
    flexGrow: 1,
    width: wp("2.66719970703125%"),
    height: hp("1.912704842989562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8661458333333343%"),
    top: hp("0.6829266991120164%")
  },
  View_I3567_18046_1897_13589: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%"),
    top: hp("0%")
  },
  Text_I3567_18046_1897_13589: {
    color: "rgba(245, 250, 128, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3567_18206: {
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
  View_3567_18205: {
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
  View_3567_18094: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("89.61748633879782%"),
    minHeight: hp("89.61748633879782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.311475409836063%"),
    backgroundColor: "rgba(250, 250, 250, 0.9300000071525574)",
    overflow: "hidden"
  },
  View_I3567_18094_3510_15818: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.1857923497267784%")
  },
  View_I3567_18094_3510_15819: {
    width: wp("58.4%"),
    minWidth: wp("58.4%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("0%")
  },
  Text_I3567_18094_3510_15819: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3567_18094_3510_15926: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3567_18094_3510_15930: {
    width: wp("4.800000508626303%"),
    minWidth: wp("4.800000508626303%"),
    height: hp("2.459016654009376%"),
    minHeight: hp("2.459016654009376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333327%"),
    top: hp("1.5027322404371581%"),
    backgroundColor: "rgba(55, 27, 27, 1)"
  },
  View_I3567_18094_3510_15931: {
    width: wp("4.800000508626303%"),
    height: hp("2.459016654009376%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3.90000057220459,
    borderTopRightRadius: 3.90000057220459,
    borderBottomLeftRadius: 3.90000057220459,
    borderBottomRightRadius: 3.90000057220459
  },
  View_I3567_18094_3510_16510: {
    width: wp("4.800000508626303%"),
    height: hp("2.459016654009376%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(232, 233, 237, 1)"
  },
  View_I3567_18094_3510_16516: {
    width: wp("2.1333333333333333%"),
    top: hp("0.13661202185792476%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.333333333333334%")
  },
  Text_I3567_18094_3510_16516: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3567_18094_3510_15933: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.46666666666667%"),
    top: hp("0.6830601092896167%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3567_18094_3510_15934: {
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3567_18094_3510_15935: {
    width: wp("6.041501363118489%"),
    height: hp("3.0950314360238167%"),
    top: hp("0.5464480874316955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9588541666666686%")
  },
  View_I3567_18094_3510_15823: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.904371584699454%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_I3567_18094_3510_15824: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.704918032786885%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3567_18094_3510_15938: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3567_18094_3510_15939: {
    width: wp("17.333333333333336%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9333333333333336%")
  },
  View_I3567_18094_3510_15946: {
    width: wp("16.799998982747397%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3567_18094_3510_15947: {
    width: wp("16.799998982747397%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3567_18094_3510_15948: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("6.010928961748633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    backgroundColor: "rgba(55, 27, 27, 1)"
  },
  View_I3567_18094_3510_15949: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4.333333492279053,
    borderTopRightRadius: 4.333333492279053,
    borderBottomLeftRadius: 4.333333492279053,
    borderBottomRightRadius: 4.333333492279053
  },
  ImageBackground_I3567_18094_3510_15950: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderTopLeftRadius: 4.333333492279053,
    borderTopRightRadius: 4.333333492279053,
    borderBottomLeftRadius: 4.333333492279053,
    borderBottomRightRadius: 4.333333492279053
  },
  View_I3567_18094_3510_15942: {
    width: wp("19.2%"),
    top: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3567_18094_3510_15942: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_I3567_18094_3510_15951: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.26666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3567_18094_3510_15952: {
    width: wp("17.333333333333336%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.93333333333333%")
  },
  View_I3567_18094_3510_15959: {
    width: wp("16.799998982747397%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3567_18094_3510_15960: {
    width: wp("16.799998982747397%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I3567_18094_3510_15961: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("6.010928961748633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.999999999999996%"),
    backgroundColor: "rgba(55, 27, 27, 1)"
  },
  View_I3567_18094_3510_15962: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4.333333492279053,
    borderTopRightRadius: 4.333333492279053,
    borderBottomLeftRadius: 4.333333492279053,
    borderBottomRightRadius: 4.333333492279053
  },
  ImageBackground_I3567_18094_3510_15963: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 4.333333492279053,
    borderTopRightRadius: 4.333333492279053,
    borderBottomLeftRadius: 4.333333492279053,
    borderBottomRightRadius: 4.333333492279053
  },
  View_I3567_18094_3510_15955: {
    width: wp("19.2%"),
    top: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3567_18094_3510_15955: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_I3567_18094_3510_15964: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.26666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3567_18094_3510_15965: {
    width: wp("17.333333333333336%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9333333333333442%")
  },
  View_I3567_18094_3510_15976: {
    width: wp("16.799998982747397%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3567_18094_3510_15981: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3567_18094_3510_15982: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I3567_18094_3510_15983: {
    width: wp("11.199998982747395%"),
    height: hp("5.7377043968992805%"),
    top: hp("2.868852459016395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.599999999999994%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3567_18094_3510_15984: {
    width: wp("11.199998982747395%"),
    height: hp("5.7377043968992805%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I3567_18094_3510_15985: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("6.010928961748633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    backgroundColor: "rgba(55, 27, 27, 1)"
  },
  View_I3567_18094_3510_15986: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4.333333492279053,
    borderTopRightRadius: 4.333333492279053,
    borderBottomLeftRadius: 4.333333492279053,
    borderBottomRightRadius: 4.333333492279053
  },
  ImageBackground_I3567_18094_3510_15987: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 4.333333492279053,
    borderTopRightRadius: 4.333333492279053,
    borderBottomLeftRadius: 4.333333492279053,
    borderBottomRightRadius: 4.333333492279053
  },
  View_I3567_18094_3510_15968: {
    width: wp("19.2%"),
    top: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3567_18094_3510_15968: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_I3567_18094_3510_15969: {
    width: wp("19.2%"),
    top: hp("11.612021857923501%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3567_18094_3510_15969: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_I3567_18094_3510_15988: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.26666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3567_18094_3510_15989: {
    width: wp("17.333333333333336%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9333333333333371%")
  },
  View_I3567_18094_3510_15996: {
    width: wp("16.799998982747397%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3567_18094_3510_15997: {
    width: wp("16.799998982747397%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I3567_18094_3510_15998: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("6.010928961748633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    backgroundColor: "rgba(55, 27, 27, 1)"
  },
  View_I3567_18094_3510_15999: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4.333333492279053,
    borderTopRightRadius: 4.333333492279053,
    borderBottomLeftRadius: 4.333333492279053,
    borderBottomRightRadius: 4.333333492279053
  },
  ImageBackground_I3567_18094_3510_16000: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 4.333333492279053,
    borderTopRightRadius: 4.333333492279053,
    borderBottomLeftRadius: 4.333333492279053,
    borderBottomRightRadius: 4.333333492279053
  },
  View_I3567_18094_3510_15992: {
    width: wp("19.2%"),
    top: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3567_18094_3510_15992: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_I3567_18094_3510_16001: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("100.26666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3567_18094_3510_16002: {
    width: wp("17.333333333333336%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9333333333333371%")
  },
  View_I3567_18094_3510_16009: {
    width: wp("16.799998982747397%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3567_18094_3510_16010: {
    width: wp("16.799998982747397%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I3567_18094_3510_16011: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("6.010928961748633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.999999999999986%"),
    backgroundColor: "rgba(55, 27, 27, 1)"
  },
  View_I3567_18094_3510_16012: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4.333333492279053,
    borderTopRightRadius: 4.333333492279053,
    borderBottomLeftRadius: 4.333333492279053,
    borderBottomRightRadius: 4.333333492279053
  },
  ImageBackground_I3567_18094_3510_16013: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 4.333333492279053,
    borderTopRightRadius: 4.333333492279053,
    borderBottomLeftRadius: 4.333333492279053,
    borderBottomRightRadius: 4.333333492279053
  },
  View_I3567_18094_3510_16005: {
    width: wp("19.2%"),
    top: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3567_18094_3510_16005: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_I3567_18094_3510_15830: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28.34699453551913%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_I3567_18094_3510_15831: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.14754098360656%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3567_18094_3510_16014: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3567_18094_3510_16015: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I3567_18094_3510_16016: {
    width: wp("11.307700602213542%"),
    height: hp("5.497627570980885%"),
    top: hp("1.3329677894467196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3460937500000005%")
  },
  View_I3567_18094_3510_16022: {
    width: wp("20%"),
    top: hp("8.743169398907106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.8666666666666667%")
  },
  Text_I3567_18094_3510_16022: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_I3567_18094_3510_16023: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.799999999999997%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3567_18094_3510_16028: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(55, 27, 27, 1)"
  },
  View_I3567_18094_3510_16029: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13
  },
  ImageBackground_I3567_18094_3510_16030: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13
  },
  View_I3567_18094_3510_16025: {
    width: wp("13.600000000000001%"),
    top: hp("8.743169398907106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333357%")
  },
  Text_I3567_18094_3510_16025: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_I3567_18094_3510_16031: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.333333333333336%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3567_18094_3510_16036: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(55, 27, 27, 1)"
  },
  View_I3567_18094_3510_16037: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13
  },
  ImageBackground_I3567_18094_3510_16038: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13
  },
  View_I3567_18094_3510_16033: {
    width: wp("8.533333333333333%"),
    top: hp("8.743169398907106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333327%")
  },
  Text_I3567_18094_3510_16033: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_I3567_18094_3510_16039: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.86666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3567_18094_3510_16044: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(55, 27, 27, 1)"
  },
  View_I3567_18094_3510_16045: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13
  },
  ImageBackground_I3567_18094_3510_16046: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13
  },
  View_I3567_18094_3510_16041: {
    width: wp("7.733333333333333%"),
    top: hp("8.743169398907106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.26666666666668%")
  },
  Text_I3567_18094_3510_16041: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_I3567_18094_3510_16047: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("102.4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3567_18094_3510_16052: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(55, 27, 27, 1)"
  },
  View_I3567_18094_3510_16053: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13
  },
  ImageBackground_I3567_18094_3510_16054: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13
  },
  View_I3567_18094_3510_16049: {
    width: wp("9.333333333333334%"),
    top: hp("8.743169398907106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666544%")
  },
  Text_I3567_18094_3510_16049: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_I3567_18094_3510_16055: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("31.62568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("44.94535519125684%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3567_18094_3510_16056: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("26.434426229508194%"),
    minHeight: hp("26.434426229508194%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3567_18094_3510_16074: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3567_18094_3510_16075: {
    width: wp("39.733333333333334%"),
    minWidth: wp("39.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.775956284152997%")
  },
  Text_I3567_18094_3510_16075: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I3567_18094_3510_16076: {
    width: wp("2.4%"),
    minWidth: wp("2.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.80000000000001%"),
    top: hp("1.775956284152997%")
  },
  Text_I3567_18094_3510_16076: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I3567_18094_3510_16058: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("0.06830601092896176%"),
    minHeight: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.557377049180317%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_I3567_18094_3510_16077: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.6256830601092815%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3567_18094_3510_16078: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.7759562841530112%")
  },
  Text_I3567_18094_3510_16078: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I3567_18094_3510_16079: {
    width: wp("2.4%"),
    minWidth: wp("2.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.80000000000001%"),
    top: hp("1.7759562841530112%")
  },
  Text_I3567_18094_3510_16079: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I3567_18094_3510_16060: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("0.06830601092896176%"),
    minHeight: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.183060109289613%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_I3567_18094_3510_16080: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.251366120218577%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3567_18094_3510_16081: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.775956284152997%")
  },
  Text_I3567_18094_3510_16081: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I3567_18094_3510_16082: {
    width: wp("2.4%"),
    minWidth: wp("2.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.80000000000001%"),
    top: hp("1.775956284152997%")
  },
  Text_I3567_18094_3510_16082: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I3567_18094_3510_16062: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("0.06830601092896176%"),
    minHeight: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.808743169398895%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_I3567_18094_3510_16083: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.87704918032786%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3567_18094_3510_16084: {
    width: wp("26.400000000000002%"),
    minWidth: wp("26.400000000000002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.7759562841530112%")
  },
  Text_I3567_18094_3510_16084: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I3567_18094_3510_16085: {
    width: wp("2.4%"),
    minWidth: wp("2.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.80000000000001%"),
    top: hp("1.7759562841530112%")
  },
  Text_I3567_18094_3510_16085: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I3567_18094_3510_16064: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28.620218579234972%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3567_18094_3510_16065: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0%")
  },
  Text_I3567_18094_3510_16065: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
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
