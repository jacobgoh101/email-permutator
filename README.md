Generate a list of emails based on a person's name and email domain.

---
### Usage

```
npm install email-permutator
```

```javascript
const permute = require('email-permutator');

// this will return an array consists of the list of permutated email address
permute({    
  firstName:'john',
  lastName:'doe',
  nickName:'',
  middleName:'',
  domain1:'gmail.com',
  domain2:'',
  domain3:'',
});

```

---

Forked from http://metricsparrow.com/toolkit/email-permutator/ with permission from the creator [Jesse Avshalomov](https://twitter.com/allforjesse?lang=en). Thanks Jesse !

Inspired by https://www.distilled.net/blog/miscellaneous/find-almost-anybodys-email-address/.
