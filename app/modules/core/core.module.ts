import { NgModule } from "@angular/core";

import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { PROVIDERS } from "./services";

@NgModule({
    imports: [
        NativeScriptModule
    ],
    providers: [
        ...PROVIDERS
    ],
    exports: [
        NativeScriptModule
    ]
})
export class CoreModule { }