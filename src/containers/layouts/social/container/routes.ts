import {
  imageProfile6Layout,
  imageProfileSettings1Layout,
} from '@src/assets/images';
import { SocialContainerData } from './type';

export const routes: SocialContainerData[] = [
  {
    title: 'Profile',
    description: 'Option 6',
    image: imageProfile6Layout.imageSource,
    route: 'Profile 6',
  },
  {
    title: 'Profile Settings',
    description: 'Option 1',
    image: imageProfileSettings1Layout.imageSource,
    route: 'Profile Settings 1',
  },
];
