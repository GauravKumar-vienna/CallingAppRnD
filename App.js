import React,{useEffect} from 'react'
import { View, Text } from 'react-native'
import TwilioVoice from 'react-native-twilio-programmable-voice'

export default function App() {

  TwilioVoice.addEventListener('deviceReady', function() {
    console.log('ready')
  })

  
  TwilioVoice.initWithToken('ZQc1w8zrjE3CxKIsndWY8t4iOvWQpPBf').then((success)=>{
    console.log(success);
  })
        


  return (
    <View>
      <Text>Calling Project</Text>
    </View>
  )
}
