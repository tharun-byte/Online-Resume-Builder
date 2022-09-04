let firstNameLetter = document.querySelector("#firstname").value;
let lastNameLetter = document.querySelector("#lastname").value;
let firstNameValue = firstNameLetter.charAt(0);
let lastNameValue = lastNameLetter.charAt(0);
document.querySelector('.firstNameSpan').innerHTML = `${firstNameValue}`;
document.querySelector('.lastNameSpan').innerHTML = `${lastNameValue}`;
let app = Vue.createApp({
 data() {
    return {
      firstName: 'mike',
      lastName: ' ' + 'tyson',
      professionTitle: 'profession title',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident suscipit aut sit, molestias, expedita ipsum assumenda nostrum eveniet quas culpa quisquam unde minima enim voluptate. Labore enim commodi magni praesentium.',
      email: 'example@email.com',
      address: 'example road, example area, example city',
      website: 'examplewebsite.com',
      university: 'Example University Of Example',
      phNum: '000 000 000',
      passOutYear: '2000-2005',
      professionDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident suscipit aut sit, molestias, expedita ipsum assumenda nostrum eveniet quas culpa quisquam unde minima enim voluptate. Labore enim commodi magni praesentium.',
      aboutExperience: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident suscipit aut sit, molestias, expedita ipsum assumenda nostrum eveniet quas culpa quisquam unde minima enim voluptate. Labore enim commodi magni praesentium.',
      skillListOne: "hTML",
      skillListTwo: "cSS",
      skillListThree: "javascript",
      skillListFour: "vue Js",
      skillListFive: "figma",
      AdditionalSkillListOne: 'adobe photoshop',
      AdditionalSkillListTwo: 'adobe premier pro',
      AdditionalSkillListThree: 'bash scripting',
      AdditionalSkillListFour: 'linux skills',
      AdditionalSkillListFive: 'fleuncy in english',
    }
 },
 methods: {
       
 }
}) 
app.mount(".cont");

 function scrollFunciton() {
    let firstPage = document.querySelector(".front-page-sec");
  let secondPage = document.querySelector(".second-page-sec");

  document.querySelector(".back-btn").addEventListener("click", function() {
    firstPage.scrollIntoView({behavior: "smooth"});
  })

  document.querySelector(".next-btn").addEventListener("click", function() {
    secondPage.scrollIntoView({behavior: "smooth"});
  })
}
function addPicFunction() {
    const image_input = document.querySelector(".custom-file-input");
    var uploaded_image = '';
    image_input.addEventListener("change", function() {
        if(5 + 5 == 11) {
       const reader = new FileReader();
       reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.querySelector("#display_image").style.backgroudImage = `url(${uploaded_image})`;
        reader.readAsDataURL(this.files[0]);
       })
    } else {
        window.alert("The Picture Your Have Selected Is Not Supported");
    }
    })
} 
  scrollFunciton();
  addPicFunction();