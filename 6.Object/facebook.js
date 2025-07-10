/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// TIP - 
// In an array, 
// - addition at the end is done using push() methodf
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

// your code goes here
var facebookProfile = {
    name: "regis",
    friends: 5,
    messages: ['hi','welcome','goo'],
    postMessage: function(messages){
        this.messages.push(messages)
        return this.messages
    },
    deleteMessage:function(index){
        this.messages.splice(index,1)
        return this.messages
    },
    addFriend: function(){
        this.friends +=1
        return this.friends
    },
    removeFriend:function(){
        this.friends-=1
        return this.friends
    }
}
console.log(facebookProfile.postMessage('yeah we chase dem'))
console.log(facebookProfile.deleteMessage(1))
console.log(facebookProfile.addFriend())
console.log(facebookProfile.addFriend())
console.log(facebookProfile.removeFriend())