export type HeaderTranslation = {
  title: string;
  subtitle: string;
  myBookings: string;
  currency: string;
  login: string;
  logout: string;
  changeLanguage: string;
};

export type LandingPageFormTranslation = {
  propertyName: string;
  selectDate: string;
  checkIn: string;
  checkOut: string;
  guestType: string;
  adult: string;
  kids: string;
  teens: string;
  age: string;
  rooms: string;
  search: string;
  accessibility: string;
}

export type FooterTranslation = {
  title: string;
  copyright: string;
  rights: string;
};

export type ErrorTranslation = {
  title: string;
  subtitle: string;
};

export type Translation = {
  header: HeaderTranslation;
  footer: FooterTranslation;
  landingPageForm: LandingPageFormTranslation
  error: ErrorTranslation;
};

export type LanguageType = {
  translation: Translation;
};

export type HotelProperties = {
  guests: {
    adults: boolean;
    children: boolean;
    teens: boolean;
  };
  maxGuests: number;
  numberOfRooms: number;
  accessibility: boolean;
  bannerImageUrl: string;
  siteLogoUrl: string;
  maxLengthStay: number;
};

export type APIStatus = "success" | "error" | "loading" | null;

export type Property = {
  property_id: number,
  property_name: string
}

export type DateList = {
  date: string,
  price: number
}

export type ExchangeRateData = {
  data: {
    [key in Currency]: number;
  };
}