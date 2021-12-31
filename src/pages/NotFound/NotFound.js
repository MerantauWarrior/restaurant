import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import PoweredBy from "../../components/PoweredBy/PoweredBy";
import Wrapper from "../../components/Wrapper/Wrapper";
import styles from "./NotFound.module.css";
import Text from "../../components/UI/Text/Text";
import Title from "../../components/UI/Title/Title";
import Button from "../../components/UI/Button/Button";
import Preloader from "../../components/UI/Preloader/Preloader";

function NotFound(props) {
  // delete on production
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setSpinner(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const navigate = useNavigate();
  const backHome = () => navigate('/', { replace: true });
  return (
    <Wrapper>
      <Header/>
      <Main>
        <div className={styles.error}>
          <div className={styles.title}>
            <Title>Page not found</Title>
          </div>
          <div className={styles.text}>
            <Text>The resource request could not be found on this server. Please try again.</Text>
          </div>
          <>
            <Button dark>Retry</Button>
            <Button light btnHandler={backHome}>Back to home screen</Button>
          </>
        </div>
        <PoweredBy/>
      </Main>
      {spinner ? <Preloader test/> : null}
    </Wrapper>
  );
}

export default NotFound;