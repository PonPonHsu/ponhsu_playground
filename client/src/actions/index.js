import axios from 'axios';
import {FETCH_USER} from './types';

export const fetchUser = () => async dipatch => {
    const res = await axios.get('/api/current_user');
    dipatch({ type: FETCH_USER, payload: res.data });
};
