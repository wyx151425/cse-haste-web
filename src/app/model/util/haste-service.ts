import {Observable, of} from 'rxjs';
import {Response} from '../dto/response';
import {HasteCallback} from './haste-callback';
import {PageInfo} from './page-info';

export class HasteService<T> {

  /**
   * 根据状态码获取响应消息
   * @param statusCode
   * @returns {string}
   */
  public static getMessage(statusCode): string {
    switch (statusCode) {
      case 300:
        return '系统状态错误';
      case 500:
        return '系统运行错误';
      case 600:
        return '请求参数错误';
      case 700:
        return '操作失败';
      case 1000:
        return '用户未注册';
      case 1001:
        return '用户已注册';
      case 1002:
        return '用户被禁用';
      case 1003:
        return '登录超时';
      case 1004:
        return '密码错误';
      case 1007:
        return '未授权操作';
      case 2000:
        return '文件格式错误';
      case 2001:
        return '文件解析错误';
      case 2002:
        return '图片文件上传失败';
      default:
        return '服务器访问失败';
    }
  }

  /**
   * 请求响应统一处理方法
   * @param {Response<any>} response
   * @param {HasteCallback<any>} callback
   */
  protected handleResponse(response: Response<T | Array<T> | PageInfo<T>>, callback: HasteCallback<T | Array<T> | PageInfo<T>>) {
    if (null != callback) {
      if (200 === response.statusCode) {
        callback.onSuccess(response.data);
      } else {
        callback.onError(HasteService.getMessage(response.statusCode));
      }
    }
  }

  /**
   * 请求错误统一处理方法
   * @param {string} operation
   * @param {S} result
   * @returns {(error: any) => Observable<S>}
   */
  protected handleError<S>(operation = 'operation', result?: S) {
    return (error: any): Observable<S> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as S);
    };
  }
}
