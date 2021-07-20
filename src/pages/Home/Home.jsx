import React from 'react'
import styles from './Home.module.css'
import {Link,useHistory } from 'react-router-dom'
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';

const Home = () => {

    const signInLink={
        color:"#0077ff",
        fontWeight:"bold",
        textDecoration:"none",
        marginLeft:"10px"
 
    }

const history =useHistory()

    function startRegister(){
        history.push('/register')

    }




    return (

        <div className={styles.cardWrapper}>

            <Card title='welcome to codershouse' icon ='logo'>
            <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab incidunt in inventore libero numquam ducimus accusantium reprehenderit eum at sed.
            </p>
            <div>
            {/* <button>
                <span>Get your username</span>
                 <img src="images/arrow-forward.png" alt="arrow" />
             </button> */}
             <Button onClick={startRegister} text="Get your username" icon ="arrow-forward"></Button>
            </div>
            

            <div className={styles.signInWrapper}>
                <span className={styles.hasInvite}> have an invite text?</span>
                <Link style={signInLink} to="/login">SignIn</Link>
            </div>
            </Card>

       {/* <div className={styles.card}>
        < div className ={styles.headingWrapper}>
            <img src="/images/logo.png" alt="" />
            <h1 className={styles.heading}>Welcome to coders club</h1>
        </div>
            <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab incidunt in inventore libero numquam ducimus accusantium reprehenderit eum at sed.
            </p>
            <div>
                <button>
                <span>Get your username</span>
                 <img src="images/arrow-forward.png" alt="arrow" />
                </button>
            </div>
            

            <div>
                <span> have an invite text?</span>
                <Link to="/login">SignIn</Link>

            </div>
       

       </div> */}

       </div>
    )
}

export default Home
