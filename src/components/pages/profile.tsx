import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";


export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile</Text>
      </View>

      {/* Profile Card */}
      <View style={styles.profileCard}>
        <Image
          source={{ uri: "https://via.placeholder.com/80" }}
          style={styles.avatar}
        />

        <View style={{ flex: 1 }}>
          <Text style={styles.name}>Alun Seran</Text>
          <Text style={styles.email}>alunseran24@gmail.com</Text>
        </View>

        
      </View>

      {/* Menu Items */}
      <TouchableOpacity style={styles.menuItem}>
        <Ionicons name="location-outline" size={22} color="#666" />
        <Text style={styles.menuText}>Alamat Saya</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Ionicons name="log-out-outline" size={22} color="#666" />
        <Text style={styles.menuText}>Sign out</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={26} color="#00C853" />
          <Text style={styles.navTextActive}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={26} color="#999" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  header: {
    backgroundColor: "#2ECC71",
    padding: 20,
    paddingTop: 40,
  },
  headerText: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
  },

  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    marginTop: -30,
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 50,
    marginRight: 15,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  email: {
    fontSize: 14,
    color: "#777",
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: "#EEE",
  },
  menuText: {
    marginLeft: 12,
    fontSize: 16,
    color: "#444",
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#F2F2F2",
    borderTopWidth: 1,
    borderColor: "#DDD",
    paddingVertical: 10,
    justifyContent: "space-around",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#999",
  },
  navTextActive: {
    fontSize: 12,
    color: "#00C853",
  },
});
