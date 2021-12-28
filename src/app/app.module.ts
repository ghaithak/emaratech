import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//FeatherModule
import { PlusCircle, BarChart2, Book, User, CheckSquare, Settings, ArrowRightCircle, Search, MoreVertical, ChevronRight, ChevronDown, Target, Sun, Clipboard } from 'angular-feather/icons';
import { FeatherModule } from 'angular-feather';

//Components
import { HomeComponent } from './pages/home/home.component';
import { LeftPanelComponent } from './shared/left-panel/left-panel.component';
import { TopPanelComponent } from './shared/top-panel/top-panel.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { MeterChartComponent } from './shared/meter-chart/meter-chart.component';
import { BarChartComponent } from './shared/bar-chart/bar-chart.component';

// Select some icons (use an object, not an array)
const icons = {
  PlusCircle,
  BarChart2,
  Book,
  User,
  CheckSquare,
  Settings,
  ArrowRightCircle,
  Search,
  MoreVertical,
  ChevronRight,
  ChevronDown,
  Target,
  Sun,
  Clipboard
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftPanelComponent,
    TopPanelComponent,
    BreadcrumbComponent,
    MeterChartComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    FeatherModule.pick(icons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
