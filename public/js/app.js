'use strict';

class App{
	constructor(){
		this.novel = [
		{
			"name":"World Teacher",
			"photo":"img/List/world.png",
			"description":"Once called as the world's strongst agent who ended up becoming a teacher in his retirement to train a new generation of agents. After many years of training his disciples, he was killed at the old age of 60 by the ploy of some secret organization. Thus, he was reincarnated in another world with his memories intact.",
			"link":"https://bayabuscotranslation.com/"
		},
		{
			"name":"Tsuki ga Michibiku Isekai Douchuu",
			"photo":"img/List/tsuki.png",
			"description":"High school student Misumi Makoto is called into a fantasy world by the god Tsukuyomi, in order to be a hero. However, powerful others in this world aren’t as thrilled to have him there, and kick him to the edge of the world just as Tsukuyomi declares that he must leave Makoto to find his own way. Now it’s up to Makoto to find his own way!",
			"link":"https://isekailunatic.wordpress.com/tsuki-ga-michibiku-isekai-douchuu/"
		},
		{
			"name":"Death March kara Hajimaru Isekai Kyousoukyoku",
			"photo":"img/List/death.png",
			"description":"29-year-old programmer Suzuki Ichirou finds himself transported into a fantasy RPG. Within the game, he's a 15-year-old named Satou. At first he thinks he's dreaming, but his experiences seem very real. Due to his use of a 3-time-use special power (meteor shower), he ends up wiping out an army of lizardmen and becoming very high level. He hides his level and plans to live peacefully and meet new people, though developments in the game story (like the return of a demon king) might get in his way.",
			"link":"http://www.sousetsuka.com/p/blog-page_11.html"
		},
		{
			"name":"Only Sense Online",
			"photo":"img/List/oso.png",
			"description":"Yun is a novice MMO player who equipped only unpopular skills labelled as garbage. However, soon after everyone started to notice the “Strongest” play style which made full use of Support Magic and Items——?!",
			"link":"https://krytykal.org/only-sense/"
		},
		{
			"name":"Kyuuketsu Hime wa Barairo no Yume o Miru",
			"photo":"img/List/kyuuketsu.png",
			"description":"I had expected to die in an accident, but instead I woke up as my vampire princess character from “Eternal Horizon Online”. It turns out that I, along with my assets, territories, and my pets from the game were all transferred to a similar world. When fighting around, I was clearly in a higher position than my followers who are stronger than me. Due to these circumstances, I also had no choice but to reign as the ‘me’ in the game. In addition, demons, beasts, and even the demi-humans of this world turned to follow me as well, and before I realized it I had established a huge empire. Furthermore, mysterious enemies appeared, and caused me trouble to no end…!",
			"link":"https://madospicy.wordpress.com/"
		},
		{
			"name":"Alice Tale in Phantasmagoria",
			"photo":"img/List/alice.png",
			"description":"Arisugawa Akito suddenly finds himself in another world and another body, namely the one of the game character he just created. Female, game character. Alice. When there is no virtual reality technology around. Join him/her as he/she struggles with the world, her body and the puppies after her life as the dream of being the strongest feels suddenly far away…. as does being a man.",
			"link":"http://raisingthedead.ninja/current-projects/alice-tale/"
		},
		{
			"name":"The Guild's Cheat Receptionist",
			"photo":"img/List/guild.png",
			"description":"One day, due to God’s mistake, Tomoaki Akino’s life was accidentally snatched away. Though he gratefully accepted the cheat offered as an apology and reincarnated, he was reborn as a female elf! Then time passed, and Tomoaki now works as the intelligent and beautiful receptionist named Ilya in the Lunéville branch of the Guild Association. In a world of swords and magic, her job in the guild begins today.",
			"link":"https://zirusmusings.com/gcr-toc/"
		},
		{
			"name":"The New Gate",
			"photo":"img/List/gate.png",
			"description":"“THE NEW GATE”, an online game that trapped its players and turned into a death game, was now releasing the thousands of players that had been dragged into it, thanks to the efforts of Shin, one of the most powerful players. But after having defeated the last boss and freed everyone, he was swallowed up by a strange light and found himself inside the game world 500 years in the future and unable to leave.",
			"link":"https://shintranslations.com/the-new-gate-toc/"
		},
		{
			"name":"Ikai Shinki to no Reunion",
			"photo":"img/List/reunion.png",
			"description":"A young man named Kurosu Tooi was summoned to another world. He commanded 12 beautiful goddesses to defeat the demon king in order to return to his world. After a year, he returned back to the other world, but ten years had already passed there. His strongest servants are now his strongest enemies. It's time to save his scattered comrades; in his second coming to the other world, he has to fight, talk and make them fall for him! Let the curtain unfold, for this an Reunion fantasy of obtaining the strongest Goddesses (Heroines)!",
			"link":"http://lndb.info/light_novel/Isekai_Shinki_to_no_Reunion"
		},
		{
			"name":"Magi Craft Meister",
			"photo":"img/List/magi.png",
			"description":"There is only one Magi Craft Meister in the world. After the death of the last Meister over one thousand years ago, Jin Nidoh was transported to another world in order to succeed her will. After obtaining the knowledge of the Magi Craft Meister, Jin attempts to use a warp gate but it malfunctions, transporting him to an unknown world. Along with that, an automata he recently restored also uses the warp gate in order to search for her “father.” Thus, the crafting journey of the new Magi Craft Meister begins!",
			"link":"https://natsutl.wordpress.com/projects/novel-tl/mcm/"
		},
		{
			"name":"Tensai Shitara Slime Datta Ken",
			"photo":"img/List/slime.png",
			"description":"Mikami Satoru is a successful, 37 year old adult who has two problems: he has never had a girlfriend; and, while meeting his colleague on the street, Satoru got fatally stabbed. The result? He has reincarnated as a slime. Will that be his third misfortune or a blessing?",
			"link":"https://circustranslations.com/chapter-list/"
		},
		{
			"name":"Overlord",
			"photo":"img/List/overlord.png",
			"description":"After announcing it will be discontinuing all service, the internet game 'Yggdrasil' shut downs -. .. That was the plan But for some reasons, the player character did not log out some time after the server was closed NPC starts to become sentient A normal youth who loves gaming in the real world seemed to have been transported into an alternate world along with his guild, becoming the strongest mage with the appearance of a skeleton, Momonga. He leads his guild 'Ainz Ooal Gown' towards an unprecedented legendary fantasy adventure!",
			"link":"On Hiatus"
		},
		{
			"name":"Madan no Ou to Vanadis",
			"photo":"img/List/madan.png",
			"description":"In times of war, set in Western Europe, Eleonora Viltaria, one of the seven Vanadis of Zhcted, leads the war into Brune. There are actually seven Vanadis, named like this because they each received a powerful weapon from the dragon, to reign over seven territories, each possessing their own. The power of the Vanadis causes dread and fear toward their enemies. An Earl in the service of the country of Brune, a young archer called Tigre, got a taste of it after he was defeated on the battlefield by Ellen (Eleonora). However, Ellen decided to spare his life after seeing his skills. In exchange, he is asked to serve Ellen....",
			"link":"https://www.baka-tsuki.org/project/?title=Madan_no_Ou_to_Vanadis"
		},
		{
			"name":"Konjiki no Wordmaster",
			"photo":"img/List/konjiki.png",
			"description":"Gluttonous and book-loving loner high school student Okamura Hiiro finds himself flying into a different world, along with his happy-go-lucky classmates! The four classmates are frolicking around after seeing that they all have the title of Hero, but Hiiro's title was...Innocent Bystander?! Hiiro starts his adventure by himself with his word magic, the power to embody the image of a word and aims for new lands!",
			"link":"https://www.baka-tsuki.org/project/index.php?title=Konjiki_no_Wordmaster"
		},
		{
			"name":"Gun Ota",
			"photo":"img/List/gunota.png",
			"description":"Hotta Youta is killed while returning home from work on a cold evening. He wakes up being carried by a bunny-eared woman! Featuring Reincarnation, Guns and Harem, its a Gun vs Magic Story that gives Hotta Youta a new life… and an edge!",
			"link":"https://omegaharem.wordpress.com/gunota-rehost/"
		},
		{
			"name":"Elf Tensei",
			"photo":"img/List/elf.png",
			"description":"A genius magician, to fight against his fate to die a natural death from old age, grasped at the truth of magic to allow himself to reincarnate with a power he created himself. The cycle of reincarnation is repeated multiple times and in his 31st reincarnation, the magician became a boy named Syril who lives in a village of elves. However, that village is ruled by Humans, and the Elves are treated as livestock. After becoming 14 years old, Syril, who regained his past knowledge and experience, stands up to help a girl, who is his childhood friend. The story of the creation of an ideal country begins in that one village, a place where all races can coexist. Elves, Fox-girl, and various other Heroines.",
			"link":"http://raisingthedead.ninja/current-projects/elf-tensei/"
		},
		{
			"name":"Boku wa Tomodachi ga Sakunai",
			"photo":"img/List/haganai.png",
			"description":"Hasegawa Kodaka has transferred schools, and he’s having a hard time making friends. It doesn’t help that his blond hair tends to make people think he’s a delinquent. One day, he runs into his bad-tempered solitary classmate Yozora while she’s talking animatedly to her imaginary friend Tomo. Realizing that neither of them have any actual friends, they decide that the best way to alter this situation is to form a club and start recruiting.",
			"link":"On Hiatus"
		},
		{
			"name":"Bu ni Mi",
			"photo":"img/List/bunimi.png",
			"description":"Slava is an old man. On the verge of death, he has only two regrets; not perfecting his Martial Arts that had been passed down by his Master, and leaving his adopted daughter, as well as disciple, the Elf Alma, alone. His two dying wishes that he makes to her are that she take the hidden scroll of the school and learn its secrets, and that she would love, have a family, and be happy in his stead.",
			"link":"https://bunimithetranslation.wordpress.com/"
		},
		{
			"name":"Asuka of the Scarlet Sky",
			"photo":"img/List/asuka.png",
			"description":"Kashiwagi Yuuto, who was bored with his life, died in an unexpected accident. He was given the ability to create holy treasure tools from God after his death. Yuuto was thrown out to another world and met Asuka, the girl who wants to be a hero.",
			"link":"http://www.machineslicedbread.xyz/asuka/"
		}
		];
	}

	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}

	novelDesign(){
		let id = document.getElementById('kill');
		let name = document.getElementById('kill2');
		let description = document.getElementById('kill3');
		let image = document.getElementById('kill4');

		let novel = {
			"name":name.value,
			"description":description.value,
			"photo":photo.value,
		}

	}
	createNovel(){
		let n = document.getElementById('newName');
		let p = document.getElementById('newPhoto');
		let e = document.getElementById('newDescription');
		let l = document.getElementById('newLink');

		let novel = {"Name":n.value,"Photo":p.value,"Description":e.value,"Link":l.value};
		this.novel.push(novel);

		n.value = p.value = e.value = l.value =''; //clear field daw? dunno what it means
		this.novelListInfo();
	}

	deleteNovel(key){	
		let d = this.novel;
		for(let i=0;i<d.length;i++){
			if(d[i].id == key){
				this.novel.splice(i,1);
				break;
			}	
		}
		this.novelList();
	}
	updateNovel(key){
		let n = document.getElementById('newName');
		let p = document.getElementById('newPhoto');
		let e = document.getElementById('newDescription');
		let l = document.getElementById('newLink');

		let x = this.novel[key];
		let novel = {"Name":n.value,"Photo":p.value,"Description":e.value,"Link":l.value};

		this.novel[key] = novel;
		let details = document.getElementById('novelDetails');
		details.innerHTML = "";

		this.novelListInfo();
		this.showNovelList();

	}
	searchNovel(name){
      let objects = [];
      let d = this.car;
      for(let i=0;i<d.length;i++){
        let expr = (d[i].name.toUpperCase().indexOf(name.toUpperCase()) > -1);
        if(expr){
          objects.push(d[i]);
        }
      }
      return objects;
    }

    novelsearch(key){
	    let txtsearchnovel = document.getElementById("txtsearchnovel");
	    let listnovel = document.getElementById("novelList");
	  
	  

	    let html = ``;
	    for(let i=0;i<this.animes.length;i++){
	      if(this.animes[i].description.toLowerCase().includes(txtsearchanime.value)||
	         this.animes[i].name.toLowerCase().includes(txtsearchanime.value)||
	         this.animes[i].description.toUpperCase().includes(txtsearchanime.value)||
	         this.animes[i].name.toUpperCase().includes(txtsearchanime.value)||
	         this.animes[i].description.includes(txtsearchanime.value)||
	         this.animes[i].name.includes(txtsearchanime.value)){
	        html += `
	          
	          <div class="col s12 m7 l12">
							    
							    <div class="card horizontal">
							      <div class="card-image">
							        <img src="${this.novel[i].photo}">
							      </div>
							      <div class="card-stacked">
							        <div class="card-content">
							          <h5>${this.novel[i].name}</h5>
							          <p>${this.novel[i].description}</p>
							        </div>
							        <div class="card-action">
							          <a href="#!">More Information</a>
							        </div>
							      </div>
							    </div>
							  </div>
			`;
	      }
	    }
	    listnovel.innerHTML = html;
	  }

readList(){
	let textsearchnovel = document.getElementById('textsearchnovel');
	let novelList = document.getElementById('novelList');
	let html = ``;
	for(let index=0;index<this.novel.length;index++){
			html +=`                   

			   <div class="col s12 m7 l12">
							    
							    <div class="card horizontal">
							      <div class="card-image">
							        <img src="${this.novel[index].photo}">
							      </div>
							      <div class="card-stacked">
							        <div class="card-content">
							          <h5>${this.novel[index].name}</h5>
							          <p>${this.novel[index].description}</p>
							        </div>
							        <div class="card-action">
							          <a href="#!">More Information</a>
							        </div>
							      </div>
							    </div>
							  </div>

			`; 
		}
		novelList.innerHTML = html;
		$('#novellist').hide();
}	  

    showLandingPage(){
		$('#landingpage').show();
		$('#createpage').hide();
		$('#readpage').hide();
		$('#updatedeletepage').hide();
	}	

	showMovieList(){
		$('#landingpage').hide();
		$('#createpage').hide();
		$('#readpage').show();
		$('#updatedeletepage').hide();
	}

	showMovieCreate(){
		$('#landingpage').hide();
		$('#createpage').show();		
		$('#readpage').hide();
		$('#updatedeletepage').hide();
	}

	showUpdateDelete(){
		$('#landingpage').hide();
		$('#createpage').hide();		
		$('#readpage').hide();
		$('#updatedeletepage').show();
	}

	novellist(){
		$('#navnovel').show();
		$('#novelslider').hide();
		$('#novelfooter').show();
		$('#novelrecent').hide();
		$('#list').show();
	}

}

class Component extends App{
	constructor(){
		super();
	}

	landingPage(){
		let html = `

		<nav>
			<div id="navnovel" class="nav-wrapper cyan">
				<a href="#" class="brand-logo" onclick="component.showLandingPage">Aphelios</a>
				<ul id="nav-mobile" class="right hide-on-med-and-down">
					<li><a href="#!" onclick="component.novellist()">Novel List</a></li>
					<li><a href="badges.html">Update</a></li>
					<li class="pangit"><a href="collapsible.html">Recommend</a></li>
				</ul>
			</div>
		</nav>


		<div id="homepage">


		<br><br>
	              <div id="novelslider" class="container">
	               <div class="slider">
				    <ul class="slides">
				      <li>
				        <img src="img/Slide/loghorizon.jpg"> <!-- random image -->
				        <div class="caption center-align">
				          <h3>Welcome, you lowly Peon!</h3>
				        </div>
				      </li>
				      <li>
				        <img src="img/Slide/little.jpg"> <!-- random image -->
				        <div class="caption left-align">
				          <h3>Just take a look around~</h3>
				        </div>
				      </li>
				      <li>
				        <img src="img/Slide/ngnl.jpg"> <!-- random image -->
				        <div class="caption right-align">
				          <h3>No dilly-dallying~</h3>
				        </div>
				      </li>
				      <li>
				        <img src="img/Slide/overlord_wall.jpg"> <!-- random image -->
				        <div class="caption center-align">
				          <h3>Keep us informed~</h3>
				        </div>
				      </li>
				    </ul>
				  </div>
				 </div>
	              </div>
	 
	      

			<div id="novelrecent" class="container">
				<div class="row center">
					`;

					let r = this.novel;
					let count = 0;
					for(let i=(r.length-1);i>=0;i--){
					if(count++ === 3)break;
					html+= `
							<div class="col s12 m7 l12">
							    
							    <div class="card horizontal">
							      <div class="card-image">
							        <img src="${this.novel[i].photo}">
							      </div>
							      <div class="card-stacked">
							        <div class="card-content">
							          <h5>${this.novel[i].name}</h5>
							          <p>${this.novel[i].description}</p>
							        </div>
							        <div class="card-action">
							          <a href="#!">More Information</a>
							        </div>
							      </div>
							    </div>
							  </div>
						`;
					}

		html +=`
				</div>
			</div>


		<div id="novellist" class="container">
				<div class="row center">
					`;

					
	for(let index=0;index<this.novel.length;index++){
			html +=`                   

			<div id="cards" class="col-md-3" >
				<img class="card-img-top" src="${this.novel[index].photo}" alt="Card image cap">
				<div class="card-block">
					<h4 class="card-title">${this.novel[index].name}</h4>
					<p class="card-text">${this.novel[index].description}</p>
					<a href="#" class="btn btn-primary" onclick="component.animeDetails(${index})">More Info</a>
				</div>
			</div>

						`;
					}

		html +=`
				</div>
			</div>


		<footer id="novelfooter" class="page-footer cyan">
			<div class="container">
				<div class="row">
					<div class="col l6 s12">
						<h5 class="white-text">The Master of this House</h5>
						<image class="pic" src="img/le_me.png">
						<p class="grey-text text-lighten-4">This website is only a prototype. I will launch a proper and working one after a few adjustments.</p>
					</div>
					<div class="col l4 offset-l2 s12">
						<h5 class="white-text">Follow me on:</h5>
						<ul>
							<li><a class="grey-text text-lighten-3" href="#!">Facebook</a></li>
							<li><a class="grey-text text-lighten-3" href="#!">Royal Road Legends</a></li>
							<li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
							<li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="footer-copyright">
				<div class="container">
					© 2016 - 2017 Copyright Text
					<a class="grey-text text-lighten-4 right" href="#!">More Links</a>
				</div>
			</div>
		</footer>
		`;
		this.reRender(`${html}`,document.getElementById("app"));
		$('#novellist').hide();
	}

}

let component = new Component;
component.landingPage();