
<html>
<head>
  <title>API</title>
</head>
<body>

<?php
ini_set('display_errors', 1);
require_once('TwitterAPIExchange.php');
/**http://developer.twitter.com **/
/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
/** where we put all of our settings **/
$settings = array(
    'oauth_access_token' => "354614965-H5vbfGHhR9H53fcVKh0GxXJNLsOf0t8hBv9A3HXK",
    'oauth_access_token_secret' => "zxmv9D4wB6eCB4S9eQPayqrDfysYsB1zoyV5Cr77kHCoc",
    'consumer_key' => "GEjNK7eosIAKEpKKwzfyajmM5",
    'consumer_secret' => "7vMEjZKxz7i3s0zlLhfKTKSzUfsjPSFpp3M5ubeI4ntn0pRpkk"
);
/** Perform a GET request and echo the response **/
/** Note: Set the GET field BEFORE calling buildOauth(); **/
$url = 'https://api.twitter.com/1.1/search/tweets.json';
/**$url = 'https://api.twitter.com/1.1/blocks/create.json'; replace above resource URL from https://dev.twitter.com/rest/reference/get/search/tweets **/
$getfield = '?q=unc';
/**$getfield = '?screen_name=J7mbo'; replace with above paramater**/
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);
/** echo $twitter->setGetfield($getfield)
              ->buildOauth($url, $requestMethod)
              ->performRequest(); **/
$tweetData = json_decode($twitter->setGetfield($getfield) //This whole section is added from the above code and manipulated
             ->buildOauth($url, $requestMethod)
             ->performRequest(), $assoc = True);
/**echo $tweetData; **/
foreach($tweetData['statuses'] as $items)
  {
  echo "<div class= 'twitter-tweet'>Tweet: " . $items['text'] . " </div>";
    echo "Tweeted by: ". $items['user']['name']."<br />";
    echo "Screen name: ". $items['user']['screen_name']."<br />";
    echo "When: " . $items['created_at'] . "</br>";
    echo "Where: " . $items['location'] . "</br>";
}
?>
</body>
</html>
