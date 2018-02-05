export class WordDAO {
    static addWord(object) {
        let currentUserId = Meteor.userId();
        if (currentUserId) {
            wordList.insert({
                word: object.foreingWord,
                meaning: object.meaning,
                createdBy: currentUserId
            });
        }

        return true;
    }

    static editWord(objectEdit) {
        let currentUserId = Meteor.userId();

        if (currentUserId) {
            wordList.update({ _id: objectEdit.wordID },
                {
                    word: objectEdit.word,
                    meaning: objectEdit.meaning,
                    createdBy: currentUserId
                });
        }

        return true;
    }

    static deleteWord(object) {
        let currentUserId = Meteor.userId();

        if (currentUserId) {
            wordList.remove({ _id: object.wordID });
        }

        return true;
    }
}