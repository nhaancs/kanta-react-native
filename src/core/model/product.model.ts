import { ImageSource } from '../../assets/images/type';
export class Product {
  product_id: number;
  name: string;
  image: string;
  price: number;
  categories_lv1_name: string;
  categories_lv2_name: string;
  categories_lv3_name: string;
  belong_cate_level1_id: number;
  belong_cate_level2_id: number;
  belong_cate_level3_id: number;
}
