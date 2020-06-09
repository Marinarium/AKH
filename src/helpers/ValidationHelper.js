export class ValidationInput {
    constructor( rules = [], isValid = true, value = "", validationMessage = []){
        this.rules = rules;
        this.isValid = isValid;
        this.value = value;        
        this.validationMessage = validationMessage;
    }
}

export class Rule {
    constructor(type, message){
        this.type = type;
        this.parameter = "";
        this.message = message;
        this.isValid = true;
    }
}

export const TypeOfRule = {
    REQUIRED:"REQUIRED",
    REGEX:"REGEX"

}

export function ValidateInput(input) {
    if(input instanceof ValidationInput) {
        input.isValid = true
        input.validationMessage = []
        input.rules.forEach((rule) => {
            let result = ValidateRule(rule, input.value)
            if(!result){
                input.isValid = false;
                input.validationMessage.push(rule.message);
            }
        })
        return input;
    }
}

export function ValidateRule(rule, value) {
    if(rule instanceof Rule) {
        switch(rule.type) {
            case  TypeOfRule.REQUIRED:
                if(value) {
                    rule.isValid = true;
                    return true;
                } else {
                    rule.isValid = false;
                    return false;
                }
            case TypeOfRule.REGEX:
                if(rule.parameter){
                    return value.match(rule.parameter);
                } else {
                    console.log("required parameter")
                    return false;
                }
            default:
                console.log("Unexpected type of rule: " + rule.type)
        }
    }
}

export function ValidateState(state) {
    let inputs = [];
    for (const property in state) {
        if(state[property] instanceof ValidationInput) {
            const result = ValidateInput(state[property]);
            inputs.push(result);
            state[property] = result;
        }
    }
    const isValid = inputs.every((item) => {
        return item.isValid;
    })
    return {state, isValid};
}