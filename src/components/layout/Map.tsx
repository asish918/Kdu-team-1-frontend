import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

interface MapProps {
    center?: number[];
}

const LeafletContainer = styled.div`
    width: fit-content;
    height: fit-content;
    border-radius: 20px;
    overflow: hidden;
`

const Map: React.FC<MapProps> = ({
    center
}) => {
    return (
        <LeafletContainer>
            <MapContainer style={{ height: '500px', width: '500px' }} center={[12.9269795, 77.6202371]} zoom={15} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[12.9269795, 77.6202371]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </LeafletContainer>
    )
}

export default Map