// Компонент получения картинки
import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import unsplash from '../api/unsplash';

interface ImageItemProps {
  onImagePress: (imageUrl: string) => void;
  // Функция, вызываемая при нажатии на изображение, принимающая URL изображения
}

const windowWidth = Dimensions.get('window').width;

const ImageItem: React.FC<ImageItemProps> = ({ onImagePress }) => {
  // Состояние компонента для хранения URL текущей картинки
  const [image, setImage] = useState<string | null>(null);

  // Получение рандомной картинки
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await unsplash.get('/photos/random');
        setImage(response.data.urls.regular);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []);

  return (
    <TouchableOpacity onPress={() => image && onImagePress(image)}>
      <View style={styles.container}>
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  image: {
    width: windowWidth * 0.463,
    height: 200,
    borderRadius: 8,
  },
});

export default ImageItem;