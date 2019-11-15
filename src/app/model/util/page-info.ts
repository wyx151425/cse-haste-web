export class PageInfo<T> {
  /**
   * 当前分页的页码
   */
  pageNum: number;
  /**
   * 页面数据量
   */
  pageSize: number;
  /**
   * 是否有上一页
   */
  hasPreviousPage: boolean;
  /**
   * 是否有下一页
   */
  hasNextPage: boolean;
  /**
   * 分页总数
   */
  pages: number;
  /**
   * 数据总数
   */
  total: number;
  /**
   * 数据集
   */
  list: Array<T>;

  constructor() {
  }
}
