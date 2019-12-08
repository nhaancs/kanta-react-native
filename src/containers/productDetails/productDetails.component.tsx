import React from 'react';
import {
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { ProductInfo } from '@src/components/ecommerce';
import { Product } from '../../core/model/product.model';
import { ProductList2 } from '../../components/ecommerce/product-list-2/product-list-2.component';
import { exercises1 } from '../../core/data/exercise';
import { ListRenderItemInfo } from 'react-native';
import { Exercise } from '../../core/model/exercise.model';
import { TrainingCardProps } from '../../components/trainings/trainingCard.component';
import { TrainingCard2 } from '../../components/trainings/trainingCard2.component';
import { Text, List } from '@kitten/ui';
import {
  ContainerView,
  textStyle,
} from '@src/components/common';

interface State {
  product: Product;
}

class ProductDetailsComponent extends React.Component<any, State> {

  private renderListCard = (info: ListRenderItemInfo<Exercise>): React.ReactElement<TrainingCardProps> => {
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
    const { themedStyle, product, relatedProducts, onProductPress } = this.props;
  
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
          data={exercises1}
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
