import appDispatcher from '../app-dispatcher';
import history from '../history';

function navigateToCollection() {
    history.replaceState(null, '/collection');
}

export function createItem(item) {
    appDispatcher.dispatch({
        actionType: 'createCollectionItem',
        item: item
    });
    navigateToCollection();

}

export function updateItem(id, item) {
    appDispatcher.dispatch({
        actionType: 'updateCollectionItem',
        id: id,
        item: item
    });
    navigateToCollection();
}

export function deleteItem(id) {
    appDispatcher.dispatch({
        actionType: 'deleteCollectionItem',
        id: id
    })
}

export default {
    createItem,
    updateItem
}