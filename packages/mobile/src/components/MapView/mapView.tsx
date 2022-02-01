import { LocationGeocodedLocation } from 'expo-location';
import MapView from 'react-native-maps';
import { useEffect, useState } from 'react';
// import MapViewDirections from 'react-native-maps-directions';

// import { API_DIRECTIONS_KEY } from '@env';
import { mapViewStyles } from './mapViewStyles';
import { DestinationMarker } from '../DestinationMarker/destinationMarker';

type MapComponentProps = {
  latitude: number;
  longitude: number;
  destination: LocationGeocodedLocation | null;
};

export const MapComponent = ({ latitude, longitude, destination }: MapComponentProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [origin, setOrigin] = useState({ latitude, longitude });
  const [mapDest, setMapDest] = useState(null as LocationGeocodedLocation | null);

  useEffect(() => {
    setOrigin({ latitude, longitude });
    setMapDest(destination);
  }, [latitude, longitude, destination]);

  return (
    <MapView
      provider="google"
      style={mapViewStyles.map}
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      showsUserLocation
      followsUserLocation
      showsMyLocationButton
      region={
        mapDest
          ? {
              latitude: mapDest.latitude,
              longitude: mapDest.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }
          : {
              latitude,
              longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }
      }>
      {mapDest && <DestinationMarker mapDest={mapDest} />}
      {/* <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={API_DIRECTIONS_KEY} // insert your API Key here
          strokeWidth={10}
          strokeColor="#111111"
        /> */}
    </MapView>
  );
};
