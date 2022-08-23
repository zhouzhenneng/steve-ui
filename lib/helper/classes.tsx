function  classes(...names: (string | undefined)[]){
  return names.filter(Boolean).join(" ");
}
export default classes;

interface Options {
  extra: string | undefined;
}

interface  ClassToggles {
  [K: string]: boolean
}
const scopedClassMaker = (prefix: string) => {
  return function x(name?: string | ClassToggles, options?: Options){
    let name2;
    let result;
    if(typeof name === 'string' || name === undefined){
      result =  [prefix, name].filter(Boolean).join("-");
    }else{
      //name = {"sui-layout": false, "hasAside": true, "active": true}
      name2 = Object.entries(name).filter(kv => kv[1]).map(kv => kv[0]);
      //name2=["hasAside". "active"]
      //result = "sui-layout-hasAside sui-layout-active"]
      result = name2.map(n =>
        [prefix, n].filter(Boolean).join("-")
      ).join(" ")
    }
    if(options && options.extra){
      return [result, options && options.extra].filter(Boolean).join(" ")
    }else{
      return result;
    }
  }
}

export {scopedClassMaker};