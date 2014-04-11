<html>
<head>
  <title>Sync with calendar</title>
  

  <!--[if IE]>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <![endif]-->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <!-- Bootstrap CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <!-- Generic page CSS -->
    <link href="css/style.css" rel="stylesheet">

</head>

<body class="background-style">
  <?php
    $allowedExts = array("pdf");
    $temp = explode(".", $_FILES["file"]["name"]);
    $extension = end($temp);
    if ((($_FILES["file"]["type"] == "application/pdf"))
    && in_array($extension, $allowedExts))
      {
      if ($_FILES["file"]["error"] > 0)
        {
        echo "Return Code: " . $_FILES["file"]["error"] . "<br>";
        }
      else
        {
        move_uploaded_file($_FILES["file"]["tmp_name"],
        "upload/" . $_FILES["file"]["name"]);          
        }
      }
    else
      {
      
      }
  ?>
	<div class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-fixed-top .navbar-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="./index.html">plan.it</a>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="./index.html">What is plan.it?</a></li>
            <li><a href="./create.html">Create Syllabus</a></li>
            <li class="active"><a href="./upload.html">Upload Syllabus</a></li>
          </ul>
        </div>
      </div>
    </div>
  <div>
    
      <!-- a container for the output -->
    <!-- <div id="output" style:"display:none"></div> -->
  </div>
  
  
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h1>Uploaded Syllabus</h1>
        <iframe id="input" src=<?php echo "upload/".$_FILES["file"]["name"] ?>></iframe>
      </div>
      <div class="col-md-6">
            <iframe id="processor" src="pdfextract.html"></iframe>
            <!-- <iframe id="processor"></iframe> -->
      </div>
    </div>
  </div>

    
  <script>
  var input = document.getElementById("input");
  var processor = document.getElementById("processor");
  var output = document.getElementById("output");
  
  window.addEventListener("message", function(event){
    
    switch (event.data){
      case "ready":
        var xhr = new XMLHttpRequest;
        xhr.open('GET', input.getAttribute("src"), true);
        xhr.responseType = "arraybuffer";
        xhr.onload = function(event) {
          processor.contentWindow.postMessage(this.response, "*");
		  };
        xhr.send();
      break;
      
      default:
	  	// output.textContent = event.data.replace(/\s+/g, " ");
      break;
    }
  }, true);
  </script>


</body>
</html>
