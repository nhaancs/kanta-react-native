import React from 'react';
import {
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { ProductInfo } from '@src/components/ecommerce';
import { Product } from '../../core/model/product.model';
import { ProductList2 } from '../../components/ecommerce/product-list-2/product-list-2.component';
import { ListRenderItemInfo } from 'react-native';
import { TrainingCardProps } from '../../components/trainings/trainingCard.component';
import { TrainingCard2 } from '../../components/trainings/trainingCard2.component';
import { Text, List } from '@kitten/ui';
import { CateLv1Model } from '../../core/model/category.model';
import {
  ContainerView,
  textStyle,
} from '@src/components/common';

class ProductDetailsComponent extends React.Component<any, any> {

  private renderListCard = (info: ListRenderItemInfo<CateLv1Model>): React.ReactElement<TrainingCardProps> => {
    return (
      <TrainingCard2
        style={{marginVertical: 8, marginHorizontal: 8}}
        training={info.item}
        index={info.index}
        onDetails={() => {}}
      />
    );
  }

  public render(): React.ReactNode {
    const { themedStyle, product, relatedProducts, onProductPress, relatedCategories } = this.props;
  
    return (
      <ContainerView style={themedStyle.container}>
        <ProductInfo
          product={product}
        />

        <ProductList2 
          title={'SẢN PHẨM LIÊN QUAN'}
          data={relatedProducts}
          onItemPress={onProductPress}
          renderItem={null}
          />

        <Text
          style={{marginVertical: 8, marginHorizontal: 8}}
          appearance='hint'>
          DANH MỤC CÓ THỂ BẠN QUAN TÂM
        </Text>
        <List
          style={{marginBottom: 16}}
          data={relatedCategories.filter(cat => cat.id_lv1 === product.belong_cate_level1_id)}
          renderItem={this.renderListCard}
        />
      </ContainerView>
    );
  }
}

export const ProductDetails = withStyles(ProductDetailsComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: theme['background-basic-color-1'],
  },
  commentsContainer: {
    paddingHorizontal: 8,
    paddingVertical: 24,
    backgroundColor: theme['background-basic-color-2'],
  },
  input: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
  inputLabel: {
    marginBottom: 8,
    marginHorizontal: 16,
    ...textStyle.subtitle,
  },
  buyButton: {
    marginHorizontal: 16,
    marginVertical: 24,
  },
}));
