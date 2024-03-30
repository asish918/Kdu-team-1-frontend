import Footer from "../components/layout/Footer";
import FeedbackModal from "../components/searchpage/FeedbackModal";

export default function FeedbackPage() {
    return (
        <div>
            <FeedbackModal />
            <Footer sticky={true} />
        </div>
    )
}