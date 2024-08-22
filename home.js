import React from "react";
import { Text, View, StyleSheet, Image,ScrollView,TextInput} from "react-native";
import GroupFood from "./components/GroupFood";

const Home = () => {
  const [text,onChangeText] = React.useState('');

  return (
    
    <View style={{ paddingHorizontal:25,backgroundColor:'#fff',}}>
      <View style={styles.top_div}>
        <Image style={{height:49,width:49}} source={require(".//assets//avt.png")} />
        <View style={styles.location_group}>
          <Text style={{color:'#818181',fontSize:13}}>Your location</Text>
          <View style={{flexDirection:'row',paddingRight:20}}>
            <Image style={{height:20,width:20,marginRight:8}} source={require(".//assets//location1.png")} />
            <Text style={{color:'#242424',fontSize:15,fontWeight:500}}>Savar, Dhaka</Text>
          </View>
        </View> 
        <Image style={{height:46,width:46}} source={require(".//assets//bell.png")} />
      </View>

      <View style={styles.search_group}>
        <Image style={{width:22,height:22}} source={require(".//assets//search.png")}/>
        <TextInput
          style={{marginRight:90,color:'#fff'}}
          onChangeText={onChangeText}
          value={text}
          placeholder="Search your food"
          placeholderTextColor='#C6C2C2'
        />
        <Image style={{width:22,height:22}} source={require(".//assets//adjust.png")}/>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator ={false}>
        <View style={styles.scrollView}>
          <GroupFood imageName='pizza' foodName="PIZZA" color="#29D697" textColor="#fff" widthImage={25} heightImage={30}/>
          <GroupFood imageName='burger' foodName="BURGER" color="#F5F5F5" textColor="#242424" widthImage={30} heightImage={25}/>
          <GroupFood imageName='drink' foodName="DRINK" color="#F5F5F5" textColor="#242424" widthImage={30} heightImage={30}/>
          <GroupFood imageName='rice' foodName="RICE" color="#F5F5F5" textColor="#242424" widthImage={28} heightImage={28}/>
        </View>
      </ScrollView>

      <Image style={{width:330,height:165,alignSelf:'center'}} source={require(".//assets//smallBG.png")}></Image>
      <Image style={{width:40,height:8,alignSelf:'center',marginTop:16,marginBottom:7}} source={require(".//assets//Dot.png")}></Image>


      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={{fontSize:15,color:'#242424',fontWeight:500}}>Popular Items</Text>
        <Text style={{fontSize:13,color:'#606060',fontWeight:800}}>View all</Text>
      </View >

      <View style={styles.bottom_food}>
        <View>
          <Image style={{width:158,height:117}} source={require(".//assets//burger.png")}></Image>
          <Text style={{fontSize:16,color:'#242424',fontWeight:500,marginLeft:20,marginTop:10}}>BURGER</Text>
        </View>

        <View>
          <Image style={{width:158,height:117}} source={require(".//assets//pizza.png")}></Image>
          <Text style={{fontSize:16,color:'#242424',fontWeight:500,marginLeft:20,marginTop:10}}>PIZZA</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  top_div:{
    flexDirection: 'row',
    alignContent: 'space-between',
    marginTop: 66,
    marginBottom:40,
    justifyContent:'space-between'
  },
  location_group:{
    alignItems:'center'
  },
  search_group:{
    backgroundColor:'#4A43EC',
    flexDirection:'row',
    borderRadius:100,
    height:60,
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:27,
    marginBottom:37
  },
  scrollView:{
    flexDirection:'row',
    marginBottom:22
  },
  bottom_food:{
    marginTop:12,
    marginBottom:50,
    flexDirection:'row',
    justifyContent:'space-between'
  }
});

export default Home;
