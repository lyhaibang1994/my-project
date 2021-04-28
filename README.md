# Cloud Build to build our docker image
gcloud builds submit --tag gcr.io/western-emitter-306610/viethaus
## Deploy our new revision to Cloud Run
gcloud run deploy --image gcr.io/western-emitter-306610/viethaus --platform managed