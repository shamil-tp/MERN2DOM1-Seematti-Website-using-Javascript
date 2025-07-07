// console.log("hello");
var banner = document.createElement('marquee');
banner.innerText = "FREE SHIPPING ALL OVER INDIA     |    100% SECURE PAYMENTS     |    14 DAYS MONEY BACK GURANTEE     |    EASY RETURNS";
banner.setAttribute("class","marquee");
banner.classList.add("bg-danger","text-white","py-1");
// banner.style.padding="5px 0 5px 0";

var nav = document.createElement("div");
nav.setAttribute("class","nav-bar")
nav.classList.add("sticky-top")
nav.style.width = "100%";
nav.style.backgroundColor = "white";
nav.style.color = "black";
nav.style.padding = "10px 20px";
// nav.innerText = "hello";

var row = document.createElement("div");
row.setAttribute("class","row");
nav.append(row);

var navbarLeft = document.createElement("div");
navbarLeft.setAttribute("class","col-lg-7");
navbarLeft.classList.add("col-md-12","d-md-flex","col-6");
navbarLeft.style.fontSize = "14px";
navbarLeft.style.fontWeight = "700"
navbarLeft.style.display = "flex"
navbarLeft.style.alignItems = "center"
navbarLeft.style.backgroundColor = "white";
navbarLeft.style.justifyContent = "space-between"

var navbarRight = document.createElement("div");
navbarRight.setAttribute("class","col-6");
navbarRight.classList.add("col-lg-5");
navbarRight.style.display = "flex";
navbarRight.style.justifyContent = "flex-end"
navbarRight.style.alignItems = "center"
navbarRight.style.gap = "10px"
row.append(navbarLeft,navbarRight);

var navLogo = document.createElement('img');
navLogo.setAttribute("src", "./images/logo/navbar__logo--image.webp");
navLogo.setAttribute("class","navbar__logo--image");
navLogo.style.width = "250px";
// navLogo.style.height = "100px";
navbarLeft.append(navLogo);

var navItem1 = document.createElement("div")
navItem1.setAttribute("class","nav-item");
navItem1.classList.add("d-none","d-md-flex")
navItem1.style.width="25%"
navItem1.style.padding = "0 0 0 5px"
navItem1.innerHTML= '<i class="bi bi-bell" style ="color:red;"></i> NEW ARIVALS';

var navItem2 = document.createElement("div")
navItem2.setAttribute("class","nav-item");
navItem2.classList.add("d-none","d-md-flex")
navItem2.style.width="25%"
navItem2.style.padding = "0 0 0 5px"
navItem2.innerHTML= 'SHOP BY FABRIC';

var navItem3 = document.createElement("div")
navItem3.setAttribute("class","nav-item");
navItem3.classList.add("d-none","d-md-flex")
navItem3.style.width="25%"
navItem3.style.padding = "0 0 0 5px"
navItem3.innerHTML= 'SHOP BY CATEGORY';
// document.getElementById("bell").style.color = "red";
navbarLeft.append(navItem1,navItem2,navItem3);

var navSearch = document.createElement("input");
navSearch.setAttribute("class","nav-bar__search");
navSearch.setAttribute("type","text");
navSearch.setAttribute("placeholder","Search For Product");
navSearch.classList.add("d-none","d-lg-flex");
navSearch.style.border = "1px solid lightgray"
navSearch.style.height = "70%"
navSearch.style.width = "40%"
navbarRight.append(navSearch)

var navItemPrice = document.createElement("div");
navItemPrice.setAttribute("class","nav-item nav-item__price");
navItemPrice.classList.add("d-none","d-lg-flex");
navItemPrice.innerHTML = '<i class="bi bi-handbag" style="font-weight:800;"></i> &nbsp;$0 / 0.0';
navItemPrice.style.fontSize = "14";
navItemPrice.style.fontWeight = "700"
navbarRight.append(navItemPrice);

var navItemBarContainer = document.createElement("div");
navItemBarContainer.setAttribute("class","nav-item__bar-container");
navItemBarContainer.classList.add("d-md-none");
navbarRight.append(navItemBarContainer);

var navItemBar = document.createElement("i");
navItemBar.setAttribute("class","bi");
navItemBar.classList.add("bi-list");
navItemBar.style.fontSize = "32px";
navItemBarContainer.append(navItemBar);

var container = document.createElement("div");
container.setAttribute("class","main-container");
// container.classList.add("overflow-x-auto")
container.style.padding = "10px 7% 10px 7%"

var heroRow = document.createElement("div");
heroRow.setAttribute("class","row");
heroRow.classList.add("py-5")
container.append(heroRow);

var heroCol = document.createElement("div");
heroCol.setAttribute("class","col-12");
heroRow.append(heroCol);

var heroImage = document.createElement("img");
heroImage.setAttribute("class","hero-section__image");
heroImage.setAttribute("src","./images/hero/hero-section__image.webp");
heroImage.classList.add("d-md-flex","d-none");
heroImage.style.width = "100%"
heroCol.append(heroImage);

var heroImageMobile = document.createElement("img");
heroImageMobile.setAttribute("class","hero-section__image--mobile");
heroImageMobile.setAttribute("src","./images/hero/hero-section__image--mobile.webp");
heroImageMobile.classList.add("d-md-none");
heroImageMobile.style.width = "100%"
heroCol.append(heroImageMobile);

var typesCardsRow = document.createElement("div");
typesCardsRow.setAttribute("class","row");
container.append(typesCardsRow);

var typesCardsCol1 = document.createElement("div");
typesCardsCol1.setAttribute("class","col-6");
typesCardsCol1.classList.add("col-sm-4","col-lg-2")
typesCardsCol1.classList.add("d-flex","flex-column","justify-content-center","align-items-center");
typesCardsRow.append(typesCardsCol1);

var typesCardsImageContainer1 = document.createElement("div");
typesCardsImageContainer1.setAttribute("class","types-cards__image-container");
typesCardsImageContainer1.style.width = "100%";
typesCardsImageContainer1.style.height = "100%";
typesCardsCol1.append(typesCardsImageContainer1);

var typesCardsImage1 = document.createElement('img');
typesCardsImage1.setAttribute("class","types-card__image");
typesCardsImage1.setAttribute("src","./images/type/types-card__image1.webp");
typesCardsImage1.style.width = "100%";
typesCardsImage1.style.height = "100%";
typesCardsImageContainer1.append(typesCardsImage1);

var typesCardCaption1 = document.createElement("p");
typesCardCaption1.setAttribute("class","types-card__image--caption");
typesCardCaption1.innerText = "All Sarees";
typesCardCaption1.style.fontStyle = "italic";
typesCardsCol1.append(typesCardCaption1);

var typesCardsCol2 = document.createElement("div");
typesCardsCol2.setAttribute("class","col-6");
typesCardsCol2.classList.add("col-sm-4","col-lg-2")
typesCardsCol2.classList.add("d-flex","flex-column","justify-content-center","align-items-center");
typesCardsRow.append(typesCardsCol2);

var typesCardsImageContainer2 = document.createElement("div");
typesCardsImageContainer2.setAttribute("class","types-cards__image-container");
typesCardsImageContainer2.style.width = "100%";
typesCardsImageContainer2.style.height = "100%";
typesCardsCol2.append(typesCardsImageContainer2);

var typesCardsImage2 = document.createElement('img');
typesCardsImage2.setAttribute("class","types-card__image");
typesCardsImage2.setAttribute("src","./images/type/types-card__image2.webp");
typesCardsImage2.style.width = "100%";
typesCardsImage2.style.height = "100%";
typesCardsImageContainer2.append(typesCardsImage2);

var typesCardCaption2 = document.createElement("p");
typesCardCaption2.setAttribute("class","types-card__image--caption");
typesCardCaption2.innerText = "Kancheepuram";
typesCardCaption2.style.fontStyle = "italic";
typesCardsCol2.append(typesCardCaption2);

var typesCardsCol3 = document.createElement("div");
typesCardsCol3.setAttribute("class","col-6");
typesCardsCol3.classList.add("col-sm-4","col-lg-2")
typesCardsCol3.classList.add("d-flex","flex-column","justify-content-center","align-items-center");
typesCardsRow.append(typesCardsCol3);

var typesCardsImageContainer3 = document.createElement("div");
typesCardsImageContainer3.setAttribute("class","types-cards__image-container");
typesCardsImageContainer3.style.width = "100%";
typesCardsImageContainer3.style.height = "100%";
typesCardsCol3.append(typesCardsImageContainer3);

var typesCardsImage3 = document.createElement('img');
typesCardsImage3.setAttribute("class","types-card__image");
typesCardsImage3.setAttribute("src","./images/type/types-card__image3.webp");
typesCardsImage3.style.width = "100%";
typesCardsImage3.style.height = "100%";
typesCardsImageContainer3.append(typesCardsImage3);

var typesCardCaption3 = document.createElement("p");
typesCardCaption3.setAttribute("class","types-card__image--caption");
typesCardCaption3.innerText = "Banarasi";
typesCardCaption3.style.fontStyle = "italic";
typesCardsCol3.append(typesCardCaption3);

var typesCardsCol4 = document.createElement("div");
typesCardsCol4.setAttribute("class","col-6");
typesCardsCol4.classList.add("col-sm-4","col-lg-2")
typesCardsCol4.classList.add("d-flex","flex-column","justify-content-center","align-items-center");
typesCardsRow.append(typesCardsCol4);

var typesCardsImageContainer4 = document.createElement("div");
typesCardsImageContainer4.setAttribute("class","types-cards__image-container");
typesCardsImageContainer4.style.width = "100%";
typesCardsImageContainer4.style.height = "100%";
typesCardsCol4.append(typesCardsImageContainer4);

var typesCardsImage4 = document.createElement('img');
typesCardsImage4.setAttribute("class","types-card__image");
typesCardsImage4.setAttribute("src","./images/type/types-card__image4.webp");
typesCardsImage4.style.width = "100%";
typesCardsImage4.style.height = "100%";
typesCardsImageContainer4.append(typesCardsImage4);

var typesCardCaption4 = document.createElement("p");
typesCardCaption4.setAttribute("class","types-card__image--caption");
typesCardCaption4.innerText = "Tusar Sarees";
typesCardCaption4.style.fontStyle = "italic";
typesCardsCol4.append(typesCardCaption4);

var typesCardsCol5 = document.createElement("div");
typesCardsCol5.setAttribute("class","col-6");
typesCardsCol5.classList.add("col-sm-4","col-lg-2")
typesCardsCol5.classList.add("d-flex","flex-column","justify-content-center","align-items-center");
typesCardsRow.append(typesCardsCol5);

var typesCardsImageContainer5 = document.createElement("div");
typesCardsImageContainer5.setAttribute("class","types-cards__image-container");
typesCardsImageContainer5.style.width = "100%";
typesCardsImageContainer5.style.height = "100%";
typesCardsCol5.append(typesCardsImageContainer5);

var typesCardsImage5 = document.createElement('img');
typesCardsImage5.setAttribute("class","types-card__image");
typesCardsImage5.setAttribute("src","./images/type/types-card__image5.webp");
typesCardsImage5.style.width = "100%";
typesCardsImage5.style.height = "100%";
typesCardsImageContainer5.append(typesCardsImage5);

var typesCardCaption5 = document.createElement("p");
typesCardCaption5.setAttribute("class","types-card__image--caption");
typesCardCaption5.innerText = "Designer";
typesCardCaption5.style.fontStyle = "italic";
typesCardsCol5.append(typesCardCaption5);

var typesCardsCol6 = document.createElement("div");
typesCardsCol6.setAttribute("class","col-6");
typesCardsCol6.classList.add("col-sm-4","col-lg-2")
typesCardsCol6.classList.add("d-flex","flex-column","justify-content-center","align-items-center");
typesCardsRow.append(typesCardsCol6);

var typesCardsImageContainer6 = document.createElement("div");
typesCardsImageContainer6.setAttribute("class","types-cards__image-container");
typesCardsImageContainer6.style.width = "100%";
typesCardsImageContainer6.style.height = "100%";
typesCardsCol6.append(typesCardsImageContainer6);

var typesCardsImage6 = document.createElement('img');
typesCardsImage6.setAttribute("class","types-card__image");
typesCardsImage6.setAttribute("src","./images/type/types-card__image6.webp");
typesCardsImage6.style.width = "100%";
typesCardsImage6.style.height = "100%";
typesCardsImageContainer6.append(typesCardsImage6);

var typesCardCaption6 = document.createElement("p");
typesCardCaption6.setAttribute("class","types-card__image--caption");
typesCardCaption6.innerText = "Kerala Sarees";
typesCardCaption6.style.fontStyle = "italic";
typesCardsCol6.append(typesCardCaption6);

var occasionRow = document.createElement("div");
occasionRow.setAttribute("class","row");
occasionRow.classList.add("py-5");
container.append(occasionRow);

var occasionCol1 = document.createElement("div");
occasionCol1.setAttribute("class","col-12");
occasionRow.append(occasionCol1);

var occasionTitle = document.createElement("div");
occasionTitle.setAttribute("class","occasion__title-container");
occasionTitle.classList.add("py-4")
occasionTitle.style.width = "100%";
occasionCol1.append(occasionTitle);

var occasionTitleParagraph = document.createElement("p");
occasionTitleParagraph.setAttribute("class","occasion__title--paragraph");
occasionTitleParagraph.classList.add("text-danger","text-center");
occasionTitleParagraph.innerText = "Suitable For Every Occasion";
occasionTitleParagraph.style.textTransform = "uppercase";
occasionTitleParagraph.style.fontWeight = "500";

var occasionTitleHeading = document.createElement("h3");
occasionTitleHeading.setAttribute("class","occasion__title--heading");
occasionTitleHeading.classList.add("text-center");
occasionTitleHeading.innerText = "Carry Charm Wherever You Go"
occasionTitleHeading.style.fontStyle = "italic";
occasionTitleHeading.style.fontWeight = "600"
occasionTitle.append(occasionTitleParagraph,occasionTitleHeading);

var occasionCardsCol1 = document.createElement("div");
occasionCardsCol1.setAttribute("class","col-6");
occasionCardsCol1.classList.add("d-flex","flex-column","justify-content-center","align-items-center","col-md-3","pb-3","pb-md-0");
occasionRow.append(occasionCardsCol1);

var occasionCardsContainer1 = document.createElement("div");
occasionCardsContainer1.setAttribute("class","occasion-cards__image-container");
occasionCardsContainer1.style.width = "100%";
occasionCardsContainer1.style.height = "100%";
occasionCardsCol1.append(occasionCardsContainer1);

var occasionCardsImage1 = document.createElement("img");
occasionCardsImage1.setAttribute("class","occasion-card__image");
occasionCardsImage1.setAttribute("src","./images/occasion/occasion-card__image1.webp");
occasionCardsImage1.style.width = "100%";
occasionCardsImage1.style.height = "100%";
occasionCardsContainer1.append(occasionCardsImage1);

var occasionCardsCol2 = document.createElement("div");
occasionCardsCol2.setAttribute("class","col-6");
occasionCardsCol2.classList.add("d-flex","flex-column","justify-content-center","align-items-center","col-md-3","pb-3","pb-md-0");
occasionRow.append(occasionCardsCol2);

var occasionCardsContainer2 = document.createElement("div");
occasionCardsContainer2.setAttribute("class","occasion-cards__image-container");
occasionCardsContainer2.style.width = "100%";
occasionCardsContainer2.style.height = "100%";
occasionCardsCol2.append(occasionCardsContainer2);

var occasionCardsImage2 = document.createElement("img");
occasionCardsImage2.setAttribute("class","occasion-card__image");
occasionCardsImage2.setAttribute("src","./images/occasion/occasion-card__image2.webp");
occasionCardsImage2.style.width = "100%";
occasionCardsImage2.style.height = "100%";
occasionCardsContainer2.append(occasionCardsImage2);

var occasionCardsCol3 = document.createElement("div");
occasionCardsCol3.setAttribute("class","col-6");
occasionCardsCol3.classList.add("d-flex","flex-column","justify-content-center","align-items-center","col-md-3","pb-3","pb-md-0");
occasionRow.append(occasionCardsCol3);

var occasionCardsContainer3 = document.createElement("div");
occasionCardsContainer3.setAttribute("class","occasion-cards__image-container");
occasionCardsContainer3.style.width = "100%";
occasionCardsContainer3.style.height = "100%";
occasionCardsCol3.append(occasionCardsContainer3);

var occasionCardsImage3 = document.createElement("img");
occasionCardsImage3.setAttribute("class","occasion-card__image");
occasionCardsImage3.setAttribute("src","./images/occasion/occasion-card__image3.webp");
occasionCardsImage3.style.width = "100%";
occasionCardsImage3.style.height = "100%";
occasionCardsContainer3.append(occasionCardsImage3);

var occasionCardsCol4 = document.createElement("div");
occasionCardsCol4.setAttribute("class","col-6");
occasionCardsCol4.classList.add("d-flex","flex-column","justify-content-center","align-items-center","col-md-3","pb-3","pb-md-0");
occasionRow.append(occasionCardsCol4);

var occasionCardsContainer4 = document.createElement("div");
occasionCardsContainer4.setAttribute("class","occasion-cards__image-container");
occasionCardsContainer4.style.width = "100%";
occasionCardsContainer4.style.height = "100%";
occasionCardsCol4.append(occasionCardsContainer4);

var occasionCardsImage4 = document.createElement("img");
occasionCardsImage4.setAttribute("class","occasion-card__image");
occasionCardsImage4.setAttribute("src","./images/occasion/occasion-card__image4.webp");
occasionCardsImage4.style.width = "100%";
occasionCardsImage4.style.height = "100%";
occasionCardsContainer4.append(occasionCardsImage4);

var budgetRow = document.createElement("div");
budgetRow.setAttribute("class","row");
budgetRow.classList.add("py-5");
container.append(budgetRow);

var budgetCol1 = document.createElement("div");
budgetCol1.setAttribute("class","col-12");
budgetRow.append(budgetCol1);

var budgetTitle = document.createElement("div");
budgetTitle.setAttribute("class","budget__title-container");
budgetTitle.classList.add("py-4")
budgetTitle.style.width = "100%";
budgetCol1.append(budgetTitle);

var budgetTitleParagraph = document.createElement("p");
budgetTitleParagraph.setAttribute("class","budget__title--paragraph");
budgetTitleParagraph.classList.add("text-danger","text-center");
budgetTitleParagraph.innerText = "Shop Now";
budgetTitleParagraph.style.textTransform = "uppercase";
budgetTitleParagraph.style.fontWeight = "500";

var budgetTitleHeading = document.createElement("h3");
budgetTitleHeading.setAttribute("class","budget__title--heading");
budgetTitleHeading.classList.add("text-center");
budgetTitleHeading.innerText = "Stay on Budget, Shop in Style!"
budgetTitleHeading.style.fontStyle = "italic";
budgetTitleHeading.style.fontWeight = "600"
budgetTitle.append(budgetTitleParagraph,budgetTitleHeading);

var budgetCardsCol1 = document.createElement("div");
budgetCardsCol1.setAttribute("class","col-6");
budgetCardsCol1.classList.add("d-flex","flex-column","justify-content-center","align-items-center","col-sm-4","col-lg-2","pb-3","pb-lg-0");
budgetRow.append(budgetCardsCol1);

var budgetCardsContainer1 = document.createElement("div");
budgetCardsContainer1.setAttribute("class","budget-cards__image-container");
budgetCardsContainer1.style.width = "100%";
budgetCardsContainer1.style.height = "100%";
budgetCardsCol1.append(budgetCardsContainer1);

var budgetCardsImage1 = document.createElement("img");
budgetCardsImage1.setAttribute("class","budget-card__image");
budgetCardsImage1.setAttribute("src","./images/budget/budget-card__image1.webp");
budgetCardsImage1.style.width = "100%";
budgetCardsImage1.style.height = "100%";
budgetCardsContainer1.append(budgetCardsImage1);

var budgetCardsCol2 = document.createElement("div");
budgetCardsCol2.setAttribute("class","col-6");
budgetCardsCol2.classList.add("d-flex","flex-column","justify-content-center","align-items-center","col-sm-4","col-lg-2","pb-3","pb-lg-0");
budgetRow.append(budgetCardsCol2);

var budgetCardsContainer2 = document.createElement("div");
budgetCardsContainer2.setAttribute("class","budget-cards__image-container");
budgetCardsContainer2.style.width = "100%";
budgetCardsContainer2.style.height = "100%";
budgetCardsCol2.append(budgetCardsContainer2);

var budgetCardsImage2 = document.createElement("img");
budgetCardsImage2.setAttribute("class","budget-card__image");
budgetCardsImage2.setAttribute("src","./images/budget/budget-card__image2.webp");
budgetCardsImage2.style.width = "100%";
budgetCardsImage2.style.height = "100%";
budgetCardsContainer2.append(budgetCardsImage2);

var budgetCardsCol3 = document.createElement("div");
budgetCardsCol3.setAttribute("class","col-6");
budgetCardsCol3.classList.add("d-flex","flex-column","justify-content-center","align-items-center","col-sm-4","col-lg-2","pb-3","pb-lg-0");
budgetRow.append(budgetCardsCol3);

var budgetCardsContainer3 = document.createElement("div");
budgetCardsContainer3.setAttribute("class","budget-cards__image-container");
budgetCardsContainer3.style.width = "100%";
budgetCardsContainer3.style.height = "100%";
budgetCardsCol3.append(budgetCardsContainer3);

var budgetCardsImage3 = document.createElement("img");
budgetCardsImage3.setAttribute("class","budget-card__image");
budgetCardsImage3.setAttribute("src","./images/budget/budget-card__image3.webp");
budgetCardsImage3.style.width = "100%";
budgetCardsImage3.style.height = "100%";
budgetCardsContainer3.append(budgetCardsImage3);

var budgetCardsCol4 = document.createElement("div");
budgetCardsCol4.setAttribute("class","col-6");
budgetCardsCol4.classList.add("d-flex","flex-column","justify-content-center","align-items-center","col-sm-4","col-lg-2","pb-3","pb-lg-0");
budgetRow.append(budgetCardsCol4);

var budgetCardsContainer4 = document.createElement("div");
budgetCardsContainer4.setAttribute("class","budget-cards__image-container");
budgetCardsContainer4.style.width = "100%";
budgetCardsContainer4.style.height = "100%";
budgetCardsCol4.append(budgetCardsContainer4);

var budgetCardsImage4 = document.createElement("img");
budgetCardsImage4.setAttribute("class","budget-card__image");
budgetCardsImage4.setAttribute("src","./images/budget/budget-card__image4.webp");
budgetCardsImage4.style.width = "100%";
budgetCardsImage4.style.height = "100%";
budgetCardsContainer4.append(budgetCardsImage4);

var budgetCardsCol5 = document.createElement("div");
budgetCardsCol5.setAttribute("class","col-6");
budgetCardsCol5.classList.add("d-flex","flex-column","justify-content-center","align-items-center","col-sm-4","col-lg-2","pb-3","pb-lg-0");
budgetRow.append(budgetCardsCol5);

var budgetCardsContainer5 = document.createElement("div");
budgetCardsContainer5.setAttribute("class","budget-cards__image-container");
budgetCardsContainer5.style.width = "100%";
budgetCardsContainer5.style.height = "100%";
budgetCardsCol5.append(budgetCardsContainer5);

var budgetCardsImage5 = document.createElement("img");
budgetCardsImage5.setAttribute("class","budget-card__image");
budgetCardsImage5.setAttribute("src","./images/budget/budget-card__image5.webp");
budgetCardsImage5.style.width = "100%";
budgetCardsImage5.style.height = "100%";
budgetCardsContainer5.append(budgetCardsImage5);

var budgetCardsCol6 = document.createElement("div");
budgetCardsCol6.setAttribute("class","col-6");
budgetCardsCol6.classList.add("d-flex","flex-column","justify-content-center","align-items-center","col-sm-4","col-lg-2","pb-3","pb-lg-0");
budgetRow.append(budgetCardsCol6);

var budgetCardsContainer6 = document.createElement("div");
budgetCardsContainer6.setAttribute("class","budget-cards__image-container");
budgetCardsContainer6.style.width = "100%";
budgetCardsContainer6.style.height = "100%";
budgetCardsCol6.append(budgetCardsContainer6);

var budgetCardsImage6 = document.createElement("img");
budgetCardsImage6.setAttribute("class","budget-card__image");
budgetCardsImage6.setAttribute("src","./images/budget/budget-card__image6.webp");
budgetCardsImage6.style.width = "100%";
budgetCardsImage6.style.height = "100%";
budgetCardsContainer6.append(budgetCardsImage6);

var clothTypeRow = document.createElement("div");
clothTypeRow.setAttribute("class","row");
clothTypeRow.classList.add("py-5");
container.append(clothTypeRow);

var clothTypeCol1 = document.createElement("div");
clothTypeCol1.setAttribute("class","col-12");
clothTypeRow.append(clothTypeCol1);

var clothTypeTitle = document.createElement("div");
clothTypeTitle.setAttribute("class","clothType__title-container");
clothTypeTitle.classList.add("py-4")
clothTypeTitle.style.width = "100%";
clothTypeCol1.append(clothTypeTitle);

var clothTypeTitleParagraph = document.createElement("p");
clothTypeTitleParagraph.setAttribute("class","clothType__title--paragraph");
clothTypeTitleParagraph.classList.add("text-danger","text-center");
clothTypeTitleParagraph.innerText = "featured categories";
clothTypeTitleParagraph.style.textTransform = "uppercase";
clothTypeTitleParagraph.style.fontWeight = "500";

var clothTypeTitleHeading = document.createElement("h3");
clothTypeTitleHeading.setAttribute("class","clothType__title--heading");
clothTypeTitleHeading.classList.add("text-center");
clothTypeTitleHeading.innerText = "Celebratory Collection of Festive Outfits"
clothTypeTitleHeading.style.fontStyle = "italic";
clothTypeTitleHeading.style.fontWeight = "600"
clothTypeTitle.append(clothTypeTitleParagraph,clothTypeTitleHeading);

// var clothTypeRow2 = document.createElement("div");
// clothTypeRow2.setAttribute("class","row");
// container.append(clothTypeRow2);

var clothTypeCol1 = document.createElement("div");
clothTypeCol1.setAttribute("class","col-6");
clothTypeCol1.classList.add("d-flex","flex-column","justify-content-center","align-items-center","col-sm-4","col-lg-3","pb-2","pb-sm-3","pb-lg-4");
clothTypeRow.append(clothTypeCol1);

var clothTypeImageContainer1 = document.createElement("div");
clothTypeImageContainer1.setAttribute("class","clothType__image-container");
clothTypeImageContainer1.style.width = "100%";
clothTypeImageContainer1.style.height = "100%";
clothTypeCol1.append(clothTypeImageContainer1);

var clothTypeImage1 = document.createElement('img');
clothTypeImage1.setAttribute("class","clothType__image");
clothTypeImage1.setAttribute("src","./images/clothType/clothType-card__image1.webp");
clothTypeImage1.style.width = "100%";
clothTypeImage1.style.height = "100%";
clothTypeImageContainer1.append(clothTypeImage1);

var clothTypeCaption1 = document.createElement("p");
clothTypeCaption1.setAttribute("class","clothType__image--caption");
clothTypeCaption1.innerText = "All Sarees";
clothTypeCaption1.style.fontStyle = "italic";
clothTypeCaption1.style.fontWeight = "500"
clothTypeCol1.append(clothTypeCaption1);

var clothTypeCol2 = document.createElement("div");
clothTypeCol2.setAttribute("class","col-6");
clothTypeCol2.classList.add("d-flex","flex-column","justify-content-center","align-items-center","col-sm-4","col-lg-3","pb-2","pb-sm-3","pb-lg-4");
clothTypeRow.append(clothTypeCol2);

var clothTypeImageContainer2 = document.createElement("div");
clothTypeImageContainer2.setAttribute("class","clothType__image-container");
clothTypeImageContainer2.style.width = "100%";
clothTypeImageContainer2.style.height = "100%";
clothTypeCol2.append(clothTypeImageContainer2);

var clothTypeImage2 = document.createElement('img');
clothTypeImage2.setAttribute("class","clothType__image");
clothTypeImage2.setAttribute("src","./images/clothType/clothType-card__image2.webp");
clothTypeImage2.style.width = "100%";
clothTypeImage2.style.height = "100%";
clothTypeImageContainer2.append(clothTypeImage2);

var clothTypeCaption2 = document.createElement("p");
clothTypeCaption2.setAttribute("class","clothType__image--caption");
clothTypeCaption2.innerText = "Banarasi Sarees";
clothTypeCaption2.style.fontStyle = "italic";
clothTypeCaption2.style.fontWeight = "500"
clothTypeCol2.append(clothTypeCaption2);

var clothTypeCol3 = document.createElement("div");
clothTypeCol3.setAttribute("class","col-6");
clothTypeCol3.classList.add("d-flex","flex-column","justify-content-center","align-items-center","col-sm-4","col-lg-3","pb-2","pb-sm-3","pb-lg-4");
clothTypeRow.append(clothTypeCol3);

var clothTypeImageContainer3 = document.createElement("div");
clothTypeImageContainer3.setAttribute("class","clothType__image-container");
clothTypeImageContainer3.style.width = "100%";
clothTypeImageContainer3.style.height = "100%";
clothTypeCol3.append(clothTypeImageContainer3);

var clothTypeImage3 = document.createElement('img');
clothTypeImage3.setAttribute("class","clothType__image");
clothTypeImage3.setAttribute("src","./images/clothType/clothType-card__image3.webp");
clothTypeImage3.style.width = "100%";
clothTypeImage3.style.height = "100%";
clothTypeImageContainer3.append(clothTypeImage3);

var clothTypeCaption3 = document.createElement("p");
clothTypeCaption3.setAttribute("class","clothType__image--caption");
clothTypeCaption3.innerText = "Linen Sarees";
clothTypeCaption3.style.fontStyle = "italic";
clothTypeCaption3.style.fontWeight = "500"
clothTypeCol3.append(clothTypeCaption3);

var clothTypeCol4 = document.createElement("div");
clothTypeCol4.setAttribute("class","col-6");
clothTypeCol4.classList.add("d-flex","flex-column","justify-content-center","align-items-center","col-sm-4","col-lg-3","pb-2","pb-sm-3","pb-lg-4");
clothTypeRow.append(clothTypeCol4);

var clothTypeImageContainer4 = document.createElement("div");
clothTypeImageContainer4.setAttribute("class","clothType__image-container");
clothTypeImageContainer4.style.width = "100%";
clothTypeImageContainer4.style.height = "100%";
clothTypeCol4.append(clothTypeImageContainer4);

var clothTypeImage4 = document.createElement('img');
clothTypeImage4.setAttribute("class","clothType__image");
clothTypeImage4.setAttribute("src","./images/clothType/clothType-card__image4.webp");
clothTypeImage4.style.width = "100%";
clothTypeImage4.style.height = "100%";
clothTypeImageContainer4.append(clothTypeImage4);

var clothTypeCaption4 = document.createElement("p");
clothTypeCaption4.setAttribute("class","clothType__image--caption");
clothTypeCaption4.innerText = "Chiffon Sarees";
clothTypeCaption4.style.fontStyle = "italic";
clothTypeCaption4.style.fontWeight = "500"
clothTypeCol4.append(clothTypeCaption4);

var clothTypeCol5 = document.createElement("div");
clothTypeCol5.setAttribute("class","col-6");
clothTypeCol5.classList.add("d-flex","flex-column","justify-content-center","align-items-center","col-sm-4","col-lg-3","pb-2","pb-sm-3","pb-lg-4");
clothTypeRow.append(clothTypeCol5);

var clothTypeImageContainer5 = document.createElement("div");
clothTypeImageContainer5.setAttribute("class","clothType__image-container");
clothTypeImageContainer5.style.width = "100%";
clothTypeImageContainer5.style.height = "100%";
clothTypeCol5.append(clothTypeImageContainer5);

var clothTypeImage5 = document.createElement('img');
clothTypeImage5.setAttribute("class","clothType__image");
clothTypeImage5.setAttribute("src","./images/clothType/clothType-card__image5.webp");
clothTypeImage5.style.width = "100%";
clothTypeImage5.style.height = "100%";
clothTypeImageContainer5.append(clothTypeImage5);

var clothTypeCaption5 = document.createElement("p");
clothTypeCaption5.setAttribute("class","clothType__image--caption");
clothTypeCaption5.innerText = "Kancheepuram";
clothTypeCaption5.style.fontStyle = "italic";
clothTypeCaption5.style.fontWeight = "500"
clothTypeCol5.append(clothTypeCaption5);

var clothTypeCol6 = document.createElement("div");
clothTypeCol6.setAttribute("class","col-6");
clothTypeCol6.classList.add("d-flex","flex-column","justify-content-center","align-items-center","col-sm-4","col-lg-3","pb-2","pb-sm-3","pb-lg-4");
clothTypeRow.append(clothTypeCol6);

var clothTypeImageContainer6 = document.createElement("div");
clothTypeImageContainer6.setAttribute("class","clothType__image-container");
clothTypeImageContainer6.style.width = "100%";
clothTypeImageContainer6.style.height = "100%";
clothTypeCol6.append(clothTypeImageContainer6);

var clothTypeImage6 = document.createElement('img');
clothTypeImage6.setAttribute("class","clothType__image");
clothTypeImage6.setAttribute("src","./images/clothType/clothType-card__image6.webp");
clothTypeImage6.style.width = "100%";
clothTypeImage6.style.height = "100%";
clothTypeImageContainer6.append(clothTypeImage6);

var clothTypeCaption6 = document.createElement("p");
clothTypeCaption6.setAttribute("class","clothType__image--caption");
clothTypeCaption6.innerText = "Kanchi Sarees";
clothTypeCaption6.style.fontStyle = "italic";
clothTypeCaption6.style.fontWeight = "500"
clothTypeCol6.append(clothTypeCaption6);

var clothTypeCol7 = document.createElement("div");
clothTypeCol7.setAttribute("class","col-6");
clothTypeCol7.classList.add("d-flex","flex-column","justify-content-center","align-items-center","col-sm-4","col-lg-3","pb-2","pb-sm-3","pb-lg-4");
clothTypeRow.append(clothTypeCol7);

var clothTypeImageContainer7 = document.createElement("div");
clothTypeImageContainer7.setAttribute("class","clothType__image-container");
clothTypeImageContainer7.style.width = "100%";
clothTypeImageContainer7.style.height = "100%";
clothTypeCol7.append(clothTypeImageContainer7);

var clothTypeImage7 = document.createElement('img');
clothTypeImage7.setAttribute("class","clothType__image");
clothTypeImage7.setAttribute("src","./images/clothType/clothType-card__image7.webp");
clothTypeImage7.style.width = "100%";
clothTypeImage7.style.height = "100%";
clothTypeImageContainer7.append(clothTypeImage7);

var clothTypeCaption7 = document.createElement("p");
clothTypeCaption7.setAttribute("class","clothType__image--caption");
clothTypeCaption7.innerText = "Soft Silk Sarees";
clothTypeCaption7.style.fontStyle = "italic";
clothTypeCaption7.style.fontWeight = "500"
clothTypeCol7.append(clothTypeCaption7);

var clothTypeCol8 = document.createElement("div");
clothTypeCol8.setAttribute("class","col-6");
clothTypeCol8.classList.add("d-flex","flex-column","justify-content-center","align-items-center","col-sm-4","col-lg-3","pb-2","pb-sm-3","pb-lg-4");
clothTypeRow.append(clothTypeCol8);

var clothTypeImageContainer8 = document.createElement("div");
clothTypeImageContainer8.setAttribute("class","clothType__image-container");
clothTypeImageContainer8.style.width = "100%";
clothTypeImageContainer8.style.height = "100%";
clothTypeCol8.append(clothTypeImageContainer8);

var clothTypeImage8 = document.createElement('img');
clothTypeImage8.setAttribute("class","clothType__image");
clothTypeImage8.setAttribute("src","./images/clothType/clothType-card__image8.webp");
clothTypeImage8.style.width = "100%";
clothTypeImage8.style.height = "100%";
clothTypeImageContainer8.append(clothTypeImage8);

var clothTypeCaption8 = document.createElement("p");
clothTypeCaption8.setAttribute("class","clothType__image--caption");
clothTypeCaption8.innerText = "Organza Sarees";
clothTypeCaption8.style.fontStyle = "italic";
clothTypeCaption8.style.fontWeight = "500"
clothTypeCol8.append(clothTypeCaption8);

var clothTypeCol9 = document.createElement("div");
clothTypeCol9.setAttribute("class","col-6");
clothTypeCol9.classList.add("d-flex","flex-column","justify-content-center","align-items-center","col-sm-4","col-lg-3","pb-2","pb-sm-3","pb-lg-4");
clothTypeRow.append(clothTypeCol9);

var clothTypeImageContainer9 = document.createElement("div");
clothTypeImageContainer9.setAttribute("class","clothType__image-container");
clothTypeImageContainer9.style.width = "100%";
clothTypeImageContainer9.style.height = "100%";
clothTypeCol9.append(clothTypeImageContainer9);

var clothTypeImage9 = document.createElement('img');
clothTypeImage9.setAttribute("class","clothType__image");
clothTypeImage9.setAttribute("src","./images/clothType/clothType-card__image9.webp");
clothTypeImage9.style.width = "100%";
clothTypeImage9.style.height = "100%";
clothTypeImageContainer9.append(clothTypeImage9);

var clothTypeCaption9 = document.createElement("p");
clothTypeCaption9.setAttribute("class","clothType__image--caption");
clothTypeCaption9.innerText = "Tussar Silk Sarees";
clothTypeCaption9.style.fontStyle = "italic";
clothTypeCaption9.style.fontWeight = "500"
clothTypeCol9.append(clothTypeCaption9);

var clothTypeCol10 = document.createElement("div");
clothTypeCol10.setAttribute("class","col-6");
clothTypeCol10.classList.add("d-flex","flex-column","justify-content-center","align-items-center","col-sm-4","col-lg-3","pb-2","pb-sm-3","pb-lg-4");
clothTypeRow.append(clothTypeCol10);

var clothTypeImageContainer10 = document.createElement("div");
clothTypeImageContainer10.setAttribute("class","clothType__image-container");
clothTypeImageContainer10.style.width = "100%";
clothTypeImageContainer10.style.height = "100%";
clothTypeCol10.append(clothTypeImageContainer10);

var clothTypeImage10 = document.createElement('img');
clothTypeImage10.setAttribute("class","clothType__image");
clothTypeImage10.setAttribute("src","./images/clothType/clothType-card__image10.webp");
clothTypeImage10.style.width = "100%";
clothTypeImage10.style.height = "100%";
clothTypeImageContainer10.append(clothTypeImage10);

var clothTypeCaption10 = document.createElement("p");
clothTypeCaption10.setAttribute("class","clothType__image--caption");
clothTypeCaption10.innerText = "Tissue Sarees";
clothTypeCaption10.style.fontStyle = "italic";
clothTypeCaption10.style.fontWeight = "500"
clothTypeCol10.append(clothTypeCaption10);

var clothTypeCol11 = document.createElement("div");
clothTypeCol11.setAttribute("class","col-6");
clothTypeCol11.classList.add("d-flex","flex-column","justify-content-center","align-items-center","col-sm-4","col-lg-3","pb-2","pb-sm-3","pb-lg-4");
clothTypeRow.append(clothTypeCol11);

var clothTypeImageContainer11 = document.createElement("div");
clothTypeImageContainer11.setAttribute("class","clothType__image-container");
clothTypeImageContainer11.style.width = "100%";
clothTypeImageContainer11.style.height = "100%";
clothTypeCol11.append(clothTypeImageContainer11);

var clothTypeImage11 = document.createElement('img');
clothTypeImage11.setAttribute("class","clothType__image");
clothTypeImage11.setAttribute("src","./images/clothType/clothType-card__image11.webp");
clothTypeImage11.style.width = "100%";
clothTypeImage11.style.height = "100%";
clothTypeImageContainer11.append(clothTypeImage11);

var clothTypeCaption11 = document.createElement("p");
clothTypeCaption11.setAttribute("class","clothType__image--caption");
clothTypeCaption11.innerText = "Designer Sarees";
clothTypeCaption11.style.fontStyle = "italic";
clothTypeCaption11.style.fontWeight = "500"
clothTypeCol11.append(clothTypeCaption11);

var clothTypeCol12 = document.createElement("div");
clothTypeCol12.setAttribute("class","col-6");
clothTypeCol12.classList.add("d-flex","flex-column","justify-content-center","align-items-center","col-sm-4","col-lg-3","pb-2","pb-sm-3","pb-lg-4");
clothTypeRow.append(clothTypeCol12);

var clothTypeImageContainer12 = document.createElement("div");
clothTypeImageContainer12.setAttribute("class","clothType__image-container");
clothTypeImageContainer12.style.width = "100%";
clothTypeImageContainer12.style.height = "100%";
clothTypeCol12.append(clothTypeImageContainer12);

var clothTypeImage12 = document.createElement('img');
clothTypeImage12.setAttribute("class","clothType__image");
clothTypeImage12.setAttribute("src","./images/clothType/clothType-card__image12.webp");
clothTypeImage12.style.width = "100%";
clothTypeImage12.style.height = "100%";
clothTypeImageContainer12.append(clothTypeImage12);

var clothTypeCaption12 = document.createElement("p");
clothTypeCaption12.setAttribute("class","clothType__image--caption");
clothTypeCaption12.innerText = "Chanderi Sarees";
clothTypeCaption12.style.fontStyle = "italic";
clothTypeCaption12.style.fontWeight = "500"
clothTypeCol12.append(clothTypeCaption12);

var weavesRow = document.createElement("div");
weavesRow.setAttribute("class","row");
weavesRow.classList.add("py-5");
container.append(weavesRow);

var weavesCardsCol1 = document.createElement("div");
weavesCardsCol1.setAttribute("class","col-12");
weavesCardsCol1.classList.add("d-flex","flex-column","justify-content-center","align-items-center","col-md-6","mb-3","mb-md-0");
weavesRow.append(weavesCardsCol1);

var weavesCardsContainer1 = document.createElement("div");
weavesCardsContainer1.setAttribute("class","weaves-cards__image-container");
weavesCardsContainer1.style.width = "100%";
weavesCardsContainer1.style.height = "100%";
weavesCardsCol1.append(weavesCardsContainer1);

var weavesCardsImage1 = document.createElement("img");
weavesCardsImage1.setAttribute("class","weaves-card__image");
weavesCardsImage1.setAttribute("src","./images/weaves/weaves-card__image1.webp");
weavesCardsImage1.style.width = "100%";
weavesCardsImage1.style.height = "100%";
weavesCardsContainer1.append(weavesCardsImage1);

var weavesCardsCol2 = document.createElement("div");
weavesCardsCol2.setAttribute("class","col-12");
weavesCardsCol2.classList.add("d-flex","flex-column","justify-content-center","align-items-center","col-md-6","mb-3","mb-md-0");
weavesRow.append(weavesCardsCol2);

var weavesCardsContainer2 = document.createElement("div");
weavesCardsContainer2.setAttribute("class","weaves-cards__image-container");
weavesCardsContainer2.style.width = "100%";
weavesCardsContainer2.style.height = "100%";
weavesCardsCol2.append(weavesCardsContainer2);

var weavesCardsImage2 = document.createElement("img");
weavesCardsImage2.setAttribute("class","weaves-card__image");
weavesCardsImage2.setAttribute("src","./images/weaves/weaves-card__image2.webp");
weavesCardsImage2.style.width = "100%";
weavesCardsImage2.style.height = "100%";
weavesCardsContainer2.append(weavesCardsImage2);

var collectionsFirstRow2 = document.createElement("div");
collectionsFirstRow2.setAttribute("class","row");
collectionsFirstRow2.classList.add("pt-5");
container.append(collectionsFirstRow2);

var collectionsFirstCol = document.createElement("div");
collectionsFirstCol.setAttribute("class","col-12");
collectionsFirstRow2.append(collectionsFirstCol);

var collectionsFirstTitle = document.createElement("div");
collectionsFirstTitle.setAttribute("class","collectionsFirst__title-container");
collectionsFirstTitle.classList.add("py-4")
collectionsFirstTitle.style.width = "100%";
collectionsFirstCol.append(collectionsFirstTitle);

var collectionsFirstTitleParagraph = document.createElement("p");
collectionsFirstTitleParagraph.setAttribute("class","collectionsFirst__title--paragraph");
collectionsFirstTitleParagraph.classList.add("text-danger","text-center");
collectionsFirstTitleParagraph.innerText = "shades of happiness";
collectionsFirstTitleParagraph.style.textTransform = "uppercase";
collectionsFirstTitleParagraph.style.fontWeight = "500";

var collectionsFirstTitleHeading = document.createElement("h3");
collectionsFirstTitleHeading.setAttribute("class","collectionsFirst__title--heading");
collectionsFirstTitleHeading.classList.add("text-center");
collectionsFirstTitleHeading.innerText = "Checkout Our Galore Of Collections"
collectionsFirstTitleHeading.style.fontStyle = "italic";
collectionsFirstTitleHeading.style.fontWeight = "600"
collectionsFirstTitle.append(collectionsFirstTitleParagraph,collectionsFirstTitleHeading);

var scrollWrapper = document.createElement("div");
scrollWrapper.setAttribute("class","collectionsFirst__scroll-wrapper");
scrollWrapper.classList.add("overflow-x-auto");
container.append(scrollWrapper);

var collectionsFirstRow = document.createElement("div");
collectionsFirstRow.setAttribute("class","row");
collectionsFirstRow.classList.add("d-flex");
scrollWrapper.append(collectionsFirstRow);

var collectionsFirstCol1 = document.createElement("div");
collectionsFirstCol1.setAttribute("class","col-6");
collectionsFirstCol1.classList.add("col-md-3","mb-3","mb-md-0")
collectionsFirstRow.append(collectionsFirstCol1);

var collectionsFirstImageContainer1 = document.createElement("div");
collectionsFirstImageContainer1.setAttribute("class","collectionsFirst__image-container");
collectionsFirstImageContainer1.classList.add("d-flex","flex-column","justify-content-center","align-items-center");
collectionsFirstImageContainer1.style.width = "100%";
collectionsFirstImageContainer1.style.height = "100%";
collectionsFirstImageContainer1.style.position = "relative"
collectionsFirstImageContainer1.style.boxShadow = "0 3px 40px rgb(0 0 0 / 20%)"
collectionsFirstImageContainer1.style.backgroundColor = "#fcfdff"
collectionsFirstCol1.append(collectionsFirstImageContainer1);

var collectionsFirstSaleCard = document.createElement("div");
collectionsFirstSaleCard.setAttribute("class","collectionsFirst__sale-card");
collectionsFirstSaleCard.innerText = "SALE!"
collectionsFirstSaleCard.style.position = "absolute";
collectionsFirstSaleCard.style.top = "20px";
collectionsFirstSaleCard.style.left = "20px";
collectionsFirstSaleCard.style.fontSize = "14px";
collectionsFirstSaleCard.style.backgroundColor = "white";
collectionsFirstSaleCard.style.padding = "5px"
collectionsFirstSaleCard.style.fontWeight = "600"
collectionsFirstImageContainer1.append(collectionsFirstSaleCard)

var collectionsFirstImage1 = document.createElement('img');
collectionsFirstImage1.setAttribute("class","collectionsFirst__image");
collectionsFirstImage1.setAttribute("src","./images/collection1/collectionsFirst-card__image1.webp");
collectionsFirstImage1.style.width = "100%";
collectionsFirstImage1.style.height = "100%";
collectionsFirstImageContainer1.append(collectionsFirstImage1);

var collectionsFirstCaptionSubTitle1 = document.createElement("p");
collectionsFirstCaptionSubTitle1.setAttribute("class","collectionsFirst__image--captionSubTitle");
collectionsFirstCaptionSubTitle1.classList.add("pt-3")
collectionsFirstCaptionSubTitle1.innerText = "Crepe Saree";
collectionsFirstCaptionSubTitle1.style.color = "#bbbdbf"
collectionsFirstCaptionSubTitle1.style.fontSize = "14px"
collectionsFirstCaptionSubTitle1.style.fontWeight = "400"

var collectionsFirstCaptionTitle1 = document.createElement("p");
collectionsFirstCaptionTitle1.setAttribute("class","collectionsFirst__image--captionTitle");
collectionsFirstCaptionTitle1.classList.add("text-center");
collectionsFirstCaptionTitle1.innerText = "Dark Blue Crepe Saree";
collectionsFirstCaptionTitle1.style.fontSize = "18px"
collectionsFirstCaptionTitle1.style.fontWeight = "300"

var collectionsFirstCaptionPrice1 = document.createElement("p");
collectionsFirstCaptionPrice1.setAttribute("class","collectionsFirst__image--captionPrice");
collectionsFirstCaptionPrice1.innerText = "BUY NOW";
collectionsFirstCaptionPrice1.style.fontSize = "16px";
collectionsFirstCaptionPrice1.style.fontWeight = "600"
collectionsFirstImageContainer1.append(collectionsFirstCaptionSubTitle1,collectionsFirstCaptionTitle1,collectionsFirstCaptionPrice1);

var collectionsFirstCol2 = document.createElement("div");
collectionsFirstCol2.setAttribute("class","col-6");
collectionsFirstCol2.classList.add("col-md-3","mb-3","mb-md-0")
collectionsFirstRow.append(collectionsFirstCol2);

var collectionsFirstImageContainer2 = document.createElement("div");
collectionsFirstImageContainer2.setAttribute("class","collectionsFirst__image-container");
collectionsFirstImageContainer2.classList.add("d-flex","flex-column","justify-content-center","align-items-center");
collectionsFirstImageContainer2.style.width = "100%";
collectionsFirstImageContainer2.style.height = "100%";
collectionsFirstImageContainer2.style.position = "relative"
collectionsFirstImageContainer2.style.boxShadow = "0 3px 40px rgb(0 0 0 / 20%)"
collectionsFirstImageContainer2.style.backgroundColor = "#fcfdff"
collectionsFirstCol2.append(collectionsFirstImageContainer2);

var collectionsFirstSaleCard = document.createElement("div");
collectionsFirstSaleCard.setAttribute("class","collectionsFirst__sale-card");
collectionsFirstSaleCard.innerText = "SALE!"
collectionsFirstSaleCard.style.position = "absolute";
collectionsFirstSaleCard.style.top = "20px";
collectionsFirstSaleCard.style.left = "20px";
collectionsFirstSaleCard.style.fontSize = "14px";
collectionsFirstSaleCard.style.backgroundColor = "white";
collectionsFirstSaleCard.style.padding = "5px"
collectionsFirstSaleCard.style.fontWeight = "600"
collectionsFirstImageContainer2.append(collectionsFirstSaleCard)

var collectionsFirstImage2 = document.createElement('img');
collectionsFirstImage2.setAttribute("class","collectionsFirst__image");
collectionsFirstImage2.setAttribute("src","./images/collection1/collectionsFirst-card__image2.webp");
collectionsFirstImage2.style.width = "100%";
collectionsFirstImage2.style.height = "100%";
collectionsFirstImageContainer2.append(collectionsFirstImage2);

var collectionsFirstCaptionSubTitle2 = document.createElement("p");
collectionsFirstCaptionSubTitle2.setAttribute("class","collectionsFirst__image--captionSubTitle");
collectionsFirstCaptionSubTitle2.classList.add("pt-3")
collectionsFirstCaptionSubTitle2.innerText = "Crepe Saree";
collectionsFirstCaptionSubTitle2.style.color = "#bbbdbf"
collectionsFirstCaptionSubTitle2.style.fontSize = "14px"
collectionsFirstCaptionSubTitle2.style.fontWeight = "400"

var collectionsFirstCaptionTitle2 = document.createElement("p");
collectionsFirstCaptionTitle2.setAttribute("class","collectionsFirst__image--captionTitle");
collectionsFirstCaptionTitle2.classList.add("text-center");
collectionsFirstCaptionTitle2.innerText = "Dark Blue Crepe Saree";
collectionsFirstCaptionTitle2.style.fontSize = "18px"
collectionsFirstCaptionTitle2.style.fontWeight = "300"

var collectionsFirstCaptionPrice2 = document.createElement("p");
collectionsFirstCaptionPrice2.setAttribute("class","collectionsFirst__image--captionPrice");
collectionsFirstCaptionPrice2.innerText = "BUY NOW";
collectionsFirstCaptionPrice2.style.fontSize = "16px";
collectionsFirstCaptionPrice2.style.fontWeight = "600"
collectionsFirstImageContainer2.append(collectionsFirstCaptionSubTitle2,collectionsFirstCaptionTitle2,collectionsFirstCaptionPrice2);

var collectionsFirstCol3 = document.createElement("div");
collectionsFirstCol3.setAttribute("class","col-6");
collectionsFirstCol3.classList.add("col-md-3","mb-3","mb-md-0")
collectionsFirstRow.append(collectionsFirstCol3);

var collectionsFirstImageContainer3 = document.createElement("div");
collectionsFirstImageContainer3.setAttribute("class","collectionsFirst__image-container");
collectionsFirstImageContainer3.classList.add("d-flex","flex-column","justify-content-center","align-items-center");
collectionsFirstImageContainer3.style.width = "100%";
collectionsFirstImageContainer3.style.height = "100%";
collectionsFirstImageContainer3.style.position = "relative"
collectionsFirstImageContainer3.style.boxShadow = "0 3px 40px rgb(0 0 0 / 20%)"
collectionsFirstImageContainer3.style.backgroundColor = "#fcfdff"
collectionsFirstCol3.append(collectionsFirstImageContainer3);

var collectionsFirstSaleCard = document.createElement("div");
collectionsFirstSaleCard.setAttribute("class","collectionsFirst__sale-card");
collectionsFirstSaleCard.innerText = "SALE!"
collectionsFirstSaleCard.style.position = "absolute";
collectionsFirstSaleCard.style.top = "20px";
collectionsFirstSaleCard.style.left = "20px";
collectionsFirstSaleCard.style.fontSize = "14px";
collectionsFirstSaleCard.style.backgroundColor = "white";
collectionsFirstSaleCard.style.padding = "5px"
collectionsFirstSaleCard.style.fontWeight = "600"
collectionsFirstImageContainer3.append(collectionsFirstSaleCard)

var collectionsFirstImage3 = document.createElement('img');
collectionsFirstImage3.setAttribute("class","collectionsFirst__image");
collectionsFirstImage3.setAttribute("src","./images/collection1/collectionsFirst-card__image3.webp");
collectionsFirstImage3.style.width = "100%";
collectionsFirstImage3.style.height = "100%";
collectionsFirstImageContainer3.append(collectionsFirstImage3);

var collectionsFirstCaptionSubTitle3 = document.createElement("p");
collectionsFirstCaptionSubTitle3.setAttribute("class","collectionsFirst__image--captionSubTitle");
collectionsFirstCaptionSubTitle3.classList.add("pt-3")
collectionsFirstCaptionSubTitle3.innerText = "Crepe Saree";
collectionsFirstCaptionSubTitle3.style.color = "#bbbdbf"
collectionsFirstCaptionSubTitle3.style.fontSize = "14px"
collectionsFirstCaptionSubTitle3.style.fontWeight = "400"

var collectionsFirstCaptionTitle3 = document.createElement("p");
collectionsFirstCaptionTitle3.setAttribute("class","collectionsFirst__image--captionTitle");
collectionsFirstCaptionTitle3.classList.add("text-center");
collectionsFirstCaptionTitle3.innerText = "Dark Blue Crepe Saree";
collectionsFirstCaptionTitle3.style.fontSize = "18px"
collectionsFirstCaptionTitle3.style.fontWeight = "300"

var collectionsFirstCaptionPrice3 = document.createElement("p");
collectionsFirstCaptionPrice3.setAttribute("class","collectionsFirst__image--captionPrice");
collectionsFirstCaptionPrice3.innerText = "BUY NOW";
collectionsFirstCaptionPrice3.style.fontSize = "16px";
collectionsFirstCaptionPrice3.style.fontWeight = "600"
collectionsFirstImageContainer3.append(collectionsFirstCaptionSubTitle3,collectionsFirstCaptionTitle3,collectionsFirstCaptionPrice3);

var collectionsFirstCol4 = document.createElement("div");
collectionsFirstCol4.setAttribute("class","col-6");
collectionsFirstCol4.classList.add("col-md-3","mb-3","mb-md-0")
collectionsFirstRow.append(collectionsFirstCol4);

var collectionsFirstImageContainer4 = document.createElement("div");
collectionsFirstImageContainer4.setAttribute("class","collectionsFirst__image-container");
collectionsFirstImageContainer4.classList.add("d-flex","flex-column","justify-content-center","align-items-center");
collectionsFirstImageContainer4.style.width = "100%";
collectionsFirstImageContainer4.style.height = "100%";
collectionsFirstImageContainer4.style.position = "relative"
collectionsFirstImageContainer4.style.boxShadow = "0 3px 40px rgb(0 0 0 / 20%)"
collectionsFirstImageContainer4.style.backgroundColor = "#fcfdff"
collectionsFirstCol4.append(collectionsFirstImageContainer4);

var collectionsFirstSaleCard = document.createElement("div");
collectionsFirstSaleCard.setAttribute("class","collectionsFirst__sale-card");
collectionsFirstSaleCard.innerText = "SALE!"
collectionsFirstSaleCard.style.position = "absolute";
collectionsFirstSaleCard.style.top = "20px";
collectionsFirstSaleCard.style.left = "20px";
collectionsFirstSaleCard.style.fontSize = "14px";
collectionsFirstSaleCard.style.backgroundColor = "white";
collectionsFirstSaleCard.style.padding = "5px"
collectionsFirstSaleCard.style.fontWeight = "600"
collectionsFirstImageContainer4.append(collectionsFirstSaleCard)

var collectionsFirstImage4 = document.createElement('img');
collectionsFirstImage4.setAttribute("class","collectionsFirst__image");
collectionsFirstImage4.setAttribute("src","./images/collection1/collectionsFirst-card__image4.webp");
collectionsFirstImage4.style.width = "100%";
collectionsFirstImage4.style.height = "100%";
collectionsFirstImageContainer4.append(collectionsFirstImage4);

var collectionsFirstCaptionSubTitle4 = document.createElement("p");
collectionsFirstCaptionSubTitle4.setAttribute("class","collectionsFirst__image--captionSubTitle");
collectionsFirstCaptionSubTitle4.classList.add("pt-3")
collectionsFirstCaptionSubTitle4.innerText = "Crepe Saree";
collectionsFirstCaptionSubTitle4.style.color = "#bbbdbf"
collectionsFirstCaptionSubTitle4.style.fontSize = "14px"
collectionsFirstCaptionSubTitle4.style.fontWeight = "400"

var collectionsFirstCaptionTitle4 = document.createElement("p");
collectionsFirstCaptionTitle4.setAttribute("class","collectionsFirst__image--captionTitle");
collectionsFirstCaptionTitle4.classList.add("text-center");
collectionsFirstCaptionTitle4.innerText = "Dark Blue Crepe Saree";
collectionsFirstCaptionTitle4.style.fontSize = "18px"
collectionsFirstCaptionTitle4.style.fontWeight = "300"

var collectionsFirstCaptionPrice4 = document.createElement("p");
collectionsFirstCaptionPrice4.setAttribute("class","collectionsFirst__image--captionPrice");
collectionsFirstCaptionPrice4.innerText = "BUY NOW";
collectionsFirstCaptionPrice4.style.fontSize = "16px";
collectionsFirstCaptionPrice4.style.fontWeight = "600"
collectionsFirstImageContainer4.append(collectionsFirstCaptionSubTitle4,collectionsFirstCaptionTitle4,collectionsFirstCaptionPrice4);

// collection second

var collectionsSecondRow2 = document.createElement("div");
collectionsSecondRow2.setAttribute("class","row");
collectionsSecondRow2.classList.add("pt-5");
container.append(collectionsSecondRow2);

var collectionsSecondCol = document.createElement("div");
collectionsSecondCol.setAttribute("class","col-12");
collectionsSecondRow2.append(collectionsSecondCol);

var collectionsSecondTitle = document.createElement("div");
collectionsSecondTitle.setAttribute("class","collectionsSecond__title-container");
collectionsSecondTitle.classList.add("py-4")
collectionsSecondTitle.style.width = "100%";
collectionsSecondCol.append(collectionsSecondTitle);

var collectionsSecondTitleParagraph = document.createElement("p");
collectionsSecondTitleParagraph.setAttribute("class","collectionsSecond__title--paragraph");
collectionsSecondTitleParagraph.classList.add("text-danger","text-center");
collectionsSecondTitleParagraph.innerText = "Flow in the Comfort of Flamboyant Grace";
collectionsSecondTitleParagraph.style.textTransform = "uppercase";
collectionsSecondTitleParagraph.style.fontWeight = "500";

var collectionsSecondTitleHeading = document.createElement("h3");
collectionsSecondTitleHeading.setAttribute("class","collectionsSecond__title--heading");
collectionsSecondTitleHeading.classList.add("text-center");
collectionsSecondTitleHeading.innerText = "Our exclusive Churidar Collection"
collectionsSecondTitleHeading.style.fontStyle = "italic";
collectionsSecondTitleHeading.style.fontWeight = "600"
collectionsSecondTitle.append(collectionsSecondTitleParagraph,collectionsSecondTitleHeading);

var scrollWrapper2 = document.createElement("div");
scrollWrapper2.setAttribute("class","collectionsFirst__scroll-wrapper");
scrollWrapper2.classList.add("overflow-x-auto");
container.append(scrollWrapper2);

var collectionsSecondRow = document.createElement("div");
collectionsSecondRow.setAttribute("class","row");
collectionsSecondRow.classList.add("d-flex");
scrollWrapper2.append(collectionsSecondRow);

var collectionsSecondCol1 = document.createElement("div");
collectionsSecondCol1.setAttribute("class","col-6");
collectionsSecondCol1.classList.add("col-md-3","mb-3","mb-md-0")
collectionsSecondRow.append(collectionsSecondCol1);

var collectionsSecondImageContainer1 = document.createElement("div");
collectionsSecondImageContainer1.setAttribute("class","collectionsSecond__image-container");
collectionsSecondImageContainer1.classList.add("d-flex","flex-column","justify-content-center","align-items-center");
collectionsSecondImageContainer1.style.width = "100%";
collectionsSecondImageContainer1.style.height = "100%";
collectionsSecondImageContainer1.style.position = "relative"
collectionsSecondImageContainer1.style.boxShadow = "0 3px 40px rgb(0 0 0 / 20%)"
collectionsSecondImageContainer1.style.backgroundColor = "#fcfdff"
collectionsSecondCol1.append(collectionsSecondImageContainer1);

var collectionsSecondSaleCard = document.createElement("div");
collectionsSecondSaleCard.setAttribute("class","collectionsSecond__sale-card");
collectionsSecondSaleCard.innerText = "SALE!"
collectionsSecondSaleCard.style.position = "absolute";
collectionsSecondSaleCard.style.top = "20px";
collectionsSecondSaleCard.style.left = "20px";
collectionsSecondSaleCard.style.fontSize = "14px";
collectionsSecondSaleCard.style.backgroundColor = "white";
collectionsSecondSaleCard.style.padding = "5px"
collectionsSecondSaleCard.style.fontWeight = "600"
collectionsSecondImageContainer1.append(collectionsSecondSaleCard)

var collectionsSecondImage1 = document.createElement('img');
collectionsSecondImage1.setAttribute("class","collectionsSecond__image");
collectionsSecondImage1.setAttribute("src","./images/collection2/collectionsSecond-card__image1.webp");
collectionsSecondImage1.style.width = "100%";
collectionsSecondImage1.style.height = "100%";
collectionsSecondImageContainer1.append(collectionsSecondImage1);

var collectionsSecondCaptionSubTitle1 = document.createElement("p");
collectionsSecondCaptionSubTitle1.setAttribute("class","collectionsSecond__image--captionSubTitle");
collectionsSecondCaptionSubTitle1.classList.add("pt-3")
collectionsSecondCaptionSubTitle1.innerText = "Crepe Saree";
collectionsSecondCaptionSubTitle1.style.color = "#bbbdbf"
collectionsSecondCaptionSubTitle1.style.fontSize = "14px"
collectionsSecondCaptionSubTitle1.style.fontWeight = "400"

var collectionsSecondCaptionTitle1 = document.createElement("p");
collectionsSecondCaptionTitle1.setAttribute("class","collectionsSecond__image--captionTitle");
collectionsSecondCaptionTitle1.classList.add("text-center");
collectionsSecondCaptionTitle1.innerText = "Dark Blue Crepe Saree";
collectionsSecondCaptionTitle1.style.fontSize = "18px"
collectionsSecondCaptionTitle1.style.fontWeight = "300"

var collectionsSecondCaptionPrice1 = document.createElement("p");
collectionsSecondCaptionPrice1.setAttribute("class","collectionsSecond__image--captionPrice");
collectionsSecondCaptionPrice1.innerText = "BUY NOW";
collectionsSecondCaptionPrice1.style.fontSize = "16px";
collectionsSecondCaptionPrice1.style.fontWeight = "600"
collectionsSecondImageContainer1.append(collectionsSecondCaptionSubTitle1,collectionsSecondCaptionTitle1,collectionsSecondCaptionPrice1);

var collectionsSecondCol2 = document.createElement("div");
collectionsSecondCol2.setAttribute("class","col-6");
collectionsSecondCol2.classList.add("col-md-3","mb-3","mb-md-0")
collectionsSecondRow.append(collectionsSecondCol2);

var collectionsSecondImageContainer2 = document.createElement("div");
collectionsSecondImageContainer2.setAttribute("class","collectionsSecond__image-container");
collectionsSecondImageContainer2.classList.add("d-flex","flex-column","justify-content-center","align-items-center");
collectionsSecondImageContainer2.style.width = "100%";
collectionsSecondImageContainer2.style.height = "100%";
collectionsSecondImageContainer2.style.position = "relative"
collectionsSecondImageContainer2.style.boxShadow = "0 3px 40px rgb(0 0 0 / 20%)"
collectionsSecondImageContainer2.style.backgroundColor = "#fcfdff"
collectionsSecondCol2.append(collectionsSecondImageContainer2);

var collectionsSecondSaleCard = document.createElement("div");
collectionsSecondSaleCard.setAttribute("class","collectionsSecond__sale-card");
collectionsSecondSaleCard.innerText = "SALE!"
collectionsSecondSaleCard.style.position = "absolute";
collectionsSecondSaleCard.style.top = "20px";
collectionsSecondSaleCard.style.left = "20px";
collectionsSecondSaleCard.style.fontSize = "14px";
collectionsSecondSaleCard.style.backgroundColor = "white";
collectionsSecondSaleCard.style.padding = "5px"
collectionsSecondSaleCard.style.fontWeight = "600"
collectionsSecondImageContainer2.append(collectionsSecondSaleCard)

var collectionsSecondImage2 = document.createElement('img');
collectionsSecondImage2.setAttribute("class","collectionsSecond__image");
collectionsSecondImage2.setAttribute("src","./images/collection2/collectionsSecond-card__image2.webp");
collectionsSecondImage2.style.width = "100%";
collectionsSecondImage2.style.height = "100%";
collectionsSecondImageContainer2.append(collectionsSecondImage2);

var collectionsSecondCaptionSubTitle2 = document.createElement("p");
collectionsSecondCaptionSubTitle2.setAttribute("class","collectionsSecond__image--captionSubTitle");
collectionsSecondCaptionSubTitle2.classList.add("pt-3")
collectionsSecondCaptionSubTitle2.innerText = "Crepe Saree";
collectionsSecondCaptionSubTitle2.style.color = "#bbbdbf"
collectionsSecondCaptionSubTitle2.style.fontSize = "14px"
collectionsSecondCaptionSubTitle2.style.fontWeight = "400"

var collectionsSecondCaptionTitle2 = document.createElement("p");
collectionsSecondCaptionTitle2.setAttribute("class","collectionsSecond__image--captionTitle");
collectionsSecondCaptionTitle2.classList.add("text-center");
collectionsSecondCaptionTitle2.innerText = "Dark Blue Crepe Saree";
collectionsSecondCaptionTitle2.style.fontSize = "18px"
collectionsSecondCaptionTitle2.style.fontWeight = "300"

var collectionsSecondCaptionPrice2 = document.createElement("p");
collectionsSecondCaptionPrice2.setAttribute("class","collectionsSecond__image--captionPrice");
collectionsSecondCaptionPrice2.innerText = "BUY NOW";
collectionsSecondCaptionPrice2.style.fontSize = "16px";
collectionsSecondCaptionPrice2.style.fontWeight = "600"
collectionsSecondImageContainer2.append(collectionsSecondCaptionSubTitle2,collectionsSecondCaptionTitle2,collectionsSecondCaptionPrice2);

var collectionsSecondCol3 = document.createElement("div");
collectionsSecondCol3.setAttribute("class","col-6");
collectionsSecondCol3.classList.add("col-md-3","mb-3","mb-md-0")
collectionsSecondRow.append(collectionsSecondCol3);

var collectionsSecondImageContainer3 = document.createElement("div");
collectionsSecondImageContainer3.setAttribute("class","collectionsSecond__image-container");
collectionsSecondImageContainer3.classList.add("d-flex","flex-column","justify-content-center","align-items-center");
collectionsSecondImageContainer3.style.width = "100%";
collectionsSecondImageContainer3.style.height = "100%";
collectionsSecondImageContainer3.style.position = "relative"
collectionsSecondImageContainer3.style.boxShadow = "0 3px 40px rgb(0 0 0 / 20%)"
collectionsSecondImageContainer3.style.backgroundColor = "#fcfdff"
collectionsSecondCol3.append(collectionsSecondImageContainer3);

var collectionsSecondSaleCard = document.createElement("div");
collectionsSecondSaleCard.setAttribute("class","collectionsSecond__sale-card");
collectionsSecondSaleCard.innerText = "SALE!"
collectionsSecondSaleCard.style.position = "absolute";
collectionsSecondSaleCard.style.top = "20px";
collectionsSecondSaleCard.style.left = "20px";
collectionsSecondSaleCard.style.fontSize = "14px";
collectionsSecondSaleCard.style.backgroundColor = "white";
collectionsSecondSaleCard.style.padding = "5px"
collectionsSecondSaleCard.style.fontWeight = "600"
collectionsSecondImageContainer3.append(collectionsSecondSaleCard)

var collectionsSecondImage3 = document.createElement('img');
collectionsSecondImage3.setAttribute("class","collectionsSecond__image");
collectionsSecondImage3.setAttribute("src","./images/collection2/collectionsSecond-card__image3.webp");
collectionsSecondImage3.style.width = "100%";
collectionsSecondImage3.style.height = "100%";
collectionsSecondImageContainer3.append(collectionsSecondImage3);

var collectionsSecondCaptionSubTitle3 = document.createElement("p");
collectionsSecondCaptionSubTitle3.setAttribute("class","collectionsSecond__image--captionSubTitle");
collectionsSecondCaptionSubTitle3.classList.add("pt-3")
collectionsSecondCaptionSubTitle3.innerText = "Crepe Saree";
collectionsSecondCaptionSubTitle3.style.color = "#bbbdbf"
collectionsSecondCaptionSubTitle3.style.fontSize = "14px"
collectionsSecondCaptionSubTitle3.style.fontWeight = "400"

var collectionsSecondCaptionTitle3 = document.createElement("p");
collectionsSecondCaptionTitle3.setAttribute("class","collectionsSecond__image--captionTitle");
collectionsSecondCaptionTitle3.classList.add("text-center");
collectionsSecondCaptionTitle3.innerText = "Dark Blue Crepe Saree";
collectionsSecondCaptionTitle3.style.fontSize = "18px"
collectionsSecondCaptionTitle3.style.fontWeight = "300"

var collectionsSecondCaptionPrice3 = document.createElement("p");
collectionsSecondCaptionPrice3.setAttribute("class","collectionsSecond__image--captionPrice");
collectionsSecondCaptionPrice3.innerText = "BUY NOW";
collectionsSecondCaptionPrice3.style.fontSize = "16px";
collectionsSecondCaptionPrice3.style.fontWeight = "600"
collectionsSecondImageContainer3.append(collectionsSecondCaptionSubTitle3,collectionsSecondCaptionTitle3,collectionsSecondCaptionPrice3);

var collectionsSecondCol4 = document.createElement("div");
collectionsSecondCol4.setAttribute("class","col-6");
collectionsSecondCol4.classList.add("col-md-3","mb-3","mb-md-0")
collectionsSecondRow.append(collectionsSecondCol4);

var collectionsSecondImageContainer4 = document.createElement("div");
collectionsSecondImageContainer4.setAttribute("class","collectionsSecond__image-container");
collectionsSecondImageContainer4.classList.add("d-flex","flex-column","justify-content-center","align-items-center");
collectionsSecondImageContainer4.style.width = "100%";
collectionsSecondImageContainer4.style.height = "100%";
collectionsSecondImageContainer4.style.position = "relative"
collectionsSecondImageContainer4.style.boxShadow = "0 3px 40px rgb(0 0 0 / 20%)"
collectionsSecondImageContainer4.style.backgroundColor = "#fcfdff"
collectionsSecondCol4.append(collectionsSecondImageContainer4);

var collectionsSecondSaleCard = document.createElement("div");
collectionsSecondSaleCard.setAttribute("class","collectionsSecond__sale-card");
collectionsSecondSaleCard.innerText = "SALE!"
collectionsSecondSaleCard.style.position = "absolute";
collectionsSecondSaleCard.style.top = "20px";
collectionsSecondSaleCard.style.left = "20px";
collectionsSecondSaleCard.style.fontSize = "14px";
collectionsSecondSaleCard.style.backgroundColor = "white";
collectionsSecondSaleCard.style.padding = "5px"
collectionsSecondSaleCard.style.fontWeight = "600"
collectionsSecondImageContainer4.append(collectionsSecondSaleCard)

var collectionsSecondImage4 = document.createElement('img');
collectionsSecondImage4.setAttribute("class","collectionsSecond__image");
collectionsSecondImage4.setAttribute("src","./images/collection2/collectionsSecond-card__image4.webp");
collectionsSecondImage4.style.width = "100%";
collectionsSecondImage4.style.height = "100%";
collectionsSecondImageContainer4.append(collectionsSecondImage4);

var collectionsSecondCaptionSubTitle4 = document.createElement("p");
collectionsSecondCaptionSubTitle4.setAttribute("class","collectionsSecond__image--captionSubTitle");
collectionsSecondCaptionSubTitle4.classList.add("pt-3")
collectionsSecondCaptionSubTitle4.innerText = "Crepe Saree";
collectionsSecondCaptionSubTitle4.style.color = "#bbbdbf"
collectionsSecondCaptionSubTitle4.style.fontSize = "14px"
collectionsSecondCaptionSubTitle4.style.fontWeight = "400"

var collectionsSecondCaptionTitle4 = document.createElement("p");
collectionsSecondCaptionTitle4.setAttribute("class","collectionsSecond__image--captionTitle");
collectionsSecondCaptionTitle4.classList.add("text-center");
collectionsSecondCaptionTitle4.innerText = "Dark Blue Crepe Saree";
collectionsSecondCaptionTitle4.style.fontSize = "18px"
collectionsSecondCaptionTitle4.style.fontWeight = "300"

var collectionsSecondCaptionPrice4 = document.createElement("p");
collectionsSecondCaptionPrice4.setAttribute("class","collectionsSecond__image--captionPrice");
collectionsSecondCaptionPrice4.innerText = "BUY NOW";
collectionsSecondCaptionPrice4.style.fontSize = "16px";
collectionsSecondCaptionPrice4.style.fontWeight = "600"
collectionsSecondImageContainer4.append(collectionsSecondCaptionSubTitle4,collectionsSecondCaptionTitle4,collectionsSecondCaptionPrice4);

/* footer */

var footer = document.createElement("footer");
footer.style.padding = "7% 7% 10px 7%";
footer.style.marginTop = "20px";
footer.style.backgroundColor = "black";
footer.style.color = "white";

var footerRow1 = document.createElement("div");
footerRow1.setAttribute("class","row");
footer.append(footerRow1);

var footerCol1 = document.createElement("div");
footerCol1.setAttribute("class","col-12");
footerCol1.classList.add("col-sm-6","col-lg-3","mb-2","mb-lg-0")
footerRow1.append(footerCol1);

var footerCol1Heading = document.createElement("h5");
footerCol1Heading.setAttribute("class","footer__headings");
footerCol1Heading.innerText = "IN Progress";
footerCol1Heading.style.fontWeight = "700";

var footerCol1Text1 = document.createElement("p");
footerCol1Text1.setAttribute("class","footer__text");
footerCol1Text1.innerText = "About Us"

var footerCol1Text2 = document.createElement("p");
footerCol1Text2.setAttribute("class","footer__text");
footerCol1Text2.innerText = "Sarees"

var footerCol1Text3 = document.createElement("p");
footerCol1Text3.setAttribute("class","footer__text");
footerCol1Text3.innerText = "Churidars"

var footerCol1Text4 = document.createElement("p");
footerCol1Text4.setAttribute("class","footer__text");
footerCol1Text4.innerText = "Blouses"

var footerCol1Text5 = document.createElement("p");
footerCol1Text5.setAttribute("class","footer__text");
footerCol1Text5.innerText = "Collections"
footerCol1.append(footerCol1Heading,footerCol1Text1,footerCol1Text2,footerCol1Text3,footerCol1Text4,footerCol1Text5);

var footerCol2 = document.createElement("div");
footerCol2.setAttribute("class","col-12");
footerCol2.classList.add("col-sm-6","col-lg-3","mb-2","mb-lg-0")
footerRow1.append(footerCol2);

var footerCol2Heading = document.createElement("h5");
footerCol2Heading.setAttribute("class","footer__headings");
footerCol2Heading.innerText = "Policies";
footerCol2Heading.style.fontWeight = "700";

var footerCol2Text1 = document.createElement("p");
footerCol2Text1.setAttribute("class","footer__text");
footerCol2Text1.innerText = "Shipping Policy"

var footerCol2Text2 = document.createElement("p");
footerCol2Text2.setAttribute("class","footer__text");
footerCol2Text2.innerText = "Privacy Policy"

var footerCol2Text3 = document.createElement("p");
footerCol2Text3.setAttribute("class","footer__text");
footerCol2Text3.innerText = "Refund Policy"

var footerCol2Text4 = document.createElement("p");
footerCol2Text4.setAttribute("class","footer__text");
footerCol2Text4.innerText = "Returns Policy"

var footerCol2Text5 = document.createElement("p");
footerCol2Text5.setAttribute("class","footer__text");
footerCol2Text5.innerText = "Terms&Conditions"
footerCol2.append(footerCol2Heading,footerCol2Text1,footerCol2Text2,footerCol2Text3,footerCol2Text4,footerCol2Text5);

var footerCol3 = document.createElement("div");
footerCol3.setAttribute("class","col-12");
footerCol3.classList.add("col-sm-6","col-lg-3","mb-2","mb-lg-0")
footerRow1.append(footerCol3);

var footerCol3Heading = document.createElement("h5");
footerCol3Heading.setAttribute("class","footer__headings");
footerCol3Heading.innerText = "Let Us Help You";
footerCol3Heading.style.fontWeight = "700";

var footerCol3Text1 = document.createElement("p");
footerCol3Text1.setAttribute("class","footer__text");
footerCol3Text1.innerText = "Help/FAQ"

var footerCol3Text2 = document.createElement("p");
footerCol3Text2.setAttribute("class","footer__text");
footerCol3Text2.innerText = "Store Locator"

var footerCol3Text3 = document.createElement("p");
footerCol3Text3.setAttribute("class","footer__text");
footerCol3Text3.innerText = "Order Tracking"

var footerCol3Text4 = document.createElement("p");
footerCol3Text4.setAttribute("class","footer__text");
footerCol3Text4.innerText = "Blogs"

var footerCol3Text5 = document.createElement("p");
footerCol3Text5.setAttribute("class","footer__text");
footerCol3Text5.innerText = "Collections"
footerCol3.append(footerCol3Heading,footerCol3Text1,footerCol3Text2,footerCol3Text3,footerCol3Text4,footerCol3Text5);

var footerCol4 = document.createElement("div");
footerCol4.setAttribute("class","col-12");
footerCol4.classList.add("col-sm-6","col-lg-3","mb-2","mb-lg-0")
footerRow1.append(footerCol4);

var footerCol4Heading = document.createElement("h5");
footerCol4Heading.setAttribute("class","footer__headings");
footerCol4Heading.innerText = "Get in Touch";
footerCol4Heading.style.fontWeight = "700";

var footerCol4Text1 = document.createElement("p");
footerCol4Text1.setAttribute("class","footer__text");
footerCol4Text1.innerText = "Email: shop@seematti.com"

var footerCol4Text2 = document.createElement("p");
footerCol4Text2.setAttribute("class","footer__text");
footerCol4Text2.innerText = "Call Us:  +91 9847434500"

var footerCol4Text3 = document.createElement("p");
footerCol4Text3.setAttribute("class","footer__text");
footerCol4Text3.innerText = "+91 484 235 3523"

var footerCol4Text4 = document.createElement("p");
footerCol4Text4.setAttribute("class","footer__text");
footerCol4Text4.innerText = " / 411 2233"

var footerCol4Text5 = document.createElement("p");
footerCol4Text5.setAttribute("class","footer__text");
footerCol4Text5.innerText = "Collections"
footerCol4.append(footerCol4Heading,footerCol4Text1,footerCol4Text2,footerCol4Text3,footerCol4Text4,footerCol4Text5);

var footerCol5 = document.createElement("div");
footerCol5.setAttribute("class","col-12");
footerRow1.append(footerCol5);

var footerCol5Heading = document.createElement("h5");
footerCol5Heading.setAttribute("class","footer__headings");
footerCol5Heading.classList.add("border-top","border-white","py-3");
footerCol5Heading.innerText = "Popular Searches";
footerCol5Heading.style.fontWeight = "700";

var footerCol5Text1 = document.createElement("p");
footerCol5Text1.setAttribute("class","footer__text");
footerCol5Text1.classList.add("text-secondary");
footerCol5Text1.innerText = "sarees | silk saree | banarasi saree | cotton saree | party wear saree | linen sarees | soft silk sarees | wedding sarees | black saree | kancheepuram sarees | banarasi silk saree | bridal saree | red saree | violet saree | white sarees | yellow sarees | orange sarees | rani pink sarees | green saree | blue saree | pink saree | gold colour saree | plain border saree"

var footerCol5Text2 = document.createElement("p");
footerCol5Text2.setAttribute("class","footer__text");
footerCol5Text2.classList.add("pt-3","text-secondary");
footerCol5Text2.classList.add("text-secondary");
footerCol5Text2.innerText = " 2025 Seematti. All Rights Reserved. Powered by BBP India Communications."
footerCol5.append(footerCol5Heading,footerCol5Text1,footerCol5Text2);

document.body.append(banner,nav,container,footer);