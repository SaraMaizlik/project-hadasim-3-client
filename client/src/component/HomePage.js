import * as React from 'react';
import { sendMemberToServer } from "../Axios/accessServer";
import { isValid } from './ValidationTests.js';

const today = new Date().toISOString().substring(0, 10);

const LoginForm = () => {

    const [member, setMember] = React.useState({
        firstName: '',
        lastName: '',
        personalID: '',
        birthDate: today,
        phone: '',
        cellPhone: '',
        positiveDate: today,
        recoveryDate: today,
    });

    const [address, setAddress] = React.useState({
        city: '',
        street: '',
        houseNumber: 1,
    });

    const [vaccine, setVaccine] = React.useState({
        receivingDate1: today,
        receivingDate2: today,
        receivingDate3: today,
        receivingDate4: today,
    });

    const [manufacturer, setManufacturer] = React.useState({
        manufacturer1: "",
        manufacturer2: "",
        manufacturer3: "",
        manufacturer4: "",
    });

    const handleChange = (event) => {

        if (event.target.name == 'member') {
            setMember({
                ...member,
                [event.target.id]: event.target.value,
            })
        }
        else if (event.target.name == 'address') {
            setAddress({
                ...address,
                [event.target.id]: event.target.value
            })
        }
        else if (event.target.name == 'vaccine') {
            setVaccine({
                ...vaccine,
                [event.target.id]: event.target.value
            })
        }
        else if (event.target.name == 'manufacturer') {
            setManufacturer({
                ...manufacturer,
                [event.target.id]: event.target.value
            })
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isValid({ member, address, vaccine, manufacturer })) {
            
            // שליחה לפונקציה ששולחת למסד
            let res = await sendMemberToServer({
                member, address, vaccine, manufacturer
            })
            console.log(res);
        }
        else
            alert("יש למלא את כל השדות המסומנים בכוכבית ולוודא שכל הנתונים תקינים")       
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">שם פרטי*</label>
                <input
                    id="firstName"
                    name="member"
                    type="text"
                    value={member.firstName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="lastName">שם משפחה*</label>
                <input
                    id="lastName"
                    name="member"
                    type="text"
                    value={member.lastName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="personalID">תעודת זהות*</label>
                <input
                    id="personalID"
                    name="member"
                    type="text"
                    value={member.personalID}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="birthDate">תאריך לידה*</label>
                <input
                    id="birthDate"
                    name="member"
                    type="date"
                    value={member.birthDate}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="phone">טלפון*</label>
                <input
                    id="phone"
                    name="member"
                    type="text"
                    value={member.phone}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="cellPhone">טלפון נייד*</label>
                <input
                    id="cellPhone"
                    name="member"
                    type="text"
                    value={member.cellPhone}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="city">עיר מגורים*</label>
                <input
                    id="city"
                    name="address"
                    type="text"
                    value={address.city}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="street">רחוב*</label>
                <input
                    id="street"
                    name="address"
                    type="text"
                    value={address.street}
                    onChange={handleChange}
                />
            </div>
            <div >
                <label htmlFor="houseNumber">מספר בית*</label>
                <input
                    id="houseNumber"
                    name="address"
                    type="Number"
                    value={address.houseNumber}
                    onChange={handleChange}

                />
            </div>
            <div>
                <label htmlFor="positiveDate">מועד קבלת תוצאה חיובית</label>
                <input
                    id="positiveDate"
                    name="member"
                    type="date"
                    value={member.positiveDate}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="recoveryDate">מועד החלמה מהמחלה</label>
                <input
                    id="recoveryDate"
                    name="member"
                    type="date"
                    value={member.recoveryDate}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="receivingDate1">מועד קבלת חיסון 1</label>
                <input
                    id="receivingDate1"
                    name="vaccine"
                    type="date"
                    value={vaccine.receivingDate1}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="manufacturer1">יצרן 1</label>
                <input
                    id="manufacturer1"
                    name="manufacturer"
                    type="text"
                    value={manufacturer.manufacturer1}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="receivingDate2">מועד קבלת חיסון 2</label>
                <input
                    id="receivingDate2"
                    name="vaccine"
                    type="date"
                    value={vaccine.receivingDate2}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="manufacturer2">יצרן 2</label>
                <input
                    id="manufacturer2"
                    name="manufacturer"
                    type="text"
                    value={manufacturer.manufacturer2}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="receivingDate3">מועד קבלת חיסון 3</label>
                <input
                    id="receivingDate3"
                    name="vaccine"
                    type="date"
                    value={vaccine.receivingDate3}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="manufacturer3">יצרן 3</label>
                <input
                    id="manufacturer3"
                    name="manufacturer"
                    type="text"
                    value={manufacturer.manufacturer3}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="receivingDate4">מועד קבלת חיסון 4</label>
                <input
                    id="receivingDate4"
                    name="vaccine"
                    type="date"
                    value={vaccine.receivingDate4}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="manufacturer4">יצרן 4</label>
                <input
                    id="manufacturer4"
                    name="manufacturer"
                    type="text"
                    value={manufacturer.manufacturer4}
                    onChange={handleChange}
                />
            </div>

            <button type="submit">שמירה</button>
        </form>
    );
};

export default LoginForm;