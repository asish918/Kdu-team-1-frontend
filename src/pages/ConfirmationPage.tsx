import Footer from "../components/layout/Footer"
import CompositionPage from "../components/confirmpage/Composition"
import PrintComponent from "../components/confirmpage/PrintComponent"

export default function ConfirmationPage() {
    return (
        <div>
            {/* <CompositionPage/> */}
            <PrintComponent/>
            <Footer sticky={false} />
        </div>
    )
}