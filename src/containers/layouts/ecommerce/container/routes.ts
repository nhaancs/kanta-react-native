import {
  imageProductDetailsLayout,
  imageProductListLayout,
} from '@src/assets/images';
import { EcommerceContainerData } from './type';

export const routes: EcommerceContainerData[] = [
  {
    title: 'Products List',
    description: 'Option 1',
    image: imageProductListLayout.imageSource,
    route: 'Products List',
  },
  {
    title: 'Product Details',
    description: 'Option 1',
    image: imageProductDetailsLayout.imageSource,
    route: 'Product Details',
  },
];
