import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.foodnight',
  appPath: 'src',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig;