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
  beds: string;
  accessibility: string;
}

export type RoomResultFormTranslation = {
  filterTitle: string;
  roomResultTitle: string;
  paginationFirst: string;
  paginationSecond: string;
}

export type StepperTranslation = {
  step1: string,
  step2: string,
  step3: string
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
  landingPageForm: LandingPageFormTranslation;
  roomResultForm: RoomResultFormTranslation;
  stepper: StepperTranslation;
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
  footerLogoUrl: string;
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

export type SearchFieldParams = {
  startDate?: Date,
  endDate?: Date,
}

export type RoomResultRequestBody = {
  startDate: string;
  endDate: string;
  beds: string;
  rooms: string;
  propertyId: string;
  totalGuests: string;
  roomTypes: string[];
  bedTypes: string[];
  priceSort?: boolean;
  areaSort?: boolean;
  ratingSort?: boolean;
}

export type RoomResult = {
  results: Result[];
  totalPages: number;
  currentPage: number;
}

export type Result = {
  areaInSquareFeet: number;
  doubleBed: number;
  maxCapacity: number;
  roomTypeName: string;
  singleBed: number;
  averageRate: number;
  roomTypeId: number;
  rating: number;
  reviews: number;
  highResImages: string[];
  lowResImages: string[];
  bestPromotion: PromotionType;
  validPromotions: List<PromotionType>;
  amenities: List<string>;
  description: string;
}

export type PromotionType = {
  promotion_description: string;
  promotion_id: string;
  promotion_title: string;
  price_factor: number;
}
