import React, {Component} from 'react';
import {View, Button} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import {AppConsumer} from '../../Hocs/AppContextProvider';
import DynamicThemeButton from './DynamicThemeButton';
import {LightMode, DarkMode} from '../../themes';

class SettingsScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <AppConsumer>
        {appConsumer => (
          <SafeAreaView
            style={{
              flex: 1,
              backgroundColor: appConsumer.theme.colors.background,
            }}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Button
                title="Light Mode"
                onPress={() => {
                  appConsumer.updateTheme(LightMode);
                }}
              />
              <Button
                title="Dark Mode"
                onPress={() => {
                  appConsumer.updateTheme(DarkMode);
                }}
              />
              <DynamicThemeButton />
            </View>
          </SafeAreaView>
        )}
      </AppConsumer>
    );
  }
}

export default SettingsScreen;
