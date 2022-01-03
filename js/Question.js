class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder", "Enter your name");
    this.input2 = createInput("").attribute("placeholder", "Your Hogwarts House");
    this.button = createButton('Submit');
    this.button2 = createButton('next');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2");
    this.question2 = createElement("h3");
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.button2.hide();
    this.input2.hide();
    this.message.hide();
    
  }

  display(){
    this.title.html("Harry Potter Fanpage");
    this.title.position(610, 10);
    this.title.class("titleText");
    
//debug the syntax below to display the question
     this.question.html("Please enter your name below" );
     this.question2.html("What is your Hogwarts house? " );
     
    
     this.question.position(620, 150);
     this.question2.position(620,230);
    /*this.option1.html("1: Gryffindor " );
    this.option1.position(620, 100);
    this.option2.html("2: Slytherin" );
    this.option2.position(620, 120);
    this.option3.html("3: Hufflepuff " );
    this.option3.position(620, 140);
    this.option4.html("4: Ravenclaw" );
    this.option4.position(620, 160);*/

    this.input1.position(670, 200);
    this.input2.position(670, 280);
    this.button.position(730, 350);
    this.button2.position(700,500);
    this.button2.hide();
    this.button.mousePressed(()=>{
      
   
//correct the syntac below to display the thank you message and position 
      this.message.html(`Hey! ${this.input1.value()}`);
      this.message.position(650,400);
      
      
      

    });

   

  }

}
