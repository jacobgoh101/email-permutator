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
/*
["john@gmail.com",
"doe@gmail.com",
"johndoe@gmail.com",
"john.doe@gmail.com",
"jdoe@gmail.com",
"j.doe@gmail.com",
"johnd@gmail.com",
"john.d@gmail.com",
"jd@gmail.com",
"j.d@gmail.com",
"doejohn@gmail.com",
"doe.john@gmail.com",
"doej@gmail.com",
"doe.j@gmail.com",
"djohn@gmail.com",
"d.john@gmail.com",
"dj@gmail.com",
"d.j@gmail.com",
"john-doe@gmail.com",
"j-doe@gmail.com",
"john-d@gmail.com",
"j-d@gmail.com",
"doe-john@gmail.com",
"doe-j@gmail.com",
"d-john@gmail.com",
"d-j@gmail.com",
"john_doe@gmail.com",
"j_doe@gmail.com",
"john_d@gmail.com",
"j_d@gmail.com",
"doe_john@gmail.com",
"doe_j@gmail.com",
"d_john@gmail.com",
"d_j@gmail.com"]
*/

```

---

Forked from http://metricsparrow.com/toolkit/email-permutator/ with permission from the creator [Jesse Avshalomov](https://twitter.com/allforjesse?lang=en). Thanks Jesse !

Inspired by https://www.distilled.net/blog/miscellaneous/find-almost-anybodys-email-address/.
