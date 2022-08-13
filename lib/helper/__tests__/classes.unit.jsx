import classes from '../classes';

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