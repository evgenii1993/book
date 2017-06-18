import {Injectable} from "@angular/core";
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DefaultService{
    constructor(private http:Http){
        console.log("init default-service...");
    }

    getData(method){
        return this.http.get("/api/"+method).map(
            res => res.json()
        );
    }
    sendData(method,object){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post("/api/"+method, JSON.stringify(object), {headers:headers})
            .map(res => res.json());
    }
    deleteData(method,id){
        return this.http.delete('/api/'+method+'/'+id)
            .map(res => res.json());
    }
    updateData(method, book){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put("/api/"+method+"/"+book._id, JSON.stringify(book), {headers:headers})
            .map(res => res.json());
    }
}