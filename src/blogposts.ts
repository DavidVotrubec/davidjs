// function makeRequest copied from http://stackoverflow.com/a/30008115/552194

function makeRequest (method: string, url: string, otherDomain?: string) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    
    if (otherDomain) {
        xhr.setRequestHeader('Access-Control-Allow-Origin', otherDomain);
    }
    
    xhr.open(method, url);    
    
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    
    xhr.send();
  });
}

// Get blogposts via WP Json API
// The server needs to have CORS enabled, see modified file json-api/json-api.php 

const url = 'http://blog.davidjs.com?json=1';
const domain = 'http://blog.davidjs.com';

makeRequest('GET', url, domain)
.then(function (posts) {
  console.log(posts);
})
.catch(function (err) {
  console.error('Augh, there was an error!', err.statusText);
}); 