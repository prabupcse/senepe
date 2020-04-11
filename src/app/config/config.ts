import {Headers, RequestOptions} from '@angular/http';

/**
 * Defines common properties in the entire application
 * @author Morebodi Modise
 * @class Config
 */
export class Config {
  // URLs
  public static LOGIN_URL = Config.getUrl('auth');
  public static JSON_HEADERS = new Headers({'Content-Type': 'application/json'});
  public static GET_PHOTOS_URL = Config.getUrl('auth/allPhotos');
  public static POST_USER_URL = Config.getUrl('auth/register');
  public static GET_USER_PHOTOS = Config.getUrl('rest/photo/user');
  public static ADD_PHOTO_URL = Config.getUrl('rest/photo/add');
  public static FILE_REQUEST_URL = Config.getUrl('rest/photo/upload');
  // retrieve token from local storage
  public static token = localStorage.getItem('token');
  // set authorization headers
  public static AUTH_HEADERS = new Headers({'Content-Type': 'application/json', 'Authorization': Config.token});
  public static UPDATE_PHOTO_URL = Config.getUrl('photo/update');
  // public static TOKENIZE_URL = 'rest/user/users';
  // public static USER_BY_NAME_URL = 'rest/photo/user';

  /**
   * retrieve headers
   * @returns {RequestOptions}
   */
  static getOptions(): RequestOptions {
    const headers: Headers = new Headers();
    headers.append('content-type', 'application/json; charset=utf-8');
    const opts = new RequestOptions({headers: headers});
    opts.headers = headers;
    return opts;
  }

  static getAuthOptions(): RequestOptions {
    const headers: Headers = new Headers();
    headers.append('content-type', 'application/json; charset=utf-8');
    headers.append('Authorization', Config.token);
    const opts = new RequestOptions({headers: headers});
    opts.headers = headers;
    return opts;
  }

  static getUrl(url: string):string {
    // return 'http://192.168.99.100:30339/' + url;
    return 'http://localhost:8088/' + url
  }

}
