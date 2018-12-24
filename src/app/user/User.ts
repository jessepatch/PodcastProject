import { Podcast } from '../podcast/Podcast';

export class User {
    firstName:string;
    lastName:string;
    email:string;
    user_password:string;
    subscribed_podcasts:Podcast[];

}