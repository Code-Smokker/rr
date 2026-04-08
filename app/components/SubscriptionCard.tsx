import { formatCurrency, formatStatusLabel, formatSubscriptionDateTime } from '@/app/lib/utils';
import { colors } from '@/constants/themes';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

interface SubscriptionCardProps {
  name: string;
  price: number;
  currency?: string;
  icon: any;
  billing?: string;
  color?: string;
  category?: string;
  plan?: string;
  renewalDate?: string;
  paymentMethod?: string;
  expanded?: boolean;
  startDate?: string;
  status?: string;
  onPress?: () => void;
}

export default function SubscriptionCard({ 
  name, 
  price, 
  currency = 'USD', 
  icon, 
  billing = 'Monthly',
  color,
  category,
  plan,
  renewalDate,
  paymentMethod,
  expanded = false,
  onPress,
  startDate,
  status
}: SubscriptionCardProps): React.JSX.Element {
  return (
    <Pressable 
      onPress={onPress}
      style={{ backgroundColor: color ? color : colors.card }}
      className="sub-card"
    >
      <View className="sub-head">
        <View className="sub-main">
          <Image source={icon} className="sub-icon" />
          <View className="sub-copy">
            <Text numberOfLines={1} className="sub-title">
              {name}
            </Text>
            {plan && <Text className="sub-plan">{plan}</Text>}
            {category && <Text className="sub-category">{category}</Text>}
          </View>
        </View>
        <View className="sub-price-box">
          <Text className="sub-price">
            {formatCurrency(price, currency)}
          </Text>
          <Text className="sub-billing">
            {billing}
          </Text>
          {renewalDate && (
            <Text className="sub-renewal">
              {formatSubscriptionDateTime(renewalDate)}
            </Text>
          )}
        </View>
      </View>
      {expanded && (
        <View className="sub-bdy">
          <View className="sub-ditails">
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Started:</Text>
                <Text className="sub-value" numberOfLines={1} ellipsizeMode="tail">
                  {startDate ? formatSubscriptionDateTime(startDate) : ''}
                </Text>
              </View>
            </View>
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Renewal date:</Text>
                <Text className="sub-value" numberOfLines={1} ellipsizeMode="tail">
                  {renewalDate ? formatSubscriptionDateTime(renewalDate) : ''}
                </Text>
              </View>
            </View>
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Status:</Text>
                <Text className="sub-value" numberOfLines={1} ellipsizeMode="tail">
                  {status ? formatStatusLabel(status) : ''}
                </Text>
              </View>
            </View>
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Payment:</Text>
                <Text className="sub-value" numberOfLines={1} ellipsizeMode="tail">
                  {paymentMethod?.trim()}
                </Text>
              </View>
            </View>
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Category:</Text>
                <Text className="sub-value" numberOfLines={1} ellipsizeMode="tail">
                  {category?.trim() || plan?. trim() } 
                </Text>
              </View>
            </View>
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Payment:</Text>
                <Text className="sub-value" numberOfLines={1} ellipsizeMode="tail">
                  {paymentMethod?.trim()}
                </Text>
              </View>
            </View>
             <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Payment:</Text>
                <Text className="sub-value" numberOfLines={1} ellipsizeMode="tail">
                  {paymentMethod?.trim()}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </Pressable>
  )
}
