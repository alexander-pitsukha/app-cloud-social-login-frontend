import {environment} from '../../environments/environment';
import {HttpHeaders} from '@angular/common/http';

export class AppConstants {
  private static API_BASE_URL = environment.apiBaseUrl;
  private static OAUTH2_URL = AppConstants.API_BASE_URL + 'oauth2/authorization/';
  private static REDIRECT_URL = environment.clientUrl;
  private static USER_AUTH_SERVICE = AppConstants.API_BASE_URL + 'user-auth-service/';
  public static CATEGORY_SERVICE = AppConstants.API_BASE_URL + 'category-service/';
  public static PRODUCT_SERVICE = AppConstants.API_BASE_URL + 'product-service/';
  public static ORDER_SERVICE = AppConstants.API_BASE_URL + 'order-service/';
  public static AUTH_API = AppConstants.USER_AUTH_SERVICE + 'auth/';
  public static USER_API = AppConstants.USER_AUTH_SERVICE + 'users/';
  public static GOOGLE_AUTH_URL = AppConstants.OAUTH2_URL + 'google' + AppConstants.REDIRECT_URL;
  public static FACEBOOK_AUTH_URL = AppConstants.OAUTH2_URL + 'facebook' + AppConstants.REDIRECT_URL;
  public static GITHUB_AUTH_URL = AppConstants.OAUTH2_URL + 'github' + AppConstants.REDIRECT_URL;
  public static LINKEDIN_AUTH_URL = AppConstants.OAUTH2_URL + 'linkedin' + AppConstants.REDIRECT_URL;
  public static httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
}
