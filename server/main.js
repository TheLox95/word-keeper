import { Meteor } from 'meteor/meteor';
import {WordDAO} from './WordDAO';


wordList = new Mongo.Collection('words');


Meteor.methods({
  addWord: WordDAO.addWord,
  editWord: WordDAO.editWord,
  deleteWord: WordDAO.deleteWord
});

Meteor.publish('words', function () {
  var currentUserId = this.userId;
  return wordList.find({ createdBy: Meteor.userId() });
});

Meteor.startup(() => {
  // code to run on server at startup
});
