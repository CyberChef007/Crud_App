import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IContact } from '../models/IContact';
import { IGroup } from '../models/IGroup';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private serverUrl: string = 'http://localhost:9000'; // json-server url

  constructor(private httpClient : HttpClient) { }

  // GET ALL CONTACTS
  public getAllContacts(): Observable<IContact[]> {
    let dataURL:string = `${this.serverUrl}/contacts`;
    return this.httpClient.get<IContact[]>(dataURL);
  }

  // GET SINGLE CONTACT
  public getContact(contactId:string):Observable<IContact>{
    let dataURL:string = `${this.serverUrl}/contacts/${contactId}`;
    return this.httpClient.get<IContact>(dataURL);
  }


  // CREATE A CONTACT
  public createContact(contact : IContact):Observable<IContact>{
    let dataURL:string = `${this.serverUrl}/contacts`;
    return this.httpClient.post<IContact>(dataURL,contact);
  }


  // UPDATE A CONTACT
  public updateContact(contact : IContact, contactId : string):Observable<IContact>{
    let dataURL:string = `${this.serverUrl}/contacts/${contactId}`;
    return this.httpClient.put<IContact>(dataURL,contact);
  }


  // DELETE A CONTACT

  public deleteContact(contactId : string):Observable<{}>{
    let dataURL:string = `${this.serverUrl}/contacts/${contactId}`;
    return this.httpClient.delete<{}>(dataURL);
  }


  // GET ALL GROUPS
  public getAllGroups(): Observable<IGroup[]> {
    let dataURL:string = `${this.serverUrl}/groups`;
    return this.httpClient.get<IGroup[]>(dataURL);
  }


  // GET SINGLE GROUP
  public getGroup(contact : IContact):Observable<IGroup>{
    let dataURL:string = `${this.serverUrl}/groups/${contact.groupId}`;
    return this.httpClient.get<IGroup>(dataURL);
  }

}
