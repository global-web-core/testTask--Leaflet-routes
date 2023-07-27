import {Table} from 'antd';
import {useState, useEffect} from 'react';
import styles from './TableRoutes.module.css';
import {RoutesSelectors} from '../../store/selectors';
import {SelectedRoute} from '../../store/reducers';
import {useAppSelector, useAppDispatch} from '../../store/hook';
import React from 'react';

export const TableRoutes = () => {
	const routes = useAppSelector(state => RoutesSelectors.all(state));
	const [dataSource, setDataSource] = useState([]);
	const [columns, setColumns] = useState([]);
	const dispatch = useAppDispatch();

	const fillDataSource = () => {
		let dataSource = [];
		routes.forEach(route => {
			let row = {key: route.id, 'nameRoute': route.nameRoute};
			route.checkpoints.forEach(point => {
				row[point.nameCheckpoint] = point.coordinates.lat + ', ' + point.coordinates.lng;
			})
			dataSource.push(row);
		});
		setDataSource(dataSource);
	}

	const fillColumns = () => {
		let dataColumns = [
			{
				title: 'Маршрут',
				dataIndex: 'nameRoute',
				key: 'nameRoute',
			},
		];
		routes.forEach(route => {
			let column = {};
			route.checkpoints.forEach(point => {
				column.title = point.nameCheckpoint + ' (lat, lng)';
				column.dataIndex = point.nameCheckpoint;
				column.key = point.nameCheckpoint;
			})
			dataColumns.push(column);
		});
		setColumns(dataColumns);
	}

	useEffect(() => {
		if (routes) {
			fillDataSource();
			fillColumns();
		}
	}, [routes]);
	
	const selectedRow = (idRoute) => {
		const route = routes.find(route => route.id === idRoute);
		if (route) dispatch(SelectedRoute.set(route));
	}

	return (
		<>
			<Table
				dataSource={dataSource}
				columns={columns}
				pagination={false}
				className={styles.tableRoutes}
				rowSelection={{ type: 'radio' }}
				onRow={(record) => {
					return {
						onChange: () => {selectedRow(record.key)},
					};
				}}
			/>
		</>
	);
}