import {Observable} from "rxjs/Rx";

window.onload=()=>{
	let planets=["Earth","Mars","Venus","Vulcan","Tatooine"];
	let btn = document.querySelector("#btn");
	let header = document.querySelector("#heading");
	let obs = Observable.fromEvent(btn,"click");
	obs.scan(i=>i+1,0)
	.subscribe((i)=>{
		header.textContent=`Howzit from ${planets[i%5]}`;
	});
};
