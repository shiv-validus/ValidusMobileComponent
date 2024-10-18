import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { COLORS, FONTS } from './constants';

type AccountSummaryCardProps = {
  availableUnits: number;
  availableBalance: number;
  selectedAccountData: any;
};

const AccountSummaryCard = ({
  availableUnits,
  availableBalance,
  selectedAccountData,
}: AccountSummaryCardProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View>
          <Text style={[styles.value, styles.semiBoldText]}>
            {selectedAccountData?.account_holder_name}
          </Text>
          <Text style={styles.label}>Investor Name</Text>
        </View>
      </View>
      <View style={styles.rowSpaceBetween}>
        <View>
          <Text style={[styles.value, styles.semiBoldText]}>
            {selectedAccountData?.account_number}
          </Text>
          <Text style={styles.label}>Folio Number</Text>
        </View>
      </View>
      <View style={styles.rowCenter}>
        <View>
          <Text style={[styles.value, styles.semiBoldText]}>
            {selectedAccountData?.fund_description}
          </Text>
          <Text style={styles.label}>Fund</Text>
        </View>
      </View>
      <View style={styles.rowCenter}>
        <View>
          <Text style={[styles.value, styles.semiBoldText]}>
            {selectedAccountData?.plan_description} -{' '}
            {selectedAccountData?.option_description}
          </Text>
          <Text style={styles.label}>Plan & Option</Text>
        </View>
      </View>
      <View style={styles.hr} />
      <View style={styles.cardContainer}>
        <View style={styles.rowSpaceBetween}>
          <View style={styles.unitContainer}>
            {isLoading ? (
              <ActivityIndicator
                size="small"
                color={COLORS.DARK}
                style={styles.alignSelfCenter}
              />
            ) : availableUnits !== undefined && availableUnits !== null ? (
              <Text style={[styles.value, styles.semiBoldText]}>
                {availableUnits.toFixed(3)}
              </Text>
            ) : (
              <Text style={[styles.value, styles.semiBoldText]}>N/A</Text>
            )}
            <Text style={styles.label}>Available Units</Text>
          </View>
          <View style={styles.balanceContainer}>
            {isLoading ? (
              <ActivityIndicator
                size="small"
                color={COLORS.DARK}
                style={styles.alignSelfCenter}
              />
            ) : availableBalance !== undefined && availableBalance !== null ? (
              <Text style={[styles.value, styles.semiBoldText]}>
                {availableBalance.toFixed(2)}
              </Text>
            ) : (
              <Text style={[styles.value, styles.semiBoldText]}>N/A</Text>
            )}
            <Text style={styles.label}>Available Balance</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AccountSummaryCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.GRAY_7B0,
    marginVertical: 10,
    padding: 10,
  },
  cardContainer: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f0f8ff',
    shadowColor: COLORS.BLACK_A0A,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hr: {
    height: 1,
    backgroundColor: COLORS.GRAY_9D9,
    marginVertical: 10,
  },
  unitContainer: {
    alignItems: 'flex-start',
    paddingRight: 14, // Add more padding to the right
  },
  balanceContainer: {
    alignItems: 'flex-end',
  },
  value: {
    fontSize: 14,
    fontFamily: FONTS.MEDIUM,
    color: COLORS.DARK,
  },
  label: {
    fontFamily: FONTS.REGULAR,
    fontSize: 14,
    color: COLORS.GRAY_666,
    marginBottom: 5,
  },
  semiBoldText: {
    fontFamily: FONTS.SEMI_BOLD,
  },
  row: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
});
