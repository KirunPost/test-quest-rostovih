import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import ImageItem from './ImageItem';

interface ImageGridProps {
  imageCount: number;
  onImagePress: (imageUrl: string) => void;
  startIdx: number;
}

const ImageGrid: React.FC<ImageGridProps> = ({ imageCount, onImagePress, startIdx }) => {
  return (
    // Создание массива с элементами сетки изображений 
    <View style={styles.container}>
      {[...Array(imageCount)].map((_, index) => {
        const imageIndex = startIdx + index;
        return (
          <TouchableOpacity key={imageIndex} onPress={() => onImagePress(`image_${imageIndex}`)}>
            <ImageItem onImagePress={onImagePress} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 5,
  },
});

export default ImageGrid;
