import { Image, Text, View } from 'react-native';
import { formatCurrency } from '../lib/utils';

interface UpcomingSubscriptionCardProps {
  data: {
    name: string;
    price: number;
    daysLeft: number;
    icon: any;
    currency?: string; // Optional, depending on your utils
  };
}

const UpcomingSubscriptionCard = ({ data: { name, price, daysLeft, icon, currency } }: UpcomingSubscriptionCardProps) => {
  return (
    <View className="upcoming-card">
      <View className="upcoming-row">
        <Image source={icon} className="upcoming-icon" />
        <View>
          <Text className="upcoming-price">{formatCurrency(price, currency)}</Text>
          <Text className="upcoming-meta" numberOfLines={1}>{daysLeft > 1 ? `${daysLeft} days left` : 'Last day'}</Text>
        </View>
      </View>
      <Text className="upcoming-name" numberOfLines={1}>{name}</Text>
    </View>
  );
};

// 3. Only one export default at the bottom
export default UpcomingSubscriptionCard;