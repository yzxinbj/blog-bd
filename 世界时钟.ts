interface TimeResponse {
    value: string
}

// const syncTime = () => Promise<TimeResponse>;

const syncTime = () => {
    return new Promise((resolve, reject) => {
        let response: TimeResponse = {
            value: (new Date()).toJSON()
        };
        resolve(response);
    });
}

class MyPromise<T> {

}