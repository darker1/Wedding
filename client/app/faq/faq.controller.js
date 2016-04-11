'use strict';

angular.module('weddingApp')
  .controller('FaqCtrl', function ($scope) {
    $scope.questions = [{
        title: "How do two people who have so many important individuals find a way to celebrate the best thing that has ever happened to them?",
        content: "One Wedding + Three Parties. Bingo Bango."
    },{
        title: "So…my “Save-the-Date” is pretty generic and directed me to this website. Exactly which event am I invited to?",
        content: "Choose your own adventure! Think of it like an a’la carte menu: you choose any and all events you’d like to attend. We know that everyone has family, work, school, and travel constraints so we want this to be as fun and easy as possible. Want to come to all four events? Great! Only want to come to Los Angeles and New Orleans? Yay! Can only make it to Chicago? Super! RSVP for the event(s) you plan on attending, make your arrangements, and we’ll see you there. We’ll help you as much as we can along the way; you’ll find ways to find lodging, flights, and descriptions of the shenanigans so you can best plan your journey(s)."        
    },{
        title: "Will I be receiving a paper invitation in the mail? ... in email?",
        content: "As much as we love you, your save the date is the only physical reminder of our wedding that you will recieve.  We have saved exactly 746 trees by building this Website, and the amazon thanks us.  Please continue to check the website and watch your email... if you RSVP'd... you did do that right?!?"        
    }];
  });
