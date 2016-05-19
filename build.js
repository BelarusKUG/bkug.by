const yaml = require('js-yaml');
const fs   = require('fs');

const load = file => yaml.safeLoad(fs.readFileSync(file, 'utf8'));

const meetups = fs.readdirSync('./meetups/').map(meetup => load(`./meetups/${meetup}`));
const speakers = fs.readdirSync('./speakers/').map(meetup => load(`./speakers/${meetup}`));
const contacts = load(`./contacts.yml`);

const data = {
    speakers,
    meetups,
    contacts
};

fs.writeFileSync("./app/data.json", JSON.stringify(data));
