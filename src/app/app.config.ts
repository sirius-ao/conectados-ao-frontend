import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(DataTablesModule ),
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
