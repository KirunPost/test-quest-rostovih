import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Modal, Text, Dimensions } from 'react-native';
import ArrowIcon from '../SVG/ArrowIcon';

interface FullScreenImageProps {
  imageUrl: string;
  onClose: () => void;
}

const FullScreenImage: React.FC<FullScreenImageProps> = ({ imageUrl, onClose }) => {
    // Компонент для создания модального окна при нажатии на картинку 
  return (
    <Modal transparent={true} animationType="slide">
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <ArrowIcon size={27} color="blue" />
        </TouchableOpacity>
        <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="contain" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
      closeButton: {
        position: 'absolute',
        top: 40, 
        left: 10,
        paddingRight: 10,
        paddingLeft: 10,
        zIndex: 100,
        backgroundColor: 'black',
        borderRadius: 20,
      },
});

export default FullScreenImage;