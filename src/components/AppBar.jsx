import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.apbar}>
      <View style={styles.apbarInner}>
        <Text style={styles.apbarTitle}>MemoApp</Text>
        <Text style={styles.apbarRight}>ログアウト</Text>
      </View>
   </View>
  );
}

const styles = StyleSheet.create({
  apbar:{
    width: '100%',
    height: 104,
    backgroundColor: '#467FD3',
    justifyContent: 'flex-end',
  },
  apbarInner: {
    alignItems: 'center',
  },
  apbarRight: {
    position: 'absolute',
    right: 19,
    bottom: 16,
    color: 'rgba(255,255,255,0.8)',
  },
  apbarTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

