// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function
function submitForm(e){
    e.preventDefault()
    const form = document.forms[0];
    const colors = form.elements['colors'];
    const passwords = form.elements['password'];
    const week = form.elements['week'];
    const date = form.elements['date'];

    console.log(colors.value);
    console.log(passwords.value);
    console.log(week.value)
    console.log(date.value)
    alert(`Favorite color: ${colors.value} \n Password: ${passwords.value} \n You have chosen a week!: ${week.value} \n You have chosen a date!: ${date.value}`);
}