import React from 'react';
import {
  ListRenderItemInfo,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  List,
  ListProps,
} from '@kitten/ui';
import { Product } from '@src/core/model';
import {
  ProductListItem,
  ProductListItemProps,
} from './productListItem.component';

import { textStyle } from '../../common/style';
import { Text } from '@kitten/ui';

// @ts-ignore (override `renderItem` prop)
interface ComponentProps extends ListProps {
  onItemAddPress: (product: Product) => void;
  onItemPress: (product: Product) => void;
  renderItem?: (info: ListRenderItemInfo<Product>) => ListItemElement;
  title: string;
}

export type ProductListProps = ThemedComponentProps & ComponentProps;

type ListItemElement = React.ReactElement<ProductListItemProps>;

class ProductListComponent extends React.Component<ProductListProps> {

  private onProductAddPress = (selectedProduct: Product) => {
    this.props.onItemAddPress(selectedProduct);
  };

  private onProductPress = (selectedProduct: Product) => {
    this.props.onItemPress(selectedProduct);
  };

  private renderListItemElement = (item: Product): ListItemElement => {
    const { themedStyle } = this.props;

    return (
      <ProductListItem
        style={themedStyle.item}
        activeOpacity={0.75}
        product={item}
        onAddPress={this.onProductAddPress}
        onPress={this.onProductPress}
      />
    );
  };

  private renderItem = (info: ListRenderItemInfo<Product>): ListItemElement => {
    const { item, index } = info;

    const listItemElement: ListItemElement = this.renderListItemElement(item);

    return React.cloneElement(listItemElement, { index });
  };

  renderHeaderFn = (title: string) => {
    return () =>  (
      <Text
        appearance='hint'
        >{title}</Text>
    );
  };

  public render(): React.ReactNode {
    const { contentContainerStyle, themedStyle, data, title, ...restProps } = this.props;

    return (
      <List
        {...restProps}
        contentContainerStyle={[contentContainerStyle, themedStyle.container]}
        data={data}
        renderItem={this.renderItem}
        numColumns={2}
        ListHeaderComponent={this.renderHeaderFn(title)}
      />
    );
  }
}

export const ProductList = withStyles(ProductListComponent, (theme: ThemeType) => ({
  item: {
    flex: 1,
    marginHorizontal: 8,
    marginVertical: 8,
    backgroundColor: theme['background-basic-color-1'],
  },
  container: {
    paddingVertical: 8,
  },
  pagerContainer: {
    marginVertical: 8,
  },
  pagerLabel: {
    marginVertical: 16,
    paddingHorizontal: 16,
    ...textStyle.paragraph,
  },
}));
