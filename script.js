function setACookieForMyGoal() {
	let dateForCookieName = new Date();
	let valueForMonthInNonArrayFormat = dateForCookieName.getMonth()+1;
	let cookieName =`${dateForCookieName.getFullYear()}-${valueForMonthInNonArrayFormat}-${dateForCookieName.getDate()}`;
	document.cookie = `${cookieName}=${document.getElementById("myGoal").value}; expires=Thu, 14 Feb 2030 00:00:00 GMT"`;
}

function displayMyGoalForToday(){
let dateToday = new Date();
let monthValueFor_dateToday_InNonArrayFormat = dateToday.getMonth()+1;
let dateTodayInDesiredFormat=`${dateToday.getFullYear()}-${monthValueFor_dateToday_InNonArrayFormat}-${dateToday.getDate()}`;
document.getElementById("myGoalForTodayH1").innerHTML = `Today my goal is to ${getCookieValue(dateTodayInDesiredFormat)}`;
}

// Resource used for the below function I just copied and pasted it becuase it was considered the shortest and most accurate way to retrieve a cookie. https://stackoverflow.com/questions/5639346/what-is-the-shortest-function-for-reading-a-cookie-by-name-in-javascript
const getCookieValue = (name) => (
  document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
);
// End of copied code


function myPreviousGoals () {
	let cookies = document.cookie;
	let arrayOfCookies = cookies.split("; ");
	let arrayOfCookiesMinusNames = arrayOfCookies.map(arrayValue => arrayValue.substr([arrayValue.indexOf("=")+1]));
	for (let i=arrayOfCookies.length-1; i>=0;i--) {
		let node = document.createElement("li");
		node.appendChild(document.createTextNode(arrayOfCookiesMinusNames[i]));
		document.querySelector('ul').appendChild(node);
		}
}