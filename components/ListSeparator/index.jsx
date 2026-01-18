import { StyleSheet, View } from "react-native";

const ListSeparator = () => {

    return (
        <View style={styles.listSeparator} />
    );

}

export default ListSeparator;

const styles = StyleSheet.create({
    listSeparator: {
        backgroundColor: 'lightgrey',
        height: 2
    }
})