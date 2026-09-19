const fs=require('fs'),path=require('path');const root=__dirname;fs.mkdirSync(path.join(root,'dist/server'),{recursive:true});
const names=['index.html','css/styles.css','js/app.js','js/jobs.js','js/courses.js','js/career.js','images/opencareers.svg','images/bunpithak.jpg','images/nichapa.png'];
const files={};
for(const n of names){
 if(!fs.existsSync(path.join(root,n)))throw Error('Missing '+n);
 const ext=path.extname(n),binary=['.jpg','.png'].includes(ext);
 files['/'+n]={body:fs.readFileSync(path.join(root,n),binary?'base64':'utf8'),binary,type:({'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.jpg':'image/jpeg','.png':'image/png'}[ext])};
}
files['/']=files['/index.html'];
const worker='const files='+JSON.stringify(files)+';\nexport default {async fetch(request){const url=new URL(request.url);const file=files[url.pathname];if(!file)return new Response("Not found",{status:404});const body=request.method==="HEAD"?null:file.binary?Uint8Array.from(atob(file.body),c=>c.charCodeAt(0)):file.body;return new Response(body,{headers:{"Content-Type":file.type,"X-Content-Type-Options":"nosniff","Referrer-Policy":"strict-origin-when-cross-origin"}});}};\n';
fs.writeFileSync(path.join(root,'dist/server/index.js'),worker);console.log('Built self-contained static Worker: '+names.length+' assets');