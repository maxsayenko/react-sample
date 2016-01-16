import appDispatcher from '../app-dispatcher';
import history from '../history';

function navigateToCollection() {
    history.replaceState(null, '/collection');
}

export function createItem(item) {
    appDispatcher.dispatch({
        actionType: 'create',
        item: item
    });
    navigateToCollection();

}

export function updateItem(id, item) {
    appDispatcher.dispatch({
        actionType: 'update',
        id: id,
        item: item
    });
    navigateToCollection();
}

export default {
    createItem,
    updateItem
}