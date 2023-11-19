import React, { useState } from 'react';
import { View, Text, Button, FlatList, RefreshControl, Modal, TouchableOpacity } from 'react-native';
import ImageGrid from '../components/ImageGrid';
import FullScreenImage from './FullScreenImage';
import unsplash from '../api/unsplash';

type GalleryScreenProps = {
  onNavigate: () => void;
};

const GalleryScreen: React.FC<GalleryScreenProps> = ({ onNavigate }) => {
  const [refreshing, setRefreshing] = useState(false); // Состояние обновления данных
  const [key, setKey] = useState(0); //  Ключ для перерисовки FlatList
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // URL изображения
  const [currentPage, setCurrentPage] = useState(1);  // Страница пагинации

   // Количество изображений на странице и общее количество изображений
  const itemsPerPage = 4;
  const totalImages = 16;
  const totalPages = Math.ceil(totalImages / itemsPerPage);

  const onRefresh = () => {
    setRefreshing(true);
    //  Перерисовка FlatList
    setTimeout(() => {
      setKey((prevKey) => prevKey + 1);
      setRefreshing(false);
    }, 1000);
  };

      // Обработчик нажатия на изображение
      const handleImagePress = (imageUrl: string) => {
        setSelectedImage(imageUrl);
      };

     // Обработчик закрытия полноэкранного изображения
  const onCloseFullScreenImage = () => {
    setSelectedImage(null);
  };
     // Обработчик смены страницы при пагинации
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

    // Функция для отображения пагинации
  const renderPagination = () => {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
      // Пагинация
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
        {pages.map((page) => (
          <TouchableOpacity key={page} onPress={() => onPageChange(page)}  style={{
            marginHorizontal: 8,
            paddingVertical: 8,
            paddingHorizontal: 12,
            backgroundColor: currentPage === page ? 'blue' : 'lightgray',
            borderRadius: 20,
          }}>
            <Text style={{ marginHorizontal: 5, fontWeight: currentPage === page ? 'bold' : 'normal' }}>{page}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={[{ key: key }]}
        keyExtractor={(item) => String(item.key)}
        renderItem={() => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <ImageGrid
              imageCount={itemsPerPage}
              onImagePress={handleImagePress}
              startIdx={(currentPage - 1) * itemsPerPage}
            />
            <View style={{ marginVertical: 10 }}>
              {renderPagination()}
            </View>
            <Button title="Go to Home" onPress={onNavigate} />
          </View>
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
      {selectedImage && (
        <Modal transparent={true} animationType="slide">
          <FullScreenImage imageUrl={selectedImage} onClose={onCloseFullScreenImage} />
        </Modal>
      )}
    </View>
  );
};

export default GalleryScreen;