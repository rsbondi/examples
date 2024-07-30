var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs"),
    port = process.argv[2] || 8888;

http.createServer(function(req, res) {
    if (path.normalize(decodeURI(req.url)) !== decodeURI(req.url)) {
        res.statusCode = 403;
        res.end();
        return;
    }

    var projects = '../projects/'

    /*  special case, / is here while others start at ../
        readme and apps respond to ajax and return json objects for riot template
     */
    if(req.url=='/') {
        var index = fs.readFileSync('index.html', 'utf-8')
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(index)

        return
    }

    if(req.url=='/readme') {
        var rm = fs.readFileSync('../README.md', 'utf-8')
        res.writeHead(200, {'Content-Type': 'text/json'});
        var readme = {'name': 'README.md', 'contents': rm}
        res.end(JSON.stringify(readme))

        return
    }

    if(req.url=='/apps') {
        var apps = {}

        var dirs = fs.readdirSync(projects)
        dirs.forEach(function(d) {
            apps[projects+d] = [];
            var files = fs.readdirSync(projects+d)
            files.forEach(function(fname) {
                if(!fs.lstatSync(projects+d+'/'+fname).isDirectory()) {
                    var file = fs.readFileSync(projects+d+'/'+fname, 'utf8')
                    apps[projects+d].push({'name': fname, 'contents': file})
                }
            })
        })
        res.end(JSON.stringify(apps))
        return
    }

    /* static file serving from ../  */
    var uri = url.parse(req.url).pathname
        , filename = path.join(process.cwd(), '../'+uri);
    fs.exists(filename, function(exists) {
        if(!exists) {
            res.writeHead(404, {"Content-Type": "text/plain"});
            res.write("404 Not Found\n");
            res.end();
            return;
        }

        if (fs.statSync(filename).isDirectory()) filename += '/index.html';

        fs.readFile(filename, "binary", function(err, file) {
            if(err) {
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.write(err + "\n");
                res.end();
                return;
            }

            res.writeHead(200);
            res.write(file, "binary");
            res.end();
        });
    });
}).listen(parseInt(port, 10));

console.log("Example file server running on port:" + port + "/\nCTRL + C to shutdown");