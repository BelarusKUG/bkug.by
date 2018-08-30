#!/bin/bash

export BKUG_ENV="prod"
export BKUG_DATA=""
export BKUG_SENTRY_DSN=""
export BKUG_SYSTEM_USER="$(id -u):$(id -g)"
export BKUG_OPTS="-Xmx256m"
