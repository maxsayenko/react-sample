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
                case 'create':
                    create(action.item);
                    this.emitChange(CHANGE);
                    break;
                case 'update':
                    update(action.id, action.item);
                    this.emitChange(CHANGE);
                    break;
                case 'destroy':
                    destroy(action.id, action.item);
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
    localStorage.setItem('appData', JSON.stringify({collection: collection}));
}

function destroy(id) {
    delete collection[id];
}

function isValidItem(item) {
    return !!item.title;
}

export default new CollectionStore();