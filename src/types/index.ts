export type PageView = 'home' | 'menu' | 'prenota' | 'eventi' | 'gallery' | 'about';

export interface MenuItem {
  id: string;
  name: string;
  category: 'antipasti' | 'zuppe' | 'primi' | 'secondi' | 'extra' | 'dessert' | 'vini';
  description: string;
  price?: string;
  ingredients?: string[];
  isSpecialty?: boolean;
  slowFoodPresidium?: boolean;
  pairing?: string;
  image?: string;
}

export interface WineItem {
  id: string;
  name: string;
  region: string;
  type: 'bollicine' | 'bianco' | 'rosso' | 'dolce';
  vintage?: string;
  bottlePrice: string;
  glassPrice?: string;
  notes: string;
}

export interface ReservationData {
  id: string;
  date: string;
  time: string;
  service: 'pranzo' | 'cena';
  guests: number;
  seatingArea: string;
  occasion: string;
  dietaryRestrictions: string;
  specialRequests: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
  createdAt: string;
  status: 'confermata' | 'in_attesa';
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'sale' | 'cucina' | 'eventi' | 'borgo';
  imageUrl: string;
  caption?: string;
}
