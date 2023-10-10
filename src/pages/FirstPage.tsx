import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

interface Props {
  navigation: any;
}

const Separator = () => <View style={styles.separator} />;

const FirstPage: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#FFC300' }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 23,
            textAlign: 'center',
            marginBottom: 16,
          }}
        >
          Esta é a tela inicial e da opção "Primeira tela".
        </Text>
        <Button
          color="#E37D00"
          onPress={() => navigation.navigate('SecondPage')}
          title="Ir para a segunda tela"
        />
        <Separator />
        <Button
          color="#E37D00"
          onPress={() => navigation.navigate('ThirdPage')}
          title="Ir para a terceira tela"
        />
      </View>
      <Text style={{ fontSize: 18, textAlign: 'center', color: '#730000' }}>
        React Navigation Drawer Customizado
      </Text>
      <Text style={{ fontSize: 16, textAlign: 'center', color: '#730000' }}>
        github.com/BrenoFar
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default FirstPage;
