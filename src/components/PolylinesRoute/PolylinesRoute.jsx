import {Polyline} from 'react-leaflet';
import {MarkersRoute} from '../../components';
import {useMap} from 'react-leaflet/hooks';
import {SelectedRouteSelectors, PolylinesSelectors} from '../../store/selectors';
import {useAppSelector, useAppDispatch} from '../../store/hook';
import {sagaActions} from '../../store/sagas/Polylines/Polylines';
import React,{useEffect} from 'react';

export const PolylinesRoute = () => {
  const selectedRoute = useAppSelector(state => SelectedRouteSelectors.all(state));
  const polylines = useAppSelector(state => PolylinesSelectors.all(state));
  const map = useMap();
  const dispatch = useAppDispatch();

  const showAllRoute = () => {
    if (typeof polylines.entities === 'object' && polylines.entities.length > 0) map.fitBounds(polylines.entities);
  }
  
  useEffect(() => {
    async function startFetching() {
      const route = selectedRoute.data;
      if (route) dispatch({type: sagaActions.FETCH_DATA_POLYLINE, route});
    }
    
    if (selectedRoute.data) startFetching();
  }, [selectedRoute]);

  useEffect(() => {
    if (polylines.entities && polylines.status === 'idle' && !polylines.error) showAllRoute();
  }, [polylines]);

  return (
    <>
      {polylines.entities &&
        <Polyline
          positions={polylines.entities}
        />
      }
      <MarkersRoute />
    </>
  );
}