import { Link } from 'expo-router'
import { Text, View } from 'react-native'

const SignUp = () => {
    return (
        <View>
            <Text>sing-up</Text>
            <Link href="/(auth)/sing-in">Go to Sing In</Link>
        </View>
    )
}

export default SignUp