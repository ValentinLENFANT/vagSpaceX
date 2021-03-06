import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  HttpHeaders
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { ApiError } from "../../typings/ServiceError";

const errorListeners: Function[] = [];

@Injectable({
  providedIn: "root"
})
export class SpacexApiService {
  private static baseUrl = "https://api.spacexdata.com/v2/";
  private _access_token: String = "";

  constructor(private restClient: HttpClient) {}

  public addErrorListener(func: Function) {
    errorListeners.push(func);
  }

  private getOptions(
    options?: any
  ): { headers: HttpHeaders; params: HttpParams; withCredentials: boolean } {
    let httpParams = new HttpParams();
    const httpHeaders = new HttpHeaders();
    if (options && options.params) {
      for (const key in options.params) {
        if (options.params.hasOwnProperty(key)) {
          httpParams = httpParams.append(key, options.params[key]);
        }
      }
    }
    httpHeaders.append("Authorization", `Bearer ${this._access_token}`);
    httpHeaders.append("Content-Type", "application/json");
    if (options && options.headers) {
      for (const key in options.headers) {
        if (options.headers.hasOwnProperty(key)) {
          httpHeaders.append(key, options.headers[key]);
        }
      }
    }
    return {
      headers: httpHeaders,
      params: httpParams,
      withCredentials: !!this._access_token
    };
  }

  private handleError(error: HttpErrorResponse) {
    const apiError: ApiError = {
      hasError: true,
      error,
      message: `Server returned error code ${error.status}`
    };
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
      apiError.message = error.error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    errorListeners.forEach((func: Function) => func(apiError));
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }

  get(route: string, options?: any): Observable<any> {
    options = this.getOptions(options);
    return this.restClient
      .get(`${SpacexApiService.baseUrl}${route}`, options)
      .pipe(catchError(this.handleError));
  }
}
