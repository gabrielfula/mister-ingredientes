import { AboutContent, LeftText, RightText } from "./styles";

export default function About() {
  return (
    <>
      <AboutContent>
        <LeftText>
          <div className="titlePlace">
            <div className="title">
              <p>
                O que torna
                <p>
                  a <strong>mister especial ?</strong>
                </p>
              </p>
            </div>
          </div>

          <div>
            <p className="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
              dolor adipisci quo! Doloremque, magni esse consectetur neque est
              et odio blanditiis maxime minus deleniti distinctio dolorum
              necessitatibus culpa veritatis commodi?
            </p>
          </div>
          <div>
            <button>Entre Em Contato Conosco</button>
          </div>
        </LeftText>

        <RightText>
          <p>Oi</p>
        </RightText>
      </AboutContent>
    </>
  );
}
