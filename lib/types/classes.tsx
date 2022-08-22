interface Options {
  extra: string | undefined;
}
const scopedClassMaker = (prefix: string) => {
  return function x(name?: string, options?: Options){
    const result =  [prefix, name].filter(Boolean).join("-");
    if(options && options.extra){
      return [result, options && options.extra].filter(Boolean).join(" ")
    }else{
      return result;
    }
  }
}

export default  scopedClassMaker;