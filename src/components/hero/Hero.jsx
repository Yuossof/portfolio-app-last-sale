import React from "react";
import "./hero.css";

//MUI ICON
import VerifiedIcon from "@mui/icons-material/Verified";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
//MUI ICON
import Lottie from "lottie-react";

import animationComputer from '../../../public/animation/computerAnimat.json'
const Hero = () => {
  return (
    <div className="hero">
      <div className="left-section-av-p">
        <div className="parent-avatar">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAqgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgABB//EADYQAAICAgEDAgQDBwIHAAAAAAECAAMEESEFEjFBUQYTYXEUIpEHIzJCUoGhseEzNERigtHx/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAHxEBAQACAwEBAQEBAAAAAAAAAAECEQMhMUEiE2ES/9oADAMBAAIRAxEAPwDIqsKongEIolUUkEOg3IIsYRZmehYLKuFCg7AjIWUXxDf22LUPbmC+DPVlWyN80ro7cED+0qcyqxHLAkH39/8AeD6fkuLdMD2t5mhNCGv5pUOCNH3E512YyLLDWC+nOuTrkfeIAGx9AGX+Vh0XPtbFrG/DAAD+8XeinF3oq2/XW/0MbZVU9JTyefaD9OIW4szkliefUwJhZGegkHYOiJ2p5Cy56X1qyllqym7qydd39M0ykOgZSCDyCJgJqfhzNSzF/DE/vE8fURpSZT6s3EWcRt4B45CrCCaGeBeAQmkJJpGZjYEKqzxVhlEbRdp1rDqsjWuhDKIGcBMz1kfOz3G/4dCaoLM31Kor1OwsPykfpFz8Ph3Vj8JdGrzr2ssX9ynHI8mbS/oNT1fuNIdfw62DF/hHHWrCQKBzyZqK0nJa7JOnznqnw9Z4VfroeJSnoeYe5e1tHxvc+u5FBYcquvcxJ8VBvYH6QXKw0wxr5YPhjMJ7nGlnj/D5Tu3s6n0u5F7CND9JUZNS95Ohowf0pv54vnWR016+da1EXqIJm26pjAqSo0Jl8msKW41K45Wo54SeK3Woz0yw151JBPLgQDQ/ThvPoH/eJWIts4gHEaceYvYJVEpZFn48xqzjmLWkGAQGkN/WScwW5hkXCiGReRIqIVBGTGQQqiDSGWZkgJn+varzK98hwP8AE0WpT9Zx/wARnYCf1v2RM/FOO/ptPhn/AJJGHqNzRpKTBSvFpSqvhVHEeXNq2V+Yux5G5xS7d9hy5yo4iFtoY8x9CrpvfGojlU65UzZDjonaN7IlZloUPPqOJcFO1d7lR1O0FSNjYiH2zvU7tL2759Zl+oHRIHvL3qelbZYTOZThmOjL4Rz8mXZR/Ma6MofqeOD/AFxVuSZY/Da76vV9FY/4lo5617+IvZGnHEVslUoVt8ROyOW+InZMJd4KEsgoDRolEKgkVEMo8Rkk0EKsiohAJhSXUWz8dtY+UpBFF6EgfU6jQEnfz07I9wN/5kuW/lXhkuQ/VxmW2VVYlvykPLMBs/7ShysPModyuUqgebGfx9/b9Zu8anup7gv5yBqVS9IHz8r8aj2/OrZEtXn5Wx5A9/r5nNPXVlOmOxep9UxrdYvVVtA8oeQZuOl5uRm0KbgO8r6HYMzlfSbMfLybLwGd99qoulB+g9Bx4ms6RiLj41YHnyefX1gz/wANxzrdJ9VzFwKHa48Ab5nz/O6/lZVx+QQo3xqaT9pDFaqwCQrHX3mL6OEXMrZ9EKwJU/zQ8eM9ocmV3pC8W2NvJydH286i1lJClkcOv08zV9cxfxuUcmsarIJ7AP4d8n23z7zNmtktPapA8c+stuI2X6SH1jXS804F7XqoZtdqg+IGxdMYJYSab7HvGTi13Aa713r2g7J50ytqum46OPzBORJWSsRJ2+InZHbfETthEsRttGR7ROs4g9n3gNpp1EOggkEOojJCKJMCRUQgEFZ6BCL2/hMlG/mUAfrIAQlSBxZWTrvrYA/XUXkn5U4rrKNTgDdQ+0drTtG/Mreh2/Nw6n3vaiWy+JyR21XZGMt1ne3AE8/Kg0vpHbB+UjxK4KzOd+NxMr2pixX7RyXroO/DTEYj9twM3/7R8f5WNWSR5nzpT2sDK8fiXJf1tssS8WUAE+ZXdQoXuLSHTbeBsw3UbQKz9oJ6N7jPZHFk7p6B8ylCNg2DiDubuYmWPw3X39UQ62FUn7S0c1a4/SL2CNEcCLWyyMKWjiJWiO2RS7QmEnYIHUZfxAbmNGqrhlEEgh0ENRTWEEiJMQCkBPG+kkBOYcTMsvhe3WL8vezWxU7mmrPEx3QGFPUMmk+HC2a/wf8ASakvpNgzjzmq9DC7xglhDHR5EocvEduoCwZ9lajWkVhrzyCPXcln9TsXuXGrLN7+0qb8PKvO7XCMx7vzMBqRva0ulH8fWZOUwqSstXUdswHAmMpTvOpvz029el3pn3JX+YnZfzMZk4n4e4Gt1Kk+QZbC9aRznezeKwqQKeDF86/vBA8QVhs7OR49Yozk+TGk7Lll1pA8nXvN30zDqxsVBXWqsygsQPMxnTaDk9QoqUbBcE/YHmfQV12y+Mc2dCcailscuPESt8xyQrbE7o64EWs0TMxB29IHvjWSABsRfY9oDRrq4ZYNBxCqI1STEIsgsKsApCezhPZmL2W/g8ujL8KD2WfY+D+s0q5CsmwdbmeuqW2tkcAqw1zEul5luFkjCzCxXf7qwnhh/wC5Dmx+ungy+VpLOmrmW97XPWBz+7OjuKZPSAmyTYWJ/wCKXLf/ACWdD7XanYguoU5d1TfhWHcR4M5ZXbOu2Wyem1asfJd3G+AX9Jj+oVJ88hE0v3muyujdTDbssXj1lR1Pp7VIO+wO2zsSmOULnblPFfdfSvThUFHeB5lM3vD5O12CdxQ/mOpaTTmyrTfCGCS75rg612px59zNTrQgcKtasSlEAChRwIZjxKxzW7oNviJ3LGrGithjNCVzEROxz6GN5A43EHMAg2sT5MDCOYLcFNG4TxJwSHQhAdx7UU1hRBCEWARFkpESQ8/eZnlhCVl2OlXkn2ErvhzJq+IW6hVcgNKsoqGuR55lD8U9aN7Ng4rfuhxYw/mPt9o/+zC0Ll51XhiqsP8ASS5L1p0cWGu6vmsyehErks1uKP4bdcr95Y4nX8XIpDV2Loj+8tcihMil0cAqw0QZksz4ZxBaexbKwf5q21o/bxObTplo3U+sUKpC2Lx5OpjOtdRFvKnz6y06j8MrShsTItI92MyOTV8tyoYkD1MbHGFyzugbrWsaRUaG5JVkmGhLItF8L9Xc2DByWJ3/AMJyfX2mmYjXM+Zo5rsDodMp2D7ETe4mYuXh1Xqf4l5+h9Y+NSzn0W1ovZJu+jzA2PHIWuPGpXWHzHMh+DEHbzAcJzA7k3MHuAzcLCrAKwA2ToRTJ61hYoO7RY4/lTmMlJb4tQYRTMlkfFFv/T0Kn1c7Mq8nqudkndmQ+j6KdD/EH/Uh5xZN3l9QxcJe7ItUeyjkn+0z3Uvik20vTh1FO8a+Yx5H9pmWLMdse4/UzuSdxLlVceKT10tPhXO/AddpsJ/K/wCRvsZWa4gwxRww4IO4lUvT73TYLKww8GeWIreRuZr4P6sMvBSt2/Oo1NKWGpIzOfEwcYLJRXtz4nzjJx3TfeOfWfWuodhrIOvHrMJ1+upCRWBs+0OIWbZtK9KTAMN7j1iFEA15i/yz3a95SF0TI5MNi52Th8Y9hUE7I9J5coV2HtAHzDCZReY3Xyfy5S/+SiPjJS5e6pwwmT3J12vWdo5U/SNslxaC9/TcUdonXnN4sG/qIYWrYNqRDtpHjGQ7pzmQm2I2Vn5WUdW2t2/0rwBFJ06LVZNOXne5wPM6dFZL0nAzp0wpekCfM9nTDk0fwdkW15narHRM+nBj2D7Tp0nl6MV2eT2NyZmb6Etu3YN8zp0DKTqqKucEUaUDxAZKKtlWh5ns6NC1UXndjk+8AfM6dKQmTydOnQleiS2R4Op06ZhUcsNGT3OnQg//2Q=="
            alt=""
            className="avatar"
          />
          <VerifiedIcon className="VerifiedIcon" />
        </div>
        <div className="cont-of-descrip">
          <div className="descrip">
            <h1>
            Passionate web developer <br />  creating ,seamless<br />  digital solutions
            </h1>
            <p>
            As a seasoned web developer, I blend creativity and precision to build captivating <br />
             online platforms.With a keen eye for detail and a passion for innovation,<br />
              I turn visions into functional realities, ensuring seamless user experiences.
            </p>
          </div>
          <div className="socialMedia">
            <a href="#"><XIcon /></a>
            <a href="#"><GitHubIcon /></a>
            <a href="#"><LinkedInIcon /></a>
            <a href="#"><InstagramIcon /></a>
          </div>
        </div>
      </div>
      <div className="right-section-animation-photo"><Lottie animationData={animationComputer} /></div>
    </div>
  );
};

export default Hero;
