function nextPage() {
  window.location.href = "movies/index1.html";
}

function hindi() {
  document.querySelector(".b1").textContent =
    "अनलिमिटेड फ़िल्में, टीवी शो के साथ भी बहुत कुछ";
  document.querySelector(".b2").textContent =
    "जहां चाहें देखें. जब चाहें कैंसल करें.";
  document.querySelector(".b3").textContent =
    "देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें.";
  document.querySelector(".bt").placeholder = "ईमेल पता";
  document.querySelector(".ms").textContent = "शुरू करें";
  document.querySelector("#a").textContent = "अपने टीवी पर आनंद लें";
  document.querySelector("#b").textContent =
    "स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray प्लेयर के साथ ही दूसरे डिवाइस पर भी देखें.";
  document.querySelector("#c").textContent =
    "ऑफ़लाइन देखने के लिए अपने शो डाउनलोड करें";
  document.querySelector("#d").textContent =
    "अपने पसंदीदा शो और फ़िल्में सेव करें, ताकि आप कभी भी इन्हें देख सकें.";
  document.querySelector("#e").textContent = "हर जगह देखें";
  document.querySelector("#f").textContent =
    "बिना ज़्यादा पेमेंट किए, अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें.";
  document.querySelector("#g").textContent = "बच्चों के लिए प्रोफ़ाइल बनाएं";
  document.querySelector("#h").textContent =
    "बच्चों को जाने दें अपने पसंदीदा किरदारों के साथ उस रोमांचक सफ़र पर जो सिर्फ़ उनके लिए ही है - आपकी मेंबरशिप के साथ फ़्री.";
  document.querySelector("#i").textContent = "अक्सर पूछे जाने वाले सवाल";
  document.querySelector("#a1").textContent = "Netflix क्या है?";
  document.querySelector("#b1").textContent = "Netflix की कीमत कितनी है?";
  document.querySelector("#c1").textContent = "मैं कहां देख सकता हूं?";
  document.querySelector("#d1").textContent = "मैं कैसे कैंसल करूं?";
  document.querySelector("#e1").textContent =
    "मैं Netflix पर क्या देख सकता/सकती हूं?";
  document.querySelector("#f1").textContent =
    "क्या Netflix बच्चों के लिए ठीक है?";
  document.querySelector("#sp").textContent =
    "देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें.";
  document.querySelector("#sn").textContent = "साइन";
  document.querySelector("#mp").placeholder = "ईमेल पता";
  document.querySelector(".fm").textContent = "शुरू करें";
}

function englist() {
  document.querySelector(".b1").textContent =
    "Unlimited movies, TV shows and more";
  document.querySelector(".b2").textContent = "Watch anywhere. Cancel anytime.";
  document.querySelector(".b3").textContent =
    "Ready to watch? Enter your email to create or restart your membership.";
  document.querySelector(".bt").placeholder = "Email Address";
  document.querySelector(".ms").textContent = "Get Started";
  document.querySelector("#a").textContent = "Enjoy on your TV";
  document.querySelector("#b").textContent =
    "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.";
  document.querySelector("#c").textContent =
    "Download your shows to watch offline";
  document.querySelector("#d").textContent =
    "Save your favourites easily and always have something to watch.";
  document.querySelector("#e").textContent = "Watch everywhere";
  document.querySelector("#f").textContent =
    "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.";
  document.querySelector("#g").textContent = "Create profiles for kids";
  document.querySelector("#h").textContent =
    "Send children on adventures with their favourite characters in a space made just for them—free with your membership.";
  document.querySelector("#i").textContent = "Frequently Asked Questions";
  document.querySelector("#a1").textContent = "What is Netflix?";
  document.querySelector("#b1").textContent = "How much does Netflix cost?";
  document.querySelector("#c1").textContent = "Where can I watch?";
  document.querySelector("#d1").textContent = "How do I cancel?";
  document.querySelector("#e1").textContent = "What can I watch on Netflix?";
  document.querySelector("#f1").textContent = "Is Netflix good for kids?";
  document.querySelector("#sp").textContent =
    "Ready to watch? Enter your email to create or restart your membership.";
  document.querySelector("#sn").textContent = "Sign In";
  document.querySelector("#mp").placeholder = "Email Address";
  document.querySelector(".fm").textContent = "Get Started";
}

function changeLanguage() {
  let selectedLanguage = document.getElementById("btn").value;
  if (selectedLanguage == "en") {
    englist();
  } else {
    hindi();
  }
}
const boxContents = {
  "What is Netflix?":
    "Netflix is a streaming service that offers a wide variety of TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
  "How much does Netflix cost?":
    "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
  "Where can I watch?":
    "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
  "How do I cancel?":
    "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  "What can I watch on Netflix?":
    "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  "Is Netflix good for kids?":
    "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
  "Netflix क्या है?":
    "Netflix एक स्ट्रीमिंग सर्विस है जिसके ज़रिए आप हज़ारों इंटरनेट-कनेक्टेड डिवाइस पर तरह-तरह के अवॉर्ड विजेता टीवी शो, फ़िल्में, ऐनिमे, डॉक्यूमेंट्रीज़ का लुत्फ़ उठा सकते हैं.",
  "Netflix की कीमत कितनी है?":
    "हर महीने की तय फ़ी देकर अपने स्मार्टफ़ोन, टैबलेट, स्मार्ट टीवी, लैपटॉप, या स्ट्रीमिंग डिवाइस पर Netflix देखें. हर महीने ₹149 से ₹649 तक के प्लान. कोई एक्सट्रा कीमत या कॉन्ट्रैक्ट नहीं.",
  "मैं कहां देख सकता हूं?":
    "कहीं भी, कभी भी देखें अपने पर्सनल कंप्यूटर से या स्मार्ट टीवी, स्मार्टफ़ोन, टैबलेट, स्ट्रीमिंग मीडिया प्लेयर और गेम कंसोल सहित Netflix ऐप ऑफ़र करने वाले किसी भी इंटरनेट-कनेक्टेड डिवाइस पर तुरंत देखने के लिए, वेब पर netflix.com पर अपने Netflix अकाउंट में साइन इन करें.",
  "मैं कैसे कैंसल करूं?":
    "Netflix लचीला है. कोई परेशान करने वाले कॉन्ट्रैक्ट नहीं और कोई बंधन नहीं हैं. आप आसानी से दो क्लिक में अपना अकाउंट ऑनलाइन कैंसल कर सकते हैं. कोई कैंसलेशन फ़ीस नहीं है – अपना अकाउंट कभी भी शुरू या बंद करें.",
  "मैं Netflix पर क्या देख सकता/सकती हूं?":
    "Netflix की बहुत बड़ी लाइब्रेरी में फ़ीचर फ़िल्मों, डॉक्यूमेंट्री, टीवी शो, ऐनिमे, अवॉर्ड-विनिंग Netflix ओरिजिनल्स के अलावा और भी बहुत कुछ है. आप जितना चाहें, कभी भी देखें.",
  "क्या Netflix बच्चों के लिए ठीक है?":
    "आपकी मेंबरशिप में Netflix किड्स एक्सपीरियंस शामिल है. बच्चे अपनी तरह से पारिवारिक टीवी शो और फ़िल्मों का आनंद लेते हैं, लेकिन आप उनके द्वारा देखे जाने वाले कॉन्टेंट को कंट्रोल कर सकते हैं.",

};


const plusIcons = document.querySelectorAll(".q");
const val = document.querySelectorAll(".plus-icon");

plusIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    const questionDiv = icon.closest(".q");
    const questionText = questionDiv.textContent.trim();

    if (
      questionDiv.nextElementSibling &&
      questionDiv.nextElementSibling.classList.contains("description-box")
    ) {
      questionDiv.nextElementSibling.remove(); 
      questionDiv.querySelector(".cross-icon").style.display = "none"; 
      questionDiv.querySelector(".plus-icon").style.display = "block"; 
    } else {
      const descriptionBox = document.createElement("div");
      descriptionBox.classList.add("description-box");
      descriptionBox.textContent = boxContents[questionText];

      questionDiv.insertAdjacentElement("afterend", descriptionBox);
      setTimeout(() => {
        descriptionBox.style.opacity = "1"; 
        descriptionBox.style.height = "auto"; 
        descriptionBox.style.padding = "19px";
        descriptionBox.style.fontSize = "25px";
        descriptionBox.style.display = "flex";
        descriptionBox.style.justifyContent = "start";
        descriptionBox.style.alignItems = "center";
        descriptionBox.style.transition = "0.20s";
        descriptionBox.style.textAlign = "unset";
      }, 10); 

      questionDiv.querySelector(".cross-icon").style.display = "block"; 
      questionDiv.querySelector(".plus-icon").style.display = "none"; 
    }
  });
});
