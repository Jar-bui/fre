let callbackLists = {}
let eventHub = {
    trigger(eventName, data) {
        let callbackList = callbackLists[eventName]
        if (!callbackList) {
            return
        }
        for (let i = 0; i < callbackList.length; i++) {
            callbackList[i](data)
        }
    },
    on(eventName, callback) {
        if (!callbackLists[eventName]) {
            callbackLists[eventName] = [] // {change:[callback,callback2]}
        }
        callbackLists[eventName].push(callback)
    }
}

export default eventHub