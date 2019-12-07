import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { ProductList } from '@src/components/ecommerce';
import { Product } from '@src/core/model';
import { ContainerView } from '../../components/common/containerView.component';

interface ComponentProps {
  recommendProducts: Product[];
  monthlyProducts: Product[];
  saleProducts: Product[];
  onProductPress: (product: Product) => void;
}

interface State {
  tabCategories: string[];
  selectedIndex: number;
}

export type ProductsListProps = ThemedComponentProps & ComponentProps;

class HomeComponent extends React.Component<ProductsListProps, State> {
  public state: State = {
    tabCategories: [],
    selectedIndex: 0,
  };

  private onProductPress = (selectedProduct: Product) => {
    this.props.onProductPress(selectedProduct);
  };

  public render(): React.ReactNode {
    const { themedStyle, recommendProducts, monthlyProducts, saleProducts } = this.props;

    return (
      <ContainerView>
        <ProductList
          contentContainerStyle={themedStyle.productsListContent}
          data={recommendProducts}
          onItemPress={this.onProductPress}
          onItemAddPress={this.onProductPress}
          title={'SẢN PHẨM ĐỀ CỬ'}
          />
        <ProductList
          contentContainerStyle={themedStyle.productsListContent}
          data={monthlyProducts}
          onItemPress={this.onProductPress}
          onItemAddPress={this.onProductPress}
          title={'SẢN PHẨM CỦA THÁNG'}
          />
        <ProductList
          contentContainerStyle={themedStyle.productsListContent}
          data={saleProducts}
          onItemPress={this.onProductPress}
          onItemAddPress={this.onProductPress}
          title={'SẢN PHẨM GIẢM GIÁ'}
          />
      </ContainerView>
    );
  }
}

export const Home = withStyles(HomeComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-2'],
  },
  productsListContent: {
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
}));
