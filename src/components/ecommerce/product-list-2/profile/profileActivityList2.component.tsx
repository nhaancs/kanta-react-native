import React from 'react';
import { Product } from '../../../../core/model/product.model';
import { RemoteImage } from '../../../../assets/images/type';
import {
  ImageSourcePropType,
  ListRenderItemInfo,
} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  List,
  ListItem,
  ListProps,
} from '@kitten/ui';
import {
  ProfileActivityList2Item,
  ProfileActivityList2ItemProps,
} from './profileActivityList2Item.component';

// @ts-ignore (override `renderItem` prop)
interface ComponentProps extends ListProps {
  data: Product[];
  onItemPress: (product: Product) => void;
  renderItem?: (info: ListRenderItemInfo<ImageSourcePropType>, style: StyleType) => React.ReactElement<any>;
}

type ListItemElement = React.ReactElement<ProfileActivityList2ItemProps>;

export type ProfileActivityList2Props = ThemedComponentProps & ComponentProps;

class ProfileActivityList2Component extends React.Component<ProfileActivityList2Props> {

  private onItemPress = (index: number) => {
    this.props.onItemPress(this.props.data[index]);
  };

  private renderItem = (info: ListRenderItemInfo<Product>): ListItemElement => {
    const { themedStyle } = this.props;
    const image = new RemoteImage(info.item.image)

    return (
      <ListItem
        style={themedStyle.itemContainer}
        activeOpacity={0.75}
        onPress={this.onItemPress}>
        <ProfileActivityList2Item
          style={themedStyle.item}
          source={image.imageSource}
        />
      </ListItem>
    );
  };

  public render(): React.ReactNode {
    const { contentContainerStyle, themedStyle, ...restProps } = this.props;

    return (
      <List
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        {...restProps}
        contentContainerStyle={[themedStyle.container, contentContainerStyle]}
        renderItem={this.renderItem}
      />
    );
  }
}

export const ProfileActivityList2 = withStyles(ProfileActivityList2Component, (theme: ThemeType) => ({
  container: {},
  itemContainer: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginHorizontal: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  item: {
    width: 120,
    height: 120,
  },
}));
