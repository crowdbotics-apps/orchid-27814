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
      <View style={styles.View_3955_0}>
        <View style={styles.View_I3955_0_3943_7928}>
          <View style={styles.View_I3955_0_3943_7929}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8324/2d51/d66d1c4f842af3834a9199d686a982b2"
              }}
              style={styles.ImageBackground_I3955_0_3943_7930}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8324/2d51/d66d1c4f842af3834a9199d686a982b2"
              }}
              style={styles.ImageBackground_I3955_0_3943_7931}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6dbf/b9d5/7b35a0c86b176362a1af43617b14c2f8"
              }}
              style={styles.ImageBackground_I3955_0_3943_7932}
            />
          </View>
          <View style={styles.View_I3955_0_3943_7933}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cfd/f5c0/e0647b8c69fe93fa4abaa700e208e9b2"
              }}
              style={styles.ImageBackground_I3955_0_3943_7934}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cfd/f5c0/e0647b8c69fe93fa4abaa700e208e9b2"
              }}
              style={styles.ImageBackground_I3955_0_3943_7935}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fd5/6f4f/1209a6e2b67763c32c3c7843c9a398ea"
              }}
              style={styles.ImageBackground_I3955_0_3943_7936}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ff7/7558/9178664685ca9772dd932839a72fb1ca"
            }}
            style={styles.ImageBackground_I3955_0_3943_7937}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5c4/3826/81088fb63e96cfc2f7f69a2081648b4a"
            }}
            style={styles.ImageBackground_I3955_0_3943_7938}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/895d/d817/99168ebbcd85e835dc21b4dcb472e158"
            }}
            style={styles.ImageBackground_I3955_0_3943_7939}
          />
        </View>
        <View style={styles.View_I3955_0_3943_9199}>
          <View style={styles.View_I3955_0_3943_9200}>
            <View style={styles.View_I3955_0_3943_9200_3502_15442}>
              <View style={styles.View_I3955_0_3943_9200_3502_15442_3114_3415}>
                <View
                  style={
                    styles.View_I3955_0_3943_9200_3502_15442_3114_3415_3108_55569
                  }
                >
                  <Text
                    style={
                      styles.Text_I3955_0_3943_9200_3502_15442_3114_3415_3108_55569
                    }
                  >
                    Mar 4 at 10:04 AM
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I3955_0_3943_9200_3502_15443}>
              <View style={styles.View_I3955_0_3943_9200_3502_15443_3502_14645}>
                <View
                  style={
                    styles.View_I3955_0_3943_9200_3502_15443_3502_14645_3108_56209
                  }
                >
                  <View
                    style={
                      styles.View_I3955_0_3943_9200_3502_15443_3502_14645_3108_56209_2747_42674
                    }
                  >
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/593d/49b2/52a92a46e567b9efd55e714863306164"
                      }}
                      style={
                        styles.ImageBackground_I3955_0_3943_9200_3502_15443_3502_14645_3108_56209_2747_42674_3933_831
                      }
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_I3955_0_3943_9200_3502_15443_3502_14646}>
                <View
                  style={styles.View_I3955_0_3943_9200_3502_15443_3502_14784}
                >
                  <View
                    style={
                      styles.View_I3955_0_3943_9200_3502_15443_3502_14784_3107_57106
                    }
                  >
                    <View
                      style={
                        styles.View_I3955_0_3943_9200_3502_15443_3502_14784_3107_57106_3108_55515
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3955_0_3943_9200_3502_15443_3502_14784_3107_57106_3108_55515
                        }
                      >
                        Received BNB
                      </Text>
                    </View>
                  </View>
                  <View
                    style={
                      styles.View_I3955_0_3943_9200_3502_15443_3502_14784_3107_57126
                    }
                  >
                    <View
                      style={
                        styles.View_I3955_0_3943_9200_3502_15443_3502_14784_3107_57126_3108_55996
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3955_0_3943_9200_3502_15443_3502_14784_3107_57126_3108_55996
                        }
                      >
                        2.8 BNB
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={styles.View_I3955_0_3943_9200_3502_15443_3502_14648}
                >
                  <View
                    style={
                      styles.View_I3955_0_3943_9200_3502_15443_3502_14648_3114_620
                    }
                  >
                    <View
                      style={
                        styles.View_I3955_0_3943_9200_3502_15443_3502_14648_3114_620_3108_55569
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3955_0_3943_9200_3502_15443_3502_14648_3114_620_3108_55569
                        }
                      >
                        Pending
                      </Text>
                    </View>
                  </View>
                  <View
                    style={
                      styles.View_I3955_0_3943_9200_3502_15443_3502_14648_3114_621
                    }
                  >
                    <View
                      style={
                        styles.View_I3955_0_3943_9200_3502_15443_3502_14648_3114_621_3108_55998
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3955_0_3943_9200_3502_15443_3502_14648_3114_621_3108_55998
                        }
                      >
                        $647.22
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I3955_0_3943_9202}>
            <View style={styles.View_I3955_0_3943_9202_3502_15144}>
              <View style={styles.View_I3955_0_3943_9202_3502_15144_3114_3415}>
                <View
                  style={
                    styles.View_I3955_0_3943_9202_3502_15144_3114_3415_3108_55569
                  }
                >
                  <Text
                    style={
                      styles.Text_I3955_0_3943_9202_3502_15144_3114_3415_3108_55569
                    }
                  >
                    #1 Mar 3 at 12:08 AM
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I3955_0_3943_9202_3502_15145}>
              <View style={styles.View_I3955_0_3943_9202_3502_15145_3502_14645}>
                <View
                  style={
                    styles.View_I3955_0_3943_9202_3502_15145_3502_14645_3108_56209
                  }
                >
                  <View
                    style={
                      styles.View_I3955_0_3943_9202_3502_15145_3502_14645_3108_56209_2747_42674
                    }
                  >
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/faac/1f09/f54383408ff42ca330d97c88385e5f77"
                      }}
                      style={
                        styles.ImageBackground_I3955_0_3943_9202_3502_15145_3502_14645_3108_56209_2747_42674_3943_6834
                      }
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_I3955_0_3943_9202_3502_15145_3502_14646}>
                <View
                  style={styles.View_I3955_0_3943_9202_3502_15145_3502_14784}
                >
                  <View
                    style={
                      styles.View_I3955_0_3943_9202_3502_15145_3502_14784_3107_57106
                    }
                  >
                    <View
                      style={
                        styles.View_I3955_0_3943_9202_3502_15145_3502_14784_3107_57106_3108_55515
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3955_0_3943_9202_3502_15145_3502_14784_3107_57106_3108_55515
                        }
                      >
                        Send BNB
                      </Text>
                    </View>
                  </View>
                  <View
                    style={
                      styles.View_I3955_0_3943_9202_3502_15145_3502_14784_3107_57126
                    }
                  >
                    <View
                      style={
                        styles.View_I3955_0_3943_9202_3502_15145_3502_14784_3107_57126_3108_55996
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3955_0_3943_9202_3502_15145_3502_14784_3107_57126_3108_55996
                        }
                      >
                        1.334 BNB
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={styles.View_I3955_0_3943_9202_3502_15145_3502_14648}
                >
                  <View
                    style={
                      styles.View_I3955_0_3943_9202_3502_15145_3502_14648_3114_620
                    }
                  >
                    <View
                      style={
                        styles.View_I3955_0_3943_9202_3502_15145_3502_14648_3114_620_3108_55569
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3955_0_3943_9202_3502_15145_3502_14648_3114_620_3108_55569
                        }
                      >
                        Failed
                      </Text>
                    </View>
                  </View>
                  <View
                    style={
                      styles.View_I3955_0_3943_9202_3502_15145_3502_14648_3114_621
                    }
                  >
                    <View
                      style={
                        styles.View_I3955_0_3943_9202_3502_15145_3502_14648_3114_621_3108_55998
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3955_0_3943_9202_3502_15145_3502_14648_3114_621_3108_55998
                        }
                      >
                        $315.34426
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I3955_0_3943_9203}>
            <View style={styles.View_I3955_0_3943_9203_3502_15047}>
              <View style={styles.View_I3955_0_3943_9203_3502_15047_3114_3415}>
                <View
                  style={
                    styles.View_I3955_0_3943_9203_3502_15047_3114_3415_3108_55569
                  }
                >
                  <Text
                    style={
                      styles.Text_I3955_0_3943_9203_3502_15047_3114_3415_3108_55569
                    }
                  >
                    #0 Mar 2 at 3:59 PM
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I3955_0_3943_9203_3502_15048}>
              <View style={styles.View_I3955_0_3943_9203_3502_15048_3502_14645}>
                <View
                  style={
                    styles.View_I3955_0_3943_9203_3502_15048_3502_14645_3108_56209
                  }
                >
                  <View
                    style={
                      styles.View_I3955_0_3943_9203_3502_15048_3502_14645_3108_56209_2747_42674
                    }
                  >
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c499/b127/c89c909941b2f5ce2570e5a5d084a30c"
                      }}
                      style={
                        styles.ImageBackground_I3955_0_3943_9203_3502_15048_3502_14645_3108_56209_2747_42674_3943_6834
                      }
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_I3955_0_3943_9203_3502_15048_3502_14646}>
                <View
                  style={styles.View_I3955_0_3943_9203_3502_15048_3502_14784}
                >
                  <View
                    style={
                      styles.View_I3955_0_3943_9203_3502_15048_3502_14784_3107_57106
                    }
                  >
                    <View
                      style={
                        styles.View_I3955_0_3943_9203_3502_15048_3502_14784_3107_57106_3108_55515
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3955_0_3943_9203_3502_15048_3502_14784_3107_57106_3108_55515
                        }
                      >
                        Send BNB
                      </Text>
                    </View>
                  </View>
                  <View
                    style={
                      styles.View_I3955_0_3943_9203_3502_15048_3502_14784_3107_57126
                    }
                  >
                    <View
                      style={
                        styles.View_I3955_0_3943_9203_3502_15048_3502_14784_3107_57126_3108_55996
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3955_0_3943_9203_3502_15048_3502_14784_3107_57126_3108_55996
                        }
                      >
                        2.891 BNB
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={styles.View_I3955_0_3943_9203_3502_15048_3502_14648}
                >
                  <View
                    style={
                      styles.View_I3955_0_3943_9203_3502_15048_3502_14648_3114_620
                    }
                  >
                    <View
                      style={
                        styles.View_I3955_0_3943_9203_3502_15048_3502_14648_3114_620_3108_55569
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3955_0_3943_9203_3502_15048_3502_14648_3114_620_3108_55569
                        }
                      >
                        Confirmed
                      </Text>
                    </View>
                  </View>
                  <View
                    style={
                      styles.View_I3955_0_3943_9203_3502_15048_3502_14648_3114_621
                    }
                  >
                    <View
                      style={
                        styles.View_I3955_0_3943_9203_3502_15048_3502_14648_3114_621_3108_55998
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3955_0_3943_9203_3502_15048_3502_14648_3114_621_3108_55998
                        }
                      >
                        $683403.49
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I3955_0_3943_9204}>
            <View style={styles.View_I3955_0_3943_9204_3502_15047}>
              <View style={styles.View_I3955_0_3943_9204_3502_15047_3114_3415}>
                <View
                  style={
                    styles.View_I3955_0_3943_9204_3502_15047_3114_3415_3108_55569
                  }
                >
                  <Text
                    style={
                      styles.Text_I3955_0_3943_9204_3502_15047_3114_3415_3108_55569
                    }
                  >
                    #3 Feb 28 at 2:03 PM
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I3955_0_3943_9204_3502_15048}>
              <View style={styles.View_I3955_0_3943_9204_3502_15048_3502_14645}>
                <View
                  style={
                    styles.View_I3955_0_3943_9204_3502_15048_3502_14645_3108_56209
                  }
                >
                  <View
                    style={
                      styles.View_I3955_0_3943_9204_3502_15048_3502_14645_3108_56209_2747_42674
                    }
                  >
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90f4/b166/612bbd233f3e470f9f24955380fc80d6"
                      }}
                      style={
                        styles.ImageBackground_I3955_0_3943_9204_3502_15048_3502_14645_3108_56209_2747_42674_3943_7391
                      }
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_I3955_0_3943_9204_3502_15048_3502_14646}>
                <View
                  style={styles.View_I3955_0_3943_9204_3502_15048_3502_14784}
                >
                  <View
                    style={
                      styles.View_I3955_0_3943_9204_3502_15048_3502_14784_3107_57106
                    }
                  >
                    <View
                      style={
                        styles.View_I3955_0_3943_9204_3502_15048_3502_14784_3107_57106_3108_55515
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3955_0_3943_9204_3502_15048_3502_14784_3107_57106_3108_55515
                        }
                      >
                        Received BNB
                      </Text>
                    </View>
                  </View>
                  <View
                    style={
                      styles.View_I3955_0_3943_9204_3502_15048_3502_14784_3107_57126
                    }
                  >
                    <View
                      style={
                        styles.View_I3955_0_3943_9204_3502_15048_3502_14784_3107_57126_3108_55996
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3955_0_3943_9204_3502_15048_3502_14784_3107_57126_3108_55996
                        }
                      >
                        0.5637 BNB
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={styles.View_I3955_0_3943_9204_3502_15048_3502_14648}
                >
                  <View
                    style={
                      styles.View_I3955_0_3943_9204_3502_15048_3502_14648_3114_620
                    }
                  >
                    <View
                      style={
                        styles.View_I3955_0_3943_9204_3502_15048_3502_14648_3114_620_3108_55569
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3955_0_3943_9204_3502_15048_3502_14648_3114_620_3108_55569
                        }
                      >
                        Confirmed
                      </Text>
                    </View>
                  </View>
                  <View
                    style={
                      styles.View_I3955_0_3943_9204_3502_15048_3502_14648_3114_621
                    }
                  >
                    <View
                      style={
                        styles.View_I3955_0_3943_9204_3502_15048_3502_14648_3114_621_3108_55998
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3955_0_3943_9204_3502_15048_3502_14648_3114_621_3108_55998
                        }
                      >
                        $133,2530
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I3955_0_3943_7918}>
          <View style={styles.View_I3955_0_3943_7919}>
            <View style={styles.View_I3955_0_3943_7919_535_313}>
              <View style={styles.View_I3955_0_3943_7919_535_314}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c66d/b8bf/c95e612446412b3487138da1d9b75691"
                  }}
                  style={
                    styles.ImageBackground_I3955_0_3943_7919_535_314_3933_8
                  }
                />
              </View>
              <View style={styles.View_I3955_0_3943_7919_535_315}>
                <Text style={styles.Text_I3955_0_3943_7919_535_315}>Send</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I3955_0_3943_7920}>
            <View style={styles.View_I3955_0_3943_7920_535_313}>
              <View style={styles.View_I3955_0_3943_7920_535_314}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4a3/888b/7c6e19cf0917c33374b8deedc901362f"
                  }}
                  style={
                    styles.ImageBackground_I3955_0_3943_7920_535_314_3933_276
                  }
                />
              </View>
              <View style={styles.View_I3955_0_3943_7920_535_315}>
                <Text style={styles.Text_I3955_0_3943_7920_535_315}>
                  Receive
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I3955_0_3943_7921}>
          <View style={styles.View_I3955_0_3943_7922}>
            <Text style={styles.Text_I3955_0_3943_7922}>11.4188 BNB</Text>
          </View>
          <View style={styles.View_I3955_0_3943_7923}>
            <View style={styles.View_I3955_0_3943_7924}>
              <Text style={styles.Text_I3955_0_3943_7924}>$ 2,699.290132</Text>
            </View>
            <View style={styles.View_I3955_0_3943_7925}>
              <View style={styles.View_I3955_0_3943_7926}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c0b/3e93/1f665032478b9cde28f7a328d1380b20"
                  }}
                  style={styles.ImageBackground_I3955_0_3943_7926_3476_13755}
                />
              </View>
              <View style={styles.View_I3955_0_3943_7927}>
                <Text style={styles.Text_I3955_0_3943_7927}>3.38%</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I3955_0_3943_7913}>
          <View style={styles.View_I3955_0_3943_7913_2892_44027}>
            <View style={styles.View_I3955_0_3943_7913_2892_44027_2892_43256}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd24/acb1/124c41b4a2f0cbe8ed07b2f82e3f5d5a"
                }}
                style={
                  styles.ImageBackground_I3955_0_3943_7913_2892_44027_2892_43256_2730_41734
                }
              />
            </View>
          </View>
          <View style={styles.View_I3955_0_3943_7913_2892_44028}>
            <Text style={styles.Text_I3955_0_3943_7913_2892_44028}>BNB</Text>
          </View>
          <View style={styles.View_I3955_0_3943_7913_2892_44029} />
        </View>
      </View>
      <View style={styles.View_3549_17353}>
        <View style={styles.View_3549_17354}>
          <View style={styles.View_I3549_17354_3132_60124}>
            <View style={styles.View_I3549_17354_3132_60125}>
              <View style={styles.View_I3549_17354_3132_60123} />
              <View style={styles.View_I3549_17354_3132_60126}>
                <Text style={styles.Text_I3549_17354_3132_60126}>Send BNB</Text>
              </View>
            </View>
            <View style={styles.View_I3549_17354_3132_60128} />
          </View>
        </View>
        <View style={styles.View_3549_17355}>
          <View style={styles.View_3549_17356}>
            <View style={styles.View_I3549_17356_3549_17682}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f33b/7eff/295bfbb9bf11e79b5909c0f72d7f6088"
                }}
                style={styles.ImageBackground_I3549_17356_3549_17682_3549_17580}
              />
            </View>
            <View style={styles.View_I3549_17356_3549_17683}>
              <View style={styles.View_I3549_17356_3549_17684}>
                <Text style={styles.Text_I3549_17356_3549_17684}>
                  Submitted
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3549_17357}>
            <View style={styles.View_I3549_17357_3529_2166}>
              <View style={styles.View_I3549_17357_3529_2166_3116_71530}>
                <View style={styles.View_I3549_17357_3529_2166_3116_71531}>
                  <View
                    style={
                      styles.View_I3549_17357_3529_2166_3116_71531_3107_57106
                    }
                  >
                    <View
                      style={
                        styles.View_I3549_17357_3529_2166_3116_71531_3107_57106_3108_55515
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3549_17357_3529_2166_3116_71531_3107_57106_3108_55515
                        }
                      >
                        Amount
                      </Text>
                    </View>
                  </View>
                  <View
                    style={
                      styles.View_I3549_17357_3529_2166_3116_71531_3107_57126
                    }
                  >
                    <View
                      style={
                        styles.View_I3549_17357_3529_2166_3116_71531_3107_57126_3108_55996
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3549_17357_3529_2166_3116_71531_3107_57126_3108_55996
                        }
                      >
                        2.3686 BNB
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I3549_17357_3529_2166_3116_71532}>
                  <View
                    style={
                      styles.View_I3549_17357_3529_2166_3116_71532_3114_620
                    }
                  >
                    <View
                      style={
                        styles.View_I3549_17357_3529_2166_3116_71532_3114_620_3108_55554
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3549_17357_3529_2166_3116_71532_3114_620_3108_55554
                        }
                      >
                        Network fee
                      </Text>
                    </View>
                  </View>
                  <View
                    style={
                      styles.View_I3549_17357_3529_2166_3116_71532_3114_621
                    }
                  >
                    <View
                      style={
                        styles.View_I3549_17357_3529_2166_3116_71532_3114_621_3108_55998
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3549_17357_3529_2166_3116_71532_3114_621_3108_55998
                        }
                      >
                        0.972 BNB
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_I3549_17357_3529_2116}>
              <View style={styles.View_I3549_17357_3529_2117}>
                <View style={styles.View_I3549_17357_3529_2117_3114_3397}>
                  <View
                    style={
                      styles.View_I3549_17357_3529_2117_3114_3397_3108_55569
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3549_17357_3529_2117_3114_3397_3108_55569
                      }
                    >
                      From
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I3549_17357_3529_2117_3114_3398}>
                  <View
                    style={
                      styles.View_I3549_17357_3529_2117_3114_3398_3108_55998
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3549_17357_3529_2117_3114_3398_3108_55998
                      }
                    >
                      bc1q87...34pm
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I3549_17357_3529_2118}>
                <View style={styles.View_I3549_17357_3529_2118_3114_3397}>
                  <View
                    style={
                      styles.View_I3549_17357_3529_2118_3114_3397_3108_55569
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3549_17357_3529_2118_3114_3397_3108_55569
                      }
                    >
                      To
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I3549_17357_3529_2118_3114_3398}>
                  <View
                    style={
                      styles.View_I3549_17357_3529_2118_3114_3398_3108_55998
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3549_17357_3529_2118_3114_3398_3108_55998
                      }
                    >
                      3g78pk...sd42
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I3549_17357_3529_2119}>
                <View style={styles.View_I3549_17357_3529_2119_3114_3397}>
                  <View
                    style={
                      styles.View_I3549_17357_3529_2119_3114_3397_3108_55569
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3549_17357_3529_2119_3114_3397_3108_55569
                      }
                    >
                      Date
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I3549_17357_3529_2119_3114_3398}>
                  <View
                    style={
                      styles.View_I3549_17357_3529_2119_3114_3398_3108_55998
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3549_17357_3529_2119_3114_3398_3108_55998
                      }
                    >
                      Mar 4 at 2:03 PM
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I3549_17357_3529_2120}>
                <View style={styles.View_I3549_17357_3529_2120_3114_3397}>
                  <View
                    style={
                      styles.View_I3549_17357_3529_2120_3114_3397_3108_55569
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3549_17357_3529_2120_3114_3397_3108_55569
                      }
                    >
                      Nonce
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I3549_17357_3529_2120_3114_3398}>
                  <View
                    style={
                      styles.View_I3549_17357_3529_2120_3114_3398_3108_55998
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3549_17357_3529_2120_3114_3398_3108_55998
                      }
                    >
                      #0
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_I3549_17357_3546_15964}>
              <View style={styles.View_I3549_17357_3546_15964_3510_14252}>
                <View style={styles.View_I3549_17357_3546_15964_3510_14253}>
                  <View
                    style={
                      styles.View_I3549_17357_3546_15964_3510_14253_3107_57106
                    }
                  >
                    <View
                      style={
                        styles.View_I3549_17357_3546_15964_3510_14253_3107_57106_3108_55515
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3549_17357_3546_15964_3510_14253_3107_57106_3108_55515
                        }
                      >
                        Total Amount
                      </Text>
                    </View>
                  </View>
                  <View
                    style={
                      styles.View_I3549_17357_3546_15964_3510_14253_3107_57126
                    }
                  >
                    <View
                      style={
                        styles.View_I3549_17357_3546_15964_3510_14253_3107_57126_3108_55996
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3549_17357_3546_15964_3510_14253_3107_57126_3108_55996
                        }
                      >
                        3.3406 BNB
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I3549_17357_3546_15964_3510_14320}>
                  <View style={styles.View_I3549_17357_3546_15964_3510_14322}>
                    <View
                      style={
                        styles.View_I3549_17357_3546_15964_3510_14322_3108_55998
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3549_17357_3546_15964_3510_14322_3108_55998
                        }
                      >
                        $ 880.05
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_3549_17718}>
            <View style={styles.View_I3549_17718_3165_63954}>
              <View style={styles.View_I3549_17718_1704_9498}>
                <View style={styles.View_I3549_17718_1704_9498_1898_16045}>
                  <Text style={styles.Text_I3549_17718_1704_9498_1898_16045}>
                    Cancel
                  </Text>
                </View>
              </View>
              <View style={styles.View_I3549_17718_1704_9522}>
                <View style={styles.View_I3549_17718_1704_9522_1897_13585}>
                  <Text style={styles.Text_I3549_17718_1704_9522_1897_13585}>
                    Speed Up
                  </Text>
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
  View_3955_0: {
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
  View_I3955_0_3943_7928: {
    flexGrow: 1,
    width: wp("43.733333333333334%"),
    height: hp("11.807953464528902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.86666666666667%"),
    top: hp("8.060109289617486%")
  },
  View_I3955_0_3943_7929: {
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
  ImageBackground_I3955_0_3943_7930: {
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
  ImageBackground_I3955_0_3943_7931: {
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
  ImageBackground_I3955_0_3943_7932: {
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
  View_I3955_0_3943_7933: {
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
  ImageBackground_I3955_0_3943_7934: {
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
  ImageBackground_I3955_0_3943_7935: {
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
  ImageBackground_I3955_0_3943_7936: {
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
  ImageBackground_I3955_0_3943_7937: {
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
  ImageBackground_I3955_0_3943_7938: {
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
  ImageBackground_I3955_0_3943_7939: {
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
  View_I3955_0_3943_9199: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("59.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("40.7103825136612%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_9200: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_9200_3502_15442: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3955_0_3943_9200_3502_15442_3114_3415: {
    flexGrow: 1,
    width: wp("74.4%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.092896174863391%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_9200_3502_15442_3114_3415_3108_55569: {
    flexGrow: 1,
    width: wp("28.000000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3955_0_3943_9200_3502_15442_3114_3415_3108_55569: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_0_3943_9200_3502_15443: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3955_0_3943_9200_3502_15443_3502_14645: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.5027322404371617%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_9200_3502_15443_3502_14645_3108_56209: {
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
  View_I3955_0_3943_9200_3502_15443_3502_14645_3108_56209_2747_42674: {
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
  ImageBackground_I3955_0_3943_9200_3502_15443_3502_14645_3108_56209_2747_42674_3933_831: {
    flexGrow: 1,
    width: wp("7.993765258789062%"),
    height: hp("4.102020055218473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333321%"),
    top: hp("0.6830601092896202%")
  },
  View_I3955_0_3943_9200_3502_15443_3502_14646: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666663%"),
    top: hp("0.546448087431699%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_9200_3502_15443_3502_14784: {
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
  View_I3955_0_3943_9200_3502_15443_3502_14784_3107_57106: {
    flexGrow: 1,
    width: wp("44.800000000000004%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_9200_3502_15443_3502_14784_3107_57106_3108_55515: {
    flexGrow: 1,
    width: wp("44.800000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3955_0_3943_9200_3502_15443_3502_14784_3107_57106_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_0_3943_9200_3502_15443_3502_14784_3107_57126: {
    flexGrow: 1,
    width: wp("18.4%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.46666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_9200_3502_15443_3502_14784_3107_57126_3108_55996: {
    flexGrow: 1,
    width: wp("18.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3955_0_3943_9200_3502_15443_3502_14784_3107_57126_3108_55996: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_0_3943_9200_3502_15443_3502_14648: {
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
  View_I3955_0_3943_9200_3502_15443_3502_14648_3114_620: {
    flexGrow: 1,
    width: wp("46.400000000000006%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_9200_3502_15443_3502_14648_3114_620_3108_55569: {
    flexGrow: 1,
    width: wp("13.066666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3955_0_3943_9200_3502_15443_3502_14648_3114_620_3108_55569: {
    color: "rgba(242, 134, 2, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_0_3943_9200_3502_15443_3502_14648_3114_621: {
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
  View_I3955_0_3943_9200_3502_15443_3502_14648_3114_621_3108_55998: {
    flexGrow: 1,
    width: wp("16.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("0%")
  },
  Text_I3955_0_3943_9200_3502_15443_3502_14648_3114_621_3108_55998: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_0_3943_9202: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.300546448087431%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_9202_3502_15144: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3955_0_3943_9202_3502_15144_3114_3415: {
    flexGrow: 1,
    width: wp("74.4%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_9202_3502_15144_3114_3415_3108_55569: {
    flexGrow: 1,
    width: wp("32.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3955_0_3943_9202_3502_15144_3114_3415_3108_55569: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_0_3943_9202_3502_15145: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3955_0_3943_9202_3502_15145_3502_14645: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.5027322404371546%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_9202_3502_15145_3502_14645_3108_56209: {
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
  View_I3955_0_3943_9202_3502_15145_3502_14645_3108_56209_2747_42674: {
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
  ImageBackground_I3955_0_3943_9202_3502_15145_3502_14645_3108_56209_2747_42674_3943_6834: {
    flexGrow: 1,
    width: wp("7.995566813151042%"),
    height: hp("4.100663023568242%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333321%"),
    top: hp("0.6830601092896273%")
  },
  View_I3955_0_3943_9202_3502_15145_3502_14646: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666663%"),
    top: hp("0.546448087431699%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_9202_3502_15145_3502_14784: {
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
  View_I3955_0_3943_9202_3502_15145_3502_14784_3107_57106: {
    flexGrow: 1,
    width: wp("39.46666666666667%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_9202_3502_15145_3502_14784_3107_57106_3108_55515: {
    flexGrow: 1,
    width: wp("39.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3955_0_3943_9202_3502_15145_3502_14784_3107_57106_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_0_3943_9202_3502_15145_3502_14784_3107_57126: {
    flexGrow: 1,
    width: wp("23.733333333333334%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.13333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_9202_3502_15145_3502_14784_3107_57126_3108_55996: {
    flexGrow: 1,
    width: wp("23.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3955_0_3943_9202_3502_15145_3502_14784_3107_57126_3108_55996: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_0_3943_9202_3502_15145_3502_14648: {
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
  View_I3955_0_3943_9202_3502_15145_3502_14648_3114_620: {
    flexGrow: 1,
    width: wp("46.400000000000006%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_9202_3502_15145_3502_14648_3114_620_3108_55569: {
    flexGrow: 1,
    width: wp("9.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3955_0_3943_9202_3502_15145_3502_14648_3114_620_3108_55569: {
    color: "rgba(255, 73, 86, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_0_3943_9202_3502_15145_3502_14648_3114_621: {
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
  View_I3955_0_3943_9202_3502_15145_3502_14648_3114_621_3108_55998: {
    flexGrow: 1,
    width: wp("24.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-7.733333333333334%"),
    top: hp("0%")
  },
  Text_I3955_0_3943_9202_3502_15145_3502_14648_3114_621_3108_55998: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_0_3943_9203: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30.601092896174862%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_9203_3502_15047: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3955_0_3943_9203_3502_15047_3114_3415: {
    flexGrow: 1,
    width: wp("74.4%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.092896174863398%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_9203_3502_15047_3114_3415_3108_55569: {
    flexGrow: 1,
    width: wp("31.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3955_0_3943_9203_3502_15047_3114_3415_3108_55569: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_0_3943_9203_3502_15048: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060224%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3955_0_3943_9203_3502_15048_3502_14645: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.5027322404371546%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_9203_3502_15048_3502_14645_3108_56209: {
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
  View_I3955_0_3943_9203_3502_15048_3502_14645_3108_56209_2747_42674: {
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
  ImageBackground_I3955_0_3943_9203_3502_15048_3502_14645_3108_56209_2747_42674_3943_6834: {
    flexGrow: 1,
    width: wp("7.995566813151042%"),
    height: hp("4.100663023568242%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333321%"),
    top: hp("0.6830601092896131%")
  },
  View_I3955_0_3943_9203_3502_15048_3502_14646: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666663%"),
    top: hp("0.5464480874316848%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_9203_3502_15048_3502_14784: {
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
  View_I3955_0_3943_9203_3502_15048_3502_14784_3107_57106: {
    flexGrow: 1,
    width: wp("39.46666666666667%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_9203_3502_15048_3502_14784_3107_57106_3108_55515: {
    flexGrow: 1,
    width: wp("39.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3955_0_3943_9203_3502_15048_3502_14784_3107_57106_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_0_3943_9203_3502_15048_3502_14784_3107_57126: {
    flexGrow: 1,
    width: wp("23.733333333333334%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.13333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_9203_3502_15048_3502_14784_3107_57126_3108_55996: {
    flexGrow: 1,
    width: wp("23.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3955_0_3943_9203_3502_15048_3502_14784_3107_57126_3108_55996: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_0_3943_9203_3502_15048_3502_14648: {
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
  View_I3955_0_3943_9203_3502_15048_3502_14648_3114_620: {
    flexGrow: 1,
    width: wp("46.400000000000006%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_9203_3502_15048_3502_14648_3114_620_3108_55569: {
    flexGrow: 1,
    width: wp("16.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3955_0_3943_9203_3502_15048_3502_14648_3114_620_3108_55569: {
    color: "rgba(16, 140, 74, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_0_3943_9203_3502_15048_3502_14648_3114_621: {
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
  View_I3955_0_3943_9203_3502_15048_3502_14648_3114_621_3108_55998: {
    flexGrow: 1,
    width: wp("25.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8.533333333333331%"),
    top: hp("0%")
  },
  Text_I3955_0_3943_9203_3502_15048_3502_14648_3114_621_3108_55998: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_0_3943_9204: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45.90163934426229%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_9204_3502_15047: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3955_0_3943_9204_3502_15047_3114_3415: {
    flexGrow: 1,
    width: wp("74.4%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_9204_3502_15047_3114_3415_3108_55569: {
    flexGrow: 1,
    width: wp("32.800000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3955_0_3943_9204_3502_15047_3114_3415_3108_55569: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_0_3943_9204_3502_15048: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3955_0_3943_9204_3502_15048_3502_14645: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.5027322404371546%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_9204_3502_15048_3502_14645_3108_56209: {
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
  View_I3955_0_3943_9204_3502_15048_3502_14645_3108_56209_2747_42674: {
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
  ImageBackground_I3955_0_3943_9204_3502_15048_3502_14645_3108_56209_2747_42674_3943_7391: {
    flexGrow: 1,
    width: wp("8.000069173177083%"),
    height: hp("4.098396092816129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333321%"),
    top: hp("0.6830601092896273%")
  },
  View_I3955_0_3943_9204_3502_15048_3502_14646: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666663%"),
    top: hp("0.546448087431699%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_9204_3502_15048_3502_14784: {
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
  View_I3955_0_3943_9204_3502_15048_3502_14784_3107_57106: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_9204_3502_15048_3502_14784_3107_57106_3108_55515: {
    flexGrow: 1,
    width: wp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3955_0_3943_9204_3502_15048_3502_14784_3107_57106_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_0_3943_9204_3502_15048_3502_14784_3107_57126: {
    flexGrow: 1,
    width: wp("27.200000000000003%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.66666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_9204_3502_15048_3502_14784_3107_57126_3108_55996: {
    flexGrow: 1,
    width: wp("27.200000000000003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3955_0_3943_9204_3502_15048_3502_14784_3107_57126_3108_55996: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_0_3943_9204_3502_15048_3502_14648: {
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
  View_I3955_0_3943_9204_3502_15048_3502_14648_3114_620: {
    flexGrow: 1,
    width: wp("46.400000000000006%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_9204_3502_15048_3502_14648_3114_620_3108_55569: {
    flexGrow: 1,
    width: wp("16.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3955_0_3943_9204_3502_15048_3502_14648_3114_620_3108_55569: {
    color: "rgba(16, 140, 74, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_0_3943_9204_3502_15048_3502_14648_3114_621: {
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
  View_I3955_0_3943_9204_3502_15048_3502_14648_3114_621_3108_55998: {
    flexGrow: 1,
    width: wp("21.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5.066666666666663%"),
    top: hp("0%")
  },
  Text_I3955_0_3943_9204_3502_15048_3502_14648_3114_621_3108_55998: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_0_3943_7918: {
    flexGrow: 1,
    width: wp("61.6%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("30.87431693989071%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_7919: {
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
  View_I3955_0_3943_7919_535_313: {
    flexGrow: 1,
    width: wp("19.466666666666665%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("1.6393442622950758%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_7919_535_314: {
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
  ImageBackground_I3955_0_3943_7919_535_314_3933_8: {
    flexGrow: 1,
    width: wp("4.278109741210938%"),
    height: hp("2.1860656842507953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666682%"),
    top: hp("0.546448087431699%")
  },
  View_I3955_0_3943_7919_535_315: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("0%")
  },
  Text_I3955_0_3943_7919_535_315: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_0_3943_7920: {
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
  View_I3955_0_3943_7920_535_313: {
    flexGrow: 1,
    width: wp("25.066666666666666%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("1.6393442622950758%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_7920_535_314: {
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
  ImageBackground_I3955_0_3943_7920_535_314_3933_276: {
    flexGrow: 1,
    width: wp("4.761599731445313%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.4098360655737707%")
  },
  View_I3955_0_3943_7920_535_315: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%"),
    top: hp("0%")
  },
  Text_I3955_0_3943_7920_535_315: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_0_3943_7921: {
    flexGrow: 1,
    width: wp("65.33333333333333%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("15.300546448087433%")
  },
  View_I3955_0_3943_7922: {
    width: wp("53.06666666666666%"),
    minWidth: wp("53.06666666666666%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3955_0_3943_7922: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 27,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_0_3943_7923: {
    width: wp("65.33333333333333%"),
    minWidth: wp("65.33333333333333%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.377049180327868%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_7924: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3955_0_3943_7924: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_0_3943_7925: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.26666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_7926: {
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
  ImageBackground_I3955_0_3943_7926_3476_13755: {
    flexGrow: 1,
    width: wp("1.7688887278238932%"),
    height: hp("0.9061931260947972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25338541666666%"),
    top: hp("0.6375005336407078%")
  },
  View_I3955_0_3943_7927: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333336%"),
    top: hp("0%")
  },
  Text_I3955_0_3943_7927: {
    color: "rgba(16, 140, 74, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_0_3943_7913: {
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
  View_I3955_0_3943_7913_2892_44027: {
    flexGrow: 1,
    width: wp("40.666666666666664%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3955_0_3943_7913_2892_44027_2892_43256: {
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
  ImageBackground_I3955_0_3943_7913_2892_44027_2892_43256_2730_41734: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3955_0_3943_7913_2892_44028: {
    flexGrow: 1,
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.93333333333333%"),
    top: hp("1.0928961748633883%")
  },
  Text_I3955_0_3943_7913_2892_44028: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3955_0_3943_7913_2892_44029: {
    flexGrow: 1,
    width: wp("40.666666666666664%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.06666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3549_17353: {
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
  View_3549_17354: {
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
  View_I3549_17354_3132_60124: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("100.27335745389345%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.655604294740437%"),
    backgroundColor: "rgba(248, 248, 249, 1)"
  },
  View_I3549_17354_3132_60125: {
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
  View_I3549_17354_3132_60123: {
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
  View_I3549_17354_3132_60126: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("5.191256830601093%")
  },
  Text_I3549_17354_3132_60126: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3549_17354_3132_60128: {
    width: wp("0.00026666667933265365%"),
    minWidth: wp("0.00026666667933265365%"),
    height: hp("0.00013661202834664636%"),
    minHeight: hp("0.00013661202834664636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.99986979166667%"),
    top: hp("100.27322404371583%")
  },
  View_3549_17355: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("89.07103825136612%"),
    minHeight: hp("89.07103825136612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.85792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3549_17356: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14.754098360655737%"),
    minHeight: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_17356_3549_17682: {
    flexGrow: 1,
    width: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.46666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3549_17356_3549_17682_3549_17580: {
    flexGrow: 1,
    width: wp("12.088888549804686%"),
    height: hp("6.9216759478459595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8444010416666643%"),
    top: hp("1.0928961748633874%")
  },
  View_I3549_17356_3549_17683: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("10.928961748633878%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_17356_3549_17684: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3549_17356_3549_17684: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3549_17357: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("54.37158469945356%"),
    minHeight: hp("54.37158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("16.93989071038251%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3549_17357_3529_2166: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590173%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3549_17357_3529_2166_3116_71530: {
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
  View_I3549_17357_3529_2166_3116_71531: {
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
  View_I3549_17357_3529_2166_3116_71531_3107_57106: {
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
  View_I3549_17357_3529_2166_3116_71531_3107_57106_3108_55515: {
    flexGrow: 1,
    width: wp("44.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3549_17357_3529_2166_3116_71531_3107_57106_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3549_17357_3529_2166_3116_71531_3107_57126: {
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
  View_I3549_17357_3529_2166_3116_71531_3107_57126_3108_55996: {
    flexGrow: 1,
    width: wp("27.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3549_17357_3529_2166_3116_71531_3107_57126_3108_55996: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3549_17357_3529_2166_3116_71532: {
    width: wp("74.4%"),
    minWidth: wp("74.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_17357_3529_2166_3116_71532_3114_620: {
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
  View_I3549_17357_3529_2166_3116_71532_3114_620_3108_55554: {
    flexGrow: 1,
    width: wp("24.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3549_17357_3529_2166_3116_71532_3114_620_3108_55554: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3549_17357_3529_2166_3116_71532_3114_621: {
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
  View_I3549_17357_3529_2166_3116_71532_3114_621_3108_55998: {
    flexGrow: 1,
    width: wp("21.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.533333333333331%"),
    top: hp("0%")
  },
  Text_I3549_17357_3529_2166_3116_71532_3114_621_3108_55998: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3549_17357_3529_2116: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.486338797814206%")
  },
  View_I3549_17357_3529_2117: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_17357_3529_2117_3114_3397: {
    flexGrow: 1,
    width: wp("54.93333333333334%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0.40983606557377783%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_17357_3529_2117_3114_3397_3108_55569: {
    flexGrow: 1,
    width: wp("7.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3549_17357_3529_2117_3114_3397_3108_55569: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3549_17357_3529_2117_3114_3398: {
    flexGrow: 1,
    width: wp("16.8%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.99999999999999%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_17357_3529_2117_3114_3398_3108_55998: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-12.533333333333324%"),
    top: hp("0%")
  },
  Text_I3549_17357_3529_2117_3114_3398_3108_55998: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3549_17357_3529_2118: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.464480874316948%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_17357_3529_2118_3114_3397: {
    flexGrow: 1,
    width: wp("54.93333333333334%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0.4098360655737636%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_17357_3529_2118_3114_3397_3108_55569: {
    flexGrow: 1,
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3549_17357_3529_2118_3114_3397_3108_55569: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3549_17357_3529_2118_3114_3398: {
    flexGrow: 1,
    width: wp("16.8%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.99999999999999%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_17357_3529_2118_3114_3398_3108_55998: {
    flexGrow: 1,
    width: wp("29.06666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-12.266666666666652%"),
    top: hp("0%")
  },
  Text_I3549_17357_3529_2118_3114_3398_3108_55998: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3549_17357_3529_2119: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.928961748633881%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_17357_3529_2119_3114_3397: {
    flexGrow: 1,
    width: wp("54.93333333333334%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0.4098360655737707%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_17357_3529_2119_3114_3397_3108_55569: {
    flexGrow: 1,
    width: wp("7.199999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3549_17357_3529_2119_3114_3397_3108_55569: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3549_17357_3529_2119_3114_3398: {
    flexGrow: 1,
    width: wp("16.8%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.99999999999999%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_17357_3529_2119_3114_3398_3108_55998: {
    flexGrow: 1,
    width: wp("34.93333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-18.133333333333333%"),
    top: hp("0%")
  },
  Text_I3549_17357_3529_2119_3114_3398_3108_55998: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3549_17357_3529_2120: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.39344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_17357_3529_2120_3114_3397: {
    flexGrow: 1,
    width: wp("54.93333333333334%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0.4098360655737707%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_17357_3529_2120_3114_3397_3108_55569: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3549_17357_3529_2120_3114_3397_3108_55569: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3549_17357_3529_2120_3114_3398: {
    flexGrow: 1,
    width: wp("16.8%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.99999999999999%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_17357_3529_2120_3114_3398_3108_55998: {
    flexGrow: 1,
    width: wp("5.6000000000000005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.200000000000003%"),
    top: hp("0%")
  },
  Text_I3549_17357_3529_2120_3114_3398_3108_55998: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3549_17357_3546_15964: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40.43715846994535%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3549_17357_3546_15964_3510_14252: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("3.27868852459018%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_17357_3546_15964_3510_14253: {
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
  View_I3549_17357_3546_15964_3510_14253_3107_57106: {
    flexGrow: 1,
    width: wp("47.733333333333334%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_17357_3546_15964_3510_14253_3107_57106_3108_55515: {
    flexGrow: 1,
    width: wp("47.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3549_17357_3546_15964_3510_14253_3107_57106_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3549_17357_3546_15964_3510_14253_3107_57126: {
    flexGrow: 1,
    width: wp("28.26666666666667%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.400000000000006%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_17357_3546_15964_3510_14253_3107_57126_3108_55996: {
    flexGrow: 1,
    width: wp("28.26666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3549_17357_3546_15964_3510_14253_3107_57126_3108_55996: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3549_17357_3546_15964_3510_14320: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737693%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_17357_3546_15964_3510_14322: {
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
  View_I3549_17357_3546_15964_3510_14322_3108_55998: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.3333333333333286%"),
    top: hp("0%")
  },
  Text_I3549_17357_3546_15964_3510_14322_3108_55998: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3549_17718: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15.573770491803279%"),
    minHeight: hp("15.573770491803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("73.49726775956283%"),
    backgroundColor: "rgba(250, 250, 250, 0.20000000298023224)"
  },
  View_I3549_17718_3165_63954: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.092896174863398%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_17718_1704_9498: {
    width: wp("41.6%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3549_17718_1704_9498_1898_16045: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.466666666666667%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3549_17718_1704_9498_1898_16045: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3549_17718_1704_9522: {
    width: wp("41.6%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I3549_17718_1704_9522_1897_13585: {
    flexGrow: 1,
    width: wp("20.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666671%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3549_17718_1704_9522_1897_13585: {
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
