


const domainLocaleMap = {
    'localhost': 'en',
    'lunatech.com': 'en',
    'lunatech.fr': 'fr'
  };

export default {
 
    name: 'customPath',
  
    lookup() {
        let locale = "en";
        // In the browser, get the hostname from window.location.
        if (typeof window !== 'undefined' ) {
        locale = domainLocaleMap[window.location.hostname];
        } 
        // On the server, get the hostname from the request headers.
        // We use the host header which is available on IncomingMessage.
        // https://nodejs.org/api/http.html#http_class_http_incomingmessage
        // But the host header may include the port so first we take that off, if it exists.
        else {
        const hostname = req.headers.host?.split(':')[0];
        locale = domainLocaleMap[hostname];
        }
        return locale;
    }
  };