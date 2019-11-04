export interface HasteCallback<T> {
  /**
   * 请求成功回掉方法
   * @param {T} object 请求相应数据
   */
  onSuccess(object: T): void;

  /**
   * 请求失败回掉方法
   * @param {string} message 错误消息
   */
  onError(message: string): void;
}
