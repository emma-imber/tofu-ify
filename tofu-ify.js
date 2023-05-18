function getTofuPhoto() {
  const tofuPhotos = [
    "https://i.guim.co.uk/img/media/6c720316596571ad644b81aa539e2e58a8d886f7/0_0_1391_1402/master/1391.jpg?width=620&quality=45&dpr=2&s=none",
    "https://i.guim.co.uk/img/media/666ce33300047f74f8e9c99e8afd63b2578405ad/751_439_5687_5689/master/5687.jpg?width=620&quality=45&dpr=2&s=none",
    "https://i.guim.co.uk/img/media/bf4f4f3b2638f30bc14e449a8cb7931f1db2518e/0_326_3715_3714/master/3715.jpg?width=620&quality=45&dpr=2&s=none",
    "https://i.guim.co.uk/img/media/1c11336bd9feb57492928fdfead1e5a2410e7957/0_0_2979_3500/master/2979.jpg?width=1300&quality=45&dpr=2&s=none",
    "https://i.guim.co.uk/img/media/7ade46f89cdee6fb7077c0e997ed0e50d4bbe431/0_0_4787_5530/master/4787.jpg?width=620&quality=45&dpr=2&s=none",
    "https://i.guim.co.uk/img/media/c65ff269788925768078cf065aa9f43a6b145831/0_0_2979_3500/master/2979.jpg?width=1300&quality=45&dpr=2&s=none",
    "https://i.guim.co.uk/img/media/e475f79de49d03f10fe5b5cb9957b5a6a48c9dbe/0_136_2048_1229/master/2048.jpg?width=1300&quality=45&dpr=2&s=none",
    "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/10/21/1413892960244/Marinated-tofu-stir-fry-i-014.jpg?width=620&quality=45&dpr=2&s=none",
    "https://i.guim.co.uk/img/media/19fd472d7979f14284888d5337d388d9da9127b8/309_1474_3622_3622/master/3622.jpg?width=1125&quality=45&dpr=2&s=none",
    "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/4/7/1428424174580/ea3cdd57-5f7c-458b-9348-6c9b55161dc6-2060x1236.jpeg?width=620&quality=45&dpr=2&s=none",
    "https://i.guim.co.uk/img/media/91c2632d253693b69ec76b11155eec0452bf0644/321_0_3673_3673/master/3673.jpg?width=620&quality=45&dpr=2&s=none",
    "https://i.guim.co.uk/img/media/d6b9542e1fe5df3bf890b5c023ba0014213ce470/691_654_5146_3088/master/5146.jpg?width=620&quality=45&dpr=2&s=none",
    "https://i.guim.co.uk/img/media/ea7a7d8f0e3c1b2714ef40b088f9b10904eb1aa1/0_78_3408_3677/master/3408.jpg?width=620&quality=45&dpr=2&s=none",
    "https://i.guim.co.uk/img/media/81c53f18ba92acf6c14439b28141d9b62450232f/0_1211_3840_3840/master/3840.jpg?width=620&quality=45&dpr=2&s=none",
    "https://i.guim.co.uk/img/media/c7d68cbdc8ea90792de9a38fcda289115cc26a05/0_777_3731_4185/master/3731.jpg?width=620&quality=45&dpr=2&s=none",
    "https://i.guim.co.uk/img/media/9be7857e3fdc260c293c02f16b9874bbc3938d72/0_1448_5792_5792/master/5792.jpg?width=1300&quality=45&dpr=2&s=none",
    "https://i.guim.co.uk/img/media/d37bb3eed9bdab3baa307d247f5fb8dd6e573b1d/0_0_3723_4375/master/3723.jpg?width=620&quality=45&dpr=2&s=none",
    "https://i.guim.co.uk/img/media/eeee261af362d9f84ca608009c5f8724610f0874/0_0_3630_4266/master/3630.jpg?width=620&quality=45&dpr=2&s=none"
  ];

  let randomIndex = Math.floor(Math.random() * 17);

  return tofuPhotos[randomIndex];
}

const meatListLowerCase = [
  "chicken",
  "beef",
  "lamb",
  "pork",
  "sausage",
  "fish",
  "pancetta",
  "bacon",
  "meatballs",
  "salmon",
  "tuna",
  "crab",
  "mackerel",
  "mutton",
  "goat",
  "meat",
  "duck",
  "rabbit",
  "venison",
  "steak",
  "ham",
  "turkey"
]

const meatListUpperCase = [
  "Chicken",
  "Beef",
  "Lamb",
  "Pork",
  "Sausage",
  "Fish",
  "Pancetta",
  "Bacon",
  "Meatballs",
  "Salmon",
  "Tuna",
  "Crab",
  "Mackerel",
  "Mutton",
  "Goat",
  "Meat",
  "Duck",
  "Rabbit",
  "Venison",
  "Steak",
  "Ham",
  "Turkey"
]

function replacePhotos() {
  let docPics = document.getElementsByTagName("picture");

  for (let i = 0; i < docPics.length; i++) {
    let image = docPics[i].lastChild;
    for(let m = 0; m < meatListLowerCase.length; m++) {
      if (image?.alt.includes(meatListLowerCase[m])) {
        let replacementImg = image;
        replacementImg.src = getTofuPhoto();
        docPics[i].replaceChildren();
        docPics[i].appendChild(replacementImg);
      }
    }
  }
}

function replaceText() {
  for(let j = 0; j < meatListLowerCase.length; j++) {
    var regexp = new RegExp(meatListLowerCase[j], "g");
    document.body.innerHTML = document.body.innerHTML.replace(regexp, "tofu");
  }

  for(let k = 0; k < meatListUpperCase.length; k++) {
    var regexp = new RegExp(meatListUpperCase[k], "g");
    document.body.innerHTML = document.body.innerHTML.replace(regexp, "Tofu");
  }
}

function replaceRightAd() {
  let rightAd = document.getElementById("dfp-ad--right");
  if(rightAd) {
    rightAd.replaceChildren();
    let newAd = new Image(300);
    newAd.src = "https://shop.newsthump.com/wp-content/uploads/2022/10/Guardian-reading-tofu-eating-wokerati-T-shirt-red-768x900.jpg";
    rightAd.appendChild(newAd);
  }
}

function replaceTopAd() {
  let topAd = document.getElementById("dfp-ad--top-above-nav");
  topAd.replaceChildren();
  let newAd = new Image(1080);
  if(topAd.classList.contains("ad-slot--fluid")) {
    newAd.style = "margin-left:80px";
  }
  newAd.src = chrome.runtime.getURL("topabovenav.png");
  topAd.appendChild(newAd);
}

replacePhotos()
replaceText()
replaceRightAd()
replaceTopAd()
