export class PodcastEpisode {
    title:string;
    description:string;
    pubDate:string;
    enclosure:PodcastAudio;
}
export class RssFeed{
rss:Rss;
}
export class Rss {
    channel:Channel;
}

export class Channel {
    item:PodcastEpisode[];
    description:string;
    copyright:string;
    docs:string;
}

export class PodcastAudio {
    length:string;
    type:string;
    url:string;
}