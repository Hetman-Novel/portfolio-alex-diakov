// Найти три элемента с разными классами
var element1 = document.querySelector('.comment-form-author');
var element2 = document.querySelector('.comment-form-email');
var element3 = document.querySelector('.comment-form-url');
var parentElement = document.createElement('div');
parentElement.classList.add('wrap-comment-fields');
if (element1) {
   parentElement.appendChild(element1.cloneNode(true));
   element1.parentNode.insertBefore(parentElement, element1);
   element1.remove();
}
if (element2) {
   parentElement.appendChild(element2.cloneNode(true));
   element2.remove();
}
if (element3) {
   parentElement.appendChild(element3.cloneNode(true));
   element3.remove();
}

const el_author = document.querySelector('p.comment-form-author');
if (el_author) {
   const newEl_author = document.createElement('div');
   for (let i = 0; i < el_author.attributes.length; i++) {
      const attribute = el_author.attributes[i];
      newEl_author.setAttribute(attribute.name, attribute.value);
   }
   newEl_author.innerHTML = el_author.innerHTML;
   el_author.parentNode.replaceChild(newEl_author, el_author);
}

const el_email = document.querySelector('p.comment-form-email');
if (el_email) {
   const newEl_email = document.createElement('div');
   for (let i = 0; i < el_email.attributes.length; i++) {
      const attribute = el_email.attributes[i];
      newEl_email.setAttribute(attribute.name, attribute.value);
   }
   newEl_email.innerHTML = el_email.innerHTML;
   el_email.parentNode.replaceChild(newEl_email, el_email);
}

const el_website = document.querySelector('p.comment-form-url');
if (el_website) {
   const newEl_website = document.createElement('div');
   for (let i = 0; i < el_website.attributes.length; i++) {
      const attribute = el_website.attributes[i];
      newEl_website.setAttribute(attribute.name, attribute.value);
   }
   newEl_website.innerHTML = el_website.innerHTML;
   el_website.parentNode.replaceChild(newEl_website, el_website);
}

const el_comment = document.querySelector('p.comment-form-comment');
if (el_comment) {
   const newEl_comment = document.createElement('div');
   for (let i = 0; i < el_comment.attributes.length; i++) {
      const attribute = el_comment.attributes[i];
      newEl_comment.setAttribute(attribute.name, attribute.value);
   }
   newEl_comment.innerHTML = el_comment.innerHTML;
   el_comment.parentNode.replaceChild(newEl_comment, el_comment);
}

const el_cookies = document.querySelector('p.comment-form-cookies-consent');
if (el_cookies) {
   const newEl_cookies = document.createElement('div');
   for (let i = 0; i < el_cookies.attributes.length; i++) {
      const attribute = el_cookies.attributes[i];
      newEl_cookies.setAttribute(attribute.name, attribute.value);
   }
   newEl_cookies.innerHTML = el_cookies.innerHTML;
   el_cookies.parentNode.replaceChild(newEl_cookies, el_cookies);
}

const el_submit = document.querySelector('p.form-submit');
if (el_submit) {
   const newEl_submit = document.createElement('div');
   for (let i = 0; i < el_submit.attributes.length; i++) {
      const attribute = el_submit.attributes[i];
      newEl_submit.setAttribute(attribute.name, attribute.value);
   }
   newEl_submit.innerHTML = el_submit.innerHTML;
   el_submit.parentNode.replaceChild(newEl_submit, el_submit);
}

// Custom checkbox
// Находим элемент с идентификатором wp-comment-cookies-consent и добавляет после него <span class="custom-checkbox__box"></span>
const cookiesConsent = document.getElementById('wp-comment-cookies-consent');
if (cookiesConsent) {
   const customCheckbox = document.createElement('span');
   customCheckbox.className = 'custom-checkbox__box';
   cookiesConsent.insertAdjacentElement('afterend', customCheckbox);
}