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
      <View style={styles.View_3515_14530}>
        <View style={styles.View_I3515_14530_2892_44027}>
          <View style={styles.View_I3515_14530_2892_44027_2892_43256}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd24/acb1/124c41b4a2f0cbe8ed07b2f82e3f5d5a"
              }}
              style={
                styles.ImageBackground_I3515_14530_2892_44027_2892_43256_2730_41734
              }
            />
          </View>
        </View>
        <View style={styles.View_I3515_14530_2892_44028}>
          <Text style={styles.Text_I3515_14530_2892_44028}>Transactions</Text>
        </View>
        <View style={styles.View_I3515_14530_2892_44029} />
      </View>
      <View style={styles.View_3515_14531}>
        <View style={styles.View_3515_14532}>
          <View style={styles.View_I3515_14532_3502_15442}>
            <View style={styles.View_I3515_14532_3502_15442_3114_3415}>
              <View
                style={styles.View_I3515_14532_3502_15442_3114_3415_3108_55569}
              >
                <Text
                  style={
                    styles.Text_I3515_14532_3502_15442_3114_3415_3108_55569
                  }
                >
                  Mar 4 at 10:04 AM
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I3515_14532_3502_15443}>
            <View style={styles.View_I3515_14532_3502_15443_3502_14645}>
              <View
                style={styles.View_I3515_14532_3502_15443_3502_14645_3108_56209}
              >
                <View
                  style={
                    styles.View_I3515_14532_3502_15443_3502_14645_3108_56209_2747_42674
                  }
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/593d/49b2/52a92a46e567b9efd55e714863306164"
                    }}
                    style={
                      styles.ImageBackground_I3515_14532_3502_15443_3502_14645_3108_56209_2747_42674_3933_831
                    }
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_I3515_14532_3502_15443_3502_14646}>
              <View style={styles.View_I3515_14532_3502_15443_3502_14784}>
                <View
                  style={
                    styles.View_I3515_14532_3502_15443_3502_14784_3107_57106
                  }
                >
                  <View
                    style={
                      styles.View_I3515_14532_3502_15443_3502_14784_3107_57106_3108_55515
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3515_14532_3502_15443_3502_14784_3107_57106_3108_55515
                      }
                    >
                      Received BNB
                    </Text>
                  </View>
                </View>
                <View
                  style={
                    styles.View_I3515_14532_3502_15443_3502_14784_3107_57126
                  }
                >
                  <View
                    style={
                      styles.View_I3515_14532_3502_15443_3502_14784_3107_57126_3108_55996
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3515_14532_3502_15443_3502_14784_3107_57126_3108_55996
                      }
                    >
                      2.8 BNB
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I3515_14532_3502_15443_3502_14648}>
                <View
                  style={styles.View_I3515_14532_3502_15443_3502_14648_3114_620}
                >
                  <View
                    style={
                      styles.View_I3515_14532_3502_15443_3502_14648_3114_620_3108_55569
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3515_14532_3502_15443_3502_14648_3114_620_3108_55569
                      }
                    >
                      Pending
                    </Text>
                  </View>
                </View>
                <View
                  style={styles.View_I3515_14532_3502_15443_3502_14648_3114_621}
                >
                  <View
                    style={
                      styles.View_I3515_14532_3502_15443_3502_14648_3114_621_3108_55998
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3515_14532_3502_15443_3502_14648_3114_621_3108_55998
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
        <View style={styles.View_3515_14533}>
          <View style={styles.View_I3515_14533_3502_15047}>
            <View style={styles.View_I3515_14533_3502_15047_3114_3415}>
              <View
                style={styles.View_I3515_14533_3502_15047_3114_3415_3108_55569}
              >
                <Text
                  style={
                    styles.Text_I3515_14533_3502_15047_3114_3415_3108_55569
                  }
                >
                  #0 Mar 3 at 5:00 PM
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I3515_14533_3502_15048}>
            <View style={styles.View_I3515_14533_3502_15048_3502_14645}>
              <View
                style={styles.View_I3515_14533_3502_15048_3502_14645_3108_56209}
              >
                <View
                  style={
                    styles.View_I3515_14533_3502_15048_3502_14645_3108_56209_2747_42674
                  }
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90f4/b166/612bbd233f3e470f9f24955380fc80d6"
                    }}
                    style={
                      styles.ImageBackground_I3515_14533_3502_15048_3502_14645_3108_56209_2747_42674_3943_7391
                    }
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_I3515_14533_3502_15048_3502_14646}>
              <View style={styles.View_I3515_14533_3502_15048_3502_14784}>
                <View
                  style={
                    styles.View_I3515_14533_3502_15048_3502_14784_3107_57106
                  }
                >
                  <View
                    style={
                      styles.View_I3515_14533_3502_15048_3502_14784_3107_57106_3108_55515
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3515_14533_3502_15048_3502_14784_3107_57106_3108_55515
                      }
                    >
                      Received ETH
                    </Text>
                  </View>
                </View>
                <View
                  style={
                    styles.View_I3515_14533_3502_15048_3502_14784_3107_57126
                  }
                >
                  <View
                    style={
                      styles.View_I3515_14533_3502_15048_3502_14784_3107_57126_3108_55996
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3515_14533_3502_15048_3502_14784_3107_57126_3108_55996
                      }
                    >
                      0.622 ETH
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I3515_14533_3502_15048_3502_14648}>
                <View
                  style={styles.View_I3515_14533_3502_15048_3502_14648_3114_620}
                >
                  <View
                    style={
                      styles.View_I3515_14533_3502_15048_3502_14648_3114_620_3108_55569
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3515_14533_3502_15048_3502_14648_3114_620_3108_55569
                      }
                    >
                      Confirmed
                    </Text>
                  </View>
                </View>
                <View
                  style={styles.View_I3515_14533_3502_15048_3502_14648_3114_621}
                >
                  <View
                    style={
                      styles.View_I3515_14533_3502_15048_3502_14648_3114_621_3108_55998
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3515_14533_3502_15048_3502_14648_3114_621_3108_55998
                      }
                    >
                      $1071.2084
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3515_14534}>
          <View style={styles.View_I3515_14534_3502_15144}>
            <View style={styles.View_I3515_14534_3502_15144_3114_3415}>
              <View
                style={styles.View_I3515_14534_3502_15144_3114_3415_3108_55569}
              >
                <Text
                  style={
                    styles.Text_I3515_14534_3502_15144_3114_3415_3108_55569
                  }
                >
                  #1 Mar 3 at 12:08 AM
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I3515_14534_3502_15145}>
            <View style={styles.View_I3515_14534_3502_15145_3502_14645}>
              <View
                style={styles.View_I3515_14534_3502_15145_3502_14645_3108_56209}
              >
                <View
                  style={
                    styles.View_I3515_14534_3502_15145_3502_14645_3108_56209_2747_42674
                  }
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/faac/1f09/f54383408ff42ca330d97c88385e5f77"
                    }}
                    style={
                      styles.ImageBackground_I3515_14534_3502_15145_3502_14645_3108_56209_2747_42674_3943_6834
                    }
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_I3515_14534_3502_15145_3502_14646}>
              <View style={styles.View_I3515_14534_3502_15145_3502_14784}>
                <View
                  style={
                    styles.View_I3515_14534_3502_15145_3502_14784_3107_57106
                  }
                >
                  <View
                    style={
                      styles.View_I3515_14534_3502_15145_3502_14784_3107_57106_3108_55515
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3515_14534_3502_15145_3502_14784_3107_57106_3108_55515
                      }
                    >
                      Send BNB
                    </Text>
                  </View>
                </View>
                <View
                  style={
                    styles.View_I3515_14534_3502_15145_3502_14784_3107_57126
                  }
                >
                  <View
                    style={
                      styles.View_I3515_14534_3502_15145_3502_14784_3107_57126_3108_55996
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3515_14534_3502_15145_3502_14784_3107_57126_3108_55996
                      }
                    >
                      1.334 BNB
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I3515_14534_3502_15145_3502_14648}>
                <View
                  style={styles.View_I3515_14534_3502_15145_3502_14648_3114_620}
                >
                  <View
                    style={
                      styles.View_I3515_14534_3502_15145_3502_14648_3114_620_3108_55569
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3515_14534_3502_15145_3502_14648_3114_620_3108_55569
                      }
                    >
                      Failed
                    </Text>
                  </View>
                </View>
                <View
                  style={styles.View_I3515_14534_3502_15145_3502_14648_3114_621}
                >
                  <View
                    style={
                      styles.View_I3515_14534_3502_15145_3502_14648_3114_621_3108_55998
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3515_14534_3502_15145_3502_14648_3114_621_3108_55998
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
        <View style={styles.View_3515_14535}>
          <View style={styles.View_I3515_14535_3502_15047}>
            <View style={styles.View_I3515_14535_3502_15047_3114_3415}>
              <View
                style={styles.View_I3515_14535_3502_15047_3114_3415_3108_55569}
              >
                <Text
                  style={
                    styles.Text_I3515_14535_3502_15047_3114_3415_3108_55569
                  }
                >
                  #2 Mar 2 at 2:30 PM
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I3515_14535_3502_15048}>
            <View style={styles.View_I3515_14535_3502_15048_3502_14645}>
              <View
                style={styles.View_I3515_14535_3502_15048_3502_14645_3108_56209}
              >
                <View
                  style={
                    styles.View_I3515_14535_3502_15048_3502_14645_3108_56209_2747_42674
                  }
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c499/b127/c89c909941b2f5ce2570e5a5d084a30c"
                    }}
                    style={
                      styles.ImageBackground_I3515_14535_3502_15048_3502_14645_3108_56209_2747_42674_3943_6834
                    }
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_I3515_14535_3502_15048_3502_14646}>
              <View style={styles.View_I3515_14535_3502_15048_3502_14784}>
                <View
                  style={
                    styles.View_I3515_14535_3502_15048_3502_14784_3107_57106
                  }
                >
                  <View
                    style={
                      styles.View_I3515_14535_3502_15048_3502_14784_3107_57106_3108_55515
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3515_14535_3502_15048_3502_14784_3107_57106_3108_55515
                      }
                    >
                      Send LTC
                    </Text>
                  </View>
                </View>
                <View
                  style={
                    styles.View_I3515_14535_3502_15048_3502_14784_3107_57126
                  }
                >
                  <View
                    style={
                      styles.View_I3515_14535_3502_15048_3502_14784_3107_57126_3108_55996
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3515_14535_3502_15048_3502_14784_3107_57126_3108_55996
                      }
                    >
                      0.329 LTC
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I3515_14535_3502_15048_3502_14648}>
                <View
                  style={styles.View_I3515_14535_3502_15048_3502_14648_3114_620}
                >
                  <View
                    style={
                      styles.View_I3515_14535_3502_15048_3502_14648_3114_620_3108_55569
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3515_14535_3502_15048_3502_14648_3114_620_3108_55569
                      }
                    >
                      Confirmed
                    </Text>
                  </View>
                </View>
                <View
                  style={styles.View_I3515_14535_3502_15048_3502_14648_3114_621}
                >
                  <View
                    style={
                      styles.View_I3515_14535_3502_15048_3502_14648_3114_621_3108_55998
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3515_14535_3502_15048_3502_14648_3114_621_3108_55998
                      }
                    >
                      $61.98031
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3515_14536}>
          <View style={styles.View_I3515_14536_3502_15047}>
            <View style={styles.View_I3515_14536_3502_15047_3114_3415}>
              <View
                style={styles.View_I3515_14536_3502_15047_3114_3415_3108_55569}
              >
                <Text
                  style={
                    styles.Text_I3515_14536_3502_15047_3114_3415_3108_55569
                  }
                >
                  #1 Mar 2 at 7:34 PM
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I3515_14536_3502_15048}>
            <View style={styles.View_I3515_14536_3502_15048_3502_14645}>
              <View
                style={styles.View_I3515_14536_3502_15048_3502_14645_3108_56209}
              >
                <View
                  style={
                    styles.View_I3515_14536_3502_15048_3502_14645_3108_56209_2747_42674
                  }
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90f4/b166/612bbd233f3e470f9f24955380fc80d6"
                    }}
                    style={
                      styles.ImageBackground_I3515_14536_3502_15048_3502_14645_3108_56209_2747_42674_3943_7391
                    }
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_I3515_14536_3502_15048_3502_14646}>
              <View style={styles.View_I3515_14536_3502_15048_3502_14784}>
                <View
                  style={
                    styles.View_I3515_14536_3502_15048_3502_14784_3107_57106
                  }
                >
                  <View
                    style={
                      styles.View_I3515_14536_3502_15048_3502_14784_3107_57106_3108_55515
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3515_14536_3502_15048_3502_14784_3107_57106_3108_55515
                      }
                    >
                      Received NEO
                    </Text>
                  </View>
                </View>
                <View
                  style={
                    styles.View_I3515_14536_3502_15048_3502_14784_3107_57126
                  }
                >
                  <View
                    style={
                      styles.View_I3515_14536_3502_15048_3502_14784_3107_57126_3108_55996
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3515_14536_3502_15048_3502_14784_3107_57126_3108_55996
                      }
                    >
                      3.49 NEO
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I3515_14536_3502_15048_3502_14648}>
                <View
                  style={styles.View_I3515_14536_3502_15048_3502_14648_3114_620}
                >
                  <View
                    style={
                      styles.View_I3515_14536_3502_15048_3502_14648_3114_620_3108_55569
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3515_14536_3502_15048_3502_14648_3114_620_3108_55569
                      }
                    >
                      Confirmed
                    </Text>
                  </View>
                </View>
                <View
                  style={styles.View_I3515_14536_3502_15048_3502_14648_3114_621}
                >
                  <View
                    style={
                      styles.View_I3515_14536_3502_15048_3502_14648_3114_621_3108_55998
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3515_14536_3502_15048_3502_14648_3114_621_3108_55998
                      }
                    >
                      $135.7959
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3515_14537}>
          <View style={styles.View_I3515_14537_3502_15047}>
            <View style={styles.View_I3515_14537_3502_15047_3114_3415}>
              <View
                style={styles.View_I3515_14537_3502_15047_3114_3415_3108_55569}
              >
                <Text
                  style={
                    styles.Text_I3515_14537_3502_15047_3114_3415_3108_55569
                  }
                >
                  #0 Mar 2 at 7:21 PM
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I3515_14537_3502_15048}>
            <View style={styles.View_I3515_14537_3502_15048_3502_14645}>
              <View
                style={styles.View_I3515_14537_3502_15048_3502_14645_3108_56209}
              >
                <View
                  style={
                    styles.View_I3515_14537_3502_15048_3502_14645_3108_56209_2747_42674
                  }
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c499/b127/c89c909941b2f5ce2570e5a5d084a30c"
                    }}
                    style={
                      styles.ImageBackground_I3515_14537_3502_15048_3502_14645_3108_56209_2747_42674_3943_6834
                    }
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_I3515_14537_3502_15048_3502_14646}>
              <View style={styles.View_I3515_14537_3502_15048_3502_14784}>
                <View
                  style={
                    styles.View_I3515_14537_3502_15048_3502_14784_3107_57106
                  }
                >
                  <View
                    style={
                      styles.View_I3515_14537_3502_15048_3502_14784_3107_57106_3108_55515
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3515_14537_3502_15048_3502_14784_3107_57106_3108_55515
                      }
                    >
                      Send NEO
                    </Text>
                  </View>
                </View>
                <View
                  style={
                    styles.View_I3515_14537_3502_15048_3502_14784_3107_57126
                  }
                >
                  <View
                    style={
                      styles.View_I3515_14537_3502_15048_3502_14784_3107_57126_3108_55996
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3515_14537_3502_15048_3502_14784_3107_57126_3108_55996
                      }
                    >
                      3.49 NEO
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I3515_14537_3502_15048_3502_14648}>
                <View
                  style={styles.View_I3515_14537_3502_15048_3502_14648_3114_620}
                >
                  <View
                    style={
                      styles.View_I3515_14537_3502_15048_3502_14648_3114_620_3108_55569
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3515_14537_3502_15048_3502_14648_3114_620_3108_55569
                      }
                    >
                      Confirmed
                    </Text>
                  </View>
                </View>
                <View
                  style={styles.View_I3515_14537_3502_15048_3502_14648_3114_621}
                >
                  <View
                    style={
                      styles.View_I3515_14537_3502_15048_3502_14648_3114_621_3108_55998
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3515_14537_3502_15048_3502_14648_3114_621_3108_55998
                      }
                    >
                      $61.98031
                    </Text>
                  </View>
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
  View_3515_14530: {
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
  View_I3515_14530_2892_44027: {
    flexGrow: 1,
    width: wp("30.266666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14530_2892_44027_2892_43256: {
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
  ImageBackground_I3515_14530_2892_44027_2892_43256_2730_41734: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3515_14530_2892_44028: {
    flexGrow: 1,
    width: wp("30.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.53333333333333%"),
    top: hp("1.0928961748633883%")
  },
  Text_I3515_14530_2892_44028: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_14530_2892_44029: {
    flexGrow: 1,
    width: wp("30.266666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.46666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3515_14531: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("89.61748633879782%"),
    minHeight: hp("89.61748633879782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("14.207650273224044%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3515_14532: {
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
  View_I3515_14532_3502_15442: {
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
  View_I3515_14532_3502_15442_3114_3415: {
    flexGrow: 1,
    width: wp("74.4%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.0928961748633892%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14532_3502_15442_3114_3415_3108_55569: {
    flexGrow: 1,
    width: wp("28.000000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_14532_3502_15442_3114_3415_3108_55569: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_14532_3502_15443: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060118%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3515_14532_3502_15443_3502_14645: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.5027322404371581%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14532_3502_15443_3502_14645_3108_56209: {
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
  View_I3515_14532_3502_15443_3502_14645_3108_56209_2747_42674: {
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
  ImageBackground_I3515_14532_3502_15443_3502_14645_3108_56209_2747_42674_3933_831: {
    flexGrow: 1,
    width: wp("7.993765258789062%"),
    height: hp("4.102020055218473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333321%"),
    top: hp("0.6830601092896167%")
  },
  View_I3515_14532_3502_15443_3502_14646: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666663%"),
    top: hp("0.5464480874316955%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14532_3502_15443_3502_14784: {
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
  View_I3515_14532_3502_15443_3502_14784_3107_57106: {
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
  View_I3515_14532_3502_15443_3502_14784_3107_57106_3108_55515: {
    flexGrow: 1,
    width: wp("44.800000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_14532_3502_15443_3502_14784_3107_57106_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_14532_3502_15443_3502_14784_3107_57126: {
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
  View_I3515_14532_3502_15443_3502_14784_3107_57126_3108_55996: {
    flexGrow: 1,
    width: wp("18.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_14532_3502_15443_3502_14784_3107_57126_3108_55996: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_14532_3502_15443_3502_14648: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737704%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14532_3502_15443_3502_14648_3114_620: {
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
  View_I3515_14532_3502_15443_3502_14648_3114_620_3108_55569: {
    flexGrow: 1,
    width: wp("13.066666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_14532_3502_15443_3502_14648_3114_620_3108_55569: {
    color: "rgba(242, 134, 2, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_14532_3502_15443_3502_14648_3114_621: {
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
  View_I3515_14532_3502_15443_3502_14648_3114_621_3108_55998: {
    flexGrow: 1,
    width: wp("16.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("0%")
  },
  Text_I3515_14532_3502_15443_3502_14648_3114_621_3108_55998: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3515_14533: {
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
  View_I3515_14533_3502_15047: {
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
  View_I3515_14533_3502_15047_3114_3415: {
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
  View_I3515_14533_3502_15047_3114_3415_3108_55569: {
    flexGrow: 1,
    width: wp("31.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_14533_3502_15047_3114_3415_3108_55569: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_14533_3502_15048: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060118%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3515_14533_3502_15048_3502_14645: {
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
  View_I3515_14533_3502_15048_3502_14645_3108_56209: {
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
  View_I3515_14533_3502_15048_3502_14645_3108_56209_2747_42674: {
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
  ImageBackground_I3515_14533_3502_15048_3502_14645_3108_56209_2747_42674_3943_7391: {
    flexGrow: 1,
    width: wp("8.000069173177083%"),
    height: hp("4.098396092816129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333007812499993%"),
    top: hp("0.6830601092896202%")
  },
  View_I3515_14533_3502_15048_3502_14646: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666663%"),
    top: hp("0.5464480874316919%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14533_3502_15048_3502_14784: {
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
  View_I3515_14533_3502_15048_3502_14784_3107_57106: {
    flexGrow: 1,
    width: wp("39.2%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14533_3502_15048_3502_14784_3107_57106_3108_55515: {
    flexGrow: 1,
    width: wp("39.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_14533_3502_15048_3502_14784_3107_57106_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_14533_3502_15048_3502_14784_3107_57126: {
    flexGrow: 1,
    width: wp("24%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.86666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14533_3502_15048_3502_14784_3107_57126_3108_55996: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_14533_3502_15048_3502_14784_3107_57126_3108_55996: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_14533_3502_15048_3502_14648: {
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
  View_I3515_14533_3502_15048_3502_14648_3114_620: {
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
  View_I3515_14533_3502_15048_3502_14648_3114_620_3108_55569: {
    flexGrow: 1,
    width: wp("16.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_14533_3502_15048_3502_14648_3114_620_3108_55569: {
    color: "rgba(16, 140, 74, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_14533_3502_15048_3502_14648_3114_621: {
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
  View_I3515_14533_3502_15048_3502_14648_3114_621_3108_55998: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6.666666666666671%"),
    top: hp("0%")
  },
  Text_I3515_14533_3502_15048_3502_14648_3114_621_3108_55998: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3515_14534: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30.601092896174865%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14534_3502_15144: {
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
  View_I3515_14534_3502_15144_3114_3415: {
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
  View_I3515_14534_3502_15144_3114_3415_3108_55569: {
    flexGrow: 1,
    width: wp("32.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_14534_3502_15144_3114_3415_3108_55569: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_14534_3502_15145: {
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
  View_I3515_14534_3502_15145_3502_14645: {
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
  View_I3515_14534_3502_15145_3502_14645_3108_56209: {
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
  View_I3515_14534_3502_15145_3502_14645_3108_56209_2747_42674: {
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
  ImageBackground_I3515_14534_3502_15145_3502_14645_3108_56209_2747_42674_3943_6834: {
    flexGrow: 1,
    width: wp("7.995566813151042%"),
    height: hp("4.100663023568242%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333321%"),
    top: hp("0.6830601092896131%")
  },
  View_I3515_14534_3502_15145_3502_14646: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666663%"),
    top: hp("0.5464480874316919%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14534_3502_15145_3502_14784: {
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
  View_I3515_14534_3502_15145_3502_14784_3107_57106: {
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
  View_I3515_14534_3502_15145_3502_14784_3107_57106_3108_55515: {
    flexGrow: 1,
    width: wp("39.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_14534_3502_15145_3502_14784_3107_57106_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_14534_3502_15145_3502_14784_3107_57126: {
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
  View_I3515_14534_3502_15145_3502_14784_3107_57126_3108_55996: {
    flexGrow: 1,
    width: wp("23.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_14534_3502_15145_3502_14784_3107_57126_3108_55996: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_14534_3502_15145_3502_14648: {
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
  View_I3515_14534_3502_15145_3502_14648_3114_620: {
    flexGrow: 1,
    width: wp("46.400000000000006%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737636%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14534_3502_15145_3502_14648_3114_620_3108_55569: {
    flexGrow: 1,
    width: wp("9.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_14534_3502_15145_3502_14648_3114_620_3108_55569: {
    color: "rgba(255, 73, 86, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_14534_3502_15145_3502_14648_3114_621: {
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
  View_I3515_14534_3502_15145_3502_14648_3114_621_3108_55998: {
    flexGrow: 1,
    width: wp("24.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-7.733333333333334%"),
    top: hp("0%")
  },
  Text_I3515_14534_3502_15145_3502_14648_3114_621_3108_55998: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3515_14535: {
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
  View_I3515_14535_3502_15047: {
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
  View_I3515_14535_3502_15047_3114_3415: {
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
  View_I3515_14535_3502_15047_3114_3415_3108_55569: {
    flexGrow: 1,
    width: wp("31.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_14535_3502_15047_3114_3415_3108_55569: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_14535_3502_15048: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060153%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3515_14535_3502_15048_3502_14645: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.5027322404371475%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14535_3502_15048_3502_14645_3108_56209: {
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
  View_I3515_14535_3502_15048_3502_14645_3108_56209_2747_42674: {
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
  ImageBackground_I3515_14535_3502_15048_3502_14645_3108_56209_2747_42674_3943_6834: {
    flexGrow: 1,
    width: wp("7.995566813151042%"),
    height: hp("4.100663023568242%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333321%"),
    top: hp("0.6830601092896131%")
  },
  View_I3515_14535_3502_15048_3502_14646: {
    flexGrow: 1,
    width: wp("65.86666666666666%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666663%"),
    top: hp("0.5464480874316919%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14535_3502_15048_3502_14784: {
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
  View_I3515_14535_3502_15048_3502_14784_3107_57106: {
    flexGrow: 1,
    width: wp("40%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14535_3502_15048_3502_14784_3107_57106_3108_55515: {
    flexGrow: 1,
    width: wp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_14535_3502_15048_3502_14784_3107_57106_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_14535_3502_15048_3502_14784_3107_57126: {
    flexGrow: 1,
    width: wp("23.200000000000003%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.66666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14535_3502_15048_3502_14784_3107_57126_3108_55996: {
    flexGrow: 1,
    width: wp("23.200000000000003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_14535_3502_15048_3502_14784_3107_57126_3108_55996: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_14535_3502_15048_3502_14648: {
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
  View_I3515_14535_3502_15048_3502_14648_3114_620: {
    flexGrow: 1,
    width: wp("46.400000000000006%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.40983606557378494%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14535_3502_15048_3502_14648_3114_620_3108_55569: {
    flexGrow: 1,
    width: wp("16.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_14535_3502_15048_3502_14648_3114_620_3108_55569: {
    color: "rgba(16, 140, 74, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_14535_3502_15048_3502_14648_3114_621: {
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
  View_I3515_14535_3502_15048_3502_14648_3114_621_3108_55998: {
    flexGrow: 1,
    width: wp("21.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.266666666666666%"),
    top: hp("0%")
  },
  Text_I3515_14535_3502_15048_3502_14648_3114_621_3108_55998: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3515_14536: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("61.202185792349724%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14536_3502_15047: {
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
  View_I3515_14536_3502_15047_3114_3415: {
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
  View_I3515_14536_3502_15047_3114_3415_3108_55569: {
    flexGrow: 1,
    width: wp("30.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_14536_3502_15047_3114_3415_3108_55569: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_14536_3502_15048: {
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
  View_I3515_14536_3502_15048_3502_14645: {
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
  View_I3515_14536_3502_15048_3502_14645_3108_56209: {
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
  View_I3515_14536_3502_15048_3502_14645_3108_56209_2747_42674: {
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
  ImageBackground_I3515_14536_3502_15048_3502_14645_3108_56209_2747_42674_3943_7391: {
    flexGrow: 1,
    width: wp("8.000069173177083%"),
    height: hp("4.098396092816129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333007812499993%"),
    top: hp("0.6830601092896273%")
  },
  View_I3515_14536_3502_15048_3502_14646: {
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
  View_I3515_14536_3502_15048_3502_14784: {
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
  View_I3515_14536_3502_15048_3502_14784_3107_57106: {
    flexGrow: 1,
    width: wp("41.333333333333336%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14536_3502_15048_3502_14784_3107_57106_3108_55515: {
    flexGrow: 1,
    width: wp("41.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_14536_3502_15048_3502_14784_3107_57106_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_14536_3502_15048_3502_14784_3107_57126: {
    flexGrow: 1,
    width: wp("21.866666666666667%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14536_3502_15048_3502_14784_3107_57126_3108_55996: {
    flexGrow: 1,
    width: wp("21.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_14536_3502_15048_3502_14784_3107_57126_3108_55996: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_14536_3502_15048_3502_14648: {
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
  View_I3515_14536_3502_15048_3502_14648_3114_620: {
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
  View_I3515_14536_3502_15048_3502_14648_3114_620_3108_55569: {
    flexGrow: 1,
    width: wp("16.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_14536_3502_15048_3502_14648_3114_620_3108_55569: {
    color: "rgba(16, 140, 74, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_14536_3502_15048_3502_14648_3114_621: {
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
  View_I3515_14536_3502_15048_3502_14648_3114_621_3108_55998: {
    flexGrow: 1,
    width: wp("21.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.533333333333331%"),
    top: hp("0%")
  },
  Text_I3515_14536_3502_15048_3502_14648_3114_621_3108_55998: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3515_14537: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("76.50273224043715%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14537_3502_15047: {
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
  View_I3515_14537_3502_15047_3114_3415: {
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
  View_I3515_14537_3502_15047_3114_3415_3108_55569: {
    flexGrow: 1,
    width: wp("30.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_14537_3502_15047_3114_3415_3108_55569: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_14537_3502_15048: {
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
  View_I3515_14537_3502_15048_3502_14645: {
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
  View_I3515_14537_3502_15048_3502_14645_3108_56209: {
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
  View_I3515_14537_3502_15048_3502_14645_3108_56209_2747_42674: {
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
  ImageBackground_I3515_14537_3502_15048_3502_14645_3108_56209_2747_42674_3943_6834: {
    flexGrow: 1,
    width: wp("7.995566813151042%"),
    height: hp("4.100663023568242%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333321%"),
    top: hp("0.6830601092896131%")
  },
  View_I3515_14537_3502_15048_3502_14646: {
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
  View_I3515_14537_3502_15048_3502_14784: {
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
  View_I3515_14537_3502_15048_3502_14784_3107_57106: {
    flexGrow: 1,
    width: wp("41.333333333333336%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14537_3502_15048_3502_14784_3107_57106_3108_55515: {
    flexGrow: 1,
    width: wp("41.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_14537_3502_15048_3502_14784_3107_57106_3108_55515: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_14537_3502_15048_3502_14784_3107_57126: {
    flexGrow: 1,
    width: wp("21.866666666666667%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3515_14537_3502_15048_3502_14784_3107_57126_3108_55996: {
    flexGrow: 1,
    width: wp("21.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_14537_3502_15048_3502_14784_3107_57126_3108_55996: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_14537_3502_15048_3502_14648: {
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
  View_I3515_14537_3502_15048_3502_14648_3114_620: {
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
  View_I3515_14537_3502_15048_3502_14648_3114_620_3108_55569: {
    flexGrow: 1,
    width: wp("16.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3515_14537_3502_15048_3502_14648_3114_620_3108_55569: {
    color: "rgba(16, 140, 74, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3515_14537_3502_15048_3502_14648_3114_621: {
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
  View_I3515_14537_3502_15048_3502_14648_3114_621_3108_55998: {
    flexGrow: 1,
    width: wp("21.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.266666666666666%"),
    top: hp("0%")
  },
  Text_I3515_14537_3502_15048_3502_14648_3114_621_3108_55998: {
    color: "rgba(118, 126, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
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
