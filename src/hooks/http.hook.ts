// import {useCallback, useState} from 'react';
// import {request as Http} from '../utils/request';
//
// export const useHttp = () => {
// 	const [loading, setLodign] = useState(false);
// 	const [error, setError] = useState(null);
//
// 	const request = useCallback( async (url: string, method?: string, body?: any) => {
// 		setLodign(true)
// 		try {
// 			const response = await Http.get(url);
// 			const data = await response.json();
// 			if (!response.ok) {
// 				throw new Error((data.message))
// 			}
// 			setLodign(false)
// 			console.log('data===>', data)
// 			return data
// 		} catch (e: any) {
// 			setLodign(false);
// 			setError(e.message);
// 			throw e;
// 		}
// 	}, []);
//
// 	const cliarError = () => setError(null)
//
// 	return {loading, request, error, cliarError}
// }