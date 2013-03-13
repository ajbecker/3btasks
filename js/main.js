/*global _, Handlebars.templates*/

(function () {
	var sampleData = {
			taskLists: [
				{
					"id": "MDQ5OTUxODEyMjkyNTg4MDc0Mzg6MDow",
					"title": "ajbecker's list",
					"updated": "2013-03-07T03:37:44.000Z",
					"items": [{
						"id": "MDQ5OTUxODEyMjkyNTg4MDc0Mzg6MDoyMTAwODc0MzE2",
						"title": "Contact USAA to resume applications",
						"updated": "2013-02-22T19:31:28.000Z",
						"position": "00000000000000001907",
						"status": "needsAction"
					}, {
						"id": "MDQ5OTUxODEyMjkyNTg4MDc0Mzg6MDoxNzk0NTMyODEx",
						"title": "Request Sierra ssn",
						"updated": "2013-02-04T18:25:21.000Z",
						"position": "00000000000833974220",
						"status": "needsAction"
					}, {
						"id": "MDQ5OTUxODEyMjkyNTg4MDc0Mzg6MDoxOTY2ODg4MjI4",
						"title": "Pay Nelson dentist Bill",
						"updated": "2013-02-04T22:35:32.000Z",
						"position": "00000000000854823575",
						"status": "needsAction"
					}, {
						"id": "MDQ5OTUxODEyMjkyNTg4MDc0Mzg6MDoxMjczMzIwMDM0",
						"title": "Call American express to reverse charge",
						"updated": "2013-02-04T18:25:30.000Z",
						"position": "00000000000875672931",
						"status": "needsAction"
					}, {
						"id": "MDQ5OTUxODEyMjkyNTg4MDc0Mzg6MDoxMjMzNjA3MDk1",
						"title": "",
						"updated": "2013-02-22T19:31:25.000Z",
						"position": "00000000000878279100",
						"status": "needsAction"
					}
				]
				}, {
					"id": "MDQ5OTUxODEyMjkyNTg4MDc0Mzg6NDow",
					"title": "Future Tasks",
					"updated": "2013-02-04T20:22:38.000Z",
					"items": [{
						"id": "MDQ5OTUxODEyMjkyNTg4MDc0Mzg6NDozNzM0Mjk4MTY",
						"title": "2012 taxes",
						"updated": "2013-02-04T20:22:38.000Z",
						"position": "00000000000000001023",
						"status": "needsAction"
					}, {
						"id": "MDQ5OTUxODEyMjkyNTg4MDc0Mzg6NDoyMDA3NzM2NTgx",
						"title": "Hang up bicycles",
						"updated": "2013-02-04T20:21:50.000Z",
						"position": "00000000000000002047",
						"status": "needsAction"
					}]
				}, {
					"id": "MDQ5OTUxODEyMjkyNTg4MDc0Mzg6MjMxMDA0Mzc3OjA",
					"title": "Shopping",
					"updated": "2013-03-07T01:47:59.000Z",
					"items": [{
						"id": "MDQ5OTUxODEyMjkyNTg4MDc0Mzg6MjMxMDA0Mzc3OjEzODQ1MzgwNzg",
						"title": "",
						"updated": "2013-03-07T01:47:59.000Z",
						"position": "00000000000033554431",
						"status": "needsAction"
					}]
				}, {
					"id": "MDQ5OTUxODEyMjkyNTg4MDc0Mzg6OTA1OTU1MTM3OjA",
					"title": "Work",
					"updated": "2013-03-07T03:37:44.000Z",
					"items": [{
						"id": "MDQ5OTUxODEyMjkyNTg4MDc0Mzg6OTA1OTU1MTM3OjE3ODQ0MTIzODI",
						"title": "Fix bleed through issue with CVTY",
						"updated": "2013-03-06T22:05:09.000Z",
						"position": "00000000003221225471",
						"notes": " Submitted bug report\nSource code at http://pastebin.com/460Km1Tk",
						"status": "needsAction"
					}, {
						"id": "MDQ5OTUxODEyMjkyNTg4MDc0Mzg6OTA1OTU1MTM3Ojk2NTIxOTA2MA",
						"title": "Confirm with ACL that the changes have been made to site.config",
						"updated": "2013-02-27T17:22:14.000Z",
						"parent": "MDQ5OTUxODEyMjkyNTg4MDc0Mzg6OTA1OTU1MTM3OjE3ODQ0MTIzODI",
						"position": "00000000000100663295",
						"status": "needsAction"
					}, {
						"id": "MDQ5OTUxODEyMjkyNTg4MDc0Mzg6OTA1OTU1MTM3OjExNTM4MzE0OTY",
						"title": "Integrate bug fix in to source",
						"updated": "2013-02-27T16:42:12.000Z",
						"parent": "MDQ5OTUxODEyMjkyNTg4MDc0Mzg6OTA1OTU1MTM3OjE3ODQ0MTIzODI",
						"position": "00000000000234881023",
						"status": "needsAction"
					}, {
						"id": "MDQ5OTUxODEyMjkyNTg4MDc0Mzg6OTA1OTU1MTM3Ojc1Njc1MTY3MQ",
						"title": "Deliver bug fix to client",
						"updated": "2013-02-27T16:42:11.000Z",
						"parent": "MDQ5OTUxODEyMjkyNTg4MDc0Mzg6OTA1OTU1MTM3OjE3ODQ0MTIzODI",
						"position": "00000000000268435455",
						"status": "needsAction"
					}, {
						"id": "MDQ5OTUxODEyMjkyNTg4MDc0Mzg6OTA1OTU1MTM3OjExNTIwNjE1NDI",
						"title": "Deal with DVT 538492 - webex with Select Health",
						"updated": "2013-02-27T18:42:15.000Z",
						"position": "00000000003758096383",
						"notes": "Search.js - end of file - need to check the Sys.Application._initialized flag\n\nWaiting on response from client\n\nreceived message from client - will get together this afternoon.",
						"status": "needsAction",
						"due": "2013-02-27T00:00:00.000Z"
					}, {
						"id": "MDQ5OTUxODEyMjkyNTg4MDc0Mzg6OTA1OTU1MTM3OjIwMDkwMDU0MzE",
						"title": "Outlook integration",
						"updated": "2013-03-04T16:21:23.000Z",
						"position": "00000000003825205247",
						"status": "needsAction"
					}, {
						"id": "MDQ5OTUxODEyMjkyNTg4MDc0Mzg6OTA1OTU1MTM3OjE2MDY1OTIwNTE",
						"title": "",
						"updated": "2013-03-07T03:37:44.000Z",
						"position": "00000000003833593855",
						"status": "needsAction"
					}]
				}
			]
		},
		populateTaskLists = function () {
			var data = {
				listClass: "taskList",
				items: _(sampleData.taskLists).map(function (item) {
					return {
						itemClass: "taskList",
						item: item.title
					};
				})
			};
			$("#taskLists").append(Handlebars.templates.simplelist(data));
		};

	$(function () {

		populateTaskLists();
	});
}());