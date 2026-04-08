import ListHeading from "@/app/components/ListHeading";
import { formatCurrency } from "@/app/lib/utils";
import { HOME_BALANCE, HOME_SUBSCRIPTIONS, HOME_USER } from "@/constants/data";
import icons from "@/constants/icons";
import image from "@/constants/image";
import dayjs from "dayjs";
import { styled } from "nativewind";
import { useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import SubscriptionCard from "../components/SubscriptionCard";
import UpcomingSubscriptionCard from "../components/UpcommingSubscriptionCard";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  const[ expendedSubscriptionId, setExpendedSubscriptionId ] = useState<string | null>(null);
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <View className="home-header">
        <View className="home-user">
          <Image source={image.avatar} className="home-avatar" />
          <Text className="home-user-name">{HOME_USER.name}</Text>
        </View>
        <Image source={icons.add} className="home-add-icon" />
      </View>

      <View className="home-balance-card">
        <Text className="home-balance-label">Balance</Text>
        <View className="home-balance-row">
          <Text className="home-balance-amount">
            {formatCurrency(HOME_BALANCE.amount)}
          </Text>
          <Text className="home-balance-date">{dayjs(HOME_BALANCE.nextRenewalDate).format("MM/DD/YYYY")}</Text>
        </View>
      </View>
      <View className="mt-1">
        <ListHeading title="Upcoming" />
      </View>
      <View className="mb-4">
        <FlatList
          data={[]}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <UpcomingSubscriptionCard data={item} />
          )}
          contentContainerStyle={{ paddingHorizontal: 0, gap: 16 }}
          ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
          ListEmptyComponent={<Text className="home-empty-state">No upcoming renewals yet.</Text>}
        />
      </View>
      <View className="mt-2">
        <ListHeading title="All Subscriptions" />
        <SubscriptionCard 
          name={HOME_SUBSCRIPTIONS[0]?.name || ''}
          price={HOME_SUBSCRIPTIONS[0]?.price || 0}
          currency={HOME_SUBSCRIPTIONS[0]?.currency || 'USD'}
          icon={HOME_SUBSCRIPTIONS[0]?.icon}
          billing={HOME_SUBSCRIPTIONS[0]?.billing || 'Monthly'}
          color={HOME_SUBSCRIPTIONS[0]?.color}
          category={HOME_SUBSCRIPTIONS[0]?.category}
          plan={HOME_SUBSCRIPTIONS[0]?.plan}
          renewalDate={HOME_SUBSCRIPTIONS[0]?.renewalDate}
          paymentMethod={HOME_SUBSCRIPTIONS[0]?.paymentMethod}
          startDate={HOME_SUBSCRIPTIONS[0]?.startDate}
          status={HOME_SUBSCRIPTIONS[0]?.status}
          expanded={expendedSubscriptionId === HOME_SUBSCRIPTIONS[0]?.id}
          onPress={() => setExpendedSubscriptionId((currentId) => (currentId === HOME_SUBSCRIPTIONS[0]?.id ? null : HOME_SUBSCRIPTIONS[0]?.id))}
        />
      </View>
    </SafeAreaView>
  )
}