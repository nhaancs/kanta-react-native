import React from 'react';
import { SafeAreaView } from '@src/core/navigation';
import {
  ThemeProvider,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@kitten/ui';
import { themes } from '@src/core/themes';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface ComponentProps {
  selectedIndex: number;
  onTabSelect: (index: number) => void;
}

type Props = ThemedComponentProps & ComponentProps;

const HomeIcon = (style) => (
  <Icon {...style} name='home-outline'/>
);

const SearchIcon = (style) => (
  <Icon {...style} name='search-outline'/>
);

const ListIcon = (style) => (
  <Icon {...style} name='list-outline'/>
);

const PersonIcon = (style) => (
  <Icon {...style} name='person-outline'/>
);

class MenuComponent extends React.Component<Props> {

  private onTabSelect = (index: number) => {
    this.props.onTabSelect(index);
  };

  public render(): React.ReactNode {
    const { selectedIndex, themedStyle } = this.props;

    const styles = StyleSheet.create({
      indicator: { backgroundColor: 'red' },
      title: { color: 'red' },
    });

    return (
      <SafeAreaView style={themedStyle.safeAreaContainer}>
        <ThemeProvider theme={{...this.props.theme, ...themes['App Theme']}}>
          <BottomNavigation
            selectedIndex={selectedIndex}
            onSelect={this.onTabSelect}
            indicatorStyle={styles.indicator as StyleProp<ViewStyle>}
            >
            <BottomNavigationTab
              title='Trang chủ'
              icon={HomeIcon}
            />
            <BottomNavigationTab
              title='Cá nhân'
              icon={PersonIcon}
            />
          </BottomNavigation>
        </ThemeProvider>
      </SafeAreaView>
    );
  }
}

export const Menu = withStyles(MenuComponent, (theme: ThemeType) => ({
  safeAreaContainer: {
    backgroundColor: theme['background-basic-color-1'],
  },
}));
