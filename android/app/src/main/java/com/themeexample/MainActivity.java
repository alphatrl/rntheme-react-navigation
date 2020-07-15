package com.themeexample;

import com.facebook.react.ReactActivity;
import android.content.Intent;
import android.content.res.Configuration;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "ThemeExample";
  }

  @Override
  public void onConfigurationChanged(Configuration newConfig) {
      super.onConfigurationChanged(newConfig);
      getReactInstanceManager().onConfigurationChanged(this, newConfig);
  }
}
