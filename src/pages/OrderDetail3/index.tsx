import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Gap} from '../../components/atoms';
import {Bag, Back, Home, Location, Freepik} from '../../assets';

const Row = ({icon, title, subtitle}: any) => (
  <View style={styles.row}>
    <View style={styles.iconBox}>
      <Image source={icon} style={styles.iconImage} />
    </View>

    <View style={styles.textBox}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  </View>
);

// Custom header: back icon left, title centered
const CustomHeader = ({title, onBack}: any) => (
  <View style={headerStyles.container}>
    <TouchableOpacity
      style={headerStyles.left}
      onPress={onBack}
      activeOpacity={0.7}>
      <Image source={Back} style={headerStyles.back} />
    </TouchableOpacity>

    <View style={headerStyles.center}>
      <Text style={headerStyles.title}>{title}</Text>
    </View>

    <View style={headerStyles.right} />
  </View>
);

const OrderDetail3 = ({navigation}: any) => {
  return (
    <View style={styles.page}>
      <CustomHeader
        title="Sampah Organik"
        onBack={() => navigation?.goBack()}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <Row icon={Home} title="Nama" subtitle="joshua Rimbing" />
        <Gap height={8} />
        <Row icon={Bag} title="Kontak" subtitle="082109234556" />
        <Gap height={8} />
        <Row
          icon={Location}
          title="Jemput"
          subtitle="Jl. Arnold Mononutu, Airmadidi bawah, Minahasa Utara"
        />
        <Gap height={24} />
        <View style={styles.buttonWrap}>
          <TouchableOpacity style={styles.orderButton} activeOpacity={0.8}>
            <Text style={styles.orderText}>ORDER</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderDetail3;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: '#FFF'},
  container: {
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 32,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#E6EAEC',
    borderStyle: 'dashed',
  },
  iconBox: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  textBox: {
    flex: 1,
    paddingLeft: 12,
  },
  title: {
    fontSize: 14,
    color: '#1F2937',
    fontWeight: '700',
  },
  subtitle: {
    marginTop: 6,
    fontSize: 12,
    color: '#8D92A3',
  },
  buttonWrap: {
    marginTop: 8,
    alignItems: 'center',
  },
  orderButton: {
    width: '92%',
    height: 48,
    backgroundColor: '#22A05A',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderText: {
    color: '#fff',
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: '#FFF',
    elevation: 4,
  },
  left: {
    width: 24,
    height: 24,
  },
  back: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  center: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  right: {
    width: 24,
    height: 24,
  },
});
