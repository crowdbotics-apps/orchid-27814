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
      <View style={styles.View_3962_11300}>
        <View style={styles.View_3962_11155}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cc3/ae15/d65ba414b95d99967f0755e8c9b952c1"
            }}
            style={styles.ImageBackground_3962_11156}
          />
          <View style={styles.View_3962_11157}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11be/acfa/bb848c3d62374a126e83322e2b54a644"
              }}
              style={styles.ImageBackground_3962_11158}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11be/acfa/bb848c3d62374a126e83322e2b54a644"
              }}
              style={styles.ImageBackground_3962_11159}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abad/a722/93dc2815deaf22363b0c808320c66de7"
              }}
              style={styles.ImageBackground_3962_11160}
            />
          </View>
          <View style={styles.View_3962_11161}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cb1/38eb/785e6216a924e566551433a98512ae95"
              }}
              style={styles.ImageBackground_3962_11162}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cb1/38eb/785e6216a924e566551433a98512ae95"
              }}
              style={styles.ImageBackground_3962_11163}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6951/d098/d87b966cb1f4290c781ac3de312b94c2"
              }}
              style={styles.ImageBackground_3962_11164}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92ea/6096/ff96450e36f98e85250639d6a9938e69"
            }}
            style={styles.ImageBackground_3962_11165}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16dc/28b5/fd8522fd6d64f51d762c1a0143e290bf"
            }}
            style={styles.ImageBackground_3962_11166}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6391/3c7b/8effb6e78141cb4c40ae8ec33646f49e"
            }}
            style={styles.ImageBackground_3962_11167}
          />
        </View>
        <View style={styles.View_3962_11168}>
          <View style={styles.View_3962_11169}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8324/2d51/d66d1c4f842af3834a9199d686a982b2"
              }}
              style={styles.ImageBackground_3962_11170}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8324/2d51/d66d1c4f842af3834a9199d686a982b2"
              }}
              style={styles.ImageBackground_3962_11171}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e180/14fa/420b34ff5edb3d6879afa37569de707b"
              }}
              style={styles.ImageBackground_3962_11172}
            />
          </View>
          <View style={styles.View_3962_11173}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cfd/f5c0/e0647b8c69fe93fa4abaa700e208e9b2"
              }}
              style={styles.ImageBackground_3962_11174}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cfd/f5c0/e0647b8c69fe93fa4abaa700e208e9b2"
              }}
              style={styles.ImageBackground_3962_11175}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7f8/55d9/440d196f4bdc59482996a4edd9533082"
              }}
              style={styles.ImageBackground_3962_11176}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ff7/7558/9178664685ca9772dd932839a72fb1ca"
            }}
            style={styles.ImageBackground_3962_11177}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5c4/3826/81088fb63e96cfc2f7f69a2081648b4a"
            }}
            style={styles.ImageBackground_3962_11178}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/895d/d817/99168ebbcd85e835dc21b4dcb472e158"
            }}
            style={styles.ImageBackground_3962_11179}
          />
        </View>
        <View style={styles.View_3962_11180}>
          <View style={styles.View_3962_11181}>
            <View style={styles.View_3962_11182}>
              <View style={styles.View_I3962_11182_3107_56532}>
                <View style={styles.View_I3962_11182_3107_56532_3108_55510}>
                  <View
                    style={
                      styles.View_I3962_11182_3107_56532_3108_55510_2730_41734
                    }
                  >
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb4a/a5a9/b14aeef5c6e44a2df099803d08e31d81"
                      }}
                      style={
                        styles.ImageBackground_I3962_11182_3107_56532_3108_55510_2730_41734_2694_39831
                      }
                    />
                  </View>
                </View>
                <View style={styles.View_I3962_11182_3107_56532_3108_55509}>
                  <Text style={styles.Text_I3962_11182_3107_56532_3108_55509}>
                    Account
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_3962_11184}>
              <View style={styles.View_I3962_11184_3107_56532}>
                <View style={styles.View_I3962_11184_3107_56532_3108_55510}>
                  <View
                    style={
                      styles.View_I3962_11184_3107_56532_3108_55510_2730_41734
                    }
                  >
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3044/d0ac/625ff466654f07d04b8712d7b60bf465"
                      }}
                      style={
                        styles.ImageBackground_I3962_11184_3107_56532_3108_55510_2730_41734_3502_14077
                      }
                    />
                  </View>
                </View>
                <View style={styles.View_I3962_11184_3107_56532_3108_55509}>
                  <Text style={styles.Text_I3962_11184_3107_56532_3108_55509}>
                    Transaction History
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_3962_11185}>
            <View style={styles.View_I3962_11185_3107_56532}>
              <View style={styles.View_I3962_11185_3107_56532_3108_55510}>
                <View
                  style={
                    styles.View_I3962_11185_3107_56532_3108_55510_2730_41734
                  }
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5db/d346/991b83ecc5be6d1887be98570878c260"
                    }}
                    style={
                      styles.ImageBackground_I3962_11185_3107_56532_3108_55510_2730_41734_3658_30558
                    }
                  />
                </View>
              </View>
              <View style={styles.View_I3962_11185_3107_56532_3108_55509}>
                <Text style={styles.Text_I3962_11185_3107_56532_3108_55509}>
                  Share Public
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3962_11186}>
            <View style={styles.View_I3962_11186_3107_56532}>
              <View style={styles.View_I3962_11186_3107_56532_3108_55510}>
                <View
                  style={
                    styles.View_I3962_11186_3107_56532_3108_55510_2730_41734
                  }
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f442/c916/1b74fad0a6c1a4be869b9becbff69ce5"
                    }}
                    style={
                      styles.ImageBackground_I3962_11186_3107_56532_3108_55510_2730_41734_3419_13598
                    }
                  />
                </View>
              </View>
              <View style={styles.View_I3962_11186_3107_56532_3108_55509}>
                <Text style={styles.Text_I3962_11186_3107_56532_3108_55509}>
                  Setting
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3962_11187}>
            <View style={styles.View_3962_11188}>
              <View style={styles.View_I3962_11188_3107_56532}>
                <View style={styles.View_I3962_11188_3107_56532_3108_55510}>
                  <View
                    style={
                      styles.View_I3962_11188_3107_56532_3108_55510_2730_41734
                    }
                  >
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84cd/a388/f247412ceb0386293a8f663d66fe5b64"
                      }}
                      style={
                        styles.ImageBackground_I3962_11188_3107_56532_3108_55510_2730_41734_3038_59591
                      }
                    />
                  </View>
                </View>
                <View style={styles.View_I3962_11188_3107_56532_3108_55509}>
                  <Text style={styles.Text_I3962_11188_3107_56532_3108_55509}>
                    Get Help
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_3962_11189}>
              <View style={styles.View_I3962_11189_3107_56532}>
                <View style={styles.View_I3962_11189_3107_56532_3108_55510}>
                  <View
                    style={
                      styles.View_I3962_11189_3107_56532_3108_55510_2730_41734
                    }
                  >
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a10f/1cef/65e63ffcb74411257dbbd096c9e23540"
                      }}
                      style={
                        styles.ImageBackground_I3962_11189_3107_56532_3108_55510_2730_41734_3502_14114
                      }
                    />
                  </View>
                </View>
                <View style={styles.View_I3962_11189_3107_56532_3108_55509}>
                  <Text style={styles.Text_I3962_11189_3107_56532_3108_55509}>
                    Send Feedback
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3962_11190}>
          <View style={styles.View_I3962_11190_3107_56532}>
            <View style={styles.View_I3962_11190_3107_56532_3108_55510}>
              <View
                style={styles.View_I3962_11190_3107_56532_3108_55510_2730_41734}
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7248/717f/bbadfc2b32f060c0119adac13957cabd"
                  }}
                  style={
                    styles.ImageBackground_I3962_11190_3107_56532_3108_55510_2730_41734_3502_14145
                  }
                />
              </View>
            </View>
            <View style={styles.View_I3962_11190_3107_56532_3108_55509}>
              <Text style={styles.Text_I3962_11190_3107_56532_3108_55509}>
                Log out
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3962_11191}>
          <View style={styles.View_I3962_11191_2892_44027} />
          <View style={styles.View_I3962_11191_2892_44028}>
            <Text style={styles.Text_I3962_11191_2892_44028}>Setting</Text>
          </View>
          <View style={styles.View_I3962_11191_2892_44029} />
        </View>
        <View style={styles.View_3962_11192}>
          <View style={styles.View_I3962_11192_3497_1681} />
          <View style={styles.View_I3962_11192_3497_1682}>
            <View style={styles.View_I3962_11192_3497_1682_3497_1596}>
              <View
                style={styles.View_I3962_11192_3497_1682_3497_1596_2730_41734}
              >
                <View
                  style={
                    styles.View_I3962_11192_3497_1682_3497_1596_2730_41734_2993_53328
                  }
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6dad/4249/2e5befa70ef8bc188965502c3e1e23af"
                    }}
                    style={
                      styles.ImageBackground_I3962_11192_3497_1682_3497_1596_2730_41734_2993_53329
                    }
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I3962_11192_3497_1683}>
            <View style={styles.View_I3962_11192_3497_1683_3497_1596}>
              <View
                style={styles.View_I3962_11192_3497_1683_3497_1596_2730_41734}
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5fe7/4112/6328a1a25ab49f7fb6b024c3e7f30062"
                  }}
                  style={
                    styles.ImageBackground_I3962_11192_3497_1683_3497_1596_2730_41734_3477_12778
                  }
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I3962_11192_3497_1685}>
            <View style={styles.View_I3962_11192_3497_1685_3497_1596}>
              <View
                style={styles.View_I3962_11192_3497_1685_3497_1596_2730_41734}
              >
                <View
                  style={
                    styles.View_I3962_11192_3497_1685_3497_1596_2730_41734_3020_52674
                  }
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f8c/683d/24b08c1b3d168d77598fe650cf1d781d"
                    }}
                    style={
                      styles.ImageBackground_I3962_11192_3497_1685_3497_1596_2730_41734_3020_52675
                    }
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I3962_11192_3497_1684}>
            <View style={styles.View_I3962_11192_3497_1684_3497_1584}>
              <View
                style={styles.View_I3962_11192_3497_1684_3497_1584_2730_41734}
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d47c/72ba/158985b014fccdf48174b728dc40994e"
                  }}
                  style={
                    styles.ImageBackground_I3962_11192_3497_1684_3497_1584_2730_41734_3419_13598
                  }
                />
              </View>
            </View>
            <View style={styles.View_I3962_11192_3497_1684_3497_1585}>
              <Text style={styles.Text_I3962_11192_3497_1684_3497_1585}>
                Setting
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3515_14512} />
      <View style={styles.View_3515_14513}>
        <View style={styles.View_I3515_14513_3510_15818}>
          <View style={styles.View_I3515_14513_3510_15819}>
            <Text style={styles.Text_I3515_14513_3510_15819}>
              bc691db1e197914c7c0097ad6513efb6a2d68a5 aad46afacf8800ffdeab91576
            </Text>
          </View>
          <View style={styles.View_I3515_14513_3510_15926}>
            <View style={styles.View_I3515_14513_3510_15930}>
              <View style={styles.View_I3515_14513_3510_15931} />
              <View style={styles.View_I3515_14513_3510_16510} />
              <View style={styles.View_I3515_14513_3510_16516}>
                <Text style={styles.Text_I3515_14513_3510_16516}>T</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I3515_14513_3510_15933}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef8c/61e6/6276532c6150ba4f01443c144a6efac5"
              }}
              style={styles.ImageBackground_I3515_14513_3510_15934}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f7d/fd2a/7f93ca60296d4bfc02c98a3a507098f6"
              }}
              style={styles.ImageBackground_I3515_14513_3510_15935}
            />
          </View>
        </View>
        <View style={styles.View_I3515_14513_3510_15823} />
        <View style={styles.View_I3515_14513_3510_15824}>
          <View style={styles.View_I3515_14513_3510_15938}>
            <View style={styles.View_I3515_14513_3510_15939}>
              <View style={styles.View_I3515_14513_3510_15946}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5566/7c58/f50fbc1ccb74cbfb54fcdef6f68b13fb"
                  }}
                  style={styles.ImageBackground_I3515_14513_3510_15947}
                />
              </View>
              <View style={styles.View_I3515_14513_3510_15948}>
                <View style={styles.View_I3515_14513_3510_15949} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3257/3a5f/14a7c615e9123e73e73d625718091b54"
                  }}
                  style={styles.ImageBackground_I3515_14513_3510_15950}
                />
              </View>
            </View>
            <View style={styles.View_I3515_14513_3510_15942}>
              <Text style={styles.Text_I3515_14513_3510_15942}>
                Apple Mac mini
              </Text>
            </View>
          </View>
          <View style={styles.View_I3515_14513_3510_15951}>
            <View style={styles.View_I3515_14513_3510_15952}>
              <View style={styles.View_I3515_14513_3510_15959}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/561b/91a1/672ad7fe28d808a5ab6234d877378537"
                  }}
                  style={styles.ImageBackground_I3515_14513_3510_15960}
                />
              </View>
              <View style={styles.View_I3515_14513_3510_15961}>
                <View style={styles.View_I3515_14513_3510_15962} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffe3/c51e/dd41f437f4c83ec41076caedc81ff102"
                  }}
                  style={styles.ImageBackground_I3515_14513_3510_15963}
                />
              </View>
            </View>
            <View style={styles.View_I3515_14513_3510_15955}>
              <Text style={styles.Text_I3515_14513_3510_15955}>First Last</Text>
            </View>
          </View>
          <View style={styles.View_I3515_14513_3510_15964}>
            <View style={styles.View_I3515_14513_3510_15965}>
              <View style={styles.View_I3515_14513_3510_15976}>
                <View style={styles.View_I3515_14513_3510_15981}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7dc7/b2b9/3164c6d75fb4b857db6eeb4aa7800a64"
                    }}
                    style={styles.ImageBackground_I3515_14513_3510_15982}
                  />
                </View>
                <View style={styles.View_I3515_14513_3510_15983}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86a3/ea3d/ec008a34283fe4c68b390470358cfdaf"
                    }}
                    style={styles.ImageBackground_I3515_14513_3510_15984}
                  />
                </View>
              </View>
              <View style={styles.View_I3515_14513_3510_15985}>
                <View style={styles.View_I3515_14513_3510_15986} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffe3/c51e/dd41f437f4c83ec41076caedc81ff102"
                  }}
                  style={styles.ImageBackground_I3515_14513_3510_15987}
                />
              </View>
            </View>
            <View style={styles.View_I3515_14513_3510_15968}>
              <Text style={styles.Text_I3515_14513_3510_15968}>Group Name</Text>
            </View>
            <View style={styles.View_I3515_14513_3510_15969}>
              <Text style={styles.Text_I3515_14513_3510_15969}>2 People</Text>
            </View>
          </View>
          <View style={styles.View_I3515_14513_3510_15988}>
            <View style={styles.View_I3515_14513_3510_15989}>
              <View style={styles.View_I3515_14513_3510_15996}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/561b/91a1/672ad7fe28d808a5ab6234d877378537"
                  }}
                  style={styles.ImageBackground_I3515_14513_3510_15997}
                />
              </View>
              <View style={styles.View_I3515_14513_3510_15998}>
                <View style={styles.View_I3515_14513_3510_15999} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffe3/c51e/dd41f437f4c83ec41076caedc81ff102"
                  }}
                  style={styles.ImageBackground_I3515_14513_3510_16000}
                />
              </View>
            </View>
            <View style={styles.View_I3515_14513_3510_15992}>
              <Text style={styles.Text_I3515_14513_3510_15992}>First Last</Text>
            </View>
          </View>
          <View style={styles.View_I3515_14513_3510_16001}>
            <View style={styles.View_I3515_14513_3510_16002}>
              <View style={styles.View_I3515_14513_3510_16009}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/561b/91a1/672ad7fe28d808a5ab6234d877378537"
                  }}
                  style={styles.ImageBackground_I3515_14513_3510_16010}
                />
              </View>
              <View style={styles.View_I3515_14513_3510_16011}>
                <View style={styles.View_I3515_14513_3510_16012} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffe3/c51e/dd41f437f4c83ec41076caedc81ff102"
                  }}
                  style={styles.ImageBackground_I3515_14513_3510_16013}
                />
              </View>
            </View>
            <View style={styles.View_I3515_14513_3510_16005}>
              <Text style={styles.Text_I3515_14513_3510_16005}>First Last</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I3515_14513_3510_15830} />
        <View style={styles.View_I3515_14513_3510_15831}>
          <View style={styles.View_I3515_14513_3510_16014}>
            <View style={styles.View_I3515_14513_3510_16015}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c979/8261/f6b20c570eb5a884d24da7e42b560ab6"
                }}
                style={styles.ImageBackground_I3515_14513_3510_16016}
              />
            </View>
            <View style={styles.View_I3515_14513_3510_16022}>
              <Text style={styles.Text_I3515_14513_3510_16022}>
                Cryptoolydrop
              </Text>
            </View>
          </View>
          <View style={styles.View_I3515_14513_3510_16023}>
            <View style={styles.View_I3515_14513_3510_16028}>
              <View style={styles.View_I3515_14513_3510_16029} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acd3/b76c/44c993fffa700aae6b9b0e22465157e7"
                }}
                style={styles.ImageBackground_I3515_14513_3510_16030}
              />
            </View>
            <View style={styles.View_I3515_14513_3510_16025}>
              <Text style={styles.Text_I3515_14513_3510_16025}>Messages</Text>
            </View>
          </View>
          <View style={styles.View_I3515_14513_3510_16031}>
            <View style={styles.View_I3515_14513_3510_16036}>
              <View style={styles.View_I3515_14513_3510_16037} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/086d/ba07/7dbcc2cdafef5ee59f27a2544d73d84b"
                }}
                style={styles.ImageBackground_I3515_14513_3510_16038}
              />
            </View>
            <View style={styles.View_I3515_14513_3510_16033}>
              <Text style={styles.Text_I3515_14513_3510_16033}>Books</Text>
            </View>
          </View>
          <View style={styles.View_I3515_14513_3510_16039}>
            <View style={styles.View_I3515_14513_3510_16044}>
              <View style={styles.View_I3515_14513_3510_16045} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/440f/8c9e/e1d02b63e3e83f2f21234eeb16555b1d"
                }}
                style={styles.ImageBackground_I3515_14513_3510_16046}
              />
            </View>
            <View style={styles.View_I3515_14513_3510_16041}>
              <Text style={styles.Text_I3515_14513_3510_16041}>News</Text>
            </View>
          </View>
          <View style={styles.View_I3515_14513_3510_16047}>
            <View style={styles.View_I3515_14513_3510_16052}>
              <View style={styles.View_I3515_14513_3510_16053} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc60/2abb/008f7fa79540bf6904e49e50471df856"
                }}
                style={styles.ImageBackground_I3515_14513_3510_16054}
              />
            </View>
            <View style={styles.View_I3515_14513_3510_16049}>
              <Text style={styles.Text_I3515_14513_3510_16049}>Pocket</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I3515_14513_3510_16055}>
          <View style={styles.View_I3515_14513_3510_16056}>
            <View style={styles.View_I3515_14513_3510_16074}>
              <View style={styles.View_I3515_14513_3510_16075}>
                <Text style={styles.Text_I3515_14513_3510_16075}>
                  Add to Reading List
                </Text>
              </View>
              <View style={styles.View_I3515_14513_3510_16076}>
                <Text style={styles.Text_I3515_14513_3510_16076}>􀖆</Text>
              </View>
            </View>
            <View style={styles.View_I3515_14513_3510_16058} />
            <View style={styles.View_I3515_14513_3510_16077}>
              <View style={styles.View_I3515_14513_3510_16078}>
                <Text style={styles.Text_I3515_14513_3510_16078}>
                  Add Bookmark
                </Text>
              </View>
              <View style={styles.View_I3515_14513_3510_16079}>
                <Text style={styles.Text_I3515_14513_3510_16079}>􀉚</Text>
              </View>
            </View>
            <View style={styles.View_I3515_14513_3510_16060} />
            <View style={styles.View_I3515_14513_3510_16080}>
              <View style={styles.View_I3515_14513_3510_16081}>
                <Text style={styles.Text_I3515_14513_3510_16081}>
                  Add to Favorites
                </Text>
              </View>
              <View style={styles.View_I3515_14513_3510_16082}>
                <Text style={styles.Text_I3515_14513_3510_16082}>􀋂</Text>
              </View>
            </View>
            <View style={styles.View_I3515_14513_3510_16062} />
            <View style={styles.View_I3515_14513_3510_16083}>
              <View style={styles.View_I3515_14513_3510_16084}>
                <Text style={styles.Text_I3515_14513_3510_16084}>
                  Find on Page
                </Text>
              </View>
              <View style={styles.View_I3515_14513_3510_16085}>
                <Text style={styles.Text_I3515_14513_3510_16085}>􀊫</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I3515_14513_3510_16064}>
            <View style={styles.View_I3515_14513_3510_16065}>
              <Text style={styles.Text_I3515_14513_3510_16065}>
                Edit Actions...
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
  View_3962_11300: {
    width: wp("117.79346516927083%"),
    minWidth: wp("117.79346516927083%"),
    height: hp("100.27322404371584%"),
    minHeight: hp("100.27322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6.060123697916667%"),
    top: hp("6.0109289617486334%")
  },
  View_3962_11155: {
    width: wp("33.31269734700521%"),
    minWidth: wp("33.31269734700521%"),
    height: hp("16.24173649021837%"),
    minHeight: hp("16.24173649021837%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("81.7015934511612%")
  },
  ImageBackground_3962_11156: {
    width: wp("33.312591552734375%"),
    minWidth: wp("33.312591552734375%"),
    height: hp("16.241641643920232%"),
    minHeight: hp("16.241641643920232%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.00013341017759671558%"),
    resizeMode: "cover"
  },
  View_3962_11157: {
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
  ImageBackground_3962_11158: {
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
  ImageBackground_3962_11159: {
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
  ImageBackground_3962_11160: {
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
  View_3962_11161: {
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
  ImageBackground_3962_11162: {
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
  ImageBackground_3962_11163: {
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
  ImageBackground_3962_11164: {
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
  ImageBackground_3962_11165: {
    width: wp("33.312591552734375%"),
    minWidth: wp("33.312591552734375%"),
    height: hp("16.241641643920232%"),
    minHeight: hp("16.241641643920232%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.00013341017759671558%")
  },
  ImageBackground_3962_11166: {
    width: wp("33.312591552734375%"),
    minWidth: wp("33.312591552734375%"),
    height: hp("16.241641643920232%"),
    minHeight: hp("16.241641643920232%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.00013341017759671558%")
  },
  ImageBackground_3962_11167: {
    width: wp("33.312591552734375%"),
    minWidth: wp("33.312591552734375%"),
    height: hp("16.241641643920232%"),
    minHeight: hp("16.241641643920232%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.00013341017759671558%")
  },
  View_3962_11168: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("11.807953464528902%"),
    minHeight: hp("11.807953464528902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.06012369791667%"),
    top: hp("5.7377049180327875%")
  },
  View_3962_11169: {
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
  ImageBackground_3962_11170: {
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
  ImageBackground_3962_11171: {
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
  ImageBackground_3962_11172: {
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
  View_3962_11173: {
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
  ImageBackground_3962_11174: {
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
  ImageBackground_3962_11175: {
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
  ImageBackground_3962_11176: {
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
  ImageBackground_3962_11177: {
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
  ImageBackground_3962_11178: {
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
  ImageBackground_3962_11179: {
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
  View_3962_11180: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("62.295081967213115%"),
    minHeight: hp("62.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.460123697916668%"),
    top: hp("8.196721311475411%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3962_11181: {
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
  View_3962_11182: {
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
  View_I3962_11182_3107_56532: {
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
  View_I3962_11182_3107_56532_3108_55510: {
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
  View_I3962_11182_3107_56532_3108_55510_2730_41734: {
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
  ImageBackground_I3962_11182_3107_56532_3108_55510_2730_41734_2694_39831: {
    flexGrow: 1,
    width: wp("4.800029500325521%"),
    height: hp("2.459031506314304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("0.4098360655737707%")
  },
  View_I3962_11182_3107_56532_3108_55509: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I3962_11182_3107_56532_3108_55509: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3962_11184: {
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
  View_I3962_11184_3107_56532: {
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
  View_I3962_11184_3107_56532_3108_55510: {
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
  View_I3962_11184_3107_56532_3108_55510_2730_41734: {
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
  ImageBackground_I3962_11184_3107_56532_3108_55510_2730_41734_3502_14077: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666647%"),
    top: hp("0.4098360655737707%")
  },
  View_I3962_11184_3107_56532_3108_55509: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I3962_11184_3107_56532_3108_55509: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3962_11185: {
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
  View_I3962_11185_3107_56532: {
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
  View_I3962_11185_3107_56532_3108_55510: {
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
  View_I3962_11185_3107_56532_3108_55510_2730_41734: {
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
  ImageBackground_I3962_11185_3107_56532_3108_55510_2730_41734_3658_30558: {
    flexGrow: 1,
    width: wp("4.266770935058594%"),
    height: hp("2.186013310333419%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.066601562499999%"),
    top: hp("0.5463146772541023%")
  },
  View_I3962_11185_3107_56532_3108_55509: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I3962_11185_3107_56532_3108_55509: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3962_11186: {
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
  View_I3962_11186_3107_56532: {
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
  View_I3962_11186_3107_56532_3108_55510: {
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
  View_I3962_11186_3107_56532_3108_55510_2730_41734: {
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
  ImageBackground_I3962_11186_3107_56532_3108_55510_2730_41734_3419_13598: {
    flexGrow: 1,
    width: wp("4.910625203450521%"),
    height: hp("2.459242304817575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("0.4098360655737707%")
  },
  View_I3962_11186_3107_56532_3108_55509: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I3962_11186_3107_56532_3108_55509: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3962_11187: {
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
  View_3962_11188: {
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
  View_I3962_11188_3107_56532: {
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
  View_I3962_11188_3107_56532_3108_55510: {
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
  View_I3962_11188_3107_56532_3108_55510_2730_41734: {
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
  ImageBackground_I3962_11188_3107_56532_3108_55510_2730_41734_3038_59591: {
    flexGrow: 1,
    width: wp("6.402666727701822%"),
    height: hp("3.280054676076753%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.001334635416666785%"),
    top: hp("-0.0006670508879835779%")
  },
  View_I3962_11188_3107_56532_3108_55509: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I3962_11188_3107_56532_3108_55509: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3962_11189: {
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
  View_I3962_11189_3107_56532: {
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
  View_I3962_11189_3107_56532_3108_55510: {
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
  View_I3962_11189_3107_56532_3108_55510_2730_41734: {
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
  ImageBackground_I3962_11189_3107_56532_3108_55510_2730_41734_3502_14114: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.328415386012343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("0.5437798838797789%")
  },
  View_I3962_11189_3107_56532_3108_55509: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I3962_11189_3107_56532_3108_55509: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3962_11190: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.460123697916668%"),
    top: hp("78.14207650273225%"),
    backgroundColor: "rgba(255, 255, 255, 0.20000000298023224)"
  },
  View_I3962_11190_3107_56532: {
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
  View_I3962_11190_3107_56532_3108_55510: {
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
  View_I3962_11190_3107_56532_3108_55510_2730_41734: {
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
  ImageBackground_I3962_11190_3107_56532_3108_55510_2730_41734_3502_14145: {
    flexGrow: 1,
    width: wp("4.800072733561199%"),
    height: hp("2.45643678258677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("0.4125042691256908%")
  },
  View_I3962_11190_3107_56532_3108_55509: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I3962_11190_3107_56532_3108_55509: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3962_11191: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.060123697916667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_11191_2892_44027: {
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
  View_I3962_11191_2892_44028: {
    flexGrow: 1,
    width: wp("17.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.333333333333336%"),
    top: hp("1.0928961748633883%")
  },
  Text_I3962_11191_2892_44028: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3962_11191_2892_44029: {
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
  View_3962_11192: {
    width: wp("82.93333333333334%"),
    minWidth: wp("82.93333333333334%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.726790364583334%"),
    top: hp("92.62295081967213%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_11192_3497_1681: {
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
  View_I3962_11192_3497_1682: {
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
  View_I3962_11192_3497_1682_3497_1596: {
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
  View_I3962_11192_3497_1682_3497_1596_2730_41734: {
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
  View_I3962_11192_3497_1682_3497_1596_2730_41734_2993_53328: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3962_11192_3497_1682_3497_1596_2730_41734_2993_53329: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3962_11192_3497_1683: {
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
  View_I3962_11192_3497_1683_3497_1596: {
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
  View_I3962_11192_3497_1683_3497_1596_2730_41734: {
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
  ImageBackground_I3962_11192_3497_1683_3497_1596_2730_41734_3477_12778: {
    flexGrow: 1,
    width: wp("4.799996948242188%"),
    height: hp("1.6686218032420006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000043%"),
    top: hp("0.8196721311475557%")
  },
  View_I3962_11192_3497_1685: {
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
  View_I3962_11192_3497_1685_3497_1596: {
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
  View_I3962_11192_3497_1685_3497_1596_2730_41734: {
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
  View_I3962_11192_3497_1685_3497_1596_2730_41734_3020_52674: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3962_11192_3497_1685_3497_1596_2730_41734_3020_52675: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3962_11192_3497_1684: {
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
  View_I3962_11192_3497_1684_3497_1584: {
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
  View_I3962_11192_3497_1684_3497_1584_2730_41734: {
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
  ImageBackground_I3962_11192_3497_1684_3497_1584_2730_41734_3419_13598: {
    flexGrow: 1,
    width: wp("4.910625203450521%"),
    height: hp("2.459242304817575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.40983606557378494%")
  },
  View_I3962_11192_3497_1684_3497_1585: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333337%"),
    top: hp("0.1366120218579283%")
  },
  Text_I3962_11192_3497_1684_3497_1585: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3515_14512: {
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
  View_3515_14513: {
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
  View_I3515_14513_3510_15818: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.1857923497267784%")
  },
  View_I3515_14513_3510_15819: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("0%")
  },
  Text_I3515_14513_3510_15819: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_14513_3510_15926: {
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
  View_I3515_14513_3510_15930: {
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
  View_I3515_14513_3510_15931: {
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
  View_I3515_14513_3510_16510: {
    width: wp("4.800000508626303%"),
    height: hp("2.459016654009376%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(232, 233, 237, 1)"
  },
  View_I3515_14513_3510_16516: {
    width: wp("2.1333333333333333%"),
    top: hp("0.13661202185792476%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.333333333333334%")
  },
  Text_I3515_14513_3510_16516: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_14513_3510_15933: {
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
  ImageBackground_I3515_14513_3510_15934: {
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3515_14513_3510_15935: {
    width: wp("6.041501363118489%"),
    height: hp("3.0950314360238167%"),
    top: hp("0.5464480874316955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9587890624999886%")
  },
  View_I3515_14513_3510_15823: {
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
  View_I3515_14513_3510_15824: {
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
  View_I3515_14513_3510_15938: {
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
  View_I3515_14513_3510_15939: {
    width: wp("17.333333333333336%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9333333333333336%")
  },
  View_I3515_14513_3510_15946: {
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
  ImageBackground_I3515_14513_3510_15947: {
    width: wp("16.799998982747397%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3515_14513_3510_15948: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("6.010928961748633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    backgroundColor: "rgba(55, 27, 27, 1)"
  },
  View_I3515_14513_3510_15949: {
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
  ImageBackground_I3515_14513_3510_15950: {
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
  View_I3515_14513_3510_15942: {
    width: wp("19.2%"),
    top: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3515_14513_3510_15942: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_I3515_14513_3510_15951: {
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
  View_I3515_14513_3510_15952: {
    width: wp("17.333333333333336%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.93333333333333%")
  },
  View_I3515_14513_3510_15959: {
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
  ImageBackground_I3515_14513_3510_15960: {
    width: wp("16.799998982747397%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I3515_14513_3510_15961: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("6.010928961748633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.999999999999996%"),
    backgroundColor: "rgba(55, 27, 27, 1)"
  },
  View_I3515_14513_3510_15962: {
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
  ImageBackground_I3515_14513_3510_15963: {
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
  View_I3515_14513_3510_15955: {
    width: wp("19.2%"),
    top: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3515_14513_3510_15955: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_I3515_14513_3510_15964: {
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
  View_I3515_14513_3510_15965: {
    width: wp("17.333333333333336%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9333333333333442%")
  },
  View_I3515_14513_3510_15976: {
    width: wp("16.799998982747397%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14513_3510_15981: {
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
  ImageBackground_I3515_14513_3510_15982: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I3515_14513_3510_15983: {
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
  ImageBackground_I3515_14513_3510_15984: {
    width: wp("11.199998982747395%"),
    height: hp("5.7377043968992805%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I3515_14513_3510_15985: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("6.010928961748633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    backgroundColor: "rgba(55, 27, 27, 1)"
  },
  View_I3515_14513_3510_15986: {
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
  ImageBackground_I3515_14513_3510_15987: {
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
  View_I3515_14513_3510_15968: {
    width: wp("19.2%"),
    top: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3515_14513_3510_15968: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_I3515_14513_3510_15969: {
    width: wp("19.2%"),
    top: hp("11.612021857923501%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3515_14513_3510_15969: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_I3515_14513_3510_15988: {
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
  View_I3515_14513_3510_15989: {
    width: wp("17.333333333333336%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9333333333333371%")
  },
  View_I3515_14513_3510_15996: {
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
  ImageBackground_I3515_14513_3510_15997: {
    width: wp("16.799998982747397%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I3515_14513_3510_15998: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("6.010928961748633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    backgroundColor: "rgba(55, 27, 27, 1)"
  },
  View_I3515_14513_3510_15999: {
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
  ImageBackground_I3515_14513_3510_16000: {
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
  View_I3515_14513_3510_15992: {
    width: wp("19.2%"),
    top: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3515_14513_3510_15992: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_I3515_14513_3510_16001: {
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
  View_I3515_14513_3510_16002: {
    width: wp("17.333333333333336%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9333333333333371%")
  },
  View_I3515_14513_3510_16009: {
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
  ImageBackground_I3515_14513_3510_16010: {
    width: wp("16.799998982747397%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I3515_14513_3510_16011: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("6.010928961748633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.999999999999986%"),
    backgroundColor: "rgba(55, 27, 27, 1)"
  },
  View_I3515_14513_3510_16012: {
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
  ImageBackground_I3515_14513_3510_16013: {
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
  View_I3515_14513_3510_16005: {
    width: wp("19.2%"),
    top: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3515_14513_3510_16005: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_I3515_14513_3510_15830: {
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
  View_I3515_14513_3510_15831: {
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
  View_I3515_14513_3510_16014: {
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
  View_I3515_14513_3510_16015: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I3515_14513_3510_16016: {
    width: wp("11.307700602213542%"),
    height: hp("5.497627570980885%"),
    top: hp("1.3330344945355108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3460937500000005%")
  },
  View_I3515_14513_3510_16022: {
    width: wp("20%"),
    top: hp("8.743169398907106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.8666666666666667%")
  },
  Text_I3515_14513_3510_16022: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_I3515_14513_3510_16023: {
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
  View_I3515_14513_3510_16028: {
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
  View_I3515_14513_3510_16029: {
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
  ImageBackground_I3515_14513_3510_16030: {
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
  View_I3515_14513_3510_16025: {
    width: wp("13.600000000000001%"),
    top: hp("8.743169398907106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333357%")
  },
  Text_I3515_14513_3510_16025: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_I3515_14513_3510_16031: {
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
  View_I3515_14513_3510_16036: {
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
  View_I3515_14513_3510_16037: {
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
  ImageBackground_I3515_14513_3510_16038: {
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
  View_I3515_14513_3510_16033: {
    width: wp("8.533333333333333%"),
    top: hp("8.743169398907106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333327%")
  },
  Text_I3515_14513_3510_16033: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_I3515_14513_3510_16039: {
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
  View_I3515_14513_3510_16044: {
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
  View_I3515_14513_3510_16045: {
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
  ImageBackground_I3515_14513_3510_16046: {
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
  View_I3515_14513_3510_16041: {
    width: wp("7.733333333333333%"),
    top: hp("8.743169398907106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.26666666666668%")
  },
  Text_I3515_14513_3510_16041: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_I3515_14513_3510_16047: {
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
  View_I3515_14513_3510_16052: {
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
  View_I3515_14513_3510_16053: {
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
  ImageBackground_I3515_14513_3510_16054: {
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
  View_I3515_14513_3510_16049: {
    width: wp("9.333333333333334%"),
    top: hp("8.743169398907106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666544%")
  },
  Text_I3515_14513_3510_16049: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_I3515_14513_3510_16055: {
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
  View_I3515_14513_3510_16056: {
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
  View_I3515_14513_3510_16074: {
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
  View_I3515_14513_3510_16075: {
    width: wp("39.733333333333334%"),
    minWidth: wp("39.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.775956284152997%")
  },
  Text_I3515_14513_3510_16075: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I3515_14513_3510_16076: {
    width: wp("2.4%"),
    minWidth: wp("2.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.80000000000001%"),
    top: hp("1.775956284152997%")
  },
  Text_I3515_14513_3510_16076: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I3515_14513_3510_16058: {
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
  View_I3515_14513_3510_16077: {
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
  View_I3515_14513_3510_16078: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.7759562841530112%")
  },
  Text_I3515_14513_3510_16078: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I3515_14513_3510_16079: {
    width: wp("2.4%"),
    minWidth: wp("2.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.80000000000001%"),
    top: hp("1.7759562841530112%")
  },
  Text_I3515_14513_3510_16079: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I3515_14513_3510_16060: {
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
  View_I3515_14513_3510_16080: {
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
  View_I3515_14513_3510_16081: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.775956284152997%")
  },
  Text_I3515_14513_3510_16081: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I3515_14513_3510_16082: {
    width: wp("2.4%"),
    minWidth: wp("2.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.80000000000001%"),
    top: hp("1.775956284152997%")
  },
  Text_I3515_14513_3510_16082: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I3515_14513_3510_16062: {
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
  View_I3515_14513_3510_16083: {
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
  View_I3515_14513_3510_16084: {
    width: wp("26.400000000000002%"),
    minWidth: wp("26.400000000000002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.7759562841530112%")
  },
  Text_I3515_14513_3510_16084: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I3515_14513_3510_16085: {
    width: wp("2.4%"),
    minWidth: wp("2.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.80000000000001%"),
    top: hp("1.7759562841530112%")
  },
  Text_I3515_14513_3510_16085: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I3515_14513_3510_16064: {
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
  View_I3515_14513_3510_16065: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0%")
  },
  Text_I3515_14513_3510_16065: {
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
