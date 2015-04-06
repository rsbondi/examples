<?php

$dirs = scandir('./projects/');
$readme = array(array("name"=>"README.md", "contents"=>file_get_contents("./README.md")));

$json = array();
foreach($dirs as $dir) {
    if(is_dir($dir)) continue;
    $json["projects/$dir"] = array();
    $files = scandir("projects/$dir");
    foreach($files as $f) {
        if(is_dir("projects/$dir/$f")) continue;
        $json["projects/$dir"][] = array("name"=>$f, "contents"=>file_get_contents("projects/$dir/$f"));
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <div class="examples">
        <examples>
    </div>

    <script src="//cdnjs.cloudflare.com/ajax/libs/marked/0.3.2/marked.min.js"></script>
    <script src="tag.html" type="riot/tag"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/riot/2.0.11/riot+compiler.min.js"></script>
    <script src="http://ace.c9.io/build/src/ace.js" type="text/javascript" charset="utf-8"></script>

    <script>
        var apps = <?= json_encode($json); ?>;
        var readme = <?= json_encode($readme); ?>;
        riot.compile(function() {
            var ex = riot.mount( 'examples',  {examples: apps, readme: readme})[0]
            ex.trigger('complete')
        })

    </script>

</body>
</html>
