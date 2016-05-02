'use strict';

angular.module('weddingApp')
  .controller('FaqCtrl', function ($scope) {
    $scope.questions = [{
        title: 'How do two people who have so many important individuals find a way to celebrate the best thing that has ever happened to them?',
        content: 'One Wedding + Three Parties. Bingo Bango.'
    },{
        title: 'So…my “Save-the-Date” is pretty generic and directed me to this website. Exactly which event am I invited to?',
        content: 'Choose your own adventure! Think of it like an a la carte menu: you choose any and all events you’d like to attend. We know that everyone has family, work, school, and travel constraints so we want this to be as fun and easy as possible. Want to come to all four events? Great! Only want to come to Los Angeles and New Orleans? Yay! Can only make it to Chicago? Super! RSVP for the event(s) you plan on attending, make your arrangements, and we’ll see you there. We’ll help you as much as we can along the way; you’ll find ways to find lodging, flights, and descriptions of the shenanigans so you can best plan your journey(s).'        
    },{
        title: 'Where and When is the actual wedding?',
        content: '-Secrets Resort at 7:00pm on Saturday, May 7th. This is not the kind of resort where “fashionably late” is a thing that is allowed. Get there early; I’m certain there is a bar for that. <p> -Yes, we know that this is not the original resort we said we would have the wedding at. Remember that part where we signed a contract with the worst wedding planner ever? She did a switcheroo on the locations. Don’t worry; it gets better…'        
    },{
        title: 'What is the wedding day itinerary?',
        content: '-7:00pm ceremony on the beach. Remember, it starts at 7:00pm; it’s not “once everyone shows up eventually we can begin at ~7:40.” They have made that very clear.<p>-7:30pm: Cocktails and reception begins. Full meal. Yes, we also promised that you wouldn’t have to do this. See previous notes on Amerjit. We will make this fun. We promise.<p>-9:30pm: Reception over. Those who are interested can join Kyle and Meagan at a bar in town in PV.'
    },{
        title: 'When will Kyle and Meagan get there?',
        content: 'We will be arriving in PV Thursday afternoon and leaving Tuesday morning. We will be staying at a villa near Amber Now and Secrets Resorts with the immediate family. As of right now, we expect Thursday to be extremely busy at the villa with taking care of the arrival of each of the family members as their transportation arrives from the airport. Saturday will be taken up with preceding family activities. Kyle and Meagan will be staying at Amber Now Saturday night after the wedding and returning to the villa Sunday morning. The rest of the time has not been planned out yet; however, the absolute ideal of wedding weekend is peacefully drinking on a beach and/or poolside. Beaches and poolsides are yet to be determined. Relaxation is key.'
    },{
        title: 'How do i get where I need to go?',
        content: '-If you booked through Amerjit, the travel agent/wedding planner, you should work directly with her to set up your airport transportation. If she fails to answer an email, here is her phone number 901-383-6798. If she continues to fail at that, get in touch with the resort directly.<p>-If you are staying at the villa with Meagan and Kyle, you will get a taxi to and from the airport. You should just chillax.<p>-If you made your own accommodations (AirBNB, time share, a different resort), we trust that you are also savvy enough to either work with your lodging for airport rides, take a taxi, or use Google to find some ingenious way to transport you.'
    },{
        title: 'What is the plan for wedding photography?',
        content: 'While we will have a resort-provided photographer for the wedding, we would so very love to have everyone send us photos and videos. The candid moments are always so much more special than posing.'
    },{
        title: 'How do I get Mexico money (Pesos)?',
        content: 'A. Go to a bank before you leave.  They will exchange the money for you directly.<p>B. Use an ATM in Mexico.<p>C. Use a credit card.  <p>D. Ask the concierge at the hotel you are staying at.<p>E. There are currency exchange locations at the airport.'
    },{
        title: 'What is the exchange rate for Pesos to USD?',
        content: 'Exchange rates change every day.  They are currently ~17:1 - This means you get 17 pesos for each dollar.  $100 is ~1700 pesos.'
    }];
  });
