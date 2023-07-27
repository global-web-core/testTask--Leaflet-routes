import {Marker, Tooltip} from 'react-leaflet';
import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import {Icon} from "leaflet";
import {useState, useEffect} from 'react';
import {SelectedRouteSelectors} from '../../store/selectors';
import {useAppSelector} from '../../store/hook';
import React from 'react';

Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina,
  iconUrl: iconMarker,
  shadowUrl: iconShadow,
});

export const MarkersRoute = () => {
  const selectedRoute = useAppSelector(state => SelectedRouteSelectors.all(state));
  const [listPoints, setListPoints] = useState([]);
  useEffect(() => {
    if (selectedRoute.data?.checkpoints) setListPoints(selectedRoute.data.checkpoints);
  }, [selectedRoute.data]);
  return (
    <>
      {listPoints.map(point =>
        <Marker key={point.coordinates.lat + point.coordinates.lng + point.nameCheckpoint} position={[point.coordinates.lat, point.coordinates.lng]}>
          <Tooltip>{selectedRoute.data.nameRoute + ' - ' +  point.nameCheckpoint}</Tooltip>
        </Marker>
      )}
    </>
  );
}