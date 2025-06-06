const apps = document.querySelectorAll(".app");

const blankSpacesLauncher = document.getElementById("blank-spaces-launcher");
const notion = document.getElementById("notion");
const notionCalendar = document.getElementById("notion-calendar");
const syncTasks = document.getElementById("sync-tasks");
const opla = document.getElementById("opal");
const dumbPhone = document.getElementById("dumb-phone");

const appInformation = document.getElementById("app-information");

const appIcon = document.getElementById("app-icon");

const nameOfTheApp = document.getElementById("name-of-the-app");

const imgOne = document.getElementById("app-information-img-one");
const imgTwo = document.getElementById("app-information-img-two");
const imgThree = document.getElementById("app-information-img-three");

blankSpacesLauncher.onclick= function() {
  appInformation.style.right = "1.5%";
  nameOfTheApp.textContent = "Blank Spaces Launcher"
  appIcon.src = "https://cdn.prod.website-files.com/62242a0228953e3b9e573176/62d499bf49ba537f3fe58d31_BlankLogo.png"
  imgOne.src = "images/blank_spaces_launcher/1.png";
  imgTwo.src = "images/blank_spaces_launcher/2.png";
  imgThree.src = "images/blank_spaces_launcher/3.png";
}
notion.onclick= function() {
  appInformation.style.right = "1.5%";
  nameOfTheApp.textContent = "Notion"
  appIcon.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/2048px-Notion-logo.svg.png"
  imgOne.src = "images/notion/1.png";
  imgTwo.src = "images/notion/2.png";
  imgThree.src = "images/notion/3.png";
}
notionCalendar.onclick= function() {
  appInformation.style.right = "1.5%";
  nameOfTheApp.textContent = "Notion Calendar"
  appIcon.src = "https://play-lh.googleusercontent.com/ZpieHVHj503tx4YoFlsHOtjQ3edA9FE_yLocxpEecO0TQq0VcKbcsZ4fvjA9LzcRdmg"
  imgOne.src = "images/notion_calendar/1.png";
  imgTwo.src = "images/notion_calendar/2.png";
  imgThree.src = "images/notion_calendar/3.png";
}
syncTasks.onclick= function() {
  appInformation.style.right = "1.5%";
  nameOfTheApp.textContent = "Sync Tasks"
  appIcon.src = "https://framerusercontent.com/images/NqG0uxvlTybyl30zzHZd7hThCsI.png"
  imgOne.src = "images/sync_tasks/1.png";
  imgTwo.src = "images/sync_tasks/2.png";
  imgThree.src = "images/sync_tasks/3.png";
}
opal.onclick= function() {
  appInformation.style.right = "1.5%";
  nameOfTheApp.textContent = "Opal"
  appIcon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE3pKUOB4qwg-9YRUtndQlJEjfaf02PD_QDnb_D_gfXg3C2DHgaKBYer9afOmLmp21k0U&usqp=CAU"
  imgOne.src = "images/opal/2.png";
  imgTwo.src = "images/opal/1.png";
  imgThree.src = "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/11/img_6340.PNG";
}
dumbPhone.onclick= function() {
  appInformation.style.right = "1.5%";
  nameOfTheApp.textContent = "Dumb Phone"
  appIcon.src = "https://dumbphone.so/static/images/logo.jpeg"
  imgOne.src = "images/dumb_phone/2.png";
  imgTwo.src = "images/dumb_phone/1.png";
  imgThree.src = "images/dumb_phone/3.png";
}
