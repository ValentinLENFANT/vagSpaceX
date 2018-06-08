import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {MatInputModule, MatFormFieldModule} from "@angular/material";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./modules/app-routing/app-routing.module";
import {SharedModule} from "./modules/shared/shared.module";
import {CompanyInfoComponent} from "./components/company-info/company-info.component";
import {RocketListComponent} from "./components/rocket-list/rocket-list.component";
import {LaunchpadListComponent} from "./components/launchpad-list/launchpad-list.component";
import {LaunchpadComponent} from "./components/launchpad/launchpad.component";
import {LaunchComponent} from "./components/launch/launch.component";
import {LaunchesHomeComponent} from "./components/launches-home/launches-home.component";
import {LaunchesListComponent} from "./components/launches-list/launches-list.component";
import {CapsulesListComponent} from "./components/capsules-list/capsules-list.component";
import {CapsuleComponent} from "./components/capsule/capsule.component";
import {DetailCoreComponent} from "./components/detail-core/detail-core.component";
import {DetailedCoreListComponent} from "./components/detailed-core-list/detailed-core-list.component";
import { DetailedcapsulesListComponent } from "./components/detailedcapsules-list/detailedcapsules-list.component";
import { DetailedcapsuleComponent } from "./components/detailedcapsule/detailedcapsule.component";

import { HugeNumberPipe } from "./pipes/hugeNumber.pipe";
import { CountdownTimerModule } from 'ngx-countdown-timer';


@NgModule({
    declarations: [
        AppComponent,
        CompanyInfoComponent,
        RocketListComponent,
        HugeNumberPipe,
        LaunchpadListComponent,
        LaunchpadComponent,
        LaunchComponent,
		LaunchesHomeComponent,
		LaunchesListComponent,
		CapsulesListComponent,
		CapsuleComponent,
        DetailCoreComponent,
        DetailedCoreListComponent,
		DetailedcapsulesListComponent,
		DetailedcapsuleComponent

    ],
    imports: [BrowserModule, HttpClientModule, AppRoutingModule, SharedModule, MatFormFieldModule, MatInputModule, FormsModule, MatCheckboxModule, CountdownTimerModule.forRoot()],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
