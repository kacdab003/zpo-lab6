class VinputText {
  constructor(fieldId, validIcon, invalidIcon, validationMethod,validMsg,invalidMsg) {
    this.fieldId = fieldId;
    this.fieldElem = document.getElementById(fieldId);
    this.validIcon = document.getElementById(validIcon);
    this.invalidIcon = document.getElementById(invalidIcon);
    this.value = undefined;
    this.validationMethod = validationMethod;
    this.fieldElem.addEventListener("input", e => {
      const isValid = this.validate(e.target.value);
      if (isValid) {
        this.setValue(e.target.value);
      }
      this.toggleStyles(isValid);
    });
    this.toggleStyles(false);
    this.isValid = undefined;
    this.validIcon.title = validMsg
    this.invalidIcon.title = invalidMsg
    VinputText.allInstances.push(this);
  }

  setValue(value) {
    this.value = value;
  }
  getValue() {
    return this.value;
  }
  validate(value) {
    this.isValid = this.validationMethod(value);
    return this.validationMethod(value);
  }
  toggleStyles(validationResult) {
    const logInBtn = document.querySelector(".log-in");
    if (!validationResult) {
      this.validIcon.classList.add("hide");
      this.invalidIcon.classList.remove("hide");
      this.fieldElem.classList.remove("correct");
      this.fieldElem.classList.add("error");
      logInBtn.disabled = true;
    } else {
      this.validIcon.classList.remove("hide");
      this.invalidIcon.classList.add("hide");
      this.fieldElem.classList.remove("error");
      this.fieldElem.classList.add("correct");
      if (VinputText.allInstances.every(i => i.isValid)) {
        logInBtn.disabled = false;
      }
    }
  }
}
export default VinputText;
