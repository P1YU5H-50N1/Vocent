var isChrome = !!window.chrome;
if (!isChrome) {
	alert("Currently Vocent is available in Chrome only");
}

let details ={}


const send_mail = async (details) => {
	let axiosConfig = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	try {
		let res = await axios.post("/", details, axiosConfig);
		console.log(res, "res");
		converse(
			"Mail Sent Successfully. Who would you like to send another email?"
		);
	} catch (err) {
		console.log("ERR", err, err.response);
		converse("Error Occured")
	}
	// console.log("mail",details)
	details = {}
	console.log("mail_reset",details)

				
};
function validateEmail(email) {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}




const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  if (e.results[0].isFinal) {


    // if (text.includes("how are you")) {
    //   p = document.createElement("p");
    //   p.classList.add("replay");
    //   p.innerText = "I am fine";
    //   texts.appendChild(p);
    // }
    // if (
    //   text.includes("what's your name") ||
    //   text.includes("what is your name")
    // ) {
    //   p = document.createElement("p");
    //   p.classList.add("replay");
    //   p.innerText = "My Name is Cifar";
    //   texts.appendChild(p);
    // }
    // if (text.includes("open my YouTube")) {
    //   p = document.createElement("p");
    //   p.classList.add("replay");
    //   p.innerText = "opening youtube channel";
    //   texts.appendChild(p);
    //   console.log("opening youtube");
    //   window.open("https://www.youtube.com/channel/UCdxaLo9ALJgXgOUDURRPGiQ");
    // }
    if (text.includes("at the rate") || text === "Piyush") {
			console.log(text, "text");
			reciever =
				text === "Piyush"
					? "me.piyush.360@gmail.com"
					: text.replace("at the rate ", "@").replace(" ", "");
			if (validateEmail(reciever)) {
				converse(
					`You said : ${reciever} \n What would you like to say?`
				);
				details["receiver_email"] = reciever;
				console.log(details);
			} else {
				converse("Invalid email! Please say a valid one");
			}
		} else {
			if (details["receiver_email"]) {
				details["message"] = text;
				send_mail(details)
				
			} else {
				converse(
					"Can't understand please try again to tell reciever's email"
				);
			}
		}
    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();




const synth = window.speechSynthesis;

const speak = (message) => {
	// Check if speaking
	if (synth.speaking) {
		console.error("Already speaking...");
		return;
	}
	if (message !== "") {
		// Get speak text
		const speakText = new SpeechSynthesisUtterance(message);

		// Speak end
		speakText.onend = (e) => {
			console.log("Done speaking...");
			// body.style.background = '#141414';
		};

		// Speak error
		speakText.onerror = (e) => {
			console.error("Something went wrong", e);
		};
		// Set pitch and rate
		speakText.rate = 1;
		speakText.pitch = 1;
		// Speak
		synth.speak(speakText);
	}
};

function converse(message) {
	p = document.createElement("p");
	p.classList.add("reply");
	p.innerText = message;
	speak(message);
	texts.appendChild(p);
}

converse(
	"Hi, I will convey your messages via email, who would you like to send this email?"
);


// var isChrome = !!window.chrome;
// if (!isChrome) {
// 	alert("Currently Vocent is available in Chrome only");
// }

// const texts = document.getElementsByClassName("texts")[0];

// let reciever = "";

// let details = {};

// window.SpeechRecognition =
// 	window.SpeechRecognition || window.webkitSpeechRecognition;

// const recognition = new SpeechRecognition();
// recognition.interimResults = true;
// let p = document.createElement("p");

// function validateEmail(email) {
// 	const re =
// 		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// 	return re.test(String(email).toLowerCase());
// }

// const send_mail = async (details) => {
// 	let axiosConfig = {
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 	};
// 	try {
// 		let res = await axios.post("/", details, axiosConfig);
// 		console.log(res, "res");
// 	} catch (err) {
// 		console.log("ERR", err, err.response);
// 	}
// };

// recognition.addEventListener("result", (e) => {
// 	console.log(e);
// 	texts.appendChild(p);
// 	const text = Array.from(e.results)
// 		.map((result) => result[0])
// 		.map((result) => result.transcript)
// 		.join("");
// 	console.log(text);
// 	p.innerText = text;
// 	if (e.results[0].isFinal) {
// 		if (text.includes("at the rate") || text === "Piyush") {
// 			console.log(text, "text");
// 			reciever =
// 				text === "Piyush"
// 					? "me.piyush.360@gmail.com"
// 					: text.replace("at the rate ", "@").replace(" ", "");
// 			if (validateEmail(reciever)) {
// 				converse(
// 					`You said : ${reciever} \n What would you like to say?`
// 				);
// 				details["receiver_email"] = reciever;
// 				console.log(details);
// 			} else {
// 				converse("Invalid email! Please say a valid one");
// 			}
// 		} else {
// 			if (details["receiver_email"]) {
// 				details["message"] = text;
// 				axios
// 					.post("http://vocent.pythonanywhere.com/", details)
// 					.then((res) => {
// 						converse("Email sent successfully");
// 					})
// 					.error((err) => {
// 						converse("error occured");
// 					});
// 			} else {
// 				converse(
// 					"Can't understand please try again to tell reciever's email"
// 				);
// 			}
// 		}

// 		p = document.createElement("p");
// 	}
// });

// recognition.addEventListener("end", () => {
// 	recognition.start();
// });

// recognition.start();

// const synth = window.speechSynthesis;

// const speak = (message) => {
// 	// Check if speaking
// 	if (synth.speaking) {
// 		console.error("Already speaking...");
// 		return;
// 	}
// 	if (message !== "") {
// 		// Get speak text
// 		const speakText = new SpeechSynthesisUtterance(message);

// 		// Speak end
// 		speakText.onend = (e) => {
// 			console.log("Done speaking...");
// 			// body.style.background = '#141414';
// 		};

// 		// Speak error
// 		speakText.onerror = (e) => {
// 			console.error("Something went wrong", e);
// 		};
// 		// Set pitch and rate
// 		speakText.rate = 1;
// 		speakText.pitch = 1;
// 		// Speak
// 		synth.speak(speakText);
// 	}
// };

// function converse(message) {
// 	p = document.createElement("p");
// 	p.classList.add("reply");
// 	p.innerText = message;
// 	speak(message);
// 	texts.appendChild(p);
// }

// converse(
// 	"Hi, I will convey your messages via email, who would you like to send this email?"
// );
