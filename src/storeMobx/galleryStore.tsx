/* после того как сделал большую часть работы вспомнил про 
mobx и из за нехватки времени было принято решение опустить этот момент */
import { makeObservable, observable, action } from 'mobx';

class GalleryStore {
  

  constructor() {
   
  }

}

const galleryStore = new GalleryStore();

export default galleryStore;

export type GalleryStoreType = typeof galleryStore;
