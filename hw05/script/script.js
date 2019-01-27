function Book(title, author, number_of_pages) {
    title = title;
    author = author;
    number_of_pages = number_of_pages;
    
    this.getTitle = function () {
        return title;
    }

    this.setTitle = function (value) {
        title = value;
    }

    this.getAuthor = function () {
        return author;
    }

    this.setAuthor = function (value) {
        author = value;
    }

    this.getNumberOfPages = function () {
        return number_of_pages;
    }

    this.setNumberOfPages = function (value) {
        number_of_pages = value;
    }

    this.toString = function () {
        return "\nTitle: "+ this.getTitle() +
               " \nAuthor: " + this.getAuthor() + 
               " \nNumber of Pages: " + this.getNumberOfPages();
    }
}

function Audiobook(title, author, number_of_pages,  availability_of_CD) {
   
    Book.call(this, title, author, number_of_pages);
    availability_of_CD = availability_of_CD;

    this.getAvailabilityOfCD = function () {
        return availability_of_CD;
    }

    this.setAvailabilityOfCD = function (value) {
        availability_of_CD = value;
    }

    this.toStringAudiobook = function () {
        return this.toString() + " \nAvailability of CD: " + this.getAvailabilityOfCD();
    }
}

function  Textbook(title, author,number_of_pages, field_of_study) {
    Book.call(this, title, author, number_of_pages);
    field_of_study = field_of_study;
    
    this.getFieldOfStudy = function () {
        return field_of_study;
    }

    this.setFieldOfStudy = function (value) {
        field_of_study = value;
    }

    this.toStringTextbook = function () {
        return this.toString() + " \nField of Study: " + this.getFieldOfStudy() ;
    }
}

var audiobook = new Audiobook("Crime and Punishment", "Dostoevsky", 420, false);
audiobook.setAvailabilityOfCD(true);

var textbook = new Textbook("Java 8. Handbook for beginnings", "Shildt", 230, " ");
textbook.setFieldOfStudy("Languages of Programming");

console.log(audiobook.toStringAudiobook());
console.log(textbook.toStringTextbook());