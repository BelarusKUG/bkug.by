#!/bin/bash

echo "-> Login to docker hub"
echo "${DOCKER_TOKEN}" | docker login -u "${DOCKER_USERNAME}" --password-stdin
echo "-> Pushing image heapy/bkug:b${TRAVIS_BUILD_NUMBER} to docker hub"
docker push heapy/bkug
