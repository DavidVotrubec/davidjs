<?php
$currentUrl = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

$arr = array(2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016);
foreach ($arr as &$year) {

if (stripos($currentUrl, strval($year)) !== FALSE) {
    // request to old blog article
    // redirect user to new url
    // This is hard-wired for davidjs.com.
    // I do not know PHP and I find it ugly language :)
    $newUrl = str_replace("davidjs.com", "blog.davidjs.com", $currentUrl);
    
    header("Location: ".$newUrl);
    die();
  }
}
?>

<!DOCTYPE html>
<html>
<head>
<title>David Votrubec - Web Developer</title>

<meta name="author" content="David Votrubec">
<meta charset="utf-8">
<meta name="description" content="Personal home page of web developer (C#, Typescript, Javascript, AngularJs, Css, Sass, Entity Framework, Gulp, Git)" />
    
<link rel="stylesheet" href="public/css/main.css"/>
<link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
<link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />

<!-- Link to Google fonts -->
<link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">

</head>

<body>
    <nav class="main-menu top-header">
        <i class="fa fa-rocket"></i>
        <strong class="authorname">David Votrubec</strong>

        <div class="pull-right links">
            <a href="https://blog.davidjs.com">
                <i class="fa fa-rss"></i>
                <span class="text">Blog</span>
            </a>
            <!--<a xxxxxxhref="http://www.topmonks.com/team/">Current Work</a>-->
            <a href="https://twitter.com/DavidVotrubec">
                <i class="fa fa-twitter"></i>
                <span class="text">Twitter</span>
            </a>
            <a href="https://github.com/DavidVotrubec">
                <i class="fa fa-github"></i>
                <span class="text">Github</span>
            </a>
            <a href="https://cz.linkedin.com/in/david-votrubec-75b13215">
                <i class="fa fa-linkedin"></i>
                <span class="text">LinkedIn</span>
            </a>
        <div>
            
        <div class="clearfix"></div>
    </nav>
    
    <div id="main">
        
        <div class="content">
        
        <div class="greetings-wrapper">
            <div id="greetings" class="inline-block"></div>
            
            <div id="short-bio" class="visuallyhidden">
                I develop apps in AngularJs, C#, Typescript. I also blog about programming in my rare free time.
                <br/>
                <br/>
                I try to work smart rather than hard. I love learning new stuff and my curiosity is never ending.
                <br/>
                <br/>
                
                Want to know more?
                
                <div class="buttons inline-block">
                    <a class="btn orange first" href="http://blog.davidjs.com">Read my blog</a>
                    <a class="btn green" href="#contact" onclick="goToContact();">Get in touch</a>
                </div>
            </div>
        </div>
        
        <div class="skills-wrapper visuallyhidden">
            
            <a name="skills"></a>
            <div class="header hide-on-small-screen">My skills and areas of expertise</div>
            
            <div id="skillset" class="skills inline-block visuallyhidden">
                <div class="skillset">
                    
                    <div class="header show-on-small-screen">My skills and areas of expertise</div>                                
                                
                    <div class="item">
                        <h3 class="level-title">AngularJs (v1)<span class="level-label" data-toggle="tooltip" data-placement="left" data-animation="true" title="" data-original-title="More than 2 years">Expert</span></h3>
                        <div class="level-bar">
                            <div class="level-bar-inner" data-level="96%">
                            </div>                                      
                        </div><!--//level-bar-->                                 
                    </div><!--//item-->
                    
                    <div class="item">
                        <h3 class="level-title">Typescript &amp; Javascript<span class="level-label" data-original-title="" title="">Expert</span></h3>
                        <div class="level-bar">
                            <div class="level-bar-inner" data-level="93%">
                            </div>                                      
                        </div><!--//level-bar-->                                 
                    </div><!--//item-->
                                                    
                    <div class="item">
                        <h3 class="level-title">C#<span class="level-label" data-original-title="" title="">Pro</span></h3>
                        <div class="level-bar">
                            <div class="level-bar-inner" data-level="90%">
                            </div>                                      
                        </div><!--//level-bar-->                                 
                    </div><!--//item-->
                                                    
                    <div class="item">
                        <h3 class="level-title">HTML5, CSS3, SASS &amp; LESS<span class="level-label" data-original-title="" title="">Pro</span></h3>
                        <div class="level-bar">
                            <div class="level-bar-inner" data-level="75%">
                            </div>                                      
                        </div><!--//level-bar-->                                 
                    </div><!--//item-->
                    
                    <div class="item">
                        <h3 class="level-title">NodeJs, Gulp, etc<span class="level-label" data-original-title="" title="">Beginner</span></h3>
                        <div class="level-bar">
                            <div class="level-bar-inner" data-level="20%">
                            </div>                                      
                        </div><!--//level-bar-->                                 
                    </div><!--//item-->
                    
                    <p><a class="more-link" href="https://www.linkedin.com/in/david-votrubec-75b13215"><i class="fa fa-external-link"></i> More on LinkedIn</a></p> 
                </div> <!-- //skillset -->
                
                
                </div> <!-- //skillset wrapper -->
            </div>  <!-- //content -->
            
            <div class="clearfix"></div>
            <div class="work visuallyhidden" id="work">
                <a name="work"></a>
                
                <div class="header">My work & recommendations</div>
                
                <div class="work-container">
                    <div class="general-description">
                        From 2011 till the end of 2015 I've work for ST-Software (part of <a class="link" href="http://www.swisstiming.com/">Swiss Timing</a>)
                        <br/>
                        I participated on several long-term projects in teams of about 2-5 people.
                        <br/>
                        Before that I've worked for 2 years for <a class="link" href="http://www.t-systems.cz/">T-Systems</a>, part of <a class="link" href="https://www.t-mobile.cz/osobni">T-Mobile</a>.
                    </div>
                    
                    
                    
                    <!-- ST Software -->
                    <div class="work-item">
                        <div class="item-header"><a href="http://www.swisstiming.com">ST Software</a></div>
                                                
                        <div class="testimonials">
                             <a href="https://www.linkedin.com/in/pavel-vasek-57551624" title="Pavel Vasek, my team lead from ST-Software"><img src="assets/pavel-vasek.jpg" /></a>
                             <blockquote>
                                 <i class="fa fa-quote-left"></i>
                                I worked (as project lead) with David on couple of projects during 2010-2014. David is experienced full stack developer. He gain and proved his experience from SQL through .NET backends (C#) to web/SPA clients. 

David is great team player. He always tries to stay in touch with the latest technologies and development techniques. He seems especially interested with front end technologies.
<i class="fa fa-quote-right"></i>
</blockquote>
                        </div>
                        
                        <div class="clearfix"></div>                  
                    </div> <!-- //ST Software -->
                    
                    
                    <div class="work-item">
                        <div class="item-header"><a href="http://data.fina.org">Fina Db</a></div>
                        
                        <div class="description">
                            System for complete management of swimming competitions build for Fina. Main features were: Registration of participants, handling their accommodation, visa, displaying results of athletes etc.
                        </div>
                        
                        <a href="http://data.fina.org">
                            <img class="image pull-left" src="assets/fina_login.jpg" />
                        </a>
                        
                        <div class="testimonials half pull-left">
                             <a href="https://www.linkedin.com/in/will-bastin-2a924a23" title="Will Bastin from FINA"><img src="assets/will-bastin.jpg" /></a>
                             <blockquote>
                                 <i class="fa fa-quote-left"></i>
                                David has been involved as a key developer in the creation of the registration and global database for FINA since the project began in 2014. 
<br/>
David has proven skills in understanding clients requirements and fulfilling our requests to the highest standards. The complexity of our requests have been dealt with very professionally and has allowed our concepts to be realised better than we imagined. 
<br/>
<br/>
David's competency as a developer has been demonstrated in his ability to complete tasks within our framework and to deadlines, finishing tasks quickly but with ultimate care and attention to detail. The products that we have received have always been very stable and if there was ever an issue, David's knowledge of what he has built enables him to quickly resolve any problems. 
<br/>
<br/>
David also has a very good communication style with us as a client which makes working with him a pleasure and enables us to drive our project forward much more effectively. 
<br/>
I would have no hesitation in recommending David
<i class="fa fa-quote-right"></i></blockquote>
                        </div>
                        
                        <div class="clearfix"></div>                  
                    </div> <!-- //FinaDb -->
                                       
                    
                </div>
            </div>
            
            
            <div class="clearfix"></div>
            <div class="books visuallyhidden" id="books">
                <a name="books"></a>
                
                <div class="header">What I read</div>
                <div class="description">
                    I read quite a lot, mostly about technology in general, programming, science, space and sometimes about human mind and behaviour. 
                    Books I've read considerably formed my way of reasoning about the world. You can take this list as an inspiration. I will be glad for your recommendations. 
                </div>
                <ul>
                    <li>
                        <a class="link" href="http://eloquentjavascript.net/">Marijn Haverbeke: Eloquent Javascript</a>
                        <article>
                            Go on and read it :) It is for free.     
                        </article>
                    </li>
                    
                    <li>
                        <a class="link" href="http://www.goodreads.com/book/show/13562148-your-deceptive-mind">Steven Novella: Your deceptive mind</a>
                        <article>
                            Great book about inner workings of human mind. Our own mind plays tricks on us most of the time, but we are not aware of it. 
                            This book shows how to spot those weak spots and possibly overcome them with rationalization.     
                        </article>
                    </li>
                    
                    <li>
                        <a class="link" href="https://www.kosmas.cz/knihy/184389/evoluce-svym-vlastnim-tvurcem/">Miroslav Veverka: Evoluce svým vlastním strůjcem</a>
                        <article>
                            <b>Sorry, this one is in Czech :)</b> If you are curious about how the world functions in the biological, genetical and evolutional sense, then this is a book for you.      
                        </article>
                    </li>
                                        
                    <li>
                        <a class="link" href="http://www.amazon.com/How-Stop-Sucking-Awesome-Instead-ebook/dp/B00BU3KPQU">Jeff Atwood: How to stop sucking and be awesome instead</a>
                        <article>
                            Collection of best articles from Jeff's blog <a href="http://blog.codinghorror.com/">Coding Horror</a>      
                        </article>
                    </li>
                    
                    <li>
                        <a class="link" href="http://www.goodreads.com/book/show/6665847-daemon">Daniel Suarez: Daemon</a>
                        <article>
                            A high-tech thriller for the wireless age that explores the unthinkable consequences of a computer program running without human control—a daemon—designed to dismantle society and bring about a new world order.
                            <br/>
                            Its sequence <a class="link" href="http://www.goodreads.com/book/show/8488830-freedom">Freedom TM</a> is even better.
                        </article>
                    </li>
                    
                    <li>
                        <a class="link" href="http://waitbutwhy.com">Blog: Wait but why</a>
                        <article>
                            Collection of articles explaining interesting stuff, sometimes hypothetical or futuristic, sometimes real or historical. 
                            <br/>
                            My favourite articles are <a class="link" href="http://waitbutwhy.com/2015/08/how-and-why-spacex-will-colonize-mars.html">How SpaceX is going to colonize Mars</a>
                            and <a class="link" href="http://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html">Artificial Intelligence, part I</a> 
                            and <a class="link" href="http://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html">part II</a>.
                        </article>
                    </li>
                    
                    <li>
                        And then of course <a class="link" href="https://twitter.com/DavidVotrubec">Twitter</a> and <a class="link" href="https://plus.google.com/+DavidVotrubec/posts">Google Plus</a> :)
                    </li>
                </ul>
            </div>
            
                
            <div class="clearfix"></div>
            <div class="contact visuallyhidden" id="contact">
                <a name="contact"></a>
                
                <div class="header">Let's talk</div>
                <form name="contactForm">
                    <div class="message success-message hidden">Thank you for your message</div>
                    <div class="message error-message hidden">Message was not delivered</div>
                    
                    <div class="form-group">
                        <label>Name
                            <input class="form-control" type="text" name="name"/>
                        </label>
                        
                        <label>Email
                            <input class="form-control" type="email" name="email"/>
                        </label>
                    </div>
                    
                    <div class="form-group">
                        <label>Message
                            <textarea class="form-control" id="message" name="message" placeholder="Hi, what can I do for you?"></textarea>
                        </label>
                    </div>
                    
                    <div class="form-group">
                        <button type="button" class="btn orange smaller" style="margin-left: 0px;" onclick="sendMessage();">Send message</button>
                    </div>
                </form>
            </div>
                
            <div class="footer visuallyhidden" id="footer">
                Made with <i class="fa fa-heart love" title="love"></i> by David Votrubec. 
                See the code on <a href="https://github.com/DavidVotrubec/davidjs">
                    <i class="fa fa-github"></i>&nbsp;Github</a>
            </div>
        </div>
    </div>
            
    <script type="text/javascript" src="public/js/concat.js" defer></script>
    
    <script type="text/javascript">
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-73650545-1', 'auto');
      ga('send', 'pageview');

    </script>
</body>

</html>