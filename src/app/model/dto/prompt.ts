export class Prompt {
  /**
   * 索引
   */
  id: number;
  /**
   * 状态码
   */
  status: number;
  /**
   * 提示信息
   */
  message: string;

  constructor(id: number, status: number, message: string) {
    this.id = id;
    this.status = status;
    this.message = message;
  }
}
