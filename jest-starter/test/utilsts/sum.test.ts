import sum from "../../src/utilsts/sum";
// 上面的报错是因为 TS 找不到 describe 和 it 的类型定义，这里要安装对应的 Jest 类型声明包：
// npm i -D @types/jest@27.4.1
describe('sum',  ()=> {
    it('should 可以做加法',  ()=> {
        expect(sum(1,1)).toEqual(2)
    });
});
