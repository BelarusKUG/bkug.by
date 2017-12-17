#!/bin/bash

export YML_CAL_VERSION=0.0.5
wget "https://dl.bintray.com/heapy/heap/by/heap/calendar/yml/yml-ical/${YML_CAL_VERSION}/yml-ical-${YML_CAL_VERSION}-all.jar" -O yml-ical.jar
java -jar "yml-ical.jar" "./calendar" "./calendar.ics"
