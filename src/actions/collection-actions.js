import appDispatcher from '../app-dispatcher';

export function createItem(item) {
    appDispatcher.dispatch({
        actionType: 'create',
        item: item
    });
}

export function updateItem(id, item) {
    appDispatcher.dispatch({
        actionType: 'update',
        id: item.id,
        item: item
    });
}

export default {
    createItem,
    updateItem
}