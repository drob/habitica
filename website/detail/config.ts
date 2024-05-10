import setupNconf from "../server/libs/setupNconf";

// Initialize configuration before importing server.
setupNconf();

import { app } from "../server/server";

export { app };
