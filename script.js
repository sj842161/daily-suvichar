const quotes = [
  { quote: "सपने वो नहीं जो हम सोते वक्त देखते हैं, सपने वो हैं जो हमें सोने नहीं देते।", author: "ए. पी. जे. अब्दुल कलाम" },
  { quote: "आपका भविष्य आज आप क्या करते हैं पर निर्भर करता है।", author: "महात्मा गांधी" },
  { quote: "कड़ी मेहनत का कोई विकल्प नहीं होता।", author: "थॉमस एडिसन" },
  { quote: "सफलता की खुशी मनाना ठीक है, लेकिन असफलता से सीखना ज़रूरी है।", author: "बिल गेट्स" },
  { quote: "जो बदलता है वही आगे बढ़ता है।", author: "चाणक्य" },
  { quote: "एक सकारात्मक सोच आपके पूरे दिन को बदल सकती है।", author: "अज्ञात" },
  { quote: "हार मत मानो, महान चीजें समय लेती हैं।", author: "अज्ञात" },
  { quote: "जैसा आप सोचते हैं, वैसा ही आप बनते हैं।", author: "भगवद गीता" },
  { quote: "जिसके पास धैर्य है वह जो चाहे पा सकता है।", author: "बेंजामिन फ्रैंकलिन" },
  { quote: "उठो, जागो और तब तक मत रुको जब तक लक्ष्य ना प्राप्त हो।", author: "स्वामी विवेकानंद" },
  { quote: "शिक्षा सबसे शक्तिशाली हथियार है जिससे आप दुनिया को बदल सकते हैं।", author: "नेल्सन मंडेला" },
  { quote: "जहाँ चाह वहाँ राह।", author: "अज्ञात" },
  { quote: "अपनी क्षमताओं पर विश्वास रखें।", author: "लिओनार्डो दा विंची" },
  { quote: "हर दिन एक नई शुरुआत है।", author: "अज्ञात" },
  { quote: "धैर्य का फल मीठा होता है।", author: "अज्ञात" },
  { quote: "सपनों को हकीकत में बदलने की हिम्मत रखो।", author: "वाल्ट डिज़नी" },
  { quote: "संघर्ष के बिना कोई महानता नहीं।", author: "अज्ञात" },
  { quote: "जिंदगी में कभी हार मत मानो।", author: "अज्ञात" },
  { quote: "अपने काम से प्रेम करो।", author: "कन्फ्यूशियस" },
  { quote: "छोटी-छोटी चीजें महान बदलाव लाती हैं।", author: "अज्ञात" },
  { quote: "जो हम सोचते हैं, हम वही बन जाते हैं।", author: "बुद्ध" },
  { quote: "सपनों की सीमा नहीं होती।", author: "अज्ञात" },
  { quote: "असफलता सफलता की पहली सीढ़ी है।", author: "अज्ञात" },
  { quote: "मन को शुद्ध रखो, सब कुछ साफ नजर आएगा।", author: "महात्मा गांधी" },
  { quote: "समय का सदुपयोग ही सफलता की कुंजी है।", author: "अज्ञात" },
  { quote: "सकारात्मक सोच से हर मुश्किल आसान हो जाती है।", author: "अज्ञात" },
  { quote: "अगर आप चाहते हैं तो रास्ता निकलता है।", author: "अज्ञात" },
  { quote: "बिना प्रयास के सफलता नहीं मिलती।", author: "अज्ञात" },
  { quote: "अपने लक्ष्य पर फोकस करो, सफलता आपके कदम चूमेगी।", author: "अज्ञात" },
  { quote: "अपने आप को बेहतर बनाने में समय लगाओ।", author: "अज्ञात" },
  { quote: "जो सोच सकता है, वह कर सकता है।", author: "नेपोलियन हिल" },
  { quote: "बड़े सपने देखो और उन्हें पूरा करने का प्रयास करो।", author: "अज्ञात" },
  { quote: "सपने सच होते हैं, अगर हम उन्हें पाने की कोशिश करें।", author: "अज्ञात" },
  { quote: "शांत दिमाग से हर समस्या का समाधान निकलता है।", author: "अज्ञात" },
  { quote: "खुद पर विश्वास ही सफलता की पहली सीढ़ी है।", author: "अज्ञात" },
  { quote: "जीवन में उतार-चढ़ाव आते रहते हैं, साहस मत खोना।", author: "अज्ञात" },
  { quote: "जीवन को जीना है तो खुद पर भरोसा रखो।", author: "अज्ञात" },
  { quote: "हर दिन कुछ नया सीखो।", author: "अज्ञात" },
  { quote: "जो मनुष्य खुद पर विश्वास करता है, वही सफल होता है।", author: "अज्ञात" },
  { quote: "आज का प्रयास कल की सफलता है।", author: "अज्ञात" },
  { quote: "आशा कभी मत खोना।", author: "अज्ञात" },
  { quote: "सफलता का आनंद तभी आता है जब संघर्ष भी हो।", author: "अज्ञात" },
  { quote: "कामयाबी उन्हीं को मिलती है जो प्रयास करते हैं।", author: "अज्ञात" },
  { quote: "अपने सपनों को जीना सीखो।", author: "अज्ञात" },
  { quote: "जितना बड़ा लक्ष्य, उतनी बड़ी मेहनत।", author: "अज्ञात" },
  { quote: "जीवन में जो चाहे, वह कर सकता है।", author: "अज्ञात" },
  { quote: "बदलाव से डरना नहीं चाहिए।", author: "अज्ञात" },
  { quote: "अपने दिल की सुनो और आगे बढ़ो।", author: "अज्ञात" },
  { quote: "सपनों को पूरा करना किसी जादू से कम नहीं।", author: "अज्ञात" },
  { quote: "जहाँ विश्वास है, वहाँ रास्ता है।", author: "अज्ञात" },
  { quote: "कठिनाइयों से मत घबराओ, वे आपकी ताकत बढ़ाती हैं।", author: "अज्ञात" },
  { quote: "खुद को बदलो, दुनिया अपने आप बदलेगी।", author: "अज्ञात" },
  { quote: "परिश्रम से बढ़कर कोई औषधि नहीं।", author: "अज्ञात" },
  { quote: "मंजिल दूर नहीं, बस कदम बढ़ाओ।", author: "अज्ञात" },
  { quote: "हर दिन एक नई चुनौती है।", author: "अज्ञात" },
  { quote: "दूसरों की मदद करना जीवन को सुंदर बनाता है।", author: "अज्ञात" },
  { quote: "धैर्य से काम लो, फल मीठा मिलेगा।", author: "अज्ञात" },
  { quote: "सपनों को तोड़ने की बजाय उन्हें पूरा करो।", author: "अज्ञात" },
  { quote: "हर संघर्ष के बाद सफलता है।", author: "अज्ञात" },
  { quote: "सपने देखो और उन्हें पूरा करने का साहस रखो।", author: "अज्ञात" },
  { quote: "जिंदगी में आगे बढ़ने के लिए खुद को सुधारो।", author: "अज्ञात" },
  { quote: "जो लोग हार मान लेते हैं, वे कभी जीत नहीं पाते।", author: "अज्ञात" },
  { quote: "सपनों की कोई सीमा नहीं होती।", author: "अज्ञात" },
  { quote: "अपने जीवन का नायक खुद बनो।", author: "अज्ञात" },
  { quote: "विफलता से मत डरना, वह सफलता की सीढ़ी है।", author: "अज्ञात" },
  { quote: "जो मेहनत करता है, वह कभी हारता नहीं।", author: "अज्ञात" },
  { quote: "जीवन में हमेशा सकारात्मक रहो।", author: "अज्ञात" },
  { quote: "समय की कदर करना सीखो।", author: "अज्ञात" },
  { quote: "जो सपने देखते हैं, वही दुनिया बदलते हैं।", author: "अज्ञात" },
  { quote: "अपने लक्ष्य के प्रति समर्पित रहो।", author: "अज्ञात" },
  { quote: "हर असफलता एक नई सीख है।", author: "अज्ञात" },
  { quote: "खुद पर विश्वास करो और आगे बढ़ो।", author: "अज्ञात" },
  { quote: "जो कोई प्रयास करता है, वही सफल होता है।", author: "अज्ञात" },
  { quote: "अपने काम में ईमानदारी रखें।", author: "अज्ञात" },
  { quote: "जीवन में हमेशा आगे बढ़ते रहो।", author: "अज्ञात" },
  { quote: "परिवर्तन ही जीवन का नियम है।", author: "अज्ञात" },
  { quote: "आशा के बिना जीवन अधूरा है।", author: "अज्ञात" },
  { quote: "अपने सपनों को सच करने का प्रयास कभी मत छोड़ो।", author: "अज्ञात" },
  { quote: "जो कभी हार नहीं मानता, वही विजेता होता है।", author: "अज्ञात" },
  { quote: "कठिनाइयाँ जीवन का हिस्सा हैं, उनसे सीखो।", author: "अज्ञात" },
  { quote: "जो कर्म करता है, फल उसकी प्रतीक्षा करता है।", author: "अज्ञात" },
  { quote: "सपने देखने वालों के लिए ही दुनिया में कुछ अलग है।", author: "अज्ञात" },
  { quote: "सफलता का कोई शॉर्टकट नहीं होता।", author: "अज्ञात" },
  { quote: "जिंदगी में सबसे बड़ा शिक्षक अनुभव है।", author: "अज्ञात" },
  { quote: "धैर्य से बड़ी से बड़ी बाधा भी पार हो जाती है।", author: "अज्ञात" },
  { quote: "मन को मजबूत करो, सफलता मिलेगी।", author: "अज्ञात" },
  { quote: "अच्छे विचारों से जीवन संवरता है।", author: "अज्ञात" },
  { quote: "अपने सपनों को उड़ान दो।", author: "अज्ञात" },
  { quote: "सफलता आपके कदम चूमेगी यदि आप हार न मानो।", author: "अज्ञात" },
  { quote: "जीवन में हर दिन एक नया मौका है।", author: "अज्ञात" },
  { quote: "जो अपने आप पर विश्वास करता है, सफलता उसकी गारंटी है।", author: "अज्ञात" },
  { quote: "सपनों को साकार करने की ताकत आपके भीतर है।", author: "अज्ञात" }
];

const now = new Date();
const start = new Date(now.getFullYear(), 0, 0);
const diff = now - start;
const oneDay = 1000 * 60 * 60 * 24;
const dayOfYear = Math.floor(diff / oneDay);

function showDailyQuote() {
  const index = dayOfYear % quotes.length;
  document.getElementById("quote").textContent = quotes[index].quote;
  document.getElementById("author").textContent = `— ${quotes[index].author}`;
}
showDailyQuote();

const copyBtn = document.getElementById("copyBtn");
const copyMsg = document.getElementById("copyMsg");

copyBtn.addEventListener("click", () => {
  const index = dayOfYear % quotes.length;
  const textToCopy = `${quotes[index].quote} — ${quotes[index].author}`;
  navigator.clipboard.writeText(textToCopy).then(() => {
    copyMsg.style.display = "block";
    setTimeout(() => {
      copyMsg.style.display = "none";
    }, 2000);
  });
});

const shareText = encodeURIComponent(`${quotes[dayOfYear % quotes.length].quote} — ${quotes[dayOfYear % quotes.length].author}`);
const pageUrl = encodeURIComponent(window.location.href);

document.getElementById("shareWhatsapp").onclick = () => {
  window.open(`https://wa.me/?text=${shareText}%20${pageUrl}`, "_blank");
};
document.getElementById("shareTwitter").onclick = () => {
  window.open(`https://twitter.com/intent/tweet?text=${shareText}&url=${pageUrl}`, "_blank");
};
document.getElementById("shareFacebook").onclick = () => {
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}&quote=${shareText}`, "_blank");
};
