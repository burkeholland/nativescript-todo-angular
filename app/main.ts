// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import * as appSettings from "application-settings";
import {TodoApp} from "./app.component";

/* Before we bootstrap, shim the 'localStorage' API with application settings module */
global.localStorage = {
    getItem(key: string) {
        return appSettings.getString(key);
    },
    setItem(key: string, value: string) {
        return appSettings.setString(key, value); 
    }
}

nativeScriptBootstrap(TodoApp);