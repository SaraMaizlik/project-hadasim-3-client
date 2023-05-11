import React from 'react';

const dateCoronaStart = new Date("17-11-2019");
const today = new Date().toISOString().substring(0, 10);

export function isValid(data) {
    if (!isValidText(data.member.firstName))
        return false;
    if (!isValidText(data.member.lastName))
        return false;
    if (!isValidIsraeliID(data.member.personalID))
        return false;
    if (!isvalidDate(data.member.birthDate, today))
        return false;
    if (!isValidIsraeliPhoneNumber(data.member.phone))
        return false;
    if (!isValidIsraeliPhoneNumber(data.member.cellPhone))
        return false;
    if (!isvalidDate(data.member.positiveDate))
        return false;
    if (!isvalidRecoveryDate(data.member.recoveryDate, data.member.positiveDate))
        return false;
    if (!isValidText(data.address.city))
        return false;
    if (!isValidText(data.address.street))
        return false;
    if (!isValidHouseNumber(data.address.houseNumber))
        return false;
    if (!isvalidDate(data.vaccine.receivingDate1))
        return false;
        if (!isvalidDate(data.vaccine.receivingDate2))
        return false;
        if (!isvalidDate(data.vaccine.receivingDate3))
        return false;
        if (!isvalidDate(data.vaccine.receivingDate4))
        return false;
    return true;
}


//  מחרוזת קלט חייבת להכיל רק אותיות, אורך הקלט חייב להיות לפחות 2 תווים
function isValidText(text) {
    const hebrewLettersRegex = /[\u0590-\u05FF]/; // תבנית לזיהוי תווים עבריים באמצעות טווח קוד המקורי שלהם ביוניקוד 
    if (text.length < 2 || text.length > 25) { // אורך השם חייב להיות בטווח 2-25 תווים
        return false;
    }
    if (!hebrewLettersRegex.test(text)) { // השם חייב להכיל תווים עבריים בלבד
        return false;
    }
    if (!/^[\u0590-\u05FF]+$/i.test(text)) { // השם יכול לכלול רק אותיות עבריות, ומפרידי מילים
        return false;
    }
    return true;
}


function isValidIsraeliID(id) {
    // מספר תעודת זהות ישראלית חייב להכיל 9 ספרות וספרת ביקורת
    const idRegex = /^[1-9]\d{8}$/;
    if (!idRegex.test(id)) {
        return false;
    }
    // חישוב ספרת ביקורת
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        let digit = parseInt(id.charAt(i));
        if (i % 2 === 0) {
            digit *= 1;
        } else {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
    }
    return sum % 10 === 0;
}

// פלאפון ישראלי חייב להתחיל בספרה 05 ולהכיל 10 ספרות
function isValidIsraeliPhoneNumber(phoneNumber) {
    const phoneRegex = /^05\d([-]{0,1})\d{7}$/;
    return phoneRegex.test(phoneNumber);
}

// תאריך לא עתידי
function isvalidDate(date) {
    return date <= today
}

// תאריך החלמה אחרי הדבקה ולא עתידי
function isvalidRecoveryDate(date, posDate) {
    return date <= today && date >= posDate
}

function isValidHouseNumber(number) {
    return number > 0
}




