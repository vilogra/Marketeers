import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { mainUrl } from "./config";

@Injectable({
  providedIn: "root",
})
export class ClothService {
  constructor(private http: HttpClient) {}

  getAllCloth(): Observable<object> {
    return this.http.get(mainUrl + "/api/products");
  }
}
