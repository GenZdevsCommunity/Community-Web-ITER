
// list of all password toggle inputs
const passwordVisibiltyBtnList = document.querySelectorAll(".passwordVisibiltyBtn")

const focusedElements = { previous: null, current: null };
//  keep track of previous and current focused element
document.body.addEventListener('click', (e) => {
  focusedElements.previous = focusedElements.current
  focusedElements.current = document.activeElement
})

// add event listener to every password toggle input
passwordVisibiltyBtnList.forEach(element => {

  element.addEventListener('click',
    function passwordVisibile(event) {

      // [location of password input field]
      // !! it has been hardcoded TO make it flexible(can work
      // for any password field with the SAME node structure) but
      // it also makes it fragile to change in HTML elements/node.
      // make changes with CAUTION
      if (event.target.parentElement.parentElement.previousElementSibling.classList.contains("password-field")) {
        const passwordInput = event.target.parentElement.parentElement.previousElementSibling;

        if (event.target.checked) {
          passwordInput.type = "text";

          // ONLY triggers if it was previously in focus
          if (passwordInput === focusedElements.previous) {
            // focus function to retain focus after attribute change
            // (mainly to not close keyboard on phone after toggle)
            passwordInput.focus()
          }

        } else {
          passwordInput.type = "password";

          // ONLY triggers if it was previously in focus
          if (passwordInput === focusedElements.previous) {
            // focus function to retain focus after attribute change
            // (mainly to not close keyboard on phone after toggle)
            passwordInput.focus()
          }
        }
      }

      else {
        console.error("ERROR in location of password input field \ncheck previous comments and node structure on the html")
        console.error('make sure the password input field has class - \"password-field\" ')
      }

    }
  )

});
