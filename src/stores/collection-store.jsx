import appDispatcher from '../app-dispatcher';
import EventEmitter from 'events';

let collection = {};
const CHANGE = 'change';

class CollectionStore extends EventEmitter {

    constructor(props) {
        super(props);
        const rawData = localStorage.getItem('appData');

        if (rawData) {
            collection = JSON.parse(rawData).collection;
        }

        this.dispatchToken = appDispatcher.register(action => {
            switch(action.actionType) {
                case 'createCollectionItem':
                    create(action.item);
                    this.emitChange(CHANGE);
                    break;
                case 'updateCollectionItem':
                    update(action.id, action.item);
                    this.emitChange(CHANGE);
                    break;
                case 'deleteCollectionItem':
                    destroy(action.id);
                    this.emitChange(CHANGE);
                    break;
            }
        });
    }

    getCollection() {
        return collection;
    }

    emitChange() {
        this.emit(CHANGE);
    }

    addChangeListener(callback) {
        this.on(CHANGE, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE, callback);
    }

}

function create(item) {
    const id = Date.now();
    collection[id] = Object.assign({id: id}, item);
    updateRemoteStore();
}

function update(id, item) {
    let oldData = collection[id];
    collection[id] = Object.assign(oldData, item);
    updateRemoteStore();
}

function destroy(id) {
    delete collection[id];
    updateRemoteStore();
}

function isValidItem(item) {
    return !!item.title;
}

function updateRemoteStore() {
    localStorage.setItem('appData', JSON.stringify({collection: collection}));
}

export default new CollectionStore();