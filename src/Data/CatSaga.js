import {call, put, takeEvery} from 'redux-saga/effects';
import { getCatsSuccess } from './CatState';

function* workGetCatsData(){
    const cats = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'));
    const catsData = yield cats.json();
    //const results = catsData;

    yield put(getCatsSuccess(catsData))
}

function* CatSaga(){
    yield takeEvery('cats/getCatsData', workGetCatsData);
};

export default CatSaga;