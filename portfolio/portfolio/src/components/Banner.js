import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [" a Junior Front-end Web Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  const period = 300;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((loopNum) => loopNum + 1);
      setDelta(250);
    }
  };
    return (
        <section className="banner" id="home">
           <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                <span className="tagline">Bienvenue sur mon Portfolio</span>
                <h1>{`Hi! I'm Mickaël` }<span className="wrap"> {text} </span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatibus provident doloribus doloremque nemo quidem laudantium quia ipsa nam, explicabo nulla tempora, ea sed animi?</p>
                <button onClick={() =>console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt="Header Img" />
                </Col>
             </Row>
          </Container>
        </section>
    )
}