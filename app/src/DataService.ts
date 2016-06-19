const data = require('../data.json');

interface Speakers {
    speakers:Speaker[];
}

interface Speaker {
    name:string;
    tag:string;
    description:string;
    links: WebLink[];
}

interface MeetupTime {
    date:string;
    start:string;
    end:string;
}

interface MeetupItem {
    name:string;
    type:'speech'|'break';
    youtube?:string
    author?:string
    start:string;
    end:string;
}

interface Meetup {
    time:MeetupTime;
    title:string;
    description:string;
    schedule:MeetupItem[];
}

interface WebLink {
    type:'youtube'|'twitter'|'github'|'email';
    text:string;
    url:string;
}

interface Contacts {
    drivers:Driver[];
    links:WebLink[];
}

interface Driver {
    name:string;
    links:WebLink[];
}

export interface CommunityData {
    speakers:Speaker[];
    meetups:Meetup[];
    contacts:Contacts;
}

export default data as CommunityData;
