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
      <View style={styles.View_3616_19156}>
        <View style={styles.View_I3616_19156_704_11279} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da78/9e1d/32dc693200ea9afa09c0eed02d6e60d1"
          }}
          style={styles.ImageBackground_I3616_19156_704_11280}
        />
        <View style={styles.View_I3616_19156_704_11281} />
        <View style={styles.View_I3616_19156_3658_29013}>
          <View style={styles.View_I3616_19156_3658_27688}>
            <Text style={styles.Text_I3616_19156_3658_27688}>
              Import Form Seed
            </Text>
          </View>
        </View>
        <View style={styles.View_I3616_19156_3658_24597} />
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("3616_19252"))
        }
      >
        <View style={styles.View_3616_19162}>
          <View style={styles.View_3616_19163}>
            <View style={styles.View_I3616_19163_2586_54115}>
              <View style={styles.View_I3616_19163_2586_54116}>
                <Text style={styles.Text_I3616_19163_2586_54116}>••••</Text>
              </View>
              <View style={styles.View_I3616_19163_2586_54117}>
                <Text style={styles.Text_I3616_19163_2586_54117}>|</Text>
              </View>
            </View>
            <View style={styles.View_I3616_19163_1246_31893}>
              <View style={styles.View_I3616_19163_1246_31893_3614_35}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67b7/137c/d1995901858a5b1cc05ad17be4393fca"
                  }}
                  style={
                    styles.ImageBackground_I3616_19163_1246_31893_3614_35_3589_206
                  }
                />
              </View>
              <View style={styles.View_I3616_19163_1246_31893_3614_45}>
                <View
                  style={styles.View_I3616_19163_1246_31893_3614_45_3020_52674}
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f174/1f03/3f490c6c5cf79a4280943c965d1c5314"
                    }}
                    style={
                      styles.ImageBackground_I3616_19163_1246_31893_3614_45_3020_52675
                    }
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_I3616_19163_1246_31894}>
              <Text style={styles.Text_I3616_19163_1246_31894}>
                Seed phrase
              </Text>
            </View>
          </View>
          <View style={styles.View_3616_19164}>
            <View style={styles.View_I3616_19164_1234_32585}>
              <Text style={styles.Text_I3616_19164_1234_32585}>
                New password
              </Text>
            </View>
            <View style={styles.View_I3616_19164_1234_32586}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67b7/137c/d1995901858a5b1cc05ad17be4393fca"
                }}
                style={styles.ImageBackground_I3616_19164_1234_32586_3589_206}
              />
            </View>
          </View>
          <View style={styles.View_3616_19165}>
            <View style={styles.View_I3616_19165_1234_32585}>
              <Text style={styles.Text_I3616_19165_1234_32585}>
                Confirm password
              </Text>
            </View>
            <View style={styles.View_I3616_19165_1234_32586}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67b7/137c/d1995901858a5b1cc05ad17be4393fca"
                }}
                style={styles.ImageBackground_I3616_19165_1234_32586_3589_206}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_3616_19158}>
        <View style={styles.View_3616_19159}>
          <Text style={styles.Text_3616_19159}>Sign in with Face ID?</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4755/8f2d/4ec41290b3d4562139fd8fb21307db6a"
          }}
          style={styles.ImageBackground_3616_19160}
        />
      </View>
      <View style={styles.View_3618_132}>
        <View style={styles.View_I3618_132_1897_13605}>
          <Text style={styles.Text_I3618_132_1897_13605}>Import</Text>
        </View>
      </View>
      <View style={styles.View_3618_135}>
        <View style={styles.View_I3618_135_578_400}>
          <View style={styles.View_I3618_135_578_401} />
        </View>
        <View style={styles.View_I3618_135_741_5607}>
          <View style={styles.View_I3618_135_741_5607_712_1663} />
          <View style={styles.View_I3618_135_741_5607_712_1881}>
            <View style={styles.View_I3618_135_741_5607_712_1882} />
          </View>
          <View style={styles.View_I3618_135_741_5607_712_1665}>
            <View style={styles.View_I3618_135_741_5607_712_1666}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/500c/8635/23c645fff4dbb9746420e7019da0cfda"
                }}
                style={styles.ImageBackground_I3618_135_741_5607_712_1667}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e18/6776/367af020468e89fabf1040391329d48a"
                }}
                style={styles.ImageBackground_I3618_135_741_5607_712_1673}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebf2/ae37/5fa6fd4ff8d0a4c08a929adc1044ab21"
                }}
                style={styles.ImageBackground_I3618_135_741_5607_712_1674}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9317/7973/938be6ac87418034d6928efdb86530b6"
              }}
              style={styles.ImageBackground_I3618_135_741_5607_712_1675}
            />
            <View style={styles.View_I3618_135_741_5607_712_1878}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c6e/bf8d/925017302edca47807f877089a17458f"
                }}
                style={styles.ImageBackground_I3618_135_741_5607_712_1879}
              />
              <View style={styles.View_I3618_135_741_5607_712_1880}>
                <Text style={styles.Text_I3618_135_741_5607_712_1880}>
                  Enter
                </Text>
              </View>
            </View>
            <View style={styles.View_I3618_135_741_5607_712_1875}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb1e/fafc/38bd3f8bc8fcd8744e55cb82fb70b08c"
                }}
                style={styles.ImageBackground_I3618_135_741_5607_712_1876}
              />
              <View style={styles.View_I3618_135_741_5607_712_1877}>
                <Text style={styles.Text_I3618_135_741_5607_712_1877}>
                  Space
                </Text>
              </View>
            </View>
            <View style={styles.View_I3618_135_741_5607_712_1872}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acdd/463d/0100a1c79169024aefd5598942a33048"
                }}
                style={styles.ImageBackground_I3618_135_741_5607_712_1873}
              />
              <View style={styles.View_I3618_135_741_5607_712_1874}>
                <Text style={styles.Text_I3618_135_741_5607_712_1874}>123</Text>
              </View>
            </View>
            <View style={styles.View_I3618_135_741_5607_712_1685}>
              <View style={styles.View_I3618_135_741_5607_712_1869}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb20/c976/95b76f9efb93520a356a6e2c5c3a165f"
                  }}
                  style={styles.ImageBackground_I3618_135_741_5607_712_1870}
                />
                <View style={styles.View_I3618_135_741_5607_712_1871}>
                  <Text style={styles.Text_I3618_135_741_5607_712_1871}> </Text>
                </View>
              </View>
              <View style={styles.View_I3618_135_741_5607_712_1687}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c39/64fb/b73a8085ea4531d8f63951d655fd1d31"
                  }}
                  style={styles.ImageBackground_I3618_135_741_5607_712_1688}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e5e/469c/ab3e38f9d7e0700ffd7f6a210831a60a"
                  }}
                  style={styles.ImageBackground_I3618_135_741_5607_712_1691}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                  }}
                  style={styles.ImageBackground_I3618_135_741_5607_712_1692}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                  }}
                  style={styles.ImageBackground_I3618_135_741_5607_712_1693}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                  }}
                  style={styles.ImageBackground_I3618_135_741_5607_712_1694}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                  }}
                  style={styles.ImageBackground_I3618_135_741_5607_712_1695}
                />
              </View>
            </View>
            <View style={styles.View_I3618_135_741_5607_712_1696}>
              <View style={styles.View_I3618_135_741_5607_712_1866}>
                <View style={styles.View_I3618_135_741_5607_712_1867} />
                <View style={styles.View_I3618_135_741_5607_712_1868}>
                  <Text style={styles.Text_I3618_135_741_5607_712_1868}> </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1466/851d/cc937625fc7f204c3b48bc238e82f5b5"
                }}
                style={styles.ImageBackground_I3618_135_741_5607_712_1698}
              />
            </View>
            <View style={styles.View_I3618_135_741_5607_712_1863}>
              <View style={styles.View_I3618_135_741_5607_712_1864} />
              <View style={styles.View_I3618_135_741_5607_712_1865}>
                <Text style={styles.Text_I3618_135_741_5607_712_1865}>M</Text>
              </View>
            </View>
            <View style={styles.View_I3618_135_741_5607_712_1860}>
              <View style={styles.View_I3618_135_741_5607_712_1861} />
              <View style={styles.View_I3618_135_741_5607_712_1862}>
                <Text style={styles.Text_I3618_135_741_5607_712_1862}>N</Text>
              </View>
            </View>
            <View style={styles.View_I3618_135_741_5607_712_1857}>
              <View style={styles.View_I3618_135_741_5607_712_1858} />
              <View style={styles.View_I3618_135_741_5607_712_1859}>
                <Text style={styles.Text_I3618_135_741_5607_712_1859}>B</Text>
              </View>
            </View>
            <View style={styles.View_I3618_135_741_5607_712_1854}>
              <View style={styles.View_I3618_135_741_5607_712_1855} />
              <View style={styles.View_I3618_135_741_5607_712_1856}>
                <Text style={styles.Text_I3618_135_741_5607_712_1856}>V</Text>
              </View>
            </View>
            <View style={styles.View_I3618_135_741_5607_712_1851}>
              <View style={styles.View_I3618_135_741_5607_712_1852} />
              <View style={styles.View_I3618_135_741_5607_712_1853}>
                <Text style={styles.Text_I3618_135_741_5607_712_1853}>C</Text>
              </View>
            </View>
            <View style={styles.View_I3618_135_741_5607_712_1848}>
              <View style={styles.View_I3618_135_741_5607_712_1849} />
              <View style={styles.View_I3618_135_741_5607_712_1850}>
                <Text style={styles.Text_I3618_135_741_5607_712_1850}>X</Text>
              </View>
            </View>
            <View style={styles.View_I3618_135_741_5607_712_1845}>
              <View style={styles.View_I3618_135_741_5607_712_1846} />
              <View style={styles.View_I3618_135_741_5607_712_1847}>
                <Text style={styles.Text_I3618_135_741_5607_712_1847}>Z</Text>
              </View>
            </View>
            <View style={styles.View_I3618_135_741_5607_712_1842}>
              <View style={styles.View_I3618_135_741_5607_712_1843} />
              <View style={styles.View_I3618_135_741_5607_712_1844}>
                <Text style={styles.Text_I3618_135_741_5607_712_1844}>L</Text>
              </View>
            </View>
            <View style={styles.View_I3618_135_741_5607_712_1839}>
              <View style={styles.View_I3618_135_741_5607_712_1840} />
              <View style={styles.View_I3618_135_741_5607_712_1841}>
                <Text style={styles.Text_I3618_135_741_5607_712_1841}>K</Text>
              </View>
            </View>
            <View style={styles.View_I3618_135_741_5607_712_1836}>
              <View style={styles.View_I3618_135_741_5607_712_1837} />
              <View style={styles.View_I3618_135_741_5607_712_1838}>
                <Text style={styles.Text_I3618_135_741_5607_712_1838}>J</Text>
              </View>
            </View>
            <View style={styles.View_I3618_135_741_5607_712_1833}>
              <View style={styles.View_I3618_135_741_5607_712_1834} />
              <View style={styles.View_I3618_135_741_5607_712_1835}>
                <Text style={styles.Text_I3618_135_741_5607_712_1835}>H</Text>
              </View>
            </View>
            <View style={styles.View_I3618_135_741_5607_712_1830}>
              <View style={styles.View_I3618_135_741_5607_712_1831} />
              <View style={styles.View_I3618_135_741_5607_712_1832}>
                <Text style={styles.Text_I3618_135_741_5607_712_1832}>G</Text>
              </View>
            </View>
            <View style={styles.View_I3618_135_741_5607_712_1827}>
              <View style={styles.View_I3618_135_741_5607_712_1828} />
              <View style={styles.View_I3618_135_741_5607_712_1829}>
                <Text style={styles.Text_I3618_135_741_5607_712_1829}>F</Text>
              </View>
            </View>
            <View style={styles.View_I3618_135_741_5607_712_1824}>
              <View style={styles.View_I3618_135_741_5607_712_1825} />
              <View style={styles.View_I3618_135_741_5607_712_1826}>
                <Text style={styles.Text_I3618_135_741_5607_712_1826}>D</Text>
              </View>
            </View>
            <View style={styles.View_I3618_135_741_5607_712_1821}>
              <View style={styles.View_I3618_135_741_5607_712_1822} />
              <View style={styles.View_I3618_135_741_5607_712_1823}>
                <Text style={styles.Text_I3618_135_741_5607_712_1823}>S</Text>
              </View>
            </View>
            <View style={styles.View_I3618_135_741_5607_712_1818}>
              <View style={styles.View_I3618_135_741_5607_712_1819} />
              <View style={styles.View_I3618_135_741_5607_712_1820}>
                <Text style={styles.Text_I3618_135_741_5607_712_1820}>A</Text>
              </View>
            </View>
            <View style={styles.View_I3618_135_741_5607_712_1815}>
              <View style={styles.View_I3618_135_741_5607_712_1816} />
              <View style={styles.View_I3618_135_741_5607_712_1817}>
                <Text style={styles.Text_I3618_135_741_5607_712_1817}>P</Text>
              </View>
            </View>
            <View style={styles.View_I3618_135_741_5607_712_1812}>
              <View style={styles.View_I3618_135_741_5607_712_1813} />
              <View style={styles.View_I3618_135_741_5607_712_1814}>
                <Text style={styles.Text_I3618_135_741_5607_712_1814}>O</Text>
              </View>
            </View>
            <View style={styles.View_I3618_135_741_5607_712_1809}>
              <View style={styles.View_I3618_135_741_5607_712_1810} />
              <View style={styles.View_I3618_135_741_5607_712_1811}>
                <Text style={styles.Text_I3618_135_741_5607_712_1811}>I</Text>
              </View>
            </View>
            <View style={styles.View_I3618_135_741_5607_712_1806}>
              <View style={styles.View_I3618_135_741_5607_712_1807} />
              <View style={styles.View_I3618_135_741_5607_712_1808}>
                <Text style={styles.Text_I3618_135_741_5607_712_1808}>U</Text>
              </View>
            </View>
            <View style={styles.View_I3618_135_741_5607_712_1803}>
              <View style={styles.View_I3618_135_741_5607_712_1804} />
              <View style={styles.View_I3618_135_741_5607_712_1805}>
                <Text style={styles.Text_I3618_135_741_5607_712_1805}>Y</Text>
              </View>
            </View>
            <View style={styles.View_I3618_135_741_5607_712_1800}>
              <View style={styles.View_I3618_135_741_5607_712_1801} />
              <View style={styles.View_I3618_135_741_5607_712_1802}>
                <Text style={styles.Text_I3618_135_741_5607_712_1802}>T</Text>
              </View>
            </View>
            <View style={styles.View_I3618_135_741_5607_712_1797}>
              <View style={styles.View_I3618_135_741_5607_712_1798} />
              <View style={styles.View_I3618_135_741_5607_712_1799}>
                <Text style={styles.Text_I3618_135_741_5607_712_1799}>R</Text>
              </View>
            </View>
            <View style={styles.View_I3618_135_741_5607_712_1794}>
              <View style={styles.View_I3618_135_741_5607_712_1795} />
              <View style={styles.View_I3618_135_741_5607_712_1796}>
                <Text style={styles.Text_I3618_135_741_5607_712_1796}>E</Text>
              </View>
            </View>
            <View style={styles.View_I3618_135_741_5607_712_1791}>
              <View style={styles.View_I3618_135_741_5607_712_1792} />
              <View style={styles.View_I3618_135_741_5607_712_1793}>
                <Text style={styles.Text_I3618_135_741_5607_712_1793}>W</Text>
              </View>
            </View>
            <View style={styles.View_I3618_135_741_5607_712_1788}>
              <View style={styles.View_I3618_135_741_5607_712_1789} />
              <View style={styles.View_I3618_135_741_5607_712_1790}>
                <Text style={styles.Text_I3618_135_741_5607_712_1790}>Q</Text>
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
  View_3616_19156: {
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
  View_I3616_19156_704_11279: {
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
  ImageBackground_I3616_19156_704_11280: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.0109289617486334%")
  },
  View_I3616_19156_704_11281: {
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
  View_I3616_19156_3658_29013: {
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
  View_I3616_19156_3658_27688: {
    width: wp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0%")
  },
  Text_I3616_19156_3658_27688: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3616_19156_3658_24597: {
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
  View_3616_19162: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("19.398907103825135%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3616_19163: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3616_19163_2586_54115: {
    flexGrow: 1,
    width: wp("8.266666666666666%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("3.278688524590166%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3616_19163_2586_54116: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3616_19163_2586_54116: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3616_19163_2586_54117: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.93333333333333%"),
    top: hp("0%")
  },
  Text_I3616_19163_2586_54117: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3616_19163_1246_31893: {
    flexGrow: 1,
    width: wp("17.066666666666666%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.86666666666666%"),
    top: hp("2.1857923497267784%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3616_19163_1246_31893_3614_35: {
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
  ImageBackground_I3616_19163_1246_31893_3614_35_3589_206: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.6830601092896167%")
  },
  View_I3616_19163_1246_31893_3614_45: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666671%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3616_19163_1246_31893_3614_45_3020_52674: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3616_19163_1246_31893_3614_45_3020_52675: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3616_19163_1246_31894: {
    flexGrow: 1,
    width: wp("19.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.092896174863391%")
  },
  Text_I3616_19163_1246_31894: {
    color: "rgba(175, 180, 192, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3616_19164: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.836065573770494%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3616_19164_1234_32585: {
    flexGrow: 1,
    width: wp("27.200000000000003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.1857923497267784%")
  },
  Text_I3616_19164_1234_32585: {
    color: "rgba(175, 180, 192, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3616_19164_1234_32586: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.2786882640234105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%"),
    top: hp("2.1857923497267784%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3616_19164_1234_32586_3589_206: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.6830601092896167%")
  },
  View_3616_19165: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.672131147540984%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3616_19165_1234_32585: {
    flexGrow: 1,
    width: wp("33.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.185792349726782%")
  },
  Text_I3616_19165_1234_32585: {
    color: "rgba(175, 180, 192, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3616_19165_1234_32586: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.2786882640234105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3616_19165_1234_32586_3589_206: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.6830601092896131%")
  },
  View_3616_19158: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("48.90710382513661%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3616_19159: {
    width: wp("47.199999999999996%"),
    minWidth: wp("47.199999999999996%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%")
  },
  Text_3616_19159: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3616_19160: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%")
  },
  View_3618_132: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("96.44808743169399%"),
    backgroundColor: "rgba(244, 244, 246, 1)"
  },
  View_I3618_132_1897_13605: {
    flexGrow: 1,
    width: wp("14.133333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.53333333333334%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3618_132_1897_13605: {
    color: "rgba(221, 223, 228, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3618_135: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("39.75409836065574%"),
    minHeight: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("71.17486338797814%"),
    backgroundColor: "rgba(209, 213, 219, 1)"
  },
  View_I3618_135_578_400: {
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
  View_I3618_135_578_401: {
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
  View_I3618_135_741_5607: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(204, 206, 211, 1)"
  },
  View_I3618_135_741_5607_712_1663: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(209, 213, 219, 1)"
  },
  View_I3618_135_741_5607_712_1881: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.10928961748634%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3618_135_741_5607_712_1882: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(9, 10, 11, 1)"
  },
  View_I3618_135_741_5607_712_1665: {
    flexGrow: 1,
    width: wp("98.4%"),
    height: hp("35.38251366120219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8%"),
    top: hp("1.092896174863398%")
  },
  View_I3618_135_741_5607_712_1666: {
    width: wp("4%"),
    height: hp("3.415300546448088%"),
    top: hp("31.83060109289616%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%")
  },
  ImageBackground_I3618_135_741_5607_712_1667: {
    width: wp("4%"),
    height: hp("2.003851744646583%"),
    top: hp("1.4114463264173764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3618_135_741_5607_712_1673: {
    width: wp("2.401971689860026%"),
    height: hp("2.458455393223163%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%")
  },
  ImageBackground_I3618_135_741_5607_712_1674: {
    width: wp("1.512916310628255%"),
    height: hp("2.003853568613855%"),
    top: hp("0.2278145545167547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2443033854166714%")
  },
  ImageBackground_I3618_135_741_5607_712_1675: {
    width: wp("7.199999999999999%"),
    height: hp("3.6885245901639343%"),
    top: hp("31.69398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%")
  },
  View_I3618_135_741_5607_712_1878: {
    width: wp("23.466666666666665%"),
    height: hp("5.737704918032787%"),
    top: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3618_135_741_5607_712_1879: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3618_135_741_5607_712_1880: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3618_135_741_5607_712_1880: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I3618_135_741_5607_712_1875: {
    width: wp("48.53333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3618_135_741_5607_712_1876: {
    flexGrow: 1,
    width: wp("48.53333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3618_135_741_5607_712_1877: {
    flexGrow: 1,
    width: wp("48.53333333333333%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3618_135_741_5607_712_1877: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I3618_135_741_5607_712_1872: {
    width: wp("23.200000000000003%"),
    height: hp("5.737704918032787%"),
    top: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3618_135_741_5607_712_1873: {
    flexGrow: 1,
    width: wp("23.200000000000003%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3618_135_741_5607_712_1874: {
    flexGrow: 1,
    width: wp("23.200000000000003%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3618_135_741_5607_712_1874: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I3618_135_741_5607_712_1685: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%")
  },
  View_I3618_135_741_5607_712_1869: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3618_135_741_5607_712_1870: {
    flexGrow: 1,
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3618_135_741_5607_712_1871: {
    flexGrow: 1,
    width: wp("11.200000000000001%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3618_135_741_5607_712_1871: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I3618_135_741_5607_712_1687: {
    width: wp("6.042666625976563%"),
    height: hp("2.3216109458214595%"),
    top: hp("1.7295128660775276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5760091145833286%")
  },
  ImageBackground_I3618_135_741_5607_712_1688: {
    width: wp("6.042666625976563%"),
    height: hp("2.3216109458214595%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3618_135_741_5607_712_1691: {
    width: wp("1.7841803232828777%"),
    height: hp("0.9131669998168945%"),
    top: hp("0.7033551325563536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7613281250000057%")
  },
  ImageBackground_I3618_135_741_5607_712_1692: {
    width: wp("0.3007041931152344%"),
    height: hp("0.15417674525839384%"),
    top: hp("0.679791559938522%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.287076822916674%")
  },
  ImageBackground_I3618_135_741_5607_712_1693: {
    width: wp("0.30211896896362306%"),
    height: hp("0.15477867074351492%"),
    top: hp("1.4832543545082046%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.71731770833334%")
  },
  ImageBackground_I3618_135_741_5607_712_1694: {
    width: wp("0.30095300674438474%"),
    height: hp("0.15404927925985368%"),
    top: hp("1.4841381969347651%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.289713541666671%")
  },
  ImageBackground_I3618_135_741_5607_712_1695: {
    width: wp("0.3021279652913411%"),
    height: hp("0.1547740619690692%"),
    top: hp("0.679958322660525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.72018229166666%")
  },
  View_I3618_135_741_5607_712_1696: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3618_135_741_5607_712_1866: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3618_135_741_5607_712_1867: {
    flexGrow: 1,
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I3618_135_741_5607_712_1868: {
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.383333333333333%"),
    top: hp("1.092896174863398%")
  },
  Text_I3618_135_741_5607_712_1868: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  ImageBackground_I3618_135_741_5607_712_1698: {
    width: wp("5.034666442871093%"),
    height: hp("2.2481243467070366%"),
    top: hp("1.6666599961577901%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.109326171875%")
  },
  View_I3618_135_741_5607_712_1863: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3618_135_741_5607_712_1864: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I3618_135_741_5607_712_1865: {
    width: wp("5.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000085%"),
    top: hp("1.092896174863398%")
  },
  Text_I3618_135_741_5607_712_1865: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3618_135_741_5607_712_1860: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3618_135_741_5607_712_1861: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I3618_135_741_5607_712_1862: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.13333333333334%"),
    top: hp("1.092896174863398%")
  },
  Text_I3618_135_741_5607_712_1862: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3618_135_741_5607_712_1857: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3618_135_741_5607_712_1858: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I3618_135_741_5607_712_1859: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("1.092896174863398%")
  },
  Text_I3618_135_741_5607_712_1859: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3618_135_741_5607_712_1854: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3618_135_741_5607_712_1855: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I3618_135_741_5607_712_1856: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.092896174863398%")
  },
  Text_I3618_135_741_5607_712_1856: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3618_135_741_5607_712_1851: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3618_135_741_5607_712_1852: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I3618_135_741_5607_712_1853: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.092896174863398%")
  },
  Text_I3618_135_741_5607_712_1853: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3618_135_741_5607_712_1848: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3618_135_741_5607_712_1849: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I3618_135_741_5607_712_1850: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333364%"),
    top: hp("1.092896174863398%")
  },
  Text_I3618_135_741_5607_712_1850: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3618_135_741_5607_712_1845: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333332%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3618_135_741_5607_712_1846: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I3618_135_741_5607_712_1847: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%"),
    top: hp("1.092896174863398%")
  },
  Text_I3618_135_741_5607_712_1847: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3618_135_741_5607_712_1842: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3618_135_741_5607_712_1843: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I3618_135_741_5607_712_1844: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%"),
    top: hp("1.0928961748633697%")
  },
  Text_I3618_135_741_5607_712_1844: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3618_135_741_5607_712_1839: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3618_135_741_5607_712_1840: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I3618_135_741_5607_712_1841: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    top: hp("1.0928961748633697%")
  },
  Text_I3618_135_741_5607_712_1841: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3618_135_741_5607_712_1836: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3618_135_741_5607_712_1837: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I3618_135_741_5607_712_1838: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("1.0928961748633697%")
  },
  Text_I3618_135_741_5607_712_1838: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3618_135_741_5607_712_1833: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3618_135_741_5607_712_1834: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I3618_135_741_5607_712_1835: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.0928961748633697%")
  },
  Text_I3618_135_741_5607_712_1835: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3618_135_741_5607_712_1830: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3618_135_741_5607_712_1831: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I3618_135_741_5607_712_1832: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.0928961748633697%")
  },
  Text_I3618_135_741_5607_712_1832: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3618_135_741_5607_712_1827: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3618_135_741_5607_712_1828: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I3618_135_741_5607_712_1829: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("1.0928961748633697%")
  },
  Text_I3618_135_741_5607_712_1829: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3618_135_741_5607_712_1824: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3618_135_741_5607_712_1825: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I3618_135_741_5607_712_1826: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333364%"),
    top: hp("1.0928961748633697%")
  },
  Text_I3618_135_741_5607_712_1826: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3618_135_741_5607_712_1821: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333332%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3618_135_741_5607_712_1822: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I3618_135_741_5607_712_1823: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%"),
    top: hp("1.0928961748633697%")
  },
  Text_I3618_135_741_5607_712_1823: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3618_135_741_5607_712_1818: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3618_135_741_5607_712_1819: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I3618_135_741_5607_712_1820: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333337%"),
    top: hp("1.0928961748633697%")
  },
  Text_I3618_135_741_5607_712_1820: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3618_135_741_5607_712_1815: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.86666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3618_135_741_5607_712_1816: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I3618_135_741_5607_712_1817: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3618_135_741_5607_712_1817: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3618_135_741_5607_712_1812: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.00000000000001%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3618_135_741_5607_712_1813: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I3618_135_741_5607_712_1814: {
    width: wp("4.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86666666666666%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3618_135_741_5607_712_1814: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3618_135_741_5607_712_1809: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.86666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3618_135_741_5607_712_1810: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I3618_135_741_5607_712_1811: {
    width: wp("1.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666544%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3618_135_741_5607_712_1811: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3618_135_741_5607_712_1806: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3618_135_741_5607_712_1807: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I3618_135_741_5607_712_1808: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3618_135_741_5607_712_1808: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3618_135_741_5607_712_1803: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.866666666666674%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3618_135_741_5607_712_1804: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I3618_135_741_5607_712_1805: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3618_135_741_5607_712_1805: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3618_135_741_5607_712_1800: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3618_135_741_5607_712_1801: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I3618_135_741_5607_712_1802: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3618_135_741_5607_712_1802: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3618_135_741_5607_712_1797: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.866666666666664%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3618_135_741_5607_712_1798: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I3618_135_741_5607_712_1799: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3618_135_741_5607_712_1799: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3618_135_741_5607_712_1794: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3618_135_741_5607_712_1795: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I3618_135_741_5607_712_1796: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.400000000000002%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3618_135_741_5607_712_1796: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3618_135_741_5607_712_1791: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3618_135_741_5607_712_1792: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I3618_135_741_5607_712_1793: {
    width: wp("5.866666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333321%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3618_135_741_5607_712_1793: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3618_135_741_5607_712_1788: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3618_135_741_5607_712_1789: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I3618_135_741_5607_712_1790: {
    width: wp("4.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.866666666666667%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3618_135_741_5607_712_1790: {
    color: "rgba(9, 10, 11, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
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
