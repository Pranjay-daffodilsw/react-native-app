import React from 'react';

import { 
    Button
 } from 'react-native';

export default button = () => {
    return (<Button
        title={"You can tap here !"}
        onPress={() => {alert("You just clicked a button")}}
        color="purple"
     />)

}