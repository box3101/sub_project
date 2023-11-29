import express from "express";
import nodemailer from "nodemailer";
import cors from 'cors';
import bodyParser from "body-parser";

// Express 애플리케이션을 생성합니다.
const app = express();

app.use(cors()); // 모든 출처에서의 요청 허용

// JSON 형식의 요청 본문을 파싱하기 위해 body-parser 미들웨어를 사용합니다.
app.use(bodyParser.json()); // 요청 본문이 JSON 형식일 때 이를 파싱하여 JavaScript 객체로 변환

// '/send-email' 경로로 POST 요청이 들어오면 실행
app.post("/send-email", function (요청, 응답) {

	// nodemailer를 사용해 메일을 보내기 위한 보내는 사람 설정 
	let transporter = nodemailer.createTransport({
		host: "smtp.mail.nate.com", 
		port: 465, 
		secure: true, 
		auth: {
			user: "box4101@nate.com", 
			pass: "dkwltkfkd2",
		},
	});

   // 메일 옵션을 설정
	let mailOptions = {
		from: "box4101@nate.com",  // 발신자 주소
		to: "box3101@naver.com", // 수신자 주소
		subject: "contact 메일 테스트", // 메일 제목
		text: `Company: ${요청.body.company}, Name: ${요청.body.name}, Phone: ${요청.body.phone}, Email: ${요청.body.email}, Message: ${요청.body.message}`,
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			응답.status(500).send("Error22");
			console.log(error)
		} else {
			응답.status(200).send("Email Sent");
			console.log("!23");
		}
	});
});

app.listen(3000, function () {
	console.log("Server is running on port 3000");
});
