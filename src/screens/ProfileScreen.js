import React from 'react';
import Nav from "../Nav";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import "./ProfileScreen.css";

function ProfileScreen() {
    const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
        <Nav />
        <div className="profileScreen__body">
            <h1>Edit Profile</h1>
            <div className="profileScreen__info">
                <img
                 src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                 alt="" 
                 />
                <div className="profileScreen__details">
                    <h2>{ user.email }</h2>
                    <div className="profileScreen__plans">
                        <h3>Plans</h3>
                        <h2>Renewal date: 08/12/2022</h2>

                        <div className="plans__list">
                            <div className="plans__row">
                                <div>
                                <h2>Netflix Standard</h2>
                                <h3>1080p</h3>
                                </div>

                                <button>Subscribe</button>
                            </div>
                            <div className="plans__row">
                                <div>
                                <h2>Netflix Basic</h2>
                                <h3>480p</h3>
                                </div>

                                <button>Subscribe</button>
                            </div>
                            <div className="plans__row">
                                <div>
                                <h2>Netflix Premium</h2>
                                <h3>4K+HDR</h3>
                                </div>

                                <button className='bg__gray'>Current Package</button>
                            </div>
                        </div>

                        <button onClick={() => auth.signOut()}
                         className='profileScreen__signOut'>
                         Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen