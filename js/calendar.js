
		var clientId = '126797305180-d6nffs0cispknciobbnq8b78evegptr5.apps.googleusercontent.com';
		
		var apiKey = 'AIzaSyDAQEiS05fK5zKy1-AdxZCOKMrYqpBjAQk';
		var scopes = 'https://www.googleapis.com/auth/calendar';
		
		var resource = {
		  "summary": "Appointment",
		  "location": "Somewhere",
		  "start": {
			"dateTime": "2014-04-16T10:00:00.000-07:00"
		  },
		  "end": {
			"dateTime": "2014-04-16T10:25:00.000-07:00"
		  }
		};
			
		function handleClientLoad() {
		  gapi.client.setApiKey(apiKey);
		  window.setTimeout(checkAuth,1);
		  checkAuth();
		}

		function checkAuth() {
		  gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true},
			  handleAuthResult);
		}

		function handleAuthResult(authResult) {
		  var authorizeButton = document.getElementById('authorize-button');
		  if (authResult) {
			authorizeButton.style.visibility = 'hidden';
			makeApiCall();
		  } else {
			authorizeButton.style.visibility = '';
			authorizeButton.onclick = handleAuthClick;
		   }
		}

		function handleAuthClick(event) {
			
		  gapi.auth.authorize(
			  {client_id: clientId, scope: scopes, immediate: false},
			  handleAuthResult);
		  return false;
		}
		
		function makeApiCall() {
		  gapi.client.load('calendar', 'v3', function() {
			
			var request = gapi.client.calendar.events.insert({
			  'calendarId': 'primary',
			  'resource': resource
			});
		
				  
			request.execute(function(resp) {
				var li = document.createElement('li');
				li.appendChild(document.createTextNode(resp));
				document.getElementById('events').appendChild(li);
			  
			});
		  });
		}
