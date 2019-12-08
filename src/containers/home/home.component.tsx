import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { ProductList } from '@src/components/ecommerce';
import { Product } from '@src/core/model';
import { ContainerView } from '../../components/common/containerView.component';
import { ProductList2 } from '../../components/ecommerce/product-list-2/product-list-2.component';
import { Text } from '@kitten/ui';

interface ComponentProps {
  trendingProducts: Product[];
  seenProducts: Product[];
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
  private onProductPress = (selectedProduct: Product) => {
    this.props.onProductPress(selectedProduct);
  };

  public render(): React.ReactNode {
    const { themedStyle, recommendProducts, monthlyProducts, saleProducts, trendingProducts, seenProducts } = this.props;

    return (
      <ContainerView>
        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 24, color: 'red', paddingTop: 16, paddingBottom: 8}}>{'KANTA APP'}</Text>
        <ProductList2 
          title={'TRENDING'}
          data={trendingProducts}
          onItemPress={this.onProductPress}
          renderItem={null}
          />
        <ProductList2 
          title={'SẢN PHẨM ĐÃ XEM'}
          data={seenProducts}
          onItemPress={this.onProductPress}
          renderItem={null}
          />
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

        <Text
          style={{fontSize: 11, backgroundColor: "#F7F8FA", textAlign: "center", paddingBottom: 8}}
          appearance='hint'
          category='s1'>
          {'Tìm kiếm để tiếp tục khám phá'}
        </Text>
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
