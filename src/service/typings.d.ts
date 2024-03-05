declare namespace API {
  // 配置接口返回数据
  type ResDataType<T> = {
    code: number;
    message: string;
    result: T;
  };

  // 定义基础类型
  type BeenObj = {
    id: number | string;
    name: string;
    gmtCreate?: string;
    gmtModified?: string;
  };

  type ListType = {
    id: string;
    time: string;
  };

  type OptType = {
    label: string;
    value: string | number;
  };

  type ListQueryParamsType = {
    pageIndex?: number;
    pageSize?: number;
  };

  type ListType<T> = {
    records: T;
    total: number;
    size: number;
    current: number;
    orders: any[];
    optimizeCountSql: boolean;
    searchCount: boolean;
    pages: number;
  };

  type ListResType<T> = ResultData<ListType<T>>;
}

declare namespace RootBl {
  type BaseOpt = Record<number, string>;

  type CountType = {
    download: number;
    handle: number;
    finish: number;
    error: number;
  };

  type CountKeyType = keyof CountType;

  type ListType = {
    [key in CountKeyType]: RootBl.ListType[];
  } & { date: string };
}
