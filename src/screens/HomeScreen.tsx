// Тут просто поигрался с переходом страниц и сделал описание тестового задания
//(бывший компонент app не стал в нем сильно что то менять )
import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import HelloWorld from '../testimport';

type SectionProps = PropsWithChildren<{ title: string}>;

function Section({children, title}: SectionProps): JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color:  Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

type HomeScreenProps = {
  onNavigate: () => void;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.lighter }}>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.lighter} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ flex: 1, paddingHorizontal: 24 }}>
        <View>
          <Section title="Тестовое задание">
            Задача <Text style={styles.highlight}>Создание галереи изображений</Text> 
          </Section>
          <Section title="Описание задачи">
            Разработать мобильное приложение на базе 
            <Text style={styles.highlight}> React Native, используя TypeScript, MobX и Axios. </Text>
            которое будет отображать фотографии из внешнего ресурса. 
          </Section>
          <Section title="Функциональность приложения">
            <Text style={styles.sectionDescription}> Отображение в сетки</Text>
            <Text style={styles.highlight}> + </Text>{"\n"}            
            <Text style={styles.sectionDescription}> Пагинация при скролле.</Text>
            <Text style={styles.highlight}> +- </Text>{"\n"} 
            <Text style={styles.sectionDescription}> Просмотр фотографии в максимальном размере</Text>
            <Text style={styles.highlight}> + </Text>{"\n"} 
            <Text style={styles.sectionDescription}> Обновления списка свайпом вверх</Text>
            <Text style={styles.highlight}> + </Text>{"\n"} 
            <Text style={styles.sectionDescription}> Обработка ошибок</Text>
            <Text style={styles.highlight}> - </Text>
          </Section>
          <Section title="Требования">
            <Text style={styles.sectionDescription}> Используйте React Native</Text>
            <Text style={styles.highlight}> + </Text>{"\n"}            
            <Text style={styles.sectionDescription}> Используйте TypeScript </Text>
            <Text style={styles.highlight}> + </Text>{"\n"} 
            <Text style={styles.sectionDescription}> Используйте MobX </Text>
            <Text style={styles.highlight}> - </Text>{"\n"} 
            <Text style={styles.sectionDescription}> Используйте Axios</Text>
            <Text style={styles.highlight}> + </Text>{"\n"} 
            <Text style={styles.sectionDescription}> Android и iOS</Text>
            <Text style={styles.highlight}> +- </Text>{"\n"} 
            <Text style={styles.sectionDescription}> Не используйте Expo</Text>
            <Text style={styles.highlight}> + </Text>
          </Section>
          <Section title="Ограничения">
            <Text style={styles.sectionDescription}> API предоставляет всего лишь 50 
            фотографий в час по ключу пользователя</Text>
          </Section>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onNavigate}>
          <View style={{
              backgroundColor: 'blue',
              alignItems: 'center', 
              justifyContent: 'center',
              borderRadius: 15,
              height: 60,
            }}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Gallery</Text>
          </View>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingBottom: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  buttonContainer: {
    paddingBottom: 50,
    paddingHorizontal: 94,
  },
  roundedButton: {
    borderRadius: 20, 
  },
});

export default HomeScreen;
