let card= document.getElementById("firstcard");
 function createCard([ profileimg,username,location,]){

 		let code= `

 					<div class="wrapper_top">
				<a href="" class="profile_img_a"><img src="${profileimg}" class="profile_img">
				</a>
				
				<div class="profile_desc">
					<a href=""><h4>${username}</h4></a>
					<a href=""><h5>${location}</h5></a>
				</div>
				<a href="" class="ellipsis_img_a"><img src="img/ellipsis_h.png" class="ellipsis_img">
				</a>
			</div>
 		`


 			card.innerHTML += code 

 };

 let item1=["img/izzy2.jpg",
 "Gilbertsize","PH",];
 createCard(item1);