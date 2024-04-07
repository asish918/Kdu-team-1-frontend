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
  military: string;
  seniorCitizen: string;
}

export type ConfirmationTranslation = {
  upcomingReservation: string;
  print: string;
  email: string;
  cancelRoom: string;
  cancellationPolicy: string;
  roomTotalSummary: string;
  nightlyRate: string;
  subTotal: string;
  vat: string;
  total: string;
  guestInformation: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  billingAddress: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
  paymentInformation: string;
  paymentId: string;
  cancelled: string;
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
  generic: GenericInfo;
  itenary: ItenaryTranslation;
  error: ErrorTranslation;
  confirmation: ConfirmationTranslation
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
  vat: number;
  taxes: number;
  duePercent: number;
  resortFee: number;
  occupancyTax: number;
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
  isKDUMember?: boolean;
  isSeniorCitizen?: boolean;
  isMilitary?: boolean;
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
  amenities: string[];
  rates: number[];
  description: string;
}

export type PromotionType = {
  promotion_description: string;
  promotion_id?: string;
  promotion_title: string;
  price_factor: number;
  room_type_id?: number;
}

export type ReviewRequest = {
  user_email: string;
  rating: number;
  review: string;
  room_type_id: number;
}

export type GenericInfo = {
  location: string;
  specialDealTitle: string;
  perNight: string;
  selectPackageButton: string;
  inclusive: string;
  newPropertyTag: string;
  reviews: string;
  selectRoomButton: string;
  amenitiesTitle: string;
  standardRatesTitle: string;
  dealsAndPackagesTitle: string;
  promoCodeButton: string;
  promoCodeInput: string;
}

export type ItenaryTranslation = {
  itenaryTitle: string;
  itenarySpecialPromo: string;
  itenaryTaxes: string;
  itenaryVAT: string;
  itenaryDueNow: string;
  itenaryDueResort: string;
  itenaryContinueShopping: string;
  itenaryCheckout: string;
  itenaryEmail: string;
  itenaryStayCompleted: string;
  itenaryRemove: string;
}

export type ZipCodeApiItem = {
  postal_code: string;
  country_code: string;
  latitude: string;
  longitude: string;
  city: string;
  state: string;
  city_en: string;
  state_en: string;
  state_code: string;
  province: string;
  province_code: string;
}

export type ZipCodeApiResults = {
  [postalCode: string]: ZipCodeApiItem[];
}

export type ZipCodeApiQuery = {
  codes: string[];
  country: string;
}

export type ZipCodeApiResponse = {
  query: ZipCodeApiQuery;
  results: ZipCodeApiResults;
}

export type BookingRequest = {
  booking_info: BookingInfo;
  traveller_info: TravellerInfo;
  billing_info: BillingInfo;
  transaction_info: TransactionInfo;
}

export type BillingInfo = {
  firstName: string;
  lastName: string;
  mailingAddress1: string;
  mailingAddress2: string;
  country: string;
  city: string;
  state: string;
  zipcode: number;
  phone: number;
  email: string;
}

export type BookingInfo = {
  checkInDate: string;
  checkOutDate: string;
  adultCount: number;
  childCount: number;
  totalCost: number;
  amountDueResort: number;
  guestName: string;
  roomTypeId: number;
  rooms: number;
  promotionId: number;
  email: string;
  offers: boolean;
}

export type TransactionInfo = {
  nightlyRate: number;
  subtotal: number;
  taxes: number;
  vat: number;
  total: number;
}

export type TravellerInfo = {
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
}

export type BookingDetails = {
  cancelled: boolean;
  roomTypeName: string;
  roomTypeId: number;
  reservationId: string;
  checkInDate: string;
  checkOutDate: string;
  promotionTitle: string;
  promotionDescription: string;
  adults: number;
  children: number;
  nightlyRate: number;
  subtotal: number;
  taxes: number;
  vat: number;
  total: number;
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  billingFirstName: string;
  billingLastName: string;
  mailingAddress1: string;
  mailingAddress2: string;
  country: string;
  city: string;
  state: string;
  zipcode: number;
  billingPhone: number;
  billingEmail: string;
  transactionId: string;
  imageUrl: string;
}
