// Backend API base URL
const BACKEND_HOST = process.env.REACT_APP_BACKEND_HOST || 'http://localhost:7979';

export default {
    BACKEND_HOST,
    LOGIN: `${BACKEND_HOST}/login`,
    API: (path) => `${BACKEND_HOST}${path}`
};
