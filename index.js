// Checks nickName for existance and uniqueness against firstName
// When deciding whether or not to make email permutations with it.
function checkNN(formula) {
  if (nickName != "" && nickName != firstName) {
    emailOutput.push(formula);
  }
}

// Checks nickInitial for existance and uniqueness against firstInitial
// when deciding whether or not to make email permutations with it.
function checkNI(formula) {
  if (nickInitial != "" && nickInitial != firstInitial) {
    emailOutput.push(formula);
  }
}

// Checks that Middle Initial exists
function checkMidIn(formula) {
  if (middleInitial != "") {
    emailOutput.push(formula);
  }
}

// Checks that Middle Name Exists
function checkMidNam(formula) {
  if (middleName != "" && middleName != middleInitial) {
    emailOutput.push(formula);
  }
}

// Checks that nickInitial exists and != firstInitial, and that Middle Initial exists
function checkNIandMI(formula) {
  if (nickInitial != "" && nickInitial != firstInitial && middleInitial != "") {
    emailOutput.push(formula);
  }
}

// Checks that nickName exists and != firstName, and that Middle Initial Exists
function checkNNandMI(formula) {
  if (nickName != "" && nickName != firstName && middleInitial != "") {
    emailOutput.push(formula);
  }
}

// Checks that nickName exists and != firstName, and that Middle Name Exists and != middleInitial
function checkNNandMN(formula) {
  if (
    nickName != "" &&
    nickName != firstName &&
    middleName != "" &&
    middleName != middleInitial
  ) {
    emailOutput.push(formula);
  }
}

// Most Common Emails, including nickName and nickInitial Variations
// nickName versions check for existance
// nickInitial versions chck for existance and uniqueness against firstInitial
function commonEmails(theDomain) {
  emailEnder = "@" + theDomain;

  emailOutput.push(firstName + emailEnder); // First Name
  checkNN(nickName + emailEnder); // Nick Name
  emailOutput.push(lastName + emailEnder); // {ln}
  emailOutput.push(firstName + lastName + emailEnder); // {fn}{ln}
  checkNN(nickName + lastName + emailEnder); // {nn}{ln}
  emailOutput.push(firstName + "." + lastName + emailEnder); // {fn}.{ln}
  checkNN(nickName + "." + lastName + emailEnder); // {nn}.{ln}
  emailOutput.push(firstInitial + lastName + emailEnder); // {fi}{ln}
  checkNI(nickInitial + lastName + emailEnder); // {ni}{ln}
  emailOutput.push(firstInitial + "." + lastName + emailEnder); // {fi}.{ln}
  checkNI(nickInitial + "." + lastName + emailEnder); // {ni}.{ln}
  emailOutput.push(firstName + lastInitial + emailEnder); // {fn}{li}
  checkNN(nickName + lastInitial + emailEnder); // {nn}{li}
  emailOutput.push(firstName + "." + lastInitial + emailEnder); // {fn}.{li}
  checkNN(nickName + "." + lastInitial + emailEnder); // {nn}.{li}
  emailOutput.push(firstInitial + lastInitial + emailEnder); // {fi}{li}
  checkNI(nickInitial + lastInitial + emailEnder); // {ni}{li}
  emailOutput.push(firstInitial + "." + lastInitial + emailEnder); // {fi}.{li}
  checkNI(nickInitial + "." + lastInitial + emailEnder); // {ni}.{li}
}

// Email Permutations that begin with last names
function lessCommonEmails(theDomain) {
  emailEnder = "@" + theDomain;

  emailOutput.push(lastName + firstName + emailEnder); // {ln}{fn}
  checkNN(lastName + nickName + emailEnder); // {ln}{nn}
  emailOutput.push(lastName + "." + firstName + emailEnder); // {ln}.{fn}
  checkNN(lastName + "." + nickName + emailEnder); // {ln}.{nn}
  emailOutput.push(lastName + firstInitial + emailEnder); // {ln}{fi}
  checkNI(lastName + nickInitial + emailEnder); // {ln}{ni}
  emailOutput.push(lastName + "." + firstInitial + emailEnder); // {ln}.{fi}
  checkNI(lastName + "." + nickInitial + emailEnder); // {ln}.{ni}
  emailOutput.push(lastInitial + firstName + emailEnder); // {li}{fn}
  checkNN(lastInitial + nickName + emailEnder); // {li}{nn}
  emailOutput.push(lastInitial + "." + firstName + emailEnder); // {li}.{fn}
  checkNN(lastInitial + "." + nickName + emailEnder); // {li}.{nn}
  emailOutput.push(lastInitial + firstInitial + emailEnder); // {li}{fi}
  checkNI(lastInitial + nickInitial + emailEnder); // {li}{ni}
  emailOutput.push(lastInitial + "." + firstInitial + emailEnder); // {li}.{fi}
  checkNI(lastInitial + "." + nickInitial + emailEnder); // {li}.{ni}
}

// Emails that contain middle names and initials
function middleEmails(theDomain) {
  emailEnder = "@" + theDomain;

  checkMidIn(firstInitial + middleInitial + lastName + emailEnder); // {fi}{mi}{ln}
  checkNIandMI(nickInitial + middleInitial + lastName + emailEnder); // {ni}{mi}{ln}
  checkMidIn(firstInitial + middleInitial + "." + lastName + emailEnder); // {fi}{mi}.{ln}
  checkNIandMI(nickInitial + middleInitial + "." + lastName + emailEnder); // {ni}{mi}.{ln}
  checkMidIn(firstName + middleInitial + lastName + emailEnder); // {fn}{mi}{ln}
  checkNNandMI(nickName + middleInitial + lastName + emailEnder); // {nn}{mi}{ln}
  checkMidIn(firstName + "." + middleInitial + "." + lastName + emailEnder); // {fn}.{mi}.{ln}
  checkNNandMI(nickName + "." + middleInitial + "." + lastName + emailEnder); // {nn}.{mi}.{ln}
  checkMidNam(firstName + middleName + lastName + emailEnder); // {fn}{mn}{ln}
  checkNNandMN(nickName + middleName + lastName + emailEnder); // {nn}{mn}{ln}
  checkMidNam(firstName + "." + middleName + "." + lastName + emailEnder); // {fn}.{mn}.{ln}
  checkNNandMN(nickName + "." + middleName + "." + lastName + emailEnder); // {nn}.{mn}.{ln}
}

// Emails using dashes
function dashEmails(theDomain) {
  emailEnder = "@" + theDomain;

  emailOutput.push(firstName + "-" + lastName + emailEnder); // {fn}-{ln}
  checkNN(nickName + "-" + lastName + emailEnder); // {nn}-{ln}
  emailOutput.push(firstInitial + "-" + lastName + emailEnder); // {fi}-{ln}
  checkNI(nickInitial + "-" + lastName + emailEnder); // {ni}-{ln}
  emailOutput.push(firstName + "-" + lastInitial + emailEnder); // {fn}-{li}
  checkNN(nickName + "-" + lastInitial + emailEnder); // {nn}-{li}
  emailOutput.push(firstInitial + "-" + lastInitial + emailEnder); // {fi}-{li}
  checkNI(nickInitial + "-" + lastInitial + emailEnder); // {ni}-{li}
  emailOutput.push(lastName + "-" + firstName + emailEnder); // {ln}-{fn}
  checkNN(lastName + "-" + nickName + emailEnder); // {ln}-{nn}
  emailOutput.push(lastName + "-" + firstInitial + emailEnder); // {ln}-{fi}
  checkNI(lastName + "-" + nickInitial + emailEnder); // {ln}-{ni}
  emailOutput.push(lastInitial + "-" + firstName + emailEnder); // {li}-{fn}
  checkNN(lastInitial + "-" + nickName + emailEnder); // {li}-{nn}
  emailOutput.push(lastInitial + "-" + firstInitial + emailEnder); // {li}-{fi}
  checkNI(lastInitial + "-" + nickInitial + emailEnder); // {li}-{ni}
  checkMidIn(firstInitial + middleInitial + "-" + lastName + emailEnder); // {fi}{mi}-{ln}
  checkNIandMI(nickInitial + middleInitial + "-" + lastName + emailEnder); // {ni}{mi}-{ln}
  checkMidIn(firstName + "-" + middleInitial + "-" + lastName + emailEnder); // {fn}-{mi}-{ln}
  checkNNandMI(nickName + "-" + middleInitial + "-" + lastName + emailEnder); // {nn}-{mi}-{ln}
  checkMidNam(firstName + "-" + middleName + "-" + lastName + emailEnder); // {fn}-{mn}-{ln}
  checkNNandMN(nickName + "-" + middleName + "-" + lastName + emailEnder); // {nn}-{mn}-{ln}
}

// Emails using Underscores
function underscoreEmails(theDomain) {
  emailEnder = "@" + theDomain;

  emailOutput.push(firstName + "_" + lastName + emailEnder); // {fn}_{ln}
  checkNN(nickName + "_" + lastName + emailEnder); // {nn}_{ln}
  emailOutput.push(firstInitial + "_" + lastName + emailEnder); // {fi}_{ln}
  checkNI(nickInitial + "_" + lastName + emailEnder); // {ni}_{ln}
  emailOutput.push(firstName + "_" + lastInitial + emailEnder); // {fn}_{li}
  checkNN(nickName + "_" + lastInitial + emailEnder); // {nn}_{li}
  emailOutput.push(firstInitial + "_" + lastInitial + emailEnder); // {fi}_{li}
  checkNI(nickInitial + "_" + lastInitial + emailEnder); // {ni}_{li}
  emailOutput.push(lastName + "_" + firstName + emailEnder); // {ln}_{fn}
  checkNN(lastName + "_" + nickName + emailEnder); // {ln}_{nn}
  emailOutput.push(lastName + "_" + firstInitial + emailEnder); // {ln}_{fi}
  checkNI(lastName + "_" + nickInitial + emailEnder); // {ln}_{ni}
  emailOutput.push(lastInitial + "_" + firstName + emailEnder); // {li}_{fn}
  checkNN(lastInitial + "_" + nickName + emailEnder); // {li}_{nn}
  emailOutput.push(lastInitial + "_" + firstInitial + emailEnder); // {li}_{fi}
  checkNI(lastInitial + "_" + nickInitial + emailEnder); // {li}_{ni}
  checkMidIn(firstInitial + middleInitial + "_" + lastName + emailEnder); // {fi}{mi}_{ln}
  checkNIandMI(nickInitial + middleInitial + "_" + lastName + emailEnder); // {ni}{mi}_{ln}
  checkMidIn(firstName + "_" + middleInitial + "_" + lastName + emailEnder); // {fn}_{mi}_{ln}
  checkNNandMI(nickName + "_" + middleInitial + "_" + lastName + emailEnder); // {nn}_{mi}_{ln}
  checkMidNam(firstName + "_" + middleName + "_" + lastName + emailEnder); // {fn}_{mn}_{ln}
  checkNNandMN(nickName + "_" + middleName + "_" + lastName + emailEnder); // {nn}_{mn}_{ln}
}

function permute(data) {
  // Make sure the Array is empty, in case this is run multiple times
  emailOutput = [];

  // Put the form field data into variables
  firstName = data.firstName.trim().toLowerCase();
  firstInitial = firstName.charAt(0);
  lastName = data.lastName.trim().toLowerCase();
  lastInitial = lastName.charAt(0);
  nickName = data.nickName.trim().toLowerCase();
  nickInitial = nickName.charAt(0);
  middleName = data.middleName.trim().toLowerCase();
  middleInitial = middleName.charAt(0);
  domain1 = data.domain1.trim().toLowerCase();
  domain2 = data.domain2.trim().toLowerCase();
  domain3 = data.domain3.trim().toLowerCase();

  // Run each category of email permutation for each domain
  commonEmails(domain1);
  if (domain2 != "") {
    commonEmails(domain2);
  }
  if (domain3 != "") {
    commonEmails(domain3);
  }

  lessCommonEmails(domain1);
  if (domain2 != "") {
    lessCommonEmails(domain2);
  }
  if (domain3 != "") {
    lessCommonEmails(domain3);
  }

  middleEmails(domain1);
  if (domain2 != "") {
    middleEmails(domain2);
  }
  if (domain3 != "") {
    middleEmails(domain3);
  }

  dashEmails(domain1);
  if (domain2 != "") {
    dashEmails(domain2);
  }
  if (domain3 != "") {
    dashEmails(domain3);
  }

  underscoreEmails(domain1);
  if (domain2 != "") {
    underscoreEmails(domain2);
  }
  if (domain3 != "") {
    underscoreEmails(domain3);
  }

  return emailOutput;
}

module.exports = permute;