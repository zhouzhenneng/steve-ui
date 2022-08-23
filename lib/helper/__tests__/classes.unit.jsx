import classes, {scopedClassMaker} from '../classes';

describe('classes', () => {
  it('接收一个classname', () => {
    const result = classes('a');
    expect(result).toEqual('a');
  });
  it('接收2个classname', () => {
    const result = classes('a', 'b');
    expect(result).toEqual('a b');
  });
  it('接收0个参数', () => {
    const result = classes();
    expect(result).toEqual('');
  });
  it('接受undefined 最终classname没有undefined', () => {
    const result = classes('a', undefined);
    expect(result).toEqual('a');
  });
  it('接收各种奇怪的值', () => {
    const result = classes('a', '中文', false, null);
    expect(result).toEqual('a 中文');
  });
});

describe('scopedClassMaker', () => {
  it('接受一个空字符串', () => {
    const sc = scopedClassMaker('sui-layout');
    expect(sc("")).toEqual('sui-layout')
  });
  it('接收一个string', () => {
    const sc = scopedClassMaker('sui-layout');
    expect(sc("Aside")).toEqual('sui-layout-Aside');
  })
  it('接收一个对象', () => {
    const sc = scopedClassMaker('sui-layout');
    expect(sc({y: true, z: false})).toEqual('sui-layout-y');
    expect(sc({y: true, z: true})).toEqual('sui-layout-y sui-layout-z');
  })
  it('接收一个对象和extra', () => {
    const sc = scopedClassMaker('sui-layout');
    expect(sc({y: true, z: true}, {extra: "hi"})).toEqual('sui-layout-y sui-layout-z hi');
  })
})