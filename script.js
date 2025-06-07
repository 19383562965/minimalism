const apps = document.querySelectorAll(".app");
const containers = document.getElementById("containers");

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

function greet(appInformation) {
  appInformation.style.transition = "0s"
  appInformation.style.right = "-50%";
  setTimeout(() => {
    appInformation.style.transition = "1s"
    appInformation.style.right = "1.5%";
    containers.style.width = "51%";
  }, 100);
}

blankSpacesLauncher.onclick= function() {
  greet(appInformation);
  nameOfTheApp.textContent = "Blank Spaces Launcher"
  appIcon.src = "https://cdn.prod.website-files.com/62242a0228953e3b9e573176/62d499bf49ba537f3fe58d31_BlankLogo.png"
  imgOne.src = "https://cdn.prod.website-files.com/66ee7cba437bd4e8ea3336b7%2F66ee9c7bfd5fecee18827b58_HeroAnimation-poster-00001.jpg";
  imgTwo.src = "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/dc/dd/cf/dcddcf03-9a6f-fca5-a958-0ec82ffacdbf/2.2_DE.png/300x0w.jpg";
  imgThree.src = "https://alfred.dailyweb.pl/wp-content/uploads/2025/01/4E9AA308-DC39-4C46-8429-D0170FD28864_1_102_o.jpeg";
}
notion.onclick= function() {
  greet(appInformation);
  nameOfTheApp.textContent = "Notion"
  appIcon.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/2048px-Notion-logo.svg.png"
  imgOne.src = "images/notion/1.png";
  imgTwo.src = "images/notion/2.png";
  imgThree.src = "images/notion/3.png";
}
notionCalendar.onclick= function() {
  greet(appInformation);
  nameOfTheApp.textContent = "Notion Calendar"
  appIcon.src = "https://play-lh.googleusercontent.com/ZpieHVHj503tx4YoFlsHOtjQ3edA9FE_yLocxpEecO0TQq0VcKbcsZ4fvjA9LzcRdmg"
  imgOne.src = "images/notion_calendar/1.png";
  imgTwo.src = "images/notion_calendar/2.png";
  imgThree.src = "images/notion_calendar/3.png";
}
syncTasks.onclick= function() {
  greet(appInformation);
  nameOfTheApp.textContent = "Sync Tasks"
  appIcon.src = "https://framerusercontent.com/images/NqG0uxvlTybyl30zzHZd7hThCsI.png"
  imgOne.src = "images/sync_tasks/1.png";
  imgTwo.src = "images/sync_tasks/2.png";
  imgThree.src = "images/sync_tasks/3.png";
}
opal.onclick= function() {
  greet(appInformation);
  nameOfTheApp.textContent = "Opal"
  appIcon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE3pKUOB4qwg-9YRUtndQlJEjfaf02PD_QDnb_D_gfXg3C2DHgaKBYer9afOmLmp21k0U&usqp=CAU"
  imgOne.src = "images/opal/1.png";
  imgTwo.src = "images/opal/2.png";
  imgThree.src = "images/opal/3.png";
}
dumbPhone.onclick= function() {
  greet(appInformation);
  nameOfTheApp.textContent = "Dumb Phone"
  appIcon.src = "https://dumbphone.so/static/images/logo.jpeg"
  imgOne.src = "https://media.invisioncic.com/y329496/monthly_2024_08/Dumb-Phone-App-For-iPhones-Remove-Digital-Clutter-5.jpg.a5cc3df326aab91bfe86d4adc0cbb6bf.jpg";
  imgTwo.src = "https://dumbphone.so/_next/image?url=%2Fstatic%2Fimages%2Ftestimonials%2Felliott.webp&w=828&q=75";
  imgThree.src = "https://dumbphone.so/_next/image?url=%2Fstatic%2Fimages%2Ftestimonials%2Feli.webp&w=828&q=75";
}
