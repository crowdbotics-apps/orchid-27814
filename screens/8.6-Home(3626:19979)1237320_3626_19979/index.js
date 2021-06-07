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
      <View style={styles.View_3962_10777}>
        <View style={styles.View_3962_10778}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8324/2d51/d66d1c4f842af3834a9199d686a982b2"
            }}
            style={styles.ImageBackground_3962_10779}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8324/2d51/d66d1c4f842af3834a9199d686a982b2"
            }}
            style={styles.ImageBackground_3962_10780}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e180/14fa/420b34ff5edb3d6879afa37569de707b"
            }}
            style={styles.ImageBackground_3962_10781}
          />
        </View>
        <View style={styles.View_3962_10782}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cfd/f5c0/e0647b8c69fe93fa4abaa700e208e9b2"
            }}
            style={styles.ImageBackground_3962_10783}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cfd/f5c0/e0647b8c69fe93fa4abaa700e208e9b2"
            }}
            style={styles.ImageBackground_3962_10784}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7f8/55d9/440d196f4bdc59482996a4edd9533082"
            }}
            style={styles.ImageBackground_3962_10785}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ff7/7558/9178664685ca9772dd932839a72fb1ca"
          }}
          style={styles.ImageBackground_3962_10786}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5c4/3826/81088fb63e96cfc2f7f69a2081648b4a"
          }}
          style={styles.ImageBackground_3962_10787}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/895d/d817/99168ebbcd85e835dc21b4dcb472e158"
          }}
          style={styles.ImageBackground_3962_10788}
        />
      </View>
      <View style={styles.View_3962_10789}>
        <View style={styles.View_3962_10790}>
          <View style={styles.View_I3962_10790_3116_60742}>
            <View style={styles.View_I3962_10790_3116_60742_3108_56209}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76a5/6967/c0ffb766ca4b98909700d157f2622325"
                }}
                style={
                  styles.ImageBackground_I3962_10790_3116_60742_3108_56209_2747_42674
                }
              />
            </View>
          </View>
          <View style={styles.View_I3962_10790_3116_60743}>
            <View style={styles.View_I3962_10790_3116_60744}>
              <View style={styles.View_I3962_10790_3116_60744_3107_57106}>
                <View
                  style={
                    styles.View_I3962_10790_3116_60744_3107_57106_3108_55515
                  }
                >
                  <Text
                    style={
                      styles.Text_I3962_10790_3116_60744_3107_57106_3108_55515
                    }
                  >
                    Ethereum
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3962_10790_3116_60744_3107_57126}>
                <View
                  style={
                    styles.View_I3962_10790_3116_60744_3107_57126_3108_55996
                  }
                >
                  <Text
                    style={
                      styles.Text_I3962_10790_3116_60744_3107_57126_3108_55996
                    }
                  >
                    2.5123 ETH
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I3962_10790_3116_60937}>
              <View style={styles.View_I3962_10790_3116_60937_3114_620}>
                <View
                  style={styles.View_I3962_10790_3116_60937_3114_620_3108_55554}
                >
                  <Text
                    style={
                      styles.Text_I3962_10790_3116_60937_3114_620_3108_55554
                    }
                  >
                    $ 1,722.2
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3962_10790_3116_60937_3114_621}>
                <View
                  style={styles.View_I3962_10790_3116_60937_3114_621_3108_55962}
                >
                  <View
                    style={
                      styles.View_I3962_10790_3116_60937_3114_621_3108_55962_2730_41734
                    }
                  >
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80be/d860/79bee10a8d86d0f776671e6595ec76fb"
                      }}
                      style={
                        styles.ImageBackground_I3962_10790_3116_60937_3114_621_3108_55962_2730_41734_3476_13755
                      }
                    />
                  </View>
                </View>
                <View
                  style={styles.View_I3962_10790_3116_60937_3114_621_3108_55963}
                >
                  <Text
                    style={
                      styles.Text_I3962_10790_3116_60937_3114_621_3108_55963
                    }
                  >
                    4.06%
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3962_10791}>
          <View style={styles.View_I3962_10791_3116_60742}>
            <View style={styles.View_I3962_10791_3116_60742_3108_56209}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76a5/6967/c0ffb766ca4b98909700d157f2622325"
                }}
                style={
                  styles.ImageBackground_I3962_10791_3116_60742_3108_56209_2747_42674
                }
              />
            </View>
          </View>
          <View style={styles.View_I3962_10791_3116_60743}>
            <View style={styles.View_I3962_10791_3116_60744}>
              <View style={styles.View_I3962_10791_3116_60744_3107_57106}>
                <View
                  style={
                    styles.View_I3962_10791_3116_60744_3107_57106_3108_55515
                  }
                >
                  <Text
                    style={
                      styles.Text_I3962_10791_3116_60744_3107_57106_3108_55515
                    }
                  >
                    Binance
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3962_10791_3116_60744_3107_57126}>
                <View
                  style={
                    styles.View_I3962_10791_3116_60744_3107_57126_3108_55996
                  }
                >
                  <Text
                    style={
                      styles.Text_I3962_10791_3116_60744_3107_57126_3108_55996
                    }
                  >
                    11.4188 BNB
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I3962_10791_3116_60937}>
              <View style={styles.View_I3962_10791_3116_60937_3114_620}>
                <View
                  style={styles.View_I3962_10791_3116_60937_3114_620_3108_55554}
                >
                  <Text
                    style={
                      styles.Text_I3962_10791_3116_60937_3114_620_3108_55554
                    }
                  >
                    $ 236.39
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3962_10791_3116_60937_3114_621}>
                <View
                  style={styles.View_I3962_10791_3116_60937_3114_621_3108_55962}
                >
                  <View
                    style={
                      styles.View_I3962_10791_3116_60937_3114_621_3108_55962_2730_41734
                    }
                  >
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80be/d860/79bee10a8d86d0f776671e6595ec76fb"
                      }}
                      style={
                        styles.ImageBackground_I3962_10791_3116_60937_3114_621_3108_55962_2730_41734_3476_13755
                      }
                    />
                  </View>
                </View>
                <View
                  style={styles.View_I3962_10791_3116_60937_3114_621_3108_55963}
                >
                  <Text
                    style={
                      styles.Text_I3962_10791_3116_60937_3114_621_3108_55963
                    }
                  >
                    3.38%
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3962_10792}>
          <View style={styles.View_I3962_10792_3116_60742}>
            <View style={styles.View_I3962_10792_3116_60742_3108_56209}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76a5/6967/c0ffb766ca4b98909700d157f2622325"
                }}
                style={
                  styles.ImageBackground_I3962_10792_3116_60742_3108_56209_2747_42674
                }
              />
            </View>
          </View>
          <View style={styles.View_I3962_10792_3116_60743}>
            <View style={styles.View_I3962_10792_3116_60744}>
              <View style={styles.View_I3962_10792_3116_60744_3107_57106}>
                <View
                  style={
                    styles.View_I3962_10792_3116_60744_3107_57106_3108_55515
                  }
                >
                  <Text
                    style={
                      styles.Text_I3962_10792_3116_60744_3107_57106_3108_55515
                    }
                  >
                    Binance
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3962_10792_3116_60744_3107_57126}>
                <View
                  style={
                    styles.View_I3962_10792_3116_60744_3107_57126_3108_55996
                  }
                >
                  <Text
                    style={
                      styles.Text_I3962_10792_3116_60744_3107_57126_3108_55996
                    }
                  >
                    11.4188 BNB
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I3962_10792_3116_60937}>
              <View style={styles.View_I3962_10792_3116_60937_3114_620}>
                <View
                  style={styles.View_I3962_10792_3116_60937_3114_620_3108_55554}
                >
                  <Text
                    style={
                      styles.Text_I3962_10792_3116_60937_3114_620_3108_55554
                    }
                  >
                    $ 236.39
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3962_10792_3116_60937_3114_621}>
                <View
                  style={styles.View_I3962_10792_3116_60937_3114_621_3108_55962}
                >
                  <View
                    style={
                      styles.View_I3962_10792_3116_60937_3114_621_3108_55962_2730_41734
                    }
                  >
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80be/d860/79bee10a8d86d0f776671e6595ec76fb"
                      }}
                      style={
                        styles.ImageBackground_I3962_10792_3116_60937_3114_621_3108_55962_2730_41734_3476_13755
                      }
                    />
                  </View>
                </View>
                <View
                  style={styles.View_I3962_10792_3116_60937_3114_621_3108_55963}
                >
                  <Text
                    style={
                      styles.Text_I3962_10792_3116_60937_3114_621_3108_55963
                    }
                  >
                    3.38%
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3962_10793}>
          <View style={styles.View_I3962_10793_3116_60742}>
            <View style={styles.View_I3962_10793_3116_60742_3108_56209}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76a5/6967/c0ffb766ca4b98909700d157f2622325"
                }}
                style={
                  styles.ImageBackground_I3962_10793_3116_60742_3108_56209_2747_42674
                }
              />
            </View>
          </View>
          <View style={styles.View_I3962_10793_3116_60743}>
            <View style={styles.View_I3962_10793_3116_60744}>
              <View style={styles.View_I3962_10793_3116_60744_3107_57106}>
                <View
                  style={
                    styles.View_I3962_10793_3116_60744_3107_57106_3108_55515
                  }
                >
                  <Text
                    style={
                      styles.Text_I3962_10793_3116_60744_3107_57106_3108_55515
                    }
                  >
                    Neo
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3962_10793_3116_60744_3107_57126}>
                <View
                  style={
                    styles.View_I3962_10793_3116_60744_3107_57126_3108_55996
                  }
                >
                  <Text
                    style={
                      styles.Text_I3962_10793_3116_60744_3107_57126_3108_55996
                    }
                  >
                    28.9371 NEO
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I3962_10793_3116_60937}>
              <View style={styles.View_I3962_10793_3116_60937_3114_620}>
                <View
                  style={styles.View_I3962_10793_3116_60937_3114_620_3108_55554}
                >
                  <Text
                    style={
                      styles.Text_I3962_10793_3116_60937_3114_620_3108_55554
                    }
                  >
                    $ 38.91
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3962_10793_3116_60937_3114_621}>
                <View
                  style={styles.View_I3962_10793_3116_60937_3114_621_3108_55962}
                >
                  <View
                    style={
                      styles.View_I3962_10793_3116_60937_3114_621_3108_55962_2730_41734
                    }
                  >
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80be/d860/79bee10a8d86d0f776671e6595ec76fb"
                      }}
                      style={
                        styles.ImageBackground_I3962_10793_3116_60937_3114_621_3108_55962_2730_41734_3476_13755
                      }
                    />
                  </View>
                </View>
                <View
                  style={styles.View_I3962_10793_3116_60937_3114_621_3108_55963}
                >
                  <Text
                    style={
                      styles.Text_I3962_10793_3116_60937_3114_621_3108_55963
                    }
                  >
                    0.56%
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3962_10794}>
          <View style={styles.View_I3962_10794_3116_60742}>
            <View style={styles.View_I3962_10794_3116_60742_3108_56209}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c18d/5482/01b6a783fc538e39cf9af9c691302541"
                }}
                style={
                  styles.ImageBackground_I3962_10794_3116_60742_3108_56209_2747_42674
                }
              />
            </View>
          </View>
          <View style={styles.View_I3962_10794_3116_60743}>
            <View style={styles.View_I3962_10794_3116_60744}>
              <View style={styles.View_I3962_10794_3116_60744_3107_57106}>
                <View
                  style={
                    styles.View_I3962_10794_3116_60744_3107_57106_3108_55515
                  }
                >
                  <Text
                    style={
                      styles.Text_I3962_10794_3116_60744_3107_57106_3108_55515
                    }
                  >
                    Litecoin
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3962_10794_3116_60744_3107_57126}>
                <View
                  style={
                    styles.View_I3962_10794_3116_60744_3107_57126_3108_55996
                  }
                >
                  <Text
                    style={
                      styles.Text_I3962_10794_3116_60744_3107_57126_3108_55996
                    }
                  >
                    1.3083 LTC
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I3962_10794_3116_60937}>
              <View style={styles.View_I3962_10794_3116_60937_3114_620}>
                <View
                  style={styles.View_I3962_10794_3116_60937_3114_620_3108_55554}
                >
                  <Text
                    style={
                      styles.Text_I3962_10794_3116_60937_3114_620_3108_55554
                    }
                  >
                    $ 188.39
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3962_10794_3116_60937_3114_621}>
                <View
                  style={styles.View_I3962_10794_3116_60937_3114_621_3108_55962}
                >
                  <View
                    style={
                      styles.View_I3962_10794_3116_60937_3114_621_3108_55962_2730_41734
                    }
                  >
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80be/d860/79bee10a8d86d0f776671e6595ec76fb"
                      }}
                      style={
                        styles.ImageBackground_I3962_10794_3116_60937_3114_621_3108_55962_2730_41734_3476_13755
                      }
                    />
                  </View>
                </View>
                <View
                  style={styles.View_I3962_10794_3116_60937_3114_621_3108_55963}
                >
                  <Text
                    style={
                      styles.Text_I3962_10794_3116_60937_3114_621_3108_55963
                    }
                  >
                    1.97%
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3962_10795}>
        <View style={styles.View_I3962_10795_1897_13587}>
          <View style={styles.View_I3962_10795_1897_13588}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c11a/637c/0761069cd3501b44c06dc2e026dcbffc"
              }}
              style={styles.ImageBackground_I3962_10795_1897_13588_2902_50720}
            />
          </View>
          <View style={styles.View_I3962_10795_1897_13589}>
            <Text style={styles.Text_I3962_10795_1897_13589}>Add Tokens</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3962_10796}>
        <View style={styles.View_3962_10797}>
          <View style={styles.View_I3962_10797_429_16484}>
            <Text style={styles.Text_I3962_10797_429_16484}>Tokens</Text>
          </View>
        </View>
        <View style={styles.View_3962_10798}>
          <View style={styles.View_I3962_10798_429_17100}>
            <Text style={styles.Text_I3962_10798_429_17100}>Collectibles</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3962_10799}>
        <View style={styles.View_3962_10800}>
          <Text style={styles.Text_3962_10800}>6.6096 ETH</Text>
        </View>
        <View style={styles.View_3962_10801}>
          <View style={styles.View_3962_10802}>
            <Text style={styles.Text_3962_10802}>$ 11,760.86</Text>
          </View>
          <View style={styles.View_3962_10803}>
            <View style={styles.View_3962_10804}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c0b/3e93/1f665032478b9cde28f7a328d1380b20"
                }}
                style={styles.ImageBackground_I3962_10804_3476_13755}
              />
            </View>
            <View style={styles.View_3962_10805}>
              <Text style={styles.Text_3962_10805}>9.97%</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3962_10806}>
        <View style={styles.View_3962_10807}>
          <View style={styles.View_I3962_10807_535_313}>
            <View style={styles.View_I3962_10807_535_314}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c66d/b8bf/c95e612446412b3487138da1d9b75691"
                }}
                style={styles.ImageBackground_I3962_10807_535_314_3933_8}
              />
            </View>
            <View style={styles.View_I3962_10807_535_315}>
              <Text style={styles.Text_I3962_10807_535_315}>Send</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3962_10808}>
          <View style={styles.View_I3962_10808_535_313}>
            <View style={styles.View_I3962_10808_535_314}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f40/87ea/efd749dff672e9956789fec825a98488"
                }}
                style={styles.ImageBackground_I3962_10808_535_314_3933_276}
              />
            </View>
            <View style={styles.View_I3962_10808_535_315}>
              <Text style={styles.Text_I3962_10808_535_315}>Receive</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3962_10809}>
          <View style={styles.View_I3962_10809_535_313}>
            <View style={styles.View_I3962_10809_535_314}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c2f/d999/0bd7ce26b541cccce7d42bed6aee3c69"
                }}
                style={styles.ImageBackground_I3962_10809_535_314_3470_1356}
              />
            </View>
            <View style={styles.View_I3962_10809_535_315}>
              <Text style={styles.Text_I3962_10809_535_315}>Buy</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3962_10810}>
        <View style={styles.View_3962_10811}>
          <View style={styles.View_3962_10812}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe61/b251/e7655702102495e5023879d4d695669b"
              }}
              style={styles.ImageBackground_I3962_10812_1899_17503}
            />
            <View style={styles.View_I3962_10812_3419_12684}>
              <Text style={styles.Text_I3962_10812_3419_12684}>🐼</Text>
            </View>
          </View>
          <View style={styles.View_3962_10813}>
            <Text style={styles.Text_3962_10813}>Queen Bee</Text>
          </View>
        </View>
        <View style={styles.View_3962_10814}>
          <View style={styles.View_3962_10815}>
            <Text style={styles.Text_3962_10815}>• Ethereum network</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dab/8baf/e3c2ed97082ae065dc6afe8662df2beb"
            }}
            style={styles.ImageBackground_3962_10816}
          />
        </View>
      </View>
      <View style={styles.View_3962_10817}>
        <View style={styles.View_I3962_10817_3497_1542} />
        <View style={styles.View_I3962_10817_3497_1618}>
          <View style={styles.View_I3962_10817_3497_1618_3497_1596}>
            <View
              style={styles.View_I3962_10817_3497_1618_3497_1596_2730_41734}
            >
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ca7/49c3/8cc9eb358376cd8b6309ddf9aec74f10"
                }}
                style={
                  styles.ImageBackground_I3962_10817_3497_1618_3497_1596_2730_41734_3419_13598
                }
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I3962_10817_3497_1614}>
          <View style={styles.View_I3962_10817_3497_1614_3497_1596}>
            <View
              style={styles.View_I3962_10817_3497_1614_3497_1596_2730_41734}
            >
              <View
                style={
                  styles.View_I3962_10817_3497_1614_3497_1596_2730_41734_3020_52674
                }
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f8c/683d/24b08c1b3d168d77598fe650cf1d781d"
                  }}
                  style={
                    styles.ImageBackground_I3962_10817_3497_1614_3497_1596_2730_41734_3020_52675
                  }
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I3962_10817_3497_1610}>
          <View style={styles.View_I3962_10817_3497_1610_3497_1596}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5fe7/4112/6328a1a25ab49f7fb6b024c3e7f30062"
              }}
              style={
                styles.ImageBackground_I3962_10817_3497_1610_3497_1596_3477_12778
              }
            />
          </View>
        </View>
        <View style={styles.View_I3962_10817_3497_1605}>
          <View style={styles.View_I3962_10817_3497_1605_3497_1584}>
            <View
              style={styles.View_I3962_10817_3497_1605_3497_1584_2730_41734}
            >
              <View
                style={
                  styles.View_I3962_10817_3497_1605_3497_1584_2730_41734_2993_53328
                }
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa2/5f5f/a42c850799b03f6201cdcb023cae896e"
                  }}
                  style={
                    styles.ImageBackground_I3962_10817_3497_1605_3497_1584_2730_41734_2993_53329
                  }
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I3962_10817_3497_1605_3497_1585}>
            <Text style={styles.Text_I3962_10817_3497_1605_3497_1585}>
              Wallet
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
  View_3962_10777: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("11.807953464528902%"),
    minHeight: hp("11.807953464528902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.26666666666667%"),
    top: hp("11.748633879781421%")
  },
  View_3962_10778: {
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
  ImageBackground_3962_10779: {
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
  ImageBackground_3962_10780: {
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
  ImageBackground_3962_10781: {
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
  View_3962_10782: {
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
  ImageBackground_3962_10783: {
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
  ImageBackground_3962_10784: {
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
  ImageBackground_3962_10785: {
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
  ImageBackground_3962_10786: {
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
  ImageBackground_3962_10787: {
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
  ImageBackground_3962_10788: {
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
  View_3962_10789: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("59.83606557377049%"),
    minHeight: hp("59.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("47.26775956284153%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3962_10790: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3962_10790_3116_60742: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.5956284153005456%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10790_3116_60742_3108_56209: {
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
  ImageBackground_I3962_10790_3116_60742_3108_56209_2747_42674: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3962_10790_3116_60743: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666663%"),
    top: hp("1.6393442622950758%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10790_3116_60744: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10790_3116_60744_3107_57106: {
    flexGrow: 1,
    width: wp("37.06666666666666%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10790_3116_60744_3107_57106_3108_55515: {
    flexGrow: 1,
    width: wp("37.06666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3962_10790_3116_60744_3107_57106_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3962_10790_3116_60744_3107_57126: {
    flexGrow: 1,
    width: wp("26.13333333333333%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.733333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10790_3116_60744_3107_57126_3108_55996: {
    flexGrow: 1,
    width: wp("26.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3962_10790_3116_60744_3107_57126_3108_55996: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3962_10790_3116_60937: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737714%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10790_3116_60937_3114_620: {
    flexGrow: 1,
    width: wp("46.400000000000006%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10790_3116_60937_3114_620_3108_55554: {
    flexGrow: 1,
    width: wp("18.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3962_10790_3116_60937_3114_620_3108_55554: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3962_10790_3116_60937_3114_621: {
    flexGrow: 1,
    width: wp("16.8%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.06666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10790_3116_60937_3114_621_3108_55962: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.266666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10790_3116_60937_3114_621_3108_55962_2730_41734: {
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
  ImageBackground_I3962_10790_3116_60937_3114_621_3108_55962_2730_41734_3476_13755: {
    flexGrow: 1,
    width: wp("2.653333282470703%"),
    height: hp("1.35928972171304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8799479166666657%"),
    top: hp("0.9562841530054556%")
  },
  View_I3962_10790_3116_60937_3114_621_3108_55963: {
    flexGrow: 1,
    width: wp("12.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("0%")
  },
  Text_I3962_10790_3116_60937_3114_621_3108_55963: {
    color: "rgba(16, 140, 74, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3962_10791: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.295081967213108%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3962_10791_3116_60742: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.5956284153005456%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10791_3116_60742_3108_56209: {
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
  ImageBackground_I3962_10791_3116_60742_3108_56209_2747_42674: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3962_10791_3116_60743: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666663%"),
    top: hp("1.63934426229509%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10791_3116_60744: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10791_3116_60744_3107_57106: {
    flexGrow: 1,
    width: wp("35.199999999999996%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10791_3116_60744_3107_57106_3108_55515: {
    flexGrow: 1,
    width: wp("35.199999999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3962_10791_3116_60744_3107_57106_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3962_10791_3116_60744_3107_57126: {
    flexGrow: 1,
    width: wp("28.000000000000004%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.86666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10791_3116_60744_3107_57126_3108_55996: {
    flexGrow: 1,
    width: wp("28.000000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3962_10791_3116_60744_3107_57126_3108_55996: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3962_10791_3116_60937: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.0983606557377%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10791_3116_60937_3114_620: {
    flexGrow: 1,
    width: wp("46.400000000000006%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10791_3116_60937_3114_620_3108_55554: {
    flexGrow: 1,
    width: wp("18.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3962_10791_3116_60937_3114_620_3108_55554: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3962_10791_3116_60937_3114_621: {
    flexGrow: 1,
    width: wp("16.8%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.06666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10791_3116_60937_3114_621_3108_55962: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.266666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10791_3116_60937_3114_621_3108_55962_2730_41734: {
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
  ImageBackground_I3962_10791_3116_60937_3114_621_3108_55962_2730_41734_3476_13755: {
    flexGrow: 1,
    width: wp("2.653333282470703%"),
    height: hp("1.35928972171304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8799479166666657%"),
    top: hp("0.9562841530054698%")
  },
  View_I3962_10791_3116_60937_3114_621_3108_55963: {
    flexGrow: 1,
    width: wp("12.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("0%")
  },
  Text_I3962_10791_3116_60937_3114_621_3108_55963: {
    color: "rgba(16, 140, 74, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3962_10792: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.59016393442623%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3962_10792_3116_60742: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.5956284153005384%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10792_3116_60742_3108_56209: {
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
  ImageBackground_I3962_10792_3116_60742_3108_56209_2747_42674: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3962_10792_3116_60743: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666663%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10792_3116_60744: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10792_3116_60744_3107_57106: {
    flexGrow: 1,
    width: wp("35.199999999999996%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10792_3116_60744_3107_57106_3108_55515: {
    flexGrow: 1,
    width: wp("35.199999999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3962_10792_3116_60744_3107_57106_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3962_10792_3116_60744_3107_57126: {
    flexGrow: 1,
    width: wp("28.000000000000004%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.86666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10792_3116_60744_3107_57126_3108_55996: {
    flexGrow: 1,
    width: wp("28.000000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3962_10792_3116_60744_3107_57126_3108_55996: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3962_10792_3116_60937: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737693%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10792_3116_60937_3114_620: {
    flexGrow: 1,
    width: wp("46.400000000000006%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10792_3116_60937_3114_620_3108_55554: {
    flexGrow: 1,
    width: wp("18.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3962_10792_3116_60937_3114_620_3108_55554: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3962_10792_3116_60937_3114_621: {
    flexGrow: 1,
    width: wp("16.8%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.06666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10792_3116_60937_3114_621_3108_55962: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.266666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10792_3116_60937_3114_621_3108_55962_2730_41734: {
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
  ImageBackground_I3962_10792_3116_60937_3114_621_3108_55962_2730_41734_3476_13755: {
    flexGrow: 1,
    width: wp("2.653333282470703%"),
    height: hp("1.35928972171304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8799479166666657%"),
    top: hp("0.9562841530054698%")
  },
  View_I3962_10792_3116_60937_3114_621_3108_55963: {
    flexGrow: 1,
    width: wp("12.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("0%")
  },
  Text_I3962_10792_3116_60937_3114_621_3108_55963: {
    color: "rgba(16, 140, 74, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3962_10793: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.88524590163935%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3962_10793_3116_60742: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.5956284153005384%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10793_3116_60742_3108_56209: {
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
  ImageBackground_I3962_10793_3116_60742_3108_56209_2747_42674: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3962_10793_3116_60743: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666663%"),
    top: hp("1.6393442622950687%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10793_3116_60744: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10793_3116_60744_3107_57106: {
    flexGrow: 1,
    width: wp("33.6%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10793_3116_60744_3107_57106_3108_55515: {
    flexGrow: 1,
    width: wp("33.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3962_10793_3116_60744_3107_57106_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3962_10793_3116_60744_3107_57126: {
    flexGrow: 1,
    width: wp("29.599999999999998%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.26666666666668%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10793_3116_60744_3107_57126_3108_55996: {
    flexGrow: 1,
    width: wp("29.599999999999998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3962_10793_3116_60744_3107_57126_3108_55996: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3962_10793_3116_60937: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737707%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10793_3116_60937_3114_620: {
    flexGrow: 1,
    width: wp("46.400000000000006%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10793_3116_60937_3114_620_3108_55554: {
    flexGrow: 1,
    width: wp("15.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3962_10793_3116_60937_3114_620_3108_55554: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3962_10793_3116_60937_3114_621: {
    flexGrow: 1,
    width: wp("16.8%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.06666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10793_3116_60937_3114_621_3108_55962: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.266666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10793_3116_60937_3114_621_3108_55962_2730_41734: {
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
  ImageBackground_I3962_10793_3116_60937_3114_621_3108_55962_2730_41734_3476_13755: {
    flexGrow: 1,
    width: wp("2.653333282470703%"),
    height: hp("1.35928972171304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8799479166666657%"),
    top: hp("0.9562841530054556%")
  },
  View_I3962_10793_3116_60937_3114_621_3108_55963: {
    flexGrow: 1,
    width: wp("12.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("0%")
  },
  Text_I3962_10793_3116_60937_3114_621_3108_55963: {
    color: "rgba(16, 140, 74, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3962_10794: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49.18032786885246%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3962_10794_3116_60742: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.5956284153005527%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10794_3116_60742_3108_56209: {
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
  ImageBackground_I3962_10794_3116_60742_3108_56209_2747_42674: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3962_10794_3116_60743: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666663%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10794_3116_60744: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10794_3116_60744_3107_57106: {
    flexGrow: 1,
    width: wp("37.86666666666667%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10794_3116_60744_3107_57106_3108_55515: {
    flexGrow: 1,
    width: wp("37.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3962_10794_3116_60744_3107_57106_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3962_10794_3116_60744_3107_57126: {
    flexGrow: 1,
    width: wp("25.333333333333336%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.53333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10794_3116_60744_3107_57126_3108_55996: {
    flexGrow: 1,
    width: wp("25.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3962_10794_3116_60744_3107_57126_3108_55996: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3962_10794_3116_60937: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737707%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10794_3116_60937_3114_620: {
    flexGrow: 1,
    width: wp("46.400000000000006%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10794_3116_60937_3114_620_3108_55554: {
    flexGrow: 1,
    width: wp("17.599999999999998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3962_10794_3116_60937_3114_620_3108_55554: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3962_10794_3116_60937_3114_621: {
    flexGrow: 1,
    width: wp("16.8%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.06666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10794_3116_60937_3114_621_3108_55962: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3.1999999999999886%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10794_3116_60937_3114_621_3108_55962_2730_41734: {
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
  ImageBackground_I3962_10794_3116_60937_3114_621_3108_55962_2730_41734_3476_13755: {
    flexGrow: 1,
    width: wp("2.653333282470703%"),
    height: hp("1.35928972171304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8799479166666657%"),
    top: hp("0.9562841530054556%")
  },
  View_I3962_10794_3116_60937_3114_621_3108_55963: {
    flexGrow: 1,
    width: wp("11.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333329%"),
    top: hp("0%")
  },
  Text_I3962_10794_3116_60937_3114_621_3108_55963: {
    color: "rgba(16, 140, 74, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3962_10795: {
    width: wp("41.86666666666667%"),
    minWidth: wp("41.86666666666667%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.06666666666667%"),
    top: hp("88.79781420765028%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I3962_10795_1897_13587: {
    flexGrow: 1,
    width: wp("33.33333333333333%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666659%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10795_1897_13588: {
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
  ImageBackground_I3962_10795_1897_13588_2902_50720: {
    flexGrow: 1,
    width: wp("3.733333333333334%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333428%"),
    top: hp("0.6830601092896131%")
  },
  View_I3962_10795_1897_13589: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333339%"),
    top: hp("0%")
  },
  Text_I3962_10795_1897_13589: {
    color: "rgba(245, 250, 128, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3962_10796: {
    width: wp("61.33333333333333%"),
    minWidth: wp("61.33333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("38.52459016393443%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3962_10797: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 249, 1)"
  },
  View_I3962_10797_429_16484: {
    flexGrow: 1,
    width: wp("17.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.866666666666667%"),
    top: hp("1.3661202185792334%")
  },
  Text_I3962_10797_429_16484: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3962_10798: {
    width: wp("36.53333333333333%"),
    minWidth: wp("36.53333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.799999999999997%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10798_429_17100: {
    flexGrow: 1,
    width: wp("28.000000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666669%"),
    top: hp("1.3661202185792334%")
  },
  Text_I3962_10798_429_17100: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3962_10799: {
    width: wp("53.6%"),
    minWidth: wp("53.6%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("15.300546448087433%")
  },
  View_3962_10800: {
    width: wp("50.93333333333333%"),
    minWidth: wp("50.93333333333333%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3962_10800: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 27,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3962_10801: {
    width: wp("53.6%"),
    minWidth: wp("53.6%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.377049180327868%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3962_10802: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3962_10802: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3962_10803: {
    width: wp("20.8%"),
    minWidth: wp("20.8%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.800000000000004%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3962_10804: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3962_10804_3476_13755: {
    flexGrow: 1,
    width: wp("1.7688887278238932%"),
    height: hp("0.9061931260947972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2533203125000014%"),
    top: hp("0.6375672387295097%")
  },
  View_3962_10805: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333336%"),
    top: hp("0%")
  },
  Text_3962_10805: {
    color: "rgba(16, 140, 74, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3962_10806: {
    width: wp("88.8%"),
    minWidth: wp("88.8%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("29.78142076502732%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3962_10807: {
    width: wp("25.866666666666667%"),
    minWidth: wp("25.866666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(215, 228, 227, 1)"
  },
  View_I3962_10807_535_313: {
    flexGrow: 1,
    width: wp("19.466666666666665%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("1.6393442622950865%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10807_535_314: {
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
  ImageBackground_I3962_10807_535_314_3933_8: {
    flexGrow: 1,
    width: wp("4.278109741210938%"),
    height: hp("2.1860656842507953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666682%"),
    top: hp("0.5464480874316955%")
  },
  View_I3962_10807_535_315: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("0%")
  },
  Text_I3962_10807_535_315: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3962_10808: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.133333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(215, 228, 227, 1)"
  },
  View_I3962_10808_535_313: {
    flexGrow: 1,
    width: wp("25.066666666666666%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("1.6393442622950865%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10808_535_314: {
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
  ImageBackground_I3962_10808_535_314_3933_276: {
    flexGrow: 1,
    width: wp("4.761599731445313%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.4098360655737707%")
  },
  View_I3962_10808_535_315: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%"),
    top: hp("0%")
  },
  Text_I3962_10808_535_315: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3962_10809: {
    width: wp("22.933333333333334%"),
    minWidth: wp("22.933333333333334%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.86666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(215, 228, 227, 1)"
  },
  View_I3962_10809_535_313: {
    flexGrow: 1,
    width: wp("16.53333333333333%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("1.6393442622950865%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10809_535_314: {
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
  ImageBackground_I3962_10809_535_314_3470_1356: {
    flexGrow: 1,
    width: wp("4.800002034505209%"),
    height: hp("2.4405943239972894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.4098360655737707%")
  },
  View_I3962_10809_535_315: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%"),
    top: hp("0%")
  },
  Text_I3962_10809_535_315: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3962_10810: {
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
  View_3962_10811: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0.27322404371584774%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3962_10812: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3962_10812_1899_17503: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3962_10812_3419_12684: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1111328124999993%"),
    top: hp("1.0928961748633874%")
  },
  Text_I3962_10812_3419_12684: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3962_10813: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666667%"),
    top: hp("1.0928961748633874%")
  },
  Text_3962_10813: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3962_10814: {
    width: wp("37.06666666666666%"),
    minWidth: wp("37.06666666666666%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.666666666666664%"),
    top: hp("1.7759562841530059%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3962_10815: {
    flexGrow: 1,
    width: wp("30.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3962_10815: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3962_10816: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.800000000000004%")
  },
  View_3962_10817: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%"),
    top: hp("98.63387978142076%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10817_3497_1542: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
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
  View_I3962_10817_3497_1618: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.733333333333334%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10817_3497_1618_3497_1596: {
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
  View_I3962_10817_3497_1618_3497_1596_2730_41734: {
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
  ImageBackground_I3962_10817_3497_1618_3497_1596_2730_41734_3419_13598: {
    flexGrow: 1,
    width: wp("4.910625203450521%"),
    height: hp("2.459242304817575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.40983606557378494%")
  },
  View_I3962_10817_3497_1614: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.53333333333333%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10817_3497_1614_3497_1596: {
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
  View_I3962_10817_3497_1614_3497_1596_2730_41734: {
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
  View_I3962_10817_3497_1614_3497_1596_2730_41734_3020_52674: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3962_10817_3497_1614_3497_1596_2730_41734_3020_52675: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3962_10817_3497_1610: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.33333333333333%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10817_3497_1610_3497_1596: {
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
  ImageBackground_I3962_10817_3497_1610_3497_1596_3477_12778: {
    flexGrow: 1,
    width: wp("4.799996948242188%"),
    height: hp("1.6686218032420006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000043%"),
    top: hp("0.8196721311475557%")
  },
  View_I3962_10817_3497_1605: {
    flexGrow: 1,
    width: wp("18.666666666666668%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3962_10817_3497_1605_3497_1584: {
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
  View_I3962_10817_3497_1605_3497_1584_2730_41734: {
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
  View_I3962_10817_3497_1605_3497_1584_2730_41734_2993_53328: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3962_10817_3497_1605_3497_1584_2730_41734_2993_53329: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3962_10817_3497_1605_3497_1585: {
    flexGrow: 1,
    width: wp("11.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.93333333333333%"),
    top: hp("0.1366120218579283%")
  },
  Text_I3962_10817_3497_1605_3497_1585: {
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
