"use strict";

class App{
	constructor(){
		this.novel = [
		{
			"name":"World Teacher",
			"photo":"img/world.png",
			"description":"Once called as the world's strongst agent who ended up becoming a teacher in his retirement to train a new generation of agents. After many years of training his disciples, he was killed at the old age of 60 by the ploy of some secret organization. Thus, he was reincarnated in another world with his memories intact.",
			"link":"https://bayabuscotranslation.com/",
		},
		{
			"name":"Tsuki ga Michibiku Isekai Douchuu",
			"photo":"img/tsuki.png",
			"description":"High school student Misumi Makoto is called into a fantasy world by the god Tsukuyomi, in order to be a hero. However, powerful others in this world aren’t as thrilled to have him there, and kick him to the edge of the world just as Tsukuyomi declares that he must leave Makoto to find his own way. Now it’s up to Makoto to find his own way!",
			"link":"https://isekailunatic.wordpress.com/tsuki-ga-michibiku-isekai-douchuu/",
		},
		{
			"name":"Death March kara Hajimaru Isekai Kyousoukyoku",
			"photo":"img/death.png",
			"description":"29-year-old programmer Suzuki Ichirou finds himself transported into a fantasy RPG. Within the game, he's a 15-year-old named Satou. At first he thinks he's dreaming, but his experiences seem very real. Due to his use of a 3-time-use special power (meteor shower), he ends up wiping out an army of lizardmen and becoming very high level. He hides his level and plans to live peacefully and meet new people, though developments in the game story (like the return of a demon king) might get in his way.",
			"link":"http://www.sousetsuka.com/p/blog-page_11.html",
		},
		{
			"name":"Only Sense Online",
			"photo":"img/oso.png",
			"description":"Yun is a novice MMO player who equipped only unpopular skills labelled as garbage. However, soon after everyone started to notice the “Strongest” play style which made full use of Support Magic and Items——?!",
			"link":"https://krytykal.org/only-sense/",
		},
		{
			"name":"Kyuuketsu Hime wa Barairo no Yume o Miru",
			"photo":"img/kyuuketsu.png",
			"description":"I had expected to die in an accident, but instead I woke up as my vampire princess character from “Eternal Horizon Online”. It turns out that I, along with my assets, territories, and my pets from the game were all transferred to a similar world. When fighting around, I was clearly in a higher position than my followers who are stronger than me. Due to these circumstances, I also had no choice but to reign as the ‘me’ in the game. In addition, demons, beasts, and even the demi-humans of this world turned to follow me as well, and before I realized it I had established a huge empire. Furthermore, mysterious enemies appeared, and caused me trouble to no end…!",
			"link":"https://madospicy.wordpress.com/",
		},
		{
			"name":"Alice Tale in Phantasmagoria",
			"photo":"img/alice.png",
			"description":"Arisugawa Akito suddenly finds himself in another world and another body, namely the one of the game character he just created. Female, game character. Alice. When there is no virtual reality technology around. Join him/her as he/she struggles with the world, her body and the puppies after her life as the dream of being the strongest feels suddenly far away…. as does being a man.",
			"link":"http://raisingthedead.ninja/current-projects/alice-tale/",
		},
		{
			"name":"The Guild's Cheat Receptionist",
			"photo":"img/guild.png",
			"description":"One day, due to God’s mistake, Tomoaki Akino’s life was accidentally snatched away. Though he gratefully accepted the cheat offered as an apology and reincarnated, he was reborn as a female elf! Then time passed, and Tomoaki now works as the intelligent and beautiful receptionist named Ilya in the Lunéville branch of the Guild Association. In a world of swords and magic, her job in the guild begins today.",
			"link":"https://zirusmusings.com/gcr-toc/",
		},
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


      let lib = {      
        "id": id.value,
        "name": name.value,
        "description": description.value,
        "image": image.value,
       
      };
      
	createNovel(){






		let name = document.getElementById('novel_name');
		let description = document.getElementById('novel_description');
		let photo = document.getElementById('novel_photo');
		let link = document.getElementById('novel_link')

		let novel = {
			"name": name.value,
			"description": description.value,
			"photo": photo.value,
			"link": link.value
		};
		this.novel.push(novel);
	}










	deleteNovel(key){	
	let d = this.novel;
	for(let i=0;i<d.length;i++){
        if(d[i].id == key){
          this.novel.splice(i,1);
          break;
        }	
	}

	updateNovel(key){
		let n = document.getElementById('updateName');
		let e = document.getElementById('updateDescription');
		let p = document.getElementById('updatePhoto');
		let l = document.getElementById('updateLink');

		let x = this.novel[key];
		let novel = {"Name":n.value,"Description":e.value,"Photo":p.value,"Link":l.value};

		this.novel[key] = novel;
		let details = document.getElementById('novelDetails');
		details.innerHTML = "";

		this.novelListInfo();
		this.showNovelList();
	}
	findNovelByName(name){
		let objects = [];
		let d = this.novel;
		for(let i=0;i<d.length;i++){
			let expr = (d[i].name.toUppercase().indexOf(name.toUppercase())	> -1);
			if(expr){
				objects.push(d[i]);
			}
		}
		return objects;
	}
	showLandingPage(){
		$('#landingpage').show();
		$('#createpage').hide();
		$('#readpage').hide();
		$('#updatedeletepage').hide();
	}
	showNovelList(){
		$('#landingpage').hide();
		$('#createpage').hide();
		$('#readpage').show();
		$('#updatedeletepage').hide();
	}
	showNovelCreate(){
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







}

class Component extends App{
	constructor(){
		super();
	}
	landingPage(){
		let html = `

	<nav>
		<div class="nav-wrapper cyan">
			<a href="#" class="brand-logo">Aphelios</a>
			<ul id="nav-mobile" class="right hide-on-med-and-down">
				<li><a href="#" onclick="component.showNovelList">Novel List</a></li>
				<li><a href="#" onclick="component.showUpdateDelete">Update</a></li>
				<li><a href="#" onclick="component.showNovelCreate">Create</a></li>
			</ul>
		</div>
	</nav>









	<footer class="page-footer cyan">
		<div class="container">
			<div class="row">
				<div class="col l6 s12">
				<h5 class="white-text">Footer Content</h5>
				<p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
				</div>
					<div class="col l4 offset-l2 s12">
					<h5 class="white-text">Links</h5>
						<ul>
							<li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
							<li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
							<li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
							<li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="footer-copyright">
			<div class="container">
			© 2016 Copyright Text
			<a class="grey-text text-lighten-4 right" href="#!">More Links</a>
			</div>
		</div>
	</footer>
		`;
		this.reRender(`${html})
			`,document.getElementById("app"));

	}
	viewNovel(id){
		let d = this.searchNovel(id);
		let html = `


		<h5 class="center-align">${d.name}</h5>
        <div class="row">       
          <div class="col s12 m12">
            <div class="card horizontal small">
              <div class="card-image">
                <img src="${d.image}">
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <p>${d.description}</p>
                </div>
              <div class="card-action small">               
                  <span onclick="component.libDelete(${d.id})" class="new badge small red" data-badge-caption="">Delete Base</span>
                 <span onclick="component.novelList()" class="new badge small" data-badge-caption="">Back to List</span>
                </div>            
              </div>     
            </div>   
            
          </div>      
        </div>


      `;
      this.reRender(`
      	${html}
      	`,dicument.getElementById("viewNovel")
      	);
    novelList(){
    	let html =`

    	<br/>
          <nav>
            <div class="nav-wrapper white">
            <form>
              <div class="input-field">       
                <input onkeyup="component.libItems(this.value)" id="search" type="search" placeholder="Search" required>
                <label for="search"><i class="material-icons">search</i></label>
                <i class="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
        <br/>

        `;

        html += `
        <div class="row" id="novelItems">
        `;
        let d = this.novel;
        for(let i=0;i<d.length;i++){
        html+= `
          <div class="col s12 m4">
            <div class="card small hoverable">
              <div class="card-image">
                <img src="${d[i].image}">
                <span class="card-title">${d[i].name}</span>
              </div>
              <div class="card-content">
                <p>${d[i].description}</p>
              </div>
              <div class="card-action">
                <a href="#" onclick="component.viewLib(${d[i].id})">More Details</a>
              </div>
            </div>
          </div>
        `;
    }
    html += `</div>`;

    this.reRender(`
    	${html}
    	`,document.getElementById("")
    	)
	}
	latestNovel(){
	let html = `

	<div class="row">
              <div class="input-field col s6 ">
                <input disabled value="${this.novel.length+1}" id="kill" type="text"class=" vintage" >
              </div>
                <div class="row">
            <div class="input-field col s6 ">
                <input id="kill2" type="text" class=" vintage">
                <label for="kill2">Enter Brand Name</label>
              </div>
            </div>
            
            <div class="row">
              <div class="input-field col s6 ">
                <input id="kill3" type="text" class="deep-white lighten-1">
               <label for="kill3">Enter Car Details</label>
              </div>

            <div class="row">
              <div class="input-field col s6 ">
                <input id="kill4" type="text" class="deep-white lighten-1">
                <label for="kill4"> Enter Link Address Pictures</label>
              </div>
          <div align="center">
         <button onclick="component.novelList()" class="btn waves-effect waves-light">Back</button>
        
               <button onclick="component.libDesign()" class="btn waves-effect waves-light">Save</button>
           </div>

           `;

           this.reRender(`
           	${html}
           	`,document.getElementById("latestNovel")
           	);



	}
}

Homepage(){
	let html = `
	`;
	this.reRender(`
		${html}
		`,document.getElementById(latestNovel));
}


let component = new Component();
component.brandList();
// component.movieCreate();

// <div class="col s5 s5">
//     <h3 class="header" align="center">Recommendations~~!</h3>
//     <div class="card horizontal">
//       <div class="card-image">
//         <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEhMVFhUXGBcXGRcYFxcdGBsbHRgYGBgYGhoYHSggHR4lHRcWIjEhJSkrLi4uGCAzODMtNygtLisBCgoKDg0OGxAQGy0mICYtLTM3NS8tLS0tNSstLS0tLS0vLS0tLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLf/AABEIAQoAvQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAFBgMEBwIBAP/EAEkQAAIBAgMFBgMGAwUFBgcAAAECEQADBBIhBQYxQVETImFxgZFCobEHFCMywdFS4fAzYoKy8RVyc5LCFzVDU6LSFiQ0VGOT4v/EABoBAAIDAQEAAAAAAAAAAAAAAAMEAQIFAAb/xAAwEQACAgEDAgQEBQUBAAAAAAABAgADEQQSITFBEyJRYQUycbEjgZHR8BQzQqHBNP/aAAwDAQACEQMRAD8A229wqFW4VNd4GoCk8OIM0F85l16TtDqPU1zduwfkP1r7Dnj4fzr4Lw61XJK8ScDMsINK6oadp5c2ZGhSQSsHmRJEzyryztyw2gcTqYMg6cYBpgCDzPb993udnbIUL+Z4k+QnSau2reUQWLeJ4/LSk+/vKzC8cIgfvGGzZRI/PqRrBnUeVQ4XbrXQEum7abhpc0JP8L6g68jHhNW2mRmH9pY/R2UTlORehYwD6THseVSbvXmKZbkZhrp89OWv1pfvqUXIGMKcwzAhpAjXkZE6jrRTA38oS78OoaeMGBOnSJqCOZcbfD94x17Xgr6olZ7Xhr6vjXTphf2vf95H/hW/+qlWxabLnynKDlLRpPECetNX2v8A/eJ/4Nv6vQ7AXLP3RkcqCXtq1xLayB32X+85kQxEd0wJ1Neg07FaVxMnVoGY5lKz0q7YGsDXy8BUmwbiqbZuXMOEFxWZXtZ7mUESAezbQgGNefKjO7K958wEOwVeEFnlIUEaAIznTos0Z7NpJxMsUg4BMFommlTWxFd7RR1ufiqyuQrEZtZPGZGk9OVWcHh1y9o4IUSIJ1czpHQURSAA0SuUklcybZWzXvtlUqIEyxgV1tTD3MPcNl8oIAPdMiDPOPCqeJVrneK6SOWgHQUY31H/AM2f+Fa+hqpc+KATwQf5mStKHTlgMEEc/X2hz7NvzXvJPq1PQpD+zMd6/wCSfVqfawtcc3tPTfC1C6VQD6/eeEVX4ehg1YFQ3RHkdKRf1misjTQn1rux+gFRg/18qlw440Cs5YCXaLu8dlrV1b6GJkEfCTxggdQPrQjay9xxaBVrkZuqgico6HQnzjpTLvbfVMP3hMssehzT8o9aAYTETazHi6XbrHrEEDygfOnlHeCY54neztkBFg6ZQMqDkI5+eh9asXcOuU/g2wOB0JkHjIPGiODQEBuMyD40Ixu3UwgUYpgqkQDxLacY6AHX+VcWx1kKpPSWcNaMGxcYxE235xxyk8408x5Uu7ae5aGS4xyAkEDh/dIPQkj3FE8DvFhrrhUuAlWDW9CCVOka+ZiOUdKtbxWFe2dJgGR1Gkj2PyFSp5kMuIxbFxC3LKFTIygeo0PHyq9SRuZtRVRVzSBKn37reoIPrTsDVGGDLKczy44AJJgdaRt5ftAXBtlBS9/dB/EHmBp7wfCgX2l73szHDYd8oXR2B1J6D96zJsKWBYnhw/Uj964CcYd3p3hsY2+b7JcTuBY/MwifQjXhoarHAKiBmMG4vaWWIIzgfnWDwIHe8cpg66hFygSyMWAJkQD4SeZo1u1ibBvj7ybgtBQqiQy5AGkEESNSIIMgiabq1Tpgdotfp1ce89sqSCQCQsZiOUmBPrAo7h7CZFzghpg6T8RkQT0y+1V9o4M4S8RbYOjgG2/ENbJmGEayNCP5UatXD2QKoB3hIk/EVuR7Jl9T1rZNmQGHQzz7VhTjvBbBGuHVxMNwEZfQ9BV69jAci96FAhSAOIkHTqDRE4J1tZikkwo1JMxAAMcR1qpetKuU3RLKApAYxoAO8x+LTl+lcrhjB2qFBMqYjEM3HhI0HCjG+f8A9Wf+Fb+hqo20CFK5EUaaFdSDw1NMG0MCmODYmzIKhV1ETlGun9c6q1gSxWYYHP8AvEHXWbKXRTluD+mZL9m35r3kn1anukvcHCvbuXg4jRPIjvcKdax9cQbyRPQ/ClK6VQRzz955NeMJri0eXSulcGkcgzSxKrrrBru1cjQ+VdYlJE1xYYNx4ikz5bdol85EWvtBzFbaqJHeY+AEAn3I96oYPEKti0WjKEu2mngO4CJ9m96b8Zg1ukTqMlxD5NH7Vm+0gBbvWWnutDiDqFYNmEanmDHEMK0lOUxAgeeNWysfbuL+BcS5bjjbMlCNRI4xVjbGz3uWWuWgO3CxbPdOmYMwXMIGYCNegodsrZQXGnE2snZ3ACAkAQUAIbLodQTPPu66U4UE+Ugg5lycgjGIg7K2VbsQcktookRBzSuhHFV0nzoxhyHRyRMs6zPQQI9RRjaOEzW2ykBoPe58Dw86X7t4IBYUMIAhYOcjKVJAHEnw5yaILC5JMrsCqAID3UVe3xVsr3VZSDxy5pYAjjEEajoKZNs7QurYKWRLN3ZBkgQZK9fM8JNJOyblxsddZHNp3YhQykAlRAtOpgjQCJHLxFNbX0PcvobTN00U+Mn9dR60VhKAzN8XghB48JJ5k1UaxHdj8qif/b7fWnra2xik5QY4yRI9Y1Hz8xSpfslMwInNENx5669YBMVBE4HEG/c8ynMuXh9OXhoR6VaTYcs1p7N4XVUsRlXKBoFY68CSNeg86vviEuW7eUQyWlRh1KSoI/3gB7mtawSretI5GptgE8+An5igs2BCryZjWMTLatpmnI1xPYrIHhJPsKMbIclra8Q2T3UwflQzePZbYW+1k3A4BLgjiMxnvDkdB7Ci+6Dqveu6IGBVuYbnpzHWt6pdunB6zzWoYNqiOnM0PH7OJS3bTxk8/EjxOuvjQ3HbFtwBcVQBCgLmkTzmfHjFMdrH2nAZbiEeDCg20NrWmvi24BQwSxMZSNUJPidI8jWWllo6A8TUtppYckc9IG2dgXAh1DLbuZULKpm3DZ1X2HkTVvdUjD3blsnusEYDXSTGX0mPSrGLxAgsYCqD5AAUtrtMl0J0ls0fwrqQPOSSa7TmzUM2BxL6yunSV15OWHT6R32E0XbtvksFT/dMmPQzRylPc7GdrdvN4J9Wpsod6lXIMLpXD1hh7yoLk8fevJj96kupzrmPX60gwIjnEmFwVXxFg/mXjXJXlx+o8q9S+RofnxoTujjD/rOAx0kti8D4HnSrv9bUKgCSXeZA1BCgadJ09hTTkDa8DQveZgtglvzahD4kEe4GvoKY07MCAef53lGxiANz8aLA7HEShzEIWEKDzTNwnmJ5ERTNidn57guK5Gg8RA5iKR8NtS3eRrWctiVPA6hgJIbSPy9TrIHXQBs2/jruKdbdw2cph8rOEOU96VGkxOuvhRrEAy3SWSw56zStvbdS1Nte9cIggAnLPWOfhS5tDa2IWw2NVl0ZQlsqAjCYMx3p1Penj4RS/ewzvfyEt2SrmbXiYJMiTDGOeo41Z+0HaTNYw9i2sBspaNFGWO4PXU+QqQiqAc9ZUtnKgdIp39q/ivfe533Ys0Duk8dBx06zypw3b3vs4pRh8QNScobXK3JTPwuDHmDXm5+zbCL2txFuXH0QMBHnqY8h+pqxi9i9q+ZxkKalYErz04SDpy61VtQAcGcKSRmejEYnA3WtswuYcMAM+sBpykkajgRp0r7aeyxmLKCpAk2zEgQe8pGjp8xFXNp7QtntXMMrWnUCeJJQj2In0qptoH7jZvAxctZcpnWMwAB8DFMDkZEC3XEWMFZtm4SbiLyAziCxzkCflHj4VpOy9sWRhc+dVa2hLLIkFePd8Y+dZRvBZQG4AEhmVxIkAEFtR1759j1qXdZxcBN61ZZUgybagjmAWET1INDKgnzdITJxhRzKd/FteuPccyzsWPrrHpw9Katn4uwLSguAVMxlJmdCCOdfY3aVvEI2dLYKiEhIAH8WZTPAcOHlVHAHDqwmWPLnb9/9a1k1lbrtIIxMO/4dah3qQYzYS8pUtZtpaUcbrD/KvWgG0cSHFyJyqrNJ/Mx0AZvVuH0ohdwj4lhbTEI5iciK+VRzOgjSgO1ilotZW6Lj6KwQNA4MVJIiQQulTvrAODyYBaLmdcr5QfaBL7X2yt2jhQQIzt3tQOExFHhdaATxPGqVmw9yCRorL4xroPMwaKYyxkAnjE+XSiaWsIDtkfErC7KrRv8AsxPeveSfVqfqQvsxPeveSfVqfay9b/eM1/h3/nH5/eUTtW1/FP8AuqxHuBFe28babgwnxkH51ZYqo5Ae1UsViFI/IrdM5gHy0J+VK4zHsy12SnUfI141o9QfOlfG7XuWTPZZPHMxU+EwPnVTE733CsKh15h/5VB0u6R4kaMbjLdhS1w5fAHU+QrMN8N6XukBNASUU8hpOnUmONQ7RxuYy4YnoST/AJjrUOzME2JYMyAoDKgiV08+PnwHKaNXStQ46yhYsYb3G2KtpGxLaG6Bx+FOZJPxGeA68jNV8vYYh8QrHPcLNlMwA3AwOPBTymI50VbBXWKguSx4KJyr5AHl/Rr3HbHiEbuyBLEAtBkacgYVj6j1q4BGDCIOZT2UvajEZYLANoOJZlLGehMKI5ACg21LuKxVtMlpksqwXvgCTx1J4AZtP9KZ8JstcMvaWFITNlbN+ZuJzzHEECJ468Jqvi8a+qmVViSQolS38UaxOhjWuSg3YKjpBW6lKchj7ylh2yMyA6KAAIkTAJbygqJqz27u0yWjy10jVvLnx8TQjZ95i7BlzNJbvHj0McJ6TRazjCTBWK0P6KsqAw6TLfX3K5KHrIv9kZzzBYwEUyBPIdf66UR2rgQlsWr1130H4a5RoOElQD186+tYs2s10CSBCjrwn30X3qjsvCYi65a4DcBOZiAZM8geEetIaxzt2144mnoa+RZcc5i3vLsfNba4pPdgEEgyNBAgCIEV9hcMLWzHDAi4+IWQeJUhSB5dz501bYwDPnV1ayhAgssCBGn8PKeNAXvzbIS8XuBlZJBmRlAUceU0OncUBaMW7dx2we2yrxCwgJPBdCV/w8vWpv8AZl1dXVh5g0/7r7LvW0zYm6EZ9T/5rE695jr6CjzWLMGe9prrJjqQak6tlMB/TKZn74k4HZj3U7t6+cinmJDcPJQx82HSknAWjlBHOc3703fay3Zph7SQVDOfQKoX/MaX9i4dzZLmAFMazOscNPGndGQ/J6mB1Oa146CH9i2Ft2Xuv/F3R1IB/wDcR60Ix2JLuBzJk+VW8zMAusDgOnU+dVcDsx2R75UkMSq6cpiZ6aVrqFqHmPWeadzfYzAcCO/2XD+28Qp+bU/0ifZqsNe8k+rU91i60YuM9D8Mfdpwfr94ILljLQD4nQeA6nxqdQo4t7A/XjUWD2WAe0unM3IfCg6D9+dDt5LyC01y7c7KwoJIXRn8J8eg40v1jpOJJtrFd0omHuXZGshsn8/SknH2SrS1vITwQTA9J+tRNvjssLHZ3QPAHMfM5qC3Nu4QnNFzKSYlAfQmdeIo1ePWAssIHymH9n4YuScoAXloZ9unnTzsfYttbYERxAA5AEgfSfWs62Fvpg7OcMH7w0hPfnWibu7fTFWRdtAhMzCHhSY/Nl6xQrPm4MLW2V6YhPCYFUJYDXhPhr+9VsZbDOJ6z6hdP+r2rq5tMKYJHLTnB/o684oNidrKW/DmQ3Aq2sk8NOp08yKGQTCdISxYUoyMYzajzH+gpSxdm6FzADKOLSDHXSosTvlhrmIOFi6bhuZFKiQGmDDTw5z4VDvTt3CYXs7V8XBcIzk2wDKyQJ5CYOlM0O1R4PEQ1Na3YwPMIu4xGW6W1B5sZ8/XkI8KOYDaYYDOPU8R5/vTBu7ds4rDIZNy24JQXlyuAGKyDrpI0nqKGbx7D+7I97UW0XMSBJ4xAA4zI96tXrPPtbiRbpVavI7frO8KyQO0Omh8CYnX/n+VO2xCvZyIkkz/AF5Vlm728NjEnsreeUUsZSBllV95IHjFAsZvfiRjzhcJlVO1W2DBzEyAxOsTM8RyoHhkEk9CeI0bwQAOoHIPabtey3JRuRgj3/Sgibt2rVxrtpR2kELP5QepA51lt77QMd9/+7WGtkdqtoMyZm4hXaZ4DvGtrsXA+vXX6UvqCUGFPWEqbcMkQIUNnL2v4rt+a4V7oP8ACIFW8U6kFhpGk8PP0413dxDXWKWzCiRp4GNfXlVOzst7SN2zi4CQVTKRqDI1PLqIpZ6VYYjI3AiL+9Gy+3UNBLW8rEcwCCF05GIP+lUL2ANtbVoqTMuY56ke3KfCjH3N7bveRGvX3JOrBUHQAE97515hMDfJN3EzmPBZX0kA/WtbRhUAweB+uf53mVry7KUKnJ/MY9z/AMnmGxttHtWWsoGuGIUSVXgSxPHjFFzhltYm3bCxbuIQV5TwgDkKC7AtB8bm/MwMk8lA4AUaxl4nGFgJFlNPFiNB86pqEUW8enr3gtK/4OSO+Py7yDcmyEv4lRyKj5tTgWpB2dbv2TcYFVNyJPE8T+9evg8TcObPdbxBI+lMW0l23E+n2ldJcKq9mD1P3jpjG0A6nXy51jn2iYq5dxrJbOihLKr8JYxpHD8xAPlWy3l1BJ4fuKVrO5Nv7yuIa8zkObuXKoBaZEnwJB9KS7TUi9iPs3w7F7ly7eA4s5yKCebBQvMzpVPB7l4NmCrdxGXXWU56HTLT7tzDtehAe6NT0J/lUWztkpbOdmB8hpXG1AOZG1s8THt8Nj2sNiXt2iSqASWjjlk/lAECR7VqGxNktawGHQqQ2QFwp1Dv3nHmCSJ8KGXcHgrmIEzeuXrnOYEmTw0gKCfJa62hvfcDsttDlDEDymBpln50LxSeghNvrCWEw7qiQSSR3gRzniTE9DFe4gFVa/eB/BVrkcjlUsAPMgeNL9vePGXGCoCWYgKoLakmB5DxoxvVib2GwUXbs3brhQVZhlESQCdTw4+NWWx1/wAYJ695HPHtEH7LNmNf2kLjiezS5dYn+Mwo9yzH/DQX7RcScRtG8E1ysLK/4e5/mzVqG4eJZMJicVdcsAWAJ10RZOvPvGPQ0B3P2mMVirdtrVljJuFuyVW7venMpPxRx61U2MO0JtBOY9YTYy2LViyugtoi/wDKoUT11NCvtF3kbAWrQVQ5usRkb+FRLcPEqPWmG5tG0zZLd20z5spXMpI6jTWaT/tG2fh8TcXtcVbRrS5QO0GkmTK+Pd6cBUGzd1E4LifbiPhsRbuYv7sLDO4tllkq2TvTEaCWqrsz7O7OGxKYpLl284ZmBJSMzAjMYEz3ifOKG29gbVwqJaweLGRgXCr2YCyJJOdZ1P1rx8Nt9G/tLh5902SOJ6KKuH2jgyjVg5hvZWwbGDu3bNtWa834rXnGpzE90MvADXTx60xXccUt29YIOUn2j5VT3Uwu0Hs3/vbFbjQiE5SAAPzCBoSTHP8AKKtLsm8bYS8QxjvMBoTyOnOq3FXAJ7S9flJE72Pd7O6zFu6/5tNAZ0by41fx1wtcKiIWOJgaifHkRy50JGFZABlJ5adOs+VXbOZnZmiSZ48PCBrwAqrsnXMKpI5kePw4EM6yV4RMiSBziRqBr1qjbxRMuVlJhEXTM3Vpg6Hl19aN4zCrcVg4MPIM6SD4centS5gtu20uG2trKqNBmMxPA+R95qgtY+VBBXV7+SeYW3e2Y1sMx0dzJPQdBU2NxSI2S2ue4dSB9WPKrt/FdoncYInxPzHgPHxpX2htEKDbw4gc3nvH1/WntJpmZt7HJ/1MzV3LQmxeAP1hjZtntXZWYEiCwXgOOlHlw0aAkAcAKV9xLZDXSeJC8/FqcaJqcrYVzCaHD1ByOsivrIPlUFliQB6fuas3FkEVQa61v4ZERWdc+0jPSaKjPSCtp7aw1u41q7eAcQSsMYB1HAdKobc3uwosXBau97LlAysD0+ICqe+2xFxhR1/CZZBYW8xYHkYYcKQsduyy8blz/wDT/wD3TFdYtHlg3cJ1jbuOTexGcmVsW2I8GfuAiP7uf3ps+8vnGpy5449ANPn8qSNmbfKFMNhsOtpWKrIGp6szfEYzampt4tuHDXezsmQUDtLEyx1Ujpp9aZGlcEKBFjrKwpbtNCxe0EsgPcYhTPJjwGpgA6cKzv7RNu2b/Z9m2ZFVjOo1J1kHXgBVXee617C23a663TAAju96Hbu55jLC8OM+lDdPZtpe1v4ki5kjsw2UAEBmYwW4/lAnn51x0j4yJ39ZXnHeM+3WGC2NZs8GuZZA45mJuufcx60G3K2hs/BIb7YhnxLWyDbyPCnQ5Qcup0AJmKqYvH3toPaV7rWlRLhYoJ0Ik6kEcunKgO19hL27JZ7S2obIFZZMzEyTpMiuGjtBwRIGuqIBz1jRuJh7d3aCtMlA+IuMD+GCQAoUzJ710kEgHQjlrQwT4fG4hmuDNcv3oTK5DKGaAGUiGAQE6E6A0Z2myYGz2GFBBu22R3ygk8VLE8ScxJ1PM0I3e2TbwmF++QzYgFhabvLBOa2NA/QnWOFVbSMQD6yw1iZI7iP20b7hoQwB48h5UxYZGCqrElokmsr2XtzEXXbNauMFVi2SZzASBJQ8f4YnXiavYL7QLrN+WJ+IyQo5TlWflR7dEWG0AcRVdYFO455jXvHtjsLgUhmzQFVW1PUmpMLiltiWS4rHUguSZ6UiYzeo27/aBVuuVADAOAOOgDKDPU1xtXeS8oVyCHIBCsCG5ksV4KJIUT+YAkdaE3w0sowIUfEFyZpuH2jnHdtMY5tw9zXlrGHN8I9o96yn/wCIMW1g3Ge7GdVVchyNoZlpHgIjmPGpNmbz3LhMKwVYBuE9xNeB5sSJAUakkeMDX4bZjzECEbXp2BM07EYkcmzEzJ9I9uNJG8dgi8t0DjrPIMIn30PrVLA7x3LjhXVlQAszQdFAJ4Drpw61V3k3kfsradnOV272sN3QJGk+PDnRBo2rkDWo8c9m4y3cXI/d6Hp59RXN3DqjHMOPAg6EeH7VnuzdtOWkqR0imaxtQt3WHdPy8RTVeUHXiKXoLT05jtuvGZ46D9aYqVtzrZV7oPRfYyR8opppPU48Q4jeiyKQD7/eeV41dVHfzR3Ynx4UCNyC9irYjgZ6VXt4dLrFyAQNFEeRM+tejDxq3XWIjw0j6VMUg9zQ8xy9aqCRLEDEXtp7Ht5nBUAAM0jiBB6ecetABsJbwu20i3c7O3kaCwWQDw8tPCae8aqoju7DgSSdAFAn2/esixH2gYy27kW8Ode6ezYEidJ7/QUUOfWCKD0gBk2iDlKYs5ZH9neYdJHdiI4RX187QJJ7HFag6dhdgTEkAJAmB8qO2/tXxs95LBHQIw5afHXj/a1jR8Nj1RtP/X5V3iN6zvDX0nm4GzMVdxLfeVxAsraOlxLiBnYqAneAmPxD5gda0XDbEtEGACDxzDWfOZ9fClPdjfvEYtr/AN57FMPZsm49xUYENmUJ8R5BzEfCKo7S+1e52pXCrbNsQM1xTmY82gMIE8qnxHx1lfDTPSaHb2JbHC2pPiT+s0AuXdnNd7JXtdtnyZA5zZgSAoA+IEmKWf8AtLx8TksD/Af/AH1DuHsY27g2lilyWLPbXBdZgTcYrkGVRxEm4QeJJETpXeK3rJ8FPSEsdu/L5QQsEmRxM8JHH5VF9x+7MhWG8MsAfsaYMRvnsu5/4ja//jb9q4G8OCOHxF2wzXDZt5oZWAljltiTHFooi6ggbT0lG06scyljGS2y4r7s99nXs1tojEKQNXfKDpBGo4yeFJ1440kkpiRqSfwrgA5niugo5Z3+xSKH7PDjhoFYHnMgNw5etSYjfbFX7TWnW2FdShyg5oPH4jVWuYngyRSuOQP0iomLvswVGuTGijMxJj4VA8z7037lbnFXS/f0kMUtEHNmIjO+oytlzjLBOo1nQD9k3/u11bttVLqpQB9RBEGNRTJgt7rzWb910tfhm2iROrsx0JzclBaq+Ie5ktUP8QP0hS9awdp4uvbRgM0ExAiZMUF+0bCiLQVeLE6DllUUG2piBduG9cVSzFSwDaHhp4aQPeiuO3luXcrXbVlomOOhPk1cbC3UyVqVegi9hsMcyiCNQOHXSjVnBszBMpzExw51ewL2b6MzhEZA7sBmChBHe59YozhNqYIBbmYTBgwfLX51IcgGQwG4Qpu2sPcgGBlQeSjL+lMNLmD27g7YOV1AAkx0kz85pgtXAwDDgQCPUTVGOZdRid19X1fVWWkN21JGsAcqkgAdK6qjtK+AAv8AF9P58K6dKGMxskhllWBABEgjx8CJofffBWx3rFqT8ItITHkB9Yo8AqjO0fwj15Vlu/W+i4V7ljCITiM/fuMkokw0KD+YwwHhFSvPWQxxwJL9qOPw1vDWuxw9sM9yTNsL3UUkiRB1JHPlVf7Ndhr2V6/etoSzqqghGEKMxKkgwGLgHn3KTLmJx+2b1uwQGbLp3ciKBBZ2jTz48QBrFatsnDfc8Nh8GCruo77CYzEyxHh+1EQLmDsL7eOsmxmMs2Rl7K2que8qosEDXvADXWKE7538Omzrt1LNtS4CIwtKDLGCRpPCflRLaeA7WBl4c/lp9aVftmu9mmEwiSQAbrf5E/6zV7WTGFg6KrBzZmSfZVYt3xdu3UQ5ctpO0UFZ/O/EQJGQT50f3q3b+8uM+IuWkCBFtBENvnqAdJ14jUacKI/ZlssWdl2EuDvXM11gdD3ySojkQmQelG8RgMghW7v8J1X1B5eVLb9p6cRnwy3Q4MzT/s7s/wD3Vz/kSjWwdjWsHbuWwe27VlZu0VYhR3Rl85OvWp9o7WtWrzWntaiNVJHEA8D51Js3H4e7cVQLqknoCPU04gXAbaYhat2Su8faSNbtHhh7U/8ADT9qA794q1b7FEtpbYg3GyqoMflGo5GG9qB7w7/YpMXetYdlW0jlFm0D+UxmkidSCaoDDYraeIYh0cgAG5GS2qD8pIieJiIkk+ZArHVvlENSjpyzcR13ctWfu3a3bak3HbKxVSQq9wRI4SrGPGpMViTYsXi6Wms5S6kIuXOYRDEfmlgKKrspBZs2LN223ZW0tnvakqoBY9CTJpb+0PD3Ew1nCIpa5fvAhV1nKNPD8xGpjhUEJs4PMurvvwRx6ypuUq37rsyqy20GjAEZrhIUweipc9xVba++2Fe0yWsOtsxGci2NA0k6DSQPSaMbB2cNnYc2L+V2vFmuhCSMrIEARtDIUHUcyajG7ODt/j2cKSLZDBmu3WHgcrNB8jVVUnpLvYFIzKuyGjD3u0z2zeyovd1yJ3iQGjRmaPHIK7s7Dt5EIxNwB2KxkXkRx16n61BjMQ9wy/6/rV1R+DZI4qzkeeYH9q7GJIOTCGy90FaT94fKSAwCL3gDJWZ0p3fFDx96E7CylWCHQd8kj+LWPThUjtJo61iJteYz19X1fUrHpxccAEngNaCYF+1uNc9vD+H5AmuN8MdktC2D3rhj/CNW/Qepr3ZZyYctIBykgnqR3fkF96vjCZ9YEktZtHb+CUtqY3M5afw7Wg8+BNeWN4bTTIEjqo+tKGPuYi1Cm4DImFbh8v1oQmMIMzrz1p1aVKiLksHO4zT8Pji66IBpxgCfKOIqmuFAfOTrB9/M1V3K2gt5cj6lOXUHgff9KdOzHQe1I2OykrHkRMBusXO1AEngNfaqF7eYu2irl4CQCYo9t7Z6tZukCGCMdPKs0sXdB5UMcwzNujBi8ebmrVHb2+9mJJZJ1Un6HkaFC9pVDad3u1bbmRnEM7wWg11cQB3bgUjyI7h9Vj2NQ2b+Rwy6c/WmZtl9rs6wIOZLFuf+UT6giRSFckMoPEEj5cv651oaVw67fSZuqG07vWMdzeK4By9hXQ28zrBgewpeJqJDTXgr2ETDmMezcQouRycFT+n7epola2uyQo+HSTBgDiZNKVu4QQRxBkemtEtrElsqD8+U+fIDy0mlL6wHz6x2h8p9JZW+uLJYjKykgH4Tzj5D3ojsvGi2rWyJEGVPz+s+9Wd0MEqlhx7MKCerNJb5Af8AMKX7l/NdYTBV2A8Vkgr86VFbckdow9qcI3Uzp8gJBjj8q9thTYJHBHJ9CAD/AF4UN2lYdVV2BCklQTzj/Sr27V05LogHTSeBMf6UR68Hy8wNV2Uywwf2jLshciMOEhflNXLV1OYmqeDu50jOJRRmPy/SpcDYtMs3LgUngJ5Uw2OpiCZONsba8NfV8azpsxM3nBvYjIsk2wmnnqY9GB/wmqu19r5FjkCQo6nhmPhA/qajGPX/AGrfUnkWBHVLRkHwjNSpfvlzmP8Ap4Uzp6Ta2D0H/YG61ahkdTOr14sSSZJ4muGMKfGuFNc3mrWCgcCZW45yZa2NtA4e6twcODDqOda3g8WroHBEETPKOvh/KsVNT29rXFQWs57OZjx5+nh1pHWabcN4j+lvHyGaPtreqyqsiA3CVK6aLqI4n9qznCXJRT4VMbsiapYUwCOhI/UfKs4LiPy9nqjjpYpbHF2AHqYqfNVjdbD9ttGyvJJuH/CJB94q04mbBbARVQcgBHkIrL98dndliBAgGSPIgx+3oK08sF8TSR9oEE2ifzd4emn6mi6bPiDEVuI2EGKFcRUkV5FbEzgs+t0ee+qKlw6sEgDxkCgS1Y2tc0sj+5P0j9fal7sblz7w9OQrflG7ctmGHuMBmd7hInhMAST0Bq3g93LSAl+87TLHkT0HKqmxNo2sNhELsAWk5R+YyenpVY7VxGLbLaXs7f8AFz96AtbktjgQV19YK55b0HrKW+a/g2kPwuZPvyoTZxYsJm+IjKq9AddfEnUn0pn2jsNOyYF+8ASpJEZo4k86z24ZPe8qIijGFgnZ3bz8D+cRu3RuZ1JuHTMSdNev60y4reLC2jlFufQVneytrm1nUfFBHgR/rQ/E45ixiT1NHGmFnLZir6p6jtrxn+cTf6Ebw7UFlNDDEHXoOZ/ail24FUkmABJNZRvPtU3rh6aE+Xwr6DXzNZNNfiNtnorHCKWMpbNxWbG3LkRNm7A5/wBkQPXj86pipNnGL6/3ldfdGj61EDWlQmx2X6TOvcuqt9Z2DUZr2a5Y03F8TljTjuvuuHQ9qNXGvVVPCJ4MflFCd1NkG9dDEaDgDwJHM+A+ZrU7NoW1yj1PMnrWfqr/APBY9p6SPM0xra2DfB3ms3OHwtyI5EftVO2/fcdQD/XtWrb27vjGWGUaXF7yHx6HwPD2rFcNcKXcraHVSDxBB4fWkjgx1TDU0U3AvLbxzF2ClrZCyQJkiQJ56UJBqG5bU8RNUlyMzZb2Mtpq9xFHiwH1NIO+G2bNy8Al1GVVAkMCJMk6z4j2pSu2FjgKG37UcKLU+w5EC1G4YMaUM8CK9pQs4hkMqxHlRvAbYDd14DdeR/ank1AbgxdqCsJqkkAcyB/Oo9pPmuGOCgKPT+c1bsHIrXP8K+JPP0/eqgQASTUgeLZx2+8FY601+bv9o1bF3dt27a3sSwYkAhTwjjEc/KjN/aiKsxlUeEekDhSpYx09+4xYwOPAeA6UOx2ON0+HIUwNKzt5zMVteiA+GJbx2PfEPzA5Dl5mgW21FsyvA6T48zRWywQeJFDdvJ+GLlzQToOZ/rSmSigAdhEqLWa33MCh9cx4TAHM+HlV1dvrY7qKrsdWY8J5AeA4Uu4vFljPDoOlGNgbr3MVb7QHKswJ59aXN2TgTfOjrQBrTNr312h2dnLOranyEaepgVl7EkkniSSfemrf7E5rxXplX2E/U0rRSehTylo3rW5CenM+ttDK38LBvYj9B86iudy9dsn4GOU9VJkH2Kn1qaKq7Ytt+HiEEm2Al1eZQaK3jpK+EL1ol5KMLB+cHSu8bDLEVa2Xs5r9wIonXX9v38Ki7E5oGs6qeoOoPtrWnbpbFFi0GYd9gPMD9zxP8qpqdThcJ3l6NP5iW6CXNlbOTC24ETzP0A8BVi2ST51xiTmluQ0HnXNu5lWeZ4eXWs8Lx7xhnyfaWL1z4R6/tWWfaVu6Vb71aWFYjPA0VuTeR5+NaZZQsfrXOLCOptkAoRBB4HrUgdp27vMAt7SK6MK7/wBq+FMm+e6jYU9rbE2GMeKnofA6waVco6D2qcCGDmd3NpE8qrPfmpwg6D2FF8FhrV4R2YzcwBHqI5eNXWsHvILnsIu18KObTwOHsaOXzkaIpn1JYcK8xGxMltCzw7DMVj8o+GT1q6UO3yiCu1FdPznE8wW1ri2+z0Ycp4jjwPLjXuCFy48EierGAKF2WkkLrHEjhVsGRB1o9VzU8ERbU6ZNQM5jUMEjjKrvn5cMrHpwmhefKYPEGI5zXuw9pNZIQzlbVZ4gjUQeY/lRbam0LFm42JYBrtyGVBqq6RPnzpqjUMx9R/2ZGr0KKuAMH27iRtbWwna3+PFbfPzb5aUn7a2i10ksfSvdpbVe8xZiST/UVe2VsdFX7xizlt8VX4nPLTpTLHA5lKKBXhiIJ2Vsguc9zRBqJ58wfKjmG3u7Gbdm2bgB1K8B4fKgO3trXsde7OwuS3AEDkBzP7Vd++YbAqtpm70SeZ8zFZ4YAnE2XBcDf19I771tOIbzb/NH6UIAozvXbjEN5t/mn9aERU6T+0PzltSM2n8pzFSWbhUyPbkRzB8K8iukSSAOZiiuRtO7pBopyMdYw7At2mvWWIhJgCOHQeWaK0LEvoFHE/0aA4HYI+6KAIufnU8wfhHsBRTZ9wu2YiIUCOhjWsRRyTNO1s4E7x8KqrVS1LtA/wBBXm1b0vA5VbsKLNsu2kDMx6AUf5UHqYn89hHYTnGXwgFtPzHUnoOZ/SvMNbk+A4/tQnBXWuE3T+a4ZA6L8K+2p8SaI7YvdhhzB1bSfMan2BqH8i+8tWfEb2ET999rds3Yj+zX58p+vp51nm0MGbZkaqfl4GmK7czEseZn9vlHtRPZmwzeIVh+bSDwHifHwo7KldYz1lwSznHSZ/NXdj4/sbqORKg94dV5iiW+W6z4G5oc9ptVbmPBh1pdBoGcjMJ9I277W7T4zt1deyW1bAOkEiT+o0pWx20GvkgSF5knU/10qC/LxmeFUaA/QeNe9lCjMCAdAg/M37CtilvwwBMeyvFm5zz29B+5kuGxfZBskcIk8P519sa6Xu99cymJ1yqPE6cPDQ+NRXMLGt7uKOCDjVXE7RJGVBkToOPqaHaFPzdIxVuxivk+vaaJhNrJdRi7Wm7NlHZaSQIjJyWPKRE1T3k2ILlrPaBLQHSNSR8SeMa+qnrSTsQuLmYRlH52JgAeZ50939oH7m3ZSzBSEy6kgzBn/ec+QpbG3zLLMMEDOf37xdtWLWDAe/Fy9xWzOi+L+vKq9nD4naNzMxhB8XwKOiiiGy908o7fHPlXiVnU/wC8f0qvtveolexwo7O2NJA1Pl0phjkZaAGWY+HyfXsJHvNtOxgLYs4cBrvxN+p8fCs0v3WdizkljqSaP4rCF/E/M17Z2SgH4hg9BrHnSlgaw8DiP0oKVwTkzdd/MLlvZusH3EfVaWAK0nfLAdpazdND5GIPowFZzlqdHZ5Ss7UJyGnMUQ2FhO0vKvkPcgfQNVKKZtx7E3QfEn2X9yavq2xWZGnXz59I67RxAtoT6Ch2y8RltO561xvDdmRyEUEbHyq2xy1agV1Ap9YK24iz6CGdk2+0fMeA1qPfLFT2WHH/AIrS3+4sFvQmB60U2FZy2weZ1pT25ezbQafgtKB/iJJ+gqFG+32E5vw6M9zGHYlrMxbkv1qhv9ei2q9Q3zIX6ZqNbAWLIPWT86C76YcOVkwIk+StJ+RoNrZsyYzplxWBFrd/ZLXWBjjwngBzY/pTHtbauHwEAkd1SeIksdJNIu1PtCFlDbwY7x0a6RoOQCg9KSxaxOKeSHuMTxPD34U1XUXbfZK3HC7VOPeHd6987mLYqo7p0A5eg6+NAl9J5wZH+tNGC3MSyna428iL/wCWjSx8C3Khe3Nu4cp2OHtDKDM8PUczRrEVl47QFbBG2rk56waDGv6fvXx2qFnIO8fjbVv5VwjyJFR29mPcYhSAOJJP6VTTWsPKITUVVHz2dBKV68zEkmTUaCTwLHko/WKZcPu/aXW68/IVziNu4XDCLS5j/dGnqTRXrZfM5gadZXZ5agTj9J3s7dO/iApvMLVrQhR+3CfOjl3beD2bb7G0c7j4QZM+J5Uk29v4rHXrWFS4LQu3FtiOAzGJJ4nyo/g/s+tXrYbDYm69w3HTLeti3PZui3mHemAHzeOUjQihPei/LOXSWOc2HA9BAW1ds3sU2a42nJR+Ufv51VVa0HBfZxauFOzxFxka3nDZLY+JVGmaecmY0Gk1Dgtz7fbWrSs1wOjXDcynKFVmBIHP8vDxq9LIxy5hbHFQwgzEtLZj9avbP2Dfvgm1aZwNCQNKeTuWlpDdxNwjKzApAAIDlRGsiQAeFVMbvfcWEwii1aXQAAEnxNNh94/CGYkdRsP4hxNovWwylW4EQazHeDZptXD0mD+jeunrWoGlnfBR3dPgf6CKwUcowYTa2hhgxANOe4i8/Bz/AOpRSYvAeQp23F/6X/zLTus5QfWAo4JhLadgsbi8zDDxpMsNlvXFbQyDrT9tkaA85pB3v0uIRxnjzqdO3ET1CjdNG2YwNpCOlKu+Gwb5ujE4aGbLlZDzHKKv7o3CbWpPvRLG3CAYJ96VLGuwkRtVFlYBiEu1drqvZ28Nl8Ty96o2dm4om4+OxaIHUqczyRPEhZgVPvbjbgmLjj/Ef3rP1Ys3eObXnr9aOPPIUbeBG/DYrZGC1VWxVwcyO76ToKh2lvri8QuTDYUW7fAEISfeABTDuTs6yQCbVsmeJRZ+lMm8qBVQKABroNBXAjeAZW5ttZMzPZW4WNxpz3rmReran0HCjG6+4OHvXD+Z7aGCx+IjpGgFadg1AsiB8H6Ut/Zqx+4jzb6CuNzYYwaru2L06niZ19pGEt4fHdlaQIgtW4AECe9J9YpaZmg5WKnqKYPtbY/f31P9kn/VS3bOg8qizyBWHcRjIOVPSRf7Kv3wSma5HVgB5QT+1Ads7PvYdgt62UJGZZ4MOoI0NOOyHIcQTrx8eFc/aIZw+GnWGcCene0rrDlQ06o4Yp6RN2Tsy/fcGyjd0g5xICkcDm5HnprpTe2KvBxcxGMu3bqqVEOxKgiGUEnSRx685oA2JcWbah2C5RoGMcByo5unbBcSAdRxHjR6q1BHHMWttfaz54HYfvDezVx11AEuXktCIBuPGkFYE8oGgoqXvW0yveukH4WuNBkye7PWmYiF06UnuZczrqeNaVQVieBMDVWuw6yzasYjFtkHaXIAEFiQBy48BTVs77OQVm9chui8B6mpfszHeveSfrT7WfrdVZXYa04xNL4boq7KhbZyTP/Z">
//       </div>
//       <div class="card-stacked">
//         <div class="card-content">
//         <h4>World Teacher</h4>
//           <p>Once called as the world's strongst agent who ended up becoming a teacher in his retirement to train a new generation of agents.</p>
//           <p>After many years of training his disciples, he was killed at the old age of 60 by the ploy of some secret organization.</p>
//           <p>Thus, he was reincarnated in another world with his memories intact.</p>
//         </div>
//         <div class="card-action">
//           <a href="https://bayabuscotranslation.com/">Here's the Link</a>
//           <a href="">Update</a>
//           <a href="">Comment</a>
//           <a href="">Ole~!</a>
//         </div>
//       </div>
//     </div>
//   </div>

// <div class="col s5 s5">
//     <div class="card horizontal">
//       <div class="card-image">
//         <img src="http://h.mangatown.com/store/manga/10422/ocover.jpg?v=1435281596">
//       </div>
//       <div class="card-stacked">
//         <div class="card-content">
//         <h4>Mahouka Koukou no Rettousei</h4>
//           <p>Magic.</p>
//           <p>It is a product of neither legends nor fairy tales, but instead has become a technology of reality since a time unknown to people.</p>
//           <p>Supernatural power became a technology systematized through magic, while magic became a technical skill. A “Supernatural Power User” became a “Magic Technician”.</p>
//           <p>Magic Technicians (in short, Magicians) are nurtured through Magic High Schools and Universities.</p>
//           <p>This is a story about:</p>
//           <p>A defective elder brother and low achiever.</p>
//           <p>A perfect, flawless younger sister and high achiever.</p>
//           <p>After both siblings entered a Magic High School,</p>
//           <p>The stage of daily turbulence was unveiled —.</p>
//         </div>
//         <div class="card-action">
//           <a href="#">Here's the Link</a>
//           <a href="">Update</a>
//           <a href="">Comment</a>
//           <a href="">Ole~!</a>
//         </div>
//       </div>
//     </div>
//   </div>

// <div class="col s5 s5">
//     <div class="card horizontal">
//       <div class="card-image">
//         <img src="data:image/jpeg;base64,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">
//       </div>
//       <div class="card-stacked">
//         <div class="card-content">
//         <h4>No Game No Life</h4>
//           <p>Sora and Shiro are brother and sister, and they both have reputations as brilliant NEET (Not in Education, Employment, or Training) hikikomori (shut-in) gamers. Their skills have even spawned urban legends all over the Internet. Unfortunately, these two gamers consider the real world to be just another "crappy game," and end up having the shock of a lifetime when they are summoned by a God named "Tet" to an alternate world.</p>
//         </div>
//         <div class="card-action">
//           <a href="#">Here's the Link</a>
//           <a href="">Update</a>
//           <a href="">Comment</a>
//           <a href="">Ole~!</a>
//         </div>
//       </div>
//     </div>
//   </div>

// <div class="col s5 s5">
//     <div class="card horizontal">
//       <div class="card-image">
//         <img src="http://www.readlightnovel.com/uploads/posters/only-sense-online.jpg">
//       </div>
//       <div class="card-stacked">
//         <div class="card-content">
//         <h4>Only Sense Online</h4>
//           <p>Yun is a novice MMO player who equipped only unpopular skills labelled as garbage. However, soon after everyone started to notice the “Strongest” play style which made full use of Support Magic and Items——?!</p>
//         </div>
//         <div class="card-action">
//           <a href="https://krytykal.org/only-sense/">Here's the Link</a>
//           <a href="">Update</a>
//           <a href="">Comment</a>
//           <a href="">Ole~!</a>
//         </div>
//       </div>
//     </div>
//   </div>

// <div class="col s5 s5">
//     <div class="card horizontal">
//       <div class="card-image">
//         <img src="http://www.readlightnovel.com/uploads/posters/kyuuketsu-hime-wa-barairo-no-yume-o-miru.jpg">
//       </div>
//       <div class="card-stacked">
//         <div class="card-content">
//         <h4>Kyuuketsu Hime wa Barairo no Yume o Miru</h4>
//           <p>I had expected to die in an accident, but instead I woke up as my vampire princess character from “Eternal Horizon Online”. It turns out that I, along with my assets, territories, and my pets from the game were all transferred to a similar world. When fighting around, I was clearly in a higher position than my followers who are stronger than me. Due to these circumstances, I also had no choice but to reign as the ‘me’ in the game. In addition, demons, beasts, and even the demi-humans of this world turned to follow me as well, and before I realized it I had established a huge empire. Furthermore, mysterious enemies appeared, and caused me trouble to no end…!</p>
//         </div>
//         <div class="card-action">
//           <a href="https://madospicy.wordpress.com/">Here's the Link</a>
//           <a href="">Update</a>
//           <a href="">Comment</a>
//           <a href="">Ole~!</a>
//         </div>
//       </div>
//     </div>
//   </div>

// <div class="col s5 s5">
//     <div class="card horizontal">
//       <div class="card-image">
//         <img src="http://www.readlightnovel.com/uploads/posters/alice-tale-in-phantasmagoria.jpg">
//       </div>
//       <div class="card-stacked">
//         <div class="card-content">
//         <h4>Alice Tale in Phantasmagoria</h4>
//           <p>Arisugawa Akito suddenly finds himself in another world and another body, namely the one of the game character he just created. Female, game character. Alice. When there is no virtual reality technology around. Join him/her as he/she struggles with the world, her body and the puppies after her life as the dream of being the strongest feels suddenly far away…. as does being a man.</p>
//         </div>
//         <div class="card-action">
//           <a href="http://raisingthedead.ninja/current-projects/alice-tale/">Here's the Link</a>
//           <a href="">Update</a>
//           <a href="">Comment</a>
//           <a href="">Ole~!</a>
//         </div>
//       </div>
//     </div>
//   </div>

// <div class="col s5 s5">
//     <div class="card horizontal">
//       <div class="card-image">
//         <img src="http://www.readlightnovel.com/uploads/posters/the-guilds-cheat-receptionist.jpg">
//       </div>
//       <div class="card-stacked">
//         <div class="card-content">
//         <h4>The Guild's Cheat Receptionist</h4>
//           <p>One day, due to God’s mistake, Tomoaki Akino’s life was accidentally snatched away. Though he gratefully accepted the cheat offered as an apology and reincarnated, he was reborn as a female elf! Then time passed, and Tomoaki now works as the intelligent and beautiful receptionist named Ilya in the Lunéville branch of the Guild Association. In a world of swords and magic, her job in the guild begins today.</p>
//         </div>
//         <div class="card-action">
//           <a href="https://zirusmusings.com/gcr-toc/">Here's the Link</a>
//           <a href="">Update</a>
//           <a href="">Comment</a>
//           <a href="">Ole~!</a>
//         </div>
//       </div>
//     </div>
//   </div>