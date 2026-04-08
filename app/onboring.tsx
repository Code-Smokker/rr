import { Link } from 'expo-router'
import { Text, View } from 'react-native'

const Onboarding = () => {
    return (
        <View className="flex-1 justify-center items-center bg-background">
            <Text className="text-xl font-bold text-success">onboring</Text>
            <Link href="/onboring" className="mt-4 p-4 bg-primary rounded text-white ">Go to Onboring</Link>

        </View>
    )
}

export default Onboarding