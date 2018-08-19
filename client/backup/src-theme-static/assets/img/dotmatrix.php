<?php
include "layout.php";
drawHeadAndMeta("dotMatrix");
generatePreloader();
topFixedNavbar();
?>
<?php include_once("analyticstracking.php") ?>


  <div class="clear"></div>

  <!--Content-->

  <div class="content" id="ajax-content">


        <div class="text-intro">

          <h1>[.dotMatrix]</h1>
          
                    
	          <div class="one-column">
	            <p>The devil is in the details.</p>
	          </div>


		          <div class="two-column">
		            <p>[.dotMatrix] is an event by Cyber Labs where teams are quizzed on topics ranging from significant buzz from the cyberspace and common computer science and day-to-day entities’ attributes. 
The kind of questions that make you feel guilty and think, "Damn! I see that everyday, how could i miss this!?"</p>
                <p>Register in teams of 3 (each member from different academic year) <a href="https://cyberlabsism.typeform.com/to/WQyLDV">here</a>.
                Feel free to Contact the hosts for any issues pertaining to teams and other.</p>
		          </div>   
                                 <div class="clear"></div>            
                                                  
                                <br/><br/><br/><br/><br/>
                 <div class="row">



                   <div class="col-sm-5 col-sm-offset-1">
                     <div id="fb-root"></div>
                     <script>
                         (function(d, s, id) {
                             var js, fjs = d.getElementsByTagName(s)[0];
                             if (d.getElementById(id)) return;
                             js = d.createElement(s);
                             js.id = id;
                             js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3";
                             fjs.parentNode.insertBefore(js, fjs);
                         }(document, 'script', 'facebook-jssdk'));
                     </script>
                     <div class="fb-post" data-href="https://www.facebook.com/labscyber/posts/767371000035403" data-width="500">
                         <div class="fb-xfbml-parse-ignore">
                             <blockquote cite="https://www.facebook.com/labscyber/posts/767371000035403">
                                 <p>Registrations open for the event [.DOTMATRIX]Let the keenest observer win!</p>Posted by <a href="https://www.facebook.com/labscyber/">Cyber Labs</a> on&nbsp;<a href="https://www.facebook.com/labscyber/posts/767371000035403">Wednesday, January 13, 2016</a>
                             </blockquote>
                         </div>
                     </div>
                     
                     
                   </div>


                   <div clas="col-sm-6 pull-right">
                     <img class="img-responsive img-center" src="img/website_dotmatrix.png">
                   </div>
                   <br><br>
                   <HR>
                   <div class="row">
                    <h1>PUZZLE DAY 2 HINTS:</h1>
                      <div class="col-cs-6">
                        <h3>hint 1</h3>
                        <img src="img/puzzle2/hint1.jpg">
                      </div>
                      <hr>
                      <div class="col-cs-6">
                        <h3>hint 2</h3>
                        <img src="img/puzzle2/hint2.png">

                      </div>
                      <div class="col-cs-6">
                        <h3>hint 3</h3>
                        <img src="img/puzzle2/hint3.jpg">

                      </div><div class="col-cs-6">
                        <h3>hint 4</h3>
                        <img src="img/puzzle2/hint4.jpg" style="width:50%">

                      </div>
                   </div>

                 </div>
                
            </div>
        
    </div>



  

  
  <?php
    drawFooter();
  ?>



<!--Scripts-->

  <script src="js/jquery.min.js"></script>
	<script src="js/jquery.easing.min.js"></script>
	<script src="js/modernizr.custom.42534.js" type="text/javascript"></script>
  <script src="js/jquery.waitforimages.js" type="text/javascript"></script>
  <script src="js/typed.js" type="text/javascript"></script>
  <script src="js/masonry.pkgd.min.js" type="text/javascript"></script>  
  <script src="js/imagesloaded.pkgd.min.js" type="text/javascript"></script>    
  <script src="js/jquery.jkit.1.2.16.min.js"></script>
 
  <script src="js/script.js" type="text/javascript"></script>
  
	<script>
    $('#button, #buttons').on('click', function() {
      $( ".opacity-nav" ).fadeToggle( "slow", "linear" );
    // Animation complete.
    });
  </script>


</body>
</html>