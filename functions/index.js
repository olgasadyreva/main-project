const functions = require("firebase-functions");
const nodemailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text').htmlToText;
const { email, password } = require('./config');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: password,
    }
});

transporter.use('compile', htmlToText());
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const sendOrderEmail = data => {
    const options = {
        from: `MRDonald's` <${email>},
        to: data.email,
        subject: `Ваш заказ из MRDonald's`,
        html: `
            <div>
                <h2>Добрый день ${data.nameClient}</h2>
                <h3>Ваш заказ:</h3>
                <ul>
                    ${database.order.map(({ itemName, count, price}) => (
                        `<li>${itemName} - ${count}шт., цена ${price * count} руб.</li>`
                    ))}
                </ul>
                <p>Итого: ${database.order.reduce((sum, item) => 
                    sum + (item.price * item.count), 0)} руб.</p>
                    <small>Ожидайте курьера.</small>
            </div>
        `,
    };

    transporter.sendMail(options);
}

eхports.sendUserEmail = functions.database.ref('orders/{pushID}')
.onCreate(order => sendOrderEmail(order.val()));
