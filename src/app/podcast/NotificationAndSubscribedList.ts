import { Podcast } from './Podcast';

export class NotificationAndSubscribedList {

    subscribedPodcasts:Podcast[];
    notificationPodcasts:NotificationPodcast[];
    
}

export class NotificationPodcast {
    id:string;
    collectionName:string;
    mostRecentEpisode:string;
    email:string;
    feedUrl:string;
}