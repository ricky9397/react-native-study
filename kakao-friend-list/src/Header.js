import { View, Text, StyleSheet } from "react-native"
import { Ionicons } from '@expo/vector-icons'; 

const IconButton = (props) => {
    return (
        <View style={{ paddingHorizontal: 7 }}>
            <Ionicons name={props.name} size={24} color="black" />
        </View>
    );
};


export default () => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 10 }}>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>친구</Text>

            {/* flexDirection 가로 배치 */}
            <View style={{ flexDirection: "row" }}>
                <IconButton name="search-outline" />
                <IconButton name="person-add-outline" />
                <IconButton name="md-musical-notes-outline" />
                <IconButton name="ios-settings-outline" />
            </View>
        </View>
    )
}


