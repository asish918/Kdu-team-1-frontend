import Footer from "../components/layout/Footer";
import Itinerary from "../components/searchpage/Itinerary";

export default function CheckoutPage() {
    // TODO Fetch this data from Redux State (Asish)
    const itineraryData = {
        dates: 'May 9 - May 16, 2024',
        guests: '1 adult 1 child',
        room: '1 room',
        roomType: 'Executive Room',
        specialPromo: 'Special Promoname',
        subtotal: '$00.00',
        taxes: '$000.00',
        vat: '$000.00',
        dueNow: '$0000.00',
        dueAtResort: '$0000.00',
    };
    return (
        <>
            <div>
                Checkout Page
                <Itinerary itinerary={itineraryData} />
            </div>
            <Footer sticky={false} />
        </>
    )
}