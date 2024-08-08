import { loadUsersByPage } from "../use-cases/load-users-by-page";


const state = {
    currentPage: 0,
    user: [],

}

const loadNextPage = async() => {
    await loadUsersByPage( state.currentPage + 1 );
}

const loadPreviousPage = async() => {
    throw new Error('Not implemented');
}


const onUserChanged = () => {
    throw new Error('Not implemented');
}

const reloadPage = async() => {
    throw new Error('Not implemented');
}


export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    getUser: () => [ ...state ],
    getCurrentPage: () => state.currentPage,
}