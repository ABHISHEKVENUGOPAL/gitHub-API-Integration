
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Communication {
    public static instance: Communication;

    constructor(private http: HttpClient) {
        Communication.instance = this;
    }
    public static getInstance(): Communication {
        let _this = this;
        if (Communication.instance) {
            return Communication.instance;
        }
    }
    /**
          * Creates a new CommunicationService with the injected Http.
          * @param {Http} http - The injected Http.
          * @constructor
          */



    /**
     * Returns an Observable for the HTTP GET request for the JSON resource.
     * @return {} The Observable for the HTTP request.
     */

    call(requestData?): Observable<any> {
        let observable: Observable<any>;
        let rootUrl = 'https://api.github.com/search/repositories?q=' + (requestData.search ? requestData.search : '') + '+language:assembly&sort=stars&per_page=' + (requestData.limit ? requestData.limit : '1000') + '&order=desc';
        observable = this.http.get(rootUrl).pipe(
            map(this.successResponse));
        return observable;
    }


    public successResponse(data) {
        return data;

    }

}
