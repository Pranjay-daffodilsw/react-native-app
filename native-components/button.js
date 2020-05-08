import React from 'react';

import { 
    Button
 } from 'react-native';

export default button = (args) => {
    return (<Button
        title={"You can tap here !"}
        onPress={() => args.navigation.navigation.navigate("HomeAlternate")}
        color="purple"
     />)

}