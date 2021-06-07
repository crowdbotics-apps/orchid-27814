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
      <View style={styles.View_3549_16725}>
        <View style={styles.View_3549_16726}>
          <View style={styles.View_I3549_16726_3658_29598} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da78/9e1d/32dc693200ea9afa09c0eed02d6e60d1"
            }}
            style={styles.ImageBackground_I3549_16726_3658_29599}
          />
          <View style={styles.View_I3549_16726_3658_29600} />
          <View style={styles.View_I3549_16726_3658_29604} />
          <View style={styles.View_I3549_16726_3658_29701}>
            <View style={styles.View_I3549_16726_3658_29702}>
              <View style={styles.View_I3549_16726_3658_29702_2892_43256}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd24/acb1/124c41b4a2f0cbe8ed07b2f82e3f5d5a"
                  }}
                  style={
                    styles.ImageBackground_I3549_16726_3658_29702_2892_43256_2730_41734
                  }
                />
              </View>
            </View>
            <View style={styles.View_I3549_16726_3658_29703}>
              <Text style={styles.Text_I3549_16726_3658_29703}>Confrim</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3549_16728}>
          <View style={styles.View_3549_16729} />
          <View style={styles.View_3549_16730}>
            <View style={styles.View_3549_16731}>
              <Text style={styles.Text_3549_16731}>To</Text>
            </View>
            <View style={styles.View_3549_16732}>
              <View style={styles.View_I3549_16732_1309_20904}>
                <Text style={styles.Text_I3549_16732_1309_20904}>
                  0x3Dc6...DxE9
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbef/47d0/98a5c9dfc1b7ac58ac86a1c420a7a9c1"
                }}
                style={styles.ImageBackground_I3549_16732_1309_20905}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_3549_16733}>
          <View style={styles.View_I3549_16733_3541_2736}>
            <View style={styles.View_I3549_16733_3541_2736_3116_71530}>
              <View style={styles.View_I3549_16733_3541_2736_3116_71531}>
                <View
                  style={
                    styles.View_I3549_16733_3541_2736_3116_71531_3107_57106
                  }
                >
                  <View
                    style={
                      styles.View_I3549_16733_3541_2736_3116_71531_3107_57106_3108_55515
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3549_16733_3541_2736_3116_71531_3107_57106_3108_55515
                      }
                    >
                      Amount
                    </Text>
                  </View>
                </View>
                <View
                  style={
                    styles.View_I3549_16733_3541_2736_3116_71531_3107_57126
                  }
                >
                  <View
                    style={
                      styles.View_I3549_16733_3541_2736_3116_71531_3107_57126_3108_55996
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3549_16733_3541_2736_3116_71531_3107_57126_3108_55996
                      }
                    >
                      2.3686 BNB
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I3549_16733_3541_2736_3116_71532}>
                <View
                  style={styles.View_I3549_16733_3541_2736_3116_71532_3114_620}
                >
                  <View
                    style={
                      styles.View_I3549_16733_3541_2736_3116_71532_3114_620_3108_55548
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3549_16733_3541_2736_3116_71532_3114_620_3108_55548
                      }
                    >
                      Network fee
                    </Text>
                  </View>
                  <View
                    style={
                      styles.View_I3549_16733_3541_2736_3116_71532_3114_620_3108_55549
                    }
                  >
                    <View
                      style={
                        styles.View_I3549_16733_3541_2736_3116_71532_3114_620_3108_55549_71_37
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3549_16733_3541_2736_3116_71532_3114_620_3108_55549_71_37
                        }
                      >
                        Edit
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={styles.View_I3549_16733_3541_2736_3116_71532_3114_621}
                >
                  <View
                    style={
                      styles.View_I3549_16733_3541_2736_3116_71532_3114_621_3108_55998
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3549_16733_3541_2736_3116_71532_3114_621_3108_55998
                      }
                    >
                      9.72 BNB
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I3549_16733_3546_15901}>
            <View style={styles.View_I3549_16733_3546_15901_3510_14252}>
              <View style={styles.View_I3549_16733_3546_15901_3510_14253}>
                <View
                  style={
                    styles.View_I3549_16733_3546_15901_3510_14253_3107_57106
                  }
                >
                  <View
                    style={
                      styles.View_I3549_16733_3546_15901_3510_14253_3107_57106_3108_55515
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3549_16733_3546_15901_3510_14253_3107_57106_3108_55515
                      }
                    >
                      Total Amount
                    </Text>
                  </View>
                </View>
                <View
                  style={
                    styles.View_I3549_16733_3546_15901_3510_14253_3107_57126
                  }
                >
                  <View
                    style={
                      styles.View_I3549_16733_3546_15901_3510_14253_3107_57126_3108_55996
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3549_16733_3546_15901_3510_14253_3107_57126_3108_55996
                      }
                    >
                      2.375.72 BNB
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I3549_16733_3546_15901_3510_14320}>
                <View style={styles.View_I3549_16733_3546_15901_3510_14322}>
                  <View
                    style={
                      styles.View_I3549_16733_3546_15901_3510_14322_3108_55998
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3549_16733_3546_15901_3510_14322_3108_55998
                      }
                    >
                      $ 584.85
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3549_16734}>
          <View style={styles.View_I3549_16734_3529_3059}>
            <View style={styles.View_I3549_16734_3529_3059_3107_57474}>
              <View
                style={styles.View_I3549_16734_3529_3059_3107_57474_3108_55510}
              >
                <View
                  style={
                    styles.View_I3549_16734_3529_3059_3107_57474_3108_55510_2747_42674
                  }
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe61/b251/e7655702102495e5023879d4d695669b"
                    }}
                    style={
                      styles.ImageBackground_I3549_16734_3529_3059_3107_57474_3108_55510_2747_42674_1899_17503
                    }
                  />
                  <View
                    style={
                      styles.View_I3549_16734_3529_3059_3107_57474_3108_55510_2747_42674_3419_12684
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3549_16734_3529_3059_3107_57474_3108_55510_2747_42674_3419_12684
                      }
                    >
                      🐼
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={styles.View_I3549_16734_3529_3059_3107_57474_3108_55509}
              >
                <Text
                  style={
                    styles.Text_I3549_16734_3529_3059_3107_57474_3108_55509
                  }
                >
                  Queen Bee
                </Text>
              </View>
            </View>
            <View style={styles.View_I3549_16734_3529_3059_3107_57475}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5aa8/34ff/2e286ffa7aa947dbb3751886547531d6"
                }}
                style={
                  styles.ImageBackground_I3549_16734_3529_3059_3107_57475_3108_55983
                }
              />
            </View>
          </View>
        </View>
        <View style={styles.View_3549_16735}>
          <View style={styles.View_I3549_16735_1897_13585}>
            <Text style={styles.Text_I3549_16735_1897_13585}>Send</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3658_30135}>
        <View style={styles.View_3549_16736}>
          <View style={styles.View_I3549_16736_3132_60698}>
            <View style={styles.View_I3549_16736_3497_159} />
            <View style={styles.View_I3549_16736_3132_60702} />
          </View>
        </View>
        <View style={styles.View_3549_16749}>
          <View style={styles.View_I3549_16749_588_9418}>
            <View style={styles.View_I3549_16749_588_9418_1897_13585}>
              <Text style={styles.Text_I3549_16749_588_9418_1897_13585}>
                Save
              </Text>
            </View>
          </View>
          <View style={styles.View_I3549_16749_588_9237}>
            <View style={styles.View_I3549_16749_588_9237_588_6333}>
              <View style={styles.View_I3549_16749_588_9237_588_6334} />
            </View>
            <View style={styles.View_I3549_16749_588_9237_588_6335}>
              <View style={styles.View_I3549_16749_588_9237_588_6336}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b99/977a/b3493996cf197ca9677edc8b23e88e10"
                  }}
                  style={styles.ImageBackground_I3549_16749_588_9237_588_6337}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b3e/483d/f61114dc40b5ceee9a4ec60b337e0aa2"
                  }}
                  style={styles.ImageBackground_I3549_16749_588_9237_588_6344}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                  }}
                  style={styles.ImageBackground_I3549_16749_588_9237_588_6345}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                  }}
                  style={styles.ImageBackground_I3549_16749_588_9237_588_6346}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                  }}
                  style={styles.ImageBackground_I3549_16749_588_9237_588_6347}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                  }}
                  style={styles.ImageBackground_I3549_16749_588_9237_588_6348}
                />
              </View>
              <View style={styles.View_I3549_16749_588_9237_588_6349}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9011/ef14/5ad221266f68fd001831408693e7634a"
                  }}
                  style={styles.ImageBackground_I3549_16749_588_9237_588_6350}
                />
                <View style={styles.View_I3549_16749_588_9237_588_6351}>
                  <Text style={styles.Text_I3549_16749_588_9237_588_6351}>
                    0
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3549_16749_588_9237_588_6352}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bc8/9aea/8d9724256090b48ce7aeda459954f17f"
                  }}
                  style={styles.ImageBackground_I3549_16749_588_9237_588_6353}
                />
                <View style={styles.View_I3549_16749_588_9237_588_6354}>
                  <Text style={styles.Text_I3549_16749_588_9237_588_6354}>
                    WXYZ
                  </Text>
                </View>
                <View style={styles.View_I3549_16749_588_9237_588_6355}>
                  <Text style={styles.Text_I3549_16749_588_9237_588_6355}>
                    9
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3549_16749_588_9237_588_6356}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bc8/9aea/8d9724256090b48ce7aeda459954f17f"
                  }}
                  style={styles.ImageBackground_I3549_16749_588_9237_588_6357}
                />
                <View style={styles.View_I3549_16749_588_9237_588_6358}>
                  <Text style={styles.Text_I3549_16749_588_9237_588_6358}>
                    TUV
                  </Text>
                </View>
                <View style={styles.View_I3549_16749_588_9237_588_6359}>
                  <Text style={styles.Text_I3549_16749_588_9237_588_6359}>
                    8
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3549_16749_588_9237_588_6360}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bc8/9aea/8d9724256090b48ce7aeda459954f17f"
                  }}
                  style={styles.ImageBackground_I3549_16749_588_9237_588_6361}
                />
                <View style={styles.View_I3549_16749_588_9237_588_6362}>
                  <Text style={styles.Text_I3549_16749_588_9237_588_6362}>
                    PQRS
                  </Text>
                </View>
                <View style={styles.View_I3549_16749_588_9237_588_6363}>
                  <Text style={styles.Text_I3549_16749_588_9237_588_6363}>
                    7
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3549_16749_588_9237_588_6364}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bc8/9aea/8d9724256090b48ce7aeda459954f17f"
                  }}
                  style={styles.ImageBackground_I3549_16749_588_9237_588_6365}
                />
                <View style={styles.View_I3549_16749_588_9237_588_6366}>
                  <Text style={styles.Text_I3549_16749_588_9237_588_6366}>
                    MNO
                  </Text>
                </View>
                <View style={styles.View_I3549_16749_588_9237_588_6367}>
                  <Text style={styles.Text_I3549_16749_588_9237_588_6367}>
                    6
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3549_16749_588_9237_588_6368}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bc8/9aea/8d9724256090b48ce7aeda459954f17f"
                  }}
                  style={styles.ImageBackground_I3549_16749_588_9237_588_6369}
                />
                <View style={styles.View_I3549_16749_588_9237_588_6370}>
                  <Text style={styles.Text_I3549_16749_588_9237_588_6370}>
                    JKL
                  </Text>
                </View>
                <View style={styles.View_I3549_16749_588_9237_588_6371}>
                  <Text style={styles.Text_I3549_16749_588_9237_588_6371}>
                    5
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3549_16749_588_9237_588_6372}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bc8/9aea/8d9724256090b48ce7aeda459954f17f"
                  }}
                  style={styles.ImageBackground_I3549_16749_588_9237_588_6373}
                />
                <View style={styles.View_I3549_16749_588_9237_588_6374}>
                  <Text style={styles.Text_I3549_16749_588_9237_588_6374}>
                    GHI
                  </Text>
                </View>
                <View style={styles.View_I3549_16749_588_9237_588_6375}>
                  <Text style={styles.Text_I3549_16749_588_9237_588_6375}>
                    4
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3549_16749_588_9237_588_6376}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9011/ef14/5ad221266f68fd001831408693e7634a"
                  }}
                  style={styles.ImageBackground_I3549_16749_588_9237_588_6377}
                />
                <View style={styles.View_I3549_16749_588_9237_588_6378}>
                  <Text style={styles.Text_I3549_16749_588_9237_588_6378}>
                    DEF
                  </Text>
                </View>
                <View style={styles.View_I3549_16749_588_9237_588_6379}>
                  <Text style={styles.Text_I3549_16749_588_9237_588_6379}>
                    3
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3549_16749_588_9237_588_6380}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9011/ef14/5ad221266f68fd001831408693e7634a"
                  }}
                  style={styles.ImageBackground_I3549_16749_588_9237_588_6381}
                />
                <View style={styles.View_I3549_16749_588_9237_588_6382}>
                  <Text style={styles.Text_I3549_16749_588_9237_588_6382}>
                    ABC
                  </Text>
                </View>
                <View style={styles.View_I3549_16749_588_9237_588_6383}>
                  <Text style={styles.Text_I3549_16749_588_9237_588_6383}>
                    2
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3549_16749_588_9237_588_6384}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9011/ef14/5ad221266f68fd001831408693e7634a"
                  }}
                  style={styles.ImageBackground_I3549_16749_588_9237_588_6385}
                />
                <View style={styles.View_I3549_16749_588_9237_588_6386}>
                  <Text style={styles.Text_I3549_16749_588_9237_588_6386}>
                    {" "}
                  </Text>
                </View>
                <View style={styles.View_I3549_16749_588_9237_588_6387}>
                  <Text style={styles.Text_I3549_16749_588_9237_588_6387}>
                    1
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3549_16737}>
          <View style={styles.View_3549_16738}>
            <View style={styles.View_3549_16739}>
              <View style={styles.View_I3549_16739_429_15620}>
                <Text style={styles.Text_I3549_16739_429_15620}>Basic</Text>
              </View>
            </View>
            <View style={styles.View_3549_16740}>
              <View style={styles.View_I3549_16740_429_15588}>
                <Text style={styles.Text_I3549_16740_429_15588}>Advanced</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3549_16741}>
            <View style={styles.View_3549_16742}>
              <View style={styles.View_I3549_16742_3114_6308}>
                <View style={styles.View_I3549_16742_3114_6308_3108_55554}>
                  <Text style={styles.Text_I3549_16742_3114_6308_3108_55554}>
                    Total
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3549_16742_3114_6309}>
                <View style={styles.View_I3549_16742_3114_6309_3108_55515}>
                  <Text style={styles.Text_I3549_16742_3114_6309_3108_55515}>
                    0.001638 BNB
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_3549_16743}>
              <View style={styles.View_3549_16744}>
                <Text style={styles.Text_3549_16744}>Gas Limit</Text>
              </View>
              <View style={styles.View_3549_16745}>
                <View style={styles.View_I3549_16745_1309_20953}>
                  <Text style={styles.Text_I3549_16745_1309_20953}>21000</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_3549_16746}>
              <View style={styles.View_3549_16747}>
                <Text style={styles.Text_3549_16747}>Gas Price: (GWEI)</Text>
              </View>
              <View style={styles.View_3549_16748}>
                <View style={styles.View_I3549_16748_1309_20953}>
                  <Text style={styles.Text_I3549_16748_1309_20953}>73</Text>
                </View>
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
  View_3549_16725: {
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
  View_3549_16726: {
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
  View_I3549_16726_3658_29598: {
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
  ImageBackground_I3549_16726_3658_29599: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.0109289617486334%")
  },
  View_I3549_16726_3658_29600: {
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
  View_I3549_16726_3658_29604: {
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
  View_I3549_16726_3658_29701: {
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
  View_I3549_16726_3658_29702: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_16726_3658_29702_2892_43256: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.27322404371584774%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3549_16726_3658_29702_2892_43256_2730_41734: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3549_16726_3658_29703: {
    width: wp("82.93333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("0%")
  },
  Text_I3549_16726_3658_29703: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3549_16728: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("30.327868852459016%")
  },
  View_3549_16729: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3549_16730: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.1857923497267713%")
  },
  View_3549_16731: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("0%")
  },
  Text_3549_16731: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3549_16732: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3549_16732_1309_20904: {
    flexGrow: 1,
    width: wp("28.000000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.185792349726775%")
  },
  Text_I3549_16732_1309_20904: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3549_16732_1309_20905: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.2786882640234105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.99999999999999%"),
    top: hp("2.185792349726775%")
  },
  View_3549_16733: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("28.142076502732237%"),
    minHeight: hp("28.142076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("49.45355191256831%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3549_16733_3541_2736: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3549_16733_3541_2736_3116_71530: {
    flexGrow: 1,
    width: wp("74.4%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_16733_3541_2736_3116_71531: {
    width: wp("74.4%"),
    minWidth: wp("74.4%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_16733_3541_2736_3116_71531_3107_57106: {
    flexGrow: 1,
    width: wp("44.266666666666666%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_16733_3541_2736_3116_71531_3107_57106_3108_55515: {
    flexGrow: 1,
    width: wp("44.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3549_16733_3541_2736_3116_71531_3107_57106_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3549_16733_3541_2736_3116_71531_3107_57126: {
    flexGrow: 1,
    width: wp("27.46666666666667%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.93333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_16733_3541_2736_3116_71531_3107_57126_3108_55996: {
    flexGrow: 1,
    width: wp("27.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3549_16733_3541_2736_3116_71531_3107_57126_3108_55996: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3549_16733_3541_2736_3116_71532: {
    width: wp("74.4%"),
    minWidth: wp("74.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535426%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_16733_3541_2736_3116_71532_3114_620: {
    flexGrow: 1,
    width: wp("54.93333333333334%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_16733_3541_2736_3116_71532_3114_620_3108_55548: {
    flexGrow: 1,
    width: wp("24.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3549_16733_3541_2736_3116_71532_3114_620_3108_55548: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3549_16733_3541_2736_3116_71532_3114_620_3108_55549: {
    flexGrow: 1,
    width: wp("10.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.933333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 254, 229, 1)"
  },
  View_I3549_16733_3541_2736_3116_71532_3114_620_3108_55549_71_37: {
    flexGrow: 1,
    width: wp("6.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("0%")
  },
  Text_I3549_16733_3541_2736_3116_71532_3114_620_3108_55549_71_37: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3549_16733_3541_2736_3116_71532_3114_621: {
    flexGrow: 1,
    width: wp("16.8%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.599999999999994%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_16733_3541_2736_3116_71532_3114_621_3108_55998: {
    flexGrow: 1,
    width: wp("18.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.86666666666666%"),
    top: hp("0%")
  },
  Text_I3549_16733_3541_2736_3116_71532_3114_621_3108_55998: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3549_16733_3546_15901: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.486338797814206%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3549_16733_3546_15901_3510_14252: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_16733_3546_15901_3510_14253: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_16733_3546_15901_3510_14253_3107_57106: {
    flexGrow: 1,
    width: wp("44.266666666666666%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_16733_3546_15901_3510_14253_3107_57106_3108_55515: {
    flexGrow: 1,
    width: wp("44.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3549_16733_3546_15901_3510_14253_3107_57106_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3549_16733_3546_15901_3510_14253_3107_57126: {
    flexGrow: 1,
    width: wp("31.733333333333334%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.93333333333332%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_16733_3546_15901_3510_14253_3107_57126_3108_55996: {
    flexGrow: 1,
    width: wp("31.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3549_16733_3546_15901_3510_14253_3107_57126_3108_55996: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3549_16733_3546_15901_3510_14320: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737707%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_16733_3546_15901_3510_14322: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.86666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_16733_3546_15901_3510_14322_3108_55998: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.3333333333333286%"),
    top: hp("0%")
  },
  Text_I3549_16733_3546_15901_3510_14322_3108_55998: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3549_16734: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("19.398907103825135%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_16734_3529_3059: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3549_16734_3529_3059_3107_57474: {
    flexGrow: 1,
    width: wp("69.6%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.6393442622950865%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_16734_3529_3059_3107_57474_3108_55510: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_16734_3529_3059_3107_57474_3108_55510_2747_42674: {
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
  ImageBackground_I3549_16734_3529_3059_3107_57474_3108_55510_2747_42674_1899_17503: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3549_16734_3529_3059_3107_57474_3108_55510_2747_42674_3419_12684: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.111067708333332%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3549_16734_3529_3059_3107_57474_3108_55510_2747_42674_3419_12684: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3549_16734_3529_3059_3107_57474_3108_55509: {
    flexGrow: 1,
    width: wp("56.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999997%"),
    top: hp("0.8196721311475379%")
  },
  Text_I3549_16734_3529_3059_3107_57474_3108_55509: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3549_16734_3529_3059_3107_57475: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%"),
    top: hp("2.7322404371584703%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3549_16734_3529_3059_3107_57475_3108_55983: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3549_16735: {
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
  View_I3549_16735_1897_13585: {
    flexGrow: 1,
    width: wp("10.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.13333333333334%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3549_16735_1897_13585: {
    color: "rgba(245, 250, 128, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3658_30135: {
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
  View_3549_16736: {
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
  View_I3549_16736_3132_60698: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("91.39357603312843%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.535385715505466%"),
    backgroundColor: "rgba(248, 248, 249, 1)"
  },
  View_I3549_16736_3497_159: {
    width: wp("12.8%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.6%"),
    top: hp("1.0928961748633874%"),
    backgroundColor: "rgba(209, 212, 219, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I3549_16736_3132_60702: {
    width: wp("0.00026666667933265365%"),
    minWidth: wp("0.00026666667933265365%"),
    height: hp("0.00013661202834664636%"),
    minHeight: hp("0.00013661202834664636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.99986979166667%"),
    top: hp("91.3934426229508%")
  },
  View_3549_16749: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("49.59016393442623%"),
    minHeight: hp("49.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("61.338797814207645%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_16749_588_9418: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I3549_16749_588_9418_1897_13585: {
    flexGrow: 1,
    width: wp("10.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.400000000000006%"),
    top: hp("2.185792349726782%")
  },
  Text_I3549_16749_588_9418_1897_13585: {
    color: "rgba(245, 250, 128, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3549_16749_588_9237: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.83606557377049%"),
    backgroundColor: "rgba(209, 213, 219, 1)"
  },
  View_I3549_16749_588_9237_588_6333: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%"),
    top: hp("35.10928961748634%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_16749_588_9237_588_6334: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I3549_16749_588_9237_588_6335: {
    flexGrow: 1,
    width: wp("96.8%"),
    height: hp("28.278688524590162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6%"),
    top: hp("0.8196721311475414%")
  },
  View_I3549_16749_588_9237_588_6336: {
    width: wp("6.400015258789063%"),
    height: hp("2.458269869694944%"),
    top: hp("23.770491803278702%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.66666666666667%")
  },
  ImageBackground_I3549_16749_588_9237_588_6337: {
    width: wp("6.400015258789063%"),
    height: hp("2.458269869694944%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3549_16749_588_9237_588_6344: {
    width: wp("1.8888968149820964%"),
    height: hp("0.9670806061374685%"),
    top: hp("0.7448957266051792%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9251302083333286%")
  },
  ImageBackground_I3549_16749_588_9237_588_6345: {
    width: wp("0.31888964970906575%"),
    height: hp("0.16337037086486816%"),
    top: hp("0.7198813183060082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.540364583333329%")
  },
  ImageBackground_I3549_16749_588_9237_588_6346: {
    width: wp("0.31906766891479493%"),
    height: hp("0.16337037086486816%"),
    top: hp("1.5713717768100963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8782552083333286%")
  },
  ImageBackground_I3549_16749_588_9237_588_6347: {
    width: wp("0.31889896392822265%"),
    height: hp("0.16354799596338324%"),
    top: hp("1.5713717768100963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.543098958333331%")
  },
  ImageBackground_I3549_16749_588_9237_588_6348: {
    width: wp("0.31889896392822265%"),
    height: hp("0.1635482891009805%"),
    top: hp("0.7199480233948066%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.881119791666663%")
  },
  View_I3549_16749_588_9237_588_6349: {
    width: wp("31.2%"),
    height: hp("6.284153005464481%"),
    top: hp("21.99453551912569%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3549_16749_588_9237_588_6350: {
    width: wp("31.2%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3549_16749_588_9237_588_6351: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("0.9562841530054698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3549_16749_588_9237_588_6351: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I3549_16749_588_9237_588_6352: {
    width: wp("31.2%"),
    height: hp("6.420765027322404%"),
    top: hp("14.617486338797818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.60000000000001%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3549_16749_588_9237_588_6353: {
    width: wp("31.2%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3549_16749_588_9237_588_6354: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("4.0478649035177625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3549_16749_588_9237_588_6354: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I3549_16749_588_9237_588_6355: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("0.139613750853826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3549_16749_588_9237_588_6355: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I3549_16749_588_9237_588_6356: {
    width: wp("31.2%"),
    height: hp("6.420765027322404%"),
    top: hp("14.617486338797818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3549_16749_588_9237_588_6357: {
    width: wp("31.2%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3549_16749_588_9237_588_6358: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("4.0478649035177625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3549_16749_588_9237_588_6358: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I3549_16749_588_9237_588_6359: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("0.139613750853826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3549_16749_588_9237_588_6359: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I3549_16749_588_9237_588_6360: {
    width: wp("31.2%"),
    height: hp("6.420765027322404%"),
    top: hp("14.617486338797818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3549_16749_588_9237_588_6361: {
    width: wp("31.2%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3549_16749_588_9237_588_6362: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("4.0478649035177625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3549_16749_588_9237_588_6362: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I3549_16749_588_9237_588_6363: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("0.139613750853826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3549_16749_588_9237_588_6363: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I3549_16749_588_9237_588_6364: {
    width: wp("31.2%"),
    height: hp("6.420765027322404%"),
    top: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.60000000000001%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3549_16749_588_9237_588_6365: {
    width: wp("31.2%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3549_16749_588_9237_588_6366: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("4.0478649035177625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3549_16749_588_9237_588_6366: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I3549_16749_588_9237_588_6367: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("0.1396137508538402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3549_16749_588_9237_588_6367: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I3549_16749_588_9237_588_6368: {
    width: wp("31.2%"),
    height: hp("6.420765027322404%"),
    top: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3549_16749_588_9237_588_6369: {
    width: wp("31.2%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3549_16749_588_9237_588_6370: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("4.0478649035177625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3549_16749_588_9237_588_6370: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I3549_16749_588_9237_588_6371: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("0.1396137508538402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3549_16749_588_9237_588_6371: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I3549_16749_588_9237_588_6372: {
    width: wp("31.2%"),
    height: hp("6.420765027322404%"),
    top: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3549_16749_588_9237_588_6373: {
    width: wp("31.2%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3549_16749_588_9237_588_6374: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("4.0478649035177625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3549_16749_588_9237_588_6374: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I3549_16749_588_9237_588_6375: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("0.1396137508538402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3549_16749_588_9237_588_6375: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I3549_16749_588_9237_588_6376: {
    width: wp("31.2%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.60000000000001%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3549_16749_588_9237_588_6377: {
    width: wp("31.2%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3549_16749_588_9237_588_6378: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("3.961748633879779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3549_16749_588_9237_588_6378: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I3549_16749_588_9237_588_6379: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3549_16749_588_9237_588_6379: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I3549_16749_588_9237_588_6380: {
    width: wp("31.2%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3549_16749_588_9237_588_6381: {
    width: wp("31.2%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3549_16749_588_9237_588_6382: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("3.961748633879779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3549_16749_588_9237_588_6382: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I3549_16749_588_9237_588_6383: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3549_16749_588_9237_588_6383: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I3549_16749_588_9237_588_6384: {
    width: wp("31.2%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3549_16749_588_9237_588_6385: {
    width: wp("31.2%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3549_16749_588_9237_588_6386: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("3.961748633879779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3549_16749_588_9237_588_6386: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I3549_16749_588_9237_588_6387: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3549_16749_588_9237_588_6387: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_3549_16737: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("32.240437158469945%"),
    minHeight: hp("32.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.81967213114754%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3549_16738: {
    width: wp("58.93333333333334%"),
    minWidth: wp("58.93333333333334%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3549_16739: {
    width: wp("29.06666666666667%"),
    minWidth: wp("29.06666666666667%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_16739_429_15620: {
    flexGrow: 1,
    width: wp("11.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("0.5464480874316955%")
  },
  Text_I3549_16739_429_15620: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3549_16740: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.06666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 249, 1)"
  },
  View_I3549_16740_429_15588: {
    flexGrow: 1,
    width: wp("21.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666659%"),
    top: hp("0.5464480874316955%")
  },
  Text_I3549_16740_429_15588: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3549_16741: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("24.59016393442623%"),
    minHeight: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3549_16742: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_16742_3114_6308: {
    flexGrow: 1,
    width: wp("29.86666666666667%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.3661202185792334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_16742_3114_6308_3108_55554: {
    flexGrow: 1,
    width: wp("29.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3549_16742_3114_6308_3108_55554: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3549_16742_3114_6309: {
    flexGrow: 1,
    width: wp("48.8%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.800000000000004%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_16742_3114_6309_3108_55515: {
    flexGrow: 1,
    width: wp("32.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3549_16742_3114_6309_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3549_16743: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3549_16744: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726775%")
  },
  Text_3549_16744: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3549_16745: {
    width: wp("49.86666666666667%"),
    minWidth: wp("49.86666666666667%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.13333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3549_16745_1309_20953: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("2.185792349726775%")
  },
  Text_I3549_16745_1309_20953: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3549_16746: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.466666666666667%"),
    top: hp("16.939890710382507%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3549_16747: {
    width: wp("35.733333333333334%"),
    minWidth: wp("35.733333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_3549_16747: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3549_16748: {
    width: wp("49.86666666666667%"),
    minWidth: wp("49.86666666666667%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.199999999999996%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3549_16748_1309_20953: {
    flexGrow: 1,
    width: wp("4.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666673%"),
    top: hp("2.185792349726782%")
  },
  Text_I3549_16748_1309_20953: {
    color: "rgba(9, 10, 11, 1)",
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
