// Dependencies
import * as functions from 'firebase-functions';

// Function Import
import { NestServer } from "./nest-api/nest-server";

// Functions Implementation
export const api = functions.runWith({ memory: '2GB', timeoutSeconds: 150 }).https.onRequest(NestServer);