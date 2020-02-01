import Extender from "../../croquet-extensions/extension.js";
import StreamingExtension from "../../croquet-extensions/streaming/extension.js";

class MulticamModel extends Extender.extendModel(Croquet.Model, StreamingExtension.modelExtension) {
    init() {
        super.init();
        this.subscribe(this.sessionId, "register-as-host", this.registerAsHost);
    }

    registerAsHost() {
        const {data, user} = this.unpackSignedUserMessage(this.sessionId, "register-as-host", ...arguments);
        if(data && user) {
            this.host = this.users.indexOf(user);
        }
    }
}

MulticamModel.register();

class BroadcasterModel extends Extender.extendModel(Croquet.Model, StreamingExtension.modelExtension) {
    init() {
        super.init();
        this.subscribe(this.sessionId, "register-as-host", this.registerAsHost);
    }

    registerAsHost() {
        const {data, user} = this.unpackSignedUserMessage(this.sessionId, "register-as-host", ...arguments);
        if(data && user) {
            this.host = this.users.indexOf(user);
        }
    }
}

BroadcasterModel.register();

export {MulticamModel, BroadcasterModel};