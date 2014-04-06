var app = {
/*
   Application constructor
*/
   initialize: function() {
      this.bindEvents();
      console.log("Starting Accl app");

   },
/*
   bind any events that are required on startup to listeners:
*/
   bindEvents: function() {
      document.addEventListener('deviceready', this.onDeviceReady, false);
   },

/*
   this runs when the device is ready for user interaction:
*/
   onDeviceReady: function() {

   },

/*
   Displays the current position in the message div:
*/
   watchLocation: function() {
         // onSuccess Callback
   },
   /*
      appends @message to the message div:
   */
   display: function(message) {
      var label = document.createTextNode(message),
         lineBreak = document.createElement("br");
      messageDiv.appendChild(lineBreak);         // add a line break
      messageDiv.appendChild(label);             // add the text
   },
   /*
      clears the message div:
   */
   clear: function() {
       messageDiv.innerHTML = "";
   }
};     // end of app