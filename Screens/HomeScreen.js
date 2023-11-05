import { Image, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";
import {CalendarDaysIcon, MagnifyingGlassIcon} from "react-native-heroicons/outline"
import {MapPinIcon} from "react-native-heroicons/solid"

import { useState } from "react";

export default function Homescreen(){

    const [city, setCity] = useState("")
    const [ locations, setLocations ] = useState([1,2,3])
    const [viewLocations, setViewLocations] = useState(false)

    const handleLocation = (loc) =>{
        console.log("Location",loc)
    }

    return (
        <View style={{flex:1, position:"relative"}}>
            <StatusBar style="light" />
            <Image 
                source={require('../assets/images/bg.png')}
                blurRadius={70}
                style={{position:"absolute", height:"100%", width:"100%"}}
            />
            <SafeAreaView style={{display:"flex", flex:1, marginTop:5}}>
                {/* search section */}
                <View style={{height:20, marginHorizontal:10, position:"relative", zIndex:50}}>
                    <View
                        style={{
                            flexDirection:"row",
                            alignItems:"center",
                            borderRadius:20,
                            backgroundColor:'rgba(255, 255, 255, 0.301)',
                        }}
                    >
                        <TextInput 
                            placeholder="Search City" 
                            placeholderTextColor="lightgray"
                            value={city}
                            onChangeText={setCity}
                            style={{
                                height: 40,
                                flex:1,
                                // margin: 12,
                                // borderWidth: 1,
                                padding: 10,
                                // borderWidth: 2,
                                // borderColor: "white",
                                // borderRadius: 20,
                                // textAlign:"center",
                                // backgroundColor:'rgba(255, 255, 255, 0.301)',
                                color:"white",
                            }}
                        />
                        <TouchableOpacity style={{
                            backgroundColor:'rgba(250, 250, 250, 0.158)',
                            padding:7,
                            borderRadius:50 
                        }}
                            onPress={()=>{}}
                        >
                            <MagnifyingGlassIcon 
                                size={"25"}
                                color={"white"}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                {locations.length > 0 && viewLocations && (
                    <View
                        style={{
                            position:"absolute",
                            backgroundColor:'rgba(245, 245, 245, 0.945)',
                            marginTop:50,
                            alignSelf:"center",
                            width:"95%",
                            borderRadius: 30,
                            zIndex:20
                        }}
                    >
                        {locations.map((loc, index)=>{
                            return (
                                <TouchableOpacity key={index}
                                    style={{
                                         display:"flex",
                                         flexDirection:"row",
                                         padding: 20,
                                         borderBottomWidth: index === locations.length -1 ? 0 :2,
                                         borderBottomColor:'rgba(78, 78, 78, 0.671)',
                                    }}
                                    onPress={()=>handleLocation(loc)}
                                >
                                    <MapPinIcon size={"20"} color={"gray"}/>
                                    <Text
                                        style={{
                                            marginLeft: 10,
                                            fontSize:18
                                        }}
                                    >
                                        London, United Kingdom
                                    </Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                )}

                {/* forecast section */}
                <View
                    style={{
                        display:"flex",
                        flex:1,
                        marginHorizontal: 20,
                        marginBottom:2,
                        justifyContent:"space-around"

                    }}
                >
                    <Text style={{fontSize:30, textAlign:"center", color:"white", fontWeight:"bold"}} >
                        London, 
                        <Text
                            style={{
                                fontWeight:"normal",
                                fontSize: 25
                            }}
                        >
                            United Kingdom
                        </Text>
                    </Text>
                    {/* Weather image */}
                    <View
                        style={{
                            display:"flex",
                            flexDirection:"row",
                            justifyContent:"center"
                        }}
                    >
                        <Image 
                            source={require('../assets/images/partlycloudy.png')}
                            style={{
                                width:200,
                                height: 200,
                            }}
                        />
                    </View>
                    {/* degree celcius */}
                    <View>
                        <Text
                            style={{
                                textAlign:"center",
                                fontWeight:"bold",
                                fontSize: 50,
                                color:"white"
                            }}
                        >
                            23&#176;
                        </Text>
                        <Text
                            style={{
                                textAlign:"center",
                                fontWeight:"bold",
                                fontSize: 20,
                                color:"white",
                                letterSpacing:1.5
                            }}
                        >
                            Partly Cloudy
                        </Text>
                    </View>

                    {/* Other info */}
                    <View
                        style={{
                            display:"flex",
                            flexDirection:"row",
                            justifyContent:"space-between",
                            marginHorizontal: 5
                        }}
                    >
                        <View style={styles.bottomIconContainer}>
                            <Image  source={require("../assets/icons/wind.png")} style={styles.bottomIcon}/>
                            <Text style={{color:"white", fontWeight:"500"}}> 22km</Text>
                        </View>
                        <View style={styles.bottomIconContainer}>
                            <Image  source={require("../assets/icons/drop.png")} style={styles.bottomIcon}/>
                            <Text style={{color:"white", fontWeight:"500"}}> 23%</Text>
                        </View>
                        <View style={styles.bottomIconContainer}>
                            <Image  source={require("../assets/icons/sun.png")} style={styles.bottomIcon}/>
                            <Text style={{color:"white", fontWeight:"500"}}> 6.05 AM</Text>
                        </View>
                    </View>


                    {/* Next day forecast */}
                    <View style={{marginBottom:5, paddingHorizontal:5}}>
                        <View style={{flexDirection:"row", alignItems:"center", marginHorizontal:5}}>
                            <CalendarDaysIcon size="22" color={'white'}/>
                            <Text style={{color:"white", marginLeft:4}}>Daily Forecast</Text>
                        </View>
                        <ScrollView
                            horizontal
                            // contentContainerStyle={{paddingHorizontal:15}}
                            showsHorizontalScrollIndicator={false}
                        >
                            <View style={styles.forecastItem}>
                                <Image source={require('../assets/images/heavyrain.png')} style={{width:40, height:40}} />
                                <Text style={{color:"white"}}>
                                    Monday
                                </Text>
                                <Text style={{color:"white"}}>
                                    23&#176;
                                </Text>
                            </View>
                            <View style={styles.forecastItem}>
                                <Image source={require('../assets/images/heavyrain.png')} style={{width:40, height:40}} />
                                <Text style={{color:"white"}}>
                                    Tuesday
                                </Text>
                                <Text style={{color:"white"}}>
                                    23&#176;
                                </Text>
                            </View>
                            <View style={styles.forecastItem}>
                                <Image source={require('../assets/images/heavyrain.png')} style={{width:40, height:40}} />
                                <Text style={{color:"white"}}>
                                    Wenesday
                                </Text>
                                <Text style={{color:"white"}}>
                                    23&#176;
                                </Text>
                            </View>
                            <View style={styles.forecastItem}>
                                <Image source={require('../assets/images/heavyrain.png')} style={{width:40, height:40}} />
                                <Text style={{color:"white"}}>
                                    Thursday
                                </Text>
                                <Text style={{color:"white"}}>
                                    23&#176;
                                </Text>
                            </View>
                            <View style={styles.forecastItem}>
                                <Image source={require('../assets/images/heavyrain.png')} style={{width:40, height:40}} />
                                <Text style={{color:"white"}}>
                                    Friday
                                </Text>
                                <Text style={{color:"white"}}>
                                    23&#176;
                                </Text>
                            </View>
                            <View style={styles.forecastItem}>
                                <Image source={require('../assets/images/heavyrain.png')} style={{width:40, height:40}} />
                                <Text style={{color:"white"}}>
                                    Saturday
                                </Text>
                                <Text style={{color:"white"}}>
                                    23&#176;
                                </Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomIcon:{
        height:20,
        width: 20,
        marginLeft: 3
    },
    bottomText:{
        color:"white", 
        fontWeight:"500"
    },
    bottomIconContainer:{
        flexDirection:"row",
        alignItems:"center"
    },
    forecastItem:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        padding: 20,
        marginTop: 10,
        marginRight: 5,
        backgroundColor:'rgba(255, 255, 255, 0.384)' 
    }
})