import { colors, components } from "@/constants/themes";
import { Ionicons } from "@expo/vector-icons";
import { clsx } from "clsx";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface TabIconProps {
  focused: boolean;
  icon?: any;
  title?: string;
}

const tabs = [
  {
    name: "index",
    title: "Home",
    icon: require("@/assets/icons/home.png"),
  },
  {
    name: "insides",
    title: "Insights", 
    icon: require("@/assets/icons/activity.png"),
  },
  {
    name: "subscription",
    title: "Subscriptions", 
    icon: require("@/assets/icons/wallet.png"),
  },
  {
    name: "settings",
    title: "Settings",
    icon: require("@/assets/icons/setting.png"),
  },
];

const TabLayout = () => {
  const insets = useSafeAreaInsets();
  const tabBar = components.tabBar;

  const TabIcon = ({ focused, icon, title }: TabIconProps) => {
    return (
      // Added h-full and justify-center to keep the icon vertically aligned
      <View className="items-center justify-center h-full">
        <View className={clsx('tabs-pill', focused && 'tabs-active')}>
          {icon ? (
            <Image source={icon} resizeMode="contain" className="tabs-glyph" />
          ) : (
            <Ionicons 
              name={
                title === 'Home' ? 'home' : 
                title === 'Insights' ? 'analytics' : 
                title === 'Subscriptions' ? 'card' : 
                'settings-outline'
              } 
              size={24} 
              color={focused ? '#fff' : '#666'} 
            />
          )}
        </View>
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: Math.max(insets.bottom, tabBar.horizontalInset),
          height: tabBar.height,
          marginHorizontal: tabBar.horizontalInset,
          borderRadius: tabBar.radius,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
          borderWidth: 0,
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          paddingBottom: 0, // CRITICAL: Reset default padding
        },
        tabBarItemStyle: {
          height: tabBar.height, // Match the parent height
          justifyContent: 'center', // Center vertically
          alignItems: 'center', // Center horizontally
        },
        tabBarIconStyle: {
          width: '100%',
          height: '100%',
        }
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={tab.icon} title={tab.title} />
            )
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabLayout;