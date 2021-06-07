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
      <View style={styles.View_3943_6575}>
        <View style={styles.View_I3943_6575_3936_931}>
          <View style={styles.View_I3943_6575_3936_932}>
            <View style={styles.View_I3943_6575_3936_932_3116_60742}>
              <View
                style={styles.View_I3943_6575_3936_932_3116_60742_3108_56209}
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76a5/6967/c0ffb766ca4b98909700d157f2622325"
                  }}
                  style={
                    styles.ImageBackground_I3943_6575_3936_932_3116_60742_3108_56209_2747_42674
                  }
                />
              </View>
            </View>
            <View style={styles.View_I3943_6575_3936_932_3116_60743}>
              <View style={styles.View_I3943_6575_3936_932_3116_60744}>
                <View
                  style={styles.View_I3943_6575_3936_932_3116_60744_3107_57106}
                >
                  <View
                    style={
                      styles.View_I3943_6575_3936_932_3116_60744_3107_57106_3108_55515
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3943_6575_3936_932_3116_60744_3107_57106_3108_55515
                      }
                    >
                      Ethereum
                    </Text>
                  </View>
                </View>
                <View
                  style={styles.View_I3943_6575_3936_932_3116_60744_3107_57126}
                >
                  <View
                    style={
                      styles.View_I3943_6575_3936_932_3116_60744_3107_57126_3108_55996
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3943_6575_3936_932_3116_60744_3107_57126_3108_55996
                      }
                    >
                      2.5123 ETH
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I3943_6575_3936_932_3116_60937}>
                <View
                  style={styles.View_I3943_6575_3936_932_3116_60937_3114_620}
                >
                  <View
                    style={
                      styles.View_I3943_6575_3936_932_3116_60937_3114_620_3108_55554
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3943_6575_3936_932_3116_60937_3114_620_3108_55554
                      }
                    >
                      $ 1,722.2
                    </Text>
                  </View>
                </View>
                <View
                  style={styles.View_I3943_6575_3936_932_3116_60937_3114_621}
                >
                  <View
                    style={
                      styles.View_I3943_6575_3936_932_3116_60937_3114_621_3108_55962
                    }
                  >
                    <View
                      style={
                        styles.View_I3943_6575_3936_932_3116_60937_3114_621_3108_55962_2730_41734
                      }
                    >
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80be/d860/79bee10a8d86d0f776671e6595ec76fb"
                        }}
                        style={
                          styles.ImageBackground_I3943_6575_3936_932_3116_60937_3114_621_3108_55962_2730_41734_3476_13755
                        }
                      />
                    </View>
                  </View>
                  <View
                    style={
                      styles.View_I3943_6575_3936_932_3116_60937_3114_621_3108_55963
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3943_6575_3936_932_3116_60937_3114_621_3108_55963
                      }
                    >
                      4.06%
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I3943_6575_3936_933}>
            <View style={styles.View_I3943_6575_3936_933_3116_60742}>
              <View
                style={styles.View_I3943_6575_3936_933_3116_60742_3108_56209}
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76a5/6967/c0ffb766ca4b98909700d157f2622325"
                  }}
                  style={
                    styles.ImageBackground_I3943_6575_3936_933_3116_60742_3108_56209_2747_42674
                  }
                />
              </View>
            </View>
            <View style={styles.View_I3943_6575_3936_933_3116_60743}>
              <View style={styles.View_I3943_6575_3936_933_3116_60744}>
                <View
                  style={styles.View_I3943_6575_3936_933_3116_60744_3107_57106}
                >
                  <View
                    style={
                      styles.View_I3943_6575_3936_933_3116_60744_3107_57106_3108_55515
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3943_6575_3936_933_3116_60744_3107_57106_3108_55515
                      }
                    >
                      Binance
                    </Text>
                  </View>
                </View>
                <View
                  style={styles.View_I3943_6575_3936_933_3116_60744_3107_57126}
                >
                  <View
                    style={
                      styles.View_I3943_6575_3936_933_3116_60744_3107_57126_3108_55996
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3943_6575_3936_933_3116_60744_3107_57126_3108_55996
                      }
                    >
                      11.4188 BNB
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I3943_6575_3936_933_3116_60937}>
                <View
                  style={styles.View_I3943_6575_3936_933_3116_60937_3114_620}
                >
                  <View
                    style={
                      styles.View_I3943_6575_3936_933_3116_60937_3114_620_3108_55554
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3943_6575_3936_933_3116_60937_3114_620_3108_55554
                      }
                    >
                      $ 236.39
                    </Text>
                  </View>
                </View>
                <View
                  style={styles.View_I3943_6575_3936_933_3116_60937_3114_621}
                >
                  <View
                    style={
                      styles.View_I3943_6575_3936_933_3116_60937_3114_621_3108_55962
                    }
                  >
                    <View
                      style={
                        styles.View_I3943_6575_3936_933_3116_60937_3114_621_3108_55962_2730_41734
                      }
                    >
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80be/d860/79bee10a8d86d0f776671e6595ec76fb"
                        }}
                        style={
                          styles.ImageBackground_I3943_6575_3936_933_3116_60937_3114_621_3108_55962_2730_41734_3476_13755
                        }
                      />
                    </View>
                  </View>
                  <View
                    style={
                      styles.View_I3943_6575_3936_933_3116_60937_3114_621_3108_55963
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3943_6575_3936_933_3116_60937_3114_621_3108_55963
                      }
                    >
                      3.38%
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I3943_6575_3936_934}>
            <View style={styles.View_I3943_6575_3936_934_3116_60742}>
              <View
                style={styles.View_I3943_6575_3936_934_3116_60742_3108_56209}
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76a5/6967/c0ffb766ca4b98909700d157f2622325"
                  }}
                  style={
                    styles.ImageBackground_I3943_6575_3936_934_3116_60742_3108_56209_2747_42674
                  }
                />
              </View>
            </View>
            <View style={styles.View_I3943_6575_3936_934_3116_60743}>
              <View style={styles.View_I3943_6575_3936_934_3116_60744}>
                <View
                  style={styles.View_I3943_6575_3936_934_3116_60744_3107_57106}
                >
                  <View
                    style={
                      styles.View_I3943_6575_3936_934_3116_60744_3107_57106_3108_55515
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3943_6575_3936_934_3116_60744_3107_57106_3108_55515
                      }
                    >
                      Neo
                    </Text>
                  </View>
                </View>
                <View
                  style={styles.View_I3943_6575_3936_934_3116_60744_3107_57126}
                >
                  <View
                    style={
                      styles.View_I3943_6575_3936_934_3116_60744_3107_57126_3108_55996
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3943_6575_3936_934_3116_60744_3107_57126_3108_55996
                      }
                    >
                      28.9371 NEO
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I3943_6575_3936_934_3116_60937}>
                <View
                  style={styles.View_I3943_6575_3936_934_3116_60937_3114_620}
                >
                  <View
                    style={
                      styles.View_I3943_6575_3936_934_3116_60937_3114_620_3108_55554
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3943_6575_3936_934_3116_60937_3114_620_3108_55554
                      }
                    >
                      $ 38.91
                    </Text>
                  </View>
                </View>
                <View
                  style={styles.View_I3943_6575_3936_934_3116_60937_3114_621}
                >
                  <View
                    style={
                      styles.View_I3943_6575_3936_934_3116_60937_3114_621_3108_55962
                    }
                  >
                    <View
                      style={
                        styles.View_I3943_6575_3936_934_3116_60937_3114_621_3108_55962_2730_41734
                      }
                    >
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80be/d860/79bee10a8d86d0f776671e6595ec76fb"
                        }}
                        style={
                          styles.ImageBackground_I3943_6575_3936_934_3116_60937_3114_621_3108_55962_2730_41734_3476_13755
                        }
                      />
                    </View>
                  </View>
                  <View
                    style={
                      styles.View_I3943_6575_3936_934_3116_60937_3114_621_3108_55963
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3943_6575_3936_934_3116_60937_3114_621_3108_55963
                      }
                    >
                      0.56%
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I3943_6575_3936_935}>
            <View style={styles.View_I3943_6575_3936_935_3116_60742}>
              <View
                style={styles.View_I3943_6575_3936_935_3116_60742_3108_56209}
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c18d/5482/01b6a783fc538e39cf9af9c691302541"
                  }}
                  style={
                    styles.ImageBackground_I3943_6575_3936_935_3116_60742_3108_56209_2747_42674
                  }
                />
              </View>
            </View>
            <View style={styles.View_I3943_6575_3936_935_3116_60743}>
              <View style={styles.View_I3943_6575_3936_935_3116_60744}>
                <View
                  style={styles.View_I3943_6575_3936_935_3116_60744_3107_57106}
                >
                  <View
                    style={
                      styles.View_I3943_6575_3936_935_3116_60744_3107_57106_3108_55515
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3943_6575_3936_935_3116_60744_3107_57106_3108_55515
                      }
                    >
                      Litecoin
                    </Text>
                  </View>
                </View>
                <View
                  style={styles.View_I3943_6575_3936_935_3116_60744_3107_57126}
                >
                  <View
                    style={
                      styles.View_I3943_6575_3936_935_3116_60744_3107_57126_3108_55996
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3943_6575_3936_935_3116_60744_3107_57126_3108_55996
                      }
                    >
                      1.3083 LTC
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I3943_6575_3936_935_3116_60937}>
                <View
                  style={styles.View_I3943_6575_3936_935_3116_60937_3114_620}
                >
                  <View
                    style={
                      styles.View_I3943_6575_3936_935_3116_60937_3114_620_3108_55554
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3943_6575_3936_935_3116_60937_3114_620_3108_55554
                      }
                    >
                      $ 188.39
                    </Text>
                  </View>
                </View>
                <View
                  style={styles.View_I3943_6575_3936_935_3116_60937_3114_621}
                >
                  <View
                    style={
                      styles.View_I3943_6575_3936_935_3116_60937_3114_621_3108_55962
                    }
                  >
                    <View
                      style={
                        styles.View_I3943_6575_3936_935_3116_60937_3114_621_3108_55962_2730_41734
                      }
                    >
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80be/d860/79bee10a8d86d0f776671e6595ec76fb"
                        }}
                        style={
                          styles.ImageBackground_I3943_6575_3936_935_3116_60937_3114_621_3108_55962_2730_41734_3476_13755
                        }
                      />
                    </View>
                  </View>
                  <View
                    style={
                      styles.View_I3943_6575_3936_935_3116_60937_3114_621_3108_55963
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3943_6575_3936_935_3116_60937_3114_621_3108_55963
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
        <View style={styles.View_I3943_6575_3936_936}>
          <View style={styles.View_I3943_6575_3936_936_1897_13587}>
            <View style={styles.View_I3943_6575_3936_936_1897_13588}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5967/a4ad/bc620819a6246f6f222f482fd72949c2"
                }}
                style={
                  styles.ImageBackground_I3943_6575_3936_936_1897_13588_2902_50720
                }
              />
            </View>
            <View style={styles.View_I3943_6575_3936_936_1897_13589}>
              <Text style={styles.Text_I3943_6575_3936_936_1897_13589}>
                Add Tokens
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I3943_6575_3936_937}>
          <View style={styles.View_I3943_6575_3936_938}>
            <View style={styles.View_I3943_6575_3936_938_429_16484}>
              <Text style={styles.Text_I3943_6575_3936_938_429_16484}>
                Tokens
              </Text>
            </View>
          </View>
          <View style={styles.View_I3943_6575_3936_939}>
            <View style={styles.View_I3943_6575_3936_939_429_17100}>
              <Text style={styles.Text_I3943_6575_3936_939_429_17100}>
                Collectibles
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I3943_6575_3943_24}>
          <View style={styles.View_I3943_6575_3943_25}>
            <Text style={styles.Text_I3943_6575_3943_25}>4.8729 ETH</Text>
          </View>
          <View style={styles.View_I3943_6575_3943_26}>
            <View style={styles.View_I3943_6575_3943_27}>
              <Text style={styles.Text_I3943_6575_3943_27}>$ 8,391.14</Text>
            </View>
            <View style={styles.View_I3943_6575_3943_28}>
              <View style={styles.View_I3943_6575_3943_29}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c0b/3e93/1f665032478b9cde28f7a328d1380b20"
                  }}
                  style={styles.ImageBackground_I3943_6575_3943_29_3476_13755}
                />
              </View>
              <View style={styles.View_I3943_6575_3943_30}>
                <Text style={styles.Text_I3943_6575_3943_30}>9.97%</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I3943_6575_3936_941}>
          <View style={styles.View_I3943_6575_3936_942}>
            <View style={styles.View_I3943_6575_3936_942_535_313}>
              <View style={styles.View_I3943_6575_3936_942_535_314}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c66d/b8bf/c95e612446412b3487138da1d9b75691"
                  }}
                  style={
                    styles.ImageBackground_I3943_6575_3936_942_535_314_3933_8
                  }
                />
              </View>
              <View style={styles.View_I3943_6575_3936_942_535_315}>
                <Text style={styles.Text_I3943_6575_3936_942_535_315}>
                  Send
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I3943_6575_3936_943}>
            <View style={styles.View_I3943_6575_3936_943_535_313}>
              <View style={styles.View_I3943_6575_3936_943_535_314}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4a3/888b/7c6e19cf0917c33374b8deedc901362f"
                  }}
                  style={
                    styles.ImageBackground_I3943_6575_3936_943_535_314_3933_276
                  }
                />
              </View>
              <View style={styles.View_I3943_6575_3936_943_535_315}>
                <Text style={styles.Text_I3943_6575_3936_943_535_315}>
                  Receive
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I3943_6575_3936_944}>
            <View style={styles.View_I3943_6575_3936_944_535_313}>
              <View style={styles.View_I3943_6575_3936_944_535_314}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c2f/d999/0bd7ce26b541cccce7d42bed6aee3c69"
                  }}
                  style={
                    styles.ImageBackground_I3943_6575_3936_944_535_314_3470_1356
                  }
                />
              </View>
              <View style={styles.View_I3943_6575_3936_944_535_315}>
                <Text style={styles.Text_I3943_6575_3936_944_535_315}>Buy</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I3943_6575_3941_12}>
          <View style={styles.View_I3943_6575_3943_21}>
            <View style={styles.View_I3943_6575_3943_22}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe61/b251/e7655702102495e5023879d4d695669b"
                }}
                style={styles.ImageBackground_I3943_6575_3943_22_1899_17503}
              />
              <View style={styles.View_I3943_6575_3943_22_3419_12684}>
                <Text style={styles.Text_I3943_6575_3943_22_3419_12684}>
                  🐼
                </Text>
              </View>
            </View>
            <View style={styles.View_I3943_6575_3943_44}>
              <Text style={styles.Text_I3943_6575_3943_44}>Queen Bee</Text>
            </View>
          </View>
          <View style={styles.View_I3943_6575_3943_40}>
            <View style={styles.View_I3943_6575_3941_13}>
              <Text style={styles.Text_I3943_6575_3941_13}>
                • Ethereum network
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dab/8baf/e3c2ed97082ae065dc6afe8662df2beb"
              }}
              style={styles.ImageBackground_I3943_6575_3941_14}
            />
          </View>
        </View>
        <View style={styles.View_I3943_6575_3936_945}>
          <View style={styles.View_I3943_6575_3936_945_3497_1542} />
          <View style={styles.View_I3943_6575_3936_945_3497_1618}>
            <View style={styles.View_I3943_6575_3936_945_3497_1618_3497_1596}>
              <View
                style={
                  styles.View_I3943_6575_3936_945_3497_1618_3497_1596_2730_41734
                }
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ca7/49c3/8cc9eb358376cd8b6309ddf9aec74f10"
                  }}
                  style={
                    styles.ImageBackground_I3943_6575_3936_945_3497_1618_3497_1596_2730_41734_3419_13598
                  }
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I3943_6575_3936_945_3497_1614}>
            <View style={styles.View_I3943_6575_3936_945_3497_1614_3497_1596}>
              <View
                style={
                  styles.View_I3943_6575_3936_945_3497_1614_3497_1596_2730_41734
                }
              >
                <View
                  style={
                    styles.View_I3943_6575_3936_945_3497_1614_3497_1596_2730_41734_3020_52674
                  }
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f8c/683d/24b08c1b3d168d77598fe650cf1d781d"
                    }}
                    style={
                      styles.ImageBackground_I3943_6575_3936_945_3497_1614_3497_1596_2730_41734_3020_52675
                    }
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I3943_6575_3936_945_3497_1610}>
            <View style={styles.View_I3943_6575_3936_945_3497_1610_3497_1596}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5fe7/4112/6328a1a25ab49f7fb6b024c3e7f30062"
                }}
                style={
                  styles.ImageBackground_I3943_6575_3936_945_3497_1610_3497_1596_3477_12778
                }
              />
            </View>
          </View>
          <View style={styles.View_I3943_6575_3936_945_3497_1605}>
            <View style={styles.View_I3943_6575_3936_945_3497_1605_3497_1584}>
              <View
                style={
                  styles.View_I3943_6575_3936_945_3497_1605_3497_1584_2730_41734
                }
              >
                <View
                  style={
                    styles.View_I3943_6575_3936_945_3497_1605_3497_1584_2730_41734_2993_53328
                  }
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa2/5f5f/a42c850799b03f6201cdcb023cae896e"
                    }}
                    style={
                      styles.ImageBackground_I3943_6575_3936_945_3497_1605_3497_1584_2730_41734_2993_53329
                    }
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_I3943_6575_3936_945_3497_1605_3497_1585}>
              <Text style={styles.Text_I3943_6575_3936_945_3497_1605_3497_1585}>
                Wallet
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I3943_6575_3943_5688}>
          <View style={styles.View_I3943_6575_3943_5689}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8324/2d51/d66d1c4f842af3834a9199d686a982b2"
              }}
              style={styles.ImageBackground_I3943_6575_3943_5690}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8324/2d51/d66d1c4f842af3834a9199d686a982b2"
              }}
              style={styles.ImageBackground_I3943_6575_3943_5691}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4269/76ec/11d96b3c828c84e2177d0663f2547441"
              }}
              style={styles.ImageBackground_I3943_6575_3943_5701}
            />
          </View>
          <View style={styles.View_I3943_6575_3943_5693}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cfd/f5c0/e0647b8c69fe93fa4abaa700e208e9b2"
              }}
              style={styles.ImageBackground_I3943_6575_3943_5694}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cfd/f5c0/e0647b8c69fe93fa4abaa700e208e9b2"
              }}
              style={styles.ImageBackground_I3943_6575_3943_5695}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7878/7ebc/7943343099713164cadc691f1b071da8"
              }}
              style={styles.ImageBackground_I3943_6575_3943_5700}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ff7/7558/9178664685ca9772dd932839a72fb1ca"
            }}
            style={styles.ImageBackground_I3943_6575_3943_5697}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5c4/3826/81088fb63e96cfc2f7f69a2081648b4a"
            }}
            style={styles.ImageBackground_I3943_6575_3943_5698}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/895d/d817/99168ebbcd85e835dc21b4dcb472e158"
            }}
            style={styles.ImageBackground_I3943_6575_3943_5699}
          />
        </View>
      </View>
      <View style={styles.View_3489_1395}>
        <View style={styles.View_3489_996}>
          <View style={styles.View_I3489_996_3132_60124}>
            <View style={styles.View_I3489_996_3132_60125}>
              <View style={styles.View_I3489_996_3132_60123} />
              <View style={styles.View_I3489_996_3132_60126}>
                <Text style={styles.Text_I3489_996_3132_60126}>Account</Text>
              </View>
            </View>
            <View style={styles.View_I3489_996_3132_60128} />
          </View>
        </View>
        <View style={styles.View_3489_1390}>
          <View style={styles.View_3489_998}>
            <View style={styles.View_I3489_998_3114_623}>
              <View style={styles.View_I3489_998_3114_623_3108_55545}>
                <View
                  style={styles.View_I3489_998_3114_623_3108_55545_2747_42674}
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe61/b251/e7655702102495e5023879d4d695669b"
                    }}
                    style={
                      styles.ImageBackground_I3489_998_3114_623_3108_55545_2747_42674_1899_17503
                    }
                  />
                  <View
                    style={
                      styles.View_I3489_998_3114_623_3108_55545_2747_42674_3419_12684
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3489_998_3114_623_3108_55545_2747_42674_3419_12684
                      }
                    >
                      🐼
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I3489_998_3114_623_3108_55546}>
                <Text style={styles.Text_I3489_998_3114_623_3108_55546}>
                  Queen Bee
                </Text>
              </View>
            </View>
            <View style={styles.View_I3489_998_3114_624}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56f0/93a9/275471da9b275256f8a9f53aafa5b57c"
                }}
                style={styles.ImageBackground_I3489_998_3114_624_3108_55983}
              />
            </View>
          </View>
          <View style={styles.View_3489_1324}>
            <View style={styles.View_I3489_1324_3114_629}>
              <View style={styles.View_I3489_1324_3114_629_3108_55545}>
                <View
                  style={styles.View_I3489_1324_3114_629_3108_55545_2747_42674}
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8f9/f4e3/52b2bc8e326a29d593a58ed44bafbe78"
                    }}
                    style={
                      styles.ImageBackground_I3489_1324_3114_629_3108_55545_2747_42674_3489_1338
                    }
                  />
                  <View
                    style={
                      styles.View_I3489_1324_3114_629_3108_55545_2747_42674_3489_1339
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3489_1324_3114_629_3108_55545_2747_42674_3489_1339
                      }
                    >
                      🐋
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I3489_1324_3114_629_3108_55546}>
                <Text style={styles.Text_I3489_1324_3114_629_3108_55546}>
                  Lalimo Rubik
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3489_1354}>
            <View style={styles.View_I3489_1354_3114_629}>
              <View style={styles.View_I3489_1354_3114_629_3108_55545}>
                <View
                  style={styles.View_I3489_1354_3114_629_3108_55545_2747_42674}
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5732/8bc2/83f99163a6908ccdc914adea1f4117aa"
                    }}
                    style={
                      styles.ImageBackground_I3489_1354_3114_629_3108_55545_2747_42674_3489_1341
                    }
                  />
                  <View
                    style={
                      styles.View_I3489_1354_3114_629_3108_55545_2747_42674_3489_1342
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3489_1354_3114_629_3108_55545_2747_42674_3489_1342
                      }
                    >
                      🐇
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I3489_1354_3114_629_3108_55546}>
                <Text style={styles.Text_I3489_1354_3114_629_3108_55546}>
                  Neil momo
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3489_1364}>
            <View style={styles.View_I3489_1364_1897_13495}>
              <Text style={styles.Text_I3489_1364_1897_13495}>
                Create New Account
              </Text>
            </View>
          </View>
          <View style={styles.View_3489_1386}>
            <View style={styles.View_I3489_1386_1897_13585}>
              <Text style={styles.Text_I3489_1386_1897_13585}>
                Import Account
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
  View_3943_6575: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 249, 1)",
    overflow: "hidden"
  },
  View_I3943_6575_3936_931: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("47.26775956284153%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3943_6575_3936_932: {
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
  View_I3943_6575_3936_932_3116_60742: {
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
  View_I3943_6575_3936_932_3116_60742_3108_56209: {
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
  ImageBackground_I3943_6575_3936_932_3116_60742_3108_56209_2747_42674: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3943_6575_3936_932_3116_60743: {
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
  View_I3943_6575_3936_932_3116_60744: {
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
  View_I3943_6575_3936_932_3116_60744_3107_57106: {
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
  View_I3943_6575_3936_932_3116_60744_3107_57106_3108_55515: {
    flexGrow: 1,
    width: wp("37.06666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3943_6575_3936_932_3116_60744_3107_57106_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_6575_3936_932_3116_60744_3107_57126: {
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
  View_I3943_6575_3936_932_3116_60744_3107_57126_3108_55996: {
    flexGrow: 1,
    width: wp("26.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3943_6575_3936_932_3116_60744_3107_57126_3108_55996: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_6575_3936_932_3116_60937: {
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
  View_I3943_6575_3936_932_3116_60937_3114_620: {
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
  View_I3943_6575_3936_932_3116_60937_3114_620_3108_55554: {
    flexGrow: 1,
    width: wp("18.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3943_6575_3936_932_3116_60937_3114_620_3108_55554: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_6575_3936_932_3116_60937_3114_621: {
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
  View_I3943_6575_3936_932_3116_60937_3114_621_3108_55962: {
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
  View_I3943_6575_3936_932_3116_60937_3114_621_3108_55962_2730_41734: {
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
  ImageBackground_I3943_6575_3936_932_3116_60937_3114_621_3108_55962_2730_41734_3476_13755: {
    flexGrow: 1,
    width: wp("2.653333282470703%"),
    height: hp("1.35928972171304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8800130208333314%"),
    top: hp("0.9562841530054556%")
  },
  View_I3943_6575_3936_932_3116_60937_3114_621_3108_55963: {
    flexGrow: 1,
    width: wp("12.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("0%")
  },
  Text_I3943_6575_3936_932_3116_60937_3114_621_3108_55963: {
    color: "rgba(16, 140, 74, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_6575_3936_933: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.841530054644807%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3943_6575_3936_933_3116_60742: {
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
  View_I3943_6575_3936_933_3116_60742_3108_56209: {
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
  ImageBackground_I3943_6575_3936_933_3116_60742_3108_56209_2747_42674: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3943_6575_3936_933_3116_60743: {
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
  View_I3943_6575_3936_933_3116_60744: {
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
  View_I3943_6575_3936_933_3116_60744_3107_57106: {
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
  View_I3943_6575_3936_933_3116_60744_3107_57106_3108_55515: {
    flexGrow: 1,
    width: wp("35.199999999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3943_6575_3936_933_3116_60744_3107_57106_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_6575_3936_933_3116_60744_3107_57126: {
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
  View_I3943_6575_3936_933_3116_60744_3107_57126_3108_55996: {
    flexGrow: 1,
    width: wp("28.000000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3943_6575_3936_933_3116_60744_3107_57126_3108_55996: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_6575_3936_933_3116_60937: {
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
  View_I3943_6575_3936_933_3116_60937_3114_620: {
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
  View_I3943_6575_3936_933_3116_60937_3114_620_3108_55554: {
    flexGrow: 1,
    width: wp("18.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3943_6575_3936_933_3116_60937_3114_620_3108_55554: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_6575_3936_933_3116_60937_3114_621: {
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
  View_I3943_6575_3936_933_3116_60937_3114_621_3108_55962: {
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
  View_I3943_6575_3936_933_3116_60937_3114_621_3108_55962_2730_41734: {
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
  ImageBackground_I3943_6575_3936_933_3116_60937_3114_621_3108_55962_2730_41734_3476_13755: {
    flexGrow: 1,
    width: wp("2.653333282470703%"),
    height: hp("1.35928972171304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8800130208333314%"),
    top: hp("0.9562841530054698%")
  },
  View_I3943_6575_3936_933_3116_60937_3114_621_3108_55963: {
    flexGrow: 1,
    width: wp("12.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("0%")
  },
  Text_I3943_6575_3936_933_3116_60937_3114_621_3108_55963: {
    color: "rgba(16, 140, 74, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_6575_3936_934: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.683060109289613%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3943_6575_3936_934_3116_60742: {
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
  View_I3943_6575_3936_934_3116_60742_3108_56209: {
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
  ImageBackground_I3943_6575_3936_934_3116_60742_3108_56209_2747_42674: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3943_6575_3936_934_3116_60743: {
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
  View_I3943_6575_3936_934_3116_60744: {
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
  View_I3943_6575_3936_934_3116_60744_3107_57106: {
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
  View_I3943_6575_3936_934_3116_60744_3107_57106_3108_55515: {
    flexGrow: 1,
    width: wp("33.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3943_6575_3936_934_3116_60744_3107_57106_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_6575_3936_934_3116_60744_3107_57126: {
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
  View_I3943_6575_3936_934_3116_60744_3107_57126_3108_55996: {
    flexGrow: 1,
    width: wp("29.599999999999998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3943_6575_3936_934_3116_60744_3107_57126_3108_55996: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_6575_3936_934_3116_60937: {
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
  View_I3943_6575_3936_934_3116_60937_3114_620: {
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
  View_I3943_6575_3936_934_3116_60937_3114_620_3108_55554: {
    flexGrow: 1,
    width: wp("15.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3943_6575_3936_934_3116_60937_3114_620_3108_55554: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_6575_3936_934_3116_60937_3114_621: {
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
  View_I3943_6575_3936_934_3116_60937_3114_621_3108_55962: {
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
  View_I3943_6575_3936_934_3116_60937_3114_621_3108_55962_2730_41734: {
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
  ImageBackground_I3943_6575_3936_934_3116_60937_3114_621_3108_55962_2730_41734_3476_13755: {
    flexGrow: 1,
    width: wp("2.653333282470703%"),
    height: hp("1.35928972171304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8800130208333314%"),
    top: hp("0.9562841530054698%")
  },
  View_I3943_6575_3936_934_3116_60937_3114_621_3108_55963: {
    flexGrow: 1,
    width: wp("12.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("0%")
  },
  Text_I3943_6575_3936_934_3116_60937_3114_621_3108_55963: {
    color: "rgba(16, 140, 74, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_6575_3936_935: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.52459016393442%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3943_6575_3936_935_3116_60742: {
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
  View_I3943_6575_3936_935_3116_60742_3108_56209: {
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
  ImageBackground_I3943_6575_3936_935_3116_60742_3108_56209_2747_42674: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3943_6575_3936_935_3116_60743: {
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
  View_I3943_6575_3936_935_3116_60744: {
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
  View_I3943_6575_3936_935_3116_60744_3107_57106: {
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
  View_I3943_6575_3936_935_3116_60744_3107_57106_3108_55515: {
    flexGrow: 1,
    width: wp("37.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3943_6575_3936_935_3116_60744_3107_57106_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_6575_3936_935_3116_60744_3107_57126: {
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
  View_I3943_6575_3936_935_3116_60744_3107_57126_3108_55996: {
    flexGrow: 1,
    width: wp("25.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3943_6575_3936_935_3116_60744_3107_57126_3108_55996: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_6575_3936_935_3116_60937: {
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
  View_I3943_6575_3936_935_3116_60937_3114_620: {
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
  View_I3943_6575_3936_935_3116_60937_3114_620_3108_55554: {
    flexGrow: 1,
    width: wp("17.599999999999998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3943_6575_3936_935_3116_60937_3114_620_3108_55554: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_6575_3936_935_3116_60937_3114_621: {
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
  View_I3943_6575_3936_935_3116_60937_3114_621_3108_55962: {
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
  View_I3943_6575_3936_935_3116_60937_3114_621_3108_55962_2730_41734: {
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
  ImageBackground_I3943_6575_3936_935_3116_60937_3114_621_3108_55962_2730_41734_3476_13755: {
    flexGrow: 1,
    width: wp("2.653333282470703%"),
    height: hp("1.35928972171304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8800130208333172%"),
    top: hp("0.9562841530054556%")
  },
  View_I3943_6575_3936_935_3116_60937_3114_621_3108_55963: {
    flexGrow: 1,
    width: wp("11.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333329%"),
    top: hp("0%")
  },
  Text_I3943_6575_3936_935_3116_60937_3114_621_3108_55963: {
    color: "rgba(16, 140, 74, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_6575_3936_936: {
    flexGrow: 1,
    width: wp("41.86666666666667%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.06666666666667%"),
    top: hp("88.79781420765028%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I3943_6575_3936_936_1897_13587: {
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
  View_I3943_6575_3936_936_1897_13588: {
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
  ImageBackground_I3943_6575_3936_936_1897_13588_2902_50720: {
    flexGrow: 1,
    width: wp("3.733333333333334%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333428%"),
    top: hp("0.6830601092896131%")
  },
  View_I3943_6575_3936_936_1897_13589: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333339%"),
    top: hp("0%")
  },
  Text_I3943_6575_3936_936_1897_13589: {
    color: "rgba(245, 250, 128, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_6575_3936_937: {
    flexGrow: 1,
    width: wp("61.33333333333333%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("38.52459016393443%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3943_6575_3936_938: {
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
  View_I3943_6575_3936_938_429_16484: {
    flexGrow: 1,
    width: wp("17.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.866666666666667%"),
    top: hp("1.3661202185792334%")
  },
  Text_I3943_6575_3936_938_429_16484: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_6575_3936_939: {
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
  View_I3943_6575_3936_939_429_17100: {
    flexGrow: 1,
    width: wp("28.000000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666669%"),
    top: hp("1.3661202185792334%")
  },
  Text_I3943_6575_3936_939_429_17100: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_6575_3943_24: {
    flexGrow: 1,
    width: wp("50.4%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("15.300546448087433%")
  },
  View_I3943_6575_3943_25: {
    width: wp("50.4%"),
    minWidth: wp("50.4%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3943_6575_3943_25: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 27,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_6575_3943_26: {
    width: wp("50.4%"),
    minWidth: wp("50.4%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.377049180327868%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3943_6575_3943_27: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3943_6575_3943_27: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_6575_3943_28: {
    width: wp("20.8%"),
    minWidth: wp("20.8%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3943_6575_3943_29: {
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
  ImageBackground_I3943_6575_3943_29_3476_13755: {
    flexGrow: 1,
    width: wp("1.7688887278238932%"),
    height: hp("0.9061931260947972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2533528645833343%"),
    top: hp("0.637533886185107%")
  },
  View_I3943_6575_3943_30: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333336%"),
    top: hp("0%")
  },
  Text_I3943_6575_3943_30: {
    color: "rgba(16, 140, 74, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_6575_3936_941: {
    flexGrow: 1,
    width: wp("88.8%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("29.78142076502732%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3943_6575_3936_942: {
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
  View_I3943_6575_3936_942_535_313: {
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
  View_I3943_6575_3936_942_535_314: {
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
  ImageBackground_I3943_6575_3936_942_535_314_3933_8: {
    flexGrow: 1,
    width: wp("4.278109741210938%"),
    height: hp("2.1860656842507953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666682%"),
    top: hp("0.5464480874316955%")
  },
  View_I3943_6575_3936_942_535_315: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("0%")
  },
  Text_I3943_6575_3936_942_535_315: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_6575_3936_943: {
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
  View_I3943_6575_3936_943_535_313: {
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
  View_I3943_6575_3936_943_535_314: {
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
  ImageBackground_I3943_6575_3936_943_535_314_3933_276: {
    flexGrow: 1,
    width: wp("4.761599731445313%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.4098360655737707%")
  },
  View_I3943_6575_3936_943_535_315: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%"),
    top: hp("0%")
  },
  Text_I3943_6575_3936_943_535_315: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_6575_3936_944: {
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
  View_I3943_6575_3936_944_535_313: {
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
  View_I3943_6575_3936_944_535_314: {
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
  ImageBackground_I3943_6575_3936_944_535_314_3470_1356: {
    flexGrow: 1,
    width: wp("4.800002034505209%"),
    height: hp("2.4405943239972894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.4098360655737707%")
  },
  View_I3943_6575_3936_944_535_315: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%"),
    top: hp("0%")
  },
  Text_I3943_6575_3936_944_535_315: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_6575_3941_12: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.0109289617486334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3943_6575_3943_21: {
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
  View_I3943_6575_3943_22: {
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
  ImageBackground_I3943_6575_3943_22_1899_17503: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3943_6575_3943_22_3419_12684: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1111165364583337%"),
    top: hp("1.0928961748633874%")
  },
  Text_I3943_6575_3943_22_3419_12684: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_6575_3943_44: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666667%"),
    top: hp("1.0928961748633874%")
  },
  Text_I3943_6575_3943_44: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_6575_3943_40: {
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
  View_I3943_6575_3941_13: {
    flexGrow: 1,
    width: wp("30.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3943_6575_3941_13: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3943_6575_3941_14: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.800000000000004%")
  },
  View_I3943_6575_3936_945: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%"),
    top: hp("98.63387978142076%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3943_6575_3936_945_3497_1542: {
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
  View_I3943_6575_3936_945_3497_1618: {
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
  View_I3943_6575_3936_945_3497_1618_3497_1596: {
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
  View_I3943_6575_3936_945_3497_1618_3497_1596_2730_41734: {
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
  ImageBackground_I3943_6575_3936_945_3497_1618_3497_1596_2730_41734_3419_13598: {
    flexGrow: 1,
    width: wp("4.910625203450521%"),
    height: hp("2.459242304817575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.40983606557378494%")
  },
  View_I3943_6575_3936_945_3497_1614: {
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
  View_I3943_6575_3936_945_3497_1614_3497_1596: {
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
  View_I3943_6575_3936_945_3497_1614_3497_1596_2730_41734: {
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
  View_I3943_6575_3936_945_3497_1614_3497_1596_2730_41734_3020_52674: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3943_6575_3936_945_3497_1614_3497_1596_2730_41734_3020_52675: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3943_6575_3936_945_3497_1610: {
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
  View_I3943_6575_3936_945_3497_1610_3497_1596: {
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
  ImageBackground_I3943_6575_3936_945_3497_1610_3497_1596_3477_12778: {
    flexGrow: 1,
    width: wp("4.799996948242188%"),
    height: hp("1.6686218032420006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000043%"),
    top: hp("0.8196721311475557%")
  },
  View_I3943_6575_3936_945_3497_1605: {
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
  View_I3943_6575_3936_945_3497_1605_3497_1584: {
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
  View_I3943_6575_3936_945_3497_1605_3497_1584_2730_41734: {
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
  View_I3943_6575_3936_945_3497_1605_3497_1584_2730_41734_2993_53328: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3943_6575_3936_945_3497_1605_3497_1584_2730_41734_2993_53329: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3943_6575_3936_945_3497_1605_3497_1585: {
    flexGrow: 1,
    width: wp("11.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.93333333333333%"),
    top: hp("0.1366120218579283%")
  },
  Text_I3943_6575_3936_945_3497_1605_3497_1585: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3943_6575_3943_5688: {
    flexGrow: 1,
    width: wp("43.733333333333334%"),
    height: hp("11.807953464528902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.26666666666667%"),
    top: hp("11.748633879781421%")
  },
  View_I3943_6575_3943_5689: {
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
  ImageBackground_I3943_6575_3943_5690: {
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
  ImageBackground_I3943_6575_3943_5691: {
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
  ImageBackground_I3943_6575_3943_5701: {
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
  View_I3943_6575_3943_5693: {
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
  ImageBackground_I3943_6575_3943_5694: {
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
  ImageBackground_I3943_6575_3943_5695: {
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
  ImageBackground_I3943_6575_3943_5700: {
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
  ImageBackground_I3943_6575_3943_5697: {
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
  ImageBackground_I3943_6575_3943_5698: {
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
  ImageBackground_I3943_6575_3943_5699: {
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
  View_3489_1395: {
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
  View_3489_996: {
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
  View_I3489_996_3132_60124: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("65.02745998361723%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45.9015059340847%"),
    backgroundColor: "rgba(248, 248, 249, 1)"
  },
  View_I3489_996_3132_60125: {
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
  View_I3489_996_3132_60123: {
    width: wp("12.8%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.6%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(209, 212, 219, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I3489_996_3132_60126: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("5.191256830601091%")
  },
  Text_I3489_996_3132_60126: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3489_996_3132_60128: {
    width: wp("0.00026666667933265365%"),
    minWidth: wp("0.00026666667933265365%"),
    height: hp("0.00013661202834664636%"),
    minHeight: hp("0.00013661202834664636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.99986979166667%"),
    top: hp("65.02732240437157%")
  },
  View_3489_1390: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("46.994535519125684%"),
    minHeight: hp("46.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("57.103825136612016%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3489_998: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3489_998_3114_623: {
    flexGrow: 1,
    width: wp("78.13333333333333%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.092896174863391%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3489_998_3114_623_3108_55545: {
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
  View_I3489_998_3114_623_3108_55545_2747_42674: {
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
  ImageBackground_I3489_998_3114_623_3108_55545_2747_42674_1899_17503: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3489_998_3114_623_3108_55545_2747_42674_3419_12684: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.111116536458333%"),
    top: hp("1.092896174863391%")
  },
  Text_I3489_998_3114_623_3108_55545_2747_42674_3419_12684: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3489_998_3114_623_3108_55546: {
    flexGrow: 1,
    width: wp("22.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999999%"),
    top: hp("1.092896174863391%")
  },
  Text_I3489_998_3114_623_3108_55546: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3489_998_3114_624: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3489_998_3114_624_3108_55983: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3489_1324: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.836065573770497%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3489_1324_3114_629: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3489_1324_3114_629_3108_55545: {
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
  View_I3489_1324_3114_629_3108_55545_2747_42674: {
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
  ImageBackground_I3489_1324_3114_629_3108_55545_2747_42674_3489_1338: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3489_1324_3114_629_3108_55545_2747_42674_3489_1339: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.111116536458333%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3489_1324_3114_629_3108_55545_2747_42674_3489_1339: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3489_1324_3114_629_3108_55546: {
    flexGrow: 1,
    width: wp("25.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999999%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3489_1324_3114_629_3108_55546: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3489_1354: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.67213114754098%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3489_1354_3114_629: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.092896174863398%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3489_1354_3114_629_3108_55545: {
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
  View_I3489_1354_3114_629_3108_55545_2747_42674: {
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
  ImageBackground_I3489_1354_3114_629_3108_55545_2747_42674_3489_1341: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3489_1354_3114_629_3108_55545_2747_42674_3489_1342: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.111116536458333%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3489_1354_3114_629_3108_55545_2747_42674_3489_1342: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3489_1354_3114_629_3108_55546: {
    flexGrow: 1,
    width: wp("21.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999999%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3489_1354_3114_629_3108_55546: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3489_1364: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("29.508196721311478%"),
    backgroundColor: "rgba(215, 228, 227, 1)"
  },
  View_I3489_1364_1897_13495: {
    flexGrow: 1,
    width: wp("43.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("2.185792349726782%")
  },
  Text_I3489_1364_1897_13495: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3489_1386: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("39.344262295081975%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I3489_1386_1897_13585: {
    flexGrow: 1,
    width: wp("32.800000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.200000000000003%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3489_1386_1897_13585: {
    color: "rgba(245, 250, 128, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
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
