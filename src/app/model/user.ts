import {HasteEntity} from './haste-entity';

export class User extends HasteEntity {
  /**
   * 姓名
   */
  name: string;
  /**
   * 用户名
   */
  username: string;
  /**
   * 密码
   */
  password: string;
  /**
   * 角色
   */
  role: string;
  /**
   * 权限令牌
   */
  token: string;

  constructor() {
    super();
  }
}
