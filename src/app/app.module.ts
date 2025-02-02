import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";

// layouts
import {AdminComponent} from "./layouts/admin/admin.component";
import {AuthComponent} from "./layouts/auth/auth.component";

// admin views
import {DashboardComponent} from "./views/admin/dashboard/dashboard.component";
import {MapsComponent} from "./views/admin/maps/maps.component";
import {SettingsComponent} from "./views/admin/settings/settings.component";
import {TablesComponent} from "./views/admin/tables/tables.component";

// auth views
import {LoginComponent} from "./views/auth/login/login.component";
import {RegisterComponent} from "./views/auth/register/register.component";

// no layouts views
import {IndexComponent} from "./views/index/index.component";
import {LandingComponent} from "./views/landing/landing.component";
import {ProfileComponent} from "./views/profile/profile.component";

// components for views and layouts

import {AdminNavbarComponent} from "./components/navbars/admin-navbar/admin-navbar.component";
import {CardBarChartComponent} from "./components/cards/card-bar-chart/card-bar-chart.component";
import {CardLineChartComponent} from "./components/cards/card-line-chart/card-line-chart.component";
import {CardPageVisitsComponent} from "./components/cards/card-page-visits/card-page-visits.component";
import {CardProfileComponent} from "./components/cards/card-profile/card-profile.component";
import {CardSettingsComponent} from "./components/cards/card-settings/card-settings.component";
import {CardSocialTrafficComponent} from "./components/cards/card-social-traffic/card-social-traffic.component";
import {CardStatsComponent} from "./components/cards/card-stats/card-stats.component";
import {CardTableComponent} from "./components/cards/card-table/card-table.component";
import {FooterAdminComponent} from "./components/footers/footer-admin/footer-admin.component";
import {FooterSmallComponent} from "./components/footers/footer-small/footer-small.component";
import {HeaderStatsComponent} from "./components/headers/header-stats/header-stats.component";
import {IndexNavbarComponent} from "./components/navbars/index-navbar/index-navbar.component";
import {IndexDropdownComponent} from "./components/dropdowns/index-dropdown/index-dropdown.component";
import {TableDropdownComponent} from "./components/dropdowns/table-dropdown/table-dropdown.component";
import {PagesDropdownComponent} from "./components/dropdowns/pages-dropdown/pages-dropdown.component";
import {NotificationDropdownComponent} from "./components/dropdowns/notification-dropdown/notification-dropdown.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {UserDropdownComponent} from "./components/dropdowns/user-dropdown/user-dropdown.component";
import {AboutUsComponent} from './views/content/about-us/about-us.component';

import {ReactiveFormsModule} from '@angular/forms';
import {CardHotelComponent} from './components/cards/card-hotel/card-hotel.component';
import {HotelsComponent} from './components/lists/hotels/hotels.component';
import {ResultComponent} from './views/search/result/result.component';
import {SearchComponent} from './views/search/search.component';
import {SearchbarComponent} from './components/searchbar/searchbar.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NotFoundComponent} from './views/not-found/not-found.component';
import {HotelModule} from "./modules/hotel/hotel.module";
import {SharedModule} from "src/app/modules/shared/shared.module";
import {DetailComponent} from "src/app/views/hotel/detail/detail.component";
import {HotelComponent} from "src/app/views/hotel/hotel.component";
import {SingleComponent} from "src/app/components/comment/single/single.component";
import {CreateComponent} from "src/app/components/comment/create/create.component";
import {AuthNavbarComponent} from "src/app/components/navbars/auth-navbar/auth-navbar.component";
import {FooterComponent} from "src/app/components/footers/footer/footer.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    AuthNavbarComponent,
    FooterComponent,

    DashboardComponent,
    CardBarChartComponent,
    CardLineChartComponent,
    IndexDropdownComponent,
    PagesDropdownComponent,
    TableDropdownComponent,
    NotificationDropdownComponent,
    UserDropdownComponent,
    SidebarComponent,
    FooterSmallComponent,
    FooterAdminComponent,
    CardPageVisitsComponent,
    CardProfileComponent,
    CardSettingsComponent,
    CardSocialTrafficComponent,
    CardStatsComponent,
    CardTableComponent,
    HeaderStatsComponent,
    AdminNavbarComponent,
    IndexNavbarComponent,
    AdminComponent,
    AuthComponent,
    MapsComponent,
    SettingsComponent,
    TablesComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    LandingComponent,
    ProfileComponent,
    AboutUsComponent,
    CardHotelComponent,
    HotelsComponent,
    ResultComponent,
    SearchComponent,
    SearchbarComponent,
    NotFoundComponent,
    DetailComponent,
    HotelComponent,
    SingleComponent,
    CreateComponent,
  ],
  imports: [
    CommonModule, BrowserModule, AppRoutingModule, ReactiveFormsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
