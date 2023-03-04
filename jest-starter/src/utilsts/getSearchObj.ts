// src/utilsts/getSearchObj.ts
const getSearchObj = () => {
    // ?a=1&b=2
    const { search } = window.location;

    // a=1&b=2
    const searchStr = search.slice(1);

    // ['a=1', 'b=2']
    const pairs = searchStr.split("&");

    // { 'a': '1' }
    const searchObj: Record<string, string> = {};

    pairs.forEach((pair) => {
        // [a, 1]
        const [key, value] = pair.split("=");
        searchObj[key] = value;
    });

    return searchObj;
};

export default getSearchObj;

// 这个函数的功能
/*

window.location.href = 'https://www.baidu.com?a=1&b=2'

const result = getSearchObj()

// result = {
//   a: '1',
//   b: '2',
// }*/
