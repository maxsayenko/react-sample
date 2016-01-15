import Dispatcher from 'flux';

export function createItem(item) {
    console.log('create');
}

export function updateItem(item) {
    console.log('update');
}

export default {
    createItem,
    updateItem
}