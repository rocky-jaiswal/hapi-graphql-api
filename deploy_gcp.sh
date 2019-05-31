#!/bin/sh

docker build . --tag gcr.io/bible-neu/bible-api

gcloud auth print-access-token | docker login -u oauth2accesstoken --password-stdin https://gcr.io

gcloud config set run/region us-central1
gcloud config set core/project bible-neu

docker push gcr.io/bible-neu/bible-api

gcloud beta run deploy bible-api --image gcr.io/bible-neu/bible-api
