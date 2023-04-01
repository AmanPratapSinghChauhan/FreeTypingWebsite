 var atr=[];
atr[1] = "Rory had always been an animal lover. But he grew up with two very mean parents. His mother said she had allergies, but every time he asked her what the allergies were, they changed. If he wanted a cat, she was allergic to cats. If he wanted a fish, she was allergic to fishes. If he wanted to go to the zoo, she was allergic to crowds. Rorys dad didnt have any allergies, but he hated animals. However, he loved eating meat, so when Rory said he wanted a cat, his dad said, Mmm cat! I have not eaten cat before. We can get it nice and fat and then eat it. Then Rory cried and stopped asking for a pet. When Rory finished university, he moved to a small town, so he could have lots of space. The town had lots of dog parks, and it also had a cat park. Cat parks were not normal, so he was very excited to go there.";
atr[2] ="You step inside the building, except it is not really a building, is it? It is the ghost of a building that never was. You remember what you learned at school: there is a place called limbo, a space between Heaven and Hell. Babies who die before they can be baptised go there, as it could not be judged whether they should enter Heaven or Hell. So mothers whose children die while being born do not even get the relief of knowing that their babies have gone to Heaven. Instead, they wait in limbo until the Final Judgement comes and the world ends. You could carry a child inside you for nine months, not even get to hold it, not even get to know that it went to Heaven.";
atr[3] ="The next morning, the lord of the castle rose early, went to mass and then headed out for the hunt. All the animals ran in fear at the sound of the hunters and their dogs, but the lord and his men did not slow down. They chased the female deer, but let the male deer run free, as there was a law in the land that prohibited killing male deer at this time of year. Meanwhile, Gawain lay comfortable in bed, and woke up in the late hours of the morning. But he did not rise, enjoying the warmth of the fire and the rays of sun shining on his bed, after the long, cold months of travelling. The lady of the castle went quietly into the room, opening and closing the door without a sound. She stood there by the entrance, waiting to see if Gawain would move. Although Gawain was awake, he wished to remain in peace and quiet a little longer, so he pretended to be asleep. The lady could not believe this, and went right up to his bed. With a wicked smile, she sat at the end of the bed, trapping his legs beneath her. ";
atr[4] ="The lady left because of the plate smasher. She had lived with the screamer, the hair puller and the heartbreaker, and now she lived with the plate smasher, and it was too much. It didn’t matter that they were plates her grandmother had given her when she died. It did not matter that her foot was bleeding where she had stood on one of the broken plates. It did not matter that she didn’t know why he was so angry. What mattered was the image before her: a man smashing plates in her kitchen. Her kitchen, her plates. It looked like a scene from a television show. Nobody really got that angry. Nobody went that red in the face. Nobody smashed every single plate in the cupboard, until the floor was a sea of white.";
atr[5] ="In the beginning, there were two brother gods, Kimesh and Musesh. Kimesh had skin as red as fire, and he created the planets with loud passion. Musesh had skin as blue as the ocean, and he created the plants and animals that lived on Earth with calm reflection. For many thousands of years, the brothers relaxed and watched their creation, but soon they began to get bored. The humans fought and loved each other with Kimeshs passion, and they debated and made art with Museshs reflection. They were much like humans are today, but with a few important differences. One, there was no war. They had food and drink, and they loved each other, so they had no need for war. Two, there was no forgiveness. If two people debated and disagreed, then they disagreed, and they did not need to fight about it.";
atr[6]="Below the mountain sat the Lake of Blood. The blood here did not come from the needles, but the boiling hot water, which smelled of old eggs. If someone climbed the Mountain of Needles, but the demons thought they hadn’t suffered enough, then it was decided that they were pure evil. These evil men and women were thrown into the boiling water, and made to swim. They swam until all the blood came out of their body and filled the lake. They say that evil men do not cry when they are hurt, but everyone cried in the end. These were just a few awful parts of Hell, and Buddha could not keep watching, because it was simply too horrible. But just as he was turning away from the pool, he saw a man he recognised and stopped.";
atr[7]="Nature is a wonderful thing. We have water, which we can drink from, as well as swim and bathe in. We have fire, which lets us cook food and keep warm. We have trees, which give us fruit and wood. All the parts of nature work in harmony, allowing us to live on Earth. The Sun thinks differently. She thinks that strength comes from kindness. If you are kind, everyone will like you, and in your time of need there will always be a friend there to help you. She sees how humans fall in love with each other, form families and close groups of friends, and therefore she knows that kindness is what makes you strong.";
atr[8]="Before Queen Beelizabeth III became queen, the throne room was a sad place. Only the Queen and the most important bees in the beehive could come to the throne room, and they only talked when the Queen said they could. There were no bright colours or happy people. But Queen Beelizabeth III changed all that. She was a happy bee, and she wanted a happy throne room. So now, the place was filled with bright yellows, oranges and blues. There were pools of honey that bees swam in, and plenty for everyone to eat. Every day, brilliant bee dancers and bee musicians came to perform for the Queen. Humans never came to the beehive. How could they? They were too big. But this human was as small as a bee, and he carried a big, black gun. All the dancing, singing and swimming stopped, and everyone turned to look at him.";
atr[9]="The elephant in the room is a topic of conversation that everyone is thinking about, but nobody wants to talk about, because it will make some people upset. For example, if you go into work, and everyone knows that you went out on a date with your boss last night, that will probably be the elephant in the room—everyone wants to know what happened, but nobody will mention it because it would make you uncomfortable. We call it the elephant in the room, because elephants are very big animals that are hard to ignore. When you assume something, you do not know if it is true, but you think, Well, it must be true, right? For example, if someone says to you, Im so busy looking after my kids, you might assume that they were married. But maybe they are not married! They might be a single parent, so you can not assume.";
atr[10]="Some schools and universities have foundation programmes. These are courses that you do before another course to prepare you for that course. For example, international students doing masters degrees in the UK often do a foundation programme before to make sure that their English level is good enough. Foundation programmes can also be a good way to see if you really want to study the more serious course that comes after it. An academy is a special type of school, where students specialise in one area. For example, a science academy teaches students a lot of science, as well as normal amounts of other subjects. In the UK, there are many football academies, where students practise lots of football in addition to their normal classes. People who want to become professional footballers often go to football academies. When you take someone somewhere they do not want to go, you might have to drag them, pull them.";
var par=Math.ceil(Math.random()*10);
var l = 0;
var k = 0;
var str=atr[par];
console.log(str.length);
var divcontainer = document.createElement('div' + l);
for (var i = 0; i < str.length; i++) {
  if (str[i] == " ") {
    const para1 = document.createElement('span' + k);
    const node1 = document.createTextNode(str[i]);
    para1.appendChild(node1);
    divcontainer.appendChild(para1);
    const paragraph = document.getElementById('demo');
    paragraph.appendChild(divcontainer);
    l++;
    k = 0;
    divcontainer = document.createElement('div' + l);
  } else {
    const para = document.createElement('span' + k);
    const node = document.createTextNode(str[i]);
    para.appendChild(node);
    divcontainer.appendChild(para);
    k++;
  }
}
document.getElementById('demo').appendChild(divcontainer);
var j = 0;
var z = 0;
var inputword = '';
var speed = 0;
var error=0;
const userinput = []

function matchingAlgorithm(event) {
  var alphabet = event.key;
  console.log(alphabet);

  var word = document.getElementsByTagName('div' + j)[0];
  var word1 = word.textContent;
  if (alphabet == 'Shift') {
    alphabet = "";
  } else if (alphabet == 'Backspace') {
    if (j == 0 && z == 0) {
      z = 1;
    } else if (z == 0) {
      j--;
      word = document.getElementsByTagName('div' + j)[0];
      word1 = word.textContent;
      var userinputlength = userinput[j].length;
      var correctinput = userinput[j];
      if (correctinput == word1) {
        speed = speed - 1;
      }
      inputword = correctinput.slice(0, userinputlength - 1);
      z = userinputlength;

    }

    z--;
    inputword = inputword.slice(0, z);
    word.getElementsByTagName('span' + z)[0].style.color = 'black';
    word.getElementsByTagName('span' + z)[0].style.background = "none";
    word.style.background="none";

  } else if (alphabet == word1[z] && alphabet != " ") {
    console.log(z);
    word.getElementsByTagName('span' + z)[0].style.color = '#38E54D';
    document.getElementById('correctAudio').play();
    word.getElementsByTagName('span' + z)[0].style.background = '#F6F7C1';
    inputword = inputword + alphabet;
    z++;
  } else if (alphabet == " ") {
    inputword = inputword + alphabet;

    if (inputword == word1) {
      word.getElementsByTagName('span'+z)[0].style.background="#F6F7C1";
      speed = speed + 1;

      document.getElementById('correctAudio').play();
    }
    else{
      document.getElementById('wrongAudio').play();
      word.style.background="#FFDEDE";
      error=error+1;
    }
    userinput[j] = inputword;
    j++;
    z = 0;

    inputword = '';

  } else {
    word.getElementsByTagName('span' + z)[0].style.color = "#E21818";
    word.getElementsByTagName('span'+z)[0].style.background="#FFDEDE";
    document.getElementById('wrongAudio').play();
    inputword = inputword + alphabet;
    z++;
  }
}
var itt = 1;

function timeFunctioncheck() {
  if (itt === 1) {
    timeFunction();
    itt = 0;
  }
}
const speedarray=[];

function timeFunction() {
  var time = 59;
  var width = 100;
  setInterval(myTime, 1000)

  function myTime() {
    if (time >= 0 && time <= 60) {
      width = width - 1.66666667;
      document.getElementById("time").innerHTML = time ;

      document.getElementById('timecountdown').style.width = width + "%";
      console.log(time);
      value=Math.ceil((speed/(60-time))*60);
      speedarray.push(value);
      document.getElementById('speed').innerHTML=Math.ceil((speed/(60-time))*60);
      document.getElementById('error').innerHTML=Math.ceil((speed/(speed+error))*100)+'%';

      time = time - 1;



    }
    if (time < 0) {

      const json={
        speed:speed,
        speedArray:speedarray
      }
      fetch("/result", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(json),
          });
      // document.myform.submit();
      // location.href="/result";
      document.getElementById('submit').click();


      time = 62;
      // location.reload();
    }

  }


}
