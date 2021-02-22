

let baseURL = 'http://'+window.location.hostname.split('/')[0]
// baseURL = baseURL === "http://localhost"?'http://10.254.3.58:9000':'http://'+window.location.host.split('/')[0]
// baseURL = baseURL === "http://localhost"?'http://10.254.3.26:9000':'http://'+window.location.host.split('/')[0]
// baseURL = baseURL === "http://localhost"?'http://10.253.64.33:9000':'http://'+window.location.host.split('/')[0]
// baseURL = baseURL === "http://localhost"?'http://172.20.24.180:9000':'http://'+window.location.host.split('/')[0]
baseURL = baseURL === "http://localhost"?'http://127.0.0.1:12687':'http://'+window.location.host.split('/')[0]
// baseURL = baseURL === "http://localhost"?'http://10.130.8.191:8101':'http://'+window.location.host.split('/')[0]
// 

export default {
  baseURL: baseURL
};
