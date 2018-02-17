import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NO_ERRORS_SCHEMA, NgModule } from "@angular/core";

import { PROVIDERS } from "./services";

@NgModule({
    imports: [ NativeScriptModule ],
    providers: [ ...PROVIDERS ],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class RecorderModule { }