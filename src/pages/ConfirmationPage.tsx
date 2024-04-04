import Footer from "../components/layout/Footer"
import PrintComponent from "../components/confirmpage/PrintComponent"


export default function ConfirmationPage() {
    return (
        <div>
            <PrintComponent/>
            <Footer sticky={false} />
        </div>
    )
}