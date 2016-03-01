// Because I am only rendering few articles here, I do not need fully-blown framework like Angular or React
// Simple template engine will do
// First I load articles from Wordpress via WP JSON API
// then when they are loaded I render them via the TemplateEngine
// That's all there is to it.


// function makeRequest copied from http://stackoverflow.com/a/30008115/552194

function makeRequest (method: string, url: string) {
  return new Promise(function (onSuccessFn, onErrorFn) {
    const xhr = new XMLHttpRequest();
    
    xhr.open(method, url);
    
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
          
          console.log('onload resolve', onSuccessFn, 'bbbbbb');
          
          // This throws exception ...  have no idea why
        //onSuccessFn(xhr.response);
      } else {
        onErrorFn({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
        
    xhr.onerror = function () {        
      onErrorFn({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    
    xhr.send();
  });
};

// TemplateEngine copied from http://krasimirtsonev.com/blog/article/Javascript-template-engine-in-just-20-line
// slightly modified by David Votrubec because of Typescript
var TemplateEngine = function(html: string, options: any) {
    var re = /<%([^%>]+)?%>/g, 
        reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g, 
        code = 'var r=[];\n', 
        cursor = 0, 
        match: RegExpMatchArray;
        
    var add = function(line, js?) {
        js? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
            (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
        return add;
    }
    
    while(match = re.exec(html)) {            
        var slice = html.slice(cursor, match.index);
                
        add(slice)(match[1], true);
        cursor = match.index + match[0].length;
    }
    
    add(html.substr(cursor, html.length - cursor));
    
    code += 'return r.join("");';
    return new Function(code.replace(/[\r\t\n]/g, '')).apply(options);
};


const blogPostTemplate = '<div class="post"><%title%></div>';

// Get blogposts via WP Json API
// The server needs to have CORS enabled, see modified file json-api/json-api.php 

const url = 'http://blog.davidjs.com?json=1';
const domain = 'http://blog.davidjs.com';

function getBlogPosts() {
    
    makeRequest('GET', url)
    .then(function (data: any) {
        const blogposts = document.getElementById('blogposts');
        
        console.log('blogposts', blogposts);
        
        debugger
        const rendered = TemplateEngine(blogPostTemplate, {title: 'test title'});
        
        console.log('rendered', rendered);
        
        //blogposts.innerHTML = data.posts;
        blogposts.innerHTML = rendered;
    })
    .catch(function (err) {
        console.error('Augh, there was an error!', err.statusText);
    });     
}

