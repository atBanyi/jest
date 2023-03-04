//test/utils/storages.test.ts
import storage from "../../src/utilsts/storage";

describe('storages', function () {
    it('should 可以缓存值', function () {
        storage.set("newKey","hello");
        expect(localStorage.getItem("my-app-newKey")).toEqual('hello')
    });
});
