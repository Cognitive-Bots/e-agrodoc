import { View, Text, Button } from 'react-native';
const Account = ({ setSignedIn }) => {
    const handleLogout = () => {
        setSignedIn(false);
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor : "#fdf6e3" }}>
            <Text>Account Screen</Text>
            <Button onPress={handleLogout} title="LogOut"></Button>
        </View>
    );
}
export default Account;