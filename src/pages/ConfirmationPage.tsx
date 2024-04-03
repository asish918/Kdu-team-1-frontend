import Footer from "../components/layout/Footer"
import PrintComponent from '../components/searchpage/PrintComponent';
import CompositionPage from '../components/searchpage/Composition';
export default function ConfirmationPage() {
    return (
        <div>
            Confirmation Page 
            {/* <PrintComponent/> */}
            <CompositionPage/>
            <Footer sticky={false} />
        </div>
    )
}