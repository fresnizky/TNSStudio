import { NgModule } from "@angular/core";

import { CoreModule } from "./modules/core/core.module";
import { PlayerModule } from "./modules/player/player.module";
import { AppComponent } from "./app.component";


@NgModule({
    imports: [
        CoreModule,
        PlayerModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }
