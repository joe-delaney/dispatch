# Dispatch

Check out the live app here: [Dispatch](https://dispatch-client.herokuapp.com/#/)

## Introduction
Dispatch is a full stack clone of the popular business messaging application, Slack. Slack is a workplace communication tool that allows users to collaborate and connect with one another through a variety of ways. Slack allows for the creation of channels which are used to organize users who are related to or interested in a certain topic (i.e. budget planning). Users are able to join / leave channels, edit channel information, and send messages to all other channel members. In addition, users can directly message another user or create a private direct message group with up to 8 members in total to facilitate communication on a smaller and more direct scale than channels. As someone who uses Slack on a day-to-day basis and admired the ease of use and sleek dessign of the app, I was very interested in developing a version of it myself. 

### Technologies Used
   * **Languages**: Javascript, Ruby, HTML5, CSS3
   * **Front-end**: React-Redux
   * **Back-end**: Rails (including Websockets via Rails Action Cable)
   * **Database**: PostgreSQL
   * **Hosting**: Heroku

## Splash Page

### When logged out 
Users will be redirected to this page whenever they are not currently logged in. This page has general information, images, and gifs related to dispatch. The user will be able to sign in or sign up from this page. 

### When logged in 
Users will land here upon a successful sign in or sign up. They will have a custom welcome component which lists their email, display name, and title if they have one. From this page, the user will be able to launch the main dashboard or sign out from dispatch. 

## Channels

### Channel Browser
Users can search, join, and leave from all available channels within the app. Unsubscribed users will not be able to see the messages within a channel until they have successfully joined it.

### Channels Sidebar
All channels that the current user is subscribed to will appear in this component. The user can choose to hide and show the list. If a channel is currently selected, it will have different styling and will still show in the sidebar when the channels list is hidden. A user can browse channels via the “browse channels” list item and can create channels via the “plus” button in the sidebar list header. 

### Create Channel
Users will be able to create new channels via the create channel modal component. Users are required to enter a channel name but may or may not fill in the channel topic and/or channel description. 

### Channel Details 
Users can view channel specific details such as an about section which has channel information like name, topic, and description as well as a members section which shows all users subscribed to this channel. The user will also be able to edit the channel details from this component and will be able to leave / join in the channel. 

## Direct Messages (including Group DMs)

### New Messages
Users can search for and select up to 8 members to start a new direct message or group message. A user can search for users by their first or last name and can select/deselect users as needed. If a DM with the selected users already exists, the user will be redirected to that group’s show page. If a DM with the selected users does not yet exist, a new one will be created, each user will be subscribed to it, and the current user will be redirected to the new group’s show page. 

### All DMs
Users can see a list of all direct or group messages they are a subscribed to and each list item will include the last sent message in that group. Users can select a DM and navigate to that DM’s show page. In addition, users can search for other users, select them, and be redirected to the new message page for the selected user(s).

### Group Message Sidebar
All direct or group messages that the current user is subscribed to will appear in this component. The user can choose to hide and show the list. The user can also choose to remove a specific group or direct message from the list. If a group message is currently selected, it will have different styling and will still show in the sidebar when the direct messages list is hidden. A user can view all message groups via the “add teammates” list item or the “plus” button in the sidebar list header.

## Messages 

### Live Chat 
Dispatch uses Websockets vis Action Cable to facilitate live chat between users. When a user sends a message in a channel, group, or direct message, the message will immediately be broadcasted to all other subscribed members without the need for refreshing the page. Both new messages and edits to existing messages will be shared in real time with all subscribers. 

### New Messages / Edit Messages
Users will be able to share new messages into any channel or direct message they are subscribed to. Messages will appear in chronological order (time and date listed with message) with the newest messages appearing at the bottom of the feed. Message authors will be able to edit their sent messages directly in the message feed. Edited messages will be marked as “edited” to let other users know that the original message has been modified. 

## Users

### User Profile
The user can choose to view their own profile or the profile of another user on the right side of the dashboard. If the user has currently selected their own profile, they will be given the option to edit their profile information. If the user has currently selected the profile of another user, they will be able to start a message with that user. 

### Edit User Profile
The current user will be able to edit their user information from their user profile. When selected, an edit user modal component will become visible and give the user the ability to update their profile details. The user will not be able to enter a blank display name but can choose whether or not to have a title and/or status. 

## Search
Users are always able to search for both channels and other users from the main nav search bar. There are other areas where the user may search for channels and/or users depending on which page the user is currently on. As a user types in the search bar, the app will automatically filter and receive search results from the backend based on the current query. Channels look for any query matches within the channel name while users look for matches in first name or last name starting with the query. Users can enter a # to indicate they are searching for a channel or an @ to indicate they are searching for a user. 

    
