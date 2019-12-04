import { HttpHeaders } from '@angular/common/http';

export class HeadersUtil {

    static getHeaders() {
        return new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Accept': 'application/json'
        });
    }
}
