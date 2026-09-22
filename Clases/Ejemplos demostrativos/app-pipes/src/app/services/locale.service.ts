import { Injectable, signal } from '@angular/core';

export type AvailableLocale = 'es' | 'fr' | 'en';

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private currentLocale = signal<AvailableLocale>('fr');

  constructor() {
    this.currentLocale.set(
      (localStorage.getItem('locale') as AvailableLocale) ?? 'es'
    );
  }

  get getLocale() {
    return this.currentLocale();
  }

  changeLocale(locale: AvailableLocale) {
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    window.location.reload();
  }
}
