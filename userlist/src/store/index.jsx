import {createStore  } from 'redux'
import { userdetails } from '../reducers';

export const store = createStore( userdetails); 