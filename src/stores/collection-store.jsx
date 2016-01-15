//import AppDispatcher from '../dispatcher';
import EventEmitter from 'events';

let collection = JSON.parse(localStorage.getItem('appData'));
const CHANGE = 'change';

class CollectionStore extends EventEmitter {

    constructor(props) {
        super(props);
        //this.dispatchToken = AppDispatcher.register(function(payload) {
        //    const action = payload.action;
        //
        //    switch(action.actionType) {
        //        case 'create':
        //            if (isValidItem(item)) {
        //                create(item);
        //                this.emitChange(CHANGE);
        //            }
        //            break;
        //
        //        case 'update':
        //            if (isValidItem(item)) {
        //                update(action.id, item);
        //                this.emitChange(CHANGE);
        //            }
        //            break;
        //
        //        case 'destroy':
        //            destroy(action.id);
        //            this.emitChange(CHANGE);
        //            break;
        //
        //    }
        //});
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
    var id = Date.now();
    collection[id] = assign({id: id}, item);
}

function destroy(id) {
    delete collection[id];
}

function isValidItem(item) {
    return !!item.title;
}

export default new CollectionStore();